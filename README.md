# React Props Checkpoint — GOMYCODE

Cartes de joueurs FIFA réalisées avec **React + Vite** et **Bootstrap**.

## Structure

```
src/
├── App.jsx                 # composant racine : affiche PlayersList
├── players.js              # tableau d'objets JSON des joueurs
└── components/
    ├── Player.jsx          # carte d'un joueur (props déstructurées + valeurs par défaut + style en ligne)
    └── PlayersList.jsx     # parcourt le tableau avec map() et transmet les props à Player
public/players/             # avatars SVG des joueurs
```

## Points clés

- Chaque joueur a : `name`, `team`, `nationality`, `jerseyNumber`, `age`, `imageUrl`.
- `Player` **déstructure** toutes ses props dans ses paramètres.
- **Props par défaut** : chaque prop a une valeur par défaut (objet `defaultPlayerProps`). Le 5ᵉ joueur, volontairement incomplet, montre ces valeurs.
- **Style en ligne** : objets JavaScript en camelCase passés à l'attribut `style`.
- `PlayersList` utilise `players.map(...)` et l'opérateur spread `{...player}` pour transmettre les props.

> Les joueurs et les équipes sont fictifs.

## Lancer le projet

```bash
npm install
npm run dev
```
