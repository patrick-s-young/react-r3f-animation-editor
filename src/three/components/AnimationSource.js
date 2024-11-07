import * as THREE from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import AnimationHandler from './AnimationHandler'

const DEFAULT_ANIMATION_NAME = 'mixamo.com'

export default function AnimationSource ({ 
  assetPath, 
  meshScaler, 
  onLoadCallback 
  }) {

  // LOADER
  const fbxLoader = new FBXLoader();
  // MESH
  const mesh = new THREE.Group();
  mesh.matrixAutoUpdate = true;
  //mesh.visible = false;
  // ANIMATION HANDLER
  const animationHandler = AnimationHandler();

  // LOAD MODEL
  fbxLoader.load(assetPath, 
    (object) => {
      object.scale.multiplyScalar(meshScaler)
      object.traverse((node) => { 
        if (node.isMesh) { 
          node.castShadow = true; 
          node.receiveShadow = true 
        } 
      })
      object.position.set(0, 0, 0);
      console.log('FBX object loaded', object)
      mesh.add(object);
      animationHandler.init(object);
      animationHandler.playClipAction(DEFAULT_ANIMATION_NAME);
      if (onLoadCallback !== undefined) onLoadCallback();
    }
  )


  // CHARACTER ANIMATION LOOP
  const update = (deltaSeconds) => {
    if (mesh.visible === false) return;
    // UPDATE MIXER
    animationHandler.update(deltaSeconds);
  }


  return {
    get mesh() { return mesh },
    update
  }
}
