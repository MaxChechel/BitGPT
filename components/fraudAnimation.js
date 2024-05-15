import gsap from 'gsap';

export default function fraudAnimation() {
    const fraud = document.querySelector('.fraud-animation');
    const fraudTl = gsap.timeline({ defaults: { ease: 'circ.out' } });

    // Function for animating chat bubbles of agent 2 (repeating and final)
    function chatBubbles(bubbleContainer, callbackFunc) {
        const bubblesTl = gsap.timeline({ repeat: -1 });
        const bubbles = document
            .querySelector(`${bubbleContainer}`)
            .querySelectorAll('.chat-bubbles');

        let repeatCount = 0;
        bubblesTl
            .to(bubbles, { y: -4, duration: 0.2, stagger: { each: 0.05 } })
            .to(bubbles, {
                y: 0,
                duration: 0.2,
                yoyo: true,
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
    fraudTl
        .to("[data-fraud='1']", {
            delay: 3.2,
            marginBottom: 0,
            height: 'auto',
            duration: 0.4,
        })
        .to("[data-fraud='2']", {
            delay: 0.8,
            marginBottom: 0,
            height: 'auto',
            duration: 0.4,
            onComplete: () => {
                chatBubbles("[data-fraud='2']", animateSecondFraudAnimations);
            },
        });

    // Function for final animations after 3 bubble repeats
    function animateSecondFraudAnimations() {
        const tl = gsap.timeline();

        tl.to('[data-fraud="2"] .chat-a_chat-wrap.is-bubbles', {
            opacity: 0,
            height: 0,
            paddingTop: 0,
            paddingBottom: 0,
            duration: 0.4,
        })
            .to(
                '[data-fraud="2"] .chat-a_chat-outer-wrap',
                { opacity: 1, height: 'auto', duration: 0.4 },
                '<0%'
            )
            .to("[data-fraud='3']", {
                delay: 0.8,
                marginBottom: 0,
                height: 'auto',
                duration: 0.4,
            })
            .to('.fraud-a_modals-wrapper', {
                delay: 0.8,
                opacity: 1,
                duration: 0.6,
            })
            .to(
                '.fraud-a_modal-1',
                {
                    opacity: 1,
                    duration: 0.4,
                },
                '<60%'
            );
    }
}
