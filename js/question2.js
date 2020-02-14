gamesUrl = "https://api.rawg.io/api/games";

fetch (gamesUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        createGames(json);
    })
    .catch(function(error){
        console.dir(error);
    })

function createGames(json){
    const games = json.results;
    console.dir(games);

    const gamesContainer = document.querySelector(".results");
    let html = "";

    for (let i = 0; i < games.length; i++){
        html += `<div class="game">
                    <h2>${games[i].name}</h2>
                    <img src="${games[i].background_image}" alt="cover photo for ${games[i].name}">
                </div>`
    }
    gamesContainer.innerHTML = html;
}