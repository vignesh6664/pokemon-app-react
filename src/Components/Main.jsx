import React, { useEffect, useState } from "react";
import Card from "./Card";
import PokemonInfo from "./PokemonInfo";
import axios from "axios";
const Main = () => {
  const [pokeDate, setPokeDate] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, seturl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();

  const pokFun = async () => {
    setLoading(true);
    const res = await axios.get(url);
    // console.log(res.data.results);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
  };
  const getPokemon = async (res) => {
    res.map(async (item) => {
      //   console.log(item.url);
      const result = await axios.get(item.url);
      //   console.log(result.data);
      setPokeDate((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };
  useEffect(() => {
    pokFun();
  }, [url]);
  return (
    <>
      <div className="container">
        <div className="left-content">
          <Card
            pokedata={pokeDate}
            loading={loading}
            pokeinfo={(poke) => setPokeDex(poke)}
          />

          <div className="btn">
            {prevUrl && (
              <button
                onClick={() => {
                  setPokeDate([]);
                  seturl(prevUrl);
                }}
              >
                Prev
              </button>
            )}
            {nextUrl && (
              <button
                onClick={() => {
                  setPokeDate([]);
                  seturl(nextUrl);
                }}
              >
                Next
              </button>
            )}
          </div>
        </div>
        <div className="right-content">
          <PokemonInfo pokeDex={pokeDex} />
        </div>
      </div>
    </>
  );
};

export default Main;
