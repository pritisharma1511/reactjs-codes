import { use, useEffect, useState } from "react";
import "./index.css";
import { PokemonCards } from "./PokemonCards";
export const Pokemon = () => {
 const[pokemonData,setPokemonData]=useState([]);
 const [loading,setLoading]=useState(true);
 const [error,setError]=useState(null);


   const API = "https://pokeapi.co/api/v2/pokemon?limit=124";
   
    const fetchPokemon = async () => {
        try {
      const response = await fetch(API);
      const data = await response.json();
        // console.log(data);

        const detailedPokemonData = data.results.map(async (curpokemon) => {
          const res = await fetch(curpokemon.url);
          const data = await res.json();
          return data;
        });
        // console.log(detailedPokemonData);
       
        const detailedResponses= await Promise.all(detailedPokemonData);
        console.log(detailedResponses);
        setPokemonData(detailedResponses);
        setLoading(false);

      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(error);
      }
    };

   useEffect(() => {
    fetchPokemon();
    }, []);

    if(loading){
      return(
         <div>
            <h1>Loading...</h1>
         </div>
      );
    }
    if(error){
        return(
              <div>
                <h1>Error: {error.message}</h1>
              </div>
        );
    }   


  return (
  <>
  <section className="container">
    <header>
        <h1>Lets Catch Pokemon</h1>
    </header>
    <div>
        <ul className="cards">
            {pokemonData.map((curPokemon) => {
                return(
                    <PokemonCards key={curPokemon.id} pokemonData={curPokemon} />
                );
            })} 
       </ul>
    </div>
  </section>
  </>
    );  
};
