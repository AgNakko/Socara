/**
 * Source de vérité des données du site SOCARA.
 * Sera remplacé/branché sur WordPress headless en phase 2.
 */

export const company = {
  name: 'SOCARA',
  tagline: "L'art de construire depuis 1973",
  baseline: 'Conception, réalisation et livraison de projets de construction en Alsace.',
  description: 'Gros œuvre, entreprise générale, réhabilitation.',
  founded: 1973,
  headcount: 150,
  builtCount: 994,
  yearsActive: 52,
  region: 'Alsace',
  email: 'contact@socara.fr',
  recruitmentEmail: 'recrutement@socara.fr',
  // TODO : à fournir par le client
  address: 'Strasbourg — Alsace',
  phone: '',
};

export const navigation = [
  { label: "L'Entreprise",   href: '/entreprise' },
  { label: 'Expertises',     href: '/expertises' },
  { label: 'Réalisations',   href: '/realisations' },
  { label: 'Carrières',      href: '/carrieres' },
  { label: 'Actualités',     href: '/actualites' },
  { label: 'Contact',        href: '/contact' },
];

export const expertises = [
  {
    id: 'gros-oeuvre',
    number: '01',
    title: 'Gros œuvre',
    tagline: 'Notre cœur de métier historique',
    description:
      "SOCARA s'est imposée depuis 1973 comme référence du gros œuvre en Alsace. Maçonnerie béton armé, coffrage traditionnel ou préfabriqué, coordination avec les corps d'état techniques dès la phase amont.",
    bullets: [
      'Béton armé, banches sécurisées intégrées',
      'Coffrage traditionnel et préfabriqué',
      'Incorporations dès la phase gros œuvre',
      'Respect tolérances, délais, sécurité',
    ],
  },
  {
    id: 'logements',
    number: '02',
    title: 'Construction de logements',
    tagline: 'Notre principale expertise',
    description:
      'Du petit collectif aux grandes résidences, en accession, social, résidence services. Programmes mixtes, résidences étudiantes et seniors, écoquartiers et constructions durables (BBC, RE2020, HQE).',
    bullets: [
      'Logements collectifs sous toutes leurs formes',
      'Programmes mixtes accession / social',
      'Résidences étudiantes, seniors, intermédiaires',
      'Standards environnementaux BBC, RE2020, HQE',
    ],
  },
  {
    id: 'entreprise-generale',
    number: '03',
    title: 'Entreprise générale',
    tagline: "Coordination tous corps d'état",
    description:
      "Pilotage global du chantier de l'analyse du CCTP jusqu'à la réception sans réserve. Synthèse technique, planification, co-activité, phasage, gestion administrative et contractuelle.",
    bullets: [
      "Pilotage chantier de l'appel d'offres à la livraison",
      'Synthèse technique et planification co-activité',
      'Gestion administrative, contractuelle, financière',
      'Réhabilitation et reconversion urbaine',
    ],
  },
];

export const values = [
  {
    title: 'Proximité',
    body: "Circuits courts, relations directes, collaborations solides avec maîtres d'ouvrage, partenaires et collectivités. Échanges simples, meilleure réactivité, suivi humain.",
    quote: 'Proches du terrain, proches de nos clients.',
  },
  {
    title: 'Transmission',
    body: 'Apprentis, alternants, tutorat interne. Beaucoup de compagnons ont fait 20, 30, 40 ans chez SOCARA, parfois de père en fils.',
    quote: "Former les bâtisseurs de demain, c'est assurer la solidité de nos ouvrages.",
  },
  {
    title: 'Maîtrise technique',
    body: "Études soignées, préparation méthodique, rigueur d'exécution. Que ce soit en gros œuvre, entreprise générale ou réhabilitation, la précision reste notre signature.",
    quote: "Quand la solution n'est pas dans la notice, on l'invente.",
  },
  {
    title: 'Engagement humain',
    body: 'Respect, écoute, sécurité, conditions de chantier dignes, accompagnement social. Initiatives solidaires : insertion, partenariats locaux, événements internes.',
    quote: 'Le chantier est une aventure collective : il ne se réussit jamais seul.',
  },
];

export type ProjectCategory = 'gros-oeuvre' | 'entreprise-generale' | 'rehabilitation';
export type ProjectType = 'logements' | 'tertiaire' | 'mixte' | 'equipement';

export interface Project {
  slug: string;
  name: string;
  location: string;
  category: ProjectCategory;
  type: ProjectType;
  moa: string;
  architect?: string;
  year: string;
  count?: string;
  description?: string;
  cover?: string;
}

