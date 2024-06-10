import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { DrawSVGPlugin } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

export default function circuitBoardAnimation(pathsSelector) {
    const circuitPaths = document.querySelectorAll(pathsSelector);
    const circuitPathsTweens = [];

    circuitPaths.forEach((svg) => {
        const pathLength = svg.getTotalLength();
        const timeToPlay = Math.random() * 1 + pathLength / 20;
        const timeDelay = Math.random() * 5 + 0.5;
        const tween = gsap.timeline({
            delay: timeDelay,
            repeatDelay: timeDelay * 2,
            repeat: -1,
            duration: timeToPlay,
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
        circuitPathsTweens.push(tween);
    });

    const masterCircuitTween = gsap.timeline();
    circuitPathsTweens.forEach((tween) => {
        masterCircuitTween.add(tween, 0);
    });
}
