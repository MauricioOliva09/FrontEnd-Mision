/*Archivo para el manejo de la PokeAPI

FETCH: Es una función que sirve para realizar las consultas necesarias hacia la API
    Server, dame la información que tiene esta URL
    Lo que devuelve fetch es una 'promesa'

    Una promesa es una llamado a un fragmento de código fuera de la programación síncrona, es decir, 
    se habla de programación asíncrona, la cual permite la ejecución del código principal sin 
    interrupciones, mientras que al mismo tiempo, en otro proceso se está ejecutando el fragmento 
    de código que contiene la 'promesa' como lo puede ser una consulta a un servidor o una API.


    "fetch(url).then((res)" -> Ve y consulta esta URL, ENTONCES lo que me responda el servidor
    lo alamcenas en la variable 'res' y lo retorna como un .json
*/
const fetchPokemon = () => {
    const getNombre = document.getElementById("Nombre");
    let pokeInput = getNombre.value.toLowerCase(); 

    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`; //Se require el apostrofo invertido
    fetch(url).then((res) => {
        // console.log(res); /*Muestra el estado de la respuesta, no es la data como tal*/
        if (res.status != "200") {
            console.log(res);
            getPokeImg('./NotFound.png');
        }
        return res.json();
    }).then((data) => { /*Por lo que se debe de generar otra promesa que ya contenga la 'data'*/
        console.log(data);
        let pokeImg = data.sprites.front_default; //Obtener Foto
        let pokeNombre = data.name; //Obtener nombre
        let pokeTipo = data.types[0].type.name; //Obtener Tipo
        let pokeExp = data.base_experience;
        let pokeAltura = data.height; 
        let pokePeso = data.weight; 
        let pokeHabilidad = data.abilities[0].ability.name; 
        let pokeHabilidad2 = data.abilities[1].ability.name; 

        getPokeImg(pokeImg);
        getPokeNombre(pokeNombre); 
        getPokeTipo(pokeTipo); 
        getPokeExp(pokeExp); 
        getPokeAltura(pokeAltura); 
        getPokePeso(pokePeso); 
        getPokeHabilidad(pokeHabilidad, pokeHabilidad2); 
        
        // console.log(pokeImg);
        // console.log(pokeNombre);
    })
}

//fetchPokemon();
// -----------------------------------------------------------

/*
    FUNCIÓN PARA OBTENER VALORES QUE SE CAPTURAN DESDE EL HTML

    document.getElementById() = Toma el documento HTML y va a buscar un elemento dentro del HTML
    que contenga un ID que concuerde con el argumento de la funcion ".getElementById()"
*/
const imprimir = () =>{
    const getNombre = document.getElementById("Nombre");
    let pokeInput = getNombre.value; 
    console.log('Holi ' + pokeInput); 
}


// --------------------------------------------------------------
/*
    FUNCIÓN PARA CAMBIAR LA IMAGEN EN LA POKEDEX
    
    La función getPokeImg tiene que recibir una URL
*/
const getPokeImg = (url) =>{
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url; 
}

// getPokeImg('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png');  


// --------------------------------------------------------------
/*FUNCIÓN PARA OBTENER EL NOMBRE DEL POKEMON QUE SE BUSCA */
const getPokeNombre = (url)=>{
    const pokeNombre = document.getElementById("pokeNombre").innerHTML = `Hola ${url}!` ;
    const pokeName = document.getElementById("pokeName").innerHTML = `Nombre: ${url}`;
    pokeNombre.src = url; 
}


const getPokeTipo = (url) =>{
    const pokeTipo = document.getElementById("pokeTipo").innerHTML = `Tipo: ${url}`;
    pokeTipo.src = url;
}

const getPokeExp = (url) =>{
    const pokeExp = document.getElementById("pokeExp").innerHTML = `Exp: ${url}`;
    pokeExp.src = url;
}

const getPokeAltura = (url) =>{
    const pokeAltura = document.getElementById("pokeAltura").innerHTML = `Altura: ${url}`;
    pokeAltura.src = url;
}

const getPoke = (url) =>{
    const poke = document.getElementById("").innerHTML = `${url}`;
    poke.src = url;
}

const getPokePeso = (url) =>{
    const pokePeso = document.getElementById("pokePeso").innerHTML = `Peso: ${url}`;
    pokePeso.src = url;
}

const getPokeHabilidad = (url, url2) =>{
    const pokeHabilidad = document.getElementById("pokeHabilidad").innerHTML = `Habilidades: ${url}, ${url2}`;
    pokeHabilidad.src = url;
}