export const projects: Project[] = [
  {
    slug: 'les-deux-rives',
    name: 'Les Deux Rives',
    location: 'Strasbourg, Port du Rhin',
    category: 'gros-oeuvre',
    type: 'logements',
    moa: 'Vinci Immobilier',
    architect: 'Denu & Paradon',
    year: '2012–2014',
    count: '380 logements · 7 îlots',
    description:
      "Chantier complexe en zone urbaine, exigences environnementales élevées, maîtrise du phasage en coactivité.",
  },
  {
    slug: 'quartier-renaissance',
    name: 'Quartier Renaissance',
    location: 'Strasbourg Robertsau',
    category: 'entreprise-generale',
    type: 'logements',
    moa: 'Nexity · Habitation Moderne · Immobilière des Quais',
    year: '2011–2014',
    description:
      "Résidences collectives sur terrain reconverti. Coordination de multiples MOA et architectes, approche durable.",
  },
  {
    slug: 'natureo',
    name: 'Natureo',
    location: 'Lingolsheim, Écoquartier des Tanneries',
    category: 'entreprise-generale',
    type: 'logements',
    moa: 'Nexity · Bouygues Immobilier',
    architect: 'AEA Architectes',
    year: '2013',
    description:
      "Projet labellisé écoquartier, normes BBC, gestion fine des nuisances et propreté chantier.",
  },
  {
    slug: 'ile-aux-jardins',
    name: "L'Île aux Jardins",
    location: 'Hœnheim',
    category: 'entreprise-generale',
    type: 'mixte',
    moa: 'Rey-Lucquet, Schweitzer et associés',
    year: '2014',
    description:
      'Logement social, intermédiaire, accession + résidence seniors. Très grande diversité de cahiers des charges.',
  },
  {
    slug: 'carre-emeraude',
    name: 'Carré Émeraude',
    location: 'Oberhausbergen',
    category: 'gros-oeuvre',
    type: 'logements',
    moa: 'Marignan',
    year: '2014',
    count: '128 logements + 6 maisons de ville',
  },
  {
    slug: 'green-park',
    name: 'Green Park',
    location: 'Strasbourg',
    category: 'gros-oeuvre',
    type: 'logements',
    moa: 'Stradim',
    year: '2014',
  },
  {
    slug: 'residence-avenue',
    name: "Résidence L'Avenue",
    location: 'Strasbourg',
    category: 'gros-oeuvre',
    type: 'logements',
    moa: 'Stradim',
    year: '2015',
  },
  {
    slug: 'le-paradiso',
    name: 'Le Paradiso',
    location: 'Strasbourg',
    category: 'gros-oeuvre',
    type: 'logements',
    moa: 'Nexity',
    year: '2013',
  },
  {
    slug: 'le-schulmeister',
    name: 'Le Schulmeister',
    location: 'Strasbourg',
    category: 'gros-oeuvre',
    type: 'logements',
    moa: 'CUS Habitat',
    year: '2011',
  },
  {
    slug: 'villas-saint-thomas',
    name: 'Les Villas Saint-Thomas',
    location: 'Niederhausbergen',
    category: 'gros-oeuvre',
    type: 'logements',
    moa: 'Perspective Immobilier',
    year: '2014',
  },
  {
    slug: 'oree-des-sens',
    name: "L'Orée des Sens",
    location: 'Souffelweyersheim',
    category: 'gros-oeuvre',
    type: 'logements',
    moa: 'Bartholdi Promotion',
    year: '2014',
  },
];

export const partners = [
  { name: 'Nexity', logo: '/img/clients/nexity.png' },
  { name: 'Stradim', logo: '/img/clients/stradim.png' },
  { name: 'Bouygues Immobilier', logo: '/img/clients/bouygues-immo.webp' },
  { name: 'Icade', logo: '/img/clients/icade.png' },
  { name: 'Frank Développement Immobilier', logo: '/img/clients/frank.png' },
  { name: 'Delta Promotion', logo: '/img/clients/delta.png' },
  { name: 'Axcess Promotion', logo: '/img/clients/axcess.png' },
  { name: 'DBI Immobilier', logo: '/img/clients/dbi.jpg' },
];

export const testimonials = [
  {
    quote:
      "J'ai commencé en stage chez SOCARA. J'y suis resté parce que j'ai senti qu'on croyait en moi. Aujourd'hui, je suis conducteur de travaux.",
    author: 'Raphaël',
    role: 'Ancien stagiaire devenu cadre travaux',
  },
  {
    quote:
      "Le travail manuel a encore du sens. Quand on passe devant un bâtiment qu'on a construit, on ressent une vraie fierté.",
    author: 'Frédéric',
    role: 'Compagnon coffreur depuis 22 ans',
  },
  {
    quote:
      "Nous savons que le chantier sera mené dans les délais et avec un haut niveau d'exigence. SOCARA est un partenaire fiable.",
    author: 'Promoteur privé',
    role: "Maîtrise d'ouvrage, Strasbourg",
  },
];

