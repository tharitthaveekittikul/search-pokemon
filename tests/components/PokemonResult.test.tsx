import React from "react";
import { render, screen } from "@testing-library/react";
import PokemonResult from "@/components/PokemonResult";
import { Pokemon } from "@/types/pokemon";
import "@testing-library/jest-dom";

const createMockPokemon = (name: string, types: string[]): Pokemon => ({
  id: "1",
  number: "001",
  name,
  weight: { minimum: "1kg", maximum: "2kg" },
  height: { minimum: "1m", maximum: "2m" },
  classification: "Pokemon",
  types,
  resistant: [],
  weaknesses: [],
  fleeRate: 0.1,
  maxCP: 1000,
  maxHP: 1000,
  image: `https://img.pokemondb.net/artwork/${name.toLowerCase()}.jpg`,
  attacks: {
    fast: [{ name: "Fast Attack", type: "Normal", damage: 10 }],
    special: [{ name: "Special Attack", type: "Normal", damage: 20 }],
  },
  evolutions: [],
  evolutionRequirements: { amount: 25, name: "Candy" },
});

const mockBulbasaur = createMockPokemon("Bulbasaur", ["Grass", "Poison"]);
const mockCharmander = createMockPokemon("Charmander", ["Fire"]);
const mockSquirtle = createMockPokemon("Squirtle", ["Water"]);

describe("PokemonResult", () => {
  it("render pokemon information correctly", () => {
    render(<PokemonResult pokemon={mockBulbasaur} />);
    expect(screen.getByText("Bulbasaur")).toBeInTheDocument();
    expect(
      screen.getByText((_content, element) => {
        return element?.textContent === "Type: Grass, Poison";
      })
    ).toBeInTheDocument();
    expect(
      screen.getByText((_content, element) => {
        return element?.textContent === "Classification: Pokemon";
      })
    ).toBeInTheDocument();
  });
});

describe("Pokemon Type Tests", () => {
  it('Bulbasaur should be of type "Grass" and "Poison"', () => {
    render(<PokemonResult pokemon={mockBulbasaur} />);
    expect(
      screen.getByText((_content, element) => {
        return element?.textContent === "Type: Grass, Poison";
      })
    ).toBeInTheDocument();
  });
  it('Charmander should be of type "Fire"', () => {
    render(<PokemonResult pokemon={mockCharmander} />);
    expect(
      screen.getByText((_content, element) => {
        return element?.textContent === "Type: Fire";
      })
    ).toBeInTheDocument();
  });
  it('Squirtle should be of type "Water"', () => {
    render(<PokemonResult pokemon={mockSquirtle} />);
    expect(
      screen.getByText((_content, element) => {
        return element?.textContent === "Type: Water";
      })
    ).toBeInTheDocument();
  });
});
