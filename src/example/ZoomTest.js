import React, { useState, useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { lerp } from "../utils";

import { a, useSpring, animated } from "react-spring/three";

function AnimatedBox({ onClick = function () {} }) {
  return (
    <mesh
      onClick={onClick.bind(this, [3, 3 - 9])}
      scale={[1, 1, 1]}
      position={[3, 3, -10]}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"orange"} />
    </mesh>
  );
}
const ZoomTest = () => {
  const [focus, setFocus] = useState(null);
  const camRef = useRef();
  const hanleClick = (val) => {
    if (val === undefined) return [0, 0, 0];
    setFocus(val);
  };
  return (
    <Canvas ref={camRef} style={{ backgroundColor: "#eee" }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <AnimatedBox onClick={hanleClick} />
    </Canvas>
  );
};
export default ZoomTest;