export const timeline = [
  { year: '1973', title: 'Fondation', body: "Création de SOCARA à Strasbourg, à partir d'une entreprise de carrelage et de crépissage. L'ancrage terrain s'enracine." },
  { year: '1980', title: 'Premiers immeubles collectifs', body: "L'entreprise se spécialise dans la construction d'immeubles de logements collectifs en Alsace." },
  { year: '1989', title: 'Futura 2000, Schiltigheim', body: 'Une opération marquante qui valide notre savoir-faire en logement collectif moderne.' },
  { year: '1991', title: 'Tribunal d\'instances de Strasbourg', body: 'Première grue à tour en chantier — un cap technique franchi.' },
  { year: '1996', title: 'La décoffreuse SOCARA brevetée', body: 'Un outil développé en interne, breveté. Marque de fabrique : la R&D sur le terrain.' },
  { year: '2010', title: 'Le Schulmeister', body: 'Chantier de référence pour CUS Habitat, début d\'une décennie d\'expansion sur les grands programmes alsaciens.' },
  { year: '2012', title: 'Les Deux Rives, Strasbourg', body: '380 logements, 7 îlots. Chantier complexe en zone urbaine, vitrine de notre maîtrise du phasage.' },
  { year: '2013', title: 'Natureo, écoquartier des Tanneries', body: 'Projet labellisé écoquartier. SOCARA intègre les exigences BBC et la gestion fine des nuisances.' },
  { year: '2024', title: 'Nouveau siège, Strasbourg', body: 'Emménagement dans un siège conçu par AEA Architectes — un signal fort de notre identité industrielle.' },
  { year: '2026', title: '+50 ans, +994 ouvrages', body: "150 collaborateurs, indépendance préservée, transmission active. L'aventure continue." },
];

export const newsItems = [
  {
    slug: 'inauguration-nouveau-siege',
    title: 'Inauguration du nouveau siège SOCARA',
    excerpt: "Après plus de deux ans de travaux, notre nouveau siège ouvre ses portes à Strasbourg. Conçu par AEA Architectes, il incarne notre identité industrielle.",
    category: 'vie-entreprise',
    date: '2024-09-15',
    cover: '/img/photos/siege-facade-nuit.jpg',
    readingTime: 4,
  },
  {
    slug: 'rentree-alternance-2025',
    title: 'Rentrée 2025 : 12 nouveaux apprentis et alternants',
    excerpt: 'Comme chaque année, SOCARA accueille des jeunes en formation — CAP, bac pro, BTS, école d\'ingénieur. Bienvenue à la nouvelle promotion.',
    category: 'vie-entreprise',
    date: '2025-09-02',
    cover: '/img/photos/siege-entree.jpg',
    readingTime: 3,
  },
  {
    slug: 'banche-securite-integree',
    title: 'Banches à sécurité intégrée : retour sur 30 ans d\'innovation chantier',
    excerpt: 'Depuis les années 1990, SOCARA développe ses propres outils de chantier. Petit retour sur la banche à sécurité intégrée, devenue standard interne.',
    category: 'lab-chantier',
    date: '2025-06-10',
    cover: '/img/photos/siege-interieur-03.jpg',
    readingTime: 6,
  },
  {
    slug: 'phasage-deux-rives',
    title: 'Comment nous avons phasé Les Deux Rives — 380 logements en 7 îlots',
    excerpt: 'Retour technique sur un de nos chantiers les plus emblématiques : organisation, coactivité, gestion des risques, leçons retenues.',
    category: 'lab-chantier',
    date: '2025-04-22',
    cover: '/img/photos/siege-facade-jour.jpg',
    readingTime: 8,
  },
  {
    slug: 'chantier-zero-reserve',
    title: 'La culture du « chantier zéro réserve » chez SOCARA',
    excerpt: 'Notre standard interne : livrer sans réserve. Comment on s\'y prend, méthodiquement, depuis l\'analyse du CCTP jusqu\'à la réception.',
    category: 'lab-chantier',
    date: '2025-02-08',
    cover: '/img/photos/siege-escalier.jpg',
    readingTime: 7,
  },
  {
    slug: 'partenariat-cfa-btp',
    title: 'Partenariat renforcé avec le CFA BTP d\'Alsace',
    excerpt: 'Formation par alternance, tutorat, journées portes ouvertes — la transmission est notre engagement le plus durable.',
    category: 'vie-entreprise',
    date: '2024-11-04',
    cover: '/img/photos/siege-interieur-04.jpg',
    readingTime: 3,
  },
];

export const newsCategories = [
  { id: 'vie-entreprise', label: "Vie de l'entreprise" },
  { id: 'lab-chantier',   label: 'Lab chantier' },
];
