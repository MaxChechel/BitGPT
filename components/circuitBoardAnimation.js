import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { DrawSVGPlugin } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

export default function circuitBoardAnimation(pathsSelector) {
    const circuitPaths = document.querySelectorAll(pathsSelector);

    circuitPaths.forEach((svg) => {
        const pathLength = svg.getTotalLength();
        const timeToPlay = pathLength / 200;
        const repeatDelay = gsap.utils.random(1, 3, 0.1);

        const tween = gsap.timeline({
            delay: repeatDelay,
            repeat: -1,
            //duration: gsap.utils.random(4, 6, 0.2),
            repeatDelay: repeatDelay,
            defaults: {
                duration: timeToPlay,
                ease: 'none',
            },
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
