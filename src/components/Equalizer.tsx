// Equalizer.tsx
import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface EqualizerProps {
  isPlaying: boolean;
}

const createGradientTexture = () => {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const context = canvas.getContext("2d");

  if (!context) return new THREE.Texture();

  const gradient = context.createLinearGradient(0, 0, canvas.width, 0);
  gradient.addColorStop(0, "#ff66b2"); // Custom pink
  gradient.addColorStop(1, "#9b5de5"); // Custom purple

  context.fillStyle = gradient;
  context.fillRect(0, 0, canvas.width, canvas.height);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;

  return texture;
};

const Equalizer: React.FC<EqualizerProps> = ({ isPlaying }) => {
  const bars = useRef<THREE.Mesh[]>([]);
  const gradientTexture = useRef(createGradientTexture());
  const animationSpeed = 0.001; // Adjust the speed of the animation here

  useEffect(() => {
    // Optionally, you can add logic to handle the equalizer state
    if (isPlaying) {
      console.log("Equalizer started");
    } else {
      console.log("Equalizer stopped");
    }
  }, [isPlaying]);

  useFrame(() => {
    if (isPlaying) {
      const time = Date.now() * animationSpeed;
      bars.current.forEach((bar, i) => {
        bar.scale.y = Math.sin(time + i) + 1.5;
      });
    } else {
      bars.current.forEach((bar) => {
        bar.scale.y = 1.5; // Default height when not animating
      });
    }
  });

  return (
    <>
      {Array.from({ length: 10 }).map((_, i) => (
        <mesh
          key={i}
          ref={(el) => {
            if (el) bars.current[i] = el;
          }}
          position={[i * 0.4 - 2, 0, 0]}
        >
          <boxGeometry args={[0.3, 1, 0.3]} />
          <meshStandardMaterial map={gradientTexture.current} />
        </mesh>
      ))}
    </>
  );
};

export default Equalizer;
