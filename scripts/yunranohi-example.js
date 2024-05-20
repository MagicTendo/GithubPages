const nameOne = document.getElementsByClassName("nameOne")[0];
const nameTwo = document.getElementsByClassName("nameTwo")[0];
const nameThree = document.getElementsByClassName("nameThree")[0];
const nameFour = document.getElementsByClassName("nameFour")[0];
const nameFive = document.getElementsByClassName("nameFive")[0];

const pointsOne = document.getElementsByClassName("pointsOne")[0];
const pointsTwo = document.getElementsByClassName("pointsTwo")[0];
const pointsThree = document.getElementsByClassName("pointsThree")[0];
const pointsFour = document.getElementsByClassName("pointsFour")[0];
const pointsFive = document.getElementsByClassName("pointsFive")[0];


fetch("../api/yunranohi.json").then(function (response) {
    return response.json();
}).then(function (data) {
    nameOne.innerHTML = data.leaderboards.shutanopikuseru.first.username;
    nameTwo.innerHTML = data.leaderboards.shutanopikuseru.second.username;
    nameThree.innerHTML = data.leaderboards.shutanopikuseru.third.username;
    nameFour.innerHTML = data.leaderboards.shutanopikuseru.fourth.username;
    nameFive.innerHTML = data.leaderboards.shutanopikuseru.fifth.username;

    pointsOne.innerHTML = data.leaderboards.shutanopikuseru.first.points + " points";
    pointsTwo.innerHTML = data.leaderboards.shutanopikuseru.second.points + " points";
    pointsThree.innerHTML = data.leaderboards.shutanopikuseru.third.points + " points";
    pointsFour.innerHTML = data.leaderboards.shutanopikuseru.fourth.points + " points";
    pointsFive.innerHTML = data.leaderboards.shutanopikuseru.fifth.points + " points";
});