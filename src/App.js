import React, { Suspense, useState } from "react";
//import { ModelLoader } from "./example";
import { Canvas } from "react-three-fiber";
//import { useSpring, a } from "@react-spring/web";
import { useGLTF, OrbitControls } from "@react-three/drei";
function Model() {
  const gltf = useGLTF("/scene.gltf", true);
  return <primitive object={gltf.scene} dispose={null}></primitive>;
}

export default () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <div style={{ height: "100vh", width: "100wh" }}>
      <Canvas style={{ backgroundColor: "#324444" }}>
        <ambientLight />
        <spotLight intensity={5} position={[0, 4, 0]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};
