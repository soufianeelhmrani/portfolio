import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { site } from "../data/site";
import { useLanguage } from "../context/LanguageContext";

/** GitHub + LinkedIn links, used in the hero and footer. */
export default function SocialLinks({ size = "md", className = "" }) {
  const { t } = useLanguage();

  const items = [
    { id: "github", href: site.socials.github, Icon: Github, label: t("a11y.github") },
    { id: "linkedin", href: site.socials.linkedin, Icon: Linkedin, label: t("a11y.linkedin") },
  ];

  const dimension = size === "sm" ? "h-9 w-9" : "h-10 w-10";
  const iconSize = size === "sm" ? "h-4 w-4" : "h-[1.1rem] w-[1.1rem]";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {items.map(({ id, href, Icon, label }) => (
        <motion.a
          key={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
          className={`glass grid ${dimension} place-items-center rounded-xl text-muted transition-colors duration-300 hover:border-brand/40 hover:text-brand`}
        >
          <Icon className={iconSize} aria-hidden="true" />
        </motion.a>
      ))}
    </div>
  );
}
