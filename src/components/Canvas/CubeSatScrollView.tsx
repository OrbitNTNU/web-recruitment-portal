import { Canvas } from "@react-three/fiber";
import { CubeSatAssembly } from "@/components/Shared/ScrollAssembly";

export function CubeSatScrollView() {
  return (
    <div className="fixed right-0 top-0 z-20 h-full w-[28rem] pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <CubeSatAssembly />
      </Canvas>
    </div>
  );
}
