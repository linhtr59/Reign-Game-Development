
//Just some code to manually set up a cookie for debugging.
//player_games = [5, 10, 15, 13, 20, 30, 13, 5];
//json_str = JSON.stringify(player_games);
//document.cookie = "games=" + json_str + ";" + "path=/;";



//Takes a cookie name and returns its value(s). Returns an empty string if not found.
function getCookie(name) {
    var start = name + "=";
    var decoded = decodeURIComponent(document.cookie);
    var cookies_array = decoded.split(';');
    for (let i = 0; i < cookies_array.length; i++) {
        var cookie = cookies_array[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(start) == 0) {
            return cookie.substring(start.length, cookie.length);
        }
    }
    return "";
}

//Specifically handles the array of games which has been stored as a cookie. Returns an empty array if the user hasn't played.
function getCookieGame() {
    var games = getCookie("games");
    if (games == '') {
        var list_of_games = [];
    }
    else {
        var list_of_games = JSON.parse(games);
    }
    return (list_of_games);
}

//Updates array of games in cookie with an additional game. The function takes the game time as the parameter.
//This function should run when the player's game ends.
function updateCookieGame(game_time) {
    var list_of_games = getCookieGame("games");
    list_of_games.push(game_time);

    var json_str = JSON.stringify(list_of_games);
    document.cookie = "games=" + json_str + ";" + "path=/;";
}

//Update cookies for accessing the backend
//document.addEventListener("load", CookieCheck);
window.onload=CookieCheck;
window.getCookie=getCookie;

function CookieCheck()
{
    console.log("hello");
    let user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
        addTime("username",100);
       // addTime("hash",100); //add  when callback added
    } else {
        user = prompt("Please enter your name:","");
        if (user != "" && user != null) {
            setCookie("username", user, 30);
            //Put here a call to backend to putin hashtable CALLs CCcallback
        }
    }
}

function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}
  

function addTime(cname, exdays)
{
    setCookie(cname, getCookie(cname),exdays);
}

function CCcallBack(data){
    setCookie("hash",data["hash"],30);
}
function rename(newusername){
    var oldname= getCookie("username");
    //set call to change name in hashmap
    setCookie("username",newusername,100);
}