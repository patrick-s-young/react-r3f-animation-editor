import { useRef, useLayoutEffect } from 'react'
import CreateThreeScene from '../../three/CreateThreeScene'
import './threePanel.scss'


export default function ThreePanel({ size, cameraPosition }) {
  const { width, height } = size
  const threeSceneRef = useRef(null)
  const threeSceneParentRef = useRef(null)
  const _style = {
    width,
    height
  }

  useLayoutEffect(() => {
    if (!threeSceneRef.current) {
      console.log('size', size)
      threeSceneRef.current = CreateThreeScene({ cameraPosition })
      threeSceneParentRef.current.appendChild(threeSceneRef.current.renderer.domElement)
      threeSceneRef.current.renderer.setSize(width, height)
      threeSceneRef.current.camera.self.aspect = width / height
      threeSceneRef.current.camera.self.updateProjectionMatrix()
    }
    return () => {
      //threeSceneRef.current.dispose()
      threeSceneRef.current = null
    }
  }, [])


  return (
    <div ref={threeSceneParentRef} style={_style}></div>
  )
}
