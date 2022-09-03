var fetch = require('node-fetch'); //if node-fecth is undefined or it cannot find the module node-fetch, write npm i fetch in the debug console

fetch("http://yunranodatas.toile-libre.org/YTPMV-API.json").then(function (response) {
    return response.json()
}).then(function (obj) {
    var sourcesRandom = Math.floor(Math.random() * Number(obj.total_sources))
    var musicsRandom = Math.floor(Math.random() * Number(obj.total_musics))

    var cleanSource = String(sourcesRandom + "_source")
    var cleanMusic = String(musicsRandom + "_music")

    var YTPMVSource = obj.ytpmv_sources[cleanSource].source
    var YTPMVMusic = obj.ytpmv_musics[cleanMusic].music
    var YTPMVSourceLink = obj.ytpmv_sources[cleanSource].source_link
    var YTPMVMusicLink = obj.ytpmv_musics[cleanMusic].music_link

    var YTPMVSourceImage = obj.ytpmv_sources[cleanSource].source_image

    var comment = obj._comment_an
    var credit = obj._credit_an

    console.log("🌸 Source: " + YTPMVSource + " / " + YTPMVSourceLink + "\n" + YTPMVSourceImage + "\n🎹 Musique: " + YTPMVMusic + " / " + YTPMVMusicLink + "\n\n\n> " + comment_en + "\n> " + credit_en)
})
