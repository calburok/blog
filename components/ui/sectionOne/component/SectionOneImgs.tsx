'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SectionOneImgs = () => {
  const frogRef = useRef<HTMLImageElement | null>(null);
  const birusRef = useRef<HTMLImageElement | null>(null);
  const alienRef = useRef<HTMLImageElement | null>(null);
  const overRef = useRef<HTMLImageElement | null>(null);
  const peachRef = useRef<HTMLImageElement | null>(null);
  const imgBoxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!imgBoxRef.current) return;

    // ✅ 새로고침 시 항상 위로
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // ✅ 마운트 순차 등장
    const introAnimations = [
      { ref: frogRef, delay: 0, y: -30, rotation: -4 },
      { ref: birusRef, delay: 0.2, y: 30, rotation: 3 },
      { ref: peachRef, delay: 0.4, y: -25, rotation: 2 },
      { ref: alienRef, delay: 0.6, y: 25, rotation: -3 },
      { ref: overRef, delay: 0.8, y: 20, rotation: 1 },
    ];

    introAnimations.forEach(({ ref, delay, y, rotation }) => {
      if (!ref.current) return;

      gsap.from(ref.current, {
        opacity: 0,
        y,
        rotation,
        duration: 0.8,
        ease: 'power2.out',
        delay,
      });
    });

    // ✅ ScrollTrigger - 개구리
    if (frogRef.current) {
      gsap.fromTo(
        frogRef.current,
        { scale: 1 },
        {
          y: 300,
          rotation: -2,
          scale: 2,
          overwrite: 'auto',
          scrollTrigger: {
            trigger: imgBoxRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.7,
            markers: true,
          },
        }
      );
    }

    // ✅ ScrollTrigger - 나머지 이미지
    const scrollAnimations = [
      { ref: birusRef, y: 120, x: 80, scale: 1, rotation: 100 },
      { ref: alienRef, y: -580, rotation: 100 },
      { ref: overRef, y: 130, scale: 1, rotation: 0 },
      { ref: peachRef, y: 350, x: 100, scale: 0.8, rotation: 300 },
    ];

    scrollAnimations.forEach(({ ref, y, x, scale, rotation }) => {
      if (!ref.current) return;

      gsap.to(ref.current, {
        y,
        x,
        scale,
        rotation,
        overwrite: 'auto',
        scrollTrigger: {
          trigger: imgBoxRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.7,
          markers: true,
        },
      });
    });

    // ✅ ScrollTrigger 전체 리프레시
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={imgBoxRef} className="sectionOneImgBox">
      <img
        ref={frogRef}
        className="sectionOneImgFrog"
        src="/images/frog.png"
        alt="frog"
      />
      <img
        ref={birusRef}
        className="sectionOneImgBirus"
        src="/images/article2.png"
        alt="birus"
      />
      <img
        ref={peachRef}
        className="sectionOneImgPeach"
        src="/images/peach.png"
        alt="peach"
      />
      <img
        ref={alienRef}
        className="sectionOneImgAlien"
        src="/images/moster.png"
        alt="alien"
      />
      <img
        ref={overRef}
        className="sectionOneImgOver"
        src="/images/overwatch.png"
        alt="overwatch"
      />
    </div>
  );
};

export default SectionOneImgs;
