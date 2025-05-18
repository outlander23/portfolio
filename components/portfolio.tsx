"use client";

import type React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
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
  GraduationCap,
  ExternalLink,
  Star,
  GitFork,
  ChevronRight,
  Mail,
  ArrowRight,
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
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuOpen = false;

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

  const truncateDescription = (description: string | null): string => {
    if (!description) return "No description available.";
    const words = description.split(" ");
    if (words.length > 10) {
      return words.slice(0, 10).join(" ") + " ...";
    }
    return description;
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-purple-500/20 selection:text-purple-300">
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-black/95 pt-16 px-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col space-y-4 p-4">
              <Button className="mt-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0">
                Contact Me
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black"></div>
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:32px_32px] opacity-10"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="container relative mx-auto px-4 z-10 text-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge
                variant="outline"
                className="px-3 py-1 text-sm rounded-full border-blue-500/30 bg-blue-500/10 text-blue-300"
              >
                Expert @ Codeforces
              </Badge>
              <Badge
                variant="outline"
                className="px-3 py-1 text-sm rounded-full border-purple-500/30 bg-purple-500/10 text-purple-300"
              >
                ⭐⭐⭐⭐ @ Codechef
              </Badge>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mt-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Outlander
            </h1>

            <h2 className="text-xl md:text-2xl text-gray-300">
              Competitive Programmer & Full-Stack Developer
            </h2>

            <div className="flex justify-center space-x-6 mt-8">
              <Link
                href="https://github.com/outlander23"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="h-6 w-6" />
              </Link>
              <Link
                href="https://linkedin.com/in/outlander23"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
                href="https://facebook.com/smmiloy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </Link>
            </div>

            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <div className="bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-2 border border-white/10">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-gray-300">
                  Rangpur, Bangladesh
                </span>
              </div>
              <div className="bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-2 border border-white/10">
                <Mail className="h-4 w-4 text-purple-400" />
                <span className="text-sm text-gray-300">
                  smmiloy23@gmail.com
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center mt-12">
              <Button
                className="group bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0"
                size="lg"
                asChild
              >
                <Link href="#achievements">
                  View Achievements
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/5"
                asChild
              >
                <Link href="#profiles">
                  CP Profiles
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <Badge className="mb-4 px-3 py-1 text-sm rounded-full border-blue-500/30 bg-blue-500/10 text-blue-300">
              About Me
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Who I Am
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
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
              <Card className="overflow-hidden border-white/5 bg-white/5 backdrop-blur-sm hover:border-purple-500/20 transition-all duration-300">
                <CardHeader className="bg-white/5 border-b border-white/5">
                  <CardTitle className="flex items-center text-white">
                    <GraduationCap className="mr-2 h-5 w-5 text-purple-400" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 text-gray-300">
                  <div className="relative pl-6 border-l border-white/10 py-2">
                    <div className="absolute w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full -left-[7px] top-3"></div>
                    <h3 className="font-medium text-white">
                      B.Sc in Computer Science and Engineering
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">
                      Begum Rokeya University, Rangpur
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-white/5 bg-white/5 backdrop-blur-sm hover:border-purple-500/20 transition-all duration-300">
                <CardHeader className="bg-white/5 border-b border-white/5">
                  <CardTitle className="text-white">About Me</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4 text-gray-300">
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
              <Card className="h-full overflow-hidden border-white/5 bg-white/5 backdrop-blur-sm hover:border-purple-500/20 transition-all duration-300">
                <CardHeader className="bg-white/5 border-b border-white/5">
                  <CardTitle className="flex items-center text-white">
                    <Mail className="mr-2 h-5 w-5 text-blue-400" />
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
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-purple-400 group-hover:bg-purple-500/10 transition-colors">
                        {item.icon}
                      </div>
                      {item.link ? (
                        <Link
                          href={item.link}
                          className="text-sm text-gray-300 hover:text-purple-400 transition-colors"
                          target="_blank"
                        >
                          {item.text}
                        </Link>
                      ) : (
                        <span className="text-sm text-gray-300">
                          {item.text}
                        </span>
                      )}
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/10 via-black to-black"></div>
        <div className="container relative mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <Badge className="mb-4 px-3 py-1 text-sm rounded-full border-blue-500/30 bg-blue-500/10 text-blue-300">
              My Expertise
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Skills & Technologies
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A comprehensive set of skills I have developed through years of
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
                <Card className="overflow-hidden border-white/5 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/20 hover:shadow-md">
                  <CardHeader className="bg-white/5 border-b border-white/5">
                    <CardTitle className="text-lg flex items-center text-white">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center text-purple-400 mr-3">
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
                            className="w-16 h-16 bg-white/5 rounded-lg p-3 border border-white/10 
                            flex items-center justify-center overflow-hidden
                            transition-all duration-300 transform 
                            group-hover:border-purple-500/30 group-hover:shadow-lg group-hover:scale-105"
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
                            className="absolute -bottom-6 opacity-0 text-xs font-medium text-center whitespace-nowrap text-gray-300
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

