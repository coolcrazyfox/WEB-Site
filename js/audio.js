const pumpkin = document.querySelector('.pumpkin');
function scarySoundToPumpkin() {
    const audio2 = new Audio();
    audio2.preload = 'auto';
    audio2.src = 'first.mp3';
    audio2.play();
    
}
pumpkin.onclick = scarySoundToPumpkin;

document.querySelector('.halloween-on').onchange =function(){
    if (this.checked) {
        header.classList.add('site-header-bg');
        spider.classList.add('spider-animation');
        pumpkin.classList.add('pumpkin-animation'); // in audio
    }
    else {
        header.classList.remove('site-header-bg');
        spider.classList.remove('spider-animation');
        pumpkin.classList.remove('pumpkin-animation');// in audio

    }
}