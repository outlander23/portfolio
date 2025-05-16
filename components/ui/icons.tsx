import * as React from "react";
import { type LucideIcon, GithubIcon, LinkedinIcon } from "lucide-react";

export const Github: LucideIcon = React.forwardRef<
  React.ElementRef<"svg">,
  React.ComponentPropsWithoutRef<"svg">
>(({ ...props }, ref) => <GithubIcon ref={ref} {...props} />);
Github.displayName = "Github";

export const Linkedin: LucideIcon = React.forwardRef<
  React.ElementRef<"svg">,
  React.ComponentPropsWithoutRef<"svg">
>(({ ...props }, ref) => <LinkedinIcon ref={ref} {...props} />);
Linkedin.displayName = "Linkedin";
