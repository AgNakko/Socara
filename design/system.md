# Système de design SOCARA

> Direction synthétisée via la skill ui-ux-pro-max + brief client.
> Statut : draft v0.1 — à itérer après premiers écrans.

## Identité visuelle : « Brutalisme éditorial × Swiss precision »

Le bâtiment est un acte mesuré, précis, structurel. Le site doit refléter cette discipline tout en assumant la fierté brute du métier. Pas de minimalisme tiède, pas de corporate glossy. **Bâtir hurle dans la typo, le réel se voit dans les photos, la grille tient le tout.**

### Influences
- **Swiss Modernism 2.0** — grille stricte, asymétrie raisonnée, mathématique du blanc
- **Brutalisme web 2020s** — typo massive, contrastes francs, détails techniques visibles
- **Magazine architecture** (A+, Detail, Domus) — couvertures éditoriales, narration longue, photos pleine page
- **Sites studios constructeurs/architectes modernes** (BIG, OMA, Snøhetta, mais sans le côté élitiste)

## Design tokens

### Couleurs sémantiques

```css
:root {
  /* Brand — directe issue de la charte */
  --rouge:           #E30613;
  --rouge-fonce:     #B00010;
  --rouge-clair:     #F5404E;
  --jaune:           #FFDD00;
  --jaune-dore:      #D4A800;

  /* Neutres */
  --anthracite:      #1A1A1A;  /* texte principal, fonds sombres */
  --gris-chaud:      #3D3D3A;  /* texte secondaire */
  --gris-medium:     #B8B8B0;  /* bordures, séparateurs */
  --gris-clair:      #F4F4F2;  /* fonds de section */
  --ivoire:          #F0EFEB;  /* fond chaleureux alternatif */
  --blanc:           #FFFFFF;

  /* Sémantique */
  --color-bg:        var(--blanc);
  --color-bg-soft:   var(--ivoire);
  --color-bg-dark:   var(--anthracite);
  --color-fg:        var(--anthracite);
  --color-fg-muted:  var(--gris-chaud);
  --color-fg-on-dark:var(--blanc);
  --color-accent:    var(--rouge);
  --color-highlight: var(--jaune);
  --color-border:    color-mix(in oklab, var(--anthracite) 12%, transparent);

  /* Élévation — utilisée avec parcimonie (Swiss = pas de drop shadows) */
  --elev-1: 0 1px 0 var(--color-border);
  --elev-2: 0 6px 24px -8px rgb(0 0 0 / 0.08);
}
```

### Typographie

```css
/* Mont = display (licence client OK), Barlow + Barlow Condensed = texte/labels */
--font-display: 'Mont', 'Barlow Condensed', system-ui, sans-serif;
--font-heading: 'Barlow Condensed', 'Mont', system-ui, sans-serif;
--font-body:    'Barlow', system-ui, sans-serif;
--font-label:   'Barlow Condensed', system-ui, sans-serif;

/* Échelle modulaire — clamp() pour fluide */
--text-eyebrow:  clamp(0.75rem, 0.7rem + 0.3vw, 0.875rem);  /* 12-14px */
--text-body:     clamp(1rem, 0.95rem + 0.25vw, 1.125rem);   /* 16-18px */
--text-lede:     clamp(1.25rem, 1.1rem + 0.7vw, 1.5rem);    /* 20-24px */
--text-h4:       clamp(1.5rem, 1.3rem + 1vw, 2rem);         /* 24-32px */
--text-h3:       clamp(2rem, 1.6rem + 2vw, 3rem);           /* 32-48px */
--text-h2:       clamp(2.5rem, 2rem + 2.5vw, 4rem);         /* 40-64px */
--text-h1:       clamp(3rem, 2.4rem + 3vw, 5rem);           /* 48-80px */
--text-display:  clamp(4rem, 3rem + 5vw, 7.5rem);           /* 64-120px — hero only */
```

