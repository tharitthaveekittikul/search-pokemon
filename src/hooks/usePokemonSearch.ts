import { GET_POKEMON } from "@/lib/queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const usePokemonSearch = () => {
  const router = useRouter();
  const { name } = router.query;
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    if (typeof name === "string") {
      setSearchTerm(name);
    }
  }, [name]);

  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: { name: searchTerm },
    skip: !searchTerm,
  });

  return { loading, error, data, searchTerm };
};
