import gsap from 'gsap';
import Flip from 'gsap/Flip';
import { DrawSVGPlugin } from 'gsap/all';
gsap.registerPlugin(Flip, DrawSVGPlugin);

export default function evaluateAnimation() {
    const tl = gsap.timeline({ delay: 0.4 });
    tl.to('.ev-user', {
        delay: 0,
        opacity: 1,
        duration: 1,
        stagger: { each: 0.05, from: 'start' },
    })
        .to('.evaluate-a_users', {
            scale: 1,
            duration: 0.7,
        })
        .to(
            '.evaluate-a_arrow.is-1',
            {
                maxWidth: '1.5rem',
                duration: 0.3,
            },
            '<0%'
        )
        .to('.evaluate-a_arrow.is-1', {
            opacity: 1,
            duration: 0.4,
        })
        .to('.evaluate-a_bitgpt', {
            maxWidth: '13%',
            duration: 0.8,
        })
        .to('.evaluate-a_bitgpt', {
            opacity: 1,
            duration: 1,
        })
        .to(
            '.evaluate-a_bitgpt-img-1',
            {
                y: -14,
                duration: 0.8,
            },
            '<30%'
        )
        .to('.evaluate-a_arrow.is-2', {
            maxWidth: '1.5rem',
            duration: 0.3,
        })
        .to('.evaluate-a_arrow.is-2', {
            opacity: 1,
            duration: 0.4,
        })
        .to('.evaluate-a_llm', {
            maxWidth: '20%',
            duration: 0.8,
        })
        .to('.evaluate-a_llm', {
            opacity: 1,
            duration: 1,
        })
        .to('.evaluate-a_arrows-wrap', {
            maxWidth: '12%',
            duration: 0.8,
        })
        .to('.evaluate-a_arrows-wrap', {
            opacity: 1,
            duration: 1,
        })
        .to('.evaluate-a_dataset', {
            maxWidth: '20%',
            duration: 0.8,
        })
        .to('.evaluate-a_dataset', {
            opacity: 1,
            duration: 1,
        });
}
