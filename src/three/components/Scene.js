import * as THREE from 'three';

const DEBUG_BACKGROUND_COLOR = 0x888888

export default function Scene() {
  const scene = new THREE.Scene()
  scene.name = 'scene'
 // scene.background = new THREE.Color(DEBUG_BACKGROUND_COLOR)
  
  // ALLOW SINGLE ELEMENT OR ARRAY TO BE PASSED
  const add = (element) => {
    if (Array.isArray(element)) { 
      element.forEach(item => {
        scene.add(item);
      });
    } else {
      scene.add(element)
    }
  }


  return {
    get self() { return scene },
    add
  }
}