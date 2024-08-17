import { Pokemon } from "@/types/pokemon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  pokemon: Pokemon;
}

const PokemonResult: React.FC<Props> = ({ pokemon }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-8">
      <h2 className="text-2xl font-bold mb-4">{pokemon.name}</h2>
      <Image src={pokemon.image} alt={pokemon.name} width={200} height={200} />
      <p className="mt-4">
        <strong>Type: </strong>
        {pokemon.types.join(", ")}
      </p>
      <p>
        <strong>Classification: </strong>
        {pokemon.classification}
      </p>
      <p>
        <strong>Max CP: </strong>
        {pokemon.maxCP}
      </p>
      <p>
        <strong>Max HP: </strong>
        {pokemon.maxHP}
      </p>
      <h3 className="text-xl font-semibold mt-6">Attacks</h3>
      <h4 className="text-lg font-semibold mt-4">Fast Attack</h4>
      <ul>
        {pokemon.attacks.fast.map((attack) => (
          <li key={attack.name}>
            {attack.name} - {attack.type} - {attack.damage}
          </li>
        ))}
      </ul>
      <h4 className="text-lg font-semibold mt-4">Special Attack</h4>
      <ul className="list-disc list-inside">
        {pokemon.attacks.special.map((attack) => (
          <li key={attack.name}>
            {attack.name} - {attack.type} - {attack.damage}
          </li>
        ))}
      </ul>
      <h3 className="text-xl font-semibold mt-6">Evolutions</h3>
      <ul className="list-disc list-inside">
        {pokemon.evolutions?.map((evolution) => (
          <li key={evolution.id} className="flex items-center mt-2">
            <Link
              href={`/?name=${evolution.name}`}
              className="flex items-center"
            >
              <Image
                src={evolution.image}
                alt={evolution.name}
                width={50}
                height={50}
                className="mr-2"
              />
              {evolution.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonResult;
