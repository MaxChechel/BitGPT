import gsap from 'gsap';

export default function scanAnimation() {
    const tl = gsap.timeline();

    tl.to('.scan-a_overlay', {
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
        );
}
