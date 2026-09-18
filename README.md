# SASERI

Site corporate français entièrement statique, créé à partir du template officiel `starlight/tailwind` : Astro 7, Starlight, Tailwind CSS v4 et TypeScript strict. Aucun serveur, framework frontend, CMS ou service tiers côté visiteur. Node.js 22.12 minimum ; Node.js 24 recommandé, utilisé par le workflow.

## Développement

```sh
npm install
npm run dev
npm run build
npm run preview
```

Le build complet produit `dist/`. Pour contrôler le résultat, lancer `npm run preview` et ouvrir l’URL HTTP indiquée par Astro ; ne pas ouvrir directement les fichiers HTML de `dist/`. Starlight génère le sitemap (`sitemap-index.xml` et `sitemap-0.xml`). La recherche, la sidebar, la pagination et le sélecteur de thème sont désactivés. Le thème est toujours clair, même sans JavaScript. L’année du footer est calculée au build.

## Contenus et identité

- Textes : `src/content/docs/index.mdx` et `src/content/docs/mentions-legales.mdx`.
- Couleurs, polices système et espacement : `src/styles/global.css` (accent `#D40000`).
- Configuration, SEO global et JSON-LD : `astro.config.mjs`. Starlight génère les balises canoniques et Open Graph à partir du frontmatter.
- Header et footer : `src/components/`. Le rendu et le hero restent ceux de Starlight.
- Logo original : `public/brand/saseri.png`, intégré directement sans transformation. Dimensions intrinsèques 553 × 132 ; affichage proportionnel 184 px sur desktop et 152 px sur mobile.
- Favicons fournis : `public/brand/favicon_io/`. Balises dans `astro.config.mjs` ; chemins des icônes Android relatifs au manifest dans ce même dossier.
- **Compléter tous les champs signalés dans les mentions légales**, notamment l’éditeur, l’hébergeur et la propriété intellectuelle, et vérifier le paragraphe sur les données personnelles.

## Ajouter une landing page produit

Créer `src/content/docs/produits/nom-du-produit.mdx` (ou `.md`) :

```md
---
title: Nom du produit
description: Description précise du produit.
template: splash
hero:
  title: Nom du produit
  tagline: Présentation courte.
---

## Présentation

Votre contenu.
```

La page sera disponible à `/produits/nom-du-produit/` et ajoutée au sitemap au prochain build. Aucun changement du routeur n’est nécessaire. Le titre ou le hero produit déjà le H1 : commencer le contenu à H2. Ajouter un lien depuis l’accueil seulement lorsque la page est prête. Les exemples ne sont pas publiés.

## Publication via l'interface web GitHub

1. Sur **github.com**, créer ou ouvrir le repository.
2. Utiliser **Add file > Upload files** pour ajouter les sources à la racine : `src/`, `public/`, les fichiers de configuration, `package.json`, **`package-lock.json`**, ce README et le workflow. Ne pas téléverser `node_modules/`, `dist/`, `.astro/`, ni les dossiers locaux `.git/`, `.agents/`, `.codex/`. Pour le dossier caché `.github`, utiliser si nécessaire **Add file > Create new file**, saisir `.github/workflows/deploy.yml` et y copier son contenu. Enregistrer les changements via le bouton **Commit changes**.
3. Vérifier que la branche principale s’appelle **main** dans les paramètres du repository.
4. Ouvrir **Settings > Pages**.
5. Sélectionner **GitHub Actions** comme source.
6. Vérifier l’exécution de **Déployer SASERI sur GitHub Pages** dans l’onglet **Actions**. Si nécessaire, lancer **Run workflow** sur `main`. Chaque modification enregistrée sur `main` reconstruira puis republiera le site complet.
7. Dans **Settings > Pages**, configurer ou vérifier **Custom domain : saseri.com** et attendre la validation DNS.
8. Activer **Enforce HTTPS** lorsqu’il devient disponible.

Le domaine est déjà déclaré dans `astro.config.mjs` et `public/CNAME`, sans `base`. Prérequis externe : les enregistrements DNS du domaine doivent pointer vers GitHub Pages ; le fichier CNAME ne modifie pas le DNS chez le registrar. Suivre les indications de validation affichées par GitHub.

Workflow conforme au [guide officiel Astro](https://docs.astro.build/en/guides/deploy/github/) : `actions/checkout@v7`, `withastro/action@v6`, `actions/deploy-pages@v5`. Les droits de publication sont limités au job de déploiement. Aucun déploiement n’a été effectué lors de la préparation locale.
