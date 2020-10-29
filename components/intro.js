import { createRef, useEffect } from "react";
import { TextPlugin } from "gsap/dist/TextPlugin";
import { gsap } from "gsap";

export default function Intro() {
  const words = ["Inspire", "Motivate", "Teach", "Authentic", "Choice and Voice", "Excitement"];
  let container = createRef();
  let cursor = createRef();
  useEffect(() => {
    gsap.killTweensOf({});
    gsap.registerPlugin(TextPlugin);

    // worlds
    const masterTL = gsap.timeline({ repeat: -1 });
    words.forEach((word) => {
      const animationLen = word.length * 0.2;
      let tl = gsap.timeline();
      tl.to(container, animationLen, {
        text: word,
        repeat: 1,
        yoyo: true,
        repeatDelay: 1.2,
      });
      masterTL.add(tl);
    });
  }, []);
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Mrs A Teaches
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        <span
          className={
            "text-5xl mt-2 mb-6 leading-tight font-heading min-w-full"
          }
          ref={(div) => {
            // @ts-ignore
            if (div) container = div;
          }}
        />
      </h4>
    </section>
  )
}
