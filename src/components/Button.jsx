import React, { useRef } from "react";
import gsap from "gsap";

const Button = ({ title, id, rightIcon, leftIcon, containerClass }) => {
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const xPos = e.clientX - rect.left;
    const yPos = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // 计算旋转角度
    const rotateX = ((yPos - centerY) / centerY) * -20; // 垂直旋转
    const rotateY = ((xPos - centerX) / centerX) * 20; // 水平旋转

    // 应用 3D 变换效果
    gsap.to(buttonRef.current, {
      duration: 0.2,
      rotateX,
      rotateY,
      transformPerspective: 800,
      ease: "power1.out",
    });
  };

  const handleMouseLeave = () => {
    // 恢复原始状态
    gsap.to(buttonRef.current, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      ease: "power2.out",
    });
  };

  return (
    <button
      id={id}
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {leftIcon}
      <span className="relative incline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
      {rightIcon}
    </button>
  );
};

export default Button;
