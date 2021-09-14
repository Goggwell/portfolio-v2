export default function musicFunc() {
    const title = document.querySelector('.music__title');
    const prev = document.querySelector('.music__player__btns--prev');
    const playPause = document.querySelector('.music__player__btns--playPause');
    const next = document.querySelector('.music__player__btns--next');
    const audio = document.querySelector('audio');
    const seek = document.querySelector('.music__title--seek');

    const songList = [
        {
            path: "./audio/chiller.mp3",
            songName: "still",
        },
        {
            path: "./audio/crystallinemix.mp3",
            songName: "cavern",
        },
        {
            path: "./audio/cyberpunk.mp3",
            songName: "REDACTED",
        },
        {
            path: "./audio/cybertrance.mp3",
            songName: "Jack In",
        },
        {
            path: "./audio/deeperhouse.mp3",
            songName: "what if i made royalty free music?",
        },
        {
            path: "./audio/lofi.mp3",
            songName: "lazy_day.mp3",
        },
        {
            path: "./audio/pleasedonttouchscreenoff.mp3",
            songName: "[PDTA - Screen Off] Remix",
        },
        {
            path: "./audio/smoothie.mp3",
            songName: "SMOOTHIE",
        },
        {
            path: "./audio/stackback.mp3",
            songName: "Stacker",
        },
        {
            path: "./audio/streetfight.mp3",
            songName: "choose_your_character",
        },
        {
            path: "./audio/supertrance.mp3",
            songName: "e u p h o r i a",
        },
        {
            path: "./audio/synthwaveportfolio.mp3",
            songName: "Lament",
        },
        {
            path: "./audio/vaporfunkfast.mp3",
            songName: "Thousand",
        },
        {
            path: "./audio/vaporwavesex.mp3",
            songName: "Resonance, but my way",
        },
    ];

    let isSongPlaying = false;

    function playSong() {
        isSongPlaying = true;
        audio.play();
        playPause.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-pause"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>'
    }

    function pauseSong() {
        isSongPlaying = false;
        audio.pause();
        playPause.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-play"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>'
    }

    playPause.addEventListener("click", () => (isSongPlaying ? pauseSong() : playSong()));

    function loadSong(songList) {
        title.textContent = songList.songName;
        audio.src = songList.path;
    }

    let i = 0;

    loadSong(songList[i]);

    function prevSong() {
        i--;
        if(i < 0) {
            i = songList.length - 1;
        }
        loadSong(songList[i]);
        playSong();
    }
    prev.addEventListener("click", prevSong);

    function nextSong() {
        i++;
        if(i > songList.length - 1) {
            i = 0;
        } 
        loadSong(songList[i]);
        playSong();
    }
    next.addEventListener("click", nextSong);

    function updateProgress(e) {
        const { duration, currentTime } = e.srcElement;
        const progressPercent = (currentTime / duration) * 100;
        seek.style.background = `linear-gradient(to right, var(--color-tertiary) ${progressPercent}%, var(--color-primary) 0%)`;
    }
    audio.addEventListener("timeupdate", updateProgress);
}