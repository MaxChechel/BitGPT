import gsap from 'gsap';

export default function agentAnimation() {
    const agent = document.querySelector('.agent-animation');
    const agentTl = gsap.timeline({ defaults: { ease: 'circ.out' } });

    // Function for animating chat bubbles of agent 2 (repeating and final)
    function chatBubbles(bubbleContainer, callbackFunc) {
        const bubblesTl = gsap.timeline({ repeat: 2 });
        const bubbles = document
            .querySelector(`${bubbleContainer}`)
            .querySelectorAll('.chat-bubbles');

        let repeatCount = 0;
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
                onComplete: () => {
                    repeatCount++;
                    if (repeatCount === 3) {
                        bubblesTl.kill();
                        callbackFunc();
                    }
                },
            });
    }

    // Animate elements with data-agent="1" and "2"
    agentTl
        .to("[data-agent='1']", {
            delay: 0.8,
            marginBottom: 12,
            height: 'auto',
            duration: 0.4,
            opacity: 1,
        })
        .to("[data-agent='2']", {
            delay: 0.8,
            marginBottom: 12,
            height: 'auto',
            duration: 0.4,
            opacity: 1,
            onComplete: () => {
                agentTl.kill();
                chatBubbles("[data-agent='2']", animateSecondAgentAnimations);
            },
        });

    // Function for final animations after 3 bubble repeats
    function animateSecondAgentAnimations() {
        const tl = gsap.timeline();

        tl.to('[data-agent="2"] .chat-a_chat-wrap.is-bubbles', {
            opacity: 0,
            height: 0,
            paddingTop: 0,
            paddingBottom: 0,
            duration: 0.4,
        })
            .to(
                '[data-agent="2"] .chat-a_chat-outer-wrap',
                { opacity: 1, height: 'auto', duration: 0.4 },
                '<0%'
            )
            .to("[data-agent='3']", {
                delay: 0.8,
                marginBottom: 12,
                height: 'auto',
                duration: 0.4,
                opacity: 1,
            })
            .to("[data-agent='4']", {
                delay: 0.8,
                marginBottom: 12,
                height: 'auto',
                duration: 0.4,
                opacity: 1,
                onComplete: () => {
                    tl.kill();
                    chatBubbles(
                        '[data-agent="4"]',
                        animateThirdAgentAnimations
                    );
                },
            });
    }

    function animateThirdAgentAnimations() {
        const tl = gsap.timeline();
        tl.to('[data-agent="4"] .chat-a_chat-wrap.is-bubbles', {
            opacity: 0,
            height: 0,
            paddingTop: 0,
            paddingBottom: 0,
            duration: 0.4,
        })
            .to(
                '[data-agent="4"] .chat-a_chat-outer-wrap',
                {
                    opacity: 1,
                    height: 'auto',
                    duration: 0.4,
                },
                '<0%'
            )
            .to('[data-agent]', {
                delay: 0.4,
                opacity: 0,
            })
            .to('[data-agent]', {
                display: 'none',
                duration: 0,
            })
            .to("[data-agent-2='1']", {
                delay: 0.8,
                marginBottom: 12,
                opacity: 1,
                height: 'auto',
                duration: 0.4,
            })
            .to("[data-agent-2='1']", { overflow: 'visible', duration: 0 })
            .to('.agent-a-2_cursor', {
                delay: 0.2,
                opacity: 1,
            })
            .to('.agent-a-2_cursor', {
                top: '0',
                duration: 0.5,
            })
            .to(
                '.agent-a-2_suggested-wrap .message.is-active',
                {
                    background: 'rgba(255,255,255,.92)',
                    color: '#04070D',
                },
                '<80%'
            )
            .to('.agent-a-2_suggested-wrap .message.is-active', {
                scale: 1.01,
                duration: 0.2,
            })
            .to('.agent-a-2_suggested-wrap .message.is-active', {
                scale: 1,
                duration: 0.1,
            })
            .to("[data-agent-2='1']", { overflow: 'hidden', duration: 0 })
            .to("[data-agent-2='1']", {
                opacity: 0,
                height: 0,
                duration: 0.25,
            })
            .to(
                '.agent-a-2_cursor',
                {
                    opacity: 0,
                    duration: 0.25,
                },
                '<0%'
            )
            .to("[data-agent-2='2']", {
                delay: 0.8,
                marginBottom: 12,
                height: 'auto',
                duration: 0.4,
                opacity: 1,
            })
            .to("[data-agent-2='3']", {
                delay: 0.8,
                marginBottom: 12,
                height: 'auto',
                duration: 0.4,
                opacity: 1,
            })
            .to("[data-agent-2='4']", {
                delay: 0.8,
                marginBottom: 12,
                height: 'auto',
                duration: 0.4,
                opacity: 1,
            })
            .to("[data-agent-2='5']", {
                delay: 0.8,
                marginBottom: 12,
                height: 'auto',
                duration: 0.4,
                opacity: 1,
                onComplete: () => {
                    tl.kill();
                    chatBubbles(
                        '[data-agent-2="5"]',
                        animateFourthAgentAnimations
                    );
                },
            });
    }
    ///Second sequense start
    function animateFourthAgentAnimations() {
        const tl = gsap.timeline();
        tl.to('[data-agent-2="5"] .chat-a_chat-wrap.is-bubbles', {
            opacity: 0,
            height: 0,
            paddingTop: 0,
            paddingBottom: 0,
            duration: 0.4,
        }).to(
            '[data-agent-2="5"] .chat-a_chat-outer-wrap',
            {
                opacity: 1,
                height: 'auto',
                duration: 0.4,
            },
            '<0%'
        );
        // .to('[data-agent-2]', {
        //     delay: 0.5,
        //     opacity: 0,
        // })
        // .to('[data-agent-2]', {
        //     height: 0,
        //     duration: 0,
        //     marginBottom: 0,
        // })
        // .to('[data-agent]', {
        //     display: 'grid',
        //     duration: 0,
        //     opacity: 1,
        //     height: 0,
        //     marginBottom: 0,
        // })
        // .to('.agent-a_msg-wrap .chat-a_chat-outer-wrap', {
        //     height: 0,
        //     duration: 0,
        // })
        // .to(
        //     '[data-agent] .chat-a_chat-wrap.is-bubbles, [data-agent-2] .chat-a_chat-wrap.is-bubbles',
        //     {
        //         opacity: 1,
        //         height: 'auto',
        //         paddingTop: '1rem',
        //         paddingBottom: '1rem',
        //         duration: 0,
        //     }
        // )
        // .to("[data-agent-2='1']", { overflow: 'hidden', duration: 0 })
        // .to('.agent-a-2_cursor', {
        //     opacity: 0,
        //     duration: 0,
        // })
        // .to('.agent-a-2_cursor', {
        //     top: -36,
        //     duration: 0,
        // })
        // .to('.agent-a-2_suggested-wrap .message.is-active', {
        //     background: 'rgba(255, 255, 255, 0.05)',
        //     color: '#fff',
        //     duration: 0,
        // })
        // .add(() => {
        //     tl.kill();
        //     //agentAnimation();
        // });
    }
}
