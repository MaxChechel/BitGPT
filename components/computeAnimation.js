import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

export default function computeAnimation() {
    const pathSvgs = document.querySelectorAll('.compute-paths');

    pathSvgs.forEach((svg, i) => {
        const path = svg.querySelector('.compute-path');
        const line = svg.querySelector('.compute-line');
        const pathLength = path.getTotalLength();
        const timeToPlay = Math.floor(Math.random() * 3) + 1.5;
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
