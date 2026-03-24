"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Satellite } from "./Satellite";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const WireEarth = () => {
  const groupRef = useRef<THREE.Group>(null!);
  const radius = 3;

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
    }
  });

  const geometries = useMemo(() => {
    const result: THREE.BufferGeometry[] = [];

    for (let i = -80; i <= 80; i += 10) {
      const lat = THREE.MathUtils.degToRad(i);
      const points: THREE.Vector3[] = [];

      for (let j = 0; j <= 360; j += 5) {
        const lon = THREE.MathUtils.degToRad(j);

        const x = radius * Math.cos(lat) * Math.cos(lon);
        const y = radius * Math.sin(lat);
        const z = radius * Math.cos(lat) * Math.sin(lon);

        points.push(new THREE.Vector3(x, y, z));
      }

      const geo = new THREE.BufferGeometry().setFromPoints(points);
      result.push(geo);
    }

    for (let i = 0; i < 360; i += 10) {
      const lon = THREE.MathUtils.degToRad(i);
      const points: THREE.Vector3[] = [];

      for (let j = -90; j <= 90; j += 5) {
        const lat = THREE.MathUtils.degToRad(j);

        const x = radius * Math.cos(lat) * Math.cos(lon);
        const y = radius * Math.sin(lat);
        const z = radius * Math.cos(lat) * Math.sin(lon);

        points.push(new THREE.Vector3(x, y, z));
      }

      const geo = new THREE.BufferGeometry().setFromPoints(points);
      result.push(geo);
    }

    return result;
  }, []);

  const material = useMemo(
    () =>
      new THREE.LineBasicMaterial({
        color: "white",
        transparent: true,
        opacity: 0.7,
      }),
    []
  );

  const occluder = useMemo(() => {
  return new THREE.Mesh(
    new THREE.SphereGeometry(radius, 64, 64),
    new THREE.MeshBasicMaterial({
      color: "black",
      transparent: false,
      depthWrite: true,
    })
  );
}, []);

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {geometries.map((geo, i) => (
        <lineSegments key={i} geometry={geo} material={material} />
      ))}
    </group>
  );
}

const EarthWireframe = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 40 }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.6} />
      <Satellite />
      <WireEarth />
    </Canvas>
  );
}

export default EarthWireframe;