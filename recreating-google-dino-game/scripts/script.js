const DINO_PLAYER = document.querySelector('.dino');
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
  },20);
}
// take the jump key
document.addEventListener('keydown', handleKeyDown);
