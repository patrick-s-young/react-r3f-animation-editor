// react
import React, { useRef,  useEffect} from 'react';
// zustand
import { useStore } from '../../store';
// drei
import { useGLTF, useAnimations } from '@react-three/drei'

// core script generated by 'gltfjsx' with useEffect and 
// useStore added to control animation playback
export default function GLTF({ ...props }) {
  const { actionName, prevActionName } = useStore(state => state);
  console.log('actionName', actionName)
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/dancing_y_bot.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    if (prevActionName !== undefined) {
      actions[prevActionName].fadeOut(0.5);
    }
    actions[actionName]
      .reset()
      .setEffectiveTimeScale(1)
      .setEffectiveWeight(1)
      .fadeIn(0.5)
      .play();
  }, [actions, actionName, prevActionName])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.025}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh name="Alpha_Joints" geometry={nodes.Alpha_Joints.geometry} material={materials.Alpha_Joints_MAT} skeleton={nodes.Alpha_Joints.skeleton}  />
          <skinnedMesh name="Alpha_Surface" geometry={nodes.Alpha_Surface.geometry} material={materials.Alpha_Body_MAT} skeleton={nodes.Alpha_Surface.skeleton}  />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/dancing_y_bot.glb')