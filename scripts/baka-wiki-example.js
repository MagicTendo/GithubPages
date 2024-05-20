function imageExists(url) {
    var http = new XMLHttpRequest();

    http.open('HEAD', url, false);
    http.send();

    return http.status != 404;
}

function randomPage() {
    const image = document.getElementsByClassName("image")[0];
    const pageName = document.getElementsByClassName("pageName")[0];
    const description = document.getElementsByClassName("description")[0];
    const url = document.getElementsByClassName("url")[0];
    const path = document.getElementsByClassName("path")[0];

    fetch("../api/baka-wiki.json").then(function (response) {
        return response.json();
    }).then(function (data) {
        const randomPage = Math.floor(Math.random() * Number(data.numberOfPages));

        if (imageExists(data.pages[randomPage].img) === true) {
            image.src = data.pages[randomPage].img;
        } else {
            image.src = "../img/api/not-found.png";
        }

        pageName.innerText = data.pages[randomPage].name;
        description.innerText = data.pages[randomPage].description;
        url.href = "https://baka-wiki.rf.gd" + data.pages[randomPage].path;
        path.innerText = "https://baka-wiki.rf.gd" + data.pages[randomPage].path;
    });
};