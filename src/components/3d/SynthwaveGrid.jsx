import { useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function SynthwaveGrid() {
  const gridRef = useMemo(() => {
    const size = 30
    const divisions = 40
    const geometry = new THREE.BufferGeometry()
    const vertices = []
    const colors = []
    const step = size / divisions
    const half = size / 2

    const color1 = new THREE.Color('#8B5CF6')
    const color2 = new THREE.Color('#EC4899')

    for (let i = 0; i <= divisions; i++) {
      const x = -half + i * step
      vertices.push(x, 0, -half, x, 0, half)
      const t = i / divisions
      const c = color1.clone().lerp(color2, t)
      colors.push(c.r, c.g, c.b, c.r, c.g, c.b)
    }

    for (let i = 0; i <= divisions; i++) {
      const z = -half + i * step
      vertices.push(-half, 0, z, half, 0, z)
      const t = i / divisions
      const c = color1.clone().lerp(color2, t)
      colors.push(c.r, c.g, c.b, c.r, c.g, c.b)
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))
    return geometry
  }, [])

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.z = ((state.clock.elapsedTime * 0.3) % 1.5) - 0.75
    }
  })

  return (
    <lineSegments ref={gridRef} geometry={gridRef.current?.geometry || gridRef}>
      <lineBasicMaterial vertexColors transparent opacity={0.15} />
    </lineSegments>
  )
}
