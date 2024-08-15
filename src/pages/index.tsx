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
    <div>
      <Head>
        <title>Pokemon Search</title>
        <meta name="description" content="Pokemon Search" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Pokemon Search</h1>
      </main>
    </div>
  );
};

export default Home;
