import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import chatAnimation from './components/chatAnimation';
import agentAnimation from './components/agentAnimation';

gsap.registerPlugin(ScrollTrigger);

const slider = document.querySelector('.horizontal-scroll_track');

const sliderCards = slider.querySelectorAll(
    '.horizontal-scroll_card-wrap:not(:first-child) .card-row_card'
);

gsap.set(sliderCards, {
    scale: 0.9,
    opacity: 0.3,
});

function getScrollAmount() {
    let racesWidth = slider.scrollWidth;
    return racesWidth - window.innerWidth;
}
let scrollGap = window.innerWidth * 0.65;

const horizontalScrollTween = gsap.to(slider, {
    x: () => -slider.scrollWidth + scrollGap,
    ease: 'none',
});

ScrollTrigger.create({
    trigger: '.decentralization_slider-wrap',
    start: 'top 0',
    end: () => `+=${getScrollAmount()}`,
    animation: horizontalScrollTween,
    scrub: 1.5,
    invalidateOnRefresh: true,
    pin: true,
});

sliderCards.forEach((slide, index) => {
    const tl = gsap.timeline({
        scrollTrigger: {
            scrub: 1.5,
            containerAnimation: horizontalScrollTween,
            trigger: slide,
            start: 'left 50%',
            end: 'right 100%',
            toggleActions: 'play none none reverse',
            invalidateOnRefresh: true,
        },
    });

    tl.to(slide, {
        scale: 1,
        opacity: 1,
    });
});

////CHAT///////
ScrollTrigger.create({
    trigger: '[data-chat-animation]',
    start: 'top 50%',
    end: 'top 0%',
    invalidateOnRefresh: true,
    onEnter: () => {
        chatAnimation();
    },
});

//////////////

//////AGENT////////
ScrollTrigger.create({
    trigger: '[data-agent-animation]',
    start: 'top 50%',
    end: 'top 0%',
    invalidateOnRefresh: true,
    onEnter: () => {
        agentAnimation();
    },
});
//////////////////
