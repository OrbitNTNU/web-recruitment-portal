import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useEarthTexture } from "../../hooks/useEarthTexture";
import { Earth } from "./Earth";

export const Stars = ({ onIntroComplete }: { onIntroComplete?: () => void }) => {
  const groupRef = useRef<THREE.Group>(null!);
  const texture = useEarthTexture();

  const starCount = 200;
  const targetSpeed = 0.05;
  const introDuration = 2;

  const speedRef = useRef(1.5);
  const hasCompleted = useRef(false);

  const earthPosition = useMemo(() => new THREE.Vector3(25, 8, -10), []);

  const positions = useMemo(() => {
    const arr = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      const r = 80;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }

    return arr;
  }, []);

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

    groupRef.current.rotation.y += speedRef.current * delta;
  });

  return (
    <group ref={groupRef}>
      <points raycast={() => null}>
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
          size={0.8}
          sizeAttenuation
          transparent
          opacity={0.9}
          depthWrite={false}
        />
      </points>

      <Earth position={earthPosition} texture={texture} />
    </group>
  );
};