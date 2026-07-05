import { useRef, useMemo, useCallback } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function NebulaParticles() {
  const mesh = useRef()
  const mouse = useRef({ x: 0, y: 0 })
  const scrollY = useRef(0)

  const handlePointerMove = useCallback((e) => {
    mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
    mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1
  }, [])

  const [positions, colors, sizes] = useMemo(() => {
    const count = 8000
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    const siz = new Float32Array(count)
    const palette = [
      new THREE.Color('#FF6B35'),
      new THREE.Color('#06D6A0'),
      new THREE.Color('#FFD166'),
      new THREE.Color('#FF2D55'),
      new THREE.Color('#FF6B35').multiplyScalar(0.7),
    ]
    for (let i = 0; i < count; i++) {
      const shell = Math.random() > 0.7 ? 'sphere' : 'disk'
      let r, theta, phi
      if (shell === 'disk') {
        r = 5 + Math.random() * 18
        theta = Math.random() * Math.PI * 2
        phi = Math.acos(2 * Math.random() - 1) * 0.3
      } else {
        r = 3 + Math.random() * 20
        theta = Math.random() * Math.PI * 2
        phi = Math.acos(2 * Math.random() - 1)
      }
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6
      pos[i * 3 + 2] = r * Math.cos(phi)
      const c = palette[Math.floor(Math.random() * palette.length)]
      col[i * 3] = c.r
      col[i * 3 + 1] = c.g
      col[i * 3 + 2] = c.b
      siz[i] = 0.015 + Math.random() * 0.06
    }
    return [pos, col, siz]
  }, [])

  useFrame((state) => {
    if (!mesh.current) return
    const time = state.clock.elapsedTime
    mesh.current.rotation.y = time * 0.015 + mouse.current.x * 0.08
    mesh.current.rotation.x = Math.sin(time * 0.008) * 0.08 + mouse.current.y * 0.04
    const sc = 1 + Math.sin(time * 0.02) * 0.02
    mesh.current.scale.set(sc, sc, sc)
  })

  return (
    <points ref={mesh} onPointerMove={handlePointerMove} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={8000} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={8000} array={colors} itemSize={3} />
        <bufferAttribute attach="attributes-size" count={8000} array={sizes} itemSize={1} />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  )
}
