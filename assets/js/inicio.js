var giftBoxx = document.querySelector('.start_btn');

const text = document.querySelector(".texto");

window.addEventListener('load', () => {
  const audio = document.getElementById('my-audio');
  audio.play();
});


const textLoad = () => {
    
    setTimeout(() => {
        text.textContent = "Que tal machh?";
    }, 0);
    setTimeout(() => {
        text.textContent = "De verdad creíste que me iba a olvidar?";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Puede ser... nahh como crees :D ";
    }, 8000); //1s = 1000 milliseconds
    setTimeout(() => {
        text.textContent = "Pero bueno, tenía que hacer algo especial";
    }, 12000); //1s = 1000 milliseconds
    setTimeout(() => {
        text.textContent = "Espero que disfrutes de esta pequeña experiencia";
    }, 16000); //1s = 1000 milliseconds
    setTimeout(() => {
        text.textContent = "Cuando estés lista presiona el botón de abajo!";
        if (giftBoxx.classList.contains('hidden')) {
            giftBoxx.classList.remove('hidden');
        }
    }, 19000); //1s = 1000 milliseconds
}


textLoad();
setInterval(textLoad, 40000);

