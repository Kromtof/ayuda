let pokemons = [
  {
    id: 1,
    name: "Pikachu",
    type: "Electric",
  },
  {
    id: 2,
    name: "Magicarp",
    type: "Plant",
  },
];

const toPromise = (data) =>
  new Promise((res) => {
    setTimeout(() => res(data), 1500);
  });

export const httpClient = {
  post: (pokemon) => {
    pokemons.push(pokemon);
    console.log(pokemons);
    return toPromise("OK");
  },
  delete: (id) => {
    pokemons = pokemons.filter((x) => x.id !== id);
    console.log(pokemons);
    return toPromise("OK");
  },
  put: (pokemon, id) => {
    pokemons = pokemons.map((x) => (x.id === id ? pokemon : x));
    console.log(pokemons);
    return toPromise("OK");
  },
  get: (id) => {
    if (id) {
      return toPromise(pokemons.find((x) => x.id === id));
    }
    return toPromise(pokemons);
  },
};
