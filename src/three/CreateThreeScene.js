import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Scene from './components/Scene'
import Camera from './components/Camera'
import Lights from './components/Lights'
import AnimationSource from './components/AnimationSource'
import Floor from './components/Floor'
import Renderer from './components/Renderer'

const MESH_SCALER = 0.025
const ASSET_PATH = '/Twist Dance.fbx'

export default function CreateThreeScene({ cameraPosition }) {
  // SCENE SETUP
  const scene = Scene();
  const camera = Camera({ cameraPosition });
  const lights = Lights();
  scene.add(lights.getLights());
  // FBX LOADER
  const animationSource = AnimationSource({
    assetPath: ASSET_PATH,
    meshScaler: MESH_SCALER,
    onLoadCallback: handleOnLoad
  })
  scene.add(animationSource.mesh)
  // FLOOR
  const floor = Floor()
  scene.add(floor.mesh)
  // RENDERER
  const renderer = Renderer();
  //document.body.appendChild(renderer.domElement);
  const clock = new THREE.Clock();
  // ORBIT CONTROLS
  const controls = new OrbitControls(camera.self, renderer.domElement)
  controls.target.set(0, 1, 0)
  controls.update()


  function handleOnLoad() {
    console.log('Animation source loaded')
    renderer.setAnimationLoop(animationLoopCallback);
  }

  function animationLoopCallback(timestamp) {
    const dt = clock.getDelta();
    animationSource.update(dt)
    renderer.render(scene.self, camera.self)
  }

  function dispose() {
    renderer.dispose()
  }

  return {
    renderer,
    camera,
    dispose
  }
}
