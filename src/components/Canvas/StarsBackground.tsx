"use client";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@/components/Canvas/Stars";
import { ShootingStars } from "@/components/Canvas/ShootingStars";

export default function StarsBackground() {
    return (
        <div className="absolute inset-0 z-10">
            <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
                <color attach="background" args={["black"]} />
                <Stars />
                <ShootingStars />
            </Canvas>
        </div>
    );
}
