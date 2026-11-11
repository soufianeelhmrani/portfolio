import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import SocialLinks from "./SocialLinks";
import Button from "./ui/Button";
import { useLanguage } from "../context/LanguageContext";
import { getCvUrl, site } from "../data/site";
import { useLockBodyScroll, useScrolled, useScrollSpy } from "../hooks/usePortfolioHooks";

const SECTION_IDS = ["home", "about", "skills", "projects", "education", "contact"];

export default function Navbar() {
  const { t, language } = useLanguage();
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(24);
  const activeId = useScrollSpy(SECTION_IDS);
  const cvUrl = getCvUrl(language);

  useLockBodyScroll(open);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Close the mobile panel when resizing up to desktop.
  useEffect(() => {
    const media = window.matchMedia("(min-width: 1280px)");
    const onChange = () => media.matches && setOpen(false);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-8xl px-3 pt-3 sm:px-6 sm:pt-4 lg:px-8">
        <div
          className={`flex h-16 items-center justify-between gap-2 rounded-2xl px-3 transition-all duration-300 sm:gap-4 sm:px-4 ${
            scrolled ? "glass-strong shadow-soft" : "glass"
          }`}
        >
          <Logo onClick={() => setOpen(false)} />

          <nav aria-label={t("a11y.primaryNav")} className="hidden items-center gap-1 xl:flex">
            {SECTION_IDS.map((id) => {
              const active = activeId === id;
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  aria-current={active ? "page" : undefined}
                  className={`relative rounded-full px-3.5 py-2 text-[0.82rem] font-medium transition-colors duration-300 ${
                    active ? "text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  {active ? (
                    <motion.span
                      layoutId="nav-active-pill"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className="absolute inset-0 -z-10 rounded-full border border-line/10 bg-elevated/70"
                    />
                  ) : null}
                  {t(`nav.${id}`)}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <LanguageSwitcher />
            <ThemeToggle />

            <Button
              as="a"
              href={cvUrl}
              download
              size="sm"
              icon={Download}
              aria-label={t("a11y.cv")}
              className="hidden md:inline-flex"
            >
              {t("common.downloadCv")}
            </Button>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? t("a11y.closeMenu") : t("a11y.openMenu")}
              className="glass grid h-10 w-10 place-items-center rounded-xl text-ink transition-colors hover:border-brand/40 hover:text-brand xl:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={open ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.16 }}
                  className="grid place-items-center"
                >
                  {open ? (
                    <X className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
                  ) : (
                    <Menu className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
                  )}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              aria-label={t("a11y.closeMenu")}
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-[4.75rem] z-40 cursor-default bg-base/50 backdrop-blur-sm xl:hidden"
            />

            <motion.nav
              id="mobile-navigation"
              aria-label={t("a11y.primaryNav")}
              initial={{ opacity: 0, y: -14, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -14, scale: 0.985 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="glass-strong absolute inset-x-3 top-[4.85rem] z-50 max-h-[calc(100svh-6rem)] overflow-y-auto rounded-3xl p-4 shadow-soft sm:inset-x-6 sm:p-5 xl:hidden"
            >
              <div className="grid gap-1">
                {SECTION_IDS.map((id, index) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    aria-current={activeId === id ? "page" : undefined}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      activeId === id
                        ? "bg-brand/10 text-ink"
                        : "text-muted hover:bg-elevated/60 hover:text-ink"
                    }`}
                  >
                    <span>{t(`nav.${id}`)}</span>
                    <span className="font-mono text-[0.62rem] text-muted/70">
                      0{index + 1}
                    </span>
                  </a>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between gap-3 border-t border-line/10 pt-4">
                <LanguageSwitcher align="start" />
                <ThemeToggle />
                <span className="text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                  {t("footer.location")}
                </span>
              </div>

              <Button
                as="a"
                href={cvUrl}
                download
                icon={Download}
                aria-label={t("a11y.cv")}
                className="mt-3 w-full"
              >
                {t("common.downloadCv")}
              </Button>

              <div className="mt-4 flex items-center justify-between border-t border-line/10 pt-4">
                <SocialLinks size="sm" />
                <a
                  href={`mailto:${site.email}`}
                  className="text-xs font-medium text-muted transition-colors hover:text-brand"
                >
                  {t("common.emailDirect")}
                </a>
              </div>
            </motion.nav>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
