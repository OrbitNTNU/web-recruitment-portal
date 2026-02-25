"use client";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@/components/Canvas/Stars";

export default function StarsBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        dpr={1}
        gl={{
          antialias: false,
          powerPreference: "high-performance",
        }}
      >
        <color attach="background" args={["black"]} />
        <Stars />
      </Canvas>
    </div>
  );
}