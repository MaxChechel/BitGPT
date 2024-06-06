import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import gradientText from './utils/gradientText';
import chatAnimation from './components/chatAnimation';
import agentAnimation from './components/agentAnimation';
import llmAnimation from './components/llmAnimation';
import scanAnimation from './components/scanAnimation';
import fraudAnimation from './components/fraudAnimation';
import computeAnimation from './components/computeAnimation';
import contributeAnimation from './components/contributeAnimation';
import vectorStorageAnimation from './components/vectorStorageAnimations';
import evaluateAnimation from './components/evaluateAnimation';
gsap.registerPlugin(ScrollTrigger);

//////Hero loader
document.fonts
    .load('1em "Plus Jakarta Sans"')
    .then(function () {
        const heroTl = gsap.timeline();

        heroTl
            .to('.hero-heading .hero-span-line', {
                delay: 0.2,
                duration: 0.5,
                ease: 'circ.out',
                y: '0%',
                opacity: 1,
                stagger: { each: 0.025 },
                transformOrigin: 'center bottom',
                rotationX: 0,
            })
            .to(
                '.hero_content-wrap p',
                {
                    duration: 0.4,
                    ease: 'circ.out',
                    y: '0%',
                    opacity: 1,
                },
                '<25%'
            )
            .to(
                '.form.is-hero',
                {
                    duration: 0.8,
                    ease: 'circ.out',
                    opacity: 1,
                    width: '100%',
                },
                '<25%'
            )
            .to(
                '.hero_logo',
                {
                    ease: 'power2.out',
                    opacity: 1,
                    duration: 2.8,
                },
                '<25%'
            )
            .to(
                '.section-bg_overlay',
                {
                    ease: 'power2.out',
                    opacity: 1,
                    duration: 4,
                    '--background-color--hero-gradient-1':
                        'rgba(15, 15, 15, 0)',
                },
                '<0%'
            );

        //Section headers
        const sectionHeaders = document.querySelectorAll(
            '.section-heading_wrapper'
        );
        sectionHeaders.forEach((section) => {
            const tag = section.querySelector('.eyebrow');
            const heading = section.querySelector('h2');
            const text = section.querySelector('p');
            ScrollTrigger.create({
                trigger: section,
                start: 'top 60%',
                end: 'top 50%',
                invalidateOnRefresh: true,
                onEnter: () => {
                    const tl = gsap.timeline();

                    tl.to(tag, {
                        y: '0%',
                        opacity: 1,
                        duration: 0.4,
                        ease: 'circ.out',
                    })
                        .to(
                            heading,
                            {
                                opacity: 1,
                                y: '0%',
                                duration: 0.6,
                                ease: 'circ.out',
                            },
                            '<10%'
                        )
                        .to(
                            text,
                            {
                                opacity: 1,
                                duration: 0.5,
                                y: '0%',
                                ease: 'circ.out',
                            },
                            '<15%'
                        );
                },
            });
        });

        //Feature sections

        const sectionFeature = document.querySelectorAll('.feature_component');
        sectionFeature.forEach((section) => {
            const heading = section.querySelector('h3');
            const text = section.querySelectorAll('p');
            const anim = section.querySelector('.feature_image-wrapper');
            ScrollTrigger.create({
                trigger: section,
                start: 'top 60%',
                end: 'top 50%',
                invalidateOnRefresh: true,
                onEnter: () => {
                    const tl = gsap.timeline();

                    tl.to(heading, {
                        opacity: 1,
                        y: '0%',
                        duration: 0.6,
                        ease: 'circ.out',
                    })
                        .to(
                            text,
                            {
                                opacity: 1,
                                duration: 0.5,
                                y: '0%',
                                ease: 'circ.out',
                                stagger: { each: 0.05 },
                            },
                            '<15%'
                        )
                        .to(
                            anim,
                            {
                                y: '0%',
                                opacity: 1,
                                duration: 0.8,
                                ease: 'circ.out',
                            },
                            '<50%'
                        );
                },
            });
        });

        //Card row
        ScrollTrigger.create({
            trigger: '.card-row_component',
            start: 'top 60%',
            end: 'top 50%',
            invalidateOnRefresh: true,
            onEnter: () => {
                const tl = gsap.timeline();
                tl.to('.card-row_card:not(.is-wide)', {
                    y: '0%',
                    opacity: 1,
                    duration: 0.8,
                    ease: 'circ.out',
                    stagger: { each: 0.05 },
                });
            },
        });

        ////Pre footer cta
        ScrollTrigger.create({
            trigger: '.cta_card',
            start: 'top 60%',
            end: 'top 50%',
            invalidateOnRefresh: true,
            onEnter: () => {
                const tl = gsap.timeline();
                tl.to(
                    '.cta_card h2',
                    {
                        opacity: 1,
                        y: '0%',
                        duration: 0.6,
                        ease: 'circ.out',
                    },
                    '<10%'
                )
                    .to(
                        '.cta_card p',
                        {
                            opacity: 1,
                            duration: 0.5,
                            y: '0%',
                            ease: 'circ.out',
                        },
                        '<15%'
                    )
                    .to(
                        '.form',
                        {
                            duration: 0.8,
                            ease: 'circ.out',
                            opacity: 1,
                            width: '100%',
                        },
                        '<25%'
                    )
                    .to(
                        '.cta_card',
                        {
                            ease: 'power2.out',
                            opacity: 1,
                            duration: 3,
                            '--background-color--hero-gradient-1':
                                'rgba(15, 15, 15, 0)',
                        },
                        '<0%'
                    );
            },
        });
    })
    .catch(function () {
        console.log('Font failed to load');
    });

