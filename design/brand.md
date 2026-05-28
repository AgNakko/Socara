# Brand book SOCARA

Source officielle : `assets/docs/charte-graphique-02-2026.html` (charte fournie par le client, Février 2026).

## Identité

- **Nom** : SOCARA
- **Fondation** : 1973, Strasbourg
- **Positionnement** : « L'art de construire depuis 1973 »
- **Promesse** : Bâtisseur humain, engagé, rigoureux
- **Territoire** : Alsace, essentiellement
- **Métiers** : Gros œuvre · Construction de logements · Entreprise générale (TCE)

## Logo

- **Logo carré rouge** (signature principale) : `assets/logos/socara/socara-logo-full-red.png`
  - Monogramme S blanc + wordmark "SOCARA" + souligné jaune
  - Usage : fonds clairs, applications principales
- **Monogramme isolé** : `assets/logos/socara/socara-monogram-grey.png`
  - Usage : favicon, watermark, applications secondaires

⚠️ **À demander au client** : versions vectorielles (SVG) du logo et de ses déclinaisons (blanc sur fond rouge, monochrome blanc pour fonds sombres, etc.). Les PNG extraits de la charte sont en haute déf mais ne scaleront pas idéalement à toutes les tailles.

## Voix / ton

- Concret, fier du métier, humain
- Pas de greenwashing, pas de jargon corporate
- Citations de compagnons et d'anciens valorisées
- « On est là pour bâtir. Mais aussi pour transmettre, sécuriser, comprendre, optimiser. »

## Palette couleurs (charte officielle)

### Couleurs principales
| Nom              | Hex        | Variable CSS         | Usage                                       |
|------------------|------------|----------------------|---------------------------------------------|
| Rouge SOCARA     | `#E30613`  | `--rouge`            | Signature, accents forts, CTA, fond hero    |
| Rouge foncé      | `#B00010`  | `--rouge-fonce`      | Hover state, profondeur                     |
| Rouge clair      | `#F5404E`  | `--rouge-clair`      | Accents secondaires, badges                 |
| Jaune signal     | `#FFDD00`  | `--jaune`            | Highlight, soulignement (cf. logo), badges  |
| Jaune doré       | `#D4A800`  | `--jaune-dore`       | Version institutionnelle, accents premium   |

### Neutres
| Nom              | Hex        | Variable CSS         | Usage                                       |
|------------------|------------|----------------------|---------------------------------------------|
| Anthracite       | `#1A1A1A`  | `--anthracite`       | Texte principal, fonds sombres              |
| Gris chaud       | `#3D3D3A`  | `--gris-chaud`       | Texte secondaire, fonds intermédiaires      |
| Gris medium      | `#B8B8B0`  | `--gris-medium`      | Bordures, séparateurs                       |
| Gris clair       | `#F4F4F2`  | `--gris-clair`       | Fonds de section, surfaces                  |
| Blanc            | `#FFFFFF`  | `--blanc`            | Fonds principaux                            |

### Tons ivoire / chauds (issus de la charte)
- `#F0EFEB` · `#F0F0EE` · `#F8F8F6` · `#EEEEEC` · `#E8E8E6` · `#E5E5E2`
- Utilisation : fonds de sections institutionnels, alternatives au gris clair pour version sobre

### Accent fonctionnel
- Vert succès : `#15803D` (RSE, environnement, validations)

## Typographie (Google Fonts — gratuit, déjà dans la charte)

- **Display / titres** : **Mont**, fallback `'Barlow Condensed', sans-serif`
  - Mont = font propriétaire (Fontfabric), à charger localement ou alternative Barlow Condensed
  - Poids : 700 (titres), 800 (display hero)
- **Texte courant** : **Barlow**, fallback `sans-serif`
  - Poids : 300 (light), 400 (regular), 500, 600 (semibold)
- **Sous-titres / labels** : **Barlow Condensed**
  - Poids : 300, 400, 600, 700, 800

### Import Google Fonts
```html
<link href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600&family=Barlow+Condensed:wght@300;400;600;700;800&display=swap" rel="stylesheet">
```

⚠️ **Note Mont** : police propriétaire. Si pas de licence chez le client → fallback Barlow Condensed (déjà très proche, condensée, géométrique). À confirmer avec le client si la licence Mont est acquise.

## Deux directions visuelles à proposer

### Version A — « Affirmée »
- Couleurs : **Rouge `#E30613` dominant** + Anthracite + Jaune signal + Blanc
- Esprit : Impactant, fort, fidèle à l'identité de marque historique
- Hero : Vidéo chantier + overlay rouge ou anthracite
- CTA : Rouge plein, hover rouge foncé
- Use cases visés : Communication directe, recrutement, signature forte

### Version B — « Institutionnelle »
- Couleurs : **Gris béton + Or `#D4A800` + Ivoire** + Rouge en touche discrète
- Esprit : Épuré, premium, posé
- Hero : Photo siège architectural + overlay blanc/transparence
- CTA : Or ou anthracite, hover rouge
- Use cases visés : Partenaires promoteurs/MOA, communication corporate

## Iconographie / photo

- Photos de chantier en activité (compagnons, banches, grues, équipes) → **à fournir**
- Photos du nouveau siège (✅ reçues, 6 photos HD) → disponibles dans `assets/photos/siege/`
- Coins légèrement arrondis (8-12px) sur les vignettes
- Pas de filtres lourds, traitement honnête

---

## État des assets

### ✅ Reçus
- Logo SOCARA carré rouge (PNG haute déf)
- Logo monogramme isolé (PNG)
- Charte graphique HTML (couleurs + typo)
- 6 photos du nouveau siège (façade jour/nuit, entrée, escalier, intérieurs)
- 14 logos clients/promoteurs (Nexity, Stradim, Bouygues Immo, Frank, Icade, etc.)

### ⏳ Encore à fournir
- [ ] Logo SOCARA en **SVG** (et variantes : monochrome blanc, monogramme seul)
- [ ] Photos de **chantiers en activité** (banche, ferraillage, grue, équipes)
- [ ] Photos des **projets emblématiques** (Les Deux Rives, Renaissance, Natureo, Île aux Jardins…)
- [ ] **Vidéo de chantier** pour le hero homepage
- [ ] Confirmation licence police **Mont** (sinon fallback Barlow Condensed)
- [ ] Mentions légales : SIRET, capital, RCS, directeur de publication
- [ ] Adresse postale + téléphone + horaires
- [ ] Comptes sociaux (LinkedIn, Instagram…)
