import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Bounds, OrbitControls } from '@react-three/drei'
import Room from './components/scene/room.jsx'
import Lights from './components/scene/lights.jsx'
import LightControls from './components/ui/LightControls.jsx'
import './App.css'

function App() {
  const [lightColor, setLightColor] = useState('#ff7a45')

  return (
    <main className="experience">
      <header className="experience__header">
        <p className="experience__eyebrow">Moodify</p>
      </header>

      <Canvas
        className="experience__canvas"
        camera={{ position: [6, 4, 8], fov: 45, near: 0.1, far: 100 }}
        shadows
      >
        <color attach="background" args={['#11131a']} />
        <Lights color={lightColor} />

        <Suspense fallback={null}>
          <Bounds fit clip observe margin={1.2}>
            <Room />
          </Bounds>
        </Suspense>

        <OrbitControls makeDefault enableDamping />
      </Canvas>

      <LightControls color={lightColor} onColorChange={setLightColor} />

      <p className="experience__hint">
        Click and drag the mouse to explore the room.
      </p>
    </main>
  )
}

export default App
