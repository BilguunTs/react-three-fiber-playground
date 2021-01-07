import React from "react";
import { CubeOrientation } from "./example";

// function Model() {
//   const gltf = useGLTF("/scene.gltf", true);
//   return <primitive object={gltf.scene} dispose={null}></primitive>;
// }

export default () => {
  return (
    <div style={{ height: "100vh", width: "100wh" }}>
      <CubeOrientation />
    </div>
  );
};
