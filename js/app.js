const music = new Audio('');

// create Arry

const songs = [
    {
        id:'1',
        songName:`  Zodíaco <br>
        <div class="subtitle">Xamã</div>`,
        poster:"/img/xama.webp"
    },
    {
        id:'2',
        songName:`  Zodíaco <br>
        <div class="subtitle">Xamã</div>`,
        poster:"/img/xama.webp"
    }
    // all object type 
] 

Array.from(document.getElementsByClassName('songItem')).forEach((Element, i)=>{
    Element.getElementsByClassName('img')[0].src = songs[i].poster;
    Element.getElementsByClassName('h5')[0].innerHTML = songs[i].songName;
})

let masterPlay = document.getElementById('masterPlay');

masterPlay.addEventListener('click',()=> {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else { 
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
})