import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";

const radius = 1;
const widthSegments = 6;
const heightSegments = 6;

const EarthOrbit = () => {};

const SphereGeometry = () => (
  <sphereBufferGeometry args={[radius, widthSegments, heightSegments]} />
);
// const earthMaterial = new THREE.MeshPhongMaterial({color: 0x2233FF, emissive: 0x112244});
// const earthMesh = new THREE.Mesh(sphereGeometry, earthMaterial);
// earthMesh.position.x = 10;
// scene.add(earthMesh);
// objects.push(earthMesh);
const EarthMesh = ({ scale, ...rest }) => {
  const meshRef = useRef();

  return (
    <mesh ref={meshRef} position={[3, 0, 0]} scale={scale} {...rest}>
      <SphereGeometry />
      <meshPhongMaterial color={0x2233ff} emissive={0x112244} />
    </mesh>
  );
};
const SunMesh = ({ scale, ...rest }) => {
  const meshRef = useRef();
  useFrame(() => {
    meshRef.current.rotation.y = meshRef.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={meshRef} scale={scale} {...rest}>
      <SphereGeometry />
      <EarthMesh scale={[0.4, 0.4, 0.4]} />
      <meshPhongMaterial color={0xffff00} emissive={0xffff00} />;
    </mesh>
  );
};
export default () => {
  return (
    <>
      <SunMesh scale={[1, 1, 1]} />
    </>
  );
};
