import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

// Computers for the computers screen
const Computers = ({ isMobile }) => {
  // Load the 3D model of the computer
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    // The 3D model of the computer
    <mesh>
      {/* Lighting */}
      <hemisphereLight intensity={0.15} groundColor="black" />
      {/* Spotlight */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      {/* Point light */}
      <pointLight intensity={1} />
      {/* The computer itself */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

// Canvas for the computers screen
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of isMobile based on the current media query
    setIsMobile(mediaQuery.matches);

    // Add a callback function to be called when the media query changes
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Clean up the listener when the component unmounts
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // Return the Canvas component
  return (
    // Canvas component with the specified props
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* Handle loading */}
      <Suspense fallback={<CanvasLoader />}>
        {/* Handle camera controls */}
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        {/* Render the computers */}
        <Computers isMobile={isMobile} />
      </Suspense>

      {/* Handle loading */}
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
