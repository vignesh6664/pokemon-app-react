import React from "react";

const PokemonInfo = ({ pokeDex }) => {
//   console.log(pokeDex);
  return (
    <>
      {!pokeDex ? (
        ""
      ) : (
        <>
          <h1 style={{ textTransform: "capitalize" }}>{pokeDex.name}</h1>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeDex.id}.svg`}
            alt=""
          />
          <div className="abilities">
            {pokeDex.abilities.map((poke) => {
              return (
                <>
                  <div className="group">
                    <h2>{poke.ability.name}</h2>
                  </div>
                </>
              );
            })}
          </div>
          <div className="base-stat">
            {pokeDex.stats.map((poke) => {
              return (
                <>
                  <h3 style={{ textTransform: "capitalize" }}>
                    {poke.stat.name}:{poke.base_stat}
                  </h3>
                </>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default PokemonInfo;
