import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

export const WarpLines = () => {
    const linesRef = useRef<THREE.LineSegments>(null!);
    const lineCount = 1500;

    const positions = useMemo(() => {
        const arr = new Float32Array(lineCount * 6);

        for (let i = 0; i < lineCount; i++) {
            const x = (Math.random() - 0.5) * 40;
            const y = (Math.random() - 0.5) * 40;
            const z = Math.random() * -200;

            arr[i * 6] = x;
            arr[i * 6 + 1] = y;
            arr[i * 6 + 2] = z;

            arr[i * 6 + 3] = x * 1.02;
            arr[i * 6 + 4] = y * 1.02;
            arr[i * 6 + 5] = z + 8;
        }

        return arr;
    }, []);

    useFrame(({ clock }) => {
        const lines = linesRef.current;
        if (!lines) return;

        const geom = lines.geometry;
        const attr = geom.getAttribute("position");
        if (!(attr instanceof THREE.BufferAttribute)) return;

        for (let i = 0; i < lineCount; i++) {
            const i0 = i * 2;
            const i1 = i * 2 + 1;

            const speed = 2 + clock.elapsedTime * 3;

            const z0 = attr.getZ(i0) + speed;
            const z1 = attr.getZ(i1) + speed;

            if (z0 > 20) {
                const x = (Math.random() - 0.5) * 40;
                const y = (Math.random() - 0.5) * 40;
                const z = Math.random() * -200;

                attr.setXYZ(i0, x, y, z);
                attr.setXYZ(i1, x * 1.02, y * 1.02, z + 8);
            } else {
                attr.setZ(i0, z0);
                attr.setZ(i1, z1);
            }
        }

        attr.needsUpdate = true;
    });


    return (
        <lineSegments ref={linesRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    array={positions}
                    count={positions.length / 3}
                    itemSize={3}
                />
            </bufferGeometry>
            <lineBasicMaterial color="white" transparent opacity={1} />
        </lineSegments>
    );
};
