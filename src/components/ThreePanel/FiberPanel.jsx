import { Suspense, useRef, useEffect, useState } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import GLTF from './GLTF'
import Floor from './Floor'

const CAMERA_POSITION = {
  FRONT: [0, 1, 12],
  LEFT: [12, 1, 0],
  RIGHT: [-12, 1, 0],
  BACK: [0, 1, -12]
}

export default function FiberPanel({ cameraPosition }) {

  return (
    <Canvas 
      width="100%" 
      height="100%" 
      castShadow
    >
      <PerspectiveCamera 
        makeDefault
        position={CAMERA_POSITION[cameraPosition]}
        fov={30}
      />
      <ambientLight />
      <directionalLight position={[10, 10, 10]} castshadow />
      <Suspense fallback={null}>
        <GLTF />
        <Floor />
        <OrbitControls
          target={new THREE.Vector3(0, 2, 0)}
        />
      </Suspense>
    </Canvas>
  )
}