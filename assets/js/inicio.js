var giftBoxx = document.querySelector('.start_btn');

const text = document.querySelector(".texto");

window.addEventListener('load', () => {
  const audio = document.getElementById('my-audio');
  audio.play();
});


const textLoad = () => {
    
    setTimeout(() => {
        text.textContent = "Que tal mach?";
    }, 0);
    setTimeout(() => {
        text.textContent = "De verdad creiste que me iba a olvidar?";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Puede ser... nahh como crees :D ";
    }, 8000); //1s = 1000 milliseconds
    setTimeout(() => {
        text.textContent = "Pero bueno, tenia que hacer algo especial ";
    }, 12000); //1s = 1000 milliseconds
    setTimeout(() => {
        text.textContent = "Espero que disfrutes de esta pequena experiencia";
    }, 16000); //1s = 1000 milliseconds
    setTimeout(() => {
        text.textContent = "Cuando estes lista preciona el boton de abajo";
        if (giftBoxx.classList.contains('hidden')) {
            giftBoxx.classList.remove('hidden');
        }
    }, 19000); //1s = 1000 milliseconds
}


textLoad();
setInterval(textLoad, 40000);

