"use client";

import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  Star,
  GitFork,
  MapPin,
  Phone,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const skillCategories = [
  {
    category: "Languages",
    skills: [
      "cpp",
      "python",
      "javascript",
    ],
  },
  {
    category: "Frontend",
    skills: ["react", "nextjs", "tailwind"],
  },
  {
    category: "Backend",
    skills: ["nodejs", "express"],
  },
  {
    category: "Database",
    skills: ["mongodb", "mysql"],
  },
  {
    category: "DevOps & Cloud",
    skills: ["docker", "aws"],
  },
  {
    category: "Version Control & CI/CD",
    skills: ["git", "github"],
  },
  {
    category: "AI & Machine Learning",
    skills: ["tensorflow", "pytorch"],
  },
  {
    category: "Tools & IDEs",
    skills: ["vscode", "postman"],
  },
];

export function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Profile Section */}
        <div className="text-center bg-gray-50 rounded-lg p-8 shadow-lg">
          <div className="relative w-32 h-32 mx-auto mb-4">
            <Image
              src="https://avatars.githubusercontent.com/u/81033586?v=4"
              alt="Profile Picture"
              width={128}
              height={128}
              className="rounded-full border-4 border-blue-500"
            />
            <div className="absolute bottom-0 right-0 bg-green-500 w-6 h-6 rounded-full border-4 border-white"></div>
          </div>
          <h1 className="text-4xl font-bold mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            S.M.MILOY
          </h1>
          <p className="mt-2 text-xl text-gray-600">
            Full Stack Developer | Blockchain Specialist | Mobile App Developer
            | AI Enthusiast
          </p>
          <div className="flex justify-center items-center space-x-4 mt-4">
            <span className="flex items-center text-gray-600">
              <MapPin className="w-4 h-4 mr-1" />
              Rangpur, Bangladesh - 5400
            </span>
            <span className="flex items-center text-gray-600">
              <Phone className="w-4 h-4 mr-1" />
              +880 1722777263
            </span>
          </div>
          <div className="flex justify-center space-x-4 mt-6">
            <Link href="mailto:cse1905033brur@gmail.com">
              <Button
                variant="outline"
                size="icon"
                className="bg-white hover:bg-gray-100"
              >
                <Mail className="h-5 w-5 text-purple-600" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
            <Link href={"https://linkedin.com/in/outlander23"}>
              <Button
                variant="outline"
                size="icon"
                className="bg-white hover:bg-gray-100"
              >
                <Linkedin className="h-5 w-5 text-blue-600" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href={"https://github.com/outlander23"}>
              <Button
                variant="outline"
                size="icon"
                className="bg-white hover:bg-gray-100"
              >
                <Github className="h-5 w-5 text-gray-800" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* About Me Section */}
        <Card className="bg-white border shadow-lg">
          <CardHeader className="border-b border-gray-200">
            <CardTitle className="text-2xl text-blue-600">About Me</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-gray-700 mb-4">
              A curious learner and passionate problem solver looking for a challenging position as a Software Engineer in a dynamic company that values my analytical and technical skills and allows me to expand my knowledge.
            </p>
          </CardContent>
        </Card>

        {/* Skills Section */}
        <Card className="bg-white border shadow-lg">
          <CardHeader className="border-b border-gray-200">
            <CardTitle className="text-2xl text-blue-600">Skills</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            {skillCategories.map((category, index) => (
              <div key={index} className="mb-6">
                <h3 className="font-semibold text-lg mb-2">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center justify-center bg-gray-100 rounded-lg p-2 hover:bg-gray-200 transition-colors w-12 h-12"
                    >
                      <Image
                        src={`https://skillicons.dev/icons?i=${skill}`}
                        alt={`${skill} icon`}
                        width={32}
                        height={32}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Education Section */}
        <Card className="bg-white border shadow-lg">
          <CardHeader className="border-b border-gray-200">
            <CardTitle className="text-2xl text-blue-600">Education</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">
                  B.Sc. in Computer Science and Engineering
                </h3>
                <p className="text-gray-600">
                  Begum Rokeya University, Rangpur
                </p>
              </div>
              <p className="text-gray-600">2020 - Present</p>
            </div>
            <p className="text-gray-600">CGPA: 3.22 out of 4.00 till 3rd year 2nd semester</p>
          </CardContent>
        </Card>

        {/* Competitive Programming Experience Section */}
        <Card className="bg-white border shadow-lg">
          <CardHeader className="border-b border-gray-200">
            <CardTitle className="text-2xl text-blue-600">Competitive Programming Experience</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-gray-700 mb-4">Online Judge Max Rating:</p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Codeforces (1606)</li>
              <li>Codechef (1770)</li>
              <li>Leetcode (1416)</li>
              <li>Atcoder (1021)</li>
            </ul>
            <p className="text-gray-700 mt-4 mb-4">Onsite Programming Contest:</p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Placed 3rd : Rangpur Divisional Collegiate Programming Contest 2024 (Team: BRUR_NotStrongEnough)</li>
              <li>Placed 14th : NWU CSE FEST PROGRAMMING CONTEST 2023 (Team: BRUR_SAS)</li>
              <li>Placed 31st : BUET Inter University Programming Contest 2023 (Team: BRUR_hugs4bugs)</li>
              <li>Placed 58th : IUT 11th National ICT Fest 2024 (Team: BRUR_Kuhelika)</li>
              <li>Placed 65th : NCPC Onsite 2023 (Team: BRUR_DayLight)</li>
              <li>Placed 87th : CUET Inter University Programming Contest 2024 (Team: BRUR_Undone)</li>
            </ul>
          </CardContent>
        </Card>

        {/* Hackathon Experience Section */}
        <Card className="bg-white border shadow-lg">
          <CardHeader className="border-b border-gray-200">
            <CardTitle className="text-2xl text-blue-600">Hackathon Experience</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="list-disc pl-5 text-gray-700">
              <li>Top 03 in hackathon at NWU CSE FEST (2023)</li>
              <li>Top 20 in hackathon at BUET CSE FEST (2024)</li>
              <li>Top 30 in hackathon at SUST CSE FEST (2024)</li>
            </ul>
          </CardContent>
        </Card>

        {/* Achievement and Awards Section */}
        <Card className="bg-white border shadow-lg">
          <CardHeader className="border-b border-gray-200">
            <CardTitle className="text-2xl text-blue-600">Achievement and Awards</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="list-disc pl-5 text-gray-700">
              <li>1st Runner Up at Hackathon NWU CSE FEST (2023)</li>
              <li>1st Runner Up at Application and Game Development (2023)</li>
              <li>2nd Runner Up at RDCPC (2024)</li>
            </ul>
          </CardContent>
        </Card>

        {/* Projects Section */}
        <Card className="bg-white border shadow-lg">
          <CardHeader className="border-b border-gray-200">
            <CardTitle className="text-2xl text-blue-600">Academic and Personal Projects</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="list-disc pl-5 text-gray-700">
              <li>CPITOR: An AI-powered C++ code editor for competitive programming.</li>
              <li>TALE: A 2D Platformer Game for web, android, linux and windows.</li>
              <li>MFresh: An open-source Chrome extension to automatically refresh your active tab.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}