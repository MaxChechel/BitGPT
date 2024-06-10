import gsap from 'gsap';

export default function fraudAnimation() {
    const fraud = document.querySelector('.fraud-animation');
    const chatInput = fraud.querySelector('.chat_input-text');
    const chatInputBtn = fraud.querySelector('.chat-input-btn');

    const mainTl = gsap.timeline({
        repeat: -1,
        paused: true,
    });

    const fraudTl = gsap.timeline({ defaults: { ease: 'circ.out' } });

    const bubblesTl = gsap.timeline({ repeat: 2 });
    const bubbles = fraud.querySelectorAll('.chat-bubbles');

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
        });

    fraudTl
        .to(chatInput, {
            text: { value: '' },
            duration: 0,
            ease: 'none',
        })
        .to(chatInput, {
            text: {
                value: 'Can you send 35 RNDR to 0x498....gy7',
            },
            duration: 1.8,
            ease: 'none',
        })
        .to(chatInputBtn, { delay: 0.1, duration: 0.2, fillOpacity: 0.1 })
        .to(chatInputBtn, { fillOpacity: 0.04, duration: 0.1 })
        .to(
            "[data-fraud='1']",
            {
                marginBottom: 12,
                height: 'auto',
                opacity: 1,
                duration: 0.4,
            },
            '<0%'
        )
        .to(chatInput, { opacity: 0, duration: 0 }, '<0%')
        .to(chatInput, { text: { value: 'Ask anything...' }, duration: 0 })
        .to(chatInput, { opacity: 1, duration: 0.3 })
        .to(
            "[data-fraud='2']",
            {
                delay: 0.4,
                marginBottom: 12,
                height: 'auto',
                opacity: 1,
                duration: 0.4,
            },
            '<0%'
        );

    const animateSecondFraudAnimations = gsap.timeline();

    animateSecondFraudAnimations
        .to('.fraud-a_modals-wrapper', {
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
            delay: 1.2,
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
                duration: 0.6,
            },
            '<60%'
        )
        .to('[data-fraud]', {
            delay: 3,
            opacity: 0,
            duration: 0.3,
        })
        .to(
            '.fraud-a_modal-2',
            {
                opacity: 0,
                duration: 0.3,
            },
            '<0%'
        )
        .to(
            ' .fraud-a_modals-wrapper',
            {
                opacity: 0,
                duration: 0.8,
            },
            '<50%'
        );

    mainTl.add(fraudTl).add(bubblesTl).add(animateSecondFraudAnimations);

    return mainTl;
}
