import React, { Suspense } from "react";
//import { ModelLoader } from "./example";
import { Canvas } from "react-three-fiber";
import { a, useTransition } from "@react-spring/web";
import { useGLTF, OrbitControls, useProgress } from "@react-three/drei";
function Model() {
  const gltf = useGLTF("/scene.gltf", true);
  return <primitive object={gltf.scene} dispose={null}></primitive>;
}
// function Loader() {
//   const { active, progress } = useProgress();
//   const transition = useTransition(active, {
//     from: { opacity: 1, progress: 0 },
//     leave: { opacity: 0 },
//     update: { progress },
//   });
//   return transition(
//     ({ progress, opacity }, active) =>
//       active && (
//         <a.div className="loading" style={{ opacity }}>
//           <div className="loading-bar-container">
//             <a.div className="loading-bar" style={{ width: progress }}></a.div>
//           </div>
//         </a.div>
//       )
//   );
// }
export default () => {
  //const cameraRef = useRef();

  return (
    <div style={{ height: "100vh", width: "100wh" }}>
      <Canvas style={{ backgroundColor: "#324444" }}>
        <ambientLight />
        <spotLight intensity={10} position={[0, 4, 0]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};
