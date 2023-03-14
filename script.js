console.log('Welcome to Spotify')

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Na Na karte Pyar", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Tuje Dekha to yeh jana sanam", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Teri meri gallan hogi mashhur", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "It's the Time to Disco ", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "chal chaiya chaiya", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Maahi Ve", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Say Shava shava", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Rock N Roll Soniye ", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "bum bum bole masti mein dole", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Pardeshiya ye such hai piya", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },
    { songName: "Tere Mere hothon pe", filePath: "songs/11.mp3", coverPath: "covers/1.jpg" },
    
]
songItem.forEach((element, i) => {
    // console.log(element, i)
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;

})
//audioElement.play();
// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle-o');
        masterPlay.classList.add('fa-pause-circle-o');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle-o');
        masterPlay.classList.add('fa-play-circle-o');
        gif.style.opacity = 0;
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle-o');
        element.classList.add('fa-play-circle-o');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle-o');
        e.target.classList.add('fa-pause-circle-o');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle-o');
        masterPlay.classList.add('fa-pause-circle-o');
    })
})


document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})