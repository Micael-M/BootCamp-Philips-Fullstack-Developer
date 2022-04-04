const DINO_PLAYER = document.querySelector('.dino');
const DESERT = document.querySelector('.background');
let isJumping = false;
let position = 0;


// Site used to find the kaycode of each key:
// https://keycode.info
function handleKeyDown(event) {
  if (event.keyCode === 32) {
    //Making sure the dino is jumping
    if (!isJumping) {
      jump();
    }
  }
};

function jump() {
  isJumping = true; 

  let upInterval = setInterval( () => {
    if (position >= 150 ) {
      clearInterval(upInterval); // Stopping upInterval execution

      let downIntrval = setInterval(() => {
        if (position === 0) {
          isJumping = false;
          return clearInterval(downIntrval);
        }
        //going down
        position -= 20 
        DINO_PLAYER.style.bottom = `${position}px`;
      }, 20)
    }
    // going up
      position += 20;
      DINO_PLAYER.style.bottom = `${position}px`;
  }, 20);
}

// Create cactus elements
function createCactus() {
  const CACTUS = document.createElement('div');
  let cactusPosition = 1100;
  let randomTimer = Math.random() * 4500

  CACTUS.classList.add('cactus');
  CACTUS.style.left = `${cactusPosition}px`
  DESERT.appendChild(CACTUS);

  let leftInterval = setInterval(() => {
    const position1 = cactusPosition > 100;
    const position2 = cactusPosition < 160;
    const position3 = position < 60 ;

    if (cactusPosition <= 0) {
      clearInterval(leftInterval);
      DESERT.removeChild(CACTUS);
      return;
    } else if (position1 && position2 && position3) {
      clearInterval(leftInterval);
      document.body.innerHTML = '<h1 classe="game-over">Fim de jogo!</h1>'
    }
    cactusPosition -= 15;
    CACTUS.style.left = `${cactusPosition}px`;
  }, 20);

// 
  setTimeout(createCactus, randomTimer);
}

createCactus();
// take the jump key
document.addEventListener('keydown', handleKeyDown);
