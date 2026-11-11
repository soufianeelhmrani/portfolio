/**
 * Centralized translation object.
 * Every visible string on the site lives here (EN / FR / AR).
 * Access values with the `t("dot.path")` helper from LanguageContext.
 */

export const LANGUAGES = [
  { code: "en", label: "EN", name: "English", dir: "ltr" },
  { code: "fr", label: "FR", name: "Français", dir: "ltr" },
  { code: "ar", label: "AR", name: "العربية", dir: "rtl" },
];

export const translations = {
  en: {
    meta: {
      title: "ELHAMRANI Soufiane — Junior Frontend Developer",
      description:
        "Portfolio of ELHAMRANI Soufiane, a Junior Frontend Developer from Morocco building modern, responsive and interactive web experiences with React.js.",
    },
    a11y: {
      skipToContent: "Skip to content",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
      toggleThemeToLight: "Switch to light mode",
      toggleThemeToDark: "Switch to dark mode",
      switchLanguage: "Change language",
      github: "Visit GitHub profile",
      linkedin: "Visit LinkedIn profile",
      scrollDown: "Scroll to content",
      backToTop: "Back to top",
      closeDialog: "Close dialog",
      cv: "Download CV as PDF",
      primaryNav: "Primary navigation",
    },
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      education: "Education",
      contact: "Contact",
    },
    common: {
      downloadCv: "Download CV",
      viewProjects: "View My Projects",
      contactMe: "Contact Me",
      viewDemo: "Live Demo",
      sourceCode: "GitHub",
      details: "Details",
      close: "Close",
      all: "All",
      newTab: "Opens in a new tab",
      placeholderProject: "Placeholder project",
      emailDirect: "Email me directly",
      language: "Language",
      theme: "Theme",
    },
    hero: {
      availability: "Available for internships & junior roles",
      greeting: "Hi, I'm",
      name: "Soufiane ELHAMRANI",
      title: "Junior Frontend Developer | React.js Enthusiast",
      roles: [
        "Junior Frontend Developer",
        "React.js Developer",
        "Passionate Web Developer",
        "UI-Focused Problem Solver",
      ],
      description:
        "I build modern, responsive, and interactive web experiences using React.js and modern frontend technologies.",
      stats: [
        { value: "8", label: "Core technologies" },
        { value: "6", label: "Sample projects" },
        { value: "3", label: "Site languages" },
        { value: "∞", label: "Curiosity" },
      ],
      toolkit: "Building with",
      scroll: "Scroll to explore",
    },
    about: {
      eyebrow: "About me",
      title: "Turning curiosity into",
      titleAccent: "polished interfaces",
      description:
        "A junior developer with a designer's eye, a scientist's curiosity, and a genuine love for the craft.",
      paragraphs: [
        "I'm Soufiane, a passionate Junior Frontend Developer from Morocco. I love the moment an idea becomes a fast, accessible interface that people genuinely enjoy using.",
        "My focus is React.js and modern CSS. I care about clean components, thoughtful motion, and the small details that make a product feel premium. Right now I'm looking for an internship or junior role where I can learn from experienced developers and contribute to real projects.",
        "When I'm not coding, I'm exploring design systems, reading about accessibility, or rebuilding interfaces I admire to understand exactly how they work.",
      ],
      cards: [
        {
          icon: "sparkles",
          title: "Frontend craft",
          text: "Component-driven UI, responsive layouts and motion that supports the experience — never distracts from it.",
        },
        {
          icon: "puzzle",
          title: "Problem solver",
          text: "I enjoy breaking complex problems into small, testable pieces and improving the solution step by step.",
        },
        {
          icon: "book",
          title: "Continuous learner",
          text: "Every project is a chance to learn something new, from accessibility patterns to cleaner state management.",
        },
        {
          icon: "target",
          title: "Detail obsessed",
          text: "Spacing, contrast, focus states, empty states — the invisible details are what make an interface feel right.",
        },
      ],
      info: {
        nameLabel: "Name",
        locationLabel: "Location",
        educationLabel: "Education",
        focusLabel: "Focus",
        statusLabel: "Status",
        educationValue: "Baccalauréat Sciences Physiques + OFPPT",
        focusValue: "React.js & modern frontend",
        statusValue: "Open to opportunities",
      },
      quote:
        "Great interfaces feel effortless. That's the standard I build toward — one thoughtful detail at a time.",
      goalsTitle: "What I'm looking for",
      goalsText:
        "An internship or junior frontend position where I can ship real features, learn from a strong team, and keep growing into a well-rounded engineer.",
      cta: "Let's talk",
    },
    skills: {
      eyebrow: "Skills",
      title: "The tools I",
      titleAccent: "build with",
      description:
        "A practical toolkit for building modern, responsive interfaces — plus the mindset to learn whatever comes next.",
      categories: {
        frontend: "Frontend Development",
        programming: "Programming",
        tools: "Tools & Technologies",
      },
      items: {
        html5: {
          description:
            "Semantic, accessible markup that gives every page a solid, SEO-friendly foundation.",
        },
        css3: {
          description:
            "Responsive layouts, modern selectors, flexbox, grid and the visual details that polish a UI.",
        },
        react: {
          description:
            "Component-driven interfaces, hooks, state management and smooth, meaningful interactions.",
        },
        tailwind: {
          description:
            "Utility-first styling, design tokens and scalable systems that stay consistent as a project grows.",
        },
        bootstrap: {
          description:
            "Fast, consistent layouts with the grid system and ready-to-use utility classes.",
        },
        javascript: {
          description:
            "ES6+ fundamentals, DOM APIs, async logic and clean, reusable functions.",
        },
        git: {
          description:
            "Version control, branching and a confident workflow for collaborating on real codebases.",
        },
        github: {
          description:
            "Repositories, pull requests and sharing work openly with the developer community.",
        },
      },
      exploringLabel: "Currently exploring",
      exploring: "TypeScript · Next.js · accessible animation",
      note: "No experience levels are shown — I'm a junior developer focused on strong fundamentals and steady growth.",
    },
    projects: {
      eyebrow: "Projects",
      title: "Selected work",
      titleAccent: "& experiments",
      description:
        "A set of placeholder projects that show how I approach layout, interaction and responsive design. Swap them for your real work anytime.",
      filters: {
        all: "All",
        react: "React",
        javascript: "JavaScript",
        ui: "UI & Web",
      },
      items: {
        nova: {
          title: "Nova Dashboard",
          description:
            "A clean analytics dashboard concept with responsive data cards, a sidebar and a lightweight chart area.",
          features: [
            "Responsive dashboard shell with a collapsible sidebar",
            "Reusable stat, table and chart components",
            "Consistent color tokens for dark and light themes",
          ],
        },
        lumen: {
          title: "Lumen Landing",
          description:
            "A conversion-focused product landing page with a strong hero, feature highlights and a clear call to action.",
          features: [
            "Clear visual hierarchy from hero to call to action",
            "Responsive feature grid with subtle scroll reveals",
            "Accessible navigation and keyboard-friendly interactions",
          ],
        },
        taskflow: {
          title: "TaskFlow",
          description:
            "A focused task manager interface with quick add, status columns and a calm, distraction-free layout.",
          features: [
            "Three-column board with drag-friendly card layouts",
            "Instant filtering and optimistic task updates",
            "Persistent local state for a frictionless demo",
          ],
        },
        aurora: {
          title: "Aurora Portfolio",
          description:
            "A minimal portfolio template built around strong typography, generous whitespace and subtle motion.",
          features: [
            "Typography-first layout with a flexible section system",
            "Reusable cards, badges and motion primitives",
            "Fully responsive from small phones to wide screens",
          ],
        },
        weatherly: {
          title: "Weatherly",
          description:
            "A weather app interface that turns a simple forecast into a clear, glanceable experience.",
          features: [
            "Current conditions plus a compact multi-day forecast",
            "Graceful loading, empty and error states",
            "Light and dark presentation of the same data",
          ],
        },
        shopkit: {
          title: "ShopKit",
          description:
            "An e-commerce storefront UI with a product grid, filter chips and a responsive cart summary.",
          features: [
            "Responsive product grid with quick-view details",
            "Category filters with animated layout transitions",
            "Accessible cart summary and checkout flow shell",
          ],
        },
      },
      modal: {
        overview: "Overview",
        highlights: "Highlights",
        stack: "Tech stack",
        note: "This is an editable placeholder project. Update src/data/projects.js with your real project and links.",
        preview: "Demo preview",
        previewNote:
          "No external demo is linked for this placeholder, so you're seeing the project details instead.",
      },
      placeholderBadge: "Placeholder",
    },
    education: {
      eyebrow: "Education",
      title: "Education",
      titleAccent: "& training",
      description:
        "A foundation in science and hands-on professional training — with plenty of self-driven learning in between.",
      items: {
        bac: {
          title: "Baccalauréat Sciences Physiques",
          org: "Morocco",
          type: "High school diploma",
          description:
            "A science-focused foundation that sharpened my analytical thinking, discipline and problem-solving habits.",
        },
        ofppt: {
          title: "OFPPT — Professional Training",
          org: "Morocco",
          type: "Professional training",
          description:
            "Hands-on professional training focused on practical, job-ready skills. The specialization and official dates are intentionally left as editable placeholders.",
        },
      },
      specializationLabel: "Specialization",
      specializationPlaceholder: "To be added",
      note: "No dates or diplomas were invented. Edit src/data/site.js to add your specialization and official details.",
      learningTitle: "Self-driven learning",
      learningText:
        "Alongside formal education, I learn through documentation, small experiments and rebuilding interfaces I admire — then applying what I learn to my next project.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's build",
      titleAccent: "something together",
      description:
        "Have an internship, a junior role or a project in mind? I'd love to hear about it.",
      info: {
        emailLabel: "Email",
        githubLabel: "GitHub",
        linkedinLabel: "LinkedIn",
        locationLabel: "Location",
        locationValue: "Morocco",
      },
      availabilityTitle: "Open to opportunities",
      availabilityText:
        "Currently looking for internships and junior frontend roles. Remote, hybrid or on-site — happy to learn more.",
      form: {
        title: "Send me a message",
        name: "Full name",
        namePlaceholder: "Your full name",
        email: "Email",
        emailPlaceholder: "you@example.com",
        subject: "Subject",
        subjectPlaceholder: "Internship, project, or a quick hello",
        message: "Message",
        messagePlaceholder: "Tell me a little about what you have in mind...",
        submit: "Send Message",
        note: "This form validates locally only — it is not connected to an email service yet.",
        successTitle: "Message validated",
        successText:
          "Your message passed validation. This portfolio doesn't send emails yet, so nothing was transmitted. You can send it directly from your email app instead.",
        openEmail: "Open in email app",
        sendAnother: "Write another message",
        errorSummary: "Please fix the highlighted fields.",
        errors: {
          nameRequired: "Please enter your name.",
          nameShort: "Your name should be at least 2 characters.",
          emailRequired: "Please enter your email address.",
          emailInvalid: "Please enter a valid email address.",
          subjectRequired: "Please add a subject.",
          subjectShort: "Your subject should be at least 3 characters.",
          messageRequired: "Please write a message.",
          messageShort: "Please write at least 20 characters.",
        },
      },
    },
    footer: {
      description:
        "Junior frontend developer from Morocco, building thoughtful interfaces with React.js and modern CSS.",
      navTitle: "Navigate",
      connectTitle: "Connect",
      rights: "All rights reserved.",
      builtWith: "Designed & built with React, Tailwind CSS and Framer Motion.",
      location: "Based in Morocco",
    },
    cv: {
      profile: "Profile",
      skills: "Skills",
      projects: "Selected projects",
      education: "Education & training",
      focus: "Currently exploring",
      availability: "Availability",
      contact: "Contact",
      footer: "Curriculum Vitae",
      specialization: "Specialization",
    },
  },

  fr: {
    meta: {
      title: "ELHAMRANI Soufiane — Développeur Frontend Junior",
      description:
        "Portfolio de ELHAMRANI Soufiane, développeur frontend junior au Maroc, spécialisé dans la création d'expériences web modernes et responsives avec React.js.",
    },
    a11y: {
      skipToContent: "Aller au contenu",
      openMenu: "Ouvrir le menu de navigation",
      closeMenu: "Fermer le menu de navigation",
      toggleThemeToLight: "Passer en mode clair",
      toggleThemeToDark: "Passer en mode sombre",
      switchLanguage: "Changer de langue",
      github: "Voir le profil GitHub",
      linkedin: "Voir le profil LinkedIn",
      scrollDown: "Faire défiler vers le contenu",
      backToTop: "Retour en haut",
      closeDialog: "Fermer la fenêtre",
      cv: "Télécharger le CV en PDF",
      primaryNav: "Navigation principale",
    },
    nav: {
      home: "Accueil",
      about: "À propos",
      skills: "Compétences",
      projects: "Projets",
      education: "Formation",
      contact: "Contact",
    },
    common: {
      downloadCv: "Télécharger le CV",
      viewProjects: "Voir mes projets",
      contactMe: "Me contacter",
      viewDemo: "Démo en ligne",
      sourceCode: "GitHub",
      details: "Détails",
      close: "Fermer",
      all: "Tous",
      newTab: "S'ouvre dans un nouvel onglet",
      placeholderProject: "Projet d'exemple",
      emailDirect: "M'écrire directement",
      language: "Langue",
      theme: "Thème",
    },
    hero: {
      availability: "Disponible pour un stage ou un poste junior",
      greeting: "Salut, je suis",
      name: "Soufiane ELHAMRANI",
      title: "Développeur Frontend Junior | Passionné par React.js",
      roles: [
        "Développeur Frontend Junior",
        "Développeur React.js",
        "Développeur Web passionné",
        "Créateur d'interfaces soignées",
      ],
      description:
        "Je crée des expériences web modernes, responsives et interactives avec React.js et les technologies frontend actuelles.",
      stats: [
        { value: "8", label: "Technologies clés" },
        { value: "6", label: "Projets d'exemple" },
        { value: "3", label: "Langues du site" },
        { value: "∞", label: "Curiosité" },
      ],
      toolkit: "Je construis avec",
      scroll: "Défiler pour découvrir",
    },
    about: {
      eyebrow: "À propos",
      title: "La curiosité au service d'",
      titleAccent: "interfaces soignées",
      description:
        "Un développeur junior avec l'œil d'un designer, la curiosité d'un scientifique et un vrai amour du métier.",
      paragraphs: [
        "Je m'appelle Soufiane, développeur frontend junior passionné, basé au Maroc. J'aime le moment où une idée devient une interface rapide, accessible et agréable à utiliser.",
        "Je me concentre sur React.js et le CSS moderne. J'accorde de l'importance aux composants propres, aux animations utiles et aux petits détails qui rendent un produit premium. Je recherche aujourd'hui un stage ou un poste junior pour apprendre auprès de développeurs expérimentés et contribuer à de vrais projets.",
        "Quand je ne code pas, j'explore les design systems, je lis sur l'accessibilité ou je reconstruis des interfaces que j'admire pour comprendre comment elles fonctionnent.",
      ],
      cards: [
        {
          icon: "sparkles",
          title: "Art du frontend",
          text: "Des interfaces à base de composants, des mises en page responsives et des animations au service de l'expérience.",
        },
        {
          icon: "puzzle",
          title: "Résolution de problèmes",
          text: "J'aime découper un problème complexe en petites étapes testables et améliorer la solution progressivement.",
        },
        {
          icon: "book",
          title: "Apprentissage continu",
          text: "Chaque projet est une occasion d'apprendre, des bonnes pratiques d'accessibilité à une gestion d'état plus claire.",
        },
        {
          icon: "target",
          title: "Souci du détail",
          text: "Espacements, contrastes, états de focus, états vides : les détails invisibles font toute la différence.",
        },
      ],
      info: {
        nameLabel: "Nom",
        locationLabel: "Localisation",
        educationLabel: "Formation",
        focusLabel: "Spécialité",
        statusLabel: "Statut",
        educationValue: "Baccalauréat Sciences Physiques + OFPPT",
        focusValue: "React.js & frontend moderne",
        statusValue: "Ouvert aux opportunités",
      },
      quote:
        "Une bonne interface paraît évidente. C'est vers ce niveau que je construis — un détail soigné après l'autre.",
      goalsTitle: "Ce que je recherche",
      goalsText:
        "Un stage ou un poste frontend junior où je peux livrer de vraies fonctionnalités, apprendre auprès d'une équipe solide et continuer à progresser.",
      cta: "Discutons",
    },
    skills: {
      eyebrow: "Compétences",
      title: "Les outils avec lesquels",
      titleAccent: "je construis",
      description:
        "Une boîte à outils concrète pour créer des interfaces modernes et responsives — et l'envie d'apprendre ce qui vient ensuite.",
      categories: {
        frontend: "Développement Frontend",
        programming: "Programmation",
        tools: "Outils & Technologies",
      },
      items: {
        html5: {
          description:
            "Un balisage sémantique et accessible qui donne à chaque page une base solide et optimisée pour le SEO.",
        },
        css3: {
          description:
            "Mises en page responsives, sélecteurs modernes, flexbox, grid et tous les détails visuels qui soignent une interface.",
        },
        react: {
          description:
            "Interfaces à base de composants, hooks, gestion d'état et interactions fluides et pertinentes.",
        },
        tailwind: {
          description:
            "Styles utilitaires, design tokens et systèmes évolutifs qui restent cohérents à mesure que le projet grandit.",
        },
        bootstrap: {
          description:
            "Des mises en page rapides et cohérentes grâce au système de grille et aux classes utilitaires.",
        },
        javascript: {
          description:
            "Fondamentaux ES6+, API du DOM, logique asynchrone et fonctions propres et réutilisables.",
        },
        git: {
          description:
            "Gestion de versions, branches et un workflow sûr pour collaborer sur de vrais projets.",
        },
        github: {
          description:
            "Dépôts, pull requests et partage ouvert du travail avec la communauté des développeurs.",
        },
      },
      exploringLabel: "En cours d'exploration",
      exploring: "TypeScript · Next.js · animations accessibles",
      note: "Aucun niveau d'expérience n'est affiché — je suis un développeur junior concentré sur des bases solides et une progression régulière.",
    },
    projects: {
      eyebrow: "Projets",
      title: "Une sélection de",
      titleAccent: "projets & expérimentations",
      description:
        "Des projets d'exemple qui montrent ma façon d'aborder la mise en page, l'interaction et le responsive. Remplacez-les par vos vrais projets à tout moment.",
      filters: {
        all: "Tous",
        react: "React",
        javascript: "JavaScript",
        ui: "UI & Web",
      },
      items: {
        nova: {
          title: "Nova Dashboard",
          description:
            "Un concept de tableau de bord analytique clair, avec des cartes de données responsives, une barre latérale et une zone de graphique légère.",
          features: [
            "Structure de dashboard responsive avec barre latérale repliable",
            "Composants réutilisables pour les statistiques, tableaux et graphiques",
            "Tokens de couleurs cohérents en thème clair et sombre",
          ],
        },
        lumen: {
          title: "Lumen Landing",
          description:
            "Une page d'atterrissage produit orientée conversion, avec un hero fort, des arguments clairs et un appel à l'action évident.",
          features: [
            "Hiérarchie visuelle claire du hero jusqu'à l'appel à l'action",
            "Grille de fonctionnalités responsive avec apparitions au défilement",
            "Navigation accessible et interactions au clavier",
          ],
        },
        taskflow: {
          title: "TaskFlow",
          description:
            "Une interface de gestion de tâches épurée avec ajout rapide, colonnes de statut et une mise en page calme et sans distraction.",
          features: [
            "Tableau à trois colonnes avec des cartes faciles à déplacer",
            "Filtrage instantané et mises à jour optimistes des tâches",
            "État local persistant pour une démo fluide",
          ],
        },
        aurora: {
          title: "Aurora Portfolio",
          description:
            "Un modèle de portfolio minimal centré sur la typographie, des espaces généreux et des animations discrètes.",
          features: [
            "Mise en page centrée sur la typographie et un système de sections flexible",
            "Cartes, badges et primitives d'animation réutilisables",
            "Entièrement responsive, du mobile aux grands écrans",
          ],
        },
        weatherly: {
          title: "Weatherly",
          description:
            "Une interface météo qui transforme des prévisions simples en une expérience claire et lisible en un coup d'œil.",
          features: [
            "Conditions actuelles et prévisions compactes sur plusieurs jours",
            "États de chargement, vides et d'erreur soignés",
            "Présentation claire et sombre des mêmes données",
          ],
        },
        shopkit: {
          title: "ShopKit",
          description:
            "Une interface de boutique e-commerce avec grille de produits, filtres et récapitulatif de panier responsive.",
          features: [
            "Grille de produits responsive avec aperçu rapide",
            "Filtres par catégorie avec transitions de mise en page animées",
            "Récapitulatif de panier accessible et structure de checkout",
          ],
        },
      },
      modal: {
        overview: "Présentation",
        highlights: "Points clés",
        stack: "Technologies",
        note: "Ceci est un projet d'exemple modifiable. Mettez à jour src/data/projects.js avec votre vrai projet et vos liens.",
        preview: "Aperçu de la démo",
        previewNote:
          "Aucune démo externe n'est liée à cet exemple : vous voyez donc les détails du projet à la place.",
      },
      placeholderBadge: "Exemple",
    },
    education: {
      eyebrow: "Formation",
      title: "Parcours",
      titleAccent: "& formation",
      description:
        "Une base scientifique et une formation professionnelle concrète — complétées par beaucoup d'apprentissage personnel.",
      items: {
        bac: {
          title: "Baccalauréat Sciences Physiques",
          org: "Maroc",
          type: "Diplôme du secondaire",
          description:
            "Une formation scientifique qui a renforcé mon esprit d'analyse, ma discipline et mes réflexes de résolution de problèmes.",
        },
        ofppt: {
          title: "OFPPT — Formation professionnelle",
          org: "Maroc",
          type: "Formation professionnelle",
          description:
            "Une formation professionnelle pratique orientée vers les compétences du terrain. La spécialisation et les dates officielles sont volontairement laissées en champs modifiables.",
        },
      },
      specializationLabel: "Spécialisation",
      specializationPlaceholder: "À ajouter",
      note: "Aucune date ni diplôme n'a été inventé. Modifiez src/data/site.js pour ajouter votre spécialisation et les détails officiels.",
      learningTitle: "Apprentissage autonome",
      learningText:
        "En parallèle de ma formation, j'apprends via la documentation, de petites expérimentations et la reconstruction d'interfaces que j'admire — puis j'applique ces acquis à mon projet suivant.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Construisons",
      titleAccent: "quelque chose ensemble",
      description:
        "Vous avez un stage, un poste junior ou un projet en tête ? J'aimerais beaucoup en discuter.",
      info: {
        emailLabel: "Email",
        githubLabel: "GitHub",
        linkedinLabel: "LinkedIn",
        locationLabel: "Localisation",
        locationValue: "Maroc",
      },
      availabilityTitle: "Ouvert aux opportunités",
      availabilityText:
        "Je recherche actuellement un stage ou un poste frontend junior. Sur site, hybride ou à distance — prêt à en savoir plus.",
      form: {
        title: "Envoyez-moi un message",
        name: "Nom complet",
        namePlaceholder: "Votre nom complet",
        email: "Email",
        emailPlaceholder: "vous@exemple.com",
        subject: "Sujet",
        subjectPlaceholder: "Stage, projet ou un simple bonjour",
        message: "Message",
        messagePlaceholder: "Dites-moi en quelques mots ce que vous avez en tête...",
        submit: "Envoyer le message",
        note: "Ce formulaire valide les champs localement uniquement — il n'est pas encore relié à un service d'envoi.",
        successTitle: "Message validé",
        successText:
          "Votre message a passé la validation. Ce portfolio n'envoie pas encore d'emails : rien n'a été transmis. Vous pouvez l'envoyer directement depuis votre application de messagerie.",
        openEmail: "Ouvrir dans l'application email",
        sendAnother: "Écrire un autre message",
        errorSummary: "Veuillez corriger les champs indiqués.",
        errors: {
          nameRequired: "Veuillez indiquer votre nom.",
          nameShort: "Votre nom doit contenir au moins 2 caractères.",
          emailRequired: "Veuillez indiquer votre adresse email.",
          emailInvalid: "Veuillez saisir une adresse email valide.",
          subjectRequired: "Veuillez ajouter un sujet.",
          subjectShort: "Le sujet doit contenir au moins 3 caractères.",
          messageRequired: "Veuillez écrire un message.",
          messageShort: "Veuillez écrire au moins 20 caractères.",
        },
      },
    },
    footer: {
      description:
        "Développeur frontend junior au Maroc, je crée des interfaces soignées avec React.js et le CSS moderne.",
      navTitle: "Navigation",
      connectTitle: "Réseaux",
      rights: "Tous droits réservés.",
      builtWith: "Conçu et développé avec React, Tailwind CSS et Framer Motion.",
      location: "Basé au Maroc",
    },
    cv: {
      profile: "Profil",
      skills: "Compétences",
      projects: "Projets sélectionnés",
      education: "Formation",
      focus: "En cours d'exploration",
      availability: "Disponibilité",
      contact: "Contact",
      footer: "Curriculum Vitae",
      specialization: "Spécialisation",
    },
  },

  ar: {
    meta: {
      title: "سفيان الحمراني — مطوّر واجهات أمامية مبتدئ",
      description:
        "الملف الشخصي لسفيان الحمراني، مطوّر واجهات أمامية مبتدئ من المغرب، يبني تجارب ويب حديثة ومتجاوبة باستخدام React.js.",
    },
    a11y: {
      skipToContent: "تخطَّ إلى المحتوى",
      openMenu: "فتح قائمة التنقل",
      closeMenu: "إغلاق قائمة التنقل",
      toggleThemeToLight: "التبديل إلى الوضع الفاتح",
      toggleThemeToDark: "التبديل إلى الوضع الداكن",
      switchLanguage: "تغيير اللغة",
      github: "زيارة الملف الشخصي على GitHub",
      linkedin: "زيارة الملف الشخصي على LinkedIn",
      scrollDown: "مرّر إلى المحتوى",
      backToTop: "العودة إلى الأعلى",
      closeDialog: "إغلاق النافذة",
      cv: "تحميل السيرة الذاتية بصيغة PDF",
      primaryNav: "التنقل الرئيسي",
    },
    nav: {
      home: "الرئيسية",
      about: "نبذة عني",
      skills: "المهارات",
      projects: "المشاريع",
      education: "التعليم",
      contact: "تواصل",
    },
    common: {
      downloadCv: "تحميل السيرة الذاتية",
      viewProjects: "عرض مشاريعي",
      contactMe: "تواصل معي",
      viewDemo: "عرض تجريبي",
      sourceCode: "GitHub",
      details: "التفاصيل",
      close: "إغلاق",
      all: "الكل",
      newTab: "يفتح في تبويب جديد",
      placeholderProject: "مشروع تجريبي",
      emailDirect: "راسلني مباشرة",
      language: "اللغة",
      theme: "المظهر",
    },
    hero: {
      availability: "متاح للتدريب والفرص المبتدئة",
      greeting: "مرحبًا، أنا",
      name: "سفيان الحمراني",
      title: "مطوّر واجهات أمامية مبتدئ | متحمس لـ React.js",
      roles: [
        "مطوّر واجهات أمامية مبتدئ",
        "مطوّر React.js",
        "مطوّر ويب شغوف",
        "مهتم بتجربة المستخدم",
      ],
      description:
        "أبني تجارب ويب حديثة ومتجاوبة وتفاعلية باستخدام React.js وتقنيات الواجهات الأمامية الحديثة.",
      stats: [
        { value: "8", label: "تقنيات أساسية" },
        { value: "6", label: "مشاريع تجريبية" },
        { value: "3", label: "لغات الموقع" },
        { value: "∞", label: "فضول" },
      ],
      toolkit: "أبني باستخدام",
      scroll: "مرّر للاستكشاف",
    },
    about: {
      eyebrow: "نبذة عني",
      title: "أحوّل الفضول إلى",
      titleAccent: "واجهات متقنة",
      description:
        "مطوّر مبتدئ بعين مصمّم وفضول عالم وموهبة حقيقية في هذه المهنة.",
      paragraphs: [
        "أنا سفيان، مطوّر واجهات أمامية مبتدئ من المغرب. أحب اللحظة التي تتحول فيها الفكرة إلى واجهة سريعة وسهلة الاستخدام يستمتع الناس بها فعلًا.",
        "أركّز على React.js وCSS الحديثة. أهتم بالمكوّنات النظيفة والحركة المدروسة والتفاصيل الصغيرة التي تجعل المنتج يبدو احترافيًا. أبحث حاليًا عن تدريب أو وظيفة مبتدئة لأتعلم من مطوّرين ذوي خبرة وأساهم في مشاريع حقيقية.",
        "عندما لا أبرمج، أستكشف أنظمة التصميم، وأقرأ عن إمكانية الوصول، أو أعيد بناء واجهات أعجب بها لأفهم كيف تعمل.",
      ],
      cards: [
        {
          icon: "sparkles",
          title: "إتقان الواجهات",
          text: "واجهات قائمة على المكوّنات، وتصاميم متجاوبة، وحركة تخدم التجربة بدلًا من أن تشتت عنها.",
        },
        {
          icon: "puzzle",
          title: "حلّ المشكلات",
          text: "أستمتع بتقسيم المشكلات المعقدة إلى خطوات صغيرة قابلة للاختبار وتحسين الحل تدريجيًا.",
        },
        {
          icon: "book",
          title: "تعلّم مستمر",
          text: "كل مشروع فرصة لتعلّم شيء جديد، من أنماط إمكانية الوصول إلى إدارة حالة أكثر وضوحًا.",
        },
        {
          icon: "target",
          title: "اهتمام بالتفاصيل",
          text: "المسافات والتباين وحالات التركيز والحالات الفارغة — التفاصيل غير المرئية هي ما يجعل الواجهة مريحة.",
        },
      ],
      info: {
        nameLabel: "الاسم",
        locationLabel: "الموقع",
        educationLabel: "التعليم",
        focusLabel: "التخصص",
        statusLabel: "الحالة",
        educationValue: "باكالوريا علوم فيزيائية + OFPPT",
        focusValue: "React.js والواجهات الحديثة",
        statusValue: "منفتح على الفرص",
      },
      quote:
        "الواجهات الرائعة تبدو سهلة الاستخدام. هذا هو المستوى الذي أبني من أجله — تفصيل مدروس تلو الآخر.",
      goalsTitle: "ما أبحث عنه",
      goalsText:
        "تدريب أو وظيفة مبتدئة في تطوير الواجهات الأمامية، حيث أسلّم ميزات حقيقية وأتعلم من فريق قوي وأواصل النمو.",
      cta: "لنتحدث",
    },
    skills: {
      eyebrow: "المهارات",
      title: "الأدوات التي",
      titleAccent: "أبني بها",
      description:
        "مجموعة عملية لبناء واجهات حديثة ومتجاوبة — مع عقلية تعلّم كل ما يأتي بعد ذلك.",
      categories: {
        frontend: "تطوير الواجهات الأمامية",
        programming: "البرمجة",
        tools: "الأدوات والتقنيات",
      },
      items: {
        html5: {
          description:
            "ترميز دلالي وسهل الوصول يمنح كل صفحة أساسًا متينًا وصديقًا لمحركات البحث.",
        },
        css3: {
          description:
            "تصاميم متجاوبة ومحدّدات حديثة وflexbox وgrid والتفاصيل البصرية التي تصقل الواجهة.",
        },
        react: {
          description:
            "واجهات مبنية على المكوّنات، وخطافات React، وإدارة الحالة، وتفاعلات سلسة وهادفة.",
        },
        tailwind: {
          description:
            "تنسيق قائم على الأدوات المساعدة ورموز تصميم وأنظمة قابلة للتوسع تحافظ على الاتساق.",
        },
        bootstrap: {
          description:
            "تصاميم سريعة ومتسقة باستخدام نظام الشبكة والفئات الجاهزة.",
        },
        javascript: {
          description:
            "أساسيات ES6+ وواجهات DOM والمنطق غير المتزامن ودوال نظيفة قابلة لإعادة الاستخدام.",
        },
        git: {
          description:
            "التحكم في الإصدارات والفروع وسير عمل واثق للتعاون على مشاريع حقيقية.",
        },
        github: {
          description:
            "المستودعات وطلبات السحب ومشاركة العمل بانفتاح مع مجتمع المطوّرين.",
        },
      },
      exploringLabel: "أستكشف حاليًا",
      exploring: "TypeScript · Next.js · حركة سهلة الوصول",
      note: "لا تُعرض مستويات الخبرة — أنا مطوّر مبتدئ أركّز على الأساسيات المتينة والنمو المستمر.",
    },
    projects: {
      eyebrow: "المشاريع",
      title: "أعمال",
      titleAccent: "وتجارب مختارة",
      description:
        "مجموعة من المشاريع التجريبية التي تُظهر طريقتي في التصميم والتفاعل والتجاوب. استبدلها بأعمالك الحقيقية في أي وقت.",
      filters: {
        all: "الكل",
        react: "React",
        javascript: "JavaScript",
        ui: "واجهات وويب",
      },
      items: {
        nova: {
          title: "لوحة تحكم Nova",
          description:
            "تصور للوحة تحكم تحليلية نظيفة مع بطاقات بيانات متجاوبة وشريط جانبي ومنطقة رسوم بيانية خفيفة.",
          features: [
            "هيكل لوحة تحكم متجاوب مع شريط جانبي قابل للطي",
            "مكوّنات قابلة لإعادة الاستخدام للإحصاءات والجداول والرسوم",
            "رموز ألوان متسقة للوضعين الفاتح والداكن",
          ],
        },
        lumen: {
          title: "صفحة هبوط Lumen",
          description:
            "صفحة هبوط لمنتج تركز على التحويل، مع قسم رئيسي قوي ومزايا واضحة ودعوة جلية لاتخاذ إجراء.",
          features: [
            "تسلسل بصري واضح من القسم الرئيسي إلى دعوة الإجراء",
            "شبكة مزايا متجاوبة مع ظهور هادئ عند التمرير",
            "تنقل سهل الوصول وتفاعلات تدعم لوحة المفاتيح",
          ],
        },
        taskflow: {
          title: "منظّم المهام TaskFlow",
          description:
            "واجهة إدارة مهام مركّزة مع إضافة سريعة وأعمدة حالة وتصميم هادئ خالٍ من التشتيت.",
          features: [
            "لوحة بثلاثة أعمدة مع بطاقات سهلة الترتيب",
            "تصفية فورية وتحديثات متفائلة للمهام",
            "حالة محلية محفوظة لتجربة سلسة",
          ],
        },
        aurora: {
          title: "قالب أعمال Aurora",
          description:
            "قالب ملف أعمال بسيط مبني حول الطباعة القوية والمساحات السخية والحركة الخفيفة.",
          features: [
            "تصميم يضع الطباعة أولًا مع نظام أقسام مرن",
            "بطاقات وشارات وعناصر حركة قابلة لإعادة الاستخدام",
            "متجاوب بالكامل من الهواتف الصغيرة إلى الشاشات الكبيرة",
          ],
        },
        weatherly: {
          title: "تطبيق الطقس Weatherly",
          description:
            "واجهة تطبيق طقس تحوّل توقعات بسيطة إلى تجربة واضحة تُقرأ بنظرة واحدة.",
          features: [
            "الظروف الحالية مع توقعات مختصرة لعدة أيام",
            "حالات تحميل وفارغة وخطأ معالجة بعناية",
            "عرض فاتح وداكن للبيانات نفسها",
          ],
        },
        shopkit: {
          title: "متجر ShopKit",
          description:
            "واجهة متجر إلكتروني مع شبكة منتجات وفلاتر وملخص سلة متجاوب.",
          features: [
            "شبكة منتجات متجاوبة مع عرض سريع للتفاصيل",
            "فلاتر فئات مع انتقالات متحركة للتخطيط",
            "ملخص سلة سهل الوصول وهيكل لإتمام الشراء",
          ],
        },
      },
      modal: {
        overview: "نظرة عامة",
        highlights: "أبرز المزايا",
        stack: "التقنيات المستخدمة",
        note: "هذا مشروع تجريبي قابل للتعديل. حدّث src/data/projects.js بمشروعك الحقيقي وروابطك.",
        preview: "معاينة تجريبية",
        previewNote:
          "لا يوجد رابط تجريبي خارجي لهذا المشروع، لذلك تُعرض تفاصيل المشروع بدلًا من ذلك.",
      },
      placeholderBadge: "تجريبي",
    },
    education: {
      eyebrow: "التعليم",
      title: "التعليم",
      titleAccent: "والتكوين",
      description:
        "أساس علمي وتكوين مهني تطبيقي — مع الكثير من التعلّم الذاتي بينهما.",
      items: {
        bac: {
          title: "باكالوريا علوم فيزيائية",
          org: "المغرب",
          type: "شهادة الثانوية العامة",
          description:
            "تكوين علمي عزّز تفكيري التحليلي وانضباطي وعاداتي في حل المشكلات.",
        },
        ofppt: {
          title: "OFPPT — التكوين المهني",
          org: "المغرب",
          type: "تكوين مهني",
          description:
            "تكوين مهني تطبيقي يركز على المهارات الجاهزة لسوق العمل. تُركت التخصصات والتواريخ الرسمية كحقول قابلة للتعديل عن قصد.",
        },
      },
      specializationLabel: "التخصص",
      specializationPlaceholder: "يُضاف لاحقًا",
      note: "لم تُخترع أي تواريخ أو شهادات. عدّل src/data/site.js لإضافة تخصصك وتفاصيلك الرسمية.",
      learningTitle: "تعلّم ذاتي",
      learningText:
        "إلى جانب التعليم الرسمي، أتعلّم من خلال التوثيق والتجارب الصغيرة وإعادة بناء واجهات أعجب بها — ثم أطبّق ما تعلّمته في مشروعي التالي.",
    },
    contact: {
      eyebrow: "تواصل",
      title: "لنبنِ",
      titleAccent: "شيئًا معًا",
      description:
        "هل لديك تدريب أو وظيفة مبتدئة أو مشروع في ذهنك؟ يسعدني أن أسمع عنه.",
      info: {
        emailLabel: "البريد الإلكتروني",
        githubLabel: "GitHub",
        linkedinLabel: "LinkedIn",
        locationLabel: "الموقع",
        locationValue: "المغرب",
      },
      availabilityTitle: "منفتح على الفرص",
      availabilityText:
        "أبحث حاليًا عن تدريب أو وظيفة مبتدئة في تطوير الواجهات الأمامية. عن بُعد أو حضوريًا أو مختلطًا — مستعد لمعرفة المزيد.",
      form: {
        title: "أرسل لي رسالة",
        name: "الاسم الكامل",
        namePlaceholder: "اسمك الكامل",
        email: "البريد الإلكتروني",
        emailPlaceholder: "you@example.com",
        subject: "الموضوع",
        subjectPlaceholder: "تدريب أو مشروع أو مجرد تحية",
        message: "الرسالة",
        messagePlaceholder: "أخبرني قليلًا عمّا يدور في ذهنك...",
        submit: "إرسال الرسالة",
        note: "هذا النموذج يتحقق من البيانات محليًا فقط — ولم يُربط بعد بخدمة بريد إلكتروني.",
        successTitle: "تم التحقق من الرسالة",
        successText:
          "اجتازت رسالتك عملية التحقق. هذا الموقع لا يرسل رسائل بريد إلكتروني بعد، لذلك لم يُرسل أي شيء. يمكنك إرسالها مباشرة من تطبيق البريد لديك.",
        openEmail: "فتح في تطبيق البريد",
        sendAnother: "كتابة رسالة أخرى",
        errorSummary: "يرجى تصحيح الحقول المحددة.",
        errors: {
          nameRequired: "يرجى إدخال اسمك.",
          nameShort: "يجب أن يتكون الاسم من حرفين على الأقل.",
          emailRequired: "يرجى إدخال بريدك الإلكتروني.",
          emailInvalid: "يرجى إدخال بريد إلكتروني صحيح.",
          subjectRequired: "يرجى إضافة موضوع.",
          subjectShort: "يجب أن يتكون الموضوع من 3 أحرف على الأقل.",
          messageRequired: "يرجى كتابة رسالة.",
          messageShort: "يرجى كتابة 20 حرفًا على الأقل.",
        },
      },
    },
    footer: {
      description:
        "مطوّر واجهات أمامية مبتدئ من المغرب، يبني واجهات مدروسة باستخدام React.js وCSS الحديثة.",
      navTitle: "التنقل",
      connectTitle: "تواصل",
      rights: "جميع الحقوق محفوظة.",
      builtWith: "صُمم وبُني باستخدام React وTailwind CSS وFramer Motion.",
      location: "مقيم في المغرب",
    },
    cv: {
      profile: "الملف الشخصي",
      skills: "المهارات",
      projects: "مشاريع مختارة",
      education: "التعليم والتكوين",
      focus: "أستكشف حاليًا",
      availability: "التوفر",
      contact: "التواصل",
      footer: "السيرة الذاتية",
      specialization: "التخصص",
    },
  },
};
