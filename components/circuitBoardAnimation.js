import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { DrawSVGPlugin } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

export default function circuitBoardAnimation(pathsSelector) {
    const circuitPaths = document.querySelectorAll(pathsSelector);
    const masterTimeline = gsap.timeline();

    circuitPaths.forEach((svg) => {
        const pathLength = svg.getTotalLength();
        const timeToPlay = pathLength / 40;

        const tween = gsap.timeline({
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

        // Add each tween to the master timeline, starting at the same time
        masterTimeline.add(tween, 0);
    });
}
