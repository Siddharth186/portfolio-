import { useRef, useCallback } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Rings() {
  const r1 = useRef()
  const r2 = useRef()
  const r3 = useRef()
  const g1 = useRef()
  const g2 = useRef()
  const mouse = useRef({ x: 0, y: 0 })

  const handleMove = useCallback((e) => {
    mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
    mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1
  }, [])

  useFrame((s) => {
    const t = s.clock.elapsedTime
    const mx = mouse.current.x * 0.1
    const my = mouse.current.y * 0.05
    if (r1.current) { r1.current.rotation.x = t * 0.12 + my; r1.current.rotation.z = t * 0.09 + mx }
    if (r2.current) { r2.current.rotation.x = -t * 0.08 + my; r2.current.rotation.z = t * 0.11 + mx }
    if (r3.current) { r3.current.rotation.y = t * 0.06 + mx; r3.current.rotation.x = t * 0.04 + my }
    if (g1.current) {
      g1.current.position.y = Math.sin(t * 0.3) * 0.5
      g1.current.rotation.x = t * 0.15 + my * 0.5
      g1.current.rotation.y = t * 0.2 + mx * 0.5
    }
    if (g2.current) {
      g2.current.position.y = Math.sin(t * 0.25 + 1.5) * 0.4
      g2.current.rotation.x = -t * 0.1 + my * 0.5
      g2.current.rotation.z = t * 0.12 + mx * 0.5
    }
  })

  return (
    <group onPointerMove={handleMove}>
      <mesh ref={r1} position={[2.5, 1.5, -6]}>
        <ringGeometry args={[1.2, 1.5, 64]} />
        <meshBasicMaterial color="#7C3AED" transparent opacity={0.06} side={2} />
      </mesh>
      <mesh ref={r2} position={[-2.5, -1, -7]}>
        <ringGeometry args={[0.9, 1.2, 64]} />
        <meshBasicMaterial color="#A78BFA" transparent opacity={0.05} side={2} />
      </mesh>
      <mesh ref={r3} position={[0, 2.5, -9]}>
        <ringGeometry args={[1.8, 2.1, 64]} />
        <meshBasicMaterial color="#C4B5FD" transparent opacity={0.04} side={2} />
      </mesh>
      <mesh ref={g1} position={[-3.5, 0.5, -5]}>
        <octahedronGeometry args={[0.5, 0]} />
        <meshBasicMaterial color="#7C3AED" transparent opacity={0.04} wireframe />
      </mesh>
      <mesh ref={g2} position={[3.5, -0.8, -5]}>
        <icosahedronGeometry args={[0.4, 0]} />
        <meshBasicMaterial color="#A78BFA" transparent opacity={0.04} wireframe />
      </mesh>
    </group>
  )
}
