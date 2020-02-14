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
        let html = "";
    }