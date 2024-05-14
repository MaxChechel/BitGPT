import gsap from 'gsap';
export default function agentAnimation() {
    const agent = document.querySelector('.agent-animation');
    const agentTl = gsap.timeline({ defaults: { ease: 'circ.out' } });

    agentTl
        .to("[data-agent='1']", {
            delay: 0.8,
            marginBottom: 0,
            height: 'auto',
            duration: 0.4,
        })
        .to("[data-agent='2']", {
            delay: 0.8,
            marginBottom: 0,
            height: 'auto',
            duration: 0.4,
        })
        .add(() => {
            const tl = gsap.timeline();
            const bubblesTl = gsap.timeline({ repeat: -1 });
            const bubbles = agent
                .querySelector('[data-agent="2"]')
                .querySelectorAll('.chat-bubbles');
            let repeatCount = 0;

            bubblesTl
                .to(bubbles, { y: -4, duration: 0.2, stagger: { each: 0.05 } })
                .to(bubbles, {
                    y: 0,
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
                                '[data-agent="2"] .chat-a_chat-wrap.is-bubbles',
                                {
                                    opacity: 0,
                                    height: 0,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    duration: 0.4,
                                }
                            )
                                .to(
                                    '[data-agent="2"] .chat-a_chat-outer-wrap',
                                    {
                                        opacity: 1,
                                        height: 'auto',
                                        duration: 0.4,
                                    },
                                    '<0%'
                                )
                                .to("[data-agent='3']", {
                                    delay: 0.8,
                                    marginBottom: 0,
                                    height: 'auto',
                                    duration: 0.4,
                                })
                                .to("[data-agent='4']", {
                                    delay: 0.8,
                                    marginBottom: 0,
                                    height: 'auto',
                                    duration: 0.4,
                                })
                                .add(() => {
                                    const tl2 = gsap.timeline();
                                    const bubblesTl2 = gsap.timeline({
                                        repeat: -1,
                                    });
                                    const bubbles = agent
                                        .querySelector('[data-agent="4"]')
                                        .querySelectorAll('.chat-bubbles');
                                    let repeatCount = 0;

                                    bubblesTl2
                                        .to(bubbles, {
                                            y: -4,
                                            duration: 0.2,
                                            stagger: { each: 0.05 },
                                        })
                                        .to(bubbles, {
                                            y: 0,
                                            duration: 0.2,
                                            yoyo: true,
                                            stagger: { each: 0.05 },
                                            onComplete: function () {
                                                repeatCount++;
                                                // Add another animation after 3 repeats
                                                if (repeatCount === 3) {
                                                    // Your next animation here
                                                    bubblesTl2.kill();
                                                    tl2.to(
                                                        '[data-agent="4"] .chat-a_chat-wrap.is-bubbles',
                                                        {
                                                            opacity: 0,
                                                            height: 0,
                                                            paddingTop: 0,
                                                            paddingBottom: 0,
                                                            duration: 0.4,
                                                        }
                                                    ).to(
                                                        '[data-agent="4"] .chat-a_chat-outer-wrap',
                                                        {
                                                            opacity: 1,
                                                            height: 'auto',
                                                            duration: 0.4,
                                                        },
                                                        '<0%'
                                                    );
                                                }
                                            },
                                        });
                                });
                        }
                    },
                });
        });
}
