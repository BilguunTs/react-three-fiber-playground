import React, { useEffect, useRef } from "react";
import { Canvas } from "react-three-fiber";

import { SolarSystem } from "./example";
//import { Box } from "drei";
const color = 0xffffff;
const intensity = 3;
const fov = 40;
const aspect = 2; // the canvas default
const near = 0.1;
const far = 1000;
export default () => {
  const cameraRef = useRef();

  return (
    <>
      <div style={{ height: "100vh", width: "100wh" }}>
        <Canvas style={{ backgroundColor: "#212121" }}>
          <perspectiveCamera
            args={[fov, aspect, near, far]}
            ref={cameraRef}
            lookAt={[0, 0, 0]}
            position={[100, 150, 0]}
            up={[0, 0, 10]}
          />
          <ambientLight />
          <pointLight intensity={intensity} color={color} />
          <SolarSystem />
        </Canvas>
      </div>
    </>
  );
};
