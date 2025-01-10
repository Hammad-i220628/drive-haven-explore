export const createBubbles = () => {
  const body = document.querySelector('body');
  const bubbleCount = 15;

  for (let i = 0; i < bubbleCount; i++) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    
    // Random size between 10px and 30px
    const size = Math.random() * 20 + 10;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    
    // Random horizontal position
    bubble.style.left = `${Math.random() * 100}%`;
    
    // Random animation duration between 10s and 20s
    bubble.style.animationDuration = `${Math.random() * 10 + 10}s`;
    
    // Random animation delay
    bubble.style.animationDelay = `${Math.random() * 5}s`;
    
    body?.appendChild(bubble);
  }
};