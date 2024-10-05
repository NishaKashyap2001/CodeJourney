// Songs 

const songs = [
    {
        title: 'Solo',
        image: 'song images/solo.jpeg',
        audioSrc: 'songs/solo.mp3' 
    },
    {
        title: 'Kill this love',
        image: 'song images/kill this love.jpg',
        audioSrc: 'songs/kill this love.mp3'
    },
    {
        title: 'Pink Venom',
        image: 'song images/pink venom.jpg',
        audioSrc: 'songs/pink venom.mp3'
    },
    {
        title: 'Cupid',
        image: 'song images/cupid.jpg',
        audioSrc: 'songs/cupid.mp3'
    },
    {
        title: 'Some',
        image: 'song images/some.jpg',
        audioSrc: 'songs/some.mp3'
    },
    {
        title: 'Lalala',
        image: 'song images/lalala.jpg',
        audioSrc: 'songs/lalala.mp3'
    },
    {
        title: 'Maniac',
        image: 'song images/maniac.jpg',
        audioSrc: 'songs/maniac.mp3'
    },
    {
        title: 'Idol',
        image: 'song images/idol.jpg',
        audioSrc: 'songs/idol.mp3'
    },
    {
        title: 'Dynamite',
        image: 'song images/dynamite.jpg',
        audioSrc: 'songs/dynamite.mp3'
    },
    {
        title: 'Boy With Luv',
        image: 'song images/boy with luv.jpg',
        audioSrc: 'songs/boy with luv.mp3'
    },
    {
        title: 'Life Goes On',
        image: 'song images/life goes on.jpg',
        audioSrc: 'songs/life goes on.mp3'
    }
    
];

let currentSongIndex = 0;
let audio = new Audio(songs[currentSongIndex].audioSrc);


// Function to update the player with the current song's details

function updatePlayer() {
    const currentSong = songs[currentSongIndex];
    document.getElementById('albumArt').src = currentSong.image;
    document.getElementById('currentSong').textContent = currentSong.title;
    audio.src = currentSong.audioSrc;


     // Reset progress bar

     document.getElementById('progressBar').value = 0;
}


// Function to play a song

function playSong() {
    audio.play();
    document.getElementById('playPause').querySelector('i').textContent = 'pause';
}


// Function to pause a song

function pauseSong() {
    audio.pause();
     document.getElementById('playPause').querySelector('i').textContent = 'play_arrow';
}


// Function to handle song changes

function changeSong(index) {
    if (index < 0 || index >= songs.length) return; 
    currentSongIndex = index;
    updatePlayer();
    playSong();
}


// Function to handle play/pause button

function togglePlayPause() {
    if (audio.paused) {
        playSong();
    } else {
        pauseSong();
    }
}


// Event listeners for song items

document.querySelectorAll('.songItem').forEach((item, index) => {
    item.addEventListener('click', () => {
        changeSong(index);
    });
});



// Event listeners for player controls

document.getElementById('prev').addEventListener('click', () => {
    changeSong((currentSongIndex - 1 + songs.length) % songs.length);
});

document.getElementById('playPause').addEventListener('click', togglePlayPause);

document.getElementById('next').addEventListener('click', () => {
    changeSong((currentSongIndex + 1) % songs.length);
});



// Update progress bar as the song plays


audio.addEventListener('timeupdate', () => {
    const progressBar = document.getElementById('progressBar');
    if (audio.duration) {
        progressBar.value = (audio.currentTime / audio.duration) * 100;
    }
});



// Reset progress bar when the song ends and play next song


audio.addEventListener('ended', () => {
    const progressBar = document.getElementById('progressBar');
    progressBar.value = 100;
    changeSong((currentSongIndex + 1) % songs.length);
});



// Seek functionality for the progress bar


document.getElementById('progressBar').addEventListener('input', (e) => {
    const progressBar = e.target;
    const newTime = (progressBar.value / 100) * audio.duration;
    audio.currentTime = newTime;
});


// Initialize player with the first song

updatePlayer();
