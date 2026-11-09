// Joueurs fictifs (noms et équipes inventés pour ce checkpoint)
const players = [
  {
    id: 1,
    name: 'Amine El Idrissi',
    team: 'Atlas FC',
    nationality: 'Maroc',
    jerseyNumber: 10,
    age: 24,
    imageUrl: '/players/amine-elidrissi.svg',
  },
  {
    id: 2,
    name: 'Lucas Moreau',
    team: 'Olympique Rivière',
    nationality: 'France',
    jerseyNumber: 7,
    age: 27,
    imageUrl: '/players/lucas-moreau.svg',
  },
  {
    id: 3,
    name: 'Diego Santos',
    team: 'Real Costa',
    nationality: 'Brésil',
    jerseyNumber: 9,
    age: 22,
    imageUrl: '/players/diego-santos.svg',
  },
  {
    id: 4,
    name: 'Kenji Watanabe',
    team: 'Tokyo Samurai',
    nationality: 'Japon',
    jerseyNumber: 11,
    age: 25,
    imageUrl: '/players/kenji-watanabe.svg',
  },
  {
    // Joueur incomplet : les props par défaut prennent le relais
    id: 5,
    name: 'Nouveau joueur',
  },
];

export default players;