const slider = document.querySelector('.horizontal-scroll_track');

const sliderCards = slider.querySelectorAll(
    '.horizontal-scroll_card-wrap:not(:first-child) .card-row_card'
);
let mm = gsap.matchMedia();

const horizontalScrollTween = gsap.to(slider, {
    x: () => slider.scrollWidth * -1,
    xPercent: 100,
    ease: 'none',
});
let horizTrigger = document.querySelector('.decentralization_slider-wrap');
mm.add('(max-width: 991px)', () => {
    horizTrigger = document.querySelector('.section_decentralization');
});
gsap.set(sliderCards, {
    scale: 0.9,
    opacity: 0.3,
});
ScrollTrigger.create({
    trigger: horizTrigger,
    start: 'top 0',
    end: () =>
        '+=' +
        document.querySelector('.horizontal-scroll_track').offsetWidth * 2,
    animation: horizontalScrollTween,
    scrub: 2,
    invalidateOnRefresh: true,
    pin: true,
});

ScrollTrigger.create({
    trigger: '.horizontal-scroll_track',
    start: 'top 50%',
    end: 'top 0%',
    invalidateOnRefresh: true,
    onEnter: () => {
        evaluateAnimation();
    },
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
            onEnter: () => {
                if (slide.getAttribute('data-animation-card') === 'contribute')
                    contributeAnimation();
                if (slide.getAttribute('data-animation-card') === 'vector')
                    vectorStorageAnimation();
                if (slide.getAttribute('data-animation-card') === 'compute')
                    computeAnimation();
            },
        },
    });

    tl.to(slide, {
        scale: 1,
        opacity: 1,
    });
});
//});
//mm.add('(max-width: 991px)', () => {
// ScrollTrigger.create({
//     trigger: "[data-animation-card='evaluate']",
//     start: 'top 50%',
//     end: 'top 0%',
//     invalidateOnRefresh: true,
//     onEnter: () => {
//         evaluateAnimation();
//     },
// });
// ScrollTrigger.create({
//     trigger: "[data-animation-card='contribute']",
//     start: 'top 50%',
//     end: 'top 0%',
//     invalidateOnRefresh: true,
//     onEnter: () => {
//         contributeAnimation();
//     },
// });
// ScrollTrigger.create({
//     trigger: "[data-animation-card='vector']",
//     start: 'top 50%',
//     end: 'top 0%',
//     invalidateOnRefresh: true,
//     onEnter: () => {
//         vectorStorageAnimation();
//     },
// });
// ScrollTrigger.create({
//     trigger: "[data-animation-card='compute']",
//     start: 'top 50%',
//     end: 'top 0%',
//     invalidateOnRefresh: true,
//     onEnter: () => {
//         computeAnimation();
//     },
// });
//});
////CHAT///////
const mainChatTl = chatAnimation();
ScrollTrigger.create({
    trigger: '[data-chat-animation]',
    start: 'top 50%',
    end: 'bottom 60%',
    invalidateOnRefresh: true,
    onEnter: () => mainChatTl.play(),
    onLeave: () => mainChatTl.pause(),
    onEnterBack: () => mainChatTl.play(),
    onLeaveBack: () => mainChatTl.pause(),
});

//////////////

//////AGENT////////
const mainAgentTl = agentAnimation();
ScrollTrigger.create({
    trigger: '[data-agent-animation]',
    start: 'top 50%',
    end: 'bottom 60%',
    invalidateOnRefresh: true,
    onEnter: () => mainAgentTl.play(),
    onLeave: () => mainAgentTl.pause(),
    onEnterBack: () => mainAgentTl.play(),
    onLeaveBack: () => mainAgentTl.pause(),
});
//////////////////

///////LLM/////////
ScrollTrigger.create({
    trigger: '[data-llm-animation]',
    start: 'top 50%',
    end: 'bottom 60%',
    invalidateOnRefresh: true,
    onEnter: () => {
        llmAnimation();
    },
});

////Scan
const mainScanTl = scanAnimation();
ScrollTrigger.create({
    trigger: '[data-security-animation]',
    start: 'top 50%',
    end: 'bottom 60%',
    onEnter: () => mainScanTl.resume(),
    onLeave: () => mainScanTl.pause(),
    onEnterBack: () => mainScanTl.resume(),
    onLeaveBack: () => mainScanTl.pause(),
});

////Fraud
const mainFraudTl = fraudAnimation();
ScrollTrigger.create({
    trigger: '[data-security-animation]',
    start: 'top 50%',
    end: 'bottom 60%',
    invalidateOnRefresh: true,
    onEnter: () => mainFraudTl.play(),
    onLeave: () => mainFraudTl.pause(),
    onEnterBack: () => mainFraudTl.play(),
    onLeaveBack: () => mainFraudTl.pause(),
});

/////Decentralized Model Registry////////
const btnGlowtween = gsap.timeline({
    repeat: -1,
    repeatDelay: 0,
});
btnGlowtween
    .fromTo(
        '.btn-border-path',
        {
            ease: 'none',
            drawSVG: '0% 100%',
            opacity: 0,
        },
        { drawSVG: '0% 100%', opacity: 1, duration: 3, ease: 'sine.in' }
    )
    .to('.btn-border-path', {
        drawSVG: '100% 200%',
        opacity: 0,
        ease: 'sine.in',
    });
// .to(
//     '.btn-bg-path',
//     {
//         fillOpacity: 0.12,
//         duration: 0.8,
//         ease: 'power2.out',
//     },
//     0
// )
// .to('.btn-bg-path', {
//     fillOpacity: 0.04,
//     duration: 1.4,
//     ease: 'power2.out',
// });
btnGlowtween.play();
