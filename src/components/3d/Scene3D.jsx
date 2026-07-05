import { lazy } from 'react'

const SoftAurora = lazy(() => import('./SoftAurora'))

export default function Scene3D() {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 0,
      pointerEvents: 'none',
    }}>
      <SoftAurora
        speed={0.5}
        scale={1.2}
        brightness={1.3}
        color1="#DDD0F5"
        color2="#7C3AED"
        noiseFrequency={2.0}
        noiseAmplitude={0.8}
        bandHeight={0.45}
        bandSpread={0.9}
        octaveDecay={0.12}
        layerOffset={0.3}
        colorSpeed={0.8}
        enableMouseInteraction={true}
        mouseInfluence={0.2}
      />
    </div>
  )
}
