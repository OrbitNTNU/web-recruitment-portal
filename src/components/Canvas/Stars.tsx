import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type * as THREE from "three";

export const Stars = ({ onIntroComplete }: { onIntroComplete?: () => void }) => {
  const pointsRef = useRef<THREE.Points>(null!);
  const starCount = 1500;
  const targetSpeed = 0.02; 
  const introDuration = 2; 
  const speedRef = useRef(1.5);

  const positions = useMemo(() => {
    const arr = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      const r = 40;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

 const hasCompleted = useRef(false);

useFrame(({ clock }, delta) => {
  const elapsed = clock.elapsedTime;

  if (elapsed < introDuration) {
    const progress = elapsed / introDuration;
    const eased = 1 - Math.pow(1 - progress, 3);
    speedRef.current = 1.5 - eased * (1.5 - targetSpeed);
  } else {
    speedRef.current = targetSpeed;

    if (!hasCompleted.current) {
      hasCompleted.current = true;
      onIntroComplete?.();
    }
  }

  pointsRef.current.rotation.y += speedRef.current * delta;
});
  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={starCount}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="white"
        size={0.12}
        transparent
        opacity={0.9}
        depthWrite={false}
      />
    </points>
  );
};