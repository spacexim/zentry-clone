import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";

const ZentryButton = ({ title, id, rightIcon, leftIcon, containerClass }) => {
  const buttonRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const animationRef = useRef(null);

  // 创建动画上下文
  useEffect(() => {
    return () => {
      // 清理动画
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, []);

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const xPos = e.clientX - rect.left;
    const yPos = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // 计算旋转角度 - 稍微减小值使效果更微妙
    const rotateX = ((yPos - centerY) / centerY) * -6;
    const rotateY = ((xPos - centerX) / centerX) * 6;

    // 使用 GSAP 进行平滑过渡
    gsap.to(buttonRef.current, {
      duration: 0.2, // 减少时间使动画更快速
      rotateX,
      rotateY,
      transformPerspective: 800,
      ease: "power1.out",
      overwrite: "auto", // 允许动画平滑覆盖
    });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);

    // 梯形变换动画 - 确保左长右短
    animationRef.current = gsap.timeline().to(buttonRef.current, {
      duration: 0.3,
      borderRadius: "8px",
      clipPath: "polygon(5% 0%, 100% 0%, 90% 100%, 0% 100%)", // 左长右短的梯形
      boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
      ease: "power2.inOut", // 使用 inOut 缓动使过渡更平滑
    });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);

    // 恢复原始形状，平滑过渡
    animationRef.current = gsap.timeline().to(buttonRef.current, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      borderRadius: "9999px", // 完全圆角
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // 恢复矩形
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      ease: "power2.inOut", // 平滑过渡
    });
  };

  return (
    <button
      id={id}
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden 
        bg-violet-50 px-7 py-3 text-black ${containerClass}`}
      style={{
        transformStyle: "preserve-3d",
        willChange: "transform, clip-path, border-radius",
        transition: "background-color 0.3s ease", // 仅对背景色使用CSS过渡
      }}
    >
      {leftIcon && <span className="relative z-10 mr-2">{leftIcon}</span>}
      <span className="relative z-10 inline-flex font-general text-xs uppercase">
        {title}
      </span>
      {rightIcon && <span className="relative z-10 ml-2">{rightIcon}</span>}

      {/* 添加悬停时的渐变光效 */}
      <div
        className={`absolute inset-0 z-0 transition-opacity duration-300 ease-in-out ${
          isHovering ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)",
          pointerEvents: "none",
        }}
      />
    </button>
  );
};

export default ZentryButton;
