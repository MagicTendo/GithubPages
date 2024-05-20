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

const pages = document.getElementsByClassName("pages")[0];

const images = document.getElementsByClassName("images")[0];
const musics = document.getElementsByClassName("musics")[0];

const temporaryText = document.getElementsByClassName("temporaryText")[0];
const infosToCompleteOne = document.getElementsByClassName("infosToCompleteOne")[0];
const infosToCompleteTwo = document.getElementsByClassName("infosToCompleteTwo")[0];

images.style.display = "none";

fetch("../api/yunranohi.json").then(response => response.json()).then(
    data => {
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

function imageExists(image_url) {
    var http = new XMLHttpRequest();

    http.open('HEAD', image_url, false);
    http.send();

    return http.status != 404;
}

function bakaWikiLoad(button) {
    button.style.display = "none";
    pages.style.display = "block";

    fetch("../api/baka-wiki.json").then(response => response.json()).then(
        data => {
            infosToCompleteOne.innerHTML =
                ` > Information: Contains all ${data.numberOfPages} pages of the Baka Wiki`;

            const totalPages = data.numberOfPages;

            for (i = 0; i < totalPages; i++) {
                if (imageExists(data.pages[`${i}`].img) === true) {
                    const link = document.createElement("a");
                    const pageImg = document.createElement("img");

                    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
                    const r = randomBetween(0, 255);
                    const g = randomBetween(0, 255);
                    const b = randomBetween(0, 255);

                    link.href = "https://baka-wiki.rf.gd" + data.pages[`${i}`].path;
                    link.target = "_blank";
                    link.dataset.source = data.pages[`${i}`].name;

                    pageImg.src = data.pages[`${i}`].img;
                    pageImg.alt = data.pages[`${i}`].name;
                    pageImg.style.border = `rgb(${r},${g},${b}) solid 5px`;
                    pageImg.className = "pageImg";

                    link.appendChild(pageImg);
                    pages.appendChild(link);
                }
            }
        });
}

function ytpmvLoad(button) {
    button.style.display = "none";
    temporaryText.style.display = "none";
    images.style.display = "block";

    fetch("../api/ytpmv.json").then(response => response.json()).then(
        data => {
            const totalSources = data.total_sources;
            const totalMusics = data.total_musics;

            infosToCompleteTwo.innerHTML =
                ` > Information: This API has ${totalSources} sources and ${totalMusics} musics`;

            var ids = [];

            function checkIDs(id, type) {
                if (ids.length === 20) {
                    ids = [];
                }

                if (ids.includes(id)) {
                    const newID = Math.floor(Math.random() * type);

                    checkIDs(newID, type);
                } else {
                    ids.push(id);

                    if (type === totalSources) {
                        const link = document.createElement("a");
                        const sourceImg = document.createElement("img");
                        const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
                        const r = randomBetween(0, 255);
                        const g = randomBetween(0, 255);
                        const b = randomBetween(0, 255);

                        link.href = data.ytpmv_sources[`${id}_source`].source_link;
                        link.target = "_blank";
                        link.dataset.source = data.ytpmv_sources[`${id}_source`].source;

                        sourceImg.src = data.ytpmv_sources[`${id}_source`].source_image;
                        sourceImg.alt = data.ytpmv_sources[`${id}_source`].source;
                        sourceImg.style.border = `rgb(${r},${g},${b}) solid 5px`;
                        sourceImg.className = "sourceImg";

                        link.appendChild(sourceImg);
                        images.appendChild(link);
                    } else if (type === totalMusics) {
                        const iframe = document.createElement("iframe");

                        iframe.width = "560";
                        iframe.height = "315";
                        iframe.src = String(data.ytpmv_musics[`${id}_music`].music_link).replace(".com/",
                            ".com/embed/").replace("watch?v=", "");
                        iframe.title = "YouTube video player";
                        iframe.frameBorder = "0";
                        //iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
                        iframe.allowFullscreen;

                        musics.appendChild(iframe);
                    }
                }
            }

            for (i = 0; i < 20; i++) {
                const randomSource = Math.floor(Math.random() * totalSources);

                checkIDs(randomSource, totalSources);
            }

            for (i = 0; i < 20; i++) {
                const randomMusic = Math.floor(Math.random() * totalMusics);

                checkIDs(randomMusic, totalMusics);
            }
        });
}