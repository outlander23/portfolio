import { useEffect, useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
interface Project {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  forks_count: number;
}

export function Projects() {
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
      });
  }, []);

  // Function to truncate the description to 5-10 words
  const truncateDescription = (description: string) => {
    const words = description.split(" ");
    if (words.length > 10) {
      return words.slice(0, 10).join(" ") + " ...";
    }
    return description;
  };

  return (
    <Card className="bg-white border shadow-lg">
      <CardHeader className="border-b border-gray-200">
        <CardTitle className="text-2xl text-blue-600">
          Featured Projects
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="group relative rounded-xl bg-white border border-gray-200 shadow hover:border-blue-500 transition-colors p-6 flex flex-col justify-between h-full w-full">
                {/* Title and Star Icon */}
                <div className="flex items-center justify-between mb-2">
                  <h3 className="tracking-tight text-sm font-medium">
                    <a
                      href={project.html_url}
                      className="text-blue-600 hover:underline"
                    >
                      {project.name}
                    </a>
                  </h3>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-yellow-500"
                  >
                    <path
                      d="M7.5 0.75L9.75 5.25L14.25 6L10.875 9.375L11.625 14.25L7.5 12L3.375 14.25L4.125 9.375L0.75 6L5.25 5.25L7.5 0.75Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>

                {/* Description */}
                <p className="text-xs text-gray-600 mb-4 flex-grow">
                  {truncateDescription(
                    project.description || "No description available."
                  )}
                </p>

                {/* Tags and Forks */}
                <div className="flex items-center text-xs text-gray-600 space-x-4 mt-auto">
                  {/* Language Tag */}
                  <span className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-yellow-500 mr-1"></span>
                    {project.language || "N/A"}
                  </span>

                  {/* Stars */}
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 mr-1"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    {project.stargazers_count}
                  </span>

                  {/* Forks */}
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 mr-1"
                    >
                      <circle cx="12" cy="18" r="3"></circle>
                      <circle cx="6" cy="6" r="3"></circle>
                      <circle cx="18" cy="6" r="3"></circle>
                      <path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"></path>
                      <path d="M12 12v3"></path>
                    </svg>
                    {project.forks_count}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
