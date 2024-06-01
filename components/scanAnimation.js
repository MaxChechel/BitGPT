import gsap from 'gsap';

export default function scanAnimation() {
    const scanTl = gsap.timeline({ repeat: -1, paused: true });

    scanTl
        .to('.scan-a_overlay', {
            width: '0%',
            duration: 2.5,
            ease: 'none',
        })
        .to(
            '.scan-a_cell-item.is-fraud',
            {
                filter: 'blur(2px)',
                duration: 1,
            },
            '<65%'
        )
        .to(
            '.scan-svg-icon',
            {
                fill: '#472323',
            },
            '<0%'
        )
        .to('.scan-a_cell', {
            scale: 0.7,
            duration: 2,
        })
        .to(
            '.scan-a_cell-item',
            {
                opacity: 0,
                stagger: { each: 0.05 },
            },
            '<0%'
        )
        .to('.scan-a_cell', {
            scale: 1,
            duration: 0,
        })
        .to('.scan-a_cell-item.is-fraud', {
            filter: 'none',
            duration: 0,
        })
        .to('.scan-svg-icon', {
            fill: '#424242',
            duration: 0,
        })
        .to('.scan-a_overlay', {
            width: '105%',
            opacity: 0,
            duration: 0,
        })
        .to(
            '.scan-a_cell-item',
            {
                opacity: 1,
                stagger: { each: 0.05 },
            },
            '<25%'
        )
        .to('.scan-a_overlay', {
            opacity: 1,
            duration: 1,
        });

    return scanTl;
}
