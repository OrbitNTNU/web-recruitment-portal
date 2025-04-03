import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim"; 
import { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";

export default function ParticlesBackground() {
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
          enable: false,
        },
        particles: {
          number: {
            value: 40,
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
            value: 2,
            random: true,
          },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.75,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "out",
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
