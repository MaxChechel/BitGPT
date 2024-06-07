import gsap from 'gsap';

export default function agentAnimation() {
    const agent = document.querySelector('.agent-animation');
    const chatInput = agent.querySelector('.chat_input-text');
    const chatInputBtn = agent.querySelector('.chat-input-btn');
    const agentTl = gsap.timeline({ defaults: { ease: 'circ.out' } });

    const mainTl = gsap.timeline({
        repeat: -1,
        paused: true,
    });

    const initialStyles = gsap.timeline();
    initialStyles
        .set('[data-agent-2]', {
            height: 0,
            duration: 0,
            marginBottom: 0,
        })
        .set('[data-agent]', {
            display: 'grid',
            duration: 0,
            opacity: 1,
            height: 0,
            marginBottom: 0,
        })
        .set('.agent-a_msg-wrap .chat-a_chat-outer-wrap', {
            height: 0,
            duration: 0,
        })
        .set(
            '[data-agent] .chat-a_chat-wrap.is-bubbles, [data-agent-2] .chat-a_chat-wrap.is-bubbles',
            {
                opacity: 1,
                height: 'auto',
                paddingTop: '1rem',
                paddingBottom: '1rem',
                duration: 0,
            }
        )
        .set("[data-agent-2='1']", { overflow: 'hidden', duration: 0 })
        .set('.agent-a-2_cursor', {
            opacity: 0,
            duration: 0,
        })
        .set('.agent-a-2_cursor', {
            top: -36,
            duration: 0,
        })
        .set('.agent-a-2_suggested-wrap .message.is-active', {
            background: 'rgba(255, 255, 255, 0.05)',
            color: '#fff',
            duration: 0,
        });

    // Animate elements with data-agent="1" and "2"
    agentTl
        .to(chatInput, { text: { value: '' }, duration: 0, ease: 'none' })
        .to(chatInput, {
            text: {
                value: 'Yo, how many memecoins do I have?',
            },
            duration: 1.65,
            ease: 'none',
        })
        .to(chatInputBtn, { delay: 0.1, duration: 0.2, fillOpacity: 0.1 })
        .to(chatInputBtn, { fillOpacity: 0.04, duration: 0.1 })
        .to(
            "[data-agent='1']",
            {
                marginBottom: 12,
                height: 'auto',
                duration: 0.4,
                opacity: 1,
            },
            '<0%'
        )
        .to(chatInput, { opacity: 0, duration: 0 }, '<0%')
        .to(chatInput, { text: { value: 'Ask anything...' }, duration: 0 })
        .to(chatInput, { opacity: 1, duration: 0.3 })
        .to(
            "[data-agent='2']",
            {
                delay: 0.4,
                marginBottom: 12,
                height: 'auto',
                duration: 0.4,
                opacity: 1,
            },
            '<0%'
        );

    // Function for final animations after 3 bubble repeats

    const animateSecondAgentAnimations = gsap.timeline();

    animateSecondAgentAnimations
        .to('[data-agent="2"] .chat-a_chat-wrap.is-bubbles', {
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
        .to(chatInput, { text: { value: '' }, duration: 0, ease: 'none' })
        .to(chatInput, {
            text: {
                value: "Cool, let's send 8M SHIB to Ryan",
            },
            duration: 1.6,
            ease: 'none',
        })
        .to(chatInputBtn, { delay: 0.1, duration: 0.2, fillOpacity: 0.1 })
        .to(chatInputBtn, { fillOpacity: 0.04, duration: 0.1 })
        .to(
            "[data-agent='3']",
            {
                marginBottom: 12,
                height: 'auto',
                duration: 0.4,
                opacity: 1,
            },
            '<0%'
        )
        .to(chatInput, { opacity: 0, duration: 0 }, '<0%')
        .to(chatInput, { text: { value: 'Ask anything...' }, duration: 0 })
        .to(chatInput, { opacity: 1, duration: 0.3 })
        .to(
            "[data-agent='4']",
            {
                delay: 0.4,
                marginBottom: 12,
                height: 'auto',
                duration: 0.4,
                opacity: 1,
            },
            '<0%'
        );

    const animateThirdAgentAnimations = gsap.timeline();
    animateThirdAgentAnimations
        .to('[data-agent="4"] .chat-a_chat-wrap.is-bubbles', {
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
            delay: 1,
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
        .to(chatInput, { text: { value: '' }, duration: 0, ease: 'none' })
        .to(chatInput, {
            text: {
                value: '10M SHIB',
            },
            duration: 0.4,
            ease: 'none',
        })
        .to(chatInputBtn, { delay: 0.1, duration: 0.2, fillOpacity: 0.1 })
        .to(chatInputBtn, { fillOpacity: 0.04, duration: 0.1 })
        .to(
            "[data-agent-2='4']",
            {
                marginBottom: 12,
                height: 'auto',
                duration: 0.4,
                opacity: 1,
            },
            '<0%'
        )
        .to(chatInput, { opacity: 0, duration: 0 }, '<0%')
        .to(chatInput, { text: { value: 'Ask anything...' }, duration: 0 })
        .to(chatInput, { opacity: 1, duration: 0.3 })
        .to(
            "[data-agent-2='5']",
            {
                delay: 0.4,
                marginBottom: 12,
                height: 'auto',
                duration: 0.4,
                opacity: 1,
            },
            '<0%'
        );

    ///Second sequense start

    const animateFourthAgentAnimations = gsap.timeline();
    animateFourthAgentAnimations
        .to('[data-agent-2="5"] .chat-a_chat-wrap.is-bubbles', {
            opacity: 0,
            height: 0,
            paddingTop: 0,
            paddingBottom: 0,
            duration: 0.4,
        })
        .to(
            '[data-agent-2="5"] .chat-a_chat-outer-wrap',
            {
                opacity: 1,
                height: 'auto',
                duration: 0.4,
            },
            '<0%'
        )
        .to('[data-agent-2]', {
            delay: 3,
            opacity: 0,
        });

    const bubblesTl1 = gsap.timeline({ repeat: 2 });
    bubblesTl1
        .to("[data-agent='2'] .chat-bubbles", {
            yPercent: -40,
            duration: 0.2,
            stagger: { each: 0.05 },
            ease: 'none',
        })
        .to("[data-agent='2'] .chat-bubbles", {
            delay: 0.05,
            yPercent: 0,
            duration: 0.2,
            stagger: { each: 0.05 },
        });
    const bubblesTl2 = gsap.timeline({ repeat: 2 });
    bubblesTl2
        .to("[data-agent='4'] .chat-bubbles", {
            yPercent: -40,
            duration: 0.2,
            stagger: { each: 0.05 },
            ease: 'none',
        })
        .to("[data-agent='4'] .chat-bubbles", {
            delay: 0.05,
            yPercent: 0,
            duration: 0.2,
            stagger: { each: 0.05 },
        });
    const bubblesTl3 = gsap.timeline({ repeat: 2 });
    bubblesTl3
        .to("[data-agent-2='5'] .chat-bubbles", {
            yPercent: -40,
            duration: 0.2,
            stagger: { each: 0.05 },
            ease: 'none',
        })
        .to("[data-agent-2='5'] .chat-bubbles", {
            delay: 0.05,
            yPercent: 0,
            duration: 0.2,
            stagger: { each: 0.05 },
        });

    mainTl
        .add(initialStyles)
        .add(agentTl)
        .add(bubblesTl1)
        .add(animateSecondAgentAnimations)
        .add(bubblesTl2)
        .add(animateThirdAgentAnimations)
        .add(bubblesTl3)
        .add(animateFourthAgentAnimations);

    return mainTl;
}
