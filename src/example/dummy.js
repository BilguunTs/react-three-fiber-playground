import React, { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import { lerp } from "../utils";

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.position.x = lerp(
      mesh.current.position.x,
      active ? 3 : -3,
      0.1
    );
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "green"} />
    </mesh>
  );
}
const Sphere = ({ position, ...props }) => {
  const [shouldRotate, setShouldRotate] = useState(false);
  const sphereRef = useRef();
  useFrame(() => {
    if (shouldRotate) {
      sphereRef.current.rotation.x = sphereRef.current.rotation.x += 0.1;
      sphereRef.current.rotation.y = sphereRef.current.rotation.y += 0.1;
    }
  });
  return (
    <mesh
      ref={sphereRef}
      onClick={() => setShouldRotate(!shouldRotate)}
      position={position}
      {...props}
    >
      <sphereBufferGeometry />
      <meshStandardMaterial color={shouldRotate ? "hotpink" : "#90ee90"} />
    </mesh>
  );
};
export default () => {
  return (
    <>
      <Box position={[-2.2, 0, 0]} />
      <Sphere position={[0, 0, 0]} />
      <Box position={[1.2, -1, 0]} />
    </>
  );
};
