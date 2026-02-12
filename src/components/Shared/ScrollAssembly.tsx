"use client";

import { useScroll, useTransform } from "framer-motion";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export function CubeSatAssembly() {
  const { scrollYProgress } = useScroll();

  const group = useRef<THREE.Group>(null!);

  const busProgress = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const panelProgress = useTransform(scrollYProgress, [0.3, 0.55], [0, 1]);
  const antennaProgress = useTransform(scrollYProgress, [0.55, 0.7], [0, 1]);

  useFrame(() => {
    if (!group.current) return;

    const bus = group.current.getObjectByName("bus") as THREE.Mesh;
    const panelL = group.current.getObjectByName("panelL") as THREE.Mesh;
    const panelR = group.current.getObjectByName("panelR") as THREE.Mesh;
    const antenna = group.current.getObjectByName("antenna") as THREE.Mesh;

    const b = busProgress.get();
    const p = panelProgress.get();
    const a = antennaProgress.get();

    bus.scale.setScalar(b);
    if (Array.isArray(bus.material)) {
      bus.material.forEach((mat) => {
        if ('opacity' in mat) (mat as THREE.MeshStandardMaterial).opacity = b;
      });
    } else {
      (bus.material as THREE.MeshStandardMaterial).opacity = b;
    }

    panelL.position.x = THREE.MathUtils.lerp(-3, -1.5, p);
    panelR.position.x = THREE.MathUtils.lerp(3, 1.5, p);
    if (Array.isArray(panelL.material)) {
      panelL.material.forEach((mat) => {
        if ('opacity' in mat) (mat as THREE.MeshStandardMaterial).opacity = p;
      });
    } else {
      (panelL.material as THREE.MeshStandardMaterial).opacity = p;
    }
    if (Array.isArray(panelR.material)) {
      panelR.material.forEach((mat) => {
        if ('opacity' in mat) (mat as THREE.MeshStandardMaterial).opacity = p;
      });
    } else {
      (panelR.material as THREE.MeshStandardMaterial).opacity = p;
    }

    antenna.position.y = THREE.MathUtils.lerp(3, 1.2, a);
    if (Array.isArray(antenna.material)) {
      antenna.material.forEach((mat) => {
        if ('opacity' in mat) (mat as THREE.MeshStandardMaterial).opacity = a;
      });
    } else {
      (antenna.material as THREE.MeshStandardMaterial).opacity = a;
    }

    group.current.rotation.y += 0.002;
  });

  return (
    <group ref={group}>
      <mesh name="bus">
        <boxGeometry args={[1.6, 1.6, 1.6]} />
        <meshStandardMaterial
          color="#dddddd"
          transparent
          opacity={0}
        />
      </mesh>

      <mesh name="panelL" position={[-3, 0, 0]}>
        <boxGeometry args={[2.2, 0.15, 1.2]} />
        <meshStandardMaterial
          color="#8fb6ff"
          transparent
          opacity={0}
        />
      </mesh>

      <mesh name="panelR" position={[3, 0, 0]}>
        <boxGeometry args={[2.2, 0.15, 1.2]} />
        <meshStandardMaterial
          color="#8fb6ff"
          transparent
          opacity={0}
        />
      </mesh>

      <mesh name="antenna" position={[0, 3, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 1.8]} />
        <meshStandardMaterial
          color="#ffffff"
          transparent
          opacity={0}
        />
      </mesh>

      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 3]} intensity={1} />
    </group>
  );
}
