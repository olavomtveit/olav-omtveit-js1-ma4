const gameUrl = "https://api.rawg.io/api/games/4200";

fetch(gameUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json){
        createGameDetails(json);
    })
    .catch(function(error){
        console.dir(error);
    })

    function createGameDetails(json){
        const getGameName = document.querySelector("h1");
        const getGameImg = document.querySelector(".image");
        const gameImg = json.background_image;
        const gameDescription = document.querySelector(".description");

        getGameName.innerHTML = json.name;
        getGameImg.style.backgroundImage = `url(${gameImg})`;
        gameDescription.innerHTML = json.description;
    }