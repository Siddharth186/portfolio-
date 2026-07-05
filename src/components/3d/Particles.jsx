import { useRef, useMemo, useCallback } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const COUNT = 1500

export default function Particles() {
  const mesh = useRef()
  const mouse = useRef({ x: 0, y: 0 })

  const handleMove = useCallback((e) => {
    mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
    mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1
  }, [])

  const [pos, colors, sizes] = useMemo(() => {
    const p = new Float32Array(COUNT * 3)
    const c = new Float32Array(COUNT * 3)
    const s = new Float32Array(COUNT)
    const palette = [
      new THREE.Color('#7C3AED'),
      new THREE.Color('#A78BFA'),
      new THREE.Color('#C4B5FD'),
      new THREE.Color('#8B7CB8'),
      new THREE.Color('#DDD0F5'),
    ]
    for (let i = 0; i < COUNT; i++) {
      const r = 1.5 + Math.random() * 12
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      p[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      p[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.35
      p[i * 3 + 2] = r * Math.cos(phi)
      const col = palette[Math.floor(Math.random() * palette.length)]
      c[i * 3] = col.r
      c[i * 3 + 1] = col.g
      c[i * 3 + 2] = col.b
      s[i] = 0.015 + Math.random() * 0.045
    }
    return [p, c, s]
  }, [])

  useFrame((state) => {
    if (!mesh.current) return
    const t = state.clock.elapsedTime
    mesh.current.rotation.y = t * 0.004 + mouse.current.x * 0.03
    mesh.current.rotation.x = Math.sin(t * 0.003) * 0.04 + mouse.current.y * 0.02
    const positions = mesh.current.geometry.attributes.position.array
    for (let i = 0; i < COUNT; i++) {
      const i3 = i * 3
      const x = pos[i3], z = pos[i3 + 2]
      const wave = Math.sin(x * 0.5 + t * 0.3) * 0.08 + Math.cos(z * 0.4 + t * 0.2) * 0.08
      positions[i3 + 1] = pos[i3 + 1] + wave
    }
    mesh.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={mesh} onPointerMove={handleMove} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={COUNT} array={pos.slice()} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={COUNT} array={colors} itemSize={3} />
        <bufferAttribute attach="attributes-size" count={COUNT} array={sizes} itemSize={1} />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        vertexColors
        transparent
        opacity={0.35}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  )
}
