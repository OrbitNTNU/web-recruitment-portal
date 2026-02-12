import { useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

type StarData = {
  mesh: THREE.Mesh;
  velocity: THREE.Vector3;
  life: number;
};

export const ShootingStars = () => {
  const { scene } = useThree();
  const stars = useRef<StarData[]>([]);

  const geometry = useMemo(
    () => new THREE.SphereGeometry(0.08, 8, 8),
    []
  );
  const material = useMemo(
    () => new THREE.MeshBasicMaterial({ color: "white" }),
    []
  );

  useFrame(() => {
    if (Math.random() < 0.06) {
      const mesh = new THREE.Mesh(geometry, material);

      mesh.position.set(
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 40,
        -20
      );

      const velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 1.2,
        (Math.random() - 0.5) * 1.2,
        1.5
      );

      stars.current.push({ mesh, velocity, life: 80 });
      scene.add(mesh);
    }

    stars.current.forEach((star, i) => {
      star.mesh.position.add(star.velocity);
      star.life--;

      if (star.life <= 0) {
        scene.remove(star.mesh);
        stars.current.splice(i, 1);
      }
    });
  });

  return null;
};
