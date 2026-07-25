# BATIPRO BTP CONSULTING — site vitrine

Site vitrine bilingue (FR / EN) de **BATIPRO BTP CONSULTING**, entreprise marocaine de
construction, rénovation, aménagement, pilotage de chantier (OPC), maintenance et QSE.

Zones d'intervention : **Kénitra · Rabat · Tanger · Meknès · Casablanca**.

## Stack

- **Next.js 15** (App Router) en `output: "export"` → site 100 % statique dans `out/`
- **CSS pur** (aucun framework UI), palette échantillonnée sur le logo client
- FR à la racine, **EN sous `/en`** — hreflang `fr` / `en` / `x-default` sur chaque page
- JSON-LD : `GeneralContractor`, `Service`, `FAQPage`, `BreadcrumbList`

## Structure

```
src/
  app/            routes (FR à la racine, EN sous /en), sitemap.js, robots.js, icon.svg
  components/     Header, Footer, Coverage (zones d'intervention), ServiceDetail…
  lib/
    dictionary.js ⭐ tout le contenu FR/EN + COMPANY (NAP, villes) — source unique
    seo.js        buildMetadata() : titre, description, canonical, hreflang, OG
public/           images optimisées (webp + jpg), logos détourés, og.jpg, llms.txt
scripts/          génération des assets + contrôles qualité (voir plus bas)
```

**Tout le contenu éditorial vit dans `src/lib/dictionary.js`.** Les villes desservies sont
dans `COMPANY.cities` et se propagent automatiquement aux textes, aux métadonnées et à
l'`areaServed` du JSON-LD.

## Développement

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # export statique → out/  (à téléverser tel quel sur l'hébergement)
```

> ⚠️ Le projet vit sous OneDrive : supprimer `.next` avant un build
> (`rm -rf .next && npm run build`) et ne jamais lancer un build pendant qu'un
> `next dev` tourne — les deux corrompent le cache `.next`.

## Scripts

| Script | Rôle |
|---|---|
| `node scripts/make-logo-assets.mjs` | détoure `logo.jpeg` → `public/logo.png` + `logo-light.png` (version inversée pour fonds sombres) |
| `node scripts/make-og.mjs` | carte de partage 1200×630 → `public/og.jpg` |
| `node scripts/make-webp.mjs` | convertit les photos sources en WebP + fallback JPG |
| `node scripts/check-responsive.mjs` | balaie 8 pages × 24 largeurs en CDP et signale tout débordement horizontal |

`assets-src/` (originaux photo) n'est pas versionné : seules les images dérivées, servies
par le site, le sont.

## À finaliser avant mise en ligne

- [ ] **Adresse postale** et **e-mail** réels dans `COMPANY` (`src/lib/dictionary.js`) —
      le téléphone est déjà le bon
- [ ] Confirmer **quelle ville est le siège** → permet d'ajouter `geo`,
      `openingHoursSpecification` et `hasMap` au JSON-LD
- [ ] Fiche **Google Business Profile** en « zone de service » (1 fiche, 5 villes)
- [ ] Photos de chantiers réelles pour `/realisations` (le portfolio est honnêtement
      annoncé comme « en cours de constitution »)
