// Obtener referencia al elemento de la caja de regalo
var giftBox = document.querySelector('.gift-box');
var giftBoxx = document.querySelector('.gift-box-container');
var messageContainer = document.querySelector('#result-message');

// Variables para el conteo de toques y la animación de vibración
var touchCount = 0;
var isVibrating = false;

function checkUsingComputer(isUsingComputer) {
  if (isUsingComputer) {
    var userAgent = navigator.userAgent.toLowerCase();
    var isWebBrowserPc = userAgent.includes('windows') || userAgent.includes('macintosh');
    
    if (isWebBrowserPc) {	
		setTimeout(function() {
			// Mostrar la caja
			if (giftBoxx.classList.contains('hidden')) {
				giftBoxx.classList.remove('hidden');
			}
		  }, 2000);
			
    } else {
      showMessagee("Por favor vuelve a intentarlo más tarde, con una PC");
    }
  } else {
    showMessagee("Por favor vuelve a intentarlo más tarde, con una PC");
  }

  setTimeout(hideElements, 1500);
}

function showMessagee(message) {
  messageContainer.innerHTML = message;
  messageContainer.classList.remove('hidden');
  hideElementss();
}

function hideElementss() {
	var welcomeText = document.getElementById("welcome-text");
	var buttonContainer = document.getElementById("button-container");
	
	welcomeText.classList.add("hidden");
	buttonContainer.classList.add("hidden");
	var buttons = document.getElementsByClassName("button");
	
	for (var i = 0; i < buttons.length; i++) {
	  buttons[i].classList.add("hidden");
	}
}

function hideElements() {
  var welcomeText = document.getElementById("welcome-text");
  var buttonContainer = document.getElementById("button-container");
  
  welcomeText.classList.add("hidden");
  buttonContainer.classList.add("hidden");
  messageContainer.classList.add("hidden");
  //var buttons = document.getElementsByClassName("button");
  
  //for (var i = 0; i < buttons.length; i++) {
    //buttons[i].classList.add("hidden");
 // }
}

// Función para iniciar la animación de vibración
function startVibration() {
  if (!isVibrating) {
    isVibrating = true;
    giftBox.style.animation = 'vibration 3s';
    setTimeout(stopVibration, 3000); // Detener la vibración después de 2 segundos
  }
}

// Función para detener la animación de vibración
function stopVibration() {
  isVibrating = false;
  giftBox.style.animation = '';
}

function mostrarMensaje() {
  var messageContainerr = document.getElementById("message-container");
  messageContainerr.classList.remove("hidden");
  buttonContainer.classList.remove("hidden");
}

function playSound() {
  const audio = new Audio('assets/music/gift.mp3');
  audio.play();
}

function playSound2() {
  const audio2 = new Audio('assets/music/hpb.mp3');
  audio2.play();
}

// Función para manejar el evento de tocar la caja de regalo
function handleTouch() {
  touchCount++;

  if (touchCount >= 2 && touchCount <= 3) {
    // Vibrar la caja de regalo
    startVibration();
    playSound();
  } else if (touchCount > 2) {
    // Detener la vibración y hacer que la tapa salte
    stopVibration();
    giftBox.classList.add('jump');
    setTimeout(function() {
      // Quitar la clase "jump" después de 1 segundo para que la animación se pueda repetir
      giftBox.classList.remove('jump');
    }, 1000);
	setTimeout(function() {
		// Quitar la clase "jump" después de 1 segundo para que la animación se pueda repetir
		giftBoxx.classList.add('hidden');
	}, 300);
    // Mostrar confeti y mensaje
	
    //showConfetti();
    playSound2();
	  startConfetti();
    mostrarMensaje();
    
	
	

  }
}

// Agregar el evento de clic a la caja de regalo
giftBox.addEventListener('click', handleTouch);
