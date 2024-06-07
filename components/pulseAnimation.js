import gsap from 'gsap';

export default function pulseAnimation() {
    const scanTl = gsap.timeline({ repeat: -1, paused: true });

    const letters = document.querySelectorAll('.pulse_letters-wrap .letter');
    const symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    function getRandomSymbol() {
        return symbols[Math.floor(Math.random() * symbols.length)];
    }

    letters.forEach((letter) => {
        gsap.to(letter, {
            duration: 1,
            //delay: Math.random() * 2,
            repeat: -1,
            //repeatDelay: Math.random() * 5 + 2,
            onRepeat: function () {
                letter.textContent = getRandomSymbol();
            },
        });
    });

    const circles = document.querySelectorAll('.pulse_circle');

    circles.forEach((circle, index) => {
        gsap.to(circle, {
            duration: 2,
            scale: 3,
            opacity: 0,
            repeat: -1,
            repeatDelay: 1.5,
            ease: 'power1.inOut',
            delay: index * 0.5,
        });
    });
}
