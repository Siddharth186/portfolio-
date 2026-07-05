import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial } from '@react-three/drei'

export default function HeroShape() {
  const ref = useRef()

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime
    ref.current.rotation.x = Math.sin(t * 0.2) * 0.15
    ref.current.rotation.y = t * 0.3
    ref.current.position.y = Math.sin(t * 0.4) * 0.2
  })

  return (
    <mesh ref={ref} position={[0, 0, 0]} scale={1.8}>
      <torusKnotGeometry args={[1, 0.35, 180, 24]} />
      <MeshDistortMaterial
        color="#FF6B35"
        emissive="#FF6B35"
        emissiveIntensity={0.15}
        roughness={0.2}
        metalness={0.8}
        distort={0.15}
        speed={2}
        wireframe
      />
    </mesh>
  )
}