**Règles éditoriales** :
- Les **H1 display** assument leur taille (jusqu'à 120px desktop), tracking serré (-0.02em à -0.04em)
- Les **H2/H3** en `Barlow Condensed Bold` UPPERCASE pour les sections, tracking légèrement ouvert (0.5px)
- Les **eyebrows** : numérotés `01 —`, `02 —`, en label uppercase tracking ouvert
- **Texte courant** Barlow 17-18px desktop, line-height 1.65, max-width 65ch
- **Citations** : Mont italic regular si dispo, sinon Barlow italic — taille H3

### Grille & espacement

```css
/* Spacing scale (4/8pt) */
--space-1:  0.25rem;  /*  4px */
--space-2:  0.5rem;   /*  8px */
--space-3:  0.75rem;  /* 12px */
--space-4:  1rem;     /* 16px */
--space-6:  1.5rem;   /* 24px */
--space-8:  2rem;     /* 32px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
--space-40: 10rem;    /* 160px */

/* Container */
--container-max: 1440px;
--gutter:        clamp(1rem, 3vw, 2rem);

/* Grid 12 cols */
display: grid;
grid-template-columns: repeat(12, 1fr);
column-gap: var(--gutter);
```

Les sections respirent : padding vertical minimum `var(--space-24)` sur desktop. Les blocs de narration sont volontairement étroits (col 4-9), les visuels débordent (col 1-13, full bleed).

### Coins arrondis

- `--radius-sm: 4px` — boutons, badges, inputs
- `--radius-md: 8px` — cards, vignettes (cf. demande client : « coins légèrement arrondis sur photos »)
- `--radius-lg: 16px` — modules feature
- Hero, sections full-bleed : **pas d'arrondis**, on assume le brutalisme

## Composants signature

### 1. Section-marker
Marqueur de section visible top-left de chaque grand bloc :
```
01 — GROS ŒUVRE
———————————————————
```
Numéro en Barlow Condensed Bold 14px, tiret long, label uppercase. Devient un repère de lecture comme dans un livre d'architecture.

### 2. Hero plein écran
- Vidéo timelapse en bg + gradient dark-to-red bottom-right
- H1 display (max 120px) sur 2 lignes, mot-clé en jaune signal
- Stats column verticale à droite (52 / 994 / +150)
- CTAs alignés bas-gauche
- Indicateur scroll vertical animé

### 3. Horizontal-scroll Expertises
3 panneaux pleine hauteur qui défilent latéralement au scroll vertical. Chaque panneau = 1 métier (Gros œuvre, Logements, EG) avec photo full-bleed, statement-line, savoir-faire détaillés.

### 4. Projects-grid Magazine
Grille asymétrique (style Pinterest mais ordonnée). Filtres : Gros œuvre / EG / Réhabilitation. Hover = zoom subtil + révélation du nom MOA. Click = page projet détaillée.

### 5. Citations-pull
Citations de compagnons (Raphaël, Frédéric) en typo display H3, attribution en barlow condensed uppercase. Pleine largeur, fond ivoire ou anthracite alterné.

### 6. Stats-counters
Compteurs animés au viewport. Mont Heavy 96px+ en rouge ou jaune sur fond anthracite.

### 7. Footer dense
Type "carte de visite professionnelle" — adresse géolocalisée, plan stylisé Alsace, liens, légales, RGPD, plan du site complet.

## Interactions

- **Page transitions** : Astro View Transitions natives (transitions de hero entre pages projet)
- **Scroll reveals** : Motion One — fade-in + translate-up de 16-24px, stagger 60-80ms, ease-out
- **Hover photos** : zoom 1.04 + filter saturate(1.1), 400ms ease-out
- **Compteurs** : animation 1.2s ease-out une fois visible, déclenchée par IntersectionObserver
- **Curseur magnétique** sur cards projets (optionnel, opt-out reduced-motion)
- **Parallaxe** : photos hero 1.1× scale ratio scroll Y — léger, pas de motion sickness

Tout respecte `prefers-reduced-motion: reduce` → fallback en cross-fade simple ou statique.

## Stack technique

- **Astro 5.x** — statique + View Transitions
- **Tailwind 4.x** — design tokens directement en CSS
- **Motion One 12+** — animations 5kb, idiomatique
- **Sharp** — optim images (AVIF + WebP)
- **Headless WordPress** — connecté en phase 2 (CPT : Projets, Actualités, Offres)
- **Vercel/Netlify** — hébergement front
- **OVH/Infomaniak** — hébergement WordPress (à valider)

## Performance budget

| Métrique | Cible |
|---|---|
| Lighthouse Performance | ≥ 95 |
| Lighthouse Accessibility | ≥ 95 (AA WCAG) |
| LCP | < 2.0s |
| CLS | < 0.05 |
| INP | < 200ms |
| TBT | < 200ms |
| Page weight (HP) | < 800 KB (hors vidéo hero) |

## Accessibilité

- WCAG AA minimum, AAA visé sur le texte courant
- Contraste rouge `#E30613` sur blanc : 5.32:1 ✓ pour texte large, OK pour CTA
- Contraste rouge sur anthracite : 7.6:1 ✓
- Focus rings visibles (2px outline jaune `#FFDD00` ou ring rouge selon contexte)
- Skip-link "Aller au contenu"
- Sémantique HTML5 stricte (landmarks, headings hiérarchisés)
- `prefers-reduced-motion` respecté partout
- Vidéo hero : `muted autoplay` + bouton pause visible + fallback poster image
