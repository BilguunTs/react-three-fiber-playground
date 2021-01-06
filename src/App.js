import React from "react";
import { ZoomTest } from "./example";
import { useGLTF } from "@react-three/drei";

// function Model() {
//   const gltf = useGLTF("/scene.gltf", true);
//   return <primitive object={gltf.scene} dispose={null}></primitive>;
// }

export default () => {
  return (
    <div style={{ height: "100vh", width: "100wh" }}>
      <ZoomTest />
    </div>
  );
};