{/*           <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="border-white/5 bg-white/5 backdrop-blur-sm hover:border-purple-500/20 transition-all duration-300">
              <CardHeader className="border-b border-white/5">
                <CardTitle className="text-lg flex items-center text-white">
                  Proficiency Overview
                </CardTitle>
                <CardDescription className="text-gray-400">
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
          </motion.div> */}
        </div>
      </section>

      <section id="profiles" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <Badge className="mb-4 px-3 py-1 text-sm rounded-full border-blue-500/30 bg-blue-500/10 text-blue-300">
              Competitive Programming
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              CP Profiles
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
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
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 bg-white/5 p-1 rounded-lg">
                {["codeforces", "codechef", "leetcode", "atcoder"].map(
                  (platform) => (
                    <TabsTrigger
                      key={platform}
                      value={platform}
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white text-gray-400"
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
                    <Card className="overflow-hidden border-white/5 bg-white/5 backdrop-blur-sm hover:border-purple-500/20 transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="flex items-center text-white">
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
                            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                              <Cpu className="h-8 w-8 text-purple-400" />
                            </div>
                            <div>
                              <h3 className="font-medium text-white">
                                Outlander
                              </h3>
                              <p className="text-sm text-gray-400">
                                Active since 2020
                              </p>
                            </div>
                          </div>
                          <p className="text-sm text-gray-400">
                            Solved many problems on{" "}
                            {platform.value.charAt(0).toUpperCase() +
                              platform.value.slice(1)}
                          </p>
                        </div>
                      </CardContent>
                      <CardFooter className="bg-white/5 border-t border-white/5 p-4">
                        <Button
                          variant="outline"
                          size="sm"
                          className="ml-auto border-white/20 text-white hover:bg-white/5"
                          asChild
                        >
                          <Link href={platform.url} target="_blank">
                            View Profile{" "}
                            <ExternalLink className="ml-1 h-3 w-3" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card className="overflow-hidden border-white/5 bg-white/5 backdrop-blur-sm hover:border-purple-500/20 transition-all duration-300">
                      <CardHeader className="border-b border-white/5">
                        <CardTitle className="text-sm text-white">
                          Statistics
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-0 h-[250px] flex items-center justify-center">
                        <Image
                          src={platform.statsUrl}
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

      <section id="achievements" className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-900/10 via-black to-black"></div>
        <div className="container relative mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <Badge className="mb-4 px-3 py-1 text-sm rounded-full border-blue-500/30 bg-blue-500/10 text-blue-300">
              Achievements
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Team Onsite Contest Achievements
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
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
                position: "25th",
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
                event: "BUET Inter University Programming Contest 2024",
                team: "BRUR_NotStrongEnough",
              },
              {
                position: "92nd",
                event: "SUST Inter University Programming Contest 2024",
                team: "BRUR_Undone",
              },
              {
                position: "100th",
                event: "UIU Inter-University Programming Contest 2025",
                team: "BRUR_Outlanders",
              },
              {
                position: "181st",
                event: "ICPC Asia Dhaka Regional Contest 2024",
                team: "BRUR_NotStrongEnough",
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
            <Badge className="mb-4 px-3 py-1 text-sm rounded-full border-blue-500/30 bg-blue-500/10 text-blue-300">
              Personal Achievements
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Personal Contest Achievements
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
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

      <section id="hackathons" className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/10 via-black to-black"></div>
        <div className="container relative mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <Badge className="mb-4 px-3 py-1 text-sm rounded-full border-blue-500/30 bg-blue-500/10 text-blue-300">
              Hackathons
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Hackathon Experience
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
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

      <section id="projects" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <Badge className="mb-4 px-3 py-1 text-sm rounded-full border-blue-500/30 bg-blue-500/10 text-blue-300">
              My Work
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Featured Projects
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
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
                      <Card className="h-full border-white/5 bg-white/5 backdrop-blur-sm hover:border-purple-500/20 transition-colors group overflow-hidden">
                        <CardHeader className="pb-2 border-b border-white/5">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-sm font-medium text-white group-hover:text-purple-400 transition-colors">
                              {project.name}
                            </CardTitle>
                            <Star className="h-4 w-4 text-yellow-500" />
                          </div>
                        </CardHeader>
                        <CardContent className="p-6 space-y-4">
                          <p className="text-xs text-gray-400 flex-grow">
                            {truncateDescription(project.description)}
                          </p>
                          <div className="flex items-center text-xs text-gray-400 space-x-4 mt-auto">
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
                        <div className="h-1 w-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
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
                      <Card className="h-full border-white/5 bg-white/5 backdrop-blur-sm">
                        <CardHeader className="pb-2">
                          <div className="h-5 bg-white/10 rounded animate-pulse"></div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="h-20 bg-white/10 rounded animate-pulse"></div>
                          <div className="flex space-x-4">
                            <div className="h-4 w-16 bg-white/10 rounded animate-pulse"></div>
                            <div className="h-4 w-16 bg-white/10 rounded animate-pulse"></div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 opacity-30"></div>
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:32px_32px] opacity-10"></div>

        <div className="container relative mx-auto px-4 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <Badge className="px-3 py-1 text-sm rounded-full border-blue-500/30 bg-blue-500/10 text-blue-300">
              Let us Connect
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Ready to work together?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              I am always open to discussing new projects, creative ideas or
              opportunities to be part of your vision.
            </p>
          </motion.div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 flex items-center space-x-2">
              <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Outlander
              </span>
              <Badge
                variant="outline"
                className="bg-purple-500/10 text-purple-300 border-purple-500/30"
              >
                Developer
              </Badge>
            </div>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/outlander23"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/outlander23"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://facebook.com/smmiloy"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-500">
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
      className={`h-full overflow-hidden transition-all duration-300 hover:shadow-md border-white/5 bg-white/5 backdrop-blur-sm ${
        highlight ? "border-purple-500/30 bg-purple-500/5" : ""
      }`}
    >
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <CardTitle className="flex items-center gap-2 text-lg text-white">
            <Trophy
              className={`h-5 w-5 ${
                highlight ? "text-purple-400" : "text-gray-400"
              }`}
            />
            <span>{position}</span>
          </CardTitle>
          {highlight && (
            <Badge
              variant="outline"
              className="bg-purple-500/10 text-purple-300 border-purple-500/30"
            >
              Highlight
            </Badge>
          )}
        </div>
        <CardDescription className="text-base font-medium text-gray-300 mt-2">
          {event}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-400">{team}</p>
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
      className={`h-full overflow-hidden transition-all duration-300 hover:shadow-md border-white/5 bg-white/5 backdrop-blur-sm ${
        highlight ? "border-blue-500/30 bg-blue-500/5" : ""
      }`}
    >
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <CardTitle className="flex items-center gap-2 text-lg text-white">
            <Award
              className={`h-5 w-5 ${
                highlight ? "text-blue-400" : "text-gray-400"
              }`}
            />
            <span>{position}</span>
          </CardTitle>
          {highlight && (
            <Badge
              variant="outline"
              className="bg-blue-500/10 text-blue-300 border-blue-500/30"
            >
              Winner
            </Badge>
          )}
        </div>
        <CardDescription className="text-base font-medium text-gray-300 mt-2">
          {event}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-400">{year}</p>
      </CardContent>
    </Card>
  );
}

// function SkillBar({ name, percentage }: SkillBarProps) {
//   return (
//     <div className="space-y-2">
//       <div className="flex justify-between">
//         <span className="text-sm font-medium text-white">{name}</span>
//         <span className="text-sm text-gray-400">{percentage}%</span>
//       </div>
//       <div className="h-2 bg-white/10 rounded-full overflow-hidden">
//         <div
//           className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
//           style={{ width: `${percentage}%` }}
//         />
//       </div>
//     </div>
//   );
// }
