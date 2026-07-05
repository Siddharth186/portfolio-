import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function SynthwaveGrid() {
  const ref = useRef()

  const grid = useMemo(() => {
    const size = 40
    const divs = 50
    const geo = new THREE.BufferGeometry()
    const verts = []
    const step = size / divs
    const half = size / 2
    const c1 = new THREE.Color('#FF6B35')
    const c2 = new THREE.Color('#06D6A0')
    for (let i = 0; i <= divs; i++) {
      const x = -half + i * step
      verts.push(x, 0, -half, x, 0, half)
    }
    for (let i = 0; i <= divs; i++) {
      const z = -half + i * step
      verts.push(-half, 0, z, half, 0, z)
    }
    const pos = new Float32Array(verts)
    const colors = new Float32Array(verts.length)
    for (let i = 0; i < verts.length / 3; i++) {
      const t = (i / (verts.length / 3))
      const c = c1.clone().lerp(c2, t)
      colors[i * 3] = c.r
      colors[i * 3 + 1] = c.g
      colors[i * 3 + 2] = c.b
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    return geo
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.z = ((state.clock.elapsedTime * 0.2) % 2) - 1
    }
  })

  return (
    <lineSegments ref={ref} geometry={grid}>
      <lineBasicMaterial vertexColors transparent opacity={0.08} />
    </lineSegments>
  )
}
