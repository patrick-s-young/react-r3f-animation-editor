import * as THREE from 'three';

export default function Floor() {
  // const loader = new THREE.TextureLoader();
  // const texture = loader.load('/checkerboard.png');
  // texture.wrapS = THREE.RepeatWrapping;
  // texture.wrapT = THREE.RepeatWrapping;
  // texture.repeat.x = texture.repeat.y = 40;

  // const material = new THREE.MeshBasicMaterial({
  //   map: texture
  // });

  const materialShadow = new THREE.ShadowMaterial()
  materialShadow.opacity = 0.15

  const geometry = new THREE.PlaneGeometry(100, 100)
  const mesh = new THREE.Mesh( geometry, materialShadow )
  mesh.rotateX(-Math.PI / 2);
  mesh.receiveShadow = true


 
  const material = new THREE.LineBasicMaterial( { color: 0xaaaaaa } );
 
  const points = [];
  let depth = 20
  let x = 20
  const xStep = -2
  const y = 0
  while (x > -20) {
    points.push( new THREE.Vector3( x, y, depth ))
    points.push( new THREE.Vector3( x, y, -depth))
    depth *= -1
    x += xStep
  }
  
  
  const lineSegments = new THREE.BufferGeometry().setFromPoints( points );
  const verticalLines = new THREE.Line( lineSegments, material );
  const horizontalLines = new THREE.Line( lineSegments, material );
  horizontalLines.rotateY(Math.PI / 2)


  const group = new THREE.Group();
  group.add( mesh );
  group.add( verticalLines );
  group.add( horizontalLines );
  return {
    get mesh() { return group }
  }
}