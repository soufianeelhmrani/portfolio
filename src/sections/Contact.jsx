import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  ArrowUpRight,
  CheckCircle2,
  Github,
  Info,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  Tag,
  User,
} from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import Button from "../components/ui/Button";
import SocialLinks from "../components/SocialLinks";
import { useLanguage } from "../context/LanguageContext";
import { site } from "../data/site";

const INITIAL_VALUES = { name: "", email: "", subject: "", message: "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function Field({ id, label, error, icon: Icon, children }) {
  return (
    <div className="min-w-0">
      <label
        htmlFor={id}
        className="mb-1.5 flex items-center gap-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted"
      >
        {label}
        <span className="text-brand" aria-hidden="true">
          *
        </span>
      </label>

      <div className="relative">
        <Icon
          className="pointer-events-none absolute start-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted/60"
          aria-hidden="true"
        />
        {children}
      </div>

      {error ? (
        <p
          id={`contact-${id}-error`}
          className="mt-1.5 flex items-start gap-1.5 text-[0.7rem] leading-snug text-rose-500 dark:text-rose-400"
        >
          <AlertCircle className="mt-0.5 h-3 w-3 shrink-0" aria-hidden="true" />
          {error}
        </p>
      ) : null}
    </div>
  );
}

export default function Contact() {
  const { t } = useLanguage();
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | error | success
  const [mailto, setMailto] = useState("");
  const refs = useRef({});

  const validate = (data) => {
    const next = {};
    const name = data.name.trim();
    const email = data.email.trim();
    const subject = data.subject.trim();
    const message = data.message.trim();

    if (!name) next.name = t("contact.form.errors.nameRequired");
    else if (name.length < 2) next.name = t("contact.form.errors.nameShort");

    if (!email) next.email = t("contact.form.errors.emailRequired");
    else if (!EMAIL_RE.test(email)) next.email = t("contact.form.errors.emailInvalid");

    if (!subject) next.subject = t("contact.form.errors.subjectRequired");
    else if (subject.length < 3) next.subject = t("contact.form.errors.subjectShort");

    if (!message) next.message = t("contact.form.errors.messageRequired");
    else if (message.length < 20) next.message = t("contact.form.errors.messageShort");

    return next;
  };

  // Focus the first invalid field after a failed submit.
  useEffect(() => {
    if (status !== "error") return;
    const first = Object.keys(errors)[0];
    if (first && refs.current[first]) refs.current[first].focus();
  }, [status, errors]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));

    if (errors[name]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[name];
        return next;
      });
    }
    if (status === "error") setStatus("idle");
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    const next = validate(values);
    setErrors((current) => {
      const copy = { ...current };
      if (next[name]) copy[name] = next[name];
      else delete copy[name];
      return copy;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const next = validate(values);
    setErrors(next);

    if (Object.keys(next).length > 0) {
      setStatus("error");
      return;
    }

    const body = `${values.message.trim()}\n\n— ${values.name.trim()} (${values.email.trim()})`;
    setMailto(
      `mailto:${site.email}?subject=${encodeURIComponent(values.subject.trim())}&body=${encodeURIComponent(body)}`,
    );
    setStatus("success");
  };

  const resetForm = () => {
    setValues(INITIAL_VALUES);
    setErrors({});
    setStatus("idle");
    setMailto("");
  };

  const contactItems = [
    {
      id: "email",
      Icon: Mail,
      label: t("contact.info.emailLabel"),
      value: site.email,
      href: `mailto:${site.email}`,
      external: false,
    },
    {
      id: "github",
      Icon: Github,
      label: t("contact.info.githubLabel"),
      value: "github.com",
      href: site.socials.github,
      external: true,
    },
    {
      id: "linkedin",
      Icon: Linkedin,
      label: t("contact.info.linkedinLabel"),
      value: "linkedin.com",
      href: site.socials.linkedin,
      external: true,
    },
    {
      id: "location",
      Icon: MapPin,
      label: t("contact.info.locationLabel"),
      value: t("contact.info.locationValue"),
      href: null,
      external: false,
    },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div>
            <SectionHeading
              align="start"
              eyebrow={t("contact.eyebrow")}
              title={t("contact.title")}
              accent={t("contact.titleAccent")}
              description={t("contact.description")}
            />

            <Reveal delay={0.1} className="mt-8">
              <div className="glass relative overflow-hidden rounded-3xl p-5">
                <div
                  aria-hidden="true"
                  className="absolute -end-10 -top-10 h-28 w-28 rounded-full bg-emerald-400/10 blur-2xl"
                />
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                  </span>
                  <h3 className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-300">
                    {t("contact.availabilityTitle")}
                  </h3>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {t("contact.availabilityText")}
                </p>
              </div>
            </Reveal>

            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {contactItems.map(({ id, Icon, label, value, href, external }) => {
                const inner = (
                  <>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-line/10 bg-elevated/40 text-brand">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-muted">
                        {label}
                      </span>
                      <span className="mt-0.5 block truncate text-xs font-medium text-ink" dir="ltr">
                        {value}
                      </span>
                    </span>
                    {href ? (
                      <ArrowUpRight
                        className="h-3.5 w-3.5 shrink-0 text-muted transition-colors group-hover:text-brand"
                        aria-hidden="true"
                      />
                    ) : null}
                  </>
                );

                return (
                  <li key={id}>
                    {href ? (
                      <a
                        href={href}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="glass group flex items-center gap-3 rounded-2xl p-3.5 transition-colors duration-300 hover:border-brand/30"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="glass flex items-center gap-3 rounded-2xl p-3.5">{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-5 flex items-center gap-3">
              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-muted">
                {t("footer.connectTitle")}
              </span>
              <span className="h-px w-6 bg-line/20" aria-hidden="true" />
              <SocialLinks size="sm" />
            </div>
          </div>

          <Reveal delay={0.08} y={30}>
            <div className="glass relative overflow-hidden rounded-3xl p-5 shadow-soft sm:p-7">
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent"
              />

              <AnimatePresence mode="wait" initial={false}>
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.3 }}
                    className="flex min-h-[26rem] flex-col items-center justify-center py-8 text-center"
                    aria-live="polite"
                  >
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-emerald-400/10 text-emerald-500 ring-1 ring-emerald-400/30 dark:text-emerald-400">
                      <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                      {t("contact.form.successTitle")}
                    </h3>
                    <p className="mt-2.5 max-w-md text-sm leading-relaxed text-muted">
                      {t("contact.form.successText")}
                    </p>
                    <div className="mt-6 flex w-full flex-col justify-center gap-2 sm:flex-row">
                      <Button as="a" href={mailto} icon={Mail}>
                        {t("contact.form.openEmail")}
                      </Button>
                      <Button type="button" variant="secondary" onClick={resetForm}>
                        {t("contact.form.sendAnother")}
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onSubmit={handleSubmit}
                    noValidate
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand/10 text-brand">
                        <Send className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <h3 className="font-display text-lg font-semibold text-ink">
                        {t("contact.form.title")}
                      </h3>
                    </div>

                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                      <Field
                        id="name"
                        label={t("contact.form.name")}
                        error={errors.name}
                        icon={User}
                      >
                        <input
                          ref={(element) => {
                            refs.current.name = element;
                          }}
                          id="name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder={t("contact.form.namePlaceholder")}
                          aria-invalid={Boolean(errors.name)}
                          aria-describedby={errors.name ? "contact-name-error" : undefined}
                          className="input-field ps-10"
                        />
                      </Field>

                      <Field
                        id="email"
                        label={t("contact.form.email")}
                        error={errors.email}
                        icon={Mail}
                      >
                        <input
                          ref={(element) => {
                            refs.current.email = element;
                          }}
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder={t("contact.form.emailPlaceholder")}
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={errors.email ? "contact-email-error" : undefined}
                          className="input-field ps-10"
                          dir="ltr"
                        />
                      </Field>

                      <div className="sm:col-span-2">
                        <Field
                          id="subject"
                          label={t("contact.form.subject")}
                          error={errors.subject}
                          icon={Tag}
                        >
                          <input
                            ref={(element) => {
                              refs.current.subject = element;
                            }}
                            id="subject"
                            name="subject"
                            type="text"
                            value={values.subject}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder={t("contact.form.subjectPlaceholder")}
                            aria-invalid={Boolean(errors.subject)}
                            aria-describedby={errors.subject ? "contact-subject-error" : undefined}
                            className="input-field ps-10"
                          />
                        </Field>
                      </div>

                      <div className="sm:col-span-2">
                        <label
                          htmlFor="message"
                          className="mb-1.5 flex items-center gap-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted"
                        >
                          {t("contact.form.message")}
                          <span className="text-brand" aria-hidden="true">
                            *
                          </span>
                        </label>
                        <div className="relative">
                          <MessageSquare
                            className="pointer-events-none absolute start-3.5 top-3.5 h-4 w-4 text-muted/60"
                            aria-hidden="true"
                          />
                          <textarea
                            ref={(element) => {
                              refs.current.message = element;
                            }}
                            id="message"
                            name="message"
                            rows={5}
                            value={values.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder={t("contact.form.messagePlaceholder")}
                            aria-invalid={Boolean(errors.message)}
                            aria-describedby={errors.message ? "contact-message-error" : undefined}
                            className="input-field resize-none ps-10"
                          />
                        </div>
                        {errors.message ? (
                          <p
                            id="contact-message-error"
                            className="mt-1.5 flex items-start gap-1.5 text-[0.7rem] leading-snug text-rose-500 dark:text-rose-400"
                          >
                            <AlertCircle className="mt-0.5 h-3 w-3 shrink-0" aria-hidden="true" />
                            {errors.message}
                          </p>
                        ) : null}
                      </div>
                    </div>

                    {status === "error" && Object.keys(errors).length > 0 ? (
                      <div
                        role="alert"
                        className="mt-4 flex items-start gap-2 rounded-xl border border-rose-500/25 bg-rose-500/[0.07] px-3.5 py-2.5 text-xs leading-relaxed text-rose-600 dark:text-rose-300"
                      >
                        <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        {t("contact.form.errorSummary")}
                      </div>
                    ) : null}

                    <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <p className="flex max-w-xs items-start gap-2 text-[0.68rem] leading-relaxed text-muted/80">
                        <Info className="mt-0.5 h-3 w-3 shrink-0 text-brand" aria-hidden="true" />
                        {t("contact.form.note")}
                      </p>
                      <Button type="submit" icon={Send} className="shrink-0">
                        {t("contact.form.submit")}
                      </Button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
