"use client";

import type React from "react";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Facebook,
  MapPin,
  Phone,
  Code2,
  Trophy,
  Award,
  Cpu,
  Book,
  Briefcase,
  GraduationCap,
  ExternalLink,
  Star,
  GitFork,
  ChevronRight,
  Mail,
  ArrowRight,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

// Define interfaces
interface Project {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  forks_count: number;
}

interface SkillCategory {
  category: string;
  icon: React.ReactNode;
  skills: string[];
}

interface AchievementCardProps {
  position: string;
  event: string;
  team: string;
  highlight?: boolean;
}

interface HackathonCardProps {
  position: string;
  event: string;
  year: string;
  highlight?: boolean;
}

interface SkillBarProps {
  name: string;
  percentage: number;
}

const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    icon: <Code2 className="h-5 w-5" />,
    skills: ["js", "ts", "solidity", "cpp", "java", "python"],
  },
  {
    category: "Frontend",
    icon: <Cpu className="h-5 w-5" />,
    skills: ["react", "nextjs", "vite", "remix", "tailwind", "materialui"],
  },
  {
    category: "Backend",
    icon: <Cpu className="h-5 w-5" />,
    skills: ["nestjs", "express", "nodejs", "jest"],
  },
  {
    category: "Database",
    icon: <Cpu className="h-5 w-5" />,
    skills: ["mongodb", "mysql", "postgres", "sqlite", "firebase"],
  },
  {
    category: "Version Control & CI/CD",
    icon: <Github className="h-5 w-5" />,
    skills: ["git", "github"],
  },
  {
    category: "Tools & IDEs",
    icon: <Cpu className="h-5 w-5" />,
    skills: ["vscode", "postman"],
  },
];

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeSection, setActiveSection] = useState("hero");
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    fetch("https://api.github.com/users/outlander23/repos")
      .then((response) => response.json())
      .then((data: Project[]) => {
        const projectData: Project[] = data.map((repo) => ({
          name: repo.name,
          description: repo.description,
          html_url: repo.html_url,
          stargazers_count: repo.stargazers_count,
          language: repo.language,
          forks_count: repo.forks_count,
        }));

        const sortedProjects = projectData
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 4);

        setProjects(sortedProjects);
      })
      .catch((error: unknown) => {
        console.error("Error fetching GitHub repos:", error);
      });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      // Find the current active section
      let currentSection = "hero";
      Object.entries(sectionsRef.current).forEach(([section, ref]) => {
        if (ref && scrollPosition >= ref.offsetTop) {
          currentSection = section;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const truncateDescription = (description: string | null): string => {
    if (!description) return "No description available.";
    const words = description.split(" ");
    if (words.length > 10) {
      return words.slice(0, 10).join(" ") + " ...";
    }
    return description;
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95 selection:bg-primary/20 selection:text-primary">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-xl">Outlander</span>
              <Badge
                variant="outline"
                className="bg-primary/10 text-primary border-primary/30"
              >
                Developer
              </Badge>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              {["about", "skills", "profiles", "achievements", "projects"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`text-sm font-medium transition-colors hover:text-primary relative ${
                      activeSection === section
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                    {activeSection === section && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </button>
                )
              )}
            </nav>
            <Button size="sm" className="hidden md:flex">
              Contact Me
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Cpu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden"
        ref={(el) => (sectionsRef.current.hero = el)}
      >
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:32px_32px] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/5 via-background/50 to-background"></div>

        {/* Animated background elements */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="container relative mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="px-3 py-1 text-sm rounded-full border-primary/30 bg-primary/10 text-primary"
                  >
                    Expert @ Codeforces
                  </Badge>
                  <Badge
                    variant="outline"
                    className="px-3 py-1 text-sm rounded-full border-primary/30 bg-primary/10 text-primary"
                  >
                    ⭐⭐⭐⭐ @ Codechef
                  </Badge>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mt-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                  Outlander
                </h1>
                <h2 className="text-xl md:text-2xl text-muted-foreground mt-2">
                  Competitive Programmer & Full-Stack Developer
                </h2>
                <p className="text-muted-foreground max-w-md mt-4">
                  Pursuing B.Sc in Computer Science and Engineering at Begum
                  Rokeya University, Rangpur.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button className="group" size="lg" asChild>
                  <Link href="#achievements">
                    View Achievements
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#profiles">
                    CP Profiles
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden border border-border/40 shadow-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background/80 z-10"></div>
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="text-center space-y-6 p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                      3000+
                    </h3>
                    <p className="text-xl mt-1">Problems Solved</p>
                  </motion.div>

                  <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
                    {[
                      { count: "1200+", platform: "Codeforces" },
                      { count: "150+", platform: "CSES" },
                      { count: "150+", platform: "AtCoder" },
                      { count: "100+", platform: "Codechef" },
                      { count: "300+", platform: "Vjudge" },
                      { count: "1000+", platform: "Others" },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="bg-background/40 backdrop-blur-sm p-4 rounded-lg border border-border/30 hover:border-primary/30 transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <p className="text-2xl font-bold">{item.count}</p>
                        <p className="text-sm text-muted-foreground">
                          {item.platform}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-code-pattern opacity-10"></div>
            </motion.div>
          </div>

          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 md:py-32"
        ref={(el) => (sectionsRef.current.about = el)}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <Badge className="mb-4 px-3 py-1 text-sm rounded-full border-primary/30 bg-primary/10 text-primary">
              About Me
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
              <Book className="h-8 w-8 text-primary" />
              Who I Am
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A passionate developer and competitive programmer with a focus on
              creating elegant solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300">
                <CardHeader className="bg-muted/30 border-b border-border/30">
                  <CardTitle className="flex items-center">
                    <GraduationCap className="mr-2 h-5 w-5 text-primary" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="relative pl-6 border-l border-border/50 py-2">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-3"></div>
                    <h3 className="font-medium">
                      B.Sc in Computer Science and Engineering
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Begum Rokeya University, Rangpur
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300">
                <CardHeader className="bg-muted/30 border-b border-border/30">
                  <CardTitle>About Me</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <p>
                    A curious learner and passionate problem solver looking for
                    a challenging position as a Software Engineer in a dynamic
                    company that values my analytical and technical skills and
                    allows me to expand my knowledge.
                  </p>
                  <p>
                    I thrive in challenging environments that allow me to apply
                    my technical skills while continuously learning and growing.
                    I am looking for opportunities to contribute to dynamic
                    teams and make a meaningful impact through my work.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300">
                <CardHeader className="bg-muted/30 border-b border-border/30">
                  <CardTitle className="flex items-center">
                    <Mail className="mr-2 h-5 w-5 text-primary" />
                    Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  {[
                    {
                      icon: <MapPin className="h-5 w-5" />,
                      text: "Rangpur, Bangladesh - 5400",
                    },
                    {
                      icon: <Phone className="h-5 w-5" />,
                      text: "+880 1722777263",
                    },
                    {
                      icon: <Github className="h-5 w-5" />,
                      text: "GitHub",
                      link: "https://github.com/outlander23",
                    },
                    {
                      icon: <Linkedin className="h-5 w-5" />,
                      text: "LinkedIn",
                      link: "https://linkedin.com/in/outlander23",
                    },
                    {
                      icon: <Facebook className="h-5 w-5" />,
                      text: "Facebook",
                      link: "https://facebook.com/smmiloy",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 group"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                        {item.icon}
                      </div>
                      {item.link ? (
                        <Link
                          href={item.link}
                          className="text-sm hover:text-primary transition-colors"
                          target="_blank"
                        >
                          {item.text}
                        </Link>
                      ) : (
                        <span className="text-sm">{item.text}</span>
                      )}
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 md:py-32 bg-muted/30"
        ref={(el) => (sectionsRef.current.skills = el)}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <Badge className="mb-4 px-3 py-1 text-sm rounded-full border-primary/30 bg-primary/10 text-primary">
              My Expertise
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
              <Code2 className="h-8 w-8 text-primary" />
              Skills & Technologies
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive set of skills I've developed through years of
              practice and projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border border-border/50 transition-all duration-300 hover:border-primary/30 hover:shadow-md">
                  <CardHeader className="bg-muted/30 border-b border-border/30">
                    <CardTitle className="text-lg flex items-center">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                        {category.icon}
                      </div>
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-4">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          className="group relative flex flex-col items-center justify-center"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.3,
                            delay: 0.2 + skillIndex * 0.05,
                          }}
                          whileHover={{ y: -5 }}
                        >
                          <div
                            className="w-16 h-16 bg-background/60 rounded-lg p-3 border border-border/50 
                            flex items-center justify-center overflow-hidden
                            transition-all duration-300 transform 
                            group-hover:border-primary/50 group-hover:shadow-lg group-hover:scale-105"
                          >
                            <Image
                              src={`https://skillicons.dev/icons?i=${skill}`}
                              alt={`${skill} icon`}
                              width={40}
                              height={40}
                              className="transition-transform duration-300 group-hover:scale-110"
                            />
                          </div>
                          <span
                            className="absolute -bottom-6 opacity-0 text-xs font-medium text-center whitespace-nowrap
                            transition-all duration-300 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
                          >
                            {skill}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="border border-border/50 hover:border-primary/30 transition-all duration-300">
              <CardHeader className="border-b border-border/30">
                <CardTitle className="text-lg flex items-center">
                  <Sparkles className="mr-2 h-5 w-5 text-primary" />
                  Proficiency Overview
                </CardTitle>
                <CardDescription>
                  Key technologies and skill levels
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-8">
                  {[
                    { name: "Competitive Programming", percentage: 95 },
                    { name: "Frontend Development", percentage: 85 },
                    { name: "Backend Development", percentage: 80 },
                    { name: "Data Structures & Algorithms", percentage: 90 },
                  ].map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, width: 0 }}
                      whileInView={{ opacity: 1, width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                    >
                      <SkillBar
                        name={skill.name}
                        percentage={skill.percentage}
                      />
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CP Profiles Section */}
      <section
        id="profiles"
        className="py-20 md:py-32"
        ref={(el) => (sectionsRef.current.profiles = el)}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <Badge className="mb-4 px-3 py-1 text-sm rounded-full border-primary/30 bg-primary/10 text-primary">
              Competitive Programming
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
              <Cpu className="h-8 w-8 text-primary" />
              CP Profiles
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My competitive programming journey across various platforms
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Tabs defaultValue="codeforces" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
                {["codeforces", "codechef", "leetcode", "atcoder"].map(
                  (platform, index) => (
                    <TabsTrigger
                      key={platform}
                      value={platform}
                      className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
                    >
                      {platform.charAt(0).toUpperCase() + platform.slice(1)}
                    </TabsTrigger>
                  )
                )}
              </TabsList>

              {[
                {
                  value: "codeforces",
                  color: "#1f8acb",
                  url: "https://codeforces.com/profile/outlander",
                  statsUrl:
                    "https://codeforces-readme-stats.vercel.app/api/card?username=outlander",
                },
                {
                  value: "codechef",
                  color: "#723b13",
                  url: "https://www.codechef.com/users/miloy23",
                  statsUrl:
                    "https://codechef-readme-stats.onrender.com/miloy23",
                },
                {
                  value: "leetcode",
                  color: "#ffa116",
                  url: "https://leetcode.com/u/miloy23/",
                  statsUrl: "https://leetcard.jacoblin.cool/miloy23",
                },
                {
                  value: "atcoder",
                  color: "#808080",
                  url: "https://atcoder.jp/users/miloy",
                  statsUrl:
                    "https://atcoder-readme-stats.vercel.app/stats/miloy",
                },
              ].map((platform) => (
                <TabsContent key={platform.value} value={platform.value}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <span
                            className="w-3 h-3 rounded-full mr-2"
                            style={{ backgroundColor: platform.color }}
                          ></span>
                          {platform.value.charAt(0).toUpperCase() +
                            platform.value.slice(1)}{" "}
                          Profile
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="flex flex-col space-y-4">
                          <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                              <Cpu className="h-8 w-8 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-medium">Outlander</h3>
                              <p className="text-sm text-muted-foreground">
                                Active since 2020
                              </p>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Solved 1000+ problems on{" "}
                            {platform.value.charAt(0).toUpperCase() +
                              platform.value.slice(1)}
                          </p>
                        </div>
                      </CardContent>
                      <CardFooter className="bg-muted/30 border-t border-border/30 p-4">
                        <Button
                          variant="outline"
                          size="sm"
                          className="ml-auto"
                          asChild
                        >
                          <Link href={platform.url} target="_blank">
                            View Profile{" "}
                            <ExternalLink className="ml-1 h-3 w-3" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card className="overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300">
                      <CardHeader className="border-b border-border/30">
                        <CardTitle className="text-sm">Statistics</CardTitle>
                      </CardHeader>
                      <CardContent className="p-0 h-[250px] flex items-center justify-center">
                        <Image
                          src={platform.statsUrl || "/placeholder.svg"}
                          alt={`${platform.value} Stats`}
                          width={500}
                          height={250}
                          className="object-contain w-full h-full"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section
        id="achievements"
        className="py-20 md:py-32 bg-muted/30"
        ref={(el) => (sectionsRef.current.achievements = el)}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <Badge className="mb-4 px-3 py-1 text-sm rounded-full border-primary/30 bg-primary/10 text-primary">
              Achievements
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
              <Trophy className="h-8 w-8 text-primary" />
              Team Onsite Contest Achievements
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Recognitions and awards from various programming competitions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                position: "3rd",
                event: "Rangpur Divisional Collegiate Programming Contest 2024",
                team: "BRUR_NotStrongEnough",
                highlight: true,
              },
              {
                position: "14th",
                event: "NWU Inter University Programming Contest 2023",
                team: "BRUR_SAS",
                highlight: true,
              },
              {
                position: "31st",
                event: "BUET Inter University Programming Contest 2023",
                team: "BRUR_hugs4bugs",
                highlight: true,
              },
              {
                position: "58th",
                event: "IUT Inter University Programming Contest 2024",
                team: "BRUR_Kuhelika",
              },
              {
                position: "65th",
                event: "National Collegiate Programming Contest 2023",
                team: "BRUR_DayLight",
              },
              {
                position: "79th",
                event: "DUET Inter University Programming Contest 2025",
                team: "BRURute_Force",
              },
              {
                position: "87th",
                event: "CUET Inter University Programming Contest 2024",
                team: "BRUR_Undone",
              },
              {
                position: "89th",
                event:
                  "Inter University Programming Contest | United Group Presents BUET CSE Fest 2024",
                team: "BRUR_NotStrongEnough",
              },
              {
                position: "92nd",
                event:
                  "Kite Games Presents Inter University Programming Contest - SUST CSE Carnival 2024",
                team: "BRUR_Undone",
              },
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <AchievementCard
                  position={achievement.position}
                  event={achievement.event}
                  team={achievement.team}
                  highlight={achievement.highlight}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="personal-achievements" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <Badge className="mb-4 px-3 py-1 text-sm rounded-full border-primary/30 bg-primary/10 text-primary">
              Personal Achievements
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
              <Award className="h-8 w-8 text-primary" />
              Personal Contest Achievements
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Individual recognitions from various competitions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                position: "Champion",
                event: "Quiz Competition NWU CSE FEST",
                team: "",
                highlight: true,
              },
              {
                position: "Champion",
                event: "Liberty Code Jam 2025",
                team: "",
                highlight: true,
              },
              {
                position: "Champion",
                event: "ভাষা শহীদ প্রোগ্রামিং কনটেস্ট ২০২৫",
                team: "",
                highlight: true,
              },
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <AchievementCard
                  position={achievement.position}
                  event={achievement.event}
                  team={achievement.team}
                  highlight={achievement.highlight}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hackathon Experience Section */}
      <section id="hackathons" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <Badge className="mb-4 px-3 py-1 text-sm rounded-full border-primary/30 bg-primary/10 text-primary">
              Hackathons
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
              <Briefcase className="h-8 w-8 text-primary" />
              Hackathon Experience
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Building innovative solutions under time constraints
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                position: "Top 3",
                event: "NWU CSE FEST Hackathon",
                year: "2023",
                highlight: true,
              },
              {
                position: "Top 20",
                event: "BUET CSE FEST Hackathon",
                year: "2024",
              },
              {
                position: "Top 35",
                event: "SUST CSE FEST Hackathon",
                year: "2024",
              },
            ].map((hackathon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <HackathonCard
                  position={hackathon.position}
                  event={hackathon.event}
                  year={hackathon.year}
                  highlight={hackathon.highlight}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 md:py-32"
        ref={(el) => (sectionsRef.current.projects = el)}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <Badge className="mb-4 px-3 py-1 text-sm rounded-full border-primary/30 bg-primary/10 text-primary">
              My Work
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
              <Code2 className="h-8 w-8 text-primary" />
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent development work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.length > 0
              ? projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Link
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full"
                    >
                      <Card className="h-full hover:border-primary/50 transition-colors group overflow-hidden">
                        <CardHeader className="pb-2 border-b border-border/30">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-sm font-medium group-hover:text-primary transition-colors">
                              {project.name}
                            </CardTitle>
                            <Star className="h-4 w-4 text-yellow-500" />
                          </div>
                        </CardHeader>
                        <CardContent className="p-6 space-y-4">
                          <p className="text-xs text-muted-foreground flex-grow">
                            {truncateDescription(project.description)}
                          </p>
                          <div className="flex items-center text-xs text-muted-foreground space-x-4 mt-auto">
                            {project.language && (
                              <span className="flex items-center">
                                <span className="w-3 h-3 rounded-full bg-yellow-500 mr-1"></span>
                                {project.language}
                              </span>
                            )}
                            <span className="flex items-center">
                              <Star className="h-3 w-3 mr-1" />
                              {project.stargazers_count}
                            </span>
                            <span className="flex items-center">
                              <GitFork className="h-3 w-3 mr-1" />
                              {project.forks_count}
                            </span>
                          </div>
                        </CardContent>
                        <div className="h-1 w-0 bg-primary group-hover:w-full transition-all duration-300"></div>
                      </Card>
                    </Link>
                  </motion.div>
                ))
              : Array(4)
                  .fill(0)
                  .map((_, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Card className="h-full">
                        <CardHeader className="pb-2">
                          <div className="h-5 bg-muted/50 rounded animate-pulse"></div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="h-20 bg-muted/50 rounded animate-pulse"></div>
                          <div className="flex space-x-4">
                            <div className="h-4 w-16 bg-muted/50 rounded animate-pulse"></div>
                            <div className="h-4 w-16 bg-muted/50 rounded animate-pulse"></div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 opacity-30"></div>
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:32px_32px] opacity-20"></div>

        <div className="container relative mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <Badge className="px-3 py-1 text-sm rounded-full border-primary/30 bg-primary/10 text-primary">
              Let's Connect
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to work together?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your vision.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="group">
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                View Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/30 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 flex items-center space-x-2">
              <span className="font-bold text-xl">Outlander</span>
              <Badge
                variant="outline"
                className="bg-primary/10 text-primary border-primary/30"
              >
                Developer
              </Badge>
            </div>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/outlander23"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/outlander23"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://facebook.com/smmiloy"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Outlander. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function AchievementCard({
  position,
  event,
  team,
  highlight = false,
}: AchievementCardProps) {
  return (
    <Card
      className={`h-full overflow-hidden transition-all duration-300 hover:shadow-md ${
        highlight ? "border-primary/50 bg-primary/5" : "border-border/50"
      }`}
    >
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Trophy
              className={`h-5 w-5 ${
                highlight ? "text-primary" : "text-muted-foreground"
              }`}
            />
            <span>{position}</span>
          </CardTitle>
          {highlight && (
            <Badge
              variant="outline"
              className="bg-primary/10 text-primary border-primary/30"
            >
              Highlight
            </Badge>
          )}
        </div>
        <CardDescription className="text-base font-medium text-foreground mt-2">
          {event}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{team}</p>
      </CardContent>
    </Card>
  );
}

function HackathonCard({
  position,
  event,
  year,
  highlight = false,
}: HackathonCardProps) {
  return (
    <Card
      className={`h-full overflow-hidden transition-all duration-300 hover:shadow-md ${
        highlight ? "border-primary/50 bg-primary/5" : "border-border/50"
      }`}
    >
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Award
              className={`h-5 w-5 ${
                highlight ? "text-primary" : "text-muted-foreground"
              }`}
            />
            <span>{position}</span>
          </CardTitle>
          {highlight && (
            <Badge
              variant="outline"
              className="bg-primary/10 text-primary border-primary/30"
            >
              Winner
            </Badge>
          )}
        </div>
        <CardDescription className="text-base font-medium text-foreground mt-2">
          {event}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{year}</p>
      </CardContent>
    </Card>
  );
}

function SkillBar({ name, percentage }: SkillBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{percentage}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary/80 to-primary rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
