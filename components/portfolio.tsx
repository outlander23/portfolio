"use client";

import { useEffect, useState } from "react";
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
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Project {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  forks_count: number;
}

const skillCategories = [
  {
    category: "Languages",
    skills: ["js", "ts", "solidity", "cpp", "java", "python"],
  },
  {
    category: "Frontend",
    skills: ["react", "nextjs", "vite", "remix", "tailwind", "materialui"],
  },
  {
    category: "Backend",
    skills: ["nestjs", "express", "nodejs", "jest"],
  },
  {
    category: "Database",
    skills: ["mongodb", "mysql", "postgres", "sqlite", "firebase"],
  },
  {
    category: "Version Control & CI/CD",
    skills: ["git", "github"],
  },
  {
    category: "Tools & IDEs",
    skills: ["vscode", "postman"],
  },
];

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/outlander23/repos")
      .then((response) => response.json())
      .then((data) => {
        const projectData = data.map((repo: Project) => ({
          name: repo.name,
          description: repo.description,
          html_url: repo.html_url,
          stargazers_count: repo.stargazers_count,
          language: repo.language,
          forks_count: repo.forks_count,
        }));

        // Sort projects by stars in descending order and slice to top 4
        const sortedProjects = projectData
          .sort(
            (a: Project, b: Project) => b.stargazers_count - a.stargazers_count
          )
          .slice(0, 4);

        setProjects(sortedProjects);
      })
      .catch((error) => {
        console.error("Error fetching GitHub repos:", error);
        // Set some fallback projects in case the API fails
      });
  }, []);

  // Function to truncate the description to 10 words
  const truncateDescription = (description: string) => {
    if (!description) return "No description available.";
    const words = description.split(" ");
    if (words.length > 10) {
      return words.slice(0, 10).join(" ") + " ...";
    }
    return description;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:32px_32px] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/5 via-background/50 to-background"></div>

        <div className="container relative mx-auto px-4 py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <Badge
                  variant="outline"
                  className="px-3 py-1 text-sm rounded-full border-primary/30 bg-primary/10 text-primary"
                >
                  Expert @ Codeforces
                </Badge>{" "}
                &&{" "}
                <Badge
                  variant="outline"
                  className="px-3 py-1 text-sm rounded-full border-primary/30 bg-primary/10 text-primary"
                >
                  ⭐⭐⭐⭐ @ Codechef
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Outlander
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground">
                Competitive Programmer & Full-Stack Developer
              </h2>
              <p className="text-muted-foreground max-w-md">
                Pursuing B.Sc in Computer Science and Engineering at Begum
                Rokeya University, Rangpur.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="#achievements">
                    View Achievements <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#profiles">
                    CP Profiles <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden border border-border/40 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background/80 z-10"></div>
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="text-center space-y-4">
                  <h3 className="text-3xl font-bold">3000+</h3>
                  <p className="text-xl">Problems Solved</p>
                  <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
                    <div className="bg-background/40 backdrop-blur-sm p-3 rounded-lg">
                      <p className="text-2xl font-bold">1200+</p>
                      <p className="text-sm text-muted-foreground">
                        Codeforces
                      </p>
                    </div>
                    <div className="bg-background/40 backdrop-blur-sm p-3 rounded-lg">
                      <p className="text-2xl font-bold">150+</p>
                      <p className="text-sm text-muted-foreground">CSES</p>
                    </div>
                    <div className="bg-background/40 backdrop-blur-sm p-3 rounded-lg">
                      <p className="text-2xl font-bold">150+</p>
                      <p className="text-sm text-muted-foreground">AtCoder</p>
                    </div>
                    <div className="bg-background/40 backdrop-blur-sm p-3 rounded-lg">
                      <p className="text-2xl font-bold">100+</p>
                      <p className="text-sm text-muted-foreground">Codechef</p>
                    </div>
                    <div className="bg-background/40 backdrop-blur-sm p-3 rounded-lg">
                      <p className="text-2xl font-bold">300+</p>
                      <p className="text-sm text-muted-foreground">Vjudge</p>
                    </div>
                    <div className="bg-background/40 backdrop-blur-sm p-3 rounded-lg">
                      <p className="text-2xl font-bold">1000+</p>
                      <p className="text-sm text-muted-foreground">Others</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-code-pattern opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Book className="mr-2 h-6 w-6 text-primary" />
            About Me
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <GraduationCap className="mr-2 h-5 w-5 text-primary" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>B.Sc in Computer Science and Engineering</p>
                  <p className="text-sm text-muted-foreground">
                    Begum Rokeya University, Rangpur
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>About Me</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
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
            </div>

            <div>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="mr-2 h-5 w-5 text-primary" />
                    Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm">Rangpur, Bangladesh - 5400</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm">+880 1722777263</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Github className="h-5 w-5 text-muted-foreground" />
                    <Link
                      href="https://github.com/outlander23"
                      className="text-sm hover:underline"
                    >
                      GitHub
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <Linkedin className="h-5 w-5 text-muted-foreground" />
                    <Link
                      href="https://linkedin.com/in/outlander23"
                      className="text-sm hover:underline"
                    >
                      LinkedIn
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <Facebook className="h-5 w-5 text-muted-foreground" />
                    <Link
                      href="https://facebook.com/smmiloy"
                      className="text-sm hover:underline"
                    >
                      Facebook
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Code2 className="mr-2 h-6 w-6 text-primary" />
            Skills
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="overflow-hidden border border-border/50 transition-all duration-300 hover:border-primary/30 hover:shadow-md"
              >
                <CardHeader className="bg-muted/30 border-b border-border/30">
                  <CardTitle className="text-lg flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="group relative flex flex-col items-center justify-center"
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
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12">
            <Card className="border border-border/50">
              <CardHeader className="border-b border-border/30">
                <CardTitle className="text-lg">Proficiency Overview</CardTitle>
                <CardDescription>
                  Key technologies and skill levels
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <SkillBar name="Competitive Programming" percentage={95} />
                  <SkillBar name="Frontend Development" percentage={85} />
                  <SkillBar name="Backend Development" percentage={80} />
                  <SkillBar
                    name="Data Structures & Algorithms"
                    percentage={90}
                  />
                  {/* <SkillBar name="DevOps & Cloud" percentage={75} /> */}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section id="stats" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Award className="mr-2 h-6 w-6 text-primary" />
            Problem Solving Stats
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <StatCard
              title="Codeforces"
              value="2121"
              icon={<Code2 className="h-5 w-5" />}
            />
            <StatCard
              title="CSES"
              value="117"
              icon={<Code2 className="h-5 w-5" />}
            />
            <StatCard
              title="AtCoder"
              value="155"
              icon={<Code2 className="h-5 w-5" />}
            />
            <StatCard
              title="Codechef"
              value="88"
              icon={<Code2 className="h-5 w-5" />}
            />
            <StatCard
              title="Others"
              value="300+"
              icon={<Code2 className="h-5 w-5" />}
            />
          </div>
        </div>
      </section> */}

      {/* CP Profiles Section */}
      <section id="profiles" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Cpu className="mr-2 h-6 w-6 text-primary" />
            CP Profiles
          </h2>

          <Tabs defaultValue="codeforces" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="codeforces">Codeforces</TabsTrigger>
              <TabsTrigger value="codechef">CodeChef</TabsTrigger>
              <TabsTrigger value="leetcode">LeetCode</TabsTrigger>
              <TabsTrigger value="atcoder">AtCoder</TabsTrigger>
            </TabsList>

            {/* Codeforces */}
            <TabsContent value="codeforces">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-[#1f8acb] mr-2"></span>
                      Codeforces Profile
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-end">
                      <Button variant="outline" size="sm" asChild>
                        <Link
                          href="https://codeforces.com/profile/outlander"
                          target="_blank"
                        >
                          View Profile <ExternalLink className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden h-[200px] flex items-center justify-center">
                  <img
                    src="https://codeforces-readme-stats.vercel.app/api/card?username=outlander&force_username=true"
                    alt="Codeforces Stats"
                    className="object-contain w-full h-full"
                  />
                </Card>
              </div>
            </TabsContent>

            {/* CodeChef */}
            <TabsContent value="codechef">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-[#723b13] mr-2"></span>
                      CodeChef Profile
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-end">
                      <Button variant="outline" size="sm" asChild>
                        <Link
                          href="https://www.codechef.com/users/miloy23"
                          target="_blank"
                        >
                          View Profile <ExternalLink className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden h-[200px] flex items-center justify-center">
                  <img
                    src="https://codechef-readme-stats.onrender.com/miloy23"
                    alt="CodeChef Stats"
                    className="object-contain w-full h-full"
                  />
                </Card>
              </div>
            </TabsContent>

            {/* LeetCode */}
            <TabsContent value="leetcode">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-[#ffa116] mr-2"></span>
                      LeetCode Profile
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-end">
                      <Button variant="outline" size="sm" asChild>
                        <Link
                          href="https://leetcode.com/u/miloy23/"
                          target="_blank"
                        >
                          View Profile <ExternalLink className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden h-[200px] flex items-center justify-center">
                  <img
                    src="https://leetcard.jacoblin.cool/miloy23"
                    alt="LeetCode Stats"
                    className="object-contain w-full h-full"
                  />
                </Card>
              </div>
            </TabsContent>

            {/* AtCoder */}
            <TabsContent value="atcoder">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-gray-500 mr-2"></span>
                      AtCoder Profile
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-end">
                      <Button variant="outline" size="sm" asChild>
                        <Link
                          href="https://atcoder.jp/users/miloy"
                          target="_blank"
                        >
                          View Profile <ExternalLink className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden h-[200px] flex items-center justify-center">
                  <img
                    src="https://atcoder-readme-stats.vercel.app/stats/miloy"
                    alt="AtCoder Stats"
                    className="object-contain w-full h-full"
                  />
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Achievements Section */}
      {/* Achievements Section */}
      {/* Achievements Section */}
      <section id="achievements" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Trophy className="mr-2 h-6 w-6 text-primary" />
            Competitive Programming Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AchievementCard
              position="3rd"
              event="Rangpur Divisional Collegiate Programming Contest 2024"
              team="BRUR_NotStrongEnough"
              highlight={true}
            />
            <AchievementCard
              position="14th"
              event="NWU Inter University Programming Contest 2023"
              team="BRUR_SAS"
              highlight={true}
            />
            <AchievementCard
              position="31st"
              event="BUET Inter University Programming Contest 2023"
              team="BRUR_hugs4bugs"
              highlight={true}
            />
            <AchievementCard
              position="58th"
              event="IUT Inter University Programming Contest 2024"
              team="BRUR_Kuhelika"
            />
            <AchievementCard
              position="65th"
              event="National Collegiate Programming Contest 2023"
              team="BRUR_DayLight"
            />
            <AchievementCard
              position="79th"
              event="DUET Inter University Programming Contest 2025"
              team="BRURute_Force"
            />{" "}
            <AchievementCard
              position="87th"
              event="CUET Inter University Programming Contest 2024"
              team="BRUR_Undone"
            />
            <AchievementCard
              position="89th"
              event="Inter University Programming Contest | United Group Presents BUET CSE Fest 2024"
              team="BRUR_NotStrongEnough"
            />
            <AchievementCard
              position="92nd"
              event="Kite Games Presents Inter University Programming Contest - SUST CSE Carnival 2024 (Begum Rokeya University, Rangpur)"
              team="BRUR_Undone"
            />
            <AchievementCard
              position="100th"
              event="UIU Inter-University Programming Contest 2025"
              team="BRUR_Outlanders"
            />
            <AchievementCard
              position="181st"
              event="ICPC Asia Dhaka Regional Contest 2024 Onsite Round Hosted By DIU"
              team="BRUR_NotStrongEnough"
            />
          </div>
        </div>
      </section>

      {/* Hackathon Experience Section */}
      <section id="hackathons" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Briefcase className="mr-2 h-6 w-6 text-primary" />
            Hackathon Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <HackathonCard
              position="Top 3"
              event="NWU CSE FEST Hackathon"
              year="2023"
              highlight={true}
            />
            <HackathonCard
              position="Top 20"
              event="BUET CSE FEST Hackathon"
              year="2024"
            />
            <HackathonCard
              position="Top 35"
              event="SUST CSE FEST Hackathon"
              year="2024"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Code2 className="mr-2 h-6 w-6 text-primary" />
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <Link
                key={index}
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className="h-full hover:border-primary/50 transition-colors group">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-medium">
                        {project.name}
                      </CardTitle>
                      <Star className="h-4 w-4 text-yellow-500" />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-xs text-muted-foreground flex-grow">
                      {truncateDescription(project.description)}
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground space-x-4 mt-auto">
                      {/* Language Tag */}
                      <span className="flex items-center">
                        <span className="w-3 h-3 rounded-full bg-yellow-500 mr-1"></span>
                        {project.language || "N/A"}
                      </span>

                      {/* Stars */}
                      <span className="flex items-center">
                        <Star className="h-3 w-3 mr-1" />
                        {project.stargazers_count}
                      </span>

                      {/* Forks */}
                      <span className="flex items-center">
                        <GitFork className="h-3 w-3 mr-1" />
                        {project.forks_count}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/30 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Outlander. All rights reserved.
              </p>
            </div>
            {/* <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div> */}
          </div>
        </div>
      </footer>
    </div>
  );
}

// function StatCard({ title, value, icon }) {
//   return (
//     <Card className="bg-card/50 backdrop-blur-sm border border-border/50">
//       <CardContent className="p-6">
//         <div className="flex items-center justify-between mb-2">
//           <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
//           <div className="bg-primary/10 p-1.5 rounded-full text-primary">
//             {icon}
//           </div>
//         </div>
//         <p className="text-2xl font-bold">{value}</p>
//       </CardContent>
//     </Card>
//   );
// }

function AchievementCard({ position, event, team, highlight = false }) {
  return (
    <Card
      className={`overflow-hidden transition-all duration-300 hover:shadow-md ${
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

function HackathonCard({ position, event, year, highlight = false }) {
  return (
    <Card
      className={`overflow-hidden transition-all duration-300 hover:shadow-md ${
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

function SkillBar({ name, percentage }) {
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
