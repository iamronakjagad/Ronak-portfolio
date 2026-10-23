import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function FloatingPoints() {
  const ref = useRef();
  const count = 180; // Lightweight particle count for butter-smooth 60fps

  const positions = useMemo(() => {
    const coords = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      coords[i] = (Math.random() - 0.5) * 10;
      coords[i + 1] = (Math.random() - 0.5) * 10;
      coords[i + 2] = (Math.random() - 0.5) * 4;
    }
    return coords;
  }, [count]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.03;
      ref.current.rotation.x += delta * 0.015;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        transparent
        color="#6366f1"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.35}
      />
    </points>
  );
}

export function ParticleBackground() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none w-full h-full opacity-60 dark:opacity-40">
      <Canvas
        camera={{ position: [0, 0, 3] }}
        gl={{ antialias: false, powerPreference: "low-power" }}
      >
        <FloatingPoints />
      </Canvas>
    </div>
  );
}
