const fetch = require('node-fetch');
//if node-fecth is undefined or it cannot find the module node-fetch, write npm i fetch in the debug console
//if it's still doesn't work, replace the first line with this:
//const fetch = (url) => import('node-fetch').then(({default: fetch}) => fetch(url));

fetch("https://magictendo.github.io/GithubPages/api/yunranohi.json").then(function (response) {
    return response.json();
}).then(function (data) {
    nameOne = data.leaderboards.shutanopikuseru.first.username;
    nameTwo = data.leaderboards.shutanopikuseru.second.username;
    nameThree = data.leaderboards.shutanopikuseru.third.username;
    nameFour = data.leaderboards.shutanopikuseru.fourth.username;
    nameFive = data.leaderboards.shutanopikuseru.fifth.username;

    pointsOne = data.leaderboards.shutanopikuseru.first.points + " points";
    pointsTwo = data.leaderboards.shutanopikuseru.second.points + " points";
    pointsThree = data.leaderboards.shutanopikuseru.third.points + " points";
    pointsFour = data.leaderboards.shutanopikuseru.fourth.points + " points";
    pointsFive = data.leaderboards.shutanopikuseru.fifth.points + " points";

    console.log("Classement actuel de Shūtānopikuseru:\n\n" + nameOne + " - " + pointsOne + "\n" + nameTwo + " - " + pointsTwo +  "\n" + nameThree + " - " + pointsThree +  "\n" + nameFour + " - " + pointsFour +  "\n" + nameFive + " - " + pointsFive);
});
