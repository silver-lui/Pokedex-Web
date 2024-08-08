var pokemonName;
var info;
var img;

var index = null;

const display = () =>{
    let href = `https://pokeapi.co/api/v2/pokemon/${index}/`;
    let loading;

    fetch(href)
        .then(response => response.json())
        .then(data => {
            loading = document.getElementById("loading");
            loading.style.zIndex = "1"

            pokemonName = data.forms[0].name;
            info = `type >>> ${data.types[0].type.name} <br/>
                species >>> ${data.species.name} <br/>`;
            info += data.abilities[1] ?
                `ability >>> ${data.abilities[0].ability.name}, ${data.abilities[1].ability.name}` : `ability >>> ${data.abilities[0].ability.name}`;
            
            img = data.sprites.front_default;

            document.getElementById("name").innerHTML = pokemonName;
            document.getElementById("info").innerHTML = `<p>${info}</p>`;
            document.getElementById("card").style.backgroundImage = `url("${img}")`;

        });
    
    setTimeout(() => {
        loading.style.zIndex = "-1";
    }, 1700);
}

if(index == null){
    index = Math.round(Math.random() * 80) % 20;
    index = (index == 0) ? 1 : index;
    display();
}

window.addEventListener("DOMContentLoaded", (event) => {
    if(document.getElementById("roll")){
        document.getElementById("roll").addEventListener("click", function() {
            index = Math.round(Math.random() * 80) % 20;
            index = (index == 0) ? 1 : index;
            
            display();
        });
    }
});

