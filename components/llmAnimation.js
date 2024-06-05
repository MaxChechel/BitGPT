import { gsap } from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
gsap.registerPlugin(TextPlugin);

export default function llmAnimation() {
    const initTL = gsap.timeline({ duration: 0.6, ease: 'circ.out' });
    initTL
        .to('.llm-a_bar.is-1', { width: '77%' })
        .to(
            '.llm-a_bar.is-1 .llm-a_bar-progress',
            {
                text: {
                    value: '77%',
                    delimiter: ' ',
                },
            },
            '<0%'
        )
        .to('.llm-a_bar.is-2', { width: '51%' }, '<0%')
        .to(
            '.llm-a_bar.is-2 .llm-a_bar-progress',
            {
                text: {
                    value: '51%',
                    delimiter: ' ',
                },
            },
            '<0%'
        )
        .to('.llm-a_bar.is-3', { width: '54%' }, '<0%')
        .to(
            '.llm-a_bar.is-3 .llm-a_bar-progress',
            {
                text: {
                    value: '54%',
                    delimiter: ' ',
                },
            },
            '<0%'
        )
        .to('.llm-a_bar.is-5', { width: '72%' }, '<0%')
        .to(
            '.llm-a_bar.is-5 .llm-a_bar-progress',
            {
                text: {
                    value: '72%',
                    delimiter: ' ',
                },
                onComplete: () => {
                    for (const bar of bars) {
                        animateBar(bar.selector, bar.minRange, bar.maxRange);
                    }
                },
            },
            '<0%'
        );

    function animateBar(selector, minRange, maxRange) {
        const tl = gsap.timeline({
            defaults: {
                duration: 0.2,
            },
        });

        // Generate random values for this bar
        const randomWidth =
            Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;

        // Update animations with random values for this bar
        tl.to(selector, {
            width: `${randomWidth}%`,
        }).to(
            `${selector} .llm-a_bar-progress`, // Assuming progress element has this class
            {
                text: {
                    value: `${randomWidth}%`,
                    delimiter: ' ',
                },
            },
            '<0%'
        );

        // Schedule next animation frame update for this bar with a delay
        setTimeout(() => {
            animateBar(selector, minRange, maxRange);
        }, Math.random() * 2000 + 1000); // Random delay between 1 and 4 seconds (adjust as needed)
    }

    const bars = [
        { selector: '.llm-a_bar.is-1', minRange: 63, maxRange: 79 },
        { selector: '.llm-a_bar.is-2', minRange: 43, maxRange: 56 },
        { selector: '.llm-a_bar.is-3', minRange: 47, maxRange: 58 },
        { selector: '.llm-a_bar.is-5', minRange: 68, maxRange: 74 },
    ];
}
