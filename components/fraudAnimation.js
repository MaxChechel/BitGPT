import gsap from 'gsap';

export default function fraudAnimation() {
    const fraud = document.querySelector('.fraud-animation');
    const fraudTl = gsap.timeline({ defaults: { ease: 'circ.out' } });

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
            })
            .to(bubbles, {
                yPercent: 0,
                duration: 0.2,
                stagger: { each: 0.05 },
                onComplete: () => {
                    repeatCount++;
                    if (repeatCount === 3) {
                        callbackFunc();
                    }
                },
            });
    }

    fraudTl
        .to("[data-fraud='1']", {
            delay: 3.2,
            marginBottom: 12,
            height: 'auto',
            opacity: 1,
            duration: 0.4,
        })
        .to("[data-fraud='2']", {
            delay: 0.8,
            marginBottom: 12,
            height: 'auto',
            opacity: 1,
            duration: 0.4,
            onComplete: () => {
                chatBubbles("[data-fraud='2']", animateSecondFraudAnimations);
            },
        });

    // Function for final animations after 3 bubble repeats
    function animateSecondFraudAnimations() {
        const tl = gsap.timeline();

        tl.to('.fraud-a_modals-wrapper', {
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
            )
            .to('.fraud_cursor', {
                top: 12,
                opacity: 1,
                duration: 0.5,
            })
            .to(
                '.fraud-modal_btns .message.is-btn.is-active',
                {
                    background: 'rgba(255,255,255,.92)',
                    color: '#04070D',
                },
                '<0%'
            )
            .to('.fraud-modal_btns .message.is-btn.is-active', {
                scale: 1.01,
                duration: 0.2,
            })
            .to('.fraud-modal_btns .message.is-btn.is-active', {
                scale: 1,
                duration: 0.1,
            })

            .to('.fraud-a_modal-1', { delay: 0.2, opacity: 0, duration: 0.2 })
            .to(
                '.fraud-a_modal-2',
                {
                    opacity: 1,
                    duration: 0.4,
                },
                '<60%'
            );
    }
}
