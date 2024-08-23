document.getElementById('startButton').addEventListener('click', function() {
    this.classList.add('hidden');
    const balloonContainer = document.getElementById('balloonContainer');
    balloonContainer.classList.remove('hidden');
    
    const heart = document.querySelector('.heart');
    const message = document.getElementById('message');

    // Show heart with animation
    heart.style.opacity = 1; // Show heart
    
    // Delay message appearance
    setTimeout(() => {
        message.style.opacity = 1; // Show message
        message.style.animation = 'fadeIn 2s forwards'; // Trigger fade-in effect
    }, 500); // Delay of 500 milliseconds for the message to appear

    const colors = ['#FF5733', '#FFBD33', '#75FF33', '#33FF57', '#33FFF0', '#3358FF', '#C733FF'];

    // Create Multiple Balloons
    for (let i = 0; i < 30; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');

        // Randomize the balloon's size and color
        const size = Math.random() * 50 + 50;
        balloon.style.width = `${size}px`;
        balloon.style.height = `${size * 1.5}px`;
        balloon.style.background = `radial-gradient(circle at 50% 20%, ${colors[Math.floor(Math.random() * colors.length)]}, #ff7e5f)`;

        // Randomize the position and animation delay
        balloon.style.left = `${Math.random() * 100}%`;
        balloon.style.animationDelay = `${Math.random() * 5}s`;
        balloon.style.animationDuration = `${Math.random() * 5 + 5}s`;

        balloonContainer.appendChild(balloon);
    }
});
