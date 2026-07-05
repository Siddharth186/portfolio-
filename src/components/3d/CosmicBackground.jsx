import { Canvas } from '@react-three/fiber'
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import NebulaParticles from './NebulaParticles'
import FloatingGlass from './FloatingGlass'
import HeroShape from './HeroShape'

export default function CosmicBackground() {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 0,
      pointerEvents: 'none',
    }}>
      <Canvas
        camera={{ position: [0, 2, 10], fov: 55, near: 0.1, far: 100 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <color attach="background" args={['#07070e']} />
        <fog attach="fog" args={['#07070e', 18, 35]} />
        <ambientLight intensity={0.2} />
        <pointLight position={[8, 8, 8]} intensity={0.6} color="#FF6B35" />
        <pointLight position={[-8, -4, -8]} intensity={0.4} color="#06D6A0" />
        <pointLight position={[0, 5, -3]} intensity={0.3} color="#FFD166" />
        <HeroShape />
        <NebulaParticles />
        <FloatingGlass />
        <EffectComposer>
          <Bloom
            intensity={0.2}
            luminanceThreshold={0.4}
            luminanceSmoothing={0.8}
            blendFunction={BlendFunction.SCREEN}
          />
          <ChromaticAberration
            offset={[0.0015, 0.0015]}
            blendFunction={BlendFunction.NORMAL}
          />
        </EffectComposer>
      </Canvas>
    </div>
  )
}
