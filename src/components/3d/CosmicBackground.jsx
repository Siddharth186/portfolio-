import { Canvas } from '@react-three/fiber'
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import NebulaParticles from './NebulaParticles'
import FloatingGlass from './FloatingGlass'
import SynthwaveGrid from './SynthwaveGrid'

export default function CosmicBackground() {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 0,
      pointerEvents: 'none',
    }}>
      <Canvas
        camera={{ position: [0, 3, 12], fov: 60, near: 0.1, far: 100 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <color attach="background" args={['#06060f']} />
        <fog attach="fog" args={['#06060f', 15, 30]} />
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#8B5CF6" />
        <pointLight position={[-10, -5, -10]} intensity={0.3} color="#06B6D4" />
        <NebulaParticles count={6000} />
        <FloatingGlass />
        <SynthwaveGrid />
        <EffectComposer>
          <Bloom
            intensity={0.3}
            luminanceThreshold={0.6}
            luminanceSmoothing={0.9}
            blendFunction={BlendFunction.SCREEN}
          />
          <ChromaticAberration
            offset={[0.002, 0.002]}
            blendFunction={BlendFunction.NORMAL}
          />
        </EffectComposer>
      </Canvas>
    </div>
  )
}
