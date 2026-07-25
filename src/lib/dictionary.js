// Centralized FR/EN content. Edit text here; the whole UI reads from this.
//
// ⚠️ CONTACT — le TÉLÉPHONE est réel (fourni par le client) ; l'E-MAIL et l'ADRESSE
// sont encore des placeholders. Ces valeurs alimentent le header, le footer, les
// boutons WhatsApp, la page contact et le JSON-LD LocalBusiness — les remplacer
// par les vraies avant mise en ligne.

export const COMPANY = {
  name: "BATIPRO",
  legalName: "BATIPRO BTP CONSULTING",
  // Single source of truth for the production domain (no trailing slash).
  // Used by layout metadata, sitemap, robots and JSON-LD.
  siteUrl: "https://batiprobtp.ma",
  slogan: {
    fr: "Construire aujourd'hui, bâtir la confiance de demain",
    en: "Building today, shaping tomorrow's trust",
  },
  director: "Adil Sibari",
  // ✅ réel (client, 2026-07-25)
  phones: ["0661293124"],
  whatsapp: "212661293124",
  // --- PLACEHOLDERS (à remplacer par les vraies coordonnées) ---
  email: "contact@batiprobtp.ma",
  addressLocality: "Casablanca",
  region: "Casablanca-Settat",
  country: "Maroc",
  // ------------------------------------------------------------
  // Zones d'intervention confirmées par le client (ordre = ordre donné).
  // Source unique : textes du site, JSON-LD areaServed, llms.txt, mots-clés.
  cities: [
    { fr: "Kénitra", en: "Kenitra", region: "Rabat-Salé-Kénitra" },
    { fr: "Rabat", en: "Rabat", region: "Rabat-Salé-Kénitra" },
    { fr: "Tanger", en: "Tangier", region: "Tanger-Tétouan-Al Hoceïma" },
    { fr: "Meknès", en: "Meknes", region: "Fès-Meknès" },
    { fr: "Casablanca", en: "Casablanca", region: "Casablanca-Settat" },
  ],
};

// schema.org areaServed : une City par ville desservie (+ région administrative).
export const areaServedLd = (lang = "fr") =>
  COMPANY.cities.map((c) => ({
    "@type": "City",
    name: c[lang] || c.fr,
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: c.region,
      containedInPlace: { "@type": "Country", name: lang === "en" ? "Morocco" : "Maroc" },
    },
  }));

// "Kénitra, Rabat, Tanger, Meknès et Casablanca" / EN equivalent.
export const cityList = (lang = "fr") => {
  const names = COMPANY.cities.map((c) => c[lang] || c.fr);
  const last = names[names.length - 1];
  return `${names.slice(0, -1).join(", ")} ${lang === "en" ? "and" : "et"} ${last}`;
};

// Shared, language-neutral service catalog metadata (id, slug, icon) is embedded
// per-language below so the dictionary stays a single object the UI reads from.

