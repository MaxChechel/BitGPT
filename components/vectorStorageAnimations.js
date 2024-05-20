import gsap from 'gsap';
import Flip from 'gsap/Flip';

gsap.registerPlugin(Flip);

export default function vectorStorageAnimation() {
    const animationWrapper = document.querySelector('.vector-animation');

    const cards = animationWrapper.querySelector('.vector-a_cards');

    const state = Flip.getState('.vector-a_cards, .vector-a_card');

    cards.classList.add('is-column');

    Flip.from(state, {
        duration: 0.5,
        stagger: 0.1,
        absolute: true,
        ease: 'power1.inOut',
        onComplete: () => {
            tl.play();
        },
    });

    const tl = gsap.timeline({ paused: true, delay: 0.4 });
    tl.to('.vector-a_arrows', {
        maxWidth: '9%',
        duration: 1,
    })
        .to('.vector-a_model', {
            opacity: 1,
            maxWidth: '19%',
            duration: 1.4,
        })
        .to('.vector-a_arrow-1', { opacity: 1, maxWidth: '5%', duration: 0.7 })
        .to('.vector-a_embed', { opacity: 1, maxWidth: '23%', duration: 1.4 })
        .to('.vector-a_arrow-2', { opacity: 1, maxWidth: '5%', duration: 0.7 })
        .to('.vector-a_database', {
            opacity: 1,
            maxWidth: '18%',
            duration: 2,
        })
        .to('.vector-a_arrow-3', {
            opacity: 1,
            maxWidth: '70%',
            duration: 1.4,
        });
}
