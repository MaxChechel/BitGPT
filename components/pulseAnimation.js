import gsap from 'gsap';

export default function pulseAnimation() {
    const scanTl = gsap.timeline({ repeat: -1, paused: true });

    const letters = document.querySelectorAll('.pulse_letters-wrap .letter');
    const symbols =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    function getRandomSymbol() {
        return symbols[Math.floor(Math.random() * symbols.length)];
    }

    letters.forEach((letter) => {
        gsap.to(letter, {
            duration: 0.5,
            delay: Math.random() * 2,
            repeat: -1,
            repeatDelay: Math.random() * 5 + 2,
            onRepeat: function () {
                letter.textContent = getRandomSymbol();
            },
        });
    });

    const circles = document.querySelectorAll('.pulse_circle');

    //circles.forEach((circle, index) => {
    const tl = gsap
        .timeline({ repeat: -1 })
        .to('.pulse_circle', {
            duration: 2,
            scale: 3,
            opacity: 0,

            ease: 'power1.inOut',
            stagger: { each: 0.25 },
        })
        .to(
            '.pulse_logo',
            {
                duration: 0.4,
                scale: 1.04,
                ease: 'power4.in',
            },
            0
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
                '--background-color--pulse-gradient': 'rgba(15, 15, 15, 0.6)',
            },
            '<60%'
        )
        .to('.pulse_overlay', {
            duration: 1,
            '--background-color--pulse-gradient': 'rgba(15, 15, 15, 0.9)',
        });
    //});
}
