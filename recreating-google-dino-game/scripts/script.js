const DINO_PLAYER = document.querySelector('.dino');
const DESERT = document.querySelector('.background');
let isJumping = false;

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
  let position = 0;
  isJumping = true; 

  let upInterval = setInterval( () => {
    if (position >= 150) {
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
  let cactusPosition = 1000;
  let randomTimer = Math.random() * 4500  

  CACTUS.classList.add('cactus');
  CACTUS.style.left = `${cactusPosition}px`
  DESERT.appendChild(CACTUS);

  let leftInterval = setInterval(() => {
    if (cactusPosition < -60) {
      clearInterval(leftInterval);
      DESERT.removeChild(CACTUS);
      return;
    }
    cactusPosition -= 12;
    CACTUS.style.left = `${cactusPosition}px`;
  }, 20);

// 
  setTimeout(createCactus, randomTimer);
}

createCactus();
// take the jump key
document.addEventListener('keydown', handleKeyDown);
