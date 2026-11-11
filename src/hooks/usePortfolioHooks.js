import { useEffect, useState } from "react";

/**
 * Scroll spy based on IntersectionObserver.
 * Returns the id of the section currently closest to the middle of the viewport.
 */
export function useScrollSpy(sectionIds, offset = "-45% 0px -50% 0px") {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    if (!sectionIds.length) return undefined;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: offset, threshold: [0, 0.15, 0.4, 0.7] },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [sectionIds, offset]);

  return activeId;
}

/** Lock page scroll while a dialog or the mobile menu is open. */
export function useLockBodyScroll(locked) {
  useEffect(() => {
    if (!locked) return undefined;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [locked]);
}

/** Track whether the page has been scrolled past a threshold. */
export function useScrolled(threshold = 16) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}

/** Simple typewriter that cycles through a list of words. */
export function useTypewriter(words, { enabled = true, typeSpeed = 65, deleteSpeed = 32, pause = 1800 } = {}) {
  const [text, setText] = useState(words[0] ?? "");
  const wordsKey = words.join("|");

  useEffect(() => {
    const list = wordsKey ? wordsKey.split("|") : [];

    if (!enabled || !list.length) {
      setText(list[0] ?? "");
      return undefined;
    }

    let index = 0;
    let deleting = false;
    let current = "";
    let timeout;

    setText("");

    const tick = () => {
      const word = list[index % list.length];

      if (!deleting) {
        current = word.slice(0, current.length + 1);
        setText(current);
        if (current === word) {
          deleting = true;
          timeout = window.setTimeout(tick, pause);
          return;
        }
        timeout = window.setTimeout(tick, typeSpeed);
        return;
      }

      current = word.slice(0, Math.max(0, current.length - 1));
      setText(current);
      if (current === "") {
        deleting = false;
        index += 1;
        timeout = window.setTimeout(tick, typeSpeed);
        return;
      }
      timeout = window.setTimeout(tick, deleteSpeed);
    };

    // Start after a short beat so the hero entrance animation can finish.
    timeout = window.setTimeout(tick, 500);

    return () => window.clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wordsKey, enabled, typeSpeed, deleteSpeed, pause]);

  return text;
}
