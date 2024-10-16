const pokemon = Object.freeze([
  { id: 1, name: "Bulbasaur", types: ["poison", "grass"] },
  { id: 5, name: "Charmeleon", types: ["fire"] },
  { id: 9, name: "Blastoise", types: ["water"] },
  { id: 12, name: "Butterfree", types: ["bug", "flying"] },
  { id: 16, name: "Pidgey", types: ["normal", "flying"] },
  { id: 23, name: "Ekans", types: ["poison"] },
  { id: 24, name: "Arbok", types: ["poison"] },
  { id: 25, name: "Pikachu", types: ["electric"] },
  { id: 35, name: "Clefairy", types: ["normal"] },
  { id: 37, name: "Vulpix", types: ["fire"] },
  { id: 52, name: "Meowth", types: ["normal"] },
  { id: 63, name: "Abra", types: ["psychic"] },
  { id: 67, name: "Machamp", types: ["fighting"] },
  { id: 72, name: "Tentacool", types: ["water", "poison"] },
  { id: 74, name: "Geodude", types: ["rock", "ground"] },
  { id: 87, name: "Dewgong", types: ["water", "ice"] },
  { id: 98, name: "Krabby", types: ["water"] },
  { id: 115, name: "Kangaskhan", types: ["normal"] },
  { id: 122, name: "Mr. Mime", types: ["psychic"] },
  { id: 133, name: "Eevee", types: ["normal"] },
  { id: 144, name: "Articuno", types: ["ice", "flying"] },
  { id: 145, name: "Zapdos", types: ["electric", "flying"] },
  { id: 146, name: "Moltres", types: ["fire", "flying"] },
  { id: 148, name: "Dragonair", types: ["dragon"] },
]);

//an array of pokémon objects where the id is evenly divisible by 3

const pokemonDivisibleBy3 = (pokemon) => pokemon.id % 3 == 0;
let newPokeList = pokemon.filter(pokemonDivisibleBy3);
console.log(newPokeList);

//an array of pokémon objects that are "fire" type

const pokemonFireType = (pokemon) => pokemon.types.includes("fire");
let newPokeList2 = pokemon.filter(pokemonFireType);
console.log(newPokeList2);

//an array of pokémon objects that have more than one type

const pokemonMoreThanOneType = (pokemon) => pokemon.types.length > 1;
let newpokeList3 = pokemon.filter(pokemonMoreThanOneType);
console.log(newpokeList3);

//an array with just the names of the pokémon

const pokemonNameOnly = (pokemon) => pokemon.name;
let newPokeList4 = pokemon.map(pokemonNameOnly);
console.log(newPokeList4);

//an array with just the names of pokémon with an id greater than 99

const pokemonGreaterThan99 = (pokemon) => pokemon.id > 99;
let newPokeList5 = pokemon.filter(pokemonGreaterThan99);
console.log(newPokeList5);

//an array with just the names of the pokémon whose only type is poison

const pokemonPosionType = (pokemon) =>
  pokemon.types.length === 1 && pokemon.types.includes("poison");
let newPokeList6 = pokemon.filter(pokemonPosionType);
console.log(newPokeList6);

//an array containing just the first type of all the pokémon whose second type is "flying"

const pokemonWithFlyingSecondType = (pokemon) => pokemon.types[1] === "flying";
let newPokeList7 = pokemon.filter(pokemonWithFlyingSecondType);
console.log(newPokeList7);

//a count of the number of pokémon that are "normal" type

let counter = 0;
const pokemonNormalType = (pokemon) =>
  pokemon.types.includes("normal") ? (counter++, true) : false;
let newPokeList8 = pokemon.filter(pokemonNormalType);
console.log(counter);

//an array with all pokemon except the pokemon with the id of 148

const pokemonListExcept148 = (pokemon) => pokemon.id !== 148;
let newPokeList9 = pokemon.filter(pokemonListExcept148);
console.log(newPokeList9);

//an array with all pokemon and for pokemon id: 35 replacing "normal" with "fairy"

const updatedPokemonList = pokemon.map((p) =>
  p.id === 35
    ? {
        ...p,
        types: p.types.map((type) => (type === "normal" ? "fairy" : type)),
      }
    : p
);
console.log(updatedPokemonList);
