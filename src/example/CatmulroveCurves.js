import React from "react";
import { Canvas } from "react-three-fiber";
import * as THREE from "three";

const pipeSpline = [
  new THREE.Vector3(0, 10, -10),
  new THREE.Vector3(10, 0, -10),
  new THREE.Vector3(20, 0, 0),
  new THREE.Vector3(30, 0, 10),
  new THREE.Vector3(30, 0, 20),
  new THREE.Vector3(20, 0, 30),
  new THREE.Vector3(10, 0, 30),
  new THREE.Vector3(0, 0, 30),
  new THREE.Vector3(-10, 10, 30),
  new THREE.Vector3(-10, 20, 30),
  new THREE.Vector3(0, 30, 30),
  new THREE.Vector3(10, 30, 30),
  new THREE.Vector3(20, 30, 15),
  new THREE.Vector3(10, 30, 10),
  new THREE.Vector3(0, 30, 10),
  new THREE.Vector3(-10, 20, 10),
  new THREE.Vector3(-10, 10, 10),
  new THREE.Vector3(0, 0, 10),
  new THREE.Vector3(10, -10, 10),
  new THREE.Vector3(20, -15, 10),
  new THREE.Vector3(30, -15, 10),
  new THREE.Vector3(40, -15, 10),
  new THREE.Vector3(50, -15, 10),
  new THREE.Vector3(60, 0, 10),
  new THREE.Vector3(70, 0, 0),
  new THREE.Vector3(80, 0, 0),
  new THREE.Vector3(90, 0, 0),
  new THREE.Vector3(100, 0, 0),
];
const SampleCurve = () => {
  return (
    <mesh>
      <CatmullRomCurves3 args={pipeSpline} />
    </mesh>
  );
};

export default () => {
  <Canvas style={{ background: "#324444" }}>
    <SampleCurve />
  </Canvas>;
};
