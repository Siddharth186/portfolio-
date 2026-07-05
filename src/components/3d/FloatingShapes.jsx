import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function FloatingShapes() {
  const g1 = useRef()
  const g2 = useRef()

  useFrame((s) => {
    const t = s.clock.elapsedTime
    if (g1.current) {
      g1.current.position.y = Math.sin(t * 0.3) * 0.4
      g1.current.rotation.x = t * 0.15
      g1.current.rotation.y = t * 0.2
    }
    if (g2.current) {
      g2.current.position.y = Math.sin(t * 0.25 + 1) * 0.35
      g2.current.rotation.x = -t * 0.1
      g2.current.rotation.z = t * 0.12
    }
  })

  return (
    <group>
      <mesh ref={g1} position={[-3, 0.5, -5]}>
        <octahedronGeometry args={[0.5, 0]} />
        <meshBasicMaterial color="#7C3AED" transparent opacity={0.04} wireframe />
      </mesh>
      <mesh ref={g2} position={[3.5, -0.8, -4]}>
        <icosahedronGeometry args={[0.4, 0]} />
        <meshBasicMaterial color="#A78BFA" transparent opacity={0.04} wireframe />
      </mesh>
    </group>
  )
}
