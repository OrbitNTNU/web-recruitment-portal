import { useMemo } from "react";
import * as THREE from "three";
import { theme } from "@/styles/colors";

export function useEarthTexture() {
  return useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 512;

    const ctx = canvas.getContext("2d")!;

    const { colors } = theme;

    ctx.fillStyle = colors.berryBlast;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = colors.emeraldFizz;

    for (let i = 0; i < 25; i++) {
      ctx.beginPath();

      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const radius = Math.random() * 70 + 30;

      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;

    return texture;
  }, []);
}