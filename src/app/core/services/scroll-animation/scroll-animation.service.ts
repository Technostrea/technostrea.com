import { Injectable } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Injectable({
  providedIn: 'root'
})
export class ScrollAnimationService {

  constructor() {
    gsap.registerPlugin(ScrollTrigger);
  }

  initAnimations() {
    if (!CSS.supports('animation-timeline: scroll()')) {
      const SPAN = 'max(45vw, 260px)';
      const CONFIG = [
        {
          x: (index: number, el: HTMLElement) => {
            return Math.max(260, window.innerWidth * 0.45) * -1;
          },
          y: -10,
          r: -8,
          h: 160,
          w: (index: number, el: HTMLElement) => {
            return Math.max(320, el.parentElement ? el.parentElement.offsetWidth * 0.55 : 320);
          },
        },
        // Add other configurations as in the original code...
      ];

      gsap.set('.hero', { position: 'absolute' });

      const cards = document.querySelectorAll('.card');

      cards.forEach((card, index) => {
        if (CONFIG[index]) {
          gsap.from(card, {
            x: CONFIG[index].x,
            yPercent: CONFIG[index].y,
            height: `${CONFIG[index].h}%`,
            rotate: CONFIG[index].r,
            width: CONFIG[index].w,
            scrollTrigger: {
              trigger: '.scroller',
              start: 'top bottom',
              end: 'top 50%',
              scrub: true,
            },
          });
        }
      });

      gsap.from(
        [
          '.card__content',
          '.card--two .card__column:last-of-type',
          '.card--three .card__column:last-of-type',
          '.card--five .card__column:last-of-type',
        ],
        {
          y: '-100cqh',
          scrollTrigger: {
            trigger: '.scroller',
            start: 'top 80%',
            end: 'top top',
            scrub: true,
          },
        }
      );

      gsap.from(['.card__avatar img', '.password svg'], {
        opacity: 0,
        scrollTrigger: {
          trigger: '.scroller',
          start: 'top 50%',
          end: 'top top',
          scrub: true,
        },
      });

      gsap.from(['.card--five .card__dummy', '.card--six .card__dummy'], {
        width: (index: number, el: HTMLElement) => el.parentElement ? el.parentElement.offsetWidth * 0.26 : 0,
        scrollTrigger: {
          trigger: '.scroller',
          start: 'top 80%',
          end: 'top top',
          scrub: true,
        },
      });

      gsap.from('.card--one .card__avatar', {
        scale: 2,
        scrollTrigger: {
          trigger: '.scroller',
          start: 'top bottom',
          end: 'top top',
          scrub: true,
        },
      });

      gsap.from('.card--two .card__avatar', {
        width: (index: number, el: HTMLElement) => {
          const parentWidth = el.parentElement ? el.parentElement.offsetWidth : 330;
          return Math.max(330, parentWidth * 0.55) - 32;
        },
        borderRadius: '12px',
        height: 'calc(300cqh - 2rem)',
        scrollTrigger: {
          trigger: '.scroller',
          start: 'top bottom',
          end: 'top 20%',
          scrub: true,
        },
      });

      gsap.from('.card--six .card__column:last-of-type .card__company', {
        width: 120,
        x: '-1rem',
        scrollTrigger: {
          trigger: '.scroller',
          start: 'top bottom',
          end: 'top 20%',
          scrub: true,
        },
      });

      gsap.from('.cta', {
        scale: 1,
        scrollTrigger: {
          trigger: '.scroller',
          start: 'top bottom',
          end: 'top 20%',
          scrub: true,
        },
      });
    }
  }
}
