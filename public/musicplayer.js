"use strict";
//fetching all the dom elements that will be required

const musicContainer=document.querySelector('.music-container')
const playBtn=document.querySelector('#play')
const prevBtn=document.querySelector('#prev')
const nextBtn=document.querySelector('#next')
const audio=document.querySelector('#audio')
const progress=document.querySelector('.progress')
const progressContainer=document.querySelector('.progress-container')
const title=document.querySelector('#title')
const cover=document.querySelector('#cover')

//song titles
const songs=['Bitches Broken Hearts', 'Bored', 'Come out and play', 
'Everything I wanted', 'Goodbye', 'I Love You', 'Idontwannabeyouanymore',
'Ilomilo', 'Listen Before I Go','Lovely','No Time To Die','Ocean Eyes',
'Watch','Wish you were gay','Bellyache']

//song indices
let songIndex=Math.floor(Math.random()*14);

//initially load song inTo DOM
loadSong(songs[songIndex]) //the function will manipulate the array, with the index as the index gives specifics

function loadSong(song){
    title.innerText=song;
    audio.src=`music/${song}.mp3`
    cover.src=`images/${song}.jpg`
}

function pauseSong(){
    musicContainer.classList.remove('play')
    playBtn.innerHTML='<i class="fas fa-play"></i>'
    //Audio API
    audio.pause()
}

function playSong(){
    musicContainer.classList.add('play')
    playBtn.innerHTML='<i class="fas fa-pause"></i>'

//Audio API
    audio.play()

}

//Event Listeners
playBtn.addEventListener("click", ()=>{
    const isPlaying=musicContainer.classList.contains("play")//anytime the class will contain the class list, it qualifies as const isPlaying
    if(isPlaying){//if the classlist if present,playsong function runs---that runs by adding the play clsslist.
        pauseSong()
    }else{
        playSong()//
    }
})
prevBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    songIndex--
    loadSong(songs[songIndex])
    musicContainer.classList.add('play')
    audio.play()
})
nextBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    songIndex++
    loadSong(songs[songIndex])
    musicContainer.classList.add('play')
    audio.play()
})
function updateProgress(e){
    console.log(e.srcElemen)
}
audio.addEventListener("timeupdate", updateProgress)
