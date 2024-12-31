
export const PokemonCards=({pockemonData})=>{//{}must pass in curly bracies
    return(<>
    <li  className="pokemon-card">
    <figure>

<img 
 
 src={pockemonData.sprites.other.dream_world.front_default}//.sprites.other.dream_world.front_default it not work properly
  alt={pockemonData.id}
className="pokemon-img"
/>
 </figure>
    <h1 className="pokemon-name">{pockemonData.name}</h1>
    <div className="pokemon info pokemon-highlight">
        <p>
            {
                pockemonData.types.map((curtype)=>curtype.type.name).join(", ")
            }
        </p>
    </div>

    <div className="grid-three-cols">
    <p className="pokemon-info">

<span>Height:</span>{pockemonData.height}
</p>

<p className="pokemon-info">
    <span>Weigth:</span>{pockemonData.weight}
</p>

<p className="pokemon-info">
    <span>Speed:</span>{pockemonData.stats[5].base_stat}
</p>

    </div>

    <div className="grid-three-cols">
    <p className="pokemon-info">

<p>{pockemonData.base_experience}</p>
<span>Experience</span>
</p>

<p className="pokemon-info">
    <p>{pockemonData.stats[1].base_stat}</p>
    <span>Attack</span>
</p>

<p className="pokemon-info">
    <p>
    {pockemonData.order}
    </p>
    <span>Order</span>
</p>
    </div>
    </li>
    </>)
}

export default PokemonCards;