import * as THREE from 'three';

export default function Renderer() {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true } );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.setSize(800, 800)

  return {
    setAnimationLoop: renderer.setAnimationLoop,
    render: (scene, camera) => renderer.render(scene, camera),
    get domElement() { return renderer.domElement },
    get self() { return renderer },
    setSize: (width, height) => renderer.setSize(width, height)
  }
}