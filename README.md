# Site SOCARA

Site web de SOCARA — entreprise de gros œuvre et entreprise générale en Alsace, fondée à Strasbourg en 1973.

## Architecture du projet

```
.
├── content/         Contenu rédactionnel (Markdown — source de vérité avant CMS)
│   ├── pages/         Pages institutionnelles (entreprise, valeurs, expertises…)
│   ├── projects/      Réalisations (1 fichier par projet)
│   ├── news/          Actualités
│   └── jobs/          Offres d'emploi (si activé)
├── design/          Spec design, brand book, sitemap
├── assets/          Logos, photos, vidéos, PDFs sources
└── site/            Code Astro (créé en phase 2)
```

## Stack technique cible

- **Front** : Astro + Tailwind CSS (statique, SEO-friendly, ultra-rapide)
- **Back-office** : WordPress en mode headless (API REST consommée par Astro au build)
- **Déploiement** : Vercel ou Netlify (front) + hébergement WordPress (back)
- **Formulaires** : envoi vers `recrutement@socara.fr` / `contact@socara.fr`

## Phases

- **Phase 1** — Maquettes Figma (2 versions visuelles : Affirmée vs Institutionnelle)
- **Phase 2** — Setup Astro + WordPress headless
- **Phase 3** — Intégration de la maquette validée
- **Phase 4** — Mise en ligne
