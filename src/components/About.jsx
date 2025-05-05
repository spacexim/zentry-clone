import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const textContentRef = useRef(null);
  const subTextRef = useRef(null);
  const clipRef = useRef(null);

  useGSAP(() => {
    // 设置图片动画
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    // 设置初始状态
    gsap.set(".mask-clip-path", {
      width: "30%",
      height: "60vh",
      borderRadius: "16px",
      left: "50%",
      top: "50%",
      xPercent: -50,
      yPercent: -50,
    });

    // 图片扩展动画
    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
      left: "50%", // 维持水平居中
      xPercent: -50, // 维持水平居中
      ease: "power1.inOut",
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      {/* 整个内容容器 */}
      <div className="relative flex flex-col items-center">
        {/* 标题部分 */}
        <div
          ref={textContentRef}
          className="mb-8 mt-36 flex flex-col items-center gap-5 z-20"
        >
          <p className="font-general text-sm uppercase md:text-[10px]">
            Welcome to Zentry
          </p>

          <AnimatedTitle
            title="Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure"
            containerClass="mt-5 !text-black text-center"
          />
        </div>

        {/* 小字文本 - 直接放在标题下方 */}
        <div
          ref={subTextRef}
          className="max-w-2xl mt-4 text-center font-circular-web text-lg"
        >
          <p>The Game of Games begins—your life, now an epic MMORPG</p>
          <p className="text-gray-500">
            Zentry unites every player from countless games and platforms, both
            digital and physical, into a unified Play Economy
          </p>
        </div>

        {/* 图片部分 */}
        <div ref={clipRef} className="h-dvh w-screen" id="clip">
          <div
            className="mask-clip-path about-image absolute"
            style={{
              transformOrigin: "center center",
              boxShadow: "0 5px 20px rgba(0,0,0,0.15)",
            }}
          >
            <img
              src="img/about.webp"
              alt="Background"
              className="absolute left-0 top-0 size-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
