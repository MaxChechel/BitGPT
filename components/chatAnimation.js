import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import TextPlugin from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function chatAnimation() {
    const chat = document.querySelector('.chat-animation');
    const chatInput = chat.querySelector('.chat_input-text');
    const chatInputBtn = chat.querySelector('.chat-input-btn');
    const chatTl = gsap.timeline({
        defaults: { ease: 'circ.out' },
    });
    let repeatCount = 0;
    repeatCount = 0;
    chatTl
        .to("[data-chat-1='img-1']", {
            delay: 1,
            duration: 0.5,
            gridTemplateRows: '1fr',
            opacity: 1,
        })
        .to(chatInput, { text: { value: '' }, duration: 0.1, ease: 'none' })
        .to(chatInput, {
            text: {
                value: 'What is the current price of ETH, and what is its 24-hour price change?',
            },
            duration: 3,
            ease: 'none',
        })
        .to(chatInputBtn, { delay: 0.1, duration: 0.2, fillOpacity: 0.1 })
        .to(chatInputBtn, { fillOpacity: 0.04, duration: 0.1 })
        .to(
            "[data-chat='2']",
            {
                delay: 0.2,
                opacity: 1,
                marginBottom: 0,
                height: 'auto',
                duration: 0.4,
            },
            '<0%'
        )
        .to(chatInput, { opacity: 0, duration: 0 }, '<0%')
        .to(chatInput, { text: { value: 'Ask anything...' }, duration: 0 })
        .to(chatInput, { opacity: 1, duration: 0.3 })
        .to(
            "[data-chat-2='msg']",
            {
                opacity: 1,
                duration: 0.4,
            },
            '<0%'
        )
        .to("[data-chat='3']", {
            delay: 0.8,
            opacity: 1,
            marginBottom: 0,
            height: 'auto',
            duration: 0.4,
        })
        .add(() => {
            const tl = gsap.timeline();
            const bubblesTl = gsap.timeline({ repeat: 2 });
            const bubbles = chat.querySelectorAll('.chat-bubbles');

            bubblesTl
                .to(bubbles, {
                    yPercent: -40,
                    duration: 0.2,
                    stagger: { each: 0.05 },
                    ease: 'none',
                })
                .to(bubbles, {
                    delay: 0.05,
                    yPercent: 0,
                    duration: 0.2,
                    stagger: { each: 0.05 },
                    onComplete: function () {
                        repeatCount++;
                        if (repeatCount === 3) {
                            tl.to(
                                '.chat-animation .chat-a_chat-wrap.is-bubbles',
                                {
                                    opacity: 0,
                                    height: 0,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    duration: 0.4,
                                }
                            )
                                .to(
                                    '.chat-animation .chat-a_chat-outer-wrap',
                                    {
                                        opacity: 1,
                                        height: 'auto',
                                        duration: 0.4,
                                    },
                                    '<0%'
                                )
                                .to(
                                    "[data-chat-3='msg']",
                                    {
                                        opacity: 1,
                                        marginBottom: 0,
                                        height: 'auto',
                                        duration: 0.4,
                                    },
                                    '<0%'
                                )
                                .to("[data-chat-3='graph']", {
                                    delay: 0.6,
                                    opacity: 1,
                                    marginBottom: 0,
                                    gridTemplateRows: '1fr',
                                    duration: 0.4,
                                })
                                // .to('.chat-a_msg-wrap', {
                                //     delay: 1,
                                //     opacity: 0,
                                // })
                                // .to('.chat-a_msg-wrap:not(:first-child)', {
                                //     delay: 0.5,
                                //     height: 0,
                                //     marginBottom: '-1.5rem',
                                // })
                                // .to(
                                //     "[data-chat-1='img-1'], [data-chat-3='graph']",
                                //     {
                                //         duration: 0,
                                //         gridTemplateRows: '0fr',
                                //         opacity: 0,
                                //     }
                                // )
                                // .to('.chat-animation .chat-a_chat-outer-wrap', {
                                //     opacity: 0,
                                //     height: 0,
                                //     duration: 0,
                                // })
                                // .to(
                                //     '.chat-animation .chat-a_chat-wrap.is-bubbles',
                                //     {
                                //         opacity: 1,
                                //         height: 'auto',
                                //         paddingTop: '1rem',
                                //         paddingBottom: '1rem',
                                //         duration: 0,
                                //     }
                                // )
                                // .to("[data-chat='1']", {
                                //     opacity: 1,
                                //     height: 'auto',
                                // })
                                .add(() => {
                                    chatTl.kill();
                                    bubblesTl.kill();
                                    //chatAnimation();
                                });
                        }
                    },
                });
        });
}
