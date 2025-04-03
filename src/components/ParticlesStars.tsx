import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";

export default function ParticlesStars() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        autoPlay: true,
        background: {
          color: "transparent",
        },
        fullScreen: {
          enable: true,
      
        },
        detectRetina: true,
        fpsLimit: 120,
        interactivity: {
          detectsOn: "window",
          events: {
            onClick: {
              enable: true,
              mode: "repulse",
            },
            onHover: {
              enable: true,
              mode: "bubble",
              parallax: {
                enable: false,
                force: 2,
                smooth: 10,
              },
            },
            resize: {
              enable: true,
              delay: 0.5,
            },
          },
        },
        particles: {
          number: {
            density: {
              enable: true,
              width: 1920,
              height: 1080,
            },
            value: 110,
          },
          color: {
            value: "#ffffff",
          },
          opacity: {
            value: { min: 0.1, max: 1 },
            animation: {
              enable: true,
              speed: 1,
              sync: false,
              startValue: "random",
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
            animation: {
              enable: false,
            },
          },
          move: {
            enable: true,
            speed: { min: 0.1, max: 0.4 },
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "out",
            },
          },
        },
        pauseOnBlur: true,
        pauseOnOutsideViewport: true,
      }}
    />
  );
}
