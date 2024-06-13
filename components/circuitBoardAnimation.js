import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { DrawSVGPlugin } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

export default function circuitBoardAnimation(pathsSelector) {
    const circuitPaths = document.querySelectorAll(pathsSelector);

    circuitPaths.forEach((svg) => {
        const pathLength = svg.getTotalLength();
        const timeToPlay = pathLength / 40;
        const repeatDelay = gsap.utils.random(0.1, 0.5);

        const tween = gsap.timeline({
            repeat: -1,
            duration: timeToPlay,
            repeatDelay: repeatDelay,
        });

        tween
            .fromTo(
                svg,
                {
                    ease: 'none',
                    drawSVG: 0,
                },
                {
                    drawSVG: '0% 100%',
                    ease: 'power2.in',
                }
            )
            .to(svg, {
                drawSVG: '100% 100%',
                ease: 'circ.out',
            });
        tween.play();
    });
}
