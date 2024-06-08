import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

export default function computeAnimation() {
    const pathSvgs = document.querySelectorAll('.compute-paths');

    const numbers = document.querySelectorAll('.binary-number');
    const symbols = '011001101';

    function getRandomSymbol() {
        return symbols[Math.floor(Math.random() * symbols.length)];
    }

    numbers.forEach((num) => {
        gsap.to(num, {
            duration: 0.05,
            repeat: -1,
            onRepeat: function () {
                num.textContent = getRandomSymbol();
            },
        });
    });

    pathSvgs.forEach((svg, i) => {
        const path = svg.querySelector('.compute-path');
        const line = svg.querySelector('.compute-line');
        const timeToPlay = Math.floor(Math.random() * 4) + 2;
        const timeDelay = Math.floor(Math.random() * 3) + 1;

        // Set the transform origin and offsets before animating
        gsap.set(line, {
            xPercent: -50, // Center horizontally
            yPercent: -50, // Center vertically
            transformOrigin: '50% 50%', // Set the transform origin to the center
        });
        gsap.to('.compute-line', {
            opacity: 1,
            duration: 0.5,
        });
        const tween = gsap.to(line, {
            motionPath: {
                path: path,
                align: path,
                autoRotate: true,
                alignOrigin: [0.5, 0.5],
                start: 0,
                end: 1,
            },
            delay: 0,
            duration: timeToPlay,
            repeat: -1,
            repeatDelay: timeDelay,
            ease: 'none',
        });
        tween.play();
    });
}
