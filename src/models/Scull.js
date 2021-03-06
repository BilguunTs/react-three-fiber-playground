/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: jvitorsouzadesign (https://sketchfab.com/jvitorsouzadesign)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/models/eeed09437afb4e1ea8a6ff3b0e9964ad
title: Skull Salazar (Downloadable)
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei/useGLTF";
// function Model(props) {
//   const group = useRef();
//   const { nodes, materials } = useGLTF("/scene.gltf");
//   return (
//     <group ref={group} {...props} dispose={null}>
//       <group rotation={[-Math.PI / 2, 0, 0]}>
//         <group position={[0, 0, 0]} rotation={[0, 0.02, 0]}>
//           <group rotation={[Math.PI / 2, 0, 0]}>
//             <mesh
//               material={materials.Rosa_material}
//               geometry={nodes.defaultMaterial.geometry}
//             />
//             <mesh
//               material={materials.defaultMat_material}
//               geometry={nodes.defaultMaterial_1.geometry}
//             />
//           </group>
//         </group>
//       </group>
//     </group>
//   );
// }

// useGLTF.preload("/scene.gltf");
function Model() {
  const gltf = useGLTF("/scene.gltf", true);
  return (
    <mesh>
      <primitive object={gltf.scene} dispose={null}></primitive>
    </mesh>
  );
}
export default Model;
