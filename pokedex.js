

const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

for (let i = 1; i <= 151; i++) {
    //const element = array[i];

    fetch(baseUrl + i)
    .then(res => res.json())
    .then(pokeDatos => {

    console.log(pokeDatos);
    //datosGlobales.push(pokeDatos)
    printCard(pokeDatos)
    
    });
    
}

// const buscadorInput = document.querySelector('input')
// const buscadorBoton = document.querySelector('button')
// buscadorBoton.addEventListener("click", () => buscarPokemon(buscadorInput.value, pokeDatos))


function printCard(pokeDatos) {
   // for (let i = 0; i < pokeDatos.length; i++) {
        
        //console.log(pokeDatos.name); 
        const il$$ = document.querySelector('#pokedex');
        const div$$ = document.createElement('div')
        div$$.className = "card"
        div$$.innerHTML = `<h3 class="card-title">${pokeDatos.name}</h3>
        <img class="card-image" src= "${pokeDatos.sprites.other['official-artwork'].front_default}" ></>
        <h3>#${pokeDatos.id}</h3>
        <li><p class="caracts">ATAQUE:   ${pokeDatos.stats[1].base_stat}</p></li>
        <li><p class="caracts">DEFENSA:   ${pokeDatos.stats[2].base_stat}</p></li>
        <li><p class="caracts">VELOCIDAD:   ${pokeDatos.stats[5].base_stat}</p></li>
        </ul>`
        il$$.appendChild(div$$)
       // document.body.appendChild(il$$)
    //}
 


}

// const buscarPokemon = (buscar, pokeDatos) =>{
//    // const filteredPokemons = pokeDatos.filter((pokeDatos)=>pokeDatos.name.toLowerCase().includes(buscar.toLowerCase()))
//     console.log(filteredPokemons)
    
// }

