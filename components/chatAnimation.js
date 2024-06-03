import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
export default function chatAnimation() {
    const chat = document.querySelector('.chat-animation');
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
        .to("[data-chat='2']", {
            delay: 0.8,
            marginBottom: 0,
            height: 'auto',
            duration: 0.4,
        })
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
                                .to('.chat-a_msg-wrap', {
                                    delay: 1,
                                    opacity: 0,
                                })
                                .to('.chat-a_msg-wrap:not(:first-child)', {
                                    delay: 0.5,
                                    height: 0,
                                    marginBottom: '-1.5rem',
                                })
                                .to("[data-chat-1='img-1']", {
                                    duration: 0,
                                    gridTemplateRows: '0fr',
                                    opacity: 0,
                                })
                                .to("[data-chat='1']", {
                                    opacity: 1,
                                    height: 'auto',
                                });
                        }
                    },
                });
        });
}
