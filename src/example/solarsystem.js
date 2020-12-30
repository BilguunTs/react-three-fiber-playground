import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";

const radius = 1;
const widthSegments = 6;
const heightSegments = 6;

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
  useFrame(() => {
    meshRef.current.rotation.x = meshRef.current.rotation.x += 0.01;
  });
  return (
    <mesh ref={meshRef} scale={scale} {...rest}>
      <SphereGeometry />
      <meshPhongMaterial color={0x2233ff} emissive={0x112244} />
    </mesh>
  );
};
const SunMesh = ({ scale, ...rest }) => {
  return (
    <mesh scale={scale} {...rest}>
      <SphereGeometry />
      <meshPhongMaterial color={0xffff00} emissive={0xffff00} />;
    </mesh>
  );
};
const MoonMesh = ({ scale, ...rest }) => {
  return (
    <mesh scale={scale} {...rest}>
      <SphereGeometry />
      <meshPhongMaterial color={0x888888} emissive={0x222222} />;
    </mesh>
  );
};
const EarthOrbit = () => {
  const earthOrbitRef = useRef();
  useFrame(() => {
    earthOrbitRef.current.rotation.y += 0.1;
  });
  return (
    <object3D ref={earthOrbitRef}>
      <EarthMesh position={[0, 2, 0]} scale={[0.4, 0.4, 0.4]} />
      <MoonMesh position={[0, 3, 0]} scale={[0.1, 0.1, 0.1]} />
      <axesHelper renderOrder={1} />
    </object3D>
  );
};
export default () => {
  const solarRef = useRef();
  useFrame(() => {
    solarRef.current.rotation.z -= 0.01;
  });
  return (
    <object3D ref={solarRef}>
      <SunMesh />
      <EarthOrbit />
    </object3D>
  );
};
