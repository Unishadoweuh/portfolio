# Refonte frontend : homelab → portfolio sobre professionnel

## Objectif
Passer d'un style « bidouilleur/homelab » à un portfolio sobre et professionnel :
supprimer les clichés terminal, atténuer le ton sur Windows, replier le homelab
en mention mineure dans Expériences/Compétences. Surface sombre conservée.

## État : ✅ Terminé et vérifié

### Réalisé
- **Système** : `globals.css` (grille de points retirée), `data/site.ts`
  (stats pro sobres + description), `app/sitemap.ts` (route `/homelab` retirée).
- **Composants** : `SectionHeader` (prop `tag` supprimé), `Badge` (`font-mono`
  retiré), `SkillBar` (`font-mono` du % retiré), `Navbar` (wordmark « Pierre Le
  Cunff », nav FR sans Homelab).
- **Pages** : home (hero statique, CTA → `/experience`, intro sobre avec
  mention Proxmox mineure), about (tags retirés, Windows atténué, bio homelab
  compressée à une phrase), experience, skills, contact (bloc terminal
  remplacé par une carte d'info + liens), 404 (sans jeu de mot shell).
- **Suppressions** : `app/homelab/` (page+layout), `components/homelab/`,
  `data/services.ts`, `components/effects/TypingEffect.tsx`.

### Vérification (2026-07-07)
- `npm run build` (turbopack) : ✅ compiled, types + lint OK, 11 pages
  statiques générées, `/homelab` absent, `/_not-found` présent.
- `grep font-mono` : seul reste le token CSS `--font-mono` (légitime, police
  chargée mais non appliquée).
- `grep` motifs shell (`whoami`, `@homelab`, `$ cat`, `kubectl`, `ln -s`,
  `curl|jq`) : aucun.
- `grep easter_egg` : aucun. Aucune référence résiduelle à `/homelab`.

### Notes
- ESLint n'est pas installé dans le projet ; le contrôle types/lint s'appuie
  sur le build Next (turbopack), qui lève `react/no-unescaped-entities` etc.
- Le build a d'abord échoué (`next: command not found`) car `node_modules`
  était absent → `npm install` puis build OK.