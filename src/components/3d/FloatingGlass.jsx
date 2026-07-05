import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshTransmissionMaterial } from '@react-three/drei'
import * as THREE from 'three'

function GlassShape({ position, geometry, color, speed, args }) {
  const ref = useRef()
  const initialPos = useMemo(() => position, [position])

  useFrame((state) => {
    if (!ref.current) return
    const time = state.clock.elapsedTime * speed
    ref.current.position.x = initialPos[0] + Math.sin(time * 0.5) * 1.5
    ref.current.position.y = initialPos[1] + Math.sin(time * 0.7) * 1.2
    ref.current.position.z = initialPos[2] + Math.cos(time * 0.4) * 0.5
    ref.current.rotation.x += 0.003 * speed
    ref.current.rotation.y += 0.005 * speed
    ref.current.rotation.z += 0.002 * speed
  })

  const shape = useMemo(() => {
    const geo = new THREE[geometry](...args)
    return geo
  }, [geometry, args])

  return (
    <mesh ref={ref} position={position} geometry={shape}>
      <MeshTransmissionMaterial
        transmission={0.9}
        thickness={0.5}
        roughness={0.1}
        metalness={0.05}
        ior={1.5}
        chromaticAberration={0.6}
        backside
        color={color}
        clearcoat={0.3}
      />
    </mesh>
  )
}

export default function FloatingGlass() {
  const shapes = useMemo(() => [
    { position: [-6, 2, -8], geometry: 'TorusKnotGeometry', color: '#8B5CF6', speed: 0.4, args: [0.6, 0.2, 64, 16] },
    { position: [7, -1, -6], geometry: 'IcosahedronGeometry', color: '#06B6D4', speed: 0.3, args: [0.7, 0] },
    { position: [-5, -3, -10], geometry: 'OctahedronGeometry', color: '#EC4899', speed: 0.5, args: [0.6, 0] },
    { position: [5, 3, -9], geometry: 'TorusGeometry', color: '#F59E0B', speed: 0.35, args: [0.5, 0.2, 32, 64] },
    { position: [0, -2.5, -12], geometry: 'DodecahedronGeometry', color: '#7C3AED', speed: 0.25, args: [0.8, 0] },
  ], [])

  return (
    <group>
      {shapes.map((s, i) => (
        <GlassShape key={i} {...s} />
      ))}
    </group>
  )
}
