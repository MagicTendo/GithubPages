const fetch = require('node-fetch');
//if node-fecth is undefined or it cannot find the module node-fetch, write npm i fetch in the debug console
//if it's still doesn't work, replace the first line with this:
//const fetch = (url) => import('node-fetch').then(({default: fetch}) => fetch(url));

fetch("https://magictendo.github.io/GithubPages/api/YTPMV-API.json").then(function (response) {
    return response.json();
}).then(function (obj) {
    const sourcesRandom = Math.floor(Math.random() * Number(obj.total_sources));
    const musicsRandom = Math.floor(Math.random() * Number(obj.total_musics));

    const cleanSource = String(sourcesRandom + "_source");
    const cleanMusic = String(musicsRandom + "_music");

    const YTPMVSource = obj.ytpmv_sources[cleanSource].source;
    const YTPMVMusic = obj.ytpmv_musics[cleanMusic].music;
    const YTPMVSourceLink = obj.ytpmv_sources[cleanSource].source_link;
    const YTPMVMusicLink = obj.ytpmv_musics[cleanMusic].music_link;

    const YTPMVSourceImage = obj.ytpmv_sources[cleanSource].source_image;

    const comment = obj._comment_en;
    const credit = obj._credit_en;

    console.log("🌸 Source: " + YTPMVSource + " / " + YTPMVSourceLink + "\n" + YTPMVSourceImage + "\n🎹 Musique: " + YTPMVMusic + " / " + YTPMVMusicLink + "\n\n\n> " + comment + "\n> " + credit);
});