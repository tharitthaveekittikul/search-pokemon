export interface Pokemon {
  id: string;
  number: string;
  name: string;
  weight: PokemonDimension;
  height: PokemonDimension;
  classification: string;
  types: string[];
  resistant: string[];
  weaknesses: string[];
  fleeRate: number;
  maxCP: number;
  maxHP: number;
  image: string;
  attacks: PokemonAttack;
  evolutions: Pokemon[];
  evolutionRequirements: PokemonEvolutionRequirement;
}

interface PokemonDimension {
  minimum: string;
  maximum: string;
}

interface PokemonAttack {
  fast: PokemonAttackDetail[];
  special: PokemonAttackDetail[];
}

interface PokemonAttackDetail {
  name: string;
  type: string;
  damage: number;
}

interface PokemonEvolutionRequirement {
  amount: number;
  name: string;
}
