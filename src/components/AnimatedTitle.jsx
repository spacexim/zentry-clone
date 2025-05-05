import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AnimatedTitle = ({ title, containerClass }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 创建主时间线
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "100 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });

      // 设置初始状态 - 更大的旋转角度和更深的z轴位置
      gsap.set(".animated-title-container", {
        opacity: 0,
        rotationY: 75, // 更大的Y轴旋转
        rotationX: -55, // 更大的X轴旋转
        z: -200, // 更深的Z轴位置
        x: 80, // 左侧起始位置
        y: 100, // 下方起始位置
        transformOrigin: "50% 50% -200px", // 更远的变换原点
        transformStyle: "preserve-3d",
        perspective: 1000,
      });

      // 球体旋转动画效果
      titleAnimation.to(".animated-title-container", {
        opacity: 1,
        rotationY: 0,
        rotationX: 0,
        z: 0,
        x: 0,
        y: 0,
        ease: "power3.out", // 使用power3.out曲线模拟球体旋转减速
        duration: 1.2, // 增加动画时间
      });

      // 在整体动画过程中，让单词逐个显示
      titleAnimation.to(
        ".animated-word",
        {
          opacity: 1,
          ease: "power1.inOut",
          stagger: 0.06, // 稍微增加间隔
          duration: 0.3, // 增加每个单词显示的时间
        },
        "-=0.9",
      ); // 在整体动画进行中较早开始单词动画
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={`animated-title ${containerClass}`}>
      {title.split("<br />").map((line, index) => (
        <div
          key={index}
          className="animated-title-container flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
          style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
        >
          {line.split(" ").map((word, i) => (
            <span
              key={i}
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
