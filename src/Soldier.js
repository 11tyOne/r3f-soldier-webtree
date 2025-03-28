import { useGLTF, useAnimations } from '@react-three/drei'
import { useEffect, useMemo, useRef } from 'react'
import { clone } from 'three/examples/jsm/utils/SkeletonUtils'

export default function Soldier({ animationName, position }) {
  const group = useRef()
  const { scene, animations } = useGLTF('/models/Soldier.glb')
  const clonedScene = useMemo(() => clone(scene), [scene])
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    if (actions[animationName]) {
      actions[animationName].reset().fadeIn(0.5).play()
    }
    return () => {
      if (actions[animationName]) actions[animationName].fadeOut(0.5)
    }
  }, [actions, animationName])

  return (
    <primitive
      ref={group}
      object={clonedScene}
      scale={3}
      position={position}
      rotation={[0, Math.PI, 0]}
      castShadow
    />
  )
}
