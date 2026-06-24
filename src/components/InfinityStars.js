import React, { useEffect, useRef } from 'react';

const InfinityStars = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width, height, centerX, centerY;
    
    let stars = [];
    const numStars = 800;
    let focalLength = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      centerX = width / 2;
      centerY = height / 2;
      focalLength = canvas.width * 2;
    };
    
    window.addEventListener('resize', resize);
    resize();

    class Star {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * width - centerX;
        this.y = Math.random() * height - centerY;
        this.z = Math.random() * width;
        this.pz = this.z;
      }
      update() {
        this.z -= 5;
        if (this.z < 1) {
          this.z = width;
          this.x = Math.random() * width - centerX;
          this.y = Math.random() * height - centerY;
          this.pz = this.z;
        }
      }
      draw() {
        let sx = this.x * (focalLength / this.z) + centerX;
        let sy = this.y * (focalLength / this.z) + centerY;
        let px = this.x * (focalLength / this.pz) + centerX;
        let py = this.y * (focalLength / this.pz) + centerY;
        this.pz = this.z;
        
        let radius = 1.5 * (focalLength / this.z) * 0.5;
        let brightness = Math.max(0, Math.min(1, 1 - (this.z / width)));
        
        ctx.beginPath();
        if(Math.random() > 0.95) {
          ctx.fillStyle = `rgba(0, 243, 255, ${brightness})`;
        } else if (Math.random() > 0.9) {
          ctx.fillStyle = `rgba(188, 19, 254, ${brightness})`;
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${brightness})`;
        }
        ctx.arc(sx, sy, radius, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(sx, sy);
        ctx.strokeStyle = `rgba(255, 255, 255, ${brightness * 0.5})`;
        ctx.lineWidth = radius * 0.5;
        ctx.stroke();
      }
    }

    for (let i = 0; i < numStars; i++) {
      stars.push(new Star());
    }

    let animationFrameId;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      for (let star of stars) {
        star.update();
        star.draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'radial-gradient(circle at center, #0a0a20 0%, #020208 100%)' }}
    />
  );
};

export default InfinityStars;
