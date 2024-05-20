const fetch = require('node-fetch');
//if node-fecth is undefined or it cannot find the module node-fetch, write npm i fetch in the debug console
//if it's still doesn't work, replace the first line with this:
//const fetch = (url) => import('node-fetch').then(({default: fetch}) => fetch(url));

fetch("https://magictendo.github.io/GithubPages/api/YTPMV-API.json").then(function (response) {
    return response.json();
}).then(function (data) {
    const sourcesRandom = Math.floor(Math.random() * Number(data.total_sources));
    const musicsRandom = Math.floor(Math.random() * Number(data.total_musics));

    const cleanSource = String(sourcesRandom + "_source");
    const cleanMusic = String(musicsRandom + "_music");

    const YTPMVSource = data.ytpmv_sources[cleanSource].source;
    const YTPMVMusic = data.ytpmv_musics[cleanMusic].music;
    const YTPMVSourceLink = data.ytpmv_sources[cleanSource].source_link;
    const YTPMVMusicLink = data.ytpmv_musics[cleanMusic].music_link;

    const YTPMVSourceImage = data.ytpmv_sources[cleanSource].source_image;

    console.log("🌸 Source: " + YTPMVSource + " / " + YTPMVSourceLink + "\n" + YTPMVSourceImage + "\n🎹 Musique: " + YTPMVMusic + " / " + YTPMVMusicLink);
});