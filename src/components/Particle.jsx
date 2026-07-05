import { useEffect, useMemo, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

// @tsparticles/react 4.x + @tsparticles/slim 4.x simplified API: loadSlim()
// itself returns a Promise that resolves once the engine is initialised and
// the slim preset is registered. There is no separate initParticlesEngine
// anymore — that's why the previous build would fail to import it.
//
// The options object uses the renamed v2+ shape:
//   density.value_area -> density.area
//   line_linked        -> links
//   opacity.anim       -> opacity.animation
//   events.onclick     -> events.onClick
//   modes.push (particles_nb) -> modes.push (quantity)
//   retina_detect      -> detectRetina
function Particle() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    loadSlim().then(() => {
      if (!cancelled) setReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const options = useMemo(
    () => ({
      particles: {
        number: {
          value: 160,
          density: { enable: true, area: 1500 },
        },
        links: { enable: false, opacity: 0.03 },
        move: { direction: "right", speed: 0.05 },
        size: { value: 1 },
        opacity: {
          animation: { enable: true, speed: 1, opacity_min: 0.05 },
        },
      },
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
        },
        modes: {
          push: { quantity: 1 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (!ready) return null;
  return <Particles id="tsparticles" options={options} />;
}

export default Particle;
