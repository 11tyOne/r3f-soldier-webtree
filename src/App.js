import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Soldier from './Soldier'

export default function App() {
  return (
    <Canvas
      shadows
      camera={{ position: [-3, 5, 8], fov: 100 }}
      style={{ height: '100vh', background: '#a0a0a0' }}
    >
      {/* Lights */}
      <hemisphereLight intensity={3} groundColor="#8d8d8d" />
      <directionalLight
        position={[-3, 10, -10]}
        intensity={3}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.1}
        shadow-camera-far={40}
        shadow-camera-top={4}
        shadow-camera-bottom={-4}
        shadow-camera-left={-4}
        shadow-camera-right={4}
      />

      {/* Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
        <planeGeometry args={[200, 200]} />
        <meshPhongMaterial color="#cbcbcb" depthWrite={false} />
      </mesh>

      {/* Models */} 
      <Soldier animationName="Run" position={[-4, -1.5, 0]} />
      <Soldier animationName="Walk" position={[0, -1.5, 0]} />
      <Soldier animationName="Idle" position={[4, -1.5, 0]} />

      {/* Controls */}
      <OrbitControls target={[0, 1.2, 0]} enablePan={false} />
    </Canvas>
  )
}
