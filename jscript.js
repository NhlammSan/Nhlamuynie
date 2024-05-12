let currentSong=0;

const music=document.querySelector('#audio');
const ctrlIcon=document.querySelector('.ctrlIcon')
const artist=document.querySelector('.artist');
const songname=document.querySelector('.song-name');
const songimage=document.querySelector('.song-image');
const currenttime=document.querySelector('.current-time');
const musictime=document.querySelector('.music-time');
const controls=document.querySelector('.controls');
const progress=document.querySelector('.progress');

controls.addEventListener('click',()=>{
    if(controls.className.includes('pause')){
        music.play();
    }else{
        music.pause();
    }
    controls.classList.toggle('pause');
    song-image.classList.toggle('play');
});

// Cài đặt bài hát

const setSong=(i)=>{
    music-player.value=0;
    let song=songs=[i];
    currentSong=i;
    music.src=song.path;
    songname.innerHTML=song.name;
    artist.innerHTML=song.artist;
    songimage.style.backgroundImage=`url('${song.image}')`;
    currenttime.innerHTML='00:00';
    setTimeout(()=>{
        musicplayer.max=music.duration;
        musictime.innerHTML=formatTimes(music.duration);
        
    }, 300);

}
setSong(0);

const formatTimes=(time)=>{
    let min=Math.floor(time / 60);
    if(min<10){
        min=`0${min}`;
    }
    let sec=Math.floor(time % 60);
    if(sec<10){
       sec=`0${sec}`;
    }
    return `${min}:${sec}`
}
// Set seek bar
setInterval(() =>{
    progress.value=song.currenttime;
    currenttime.innerHTML=formatTimes(music.currenttime);
    if(Math.floor(music.currentTime)==Math.floor(progress.max)){
        btnnext.click();
    }
}, 500);
progress.addEventListener('change',()=>{
    music.currentTime=progress.value;
});

const playMusic=()=>{
    music.play();
    controls.classList.remove('pause');
    songimage.classList.add('play');
}

// Next and Preview
controls.addEventListener('click',()=>{
    if(currentSong<=0){
        currentSong=songs.length-1;
    }else{
        currentSong++;
    }
    setSong(currentSong);
    playMusic();
});

controls.addEventListener('click',()=>{
    if(currentSong<=0){
        currentSong=songs.length-1
    }else{
        currentSong--;
    }
    setSong(currentSong);
    controls.click();
});
