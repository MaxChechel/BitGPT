import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
export default function chatAnimation() {
    const chat = document.querySelector('.chat-animation');
    const chatTl = gsap.timeline({
        defaults: { ease: 'circ.out' },
    });

    const img1Height = document.querySelector(
        "[data-chat-1='img-1-1']"
    ).offsetHeight;
    const img2Height = document.querySelector(
        "[data-chat-3='graph-1']"
    ).offsetHeight;
    chatTl
        .to("[data-chat-1='img-1']", {
            delay: 1,
            duration: 0.5,
            //height: img1Height,
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
            height: img2Height,
            duration: 0.4,
        })
        .add(() => {
            const tl = gsap.timeline();
            const bubblesTl = gsap.timeline({ repeat: -1 });
            const bubbles = chat.querySelectorAll('.chat-bubbles');
            let repeatCount = 0;

            bubblesTl
                .to(bubbles, {
                    yPercent: -40,
                    duration: 0.2,
                    stagger: { each: 0.05 },
                })
                .to(bubbles, {
                    delay: 0.05,
                    yPercent: 0,
                    duration: 0.2,
                    yoyo: true,
                    stagger: { each: 0.05 },
                    onComplete: function () {
                        repeatCount++;
                        // Add another animation after 3 repeats
                        if (repeatCount === 3) {
                            // Your next animation here
                            bubblesTl.kill();
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
                                    height: 'auto',
                                    duration: 0.4,
                                });
                        }
                    },
                });
        });
}
