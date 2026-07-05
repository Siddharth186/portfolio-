import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function WireframeSphere() {
  const ref = useRef()

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.x = state.clock.elapsedTime * 0.1
    ref.current.rotation.y = state.clock.elapsedTime * 0.15
  })

  return (
    <mesh ref={ref} position={[0, 0.5, -4]} scale={2.5}>
      <icosahedronGeometry args={[1, 1]} />
      <meshBasicMaterial
        color="#3B82F6"
        wireframe
        transparent
        opacity={0.08}
      />
    </mesh>
  )
}
