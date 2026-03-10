import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

export const Satellite = ({ orbitRadius = 5.2 }: { orbitRadius?: number }) => {
  const ref = useRef<THREE.Group>(null!)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    const orbitSpeed = 0.35
    const x = orbitRadius * Math.cos(t * orbitSpeed)
    const z = orbitRadius * Math.sin(t * orbitSpeed)

    const float = Math.sin(t * 1.8) * 0.08

    if (ref.current) {
      ref.current.position.set(x, float, z)
      ref.current.rotation.y += 0.02
    }
  })

  const material = useMemo(
    () =>
      new THREE.LineBasicMaterial({
        color: "white",
        transparent: true,
        opacity: 0.8,
      }),
    []
  )

  return (
    <group ref={ref}>

      {/* cube body */}
      <lineSegments
        geometry={new THREE.EdgesGeometry(new THREE.BoxGeometry(0.18, 0.18, 0.18))}
        material={material}
      />

      {/* solar panels */}
      <lineSegments
        geometry={new THREE.EdgesGeometry(new THREE.BoxGeometry(0.5, 0.02, 0.18))}
        material={material}
        position={[0.35, 0, 0]}
      />

      <lineSegments
        geometry={new THREE.EdgesGeometry(new THREE.BoxGeometry(0.5, 0.02, 0.18))}
        material={material}
        position={[-0.35, 0, 0]}
      />

    </group>
  )
}