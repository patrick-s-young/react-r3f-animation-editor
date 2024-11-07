import * as THREE from 'three';

export default function Lights() {
  const ambientLight = new THREE.AmbientLight( 0xffffff, 2 );

  // const hemisphere = new THREE.HemisphereLight(0x0000aa, 0x555555, 1.5);
  // hemisphere.position.set( 0.5, 1, 0.25 );

  const directional = new THREE.DirectionalLight(0xffffff, 4)
  directional.position.set( 0, 4, 4)
  directional.castShadow = true

  const point = new THREE.PointLight(0xffffff);
  point.position.set(0, 15, 0);
  point.castShadow = true;
  point.shadow.mapSize.width = 2048;
  point.shadow.mapSize.height = 2048;

  const helper = new THREE.DirectionalLightHelper( directional );
  
  return {
    getLights: () => [ambientLight, directional]
  }
}