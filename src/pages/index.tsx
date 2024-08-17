import NotFound from "@/components/NotFound";
import PokemonResult from "@/components/PokemonResult";
import SearchInput from "@/components/SearchInput";
import { usePokemonSearch } from "@/hooks/usePokemonSearch";
import { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";

const Home: NextPage = () => {
  const { loading, error, data, searchTerm } = usePokemonSearch();

  useEffect(() => {
    console.log(data?.pokemon);
  }, [loading, error, data, searchTerm]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Head>
        <title>Pokemon Search</title>
        <meta name="description" content="Pokemon Search" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto p-4 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center mb-8">Pokemon Search</h1>
        <SearchInput />
        {loading && (
          <p className="text-center text-gray-500 mt-4">Loading...</p>
        )}
        {error && (
          <p className="text-center text-red-500 mt-4">
            Error: {error.message}
          </p>
        )}
        {data?.pokemon ? (
          <PokemonResult pokemon={data.pokemon} />
        ) : (
          searchTerm && !loading && <NotFound />
        )}
      </main>
    </div>
  );
};

export default Home;
