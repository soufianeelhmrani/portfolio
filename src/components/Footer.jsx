import { ArrowUp, Download, Mail, MapPin } from "lucide-react";
import { Github, Linkedin } from "lucide-react";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";
import { useLanguage } from "../context/LanguageContext";
import { getCvUrl, site } from "../data/site";

const SECTION_IDS = ["home", "about", "skills", "projects", "education", "contact"];

export default function Footer() {
  const { t, language } = useLanguage();
  const year = new Date().getFullYear();
  const cvUrl = getCvUrl(language);

  const connectLinks = [
    { id: "email", href: `mailto:${site.email}`, label: site.email, Icon: Mail, external: false },
    { id: "github", href: site.socials.github, label: "GitHub", Icon: Github, external: true },
    { id: "linkedin", href: site.socials.linkedin, label: "LinkedIn", Icon: Linkedin, external: true },
  ];

  return (
    <footer className="relative mt-10 border-t border-line/10">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent"
      />

      <div className="mx-auto max-w-8xl px-5 pb-8 pt-14 sm:px-8 sm:pt-16">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              {t("footer.description")}
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-muted">
              <MapPin className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
              {t("footer.location")}
            </div>
            <SocialLinks size="sm" className="mt-5" />
          </div>

          <nav aria-label={t("footer.navTitle")} className="md:col-span-3">
            <h2 className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-muted">
              {t("footer.navTitle")}
            </h2>
            <ul className="mt-4 grid gap-2.5">
              {SECTION_IDS.map((id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="link-underline inline-block text-sm text-muted transition-colors hover:text-ink"
                  >
                    {t(`nav.${id}`)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h2 className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-muted">
              {t("footer.connectTitle")}
            </h2>
            <ul className="mt-4 grid gap-2.5">
              {connectLinks.map(({ id, href, label, Icon, external }) => (
                <li key={id}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group inline-flex items-center gap-2.5 text-sm text-muted transition-colors hover:text-ink"
                  >
                    <span className="grid h-7 w-7 place-items-center rounded-lg border border-line/10 bg-elevated/40 text-muted transition-colors group-hover:border-brand/30 group-hover:text-brand">
                      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    <span className="break-all">{label}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={cvUrl}
                  download
                  className="group inline-flex items-center gap-2.5 text-sm text-muted transition-colors hover:text-ink"
                >
                  <span className="grid h-7 w-7 place-items-center rounded-lg border border-line/10 bg-elevated/40 text-muted transition-colors group-hover:border-brand/30 group-hover:text-brand">
                    <Download className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  {t("common.downloadCv")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            © {year} {site.name}. {t("footer.rights")}
          </p>
          <p className="text-xs text-muted/80">{t("footer.builtWith")}</p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 self-start rounded-full border border-line/15 bg-elevated/30 px-3.5 py-2 text-xs font-medium text-muted transition-colors hover:border-brand/40 hover:text-ink sm:self-auto"
          >
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
            {t("a11y.backToTop")}
          </button>
        </div>
      </div>
    </footer>
  );
}
