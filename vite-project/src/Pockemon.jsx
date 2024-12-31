import { useEffect, useState } from "react";
import "./index.css";
import {PokemonCards} from "./PokemonCards";

export const Pokemon=()=>{

    const[pokemon,setPokemon]=useState([]);
   const[loading,setLoading]=useState(true);
    const[error,setError]=useState(null);
    const[serch,setSerch]=useState("");

const Api="https://pokeapi.co/api/v2/pokemon?limit=224";

const fetchPokemon= async()=>{
   try{
  const res=  await fetch(Api)
  const data= await res.json()
  //console.log(data);

  const detailPockemonData=data.results.map(async(curPokemon)=>{
    const res=await fetch(curPokemon.url)
    const data=await res.json()
   // console.log(data);
   return data;

  })
//console.log(detailPockemonData);
//promise.all :when all request fullfill then and only then created ,until its fullfill
const detailResponces=await Promise.all(detailPockemonData);
console.log(detailResponces);
setPokemon(detailResponces);
setLoading(false);
   }
   catch(error)
   {
console.log(error);
setLoading(false);
setError(error);
   }
}

useEffect(()=>{
  fetchPokemon()
},[])


const SerchData=pokemon.filter((curPokemon)=>
    curPokemon.name.toLowerCase().includes(serch.toLowerCase())
);

if(loading)
    {
        return <h1>Loading...</h1>
    };

 if(error){
    return<h1>{error.message}</h1>
 };   

return(<>
<section className="container">
<header>
<h1>Let's Catch our Pokemon</h1>
</header>
<div className="pokemon-search ">
    <form>
        <input type="text"
            placeholder="Enter Pokemon Name"
            value={serch}
            onChange={(e)=>setSerch(e.target.value)}></input>
    </form>
</div>
<div>
    <ul className="cards">
        {
           // pokemon.map((curPokemon)=>{
            SerchData.map((curPokemon)=>{
                return <PokemonCards key={curPokemon.id} 
                pockemonData={curPokemon}/>
            })
        }
    </ul>
</div>
</section>
</>)

};

export default Pokemon;