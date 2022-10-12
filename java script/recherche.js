// nom des pages
const jeux = [

    {name:'Minecraft Dungeons'},
    {name:'Forza Horizon 5'},
    {name:'Bad Guys At School'},
    {name:'farming simulator 22'}
];

// filtre les recherches
const search = document.getElementById('search');

search.addEventListener('keyup', function(){
    
    const input = search.value; 

    const result = jeux.filter(item => item.name.toLowerCase().includes(input.toLowerCase()));

    let suggestion = '';

    if(input !=''){
        result.forEach(resultItem =>
            suggestion +=`
                <div class="suggestion">${resultItem.name}</div>
            `
        )
    }

    document.getElementById('suggestions').innerHTML = suggestion;

});

// click sur les suggestions et ouvre une page 
suggestions.addEventListener('click', event => {
    window.open("jeux.html");
});

// ouvre la page en fonction du mot 



//ouvre la page
function ouvrirPage() {
    var a = document.getElementById("search").value;
    //minecraft
    if (a === "minecraft dungeons") {
        window.open("../mon site 2/html/Minecraft Dungeons.html");
    }

    if (a === "minecraft dungeons ") {
        window.open("../mon site 2/html/Minecraft Dungeons.html");
    }

    if (a === "Minecraft Dungeons") {
        window.open("../mon site 2/html/Minecraft Dungeons.html");
    }

    if (a === "Minecraft Dungeons ") {
        window.open("../mon site 2/html/Minecraft Dungeons.html");
    }
    //forza 
    if (a === "forza horizon 5 ") {
        window.open("../mon site 2/html/forza horizon 5.html");
    }

    if (a === "forza horizon ") {
        window.open("../mon site 2/html/forza horizon 5.html");
    }

    if (a === "forza ") {
        window.open("../mon site 2/html/forza horizon 5.html");
    }

    if (a === "forza horizon 5") {
        window.open("../mon site 2/html/forza horizon 5.html");
    }

    if (a === "forza horizon") {
        window.open("../mon site 2/html/forza horizon 5.html");
    }

    if (a === "forza") {
        window.open("../mon site 2/html/forza horizon 5.html");
    }
    // bad guys at school
    if (a === "bad guys at school ") {
        window.open("../mon site 2/html/bad guys at school.html");
    }

    if (a === "bad guys ") {
        window.open("../mon site 2/html/bad guys at school.html");
    }

    if (a === "bad ") {
        window.open("../mon site 2/html/bad guys at school.html");
    }

    if (a === "bad guys at school") {
        window.open("../mon site 2/html/bad guys at school.html");
    }

    if (a === "bad guys") {
        window.open("../mon site 2/html/bad guys at school.html");
    }

    if (a === "bad") {
        window.open("../mon site 2/html/bad guys at school.html");
    }
    //farming simulator 22
    if (a === "farming simulator 22 ") {
        window.open("../mon site 2/html/farming simulator 22 online.html");
    }

    if (a === "farming ") {
        window.open("../mon site 2/html/farming simulator 22 online.html");
    }

    if (a === "farming simulator 22") {
        window.open("../mon site 2/html/farming simulator 22 online.html");
    }

    if (a === "farming") {
        window.open("../mon site 2/html/farming simulator 22 online.html");
    }
}
    