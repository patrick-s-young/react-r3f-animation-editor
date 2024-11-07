import * as THREE from 'three';

const CAMERA_POSITION = {
  FRONT: [0, 1, 16],
  LEFT: [16, 1, 0],
  RIGHT: [-16, 1, 0],
  BACK: [0, 1, -16]
}

export default function Camera({ cameraPosition }) {
  const camera = new THREE.PerspectiveCamera( 30, 1, 0.01, 40 );
  camera.position.set( ...CAMERA_POSITION[cameraPosition]);


  return {
    get self() { return camera },
    get quaternion() { return camera.quaternion }
  }
}