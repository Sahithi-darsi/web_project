console.log("Welcome to Spotify");
let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs=[
    {songName:"Let me love you" , filePath:"song1.mp3" , coverPath :"https://upload.wikimedia.org/wikipedia/en/a/a5/DJSnakeLetMeLoveYou.jpg "},
    {songName: "Tum hi ho", filePath: "songs/2.mp3", coverPath: " https://i.ytimg.com/vi/qrC6yjMBIBA/maxresdefault.jpg   " },
    {songName: "Palivaalu Bhadravatakam", filePath: "songs/3.mp3", coverPath: "https://i.ytimg.com/vi/eiGdsH1g20k/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAEEqjvc_PiL3yLNQPwA "},
    {songName: "Poollamme pilla", filePath: "songs/4.mp3", coverPath: " https://c.saavncdn.com/807/Poolamme-Pilla-From-HanuMan-Telugu-Telugu-2024-20240130001233-500x500.jpg  "},
    {songName:" Chaleya ", filePath: "songs/5.mp3", coverPath: " https://c.saavncdn.com/026/Chaleya-From-Jawan-Hindi-2023-20230814014337-500x500.jpg   "},
    {songName: "Tanu Vetikina", filePath: "songs/2.mp3", coverPath: " https://i.ytimg.com/vi/M6D7v6THqis/oar2.jpg?sqp=-oaymwEiCMAEENAFSFqQAgHyq4qpAxEIARUAAAAAJQAAyEI9AICiQw==&rs=AOn4CLCfKV_lTHGihInffP9hRfaNdprn8A "},
    {songName: "Some Bol4", filePath: "songs/2.mp3", coverPath: "https://i1.sndcdn.com/artworks-arqyDp79oUTPyzot-46SKpw-t500x500.jpg "},
]

    
    songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
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


