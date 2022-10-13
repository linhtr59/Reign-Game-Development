

// Takes an array of each game played by a player, where each value is the in-game time spent ruling.
// Returns an array of player statistics [max, min, avg, count, unique_endings, another_stat].
function getStats(array) {
    //If user has played no games, will return an array of all zero-values.
    if (array.length == 0) {
        return ([0, 0, 0, 0, 0, 0]);
    }

    var longest = Math.max.apply(null, array);
    var shortest = Math.min.apply(null, array);
    var games = array.length;

    var sum = 0;
    for (let i = 0; i < games; i++) {
        sum += array[i];
    }
    var average = (sum / games).toFixed(2);

    // Will need to be updated/reference new functions later
    var unique_endings = 0;
    var another_stat = 0;

    return [longest, shortest, average, games, unique_endings, another_stat];

}
//Takes an array of stats in the same form as the output of getStats and updates the stats page with these.
function updateStatsPage(array) {

    document.getElementById("longest rule").innerHTML = array[0];
    document.getElementById("shortest rule").innerHTML = array[1];
    document.getElementById("average time ruling").innerHTML = array[2];
    document.getElementById("games played").innerHTML = array[3];
    document.getElementById("num unique endings").innerHTML = array[4];
    document.getElementById("another stat").innerHTML = array[5];
}

//Retrieves history of player games from cookie, generates stats and then updates stats page using new stats.
function setStats() {

    var array_of_games = getCookieGame();
    var game_stats = getStats(array_of_games);
    updateStatsPage(game_stats);
}

//Automatically populates stats page with player stats on load.
window.onload = function () {
    setStats();
}