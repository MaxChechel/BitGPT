import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function pulseAnimation() {
    const scanTl = gsap.timeline({ repeat: -1, paused: true });

    const letters = document.querySelectorAll('.pulse_letters-wrap .letter');
    const symbols =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    function getRandomSymbol() {
        return symbols[Math.floor(Math.random() * symbols.length)];
    }

    const letterAnimations = [];

    letters.forEach((letter) => {
        const animation = gsap.to(letter, {
            duration: 0.05,
            repeat: -1,
            onRepeat: function () {
                letter.textContent = getRandomSymbol();
            },
            paused: true, // Initially paused
        });

        letterAnimations.push(animation);
    });

    const circles = document.querySelectorAll('.pulse_circle');

    const tl = gsap
        .timeline({ repeat: -1, paused: true })
        .to('.pulse_logo', {
            duration: 0.4,
            scale: 1.04,
            ease: 'power4.in',
        })
        .to(
            '.pulse_circle',
            {
                duration: 3,
                scale: 5,
                opacity: 0,
                ease: 'circ.out',
            },
            0.2
        )
        .to(
            '.pulse_logo',
            {
                duration: 0.2,
                scale: 1,
            },
            0.4
        )
        .to(
            '.pulse_overlay',
            {
                duration: 0.6,
                '--background-color--pulse-gradient': 'rgba(15, 15, 15, 0.8)',
            },
            0.2
        )
        .to('.pulse_overlay', {
            duration: 2,
            '--background-color--pulse-gradient': 'rgba(15, 15, 15, 0.95)',
        });

    return { scanTl, letterAnimations, tl };
}
