import React, { useEffect, useRef } from "react";
import './HeroSection.css';
function HeroSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];
    const numParticles = 100; // عدد النقاط
    const colors = ["#ffffff", "#cccccc", "#999999"]; // ألوان هادية

    // ضبط حجم الكانفاس
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // إنشاء النقاط
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        // لو خرجت بره الشاشة ترجّعها تاني
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section className="HeroSection" >
      <canvas className="HeroSectionCanvas" ref={canvasRef} />
      <div className="HeroSectionDiv">
        <h2 className="HeroSectionHeaderOne">Ereny Remon</h2>
        <h3 className="HeroSectionHeaderTwo">Full Stack Python Developer</h3>
        <p className="HeroSectionParagraph">
          Full stack Developer passionate about creating innovative web solutions. 
         
        </p>

        <a className='HeroSectionLink' href="#mainDivSevenID"> <button className="gradient-btn">
          View My Work
        </button></a>

        <a
          href="/Ereny.Remon_CV.pdf"
          download="Ereny.Remon_CV.pdf"
          className="transparent-btn"
        >
          Download CV
        </a>


      </div>
    </section>
  );
}

export default HeroSection;
