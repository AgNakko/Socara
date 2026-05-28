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
    role: 'Maîtrise d\'ouvrage, Strasbourg',
  },
];
