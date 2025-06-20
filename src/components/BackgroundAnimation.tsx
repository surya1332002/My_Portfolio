
import { useEffect, useRef } from 'react';

const BackgroundAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Floating particles
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      opacity: number;
      size: number;
      color: string;
    }> = [];

    // Create particles with theme colors
    for (let i = 0; i < 100; i++) {
      const colors = ['#FFFFFF', '#E53935', '#888888'];
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        opacity: Math.random() * 0.4 + 0.1,
        size: Math.random() * 2 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Network lines nodes
    const networkNodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
    }> = [];

    for (let i = 0; i < 15; i++) {
      networkNodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
      });
    }

    let time = 0;
    let gradientOffset = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.008;
      gradientOffset += 0.002;

      // Animated gradient overlay
      const gradient = ctx.createLinearGradient(
        Math.sin(gradientOffset) * canvas.width * 0.3 + canvas.width * 0.5,
        Math.cos(gradientOffset * 0.8) * canvas.height * 0.3 + canvas.height * 0.5,
        Math.cos(gradientOffset) * canvas.width * 0.3 + canvas.width * 0.5,
        Math.sin(gradientOffset * 0.8) * canvas.height * 0.3 + canvas.height * 0.5
      );
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
      gradient.addColorStop(0.2, 'rgba(40, 40, 40, 0.08)');
      gradient.addColorStop(0.5, 'rgba(229, 57, 53, 0.04)');
      gradient.addColorStop(0.8, 'rgba(28, 28, 28, 0.06)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.save();
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.restore();

      // Update and draw floating particles
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around screen
        if (particle.x < -20) particle.x = canvas.width + 20;
        if (particle.x > canvas.width + 20) particle.x = -20;
        if (particle.y < -20) particle.y = canvas.height + 20;
        if (particle.y > canvas.height + 20) particle.y = -20;

        // Draw particle with enhanced visibility
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add subtle glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = particle.size * 3;
        ctx.globalAlpha = particle.opacity * 0.3;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 0.8, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Update network nodes
      networkNodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x <= 60 || node.x >= canvas.width - 60) node.vx *= -1;
        if (node.y <= 60 || node.y >= canvas.height - 60) node.vy *= -1;
      });

      // Draw flowing network lines
      ctx.save();
      ctx.strokeStyle = '#E53935';
      ctx.lineWidth = 1;

      for (let i = 0; i < networkNodes.length; i++) {
        for (let j = i + 1; j < networkNodes.length; j++) {
          const dx = networkNodes[i].x - networkNodes[j].x;
          const dy = networkNodes[i].y - networkNodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 500) {
            const opacity = (500 - distance) / 500 * 0.2;
            ctx.globalAlpha = opacity;
            ctx.beginPath();
            ctx.moveTo(networkNodes[i].x, networkNodes[i].y);
            ctx.lineTo(networkNodes[j].x, networkNodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Add flowing line effect
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 0.8;
      for (let i = 0; i < networkNodes.length - 1; i++) {
        const node1 = networkNodes[i];
        const node2 = networkNodes[i + 1];
        const opacity = Math.sin(time + i * 0.5) * 0.15 + 0.08;
        
        ctx.globalAlpha = opacity;
        ctx.beginPath();
        ctx.moveTo(node1.x, node1.y);
        ctx.lineTo(node2.x, node2.y);
        ctx.stroke();
      }
      ctx.restore();

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ 
        zIndex: -1,
        mixBlendMode: 'normal',
        opacity: 1,
        display: 'block'
      }}
    />
  );
};

export default BackgroundAnimation;
