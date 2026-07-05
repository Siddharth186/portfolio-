import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshTransmissionMaterial } from '@react-three/drei'
import * as THREE from 'three'

function GlassShape({ position, geometry, color, speed, args, orbitRadius, orbitSpeed, phase }) {
  const ref = useRef()
  const center = useMemo(() => position, [position])

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime * speed
    const angle = t * orbitSpeed + (phase || 0)
    ref.current.position.x = center[0] + Math.cos(angle) * orbitRadius
    ref.current.position.z = center[2] + Math.sin(angle) * orbitRadius
    ref.current.position.y = center[1] + Math.sin(t * 0.6) * 0.8
    ref.current.rotation.x = t * 0.4
    ref.current.rotation.y = t * 0.6
    ref.current.rotation.z = t * 0.2
  })

  const geo = useMemo(() => new THREE[geometry](...args), [geometry, args])

  return (
    <mesh ref={ref} position={position} geometry={geo}>
      <MeshTransmissionMaterial
        transmission={0.95}
        thickness={0.8}
        roughness={0.05}
        metalness={0.02}
        ior={1.6}
        chromaticAberration={0.4}
        backside
        color={color}
        clearcoat={0.2}
      />
    </mesh>
  )
}

export default function FloatingGlass() {
  const shapes = useMemo(() => [
    { geometry: 'TorusKnotGeometry', color: '#FF6B35', speed: 0.3, args: [0.7, 0.25, 128, 32], orbitRadius: 0, orbitSpeed: 0, phase: 0, position: [0, 0.5, -5] },
    { geometry: 'IcosahedronGeometry', color: '#06D6A0', speed: 0.4, args: [0.5, 0], orbitRadius: 2.5, orbitSpeed: 0.3, phase: 0, position: [2.5, -0.5, -7] },
    { geometry: 'OctahedronGeometry', color: '#FFD166', speed: 0.5, args: [0.45, 0], orbitRadius: 2.8, orbitSpeed: -0.25, phase: 1.5, position: [-2.8, 1, -8] },
    { geometry: 'TorusGeometry', color: '#FF2D55', speed: 0.35, args: [0.55, 0.22, 48, 64], orbitRadius: 3.2, orbitSpeed: 0.2, phase: 3, position: [3.2, -1.5, -9] },
    { geometry: 'DodecahedronGeometry', color: '#06D6A0', speed: 0.25, args: [0.6, 0], orbitRadius: 2, orbitSpeed: -0.35, phase: 2, position: [-2, 2, -10] },
    { geometry: 'ConeGeometry', color: '#FF6B35', speed: 0.45, args: [0.4, 0.8, 32], orbitRadius: 3.5, orbitSpeed: 0.15, phase: 4, position: [3.5, 0, -6] },
  ], [])

  return (
    <group>
      {shapes.map((s, i) => (
        <GlassShape key={i} {...s} />
      ))}
    </group>
  )
}
