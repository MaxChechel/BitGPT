import { gsap } from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
gsap.registerPlugin(TextPlugin);

export default function llmAnimation() {
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
        }, Math.random() * 3000 + 1000); // Random delay between 1 and 4 seconds (adjust as needed)
    }

    const bars = [
        { selector: '.llm-a_bar.is-1', minRange: 63, maxRange: 79 },
        { selector: '.llm-a_bar.is-2', minRange: 43, maxRange: 56 },
        { selector: '.llm-a_bar.is-3', minRange: 47, maxRange: 58 },
    ];

    for (const bar of bars) {
        animateBar(bar.selector, bar.minRange, bar.maxRange);
    }
}
