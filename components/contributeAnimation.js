import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { DrawSVGPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, DrawSVGPlugin);

export default function contributeAnimation() {
    const pathSvgs = document.querySelectorAll(
        '.contribute-a_pulses .line-pulse'
    );

    pathSvgs.forEach((svg, i) => {
        const pathLength = svg.getTotalLength();
        const timeToPlay = Math.floor(Math.random() * 3) + 1.5;
        const timeDelay = Math.floor(Math.random() * 3) + 1;

        const tween = gsap.timeline({
            delay: timeDelay,
            duration: timeToPlay,
            repeat: -1,
            repeatDelay: 0,
        });
        tween
            .fromTo(
                svg,
                {
                    ease: 'none',
                    drawSVG: 0,
                },
                { drawSVG: '0% 90%', ease: 'sine.in' }
            )
            .to(svg, { drawSVG: '100% 100%' });
        tween.play();
    });
}
