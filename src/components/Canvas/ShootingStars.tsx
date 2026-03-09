import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

type Star = {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  life: number;
};

export const ShootingStars = () => {
  const pointsRef = useRef<THREE.Points>(null!);

  const starCount = 1;

  const stars = useMemo<Star[]>(() => {
    return new Array(starCount).fill(null).map(() => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 60,
        Math.random() * 40,
        (Math.random() - 0.5) * 60
      ),
      velocity: new THREE.Vector3(-30, -6, 0),
      life: Math.random() * 1
    }));
  }, []);

  const positions = useMemo(() => new Float32Array(starCount * 3), []);

  useFrame((_, delta) => {
    for (let i = 0; i < starCount; i++) {
      const star = stars[i];

      star!.life -= delta;

      if (star!.life <= 0) {
        star!.position.set(
          (Math.random() - 0.5) * 60,
          Math.random() * 40,
          (Math.random() - 0.5) * 60
        );

        star!.life = 0.1 + Math.random() * 1;
      }

      star!.position.addScaledVector(star!.velocity, delta);

      positions[i * 3] = star!.position.x;
      positions[i * 3 + 1] = star!.position.y;
      positions[i * 3 + 2] = star!.position.z;
    }

    pointsRef.current.geometry.attributes.position!.needsUpdate = true;
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
        size={0.1}
        transparent
        opacity={1}
        depthWrite={false}
      />
    </points>
  );
};