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
        <Canvas
          camera={{ fov, aspect, near, far, lookAt: [0, 0, 0] }}
          style={{ backgroundColor: "#212121" }}
        >
          <ambientLight />
          <pointLight intensity={intensity} color={color} />
          <SolarSystem />
        </Canvas>
      </div>
    </>
  );
};
