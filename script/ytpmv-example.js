function generateYTPMVIdea() {
    const sourceOutpout = document.getElementsByClassName("source-outpout")[0];
    const musicOutpout = document.getElementsByClassName("music-outpout")[0];


    fetch("../api/ytpmv.json").then(function (response) {
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

        sourceOutpout.innerText = YTPMVSource;
        sourceOutpout.href = YTPMVSourceLink;
        musicOutpout.innerText = YTPMVMusic;
        musicOutpout.href = YTPMVMusicLink;
    });
};