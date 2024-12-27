"use client";

import Image from "next/image";
import { Github, Linkedin, MapPin, Phone, Facebook } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";
import { Projects } from "@/components/projects";

const skillCategories = [
  {
    category: "Languages",
    skills: [
      "js",
      "ts",
      // "wasm",
      "solidity",
      // "php",
      "cpp",
      "java",
      "python",
      // "go",
      // "rust",
    ],
  },
  {
    category: "Frontend",
    skills: ["react", "nextjs", "vite", "remix", "tailwind", "materialui"],
  },
  {
    category: "Backend",
    skills: ["nestjs", "express", "nodejs", , "jest"],
  },
  {
    category: "Database",
    skills: ["mongodb", "mysql", "postgres", "sqlite", "firebase"],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      "docker",
      // "kubernetes",
      // "jenkins",
      "aws",
      "azure",
      "googlecloud",
      // "terraform",
      "nginx",
    ],
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
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center bg-white rounded-lg p-8 shadow-xl  mx-auto"
        >
          <div className="relative w-32 h-32 mx-auto mb-6 group">
            <Image
              src="https://avatars.githubusercontent.com/u/81033586?v=4"
              alt="Profile Picture"
              width={128}
              height={128}
              className="rounded-full border-4 border-blue-600 group-hover:scale-105 transition-all duration-300"
            />
            <div className="absolute bottom-0 right-0 bg-green-500 w-6 h-6 rounded-full border-4 border-white shadow-lg"></div>
          </div>

          <h1 className="text-3xl font-semibold mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            S.M.Miloy
          </h1>

          <p className="mt-2 text-lg text-gray-500">
            Full Stack Developer | Competitive Programmer | Mobile App Developer
            | AI Enthusiast
          </p>

          <div className="flex justify-center items-center space-x-6 mt-4">
            <span className="flex items-center text-gray-600">
              <MapPin className="w-5 h-5 mr-2" />
              Rangpur, Bangladesh - 5400
            </span>
            <span className="flex items-center text-gray-600">
              <Phone className="w-5 h-5 mr-2" />
              +880 1722777263
            </span>
          </div>

          <div className="flex justify-center space-x-5 mt-6">
            <Link href={"https://linkedin.com/in/outlander23"}>
              <Button
                variant="outline"
                size="icon"
                className="bg-white hover:bg-gray-100 rounded-full shadow-sm transition-all duration-300"
              >
                <Linkedin className="h-6 w-6 text-blue-600" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href={"https://github.com/outlander23"}>
              <Button
                variant="outline"
                size="icon"
                className="bg-white hover:bg-gray-100 rounded-full shadow-sm transition-all duration-300"
              >
                <Github className="h-6 w-6 text-gray-800" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href={"https://facebook.com/smmiloy"}>
              <Button
                variant="outline"
                size="icon"
                className="bg-white hover:bg-gray-100 rounded-full shadow-sm transition-all duration-300"
              >
                <Facebook className="h-6 w-6 text-blue-800" />
                <span className="sr-only">Facebook</span>
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* About Me Section */}
        <Card className="bg-white border shadow-lg">
          <CardHeader className="border-b border-gray-200">
            <CardTitle className="text-2xl text-blue-600">About Me</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-gray-700 mb-4">
              A curious learner and passionate problem solver looking for a
              challenging position as a Software Engineer in a dynamic company
              that values my analytical and technical skills and allows me to
              expand my knowledge.
            </p>
            <p className="text-gray-700">
              I thrive in challenging environments that allow me to apply my
              technical skills while continuously learning and growing. I am
              looking for opportunities to contribute to dynamic teams and make
              a meaningful impact through my work.
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
          </CardContent>
        </Card>

        {/* Competitive Programming Experience Section */}
        <Card className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
          <CardHeader className="border-b border-gray-300 pb-4">
            <CardTitle className="text-2xl text-blue-600">
              Competitive Programming Experience
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-gray-600 text-sm mb-4">
              Online Judge Max Rating:
            </p>

            <div className="flex flex-wrap gap-4 justify-start">
              {/* Custom Containers for Competitive Platforms */}
              <div className="bg-gray-50 p-3 rounded-lg shadow-sm hover:bg-gray-100 transition-all duration-300 w-auto">
                <Link
                  href="https://codeforces.com/profile/outlander"
                  className="text-gray-700 font-medium text-sm hover:text-blue-600"
                >
                  Codeforces (1606)
                </Link>
              </div>

              <div className="bg-gray-50 p-3 rounded-lg shadow-sm hover:bg-gray-100 transition-all duration-300 w-auto">
                <Link
                  href="https://www.codechef.com/users/miloy23"
                  className="text-gray-700 font-medium text-sm hover:text-green-600"
                >
                  Codechef (1795)
                </Link>
              </div>

              <div className="bg-gray-50 p-3 rounded-lg shadow-sm hover:bg-gray-100 transition-all duration-300 w-auto">
                <Link
                  href="https://leetcode.com/miloy23"
                  className="text-gray-700 font-medium text-sm hover:text-orange-600"
                >
                  Leetcode (1416)
                </Link>
              </div>

              <div className="bg-gray-50 p-3 rounded-lg shadow-sm hover:bg-gray-100 transition-all duration-300 w-auto">
                <Link
                  href="https://atcoder.jp/users/miloy"
                  className="text-gray-700 font-medium text-sm hover:text-purple-600"
                >
                  Atcoder (1036)
                </Link>
              </div>
            </div>
            <br></br>
            <p className="text-gray-600 text-sm mb-4">
              Onsite Programming Contest:
            </p>

            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr>
                  <th className="text-left text-gray-700 text-sm p-3 border-b">
                    Rank
                  </th>
                  <th className="text-left text-gray-700 text-sm p-3 border-b">
                    Contest Name
                  </th>
                  <th className="text-left text-gray-700 text-sm p-3 border-b">
                    Team Name
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="text-gray-700 p-3">3rd</td>
                  <td className="text-gray-700 p-3">
                    Rangpur Divisional Collegiate Programming Contest 2024
                  </td>
                  <td className="text-gray-700 font-semibold p-3">
                    BRUR_NotStrongEnough
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="text-gray-700 p-3">14th</td>
                  <td className="text-gray-700 p-3">
                    NWU Inter University Programming Contest 2023
                  </td>
                  <td className="text-gray-700 font-semibold p-3">BRUR_SAS</td>
                </tr>
                <tr className="border-b">
                  <td className="text-gray-700 p-3">31st</td>
                  <td className="text-gray-700 p-3">
                    BUET Inter University Programming Contest 2023
                  </td>
                  <td className="text-gray-700 font-semibold p-3">
                    BRUR_hugs4bugs
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="text-gray-700 p-3">58th</td>
                  <td className="text-gray-700 p-3">
                    IUT Inter University Programming Contest 2024
                  </td>
                  <td className="text-gray-700 font-semibold p-3">
                    BRUR_Kuhelika
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="text-gray-700 p-3">65th</td>
                  <td className="text-gray-700 p-3">
                    National Collegiate Programming Contest 2023{" "}
                  </td>
                  <td className="text-gray-700 font-semibold p-3">
                    BRUR_DayLight
                  </td>
                </tr>
                <tr>
                  <td className="text-gray-700 p-3">87th</td>
                  <td className="text-gray-700 p-3">
                    CUET Inter University Programming Contest 2024
                  </td>
                  <td className="text-gray-700 font-semibold p-3">
                    BRUR_Undone
                  </td>
                </tr>
              </tbody>
            </table>
          </CardContent>
        </Card>

        {/* Hackathon Experience Section */}
        <Card className="bg-white border shadow-lg">
          <CardHeader className="border-b border-gray-200">
            <CardTitle className="text-2xl text-blue-600">
              Hackathon Experience
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="list-disc pl-5 text-gray-700">
              <li>
                Ranked in the Top 3 team at the Hackathon, NWU CSE FEST (2023)
              </li>
              <li>
                Ranked in the Top 20 team at the Hackathon, BUET CSE FEST (2024)
              </li>
              <li>
                Ranked in the Top 35 team at the Hackathon, SUST CSE FEST (2024)
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Achievement and Awards Section */}
        <Card className="bg-white border shadow-lg">
          <CardHeader className="border-b border-gray-200">
            <CardTitle className="text-2xl text-blue-600">
              Achievement and Awards
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="list-disc pl-6 text-gray-700 space-y-4">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <strong>Champion</strong> in the <em>Quiz Competition</em> at{" "}
                <strong>North Western University</strong> CSE FEST (2023)
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <strong>1st Runner-up</strong> in the Hackathon at{" "}
                <strong>North Western University</strong> CSE FEST (2023)
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <strong>1st Runner-up</strong> in{" "}
                <em>Application and Game Development</em> (2023)
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <strong>2nd Runner-up</strong> at the{" "}
                <em>Rangpur Divisional Collegiate Programming Contest</em>{" "}
                (2024)
              </motion.li>
            </ul>
          </CardContent>
        </Card>

        {/* Projects Section */}
        <Projects />
      </div>
    </div>
  );
}
