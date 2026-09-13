import React, { useEffect, useRef } from "react";

export default function NetworkSphere() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const width = 240;
    const height = 240;
    const radius = 85;
    const cx = width / 2;
    const cy = height / 2;

    // Generate 3D points on a sphere using Fibonacci lattice
    const numPoints = 75;
    const points = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

    for (let i = 0; i < numPoints; i++) {
      const y = 1 - (i / (numPoints - 1)) * 2; // Range from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;
      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;
      points.push({ x: x * radius, y: y * radius, z: z * radius });
    }

    let angleX = 0.005;
    let angleY = 0.008;

    let currentRotX = 0;
    let currentRotY = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      currentRotX += angleX;
      currentRotY += angleY;

      const cosY = Math.cos(currentRotY);
      const sinY = Math.sin(currentRotY);
      const cosX = Math.cos(currentRotX);
      const sinX = Math.sin(currentRotX);

      // Rotate points
      const projected = points.map((p) => {
        // Rotate around Y
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.z * cosY + p.x * sinY;

        // Rotate around X
        const y1 = p.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.y * sinX;

        // Perspective projection
        const perspective = 280 / (280 + z2);
        const px = cx + x1 * perspective;
        const py = cy + y1 * perspective;

        return {
          x: x1,
          y: y1,
          z: z2,
          cx: px,
          cy: py,
          perspective,
        };
      });

      // Draw connecting lines between nearby points
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i];
          const p2 = projected[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dz = p1.z - p2.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          // Draw line if points are close enough on 3D sphere
          if (dist < 68) {
            const avgZ = (p1.z + p2.z) / 2;
            const alphaZ = Math.max(0.08, (avgZ + radius) / (2 * radius));
            const alphaDist = 1 - dist / 68;
            const finalAlpha = Math.min(0.85, alphaZ * alphaDist * 0.95);

            ctx.beginPath();
            ctx.moveTo(p1.cx, p1.cy);
            ctx.lineTo(p2.cx, p2.cy);

            // Front lines get vibrant Pink to Purple linear gradient stroke
            if (avgZ > 0) {
              const lineGradient = ctx.createLinearGradient(p1.cx, p1.cy, p2.cx, p2.cy);
              lineGradient.addColorStop(0, `rgba(236, 72, 153, ${finalAlpha * 0.95})`);  // Vibrant Hot Pink
              lineGradient.addColorStop(0.5, `rgba(168, 85, 247, ${finalAlpha * 0.95})`); // Bright Purple
              lineGradient.addColorStop(1, `rgba(147, 51, 234, ${finalAlpha * 0.95})`);  // Deep Electric Purple
              ctx.strokeStyle = lineGradient;
              ctx.lineWidth = 1.7 * p1.perspective;
            } else {
              ctx.strokeStyle = `rgba(147, 51, 234, ${finalAlpha * 0.45})`;
              ctx.lineWidth = 0.95;
            }
            ctx.stroke();
          }
        }
      }

      // Draw pink & purple glowing node gems
      projected.forEach((p, idx) => {
        const alpha = Math.max(0.3, (p.z + radius) / (2 * radius));
        const dotSize = Math.max(1.8, 4.6 * p.perspective);

        const isPink = idx % 2 === 0;

        // Outer colorful glow aura
        if (p.z > 0) {
          ctx.beginPath();
          ctx.arc(p.cx, p.cy, dotSize * 2.4, 0, Math.PI * 2);
          ctx.fillStyle = isPink
            ? `rgba(236, 72, 153, ${alpha * 0.4})`
            : `rgba(147, 51, 234, ${alpha * 0.4})`;
          ctx.fill();
        }

        // Main node dot
        ctx.beginPath();
        ctx.arc(p.cx, p.cy, dotSize, 0, Math.PI * 2);
        ctx.fillStyle = p.z > 0
          ? (isPink ? `rgba(219, 39, 119, ${alpha * 0.95})` : `rgba(126, 34, 206, ${alpha * 0.95})`)
          : `rgba(88, 28, 135, ${alpha * 0.65})`;
        ctx.fill();

        // Inner sparkling core highlight
        if (p.z > 10) {
          ctx.beginPath();
          ctx.arc(p.cx, p.cy, dotSize * 0.5, 0, Math.PI * 2);
          ctx.fillStyle = isPink ? `rgba(255, 255, 255, ${alpha})` : `rgba(243, 232, 255, ${alpha})`;
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center w-64 h-64">
      {/* Background Soft Bluish Light Glow */}
      <div className="absolute inset-0 bg-blue-400/25 rounded-full blur-2xl pointer-events-none" />
      <canvas
        ref={canvasRef}
        width={240}
        height={240}
        className="relative z-10 w-full h-full cursor-pointer"
      />
    </div>
  );
}
