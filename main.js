onload = () =>{
    document.body.classList.remove("container");
};


function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '❤️';
  
    // Random horizontal position
    heart.style.left = Math.random() * window.innerWidth + 'px';
  
    // Random size
    heart.style.fontSize = 16 + Math.random() * 24 + 'px';
  
    // Random animation duration
    heart.style.animationDuration = 4 + Math.random() * 3 + 's';
  
    document.body.appendChild(heart);
  
    // Remove heart after animation ends
    setTimeout(() => {
      heart.remove();
    }, parseFloat(heart.style.animationDuration) * 1000);
  }
  
  // Spawn hearts every 300ms
  setInterval(createHeart, 300);

  document.addEventListener("click", () => {
    const music = document.getElementById("bgMusic");
    music.muted = false;
    music.play();
  }, { once: true });
  