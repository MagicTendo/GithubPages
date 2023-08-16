const fetch = require('node-fetch');
//if node-fecth is undefined or it cannot find the module node-fetch, write npm i fetch in the debug console
//if it's still doesn't work, replace the first line with this:
//const fetch = (url) => import('node-fetch').then(({default: fetch}) => fetch(url));

fetch("https://magictendo.github.io/GithubPages/api/Baka-Wiki-API.json").then(function (response) {
    return response.json();
}).then(function (data) {
    const randomPage = Math.floor(Math.random() * Number(data.numberOfPages));
    const cleanPage = randomPage + "_page";

    console.log(data.pages[cleanPage].name + "\n- " + data.pages[cleanPage].type + "\n- " + data.pages[cleanPage].description + "\n- http://baka-wiki.rf.gd" + data.pages[cleanPage].path);
});