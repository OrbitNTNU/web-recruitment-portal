import { useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three";
import { OrbitControls } from "@react-three/drei";

const Earth = () => {
  const meshRef = useRef<THREE.Mesh>(null!);

  const colorMap = useLoader(TextureLoader, "/other/textures/earthmap.jpg");
  const bumpMap = useLoader(TextureLoader, "/other/textures/earthbump.jpg");
  const lightsMap = useLoader(TextureLoader, "/other/textures/earthlights.jpg");
  const specularMap = useLoader(TextureLoader, "/other/textures/earthspec.jpg")

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[3, 64, 64]} />
      <meshPhongMaterial
        map={colorMap}
        bumpMap={bumpMap}
        bumpScale={0.05}
        emissiveMap={lightsMap}
        specularMap={specularMap}
        emissive={new THREE.Color("white")}
        emissiveIntensity={0.5}
      />
    </mesh>
  );
};

const CubeSat = () => {
  const satRef = useRef<THREE.Group>(null!);
  const radius = 4;
  const speed = 0.01;
  const angleRef = useRef(0);

  useFrame(() => {
    angleRef.current += speed;
    if (satRef.current) {
      satRef.current.position.x = radius * Math.cos(angleRef.current);
      satRef.current.position.z = radius * Math.sin(angleRef.current);
      satRef.current.position.y = 0.5;
      satRef.current.rotation.y += 0.02;
    }
  });

  return (
    <group ref={satRef}>
      <mesh>
        <boxGeometry args={[0.2, 0.2, 0.3]} />
        <meshStandardMaterial color="#888" />
      </mesh>
      <mesh position={[-0.25, 0, 0]}>
        <boxGeometry args={[0.05, 0.15, 0.3]} />
        <meshStandardMaterial color="#555" />
      </mesh>
      <mesh position={[0.25, 0, 0]}>
        <boxGeometry args={[0.05, 0.15, 0.3]} />
        <meshStandardMaterial color="#555" />
      </mesh>
    </group>
  );
};

const EarthScene = () => {
  return (
    <Canvas camera={{ position: [8, 4, 8], fov: 50 }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <fog attach="fog" args={["white", 5, 30]} />

      <Suspense fallback={null}>
        <Earth />
        <CubeSat />
      </Suspense>

      <OrbitControls enableZoom={false}/>
    </Canvas>
  );
};

export default EarthScene;
