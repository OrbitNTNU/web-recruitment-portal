import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim"; 
import { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { useStepStore } from "@/stores/useStepStore";

export default function ParticlesBackground() {
  const { step } = useStepStore();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "transparent",
        },
        fullScreen: {
          enable: true,
        },
        particles: {
          number: {
            value: 10 + step * 10,
            density: {
              enable: true,
              value_area: 700,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 1, 
            random: true,
          },
          size: {
            value:  3, 
            random: true,
            animation: {
              enable: true,
              speed: 1,
              sync: false,
              minimumValue: 1,
            },
          },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.5, 
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.8, 
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "out",
            },
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200,
            },
            trail: {
              enable: false, 
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            push: {
              quantity: 2,
            },
          },
        },
      }}
    />
  );
}
