import gsap from 'gsap';
import Flip from 'gsap/Flip';

gsap.registerPlugin(Flip);

export default function evaluateAnimation() {
    const tl = gsap.timeline({ delay: 0.4 });
    tl.to('.ev-user', {
        delay: 0,
        opacity: 1,
        duration: 1,
        stagger: { each: 0.05, from: 'start' },
    })
        .to('.evaluate-a_arrow.is-1', {
            opacity: 1,
            maxWidth: '2rem',
            duration: 0.7,
        })
        .to('.evaluate-a_bitgpt', {
            opacity: 1,
            maxWidth: '13%',
            duration: 1.4,
        })
        .to(
            '.evaluate-a_bitgpt-img-1',
            {
                y: -14,
                duration: 1.4,
            },
            '<50%'
        )
        .to('.evaluate-a_arrow.is-2', {
            opacity: 1,
            maxWidth: '2rem',
            duration: 0.7,
        })
        .to('.evaluate-a_llm', {
            opacity: 1,
            maxWidth: '20%',
            duration: 1.4,
        })
        .to('.evaluate-a_arrows-wrap', {
            opacity: 1,
            maxWidth: '14%',
            duration: 1.4,
        })
        .to('.evaluate-a_dataset', {
            opacity: 1,
            maxWidth: '20%',
            duration: 1.4,
        });

    // .to('.vector-a_model', {
    //     opacity: 1,
    //     maxWidth: '19%',
    //     duration: 1.4,
    // })
    // .to('.vector-a_arrow-1', { opacity: 1, maxWidth: '5%', duration: 0.7 })
    // .to('.vector-a_embed', { opacity: 1, maxWidth: '23%', duration: 1.4 })
    // .to('.vector-a_arrow-2', { opacity: 1, maxWidth: '5%', duration: 0.7 })
    // .to('.vector-a_database', {
    //     opacity: 1,
    //     maxWidth: '18%',
    //     duration: 2,
    // })
    // .to('.vector-a_arrow-3', {
    //     opacity: 1,
    //     maxWidth: '70%',
    //     duration: 1.4,
    // });
}
