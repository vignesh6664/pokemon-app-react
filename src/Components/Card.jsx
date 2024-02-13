import React from "react";

const Card = ({ pokedata, loading, pokeinfo }) => {
  console.log(pokedata);
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokedata.map((item) => {
          return (
            <>
              <div
                className="card"
                key={item.id}
                onClick={() => pokeinfo(item)}
              >
                <h2>{item.id}</h2>
                <img
                  className="pok-img"
                  src={item.sprites.front_default}
                  alt=""
                />
                <p style={{ textTransform: "capitalize" }}>{item.name}</p>
              </div>
            </>
          );
        })
      )}
    </>
  );
};

export default Card;
