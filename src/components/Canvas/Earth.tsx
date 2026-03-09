import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type * as THREE from "three";

function Satellite({ radius, speed }: { radius: number; speed: number }) {
  const pivot = useRef<THREE.Group>(null!);

  useFrame(() => {
    pivot.current.rotation.y += speed;
  });

  return (
    <group ref={pivot}>
      <mesh position={[radius, 0, 0]}>
        <boxGeometry args={[0.15, 0.15, 0.15]} />
        <meshStandardMaterial color="silver" />
      </mesh>
    </group>
  );
}

export const Earth = ({
  position,
  texture,
}: {
  position: THREE.Vector3;
  texture: THREE.Texture;
}) => {
  const earthRef = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group position={position}>
      <mesh ref={earthRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial map={texture} />
      </mesh>

      <Satellite radius={3} speed={0.01} />
      <Satellite radius={3.5} speed={0.008} />
      <Satellite radius={4} speed={0.006} />
    </group>
  );
};