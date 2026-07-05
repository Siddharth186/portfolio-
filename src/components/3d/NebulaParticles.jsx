import { useRef, useMemo, useCallback } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function NebulaParticles({ count = 6000 }) {
  const mesh = useRef()
  const mouse = useRef({ x: 0, y: 0 })

  const handlePointerMove = useCallback((e) => {
    mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
    mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1
  }, [])

  const [positions, colors, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    const siz = new Float32Array(count)
    const palette = [
      new THREE.Color('#8B5CF6'),
      new THREE.Color('#06B6D4'),
      new THREE.Color('#EC4899'),
      new THREE.Color('#F59E0B'),
      new THREE.Color('#7C3AED'),
    ]
    for (let i = 0; i < count; i++) {
      const radius = 8 + Math.random() * 20
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.4
      pos[i * 3 + 2] = radius * Math.cos(phi)
      const c = palette[Math.floor(Math.random() * palette.length)]
        .clone().lerp(new THREE.Color('#ffffff'), Math.random() * 0.3)
      col[i * 3] = c.r
      col[i * 3 + 1] = c.g
      col[i * 3 + 2] = c.b
      siz[i] = 0.02 + Math.random() * 0.08
    }
    return [pos, col, siz]
  }, [count])

  useFrame((state) => {
    if (!mesh.current) return
    const time = state.clock.elapsedTime
    mesh.current.rotation.y = time * 0.02 + mouse.current.x * 0.1
    mesh.current.rotation.x = Math.sin(time * 0.01) * 0.1 + mouse.current.y * 0.05
  })

  return (
    <points
      ref={mesh}
      onPointerMove={handlePointerMove}
      frustumCulled={false}
    >
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  )
}
