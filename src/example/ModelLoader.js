import React from "react";
import { Canvas } from "react-three-fiber";
import { Loader } from "@react-three/drei";
import Model from "../models/Scull";
export default () => {
  return (
    <Canvas>
      <ambientLight />
      <Model />
      <Loader />
    </Canvas>
  );
};