export const dict = {
  fr: {
    nav: {
      home: "Accueil",
      about: "L'entreprise",
      services: "Services",
      realisations: "Réalisations",
      contact: "Contact",
      quote: "Demander un devis",
    },
    hero: {
      eyebrow: "Construction · Génie civil · OPC · Consulting",
      title: "Construire avec rigueur,\naccompagner avec confiance",
      subtitle:
        "BATIPRO BTP CONSULTING réalise vos projets de construction, de rénovation et d'aménagement à Kénitra, Rabat, Tanger, Meknès et Casablanca, et vous accompagne techniquement de l'étude jusqu'à la réception des travaux.",
      ctaCall: "Appeler",
      ctaWhats: "WhatsApp",
      ctaQuote: "Demander un devis",
    },
    servicesOverview: {
      eyebrow: "Nos domaines d'intervention",
      title: "Une expertise complète du bâtiment",
      subtitle:
        "Du gros œuvre au pilotage de chantier, en passant par la rénovation, l'aménagement, la maintenance et le management QSE — une seule entreprise pour l'ensemble de votre projet.",
      cta: "Voir tous les services",
    },
    services: [
      {
        id: "gros-oeuvre",
        slug: "construction-gros-oeuvre",
        title: "Construction & gros œuvre",
        desc: "Réalisation de bâtiments neufs, fondations, structures béton et maçonnerie, dans le respect des règles de l'art.",
        icon: "building",
        metaTitle: "Construction & gros œuvre de bâtiments au Maroc",
        metaDesc:
          "Travaux de construction et de gros œuvre par BATIPRO : fondations, structure béton armé et maçonnerie à Kénitra, Rabat, Tanger, Meknès et Casablanca.",
        intro:
          "Nous réalisons vos projets de construction neuve, du terrassement aux finitions du gros œuvre. Nos équipes maîtrisent les fondations, la structure en béton armé, la maçonnerie et l'ensemble des travaux qui donnent au bâtiment sa solidité et sa durabilité.",
        bullets: [
          "Terrassement, fondations et travaux de gros œuvre",
          "Structure en béton armé (poteaux, poutres, planchers)",
          "Maçonnerie, cloisons et enduits",
          "Bâtiments résidentiels, tertiaires et industriels",
          "Respect des normes marocaines et des règles de l'art",
        ],
        audience:
          "Particuliers, promoteurs immobiliers, entreprises et maîtres d'ouvrage publics.",
      },
      {
        id: "renovation",
        slug: "renovation-rehabilitation",
        title: "Rénovation & réhabilitation",
        desc: "Remise à neuf, réhabilitation et mise aux normes de bâtiments existants, avec un minimum de nuisances.",
        icon: "renovate",
        metaTitle: "Rénovation & réhabilitation de bâtiments au Maroc",
        metaDesc:
          "Rénovation et réhabilitation de bâtiments par BATIPRO : remise à neuf, renforcement, mise aux normes à Kénitra, Rabat, Tanger, Meknès et Casablanca.",
        intro:
          "Nous redonnons vie à vos bâtiments existants : remise à neuf, réhabilitation lourde, renforcement de structure et mise aux normes. Chaque intervention est planifiée pour limiter les nuisances et respecter l'usage des lieux.",
        bullets: [
          "Rénovation complète ou partielle",
          "Réhabilitation et renforcement de structures",
          "Mise aux normes techniques et de sécurité",
          "Reprise de façades, étanchéité et toitures",
          "Modernisation des espaces intérieurs",
        ],
        audience:
          "Propriétaires, copropriétés, entreprises et collectivités souhaitant valoriser un bâtiment existant.",
      },
      {
        id: "amenagement",
        slug: "amenagement-interieur-exterieur",
        title: "Aménagement intérieur & extérieur",
        desc: "Second œuvre, finitions, aménagement d'espaces intérieurs et extérieurs et travaux divers.",
        icon: "ruler",
        metaTitle: "Aménagement intérieur & extérieur au Maroc",
        metaDesc:
          "Aménagement intérieur et extérieur par BATIPRO : second œuvre, finitions, revêtements et menuiserie à Kénitra, Rabat, Tanger, Meknès et Casablanca.",
        intro:
          "Nous transformons vos espaces avec des finitions soignées : second œuvre, revêtements de sols et murs, faux plafonds, menuiserie, peinture et aménagements extérieurs. Un travail précis, du détail jusqu'à la livraison.",
        bullets: [
          "Revêtements de sols et murs (carrelage, parquet, marbre)",
          "Faux plafonds, plâtrerie et peinture",
          "Menuiserie bois, aluminium et PVC",
          "Aménagement de bureaux, commerces et logements",
          "Espaces extérieurs, voirie et travaux divers",
        ],
        audience:
          "Particuliers, commerces, entreprises et promoteurs souhaitant finaliser ou moderniser leurs espaces.",
      },
      {
        id: "opc",
        slug: "opc-suivi-coordination-chantier",
        title: "OPC, suivi & coordination de chantier",
        desc: "Ordonnancement, pilotage et coordination : maîtrise des coûts, des délais, de la qualité et de la sécurité.",
        icon: "clipboard",
        metaTitle: "OPC, suivi et coordination de chantier au Maroc",
        metaDesc:
          "Mission OPC par BATIPRO : ordonnancement, pilotage et coordination de chantier à Kénitra, Rabat, Tanger, Meknès et Casablanca. Délais, coûts, qualité.",
        intro:
          "Notre mission OPC (Ordonnancement, Pilotage et Coordination) organise votre chantier de bout en bout : planification des tâches, coordination des différents corps de métier et contrôle permanent des délais, des coûts, de la qualité et de la sécurité.",
        bullets: [
          "Ordonnancement et planning détaillé des travaux",
          "Pilotage et coordination des intervenants",
          "Contrôle des délais, des coûts et de la qualité",
          "Suivi de la sécurité et des conditions de chantier",
          "Reporting régulier au maître d'ouvrage",
        ],
        audience:
          "Maîtres d'ouvrage, promoteurs, architectes et organismes publics gérant des chantiers de bâtiment.",
      },
      {
        id: "assistance",
        slug: "assistance-technique-conseil",
        title: "Assistance technique & conseil",
        desc: "Accompagnement technique de l'étude initiale à la réception : études, estimations et conseil bâtiment.",
        icon: "handshake",
        metaTitle: "Assistance technique & conseil en bâtiment au Maroc",
        metaDesc:
          "Assistance technique et conseil en bâtiment par BATIPRO : études, estimation des coûts et suivi à Kénitra, Rabat, Tanger, Meknès et Casablanca.",
        intro:
          "Nous accompagnons le maître d'ouvrage à chaque étape de son projet : études préalables, estimation des coûts, choix des solutions techniques et assistance jusqu'à la réception des travaux. Un conseil indépendant, clair et orienté vers votre intérêt.",
        bullets: [
          "Études préalables et faisabilité technique",
          "Estimation des coûts et optimisation du budget",
          "Conseil en solutions techniques et matériaux",
          "Assistance au maître d'ouvrage (AMO)",
          "Suivi jusqu'à la réception des travaux",
        ],
        audience:
          "Particuliers et professionnels souhaitant sécuriser un projet de construction ou de rénovation.",
      },
      {
        id: "maintenance",
        slug: "entretien-maintenance",
        title: "Entretien & maintenance",
        desc: "Entretien et maintenance des installations techniques des bâtiments, en préventif comme en curatif.",
        icon: "wrench",
        metaTitle: "Entretien & maintenance des bâtiments au Maroc",
        metaDesc:
          "Entretien et maintenance de bâtiments par BATIPRO : maintenance préventive et curative, dépannage à Kénitra, Rabat, Tanger, Meknès et Casablanca.",
        intro:
          "Nous assurons la pérennité de vos bâtiments grâce à un entretien régulier et une maintenance fiable des installations techniques. Interventions préventives planifiées ou dépannages curatifs, avec des contrats adaptés à votre patrimoine.",
        bullets: [
          "Maintenance préventive planifiée",
          "Maintenance curative et dépannage",
          "Entretien des installations techniques du bâtiment",
          "Contrats d'entretien sur mesure",
          "Suivi et traçabilité des interventions",
        ],
        audience:
          "Copropriétés, entreprises, commerces et gestionnaires de patrimoine immobilier.",
      },
      {
        id: "qse",
        slug: "qualite-securite-environnement",
        title: "Qualité, sécurité & environnement",
        desc: "Accompagnement QSE : management de la qualité, sécurité des chantiers et respect de l'environnement.",
        icon: "helmet",
        metaTitle: "Accompagnement QSE : qualité, sécurité, environnement",
        metaDesc:
          "Accompagnement QSE par BATIPRO : qualité, sécurité de chantier et environnement à Kénitra, Rabat, Tanger, Meknès et Casablanca.",
        intro:
          "La qualité d'exécution, la sécurité des intervenants et le respect de l'environnement sont au cœur de notre méthode. Nous mettons en place une démarche QSE structurée sur chaque chantier, pour des travaux fiables, sûrs et durables.",
        bullets: [
          "Management et contrôle de la qualité",
          "Plans de prévention et sécurité de chantier",
          "Respect des normes et de la réglementation",
          "Gestion des déchets et démarche environnementale",
          "Amélioration continue et retour d'expérience",
        ],
        audience:
          "Maîtres d'ouvrage et entreprises attentifs à la qualité, à la sécurité et à l'impact environnemental de leurs projets.",
      },
    ],
    serviceDetail: {
      eyebrow: "Domaine d'intervention",
      includedTitle: "Ce que comprend la prestation",
      audienceTitle: "Pour qui",
      areasLine:
        "Interventions à Kénitra, Rabat, Tanger, Meknès et Casablanca.",
      otherServices: "Autres domaines",
      back: "Tous les services",
      learnMore: "En savoir plus",
      quoteAside: "Un projet en tête ?",
      quoteAsideText:
        "Décrivez-nous votre besoin : nous vous répondons rapidement avec une estimation claire et sans engagement.",
    },
    about: {
      metaTitle: "L'entreprise — BATIPRO BTP CONSULTING",
      metaDesc:
        "BATIPRO BTP CONSULTING, entreprise marocaine de construction et de rénovation à Kénitra, Rabat, Tanger, Meknès et Casablanca. Rigueur et transparence.",
      hero: {
        title: "Qui sommes-nous ?",
        subtitle:
          "BATIPRO BTP CONSULTING — une entreprise marocaine du bâtiment fondée sur la rigueur, la transparence et le respect des engagements.",
      },
      intro: [
        "BATIPRO BTP CONSULTING est une entreprise marocaine spécialisée dans les travaux de construction, de rénovation, d'aménagement et dans l'accompagnement technique des projets de bâtiment.",
        "Notre entreprise intervient à Kénitra, Rabat, Tanger, Meknès et Casablanca, auprès des particuliers, des professionnels, des promoteurs et des organismes publics, en proposant des solutions adaptées aux besoins de chaque projet, depuis l'étude initiale jusqu'à la réception des travaux.",
        "Grâce à une solide expérience dans les domaines du bâtiment, du génie civil, de la maintenance, de la gestion de chantier et du management de la qualité, BATIPRO s'engage à fournir des prestations fondées sur la rigueur, la transparence et le respect des engagements.",
        "Notre approche repose sur une organisation méthodique du chantier, une bonne coordination des différents intervenants et un contrôle permanent de la qualité, des coûts, des délais et des conditions de sécurité.",
      ],
      valuesTitle: "Nos valeurs",
      values: [
        { title: "Rigueur", desc: "Une organisation méthodique et un contrôle permanent de la qualité, des coûts et des délais.", icon: "shield" },
        { title: "Transparence", desc: "Une communication claire et des engagements tenus à chaque étape du projet.", icon: "eye" },
        { title: "Expérience", desc: "Bâtiment, génie civil, maintenance, gestion de chantier et management QSE.", icon: "star" },
        { title: "Proximité", desc: "L'écoute du client et un accompagnement de l'étude jusqu'à la réception.", icon: "handshake" },
      ],
      engagementTitle: "Notre engagement",
      engagement: [
        "Chaque projet est traité avec la même exigence, quelle que soit son importance. Notre objectif est d'apporter à nos clients des solutions fiables, durables et adaptées à leur budget.",
        "Chez BATIPRO, nous considérons que la réussite d'un projet repose avant tout sur l'écoute du client, la qualité d'exécution, le respect des délais et une communication claire tout au long des travaux.",
      ],
      directorTitle: "Mot du directeur",
      director: [
        "Bienvenue sur le site de BATIPRO BTP CONSULTING.",
        "La création de BATIPRO est née d'une volonté claire : mettre l'expérience, la compétence technique et la rigueur professionnelle au service de projets de construction réalisés dans le respect de la qualité, des délais et des engagements pris envers nos clients.",
        "Le secteur du bâtiment exige aujourd'hui bien plus qu'une simple exécution des travaux. Il nécessite une préparation sérieuse, une bonne coordination des intervenants, une maîtrise des coûts ainsi qu'une attention permanente portée à la sécurité et à la qualité.",
        "C'est dans cet esprit que BATIPRO accompagne ses clients à chaque étape de leur projet. Notre ambition est de proposer des solutions pratiques, fiables et adaptées, tout en établissant une relation fondée sur l'écoute, la transparence et la confiance.",
        "Notre parcours dans les domaines du génie civil, de la conduite de travaux, de la maintenance des bâtiments et du management QSE constitue un véritable atout pour assurer une vision globale et maîtrisée de chaque opération.",
        "Nous sommes convaincus que la réputation d'une entreprise se construit à travers la qualité de ses réalisations, le respect de sa parole et la satisfaction de ses clients.",
        "Au nom de toute l'équipe de BATIPRO BTP CONSULTING, je vous remercie pour votre confiance et vous souhaite la bienvenue.",
      ],
      directorName: "Adil Sibari",
      directorRole: "Directeur de BATIPRO BTP CONSULTING",
    },
    whyUs: {
      title: "Pourquoi BATIPRO",
      items: [
        { title: "Rigueur & qualité", desc: "Contrôle permanent de la qualité, des coûts et des délais." },
        { title: "Vision globale", desc: "De l'étude initiale jusqu'à la réception des travaux." },
        { title: "Transparence", desc: "Devis clairs et engagements tenus, sans mauvaise surprise." },
        { title: "Sécurité", desc: "Une attention constante à la sécurité de chaque chantier." },
      ],
    },
    coverage: {
      eyebrow: "Zones d'intervention",
      title: "Nos villes d'intervention",
      subtitle:
        "BATIPRO BTP CONSULTING intervient sur l'axe Kénitra – Rabat – Tanger – Meknès – Casablanca, avec des équipes mobilisables sur chacun de vos chantiers.",
      cities: [
        {
          name: "Kénitra",
          region: "Rabat-Salé-Kénitra",
          desc: "Gros œuvre, rénovation et aménagement pour les particuliers, les entreprises et les promoteurs de Kénitra et sa périphérie.",
        },
        {
          name: "Rabat",
          region: "Rabat-Salé-Kénitra",
          desc: "Construction, réhabilitation et missions OPC à Rabat et son agglomération, sur les projets résidentiels comme tertiaires.",
        },
        {
          name: "Tanger",
          region: "Tanger-Tétouan-Al Hoceïma",
          desc: "Bâtiments neufs, rénovations et assistance technique à Tanger, y compris pour les projets industriels et logistiques.",
        },
        {
          name: "Meknès",
          region: "Fès-Meknès",
          desc: "Construction, aménagement, entretien et maintenance de bâtiments à Meknès et dans sa région.",
        },
        {
          name: "Casablanca",
          region: "Casablanca-Settat",
          desc: "Gros œuvre, second œuvre, pilotage de chantier et démarche QSE sur vos projets casablancais.",
        },
      ],
      note:
        "Un projet dans une autre ville du Royaume ? Parlez-nous-en : nous étudions chaque demande au cas par cas.",
    },
    approach: {
      eyebrow: "Notre méthode",
      title: "Comment nous menons un projet",
      subtitle: "Une démarche méthodique, de la première étude à la réception des travaux.",
      steps: [
        { title: "Étude & écoute du besoin", desc: "Nous analysons votre projet, vos contraintes et votre budget pour proposer la solution la plus adaptée." },
        { title: "Estimation & devis", desc: "Nous établissons un devis clair et détaillé, avec un planning prévisionnel des travaux." },
        { title: "Organisation du chantier", desc: "Ordonnancement des tâches, coordination des intervenants et mise en place de la démarche QSE." },
        { title: "Exécution & contrôle", desc: "Réalisation des travaux avec un contrôle permanent de la qualité, des coûts, des délais et de la sécurité." },
        { title: "Réception & suivi", desc: "Livraison conforme, levée des réserves et accompagnement pour l'entretien et la maintenance." },
      ],
    },
    stats: [
      { value: "5", label: "domaines d'expertise complémentaires" },
      { value: "100%", label: "des projets suivis en qualité, coûts, délais" },
      { value: "0", label: "compromis sur la sécurité des chantiers" },
    ],
    finalCta: {
      title: "Un projet de construction ou de rénovation ?",
      subtitle:
        "Parlons-en. Décrivez-nous votre projet et recevez une estimation claire, sans engagement.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Questions fréquentes",
      subtitle: "Tout ce qu'il faut savoir avant de nous confier votre projet de bâtiment.",
      items: [
        {
          q: "Quels types de projets réalisez-vous ?",
          a: "BATIPRO BTP CONSULTING intervient sur la construction neuve, la rénovation, la réhabilitation, l'aménagement intérieur et extérieur, ainsi que sur le suivi et la coordination de chantier (OPC), l'assistance technique, la maintenance des bâtiments et l'accompagnement QSE. Nous traitons des projets résidentiels, tertiaires, commerciaux et industriels.",
        },
        {
          q: "Dans quelles villes intervenez-vous ?",
          a: "BATIPRO BTP CONSULTING intervient à Kénitra, Rabat, Tanger, Meknès et Casablanca, ainsi que dans les régions qui entourent ces villes. Pour un projet situé ailleurs au Maroc, contactez-nous : nous étudions chaque demande au cas par cas.",
        },
        {
          q: "Travaillez-vous avec les particuliers comme avec les professionnels ?",
          a: "Oui. Nous accompagnons les particuliers, les professionnels, les promoteurs immobiliers et les organismes publics. Chaque projet est traité avec la même exigence, quelle que soit son importance.",
        },
        {
          q: "Qu'est-ce qu'une mission OPC et pourquoi est-elle importante ?",
          a: "L'OPC (Ordonnancement, Pilotage et Coordination) consiste à organiser le chantier, planifier les tâches, coordonner les différents corps de métier et contrôler en permanence les délais, les coûts, la qualité et la sécurité. C'est un gage de bonne exécution et de respect des engagements pris envers le maître d'ouvrage.",
        },
        {
          q: "Proposez-vous un accompagnement dès l'étude du projet ?",
          a: "Oui. Notre assistance technique commence dès l'étude initiale : faisabilité, estimation des coûts, choix des solutions techniques, puis suivi jusqu'à la réception des travaux. Nous conseillons le maître d'ouvrage à chaque étape.",
        },
        {
          q: "Comment garantissez-vous la qualité et la sécurité des chantiers ?",
          a: "Nous mettons en place une démarche QSE structurée sur chaque chantier : contrôle de la qualité d'exécution, plans de prévention et de sécurité, respect de la réglementation et démarche environnementale. La sécurité des intervenants ne fait l'objet d'aucun compromis.",
        },
        {
          q: "Comment obtenir un devis ?",
          a: "Contactez-nous par téléphone, sur WhatsApp ou via le formulaire du site en décrivant votre projet. Nous revenons vers vous rapidement avec une estimation claire, détaillée et sans engagement.",
        },
      ],
    },
    servicesPage: {
      title: "Nos domaines d'intervention",
      metaDesc:
        "Expertise complète du bâtiment : construction, rénovation, aménagement, OPC, maintenance et QSE à Kénitra, Rabat, Tanger, Meknès et Casablanca.",
      subtitle:
        "Une expertise complète du bâtiment, de l'étude à la réception : construction, rénovation, aménagement, coordination de chantier, assistance technique, maintenance et QSE.",
      intro: [
        "BATIPRO BTP CONSULTING est une entreprise marocaine du bâtiment qui accompagne les particuliers, les professionnels, les promoteurs et les organismes publics. Nous couvrons l'ensemble du cycle d'un projet de construction : études préalables, gros œuvre, second œuvre et finitions, pilotage de chantier, maintenance et management de la qualité.",
        "Chaque projet commence par une écoute attentive de votre besoin et une estimation claire. Nous adaptons nos solutions à la nature de l'ouvrage, à vos contraintes et à votre budget, pour un résultat fiable, durable et livré dans le respect des délais.",
        "Nos équipes interviennent à Kénitra, Rabat, Tanger, Meknès et Casablanca, ainsi que dans les régions qui entourent ces villes.",
      ],
      audience: {
        title: "Des solutions pour chaque maître d'ouvrage",
        subtitle: "Que vous soyez un particulier, une entreprise ou un promoteur, nous avons l'expertise adaptée.",
        pro: {
          title: "Professionnels & promoteurs",
          desc: "Bâtiments tertiaires, commerciaux et industriels, opérations immobilières, réhabilitations et missions OPC : nous pilotons vos chantiers avec un contrôle rigoureux des coûts, des délais et de la qualité.",
        },
        home: {
          title: "Particuliers",
          desc: "Construction de villa, rénovation d'appartement ou de maison, aménagement intérieur et extérieur : nous vous accompagnons de l'étude jusqu'à la remise des clés, avec des devis clairs et un suivi transparent.",
        },
      },
    },
    realisations: {
      metaTitle: "Réalisations & savoir-faire — BATIPRO BTP CONSULTING",
      metaDesc:
        "Le savoir-faire BATIPRO : construction, rénovation, aménagement et pilotage de chantiers à Kénitra, Rabat, Tanger, Meknès et Casablanca.",
      hero: {
        title: "Nos réalisations",
        subtitle:
          "Le savoir-faire BATIPRO au service de vos projets de bâtiment. Notre portfolio se construit au fil de nos chantiers.",
      },
      noticeTitle: "Portfolio en cours de constitution",
      noticeText:
        "BATIPRO BTP CONSULTING est une entreprise récente. Nos premières réalisations seront présentées ici prochainement. En attendant, découvrez nos domaines de savoir-faire — et parlons de votre projet.",
      capabilitiesTitle: "Notre savoir-faire en images",
      capabilitiesSubtitle:
        "Les grands types d'ouvrages et d'interventions que nous menons pour nos clients.",
      capabilities: [
        { title: "Bâtiments & gros œuvre", desc: "Fondations, structures béton armé et bâtiments neufs.", icon: "building" },
        { title: "Rénovation", desc: "Remise à neuf et réhabilitation de bâtiments existants.", icon: "renovate" },
        { title: "Aménagement & finitions", desc: "Second œuvre, revêtements et aménagements soignés.", icon: "ruler" },
        { title: "Pilotage de chantier", desc: "Ordonnancement, coordination et suivi des travaux (OPC).", icon: "clipboard" },
        { title: "Maintenance", desc: "Entretien et maintenance des installations techniques.", icon: "wrench" },
        { title: "Qualité & sécurité", desc: "Démarche QSE sur l'ensemble de nos chantiers.", icon: "helmet" },
      ],
      ctaTitle: "Vous avez un projet ?",
      ctaText: "Confiez-le à une équipe rigoureuse. Contactez-nous pour un premier échange.",
    },
    contactPage: {
      title: "Contactez-nous",
      subtitle:
        "Un projet, une question, une demande de devis ? Décrivez votre besoin, nous vous répondons rapidement.",
      formTitle: "Demande de devis",
      quoteIntro: "Nouvelle demande — BATIPRO BTP CONSULTING",
      fields: {
        name: "Nom complet",
        phone: "Téléphone",
        service: "Projet concerné",
        message: "Décrivez votre projet",
        selectService: "Choisir un domaine",
        send: "Envoyer via WhatsApp",
      },
      callTitle: "Appelez-nous",
      writeTitle: "Écrivez-nous",
      addressTitle: "Zones d'intervention",
      addressText:
        "Kénitra · Rabat · Tanger · Meknès · Casablanca — et leurs régions.",
      note: "L'adresse e-mail est provisoire et sera mise à jour prochainement.",
    },
    footer: {
      tagline:
        "Entreprise marocaine de construction, rénovation, aménagement et accompagnement technique des projets de bâtiment.",
      company: "L'entreprise",
      services: "Services",
      contact: "Contact",
      rights: "Tous droits réservés.",
      madeBy: "Conception & développement du site",
    },
  },

  en: {
    nav: {
      home: "Home",
      about: "Company",
      services: "Services",
      realisations: "Projects",
      contact: "Contact",
      quote: "Request a quote",
    },
    hero: {
      eyebrow: "Construction · Civil engineering · Site coordination · Consulting",
      title: "Building with rigour,\nsupporting with trust",
      subtitle:
        "BATIPRO BTP CONSULTING delivers your construction, renovation and fit-out projects in Kenitra, Rabat, Tangier, Meknes and Casablanca, and supports you technically from the initial study to final handover.",
      ctaCall: "Call",
      ctaWhats: "WhatsApp",
      ctaQuote: "Request a quote",
    },
    servicesOverview: {
      eyebrow: "Our areas of expertise",
      title: "Complete building expertise",
      subtitle:
        "From structural works to site management, through renovation, fit-out, maintenance and QHSE — a single company for your entire project.",
      cta: "See all services",
    },
    services: [
      {
        id: "gros-oeuvre",
        slug: "construction-gros-oeuvre",
        title: "Construction & structural works",
        desc: "New buildings, foundations, reinforced-concrete structures and masonry, built to the highest standards.",
        icon: "building",
        metaTitle: "Building construction & structural works in Morocco",
        metaDesc:
          "Construction and structural works by BATIPRO: foundations, reinforced-concrete structure and masonry in Kenitra, Rabat, Tangier, Meknes and Casablanca.",
        intro:
          "We deliver your new-build projects, from earthworks to structural finishing. Our teams master foundations, reinforced-concrete structures, masonry and all the works that give a building its strength and durability.",
        bullets: [
          "Earthworks, foundations and structural works",
          "Reinforced-concrete structure (columns, beams, slabs)",
          "Masonry, partitions and renders",
          "Residential, commercial and industrial buildings",
          "Compliance with Moroccan standards and best practice",
        ],
        audience: "Homeowners, property developers, companies and public clients.",
      },
      {
        id: "renovation",
        slug: "renovation-rehabilitation",
        title: "Renovation & rehabilitation",
        desc: "Refurbishment, rehabilitation and upgrading of existing buildings, with minimal disruption.",
        icon: "renovate",
        metaTitle: "Building renovation & rehabilitation in Morocco",
        metaDesc:
          "Building renovation and rehabilitation by BATIPRO: refurbishment, structural strengthening and code upgrades in Kenitra, Rabat, Tangier and Casablanca.",
        intro:
          "We bring your existing buildings back to life: refurbishment, major rehabilitation, structural strengthening and code upgrades. Every intervention is planned to limit disruption and respect how the space is used.",
        bullets: [
          "Full or partial renovation",
          "Rehabilitation and structural strengthening",
          "Technical and safety code upgrades",
          "Facade, waterproofing and roofing works",
          "Modernisation of interior spaces",
        ],
        audience:
          "Owners, co-ownerships, companies and local authorities looking to upgrade an existing building.",
      },
      {
        id: "amenagement",
        slug: "amenagement-interieur-exterieur",
        title: "Interior & exterior fit-out",
        desc: "Finishing works, fit-out of interior and exterior spaces, and miscellaneous works.",
        icon: "ruler",
        metaTitle: "Interior & exterior fit-out in Morocco",
        metaDesc:
          "Interior and exterior fit-out by BATIPRO: finishing works, coverings and joinery in Kenitra, Rabat, Tangier, Meknes and Casablanca. Careful workmanship.",
        intro:
          "We transform your spaces with careful finishing: finishing works, floor and wall coverings, false ceilings, joinery, painting and outdoor landscaping. Precise work, from the smallest detail to handover.",
        bullets: [
          "Floor and wall coverings (tiling, parquet, marble)",
          "False ceilings, plastering and painting",
          "Wood, aluminium and PVC joinery",
          "Fit-out of offices, shops and homes",
          "Outdoor spaces, roads and miscellaneous works",
        ],
        audience:
          "Homeowners, shops, companies and developers looking to complete or modernise their spaces.",
      },
      {
        id: "opc",
        slug: "opc-suivi-coordination-chantier",
        title: "Site scheduling & coordination (OPC)",
        desc: "Scheduling, management and coordination: control of cost, time, quality and safety.",
        icon: "clipboard",
        metaTitle: "Site scheduling, management & coordination (OPC) in Morocco",
        metaDesc:
          "OPC service by BATIPRO: site scheduling, management and coordination in Kenitra, Rabat, Tangier, Meknes and Casablanca. Deadlines, costs, quality.",
        intro:
          "Our OPC service (Scheduling, Management and Coordination) organises your site from end to end: task planning, coordination of the different trades and constant control of deadlines, costs, quality and safety.",
        bullets: [
          "Scheduling and detailed works programme",
          "Management and coordination of contractors",
          "Control of deadlines, costs and quality",
          "Site safety and conditions monitoring",
          "Regular reporting to the client",
        ],
        audience:
          "Clients, developers, architects and public bodies managing building sites.",
      },
      {
        id: "assistance",
        slug: "assistance-technique-conseil",
        title: "Technical assistance & consulting",
        desc: "Technical support from the initial study to handover: studies, estimates and building advice.",
        icon: "handshake",
        metaTitle: "Technical assistance & building consulting in Morocco",
        metaDesc:
          "Technical assistance and building consulting by BATIPRO: studies, cost estimation and support in Kenitra, Rabat, Tangier, Meknes and Casablanca.",
        intro:
          "We support the client at every stage of the project: preliminary studies, cost estimation, choice of technical solutions and assistance through to handover. Independent, clear advice focused on your interests.",
        bullets: [
          "Preliminary studies and technical feasibility",
          "Cost estimation and budget optimisation",
          "Advice on technical solutions and materials",
          "Client-side project assistance (PMO)",
          "Support through to works handover",
        ],
        audience:
          "Individuals and professionals looking to secure a construction or renovation project.",
      },
      {
        id: "maintenance",
        slug: "entretien-maintenance",
        title: "Upkeep & maintenance",
        desc: "Upkeep and maintenance of building technical installations, both preventive and corrective.",
        icon: "wrench",
        metaTitle: "Building upkeep & maintenance in Morocco",
        metaDesc:
          "Building upkeep and maintenance by BATIPRO: preventive and corrective maintenance and repairs in Kenitra, Rabat, Tangier, Meknes and Casablanca.",
        intro:
          "We keep your buildings performing over time through regular upkeep and reliable maintenance of technical installations. Planned preventive interventions or corrective repairs, with contracts tailored to your assets.",
        bullets: [
          "Planned preventive maintenance",
          "Corrective maintenance and repairs",
          "Upkeep of building technical installations",
          "Tailored service contracts",
          "Intervention tracking and traceability",
        ],
        audience:
          "Co-ownerships, companies, shops and property managers.",
      },
      {
        id: "qse",
        slug: "qualite-securite-environnement",
        title: "Quality, safety & environment",
        desc: "QHSE support: quality management, site safety and respect for the environment.",
        icon: "helmet",
        metaTitle: "QHSE support: quality, safety, environment",
        metaDesc:
          "QHSE support by BATIPRO: quality management, site safety and environment in Kenitra, Rabat, Tangier, Meknes and Casablanca.",
        intro:
          "Quality of execution, worker safety and respect for the environment are at the heart of our method. We put a structured QHSE approach in place on every site, for reliable, safe and durable works.",
        bullets: [
          "Quality management and control",
          "Prevention and site-safety plans",
          "Compliance with standards and regulations",
          "Waste management and environmental approach",
          "Continuous improvement and lessons learned",
        ],
        audience:
          "Clients and companies mindful of the quality, safety and environmental impact of their projects.",
      },
    ],
    serviceDetail: {
      eyebrow: "Area of expertise",
      includedTitle: "What's included",
      audienceTitle: "Who it's for",
      areasLine:
        "Available in Kenitra, Rabat, Tangier, Meknes and Casablanca.",
      otherServices: "Other areas",
      back: "All services",
      learnMore: "Learn more",
      quoteAside: "Got a project in mind?",
      quoteAsideText:
        "Tell us what you need: we'll get back to you quickly with a clear, no-commitment estimate.",
    },
    about: {
      metaTitle: "The company — BATIPRO BTP CONSULTING",
      metaDesc:
        "BATIPRO BTP CONSULTING, a Moroccan construction and renovation company working in Kenitra, Rabat, Tangier, Meknes and Casablanca. Rigour and transparency.",
      hero: {
        title: "Who we are",
        subtitle:
          "BATIPRO BTP CONSULTING — a Moroccan building company founded on rigour, transparency and honouring our commitments.",
      },
      intro: [
        "BATIPRO BTP CONSULTING is a Moroccan company specialising in construction, renovation and fit-out works, and in the technical support of building projects.",
        "We work in Kenitra, Rabat, Tangier, Meknes and Casablanca with individuals, professionals, developers and public bodies, offering solutions tailored to each project's needs, from the initial study through to works handover.",
        "Drawing on solid experience in building, civil engineering, maintenance, site management and quality management, BATIPRO is committed to services built on rigour, transparency and honouring our commitments.",
        "Our approach relies on methodical site organisation, sound coordination of the various stakeholders and constant control of quality, cost, time and safety.",
      ],
      valuesTitle: "Our values",
      values: [
        { title: "Rigour", desc: "Methodical organisation and constant control of quality, cost and time.", icon: "shield" },
        { title: "Transparency", desc: "Clear communication and commitments honoured at every stage.", icon: "eye" },
        { title: "Experience", desc: "Building, civil engineering, maintenance, site management and QHSE.", icon: "star" },
        { title: "Closeness", desc: "Listening to the client and support from study to handover.", icon: "handshake" },
      ],
      engagementTitle: "Our commitment",
      engagement: [
        "Every project is handled with the same standards, whatever its size. Our goal is to bring our clients reliable, durable solutions suited to their budget.",
        "At BATIPRO, we believe a project's success rests above all on listening to the client, quality of execution, on-time delivery and clear communication throughout the works.",
      ],
      directorTitle: "A word from the director",
      director: [
        "Welcome to the BATIPRO BTP CONSULTING website.",
        "BATIPRO was created out of a clear ambition: to put experience, technical skill and professional rigour at the service of construction projects delivered with respect for quality, deadlines and the commitments made to our clients.",
        "Today, the building sector demands far more than simply carrying out the works. It requires serious preparation, sound coordination of stakeholders, cost control and constant attention to safety and quality.",
        "It is in this spirit that BATIPRO supports its clients at every stage of their project. Our ambition is to offer practical, reliable and tailored solutions, while building a relationship based on listening, transparency and trust.",
        "Our background in civil engineering, works management, building maintenance and QHSE management is a genuine asset for ensuring a global, controlled view of each operation.",
        "We are convinced that a company's reputation is built through the quality of its work, keeping its word and the satisfaction of its clients.",
        "On behalf of the entire BATIPRO BTP CONSULTING team, I thank you for your trust and welcome you.",
      ],
      directorName: "Adil Sibari",
      directorRole: "Director of BATIPRO BTP CONSULTING",
    },
    whyUs: {
      title: "Why BATIPRO",
      items: [
        { title: "Rigour & quality", desc: "Constant control of quality, cost and time." },
        { title: "Global view", desc: "From the initial study to works handover." },
        { title: "Transparency", desc: "Clear quotes and commitments kept, no surprises." },
        { title: "Safety", desc: "Constant attention to the safety of every site." },
      ],
    },
    coverage: {
      eyebrow: "Service areas",
      title: "The cities we work in",
      subtitle:
        "BATIPRO BTP CONSULTING operates along the Kenitra – Rabat – Tangier – Meknes – Casablanca corridor, with teams that can be mobilised on each of your sites.",
      cities: [
        {
          name: "Kenitra",
          region: "Rabat-Salé-Kénitra",
          desc: "Structural works, renovation and fit-out for homeowners, companies and property developers in Kenitra and its surroundings.",
        },
        {
          name: "Rabat",
          region: "Rabat-Salé-Kénitra",
          desc: "Construction, rehabilitation and OPC assignments in Rabat and its wider area, on residential and commercial projects alike.",
        },
        {
          name: "Tangier",
          region: "Tanger-Tétouan-Al Hoceïma",
          desc: "New buildings, renovations and technical assistance in Tangier, including industrial and logistics projects.",
        },
        {
          name: "Meknes",
          region: "Fès-Meknès",
          desc: "Construction, fit-out, upkeep and building maintenance in Meknes and its region.",
        },
        {
          name: "Casablanca",
          region: "Casablanca-Settat",
          desc: "Structural and finishing works, site coordination and QHSE management on your Casablanca projects.",
        },
      ],
      note:
        "A project in another Moroccan city? Tell us about it — we review every request case by case.",
    },
    approach: {
      eyebrow: "Our method",
      title: "How we run a project",
      subtitle: "A methodical approach, from the first study to works handover.",
      steps: [
        { title: "Study & listening", desc: "We analyse your project, constraints and budget to propose the most suitable solution." },
        { title: "Estimate & quote", desc: "We provide a clear, detailed quote with a provisional works schedule." },
        { title: "Site organisation", desc: "Task scheduling, coordination of contractors and the QHSE approach in place." },
        { title: "Execution & control", desc: "Works delivered with constant control of quality, cost, time and safety." },
        { title: "Handover & follow-up", desc: "Compliant delivery, snagging and support for upkeep and maintenance." },
      ],
    },
    stats: [
      { value: "5", label: "complementary areas of expertise" },
      { value: "100%", label: "of projects tracked on quality, cost, time" },
      { value: "0", label: "compromise on site safety" },
    ],
    finalCta: {
      title: "A construction or renovation project?",
      subtitle:
        "Let's talk. Tell us about your project and get a clear, no-commitment estimate.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      subtitle: "Everything you need to know before entrusting us with your building project.",
      items: [
        {
          q: "What kinds of projects do you deliver?",
          a: "BATIPRO BTP CONSULTING handles new-build construction, renovation, rehabilitation, interior and exterior fit-out, as well as site management and coordination (OPC), technical assistance, building maintenance and QHSE support. We work on residential, commercial, retail and industrial projects.",
        },
        {
          q: "Which cities do you work in?",
          a: "BATIPRO BTP CONSULTING works in Kenitra, Rabat, Tangier, Meknes and Casablanca, as well as in the regions surrounding these cities. For a project elsewhere in Morocco, get in touch — we review every request case by case.",
        },
        {
          q: "Do you work with both individuals and professionals?",
          a: "Yes. We support individuals, professionals, property developers and public bodies. Every project is handled with the same standards, whatever its size.",
        },
        {
          q: "What is an OPC service and why does it matter?",
          a: "OPC (Scheduling, Management and Coordination) means organising the site, planning tasks, coordinating the different trades and constantly controlling deadlines, costs, quality and safety. It is a guarantee of sound execution and of the commitments made to the client being kept.",
        },
        {
          q: "Do you provide support from the study stage?",
          a: "Yes. Our technical assistance starts at the initial study: feasibility, cost estimation, choice of technical solutions, then support through to works handover. We advise the client at every stage.",
        },
        {
          q: "How do you guarantee site quality and safety?",
          a: "We put a structured QHSE approach in place on every site: control of execution quality, prevention and safety plans, regulatory compliance and an environmental approach. Worker safety is never compromised.",
        },
        {
          q: "How do I get a quote?",
          a: "Contact us by phone, on WhatsApp or via the website form describing your project. We'll get back to you quickly with a clear, detailed, no-commitment estimate.",
        },
      ],
    },
    servicesPage: {
      title: "Our areas of expertise",
      metaDesc:
        "Complete building expertise: construction, renovation, fit-out, OPC, maintenance and QHSE in Kenitra, Rabat, Tangier, Meknes and Casablanca.",
      subtitle:
        "Complete building expertise, from study to handover: construction, renovation, fit-out, site coordination, technical assistance, maintenance and QHSE.",
      intro: [
        "BATIPRO BTP CONSULTING is a Moroccan building company supporting individuals, professionals, developers and public bodies. We cover the full lifecycle of a construction project: preliminary studies, structural works, finishing works, site management, maintenance and quality management.",
        "Every project starts by carefully listening to your needs and a clear estimate. We adapt our solutions to the nature of the works, your constraints and your budget, for a reliable, durable result delivered on time.",
        "Our teams work in Kenitra, Rabat, Tangier, Meknes and Casablanca, as well as in the regions surrounding these cities.",
      ],
      audience: {
        title: "Solutions for every client",
        subtitle: "Whether you are an individual, a company or a developer, we have the right expertise.",
        pro: {
          title: "Professionals & developers",
          desc: "Commercial, retail and industrial buildings, property operations, rehabilitations and OPC assignments: we manage your sites with rigorous control of cost, time and quality.",
        },
        home: {
          title: "Individuals",
          desc: "Villa construction, apartment or house renovation, interior and exterior fit-out: we support you from study to handover, with clear quotes and transparent follow-up.",
        },
      },
    },
    realisations: {
      metaTitle: "Projects & expertise — BATIPRO BTP CONSULTING",
      metaDesc:
        "BATIPRO's expertise: construction, renovation, fit-out and site management in Kenitra, Rabat, Tangier, Meknes and Casablanca. Portfolio in progress.",
      hero: {
        title: "Our projects",
        subtitle:
          "BATIPRO expertise at the service of your building projects. Our portfolio is growing with every site.",
      },
      noticeTitle: "Portfolio in progress",
      noticeText:
        "BATIPRO BTP CONSULTING is a young company. Our first completed projects will be shown here soon. In the meantime, explore our areas of expertise — and let's talk about your project.",
      capabilitiesTitle: "Our expertise in pictures",
      capabilitiesSubtitle:
        "The main types of works and interventions we carry out for our clients.",
      capabilities: [
        { title: "Buildings & structure", desc: "Foundations, reinforced-concrete structures and new buildings.", icon: "building" },
        { title: "Renovation", desc: "Refurbishment and rehabilitation of existing buildings.", icon: "renovate" },
        { title: "Fit-out & finishing", desc: "Finishing works, coverings and careful fit-out.", icon: "ruler" },
        { title: "Site management", desc: "Scheduling, coordination and works monitoring (OPC).", icon: "clipboard" },
        { title: "Maintenance", desc: "Upkeep and maintenance of technical installations.", icon: "wrench" },
        { title: "Quality & safety", desc: "A QHSE approach across all our sites.", icon: "helmet" },
      ],
      ctaTitle: "Have a project?",
      ctaText: "Entrust it to a rigorous team. Contact us for a first conversation.",
    },
    contactPage: {
      title: "Contact us",
      subtitle:
        "A project, a question, a quote request? Describe what you need and we'll get back to you quickly.",
      formTitle: "Quote request",
      quoteIntro: "New enquiry — BATIPRO BTP CONSULTING",
      fields: {
        name: "Full name",
        phone: "Phone",
        service: "Project type",
        message: "Describe your project",
        selectService: "Choose an area",
        send: "Send via WhatsApp",
      },
      callTitle: "Call us",
      writeTitle: "Write to us",
      addressTitle: "Service areas",
      addressText:
        "Kenitra · Rabat · Tangier · Meknes · Casablanca — and their regions.",
      note: "The e-mail address is provisional and will be updated soon.",
    },
    footer: {
      tagline:
        "A Moroccan company for construction, renovation, fit-out and technical support of building projects.",
      company: "Company",
      services: "Services",
      contact: "Contact",
      rights: "All rights reserved.",
      madeBy: "Website design & development by",
    },
  },
};
