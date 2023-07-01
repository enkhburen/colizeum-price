import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const ReactParticles = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        autoPlay: true,
        background: {
          opacity: 0,
        },
        defaultThemes: {},
        delay: 0,
        fullScreen: {
          enable: true,
          zIndex: 1,
        },
        detectRetina: true,
        duration: 0,
        fpsLimit: 120,
        manualParticles: [],
        particles: {
          bounce: {
            horizontal: {
              random: {
                enable: true,
                minimumValue: 0.1,
              },
              value: 1,
            },
            vertical: {
              random: {
                enable: false,
                minimumValue: 0.1,
              },
              value: 1,
            },
          },
          color: {
            value: "#ffffff",
            animation: {
              h: {
                count: 0,
                enable: true,
                offset: 0,
                speed: 50,
                delay: 0,
                decay: 0,
                sync: false,
              },
              s: {
                count: 0,
                enable: false,
                offset: 0,
                speed: 1,
                delay: 0,
                decay: 0,
                sync: true,
              },
              l: {
                count: 0,
                enable: false,
                offset: 0,
                speed: 1,
                delay: 0,
                decay: 0,
                sync: true,
              },
            },
          },
          groups: {},
          move: {
            angle: {
              offset: 0,
              value: 90,
            },
            attract: {
              distance: 200,
              enable: false,
              rotate: {
                x: 3000,
                y: 3000,
              },
            },
            center: {
              x: 50,
              y: 50,
              mode: "percent",
              radius: 0,
            },
            decay: 0,
            distance: {},
            direction: "none",
            drift: 0,
            enable: true,
            gravity: {
              acceleration: 9.81,
              enable: false,
              inverse: false,
              maxSpeed: 50,
            },
            path: {
              clamp: true,
              delay: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 0,
              },
              enable: false,
              options: {},
            },
            outModes: {
              default: "out",
              bottom: "out",
              left: "out",
              right: "out",
              top: "out",
            },
            random: false,
            size: false,
            speed: 1,
            spin: {
              acceleration: 0,
              enable: false,
            },
            straight: false,
            trail: {
              enable: false,
              length: 10,
              fill: {},
            },
            vibrate: false,
            warp: false,
          },
          number: {
            density: {
              enable: true,
              width: 1920,
              height: 1080,
            },
            limit: 0,
            value: 100,
          },
          opacity: {
            random: {
              enable: true,
              minimumValue: 0.1,
            },
            value: {
              min: 0.1,
              max: 0.3,
            },
            animation: {
              count: 0,
              enable: true,
              speed: 0.5,
              decay: 0,
              delay: 0,
              sync: false,
              mode: "auto",
              startValue: "random",
              destroy: "none",
              minimumValue: 0.3,
            },
          },
          reduceDuplicates: false,
          shape: {
            close: true,
            fill: true,
            options: {},
            type: "circle",
          },
          size: {
            random: {
              enable: true,
              minimumValue: 1,
            },
            value: {
              min: 1,
              max: 3,
            },
            animation: {
              count: 0,
              enable: true,
              speed: 3,
              decay: 0,
              delay: 0,
              sync: false,
              mode: "auto",
              startValue: "random",
              destroy: "none",
              minimumValue: 1,
            },
          },
          stroke: {
            width: 0,
          },
          zIndex: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 0,
            opacityRate: 1,
            sizeRate: 1,
            velocityRate: 1,
          },

          links: {
            blink: false,
            color: {
              value: "random",
            },
            consent: false,
            distance: 100,
            enable: true,
            frequency: 1,
            opacity: 1,
            shadow: {
              blur: 5,
              color: {
                value: "#000",
              },
              enable: false,
            },
            triangles: {
              enable: false,
              frequency: 1,
            },
            width: 1,
            warp: false,
          },
        },
        pauseOnBlur: false,
        pauseOnOutsideViewport: false,
        responsive: [],
        smooth: true,
        style: {},
        themes: [],
        zLayers: 100,
        emitters: [],
      }}
    />
  );
};

export default ReactParticles;
