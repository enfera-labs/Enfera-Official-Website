import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import WorldMapImgSrc from "../assets/images/Screenshot 2026-08-03 094908.png";

export default function WorldMapGraphic() {
  const canvasRef = useRef(null);

  // Pin locations matching the 6 location markers in the image
  const pinLocations = [
    { id: 1, left: "18.5%", top: "34%" }, // North America
    { id: 2, left: "37.5%", top: "54%" }, // South America
    { id: 3, left: "51.0%", top: "26%" }, // Europe
    { id: 4, left: "62.5%", top: "55%" }, // Africa
    { id: 5, left: "77.0%", top: "24%" }, // Russia/Asia
    { id: 6, left: "78.0%", top: "67%" }, // Australia
  ];

  useEffect(() => {
    const img = new Image();
    img.src = WorldMapImgSrc;

    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      // Remove white background & transform turquoise landmasses to vibrant blue
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        // If pixel is near white background (RGB > 235), remove background (alpha = 0)
        if (r > 235 && g > 235 && b > 235) {
          data[i + 3] = 0;
        } else {
          // If pixel is turquoise landmass, transform to vibrant royal blue
          if (b > 110 && g > 110 && r < 120) {
            data[i] = Math.max(0, Math.floor(r * 0.3));       // Reduce red
            data[i + 1] = Math.max(0, Math.floor(g * 0.65));  // Adjust green
            data[i + 2] = Math.min(255, Math.floor(b * 1.25)); // Elevate blue
          }
        }
      }

      ctx.putImageData(imageData, 0, 0);
    };
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto flex items-center justify-center p-2 group">
      {/* Background Soft Blue Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-indigo-500/15 to-purple-500/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main Image Canvas with Transparent Background */}
      <div className="relative z-10 w-full overflow-visible">
        <canvas
          ref={canvasRef}
          className="w-full h-auto object-contain drop-shadow-xl transition-all duration-500"
        />

        {/* Animated Radar Pulse Rings over the 6 Pin Locations */}
        <div className="absolute inset-0 pointer-events-none">
          {pinLocations.map((pin) => (
            <div
              key={pin.id}
              style={{ left: pin.left, top: pin.top }}
              className="absolute -translate-x-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center"
            >
              <motion.span
                animate={{ scale: [0.6, 2.2, 0.6], opacity: [0.85, 0, 0.85] }}
                transition={{ repeat: Infinity, duration: 2.6, delay: pin.id * 0.35 }}
                className="w-full h-full rounded-full bg-red-500/60 absolute"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
