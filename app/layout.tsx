import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Link from "next/link";
import { Github, Linkedin, Facebook, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Outlander | Competitive Programmer & Full-Stack Developer",
  description:
    "Expert competitive programmer with 2700+ problems solved and multiple contest achievements.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-sm">
            <div className="container flex h-16 items-center justify-between">
              <div className="flex items-center gap-6 md:gap-10">
                <Link href="/" className="flex items-center space-x-2">
                  <span className="font-bold text-xl">Outlander</span>
                </Link>
                <nav className="hidden md:flex gap-6">
                  <Link
                    href="#about"
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    About
                  </Link>
                  <Link
                    href="#skills"
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Skills
                  </Link>
                  <Link
                    href="#profiles"
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    CP Profiles
                  </Link>
                  <Link
                    href="#achievements"
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Achievements
                  </Link>
                  <Link
                    href="#hackathons"
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Hackathons
                  </Link>
                  <Link
                    href="#projects"
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Projects
                  </Link>
                </nav>
              </div>
              <div className="flex items-center gap-4">
                <Link
                  href="https://github.com/outlander23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href="https://linkedin.com/in/outlander23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="https://facebook.com/smmiloy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                {/* <Button variant="ghost" size="icon" className="ml-2">
                  <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button> */}
              </div>
            </div>
          </div>
          <div className="pt-16">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
