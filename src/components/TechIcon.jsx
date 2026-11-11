import {
  SiBootstrap,
  SiCss,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { Code2 } from "lucide-react";

const ICONS = {
  html5: SiHtml5,
  css: SiCss,
  javascript: SiJavascript,
  react: SiReact,
  bootstrap: SiBootstrap,
  tailwind: SiTailwindcss,
  git: SiGit,
  github: SiGithub,
};

/** Brand icon renderer with a safe fallback. */
export default function TechIcon({ name, className = "h-5 w-5", ...props }) {
  const Icon = ICONS[name] || Code2;
  return <Icon className={className} aria-hidden="true" {...props} />;
}
