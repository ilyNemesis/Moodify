import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Bounds, OrbitControls } from '@react-three/drei'
import { LIGHT_PRESETS } from './data/lightPresets'
import { getActivePresetId } from './utils/getActivePresetId.js'

import Room from './components/scene/room.jsx'
import Lights from './components/scene/lights.jsx'
import LightControls from './components/ui/LightControls.jsx'
import MoodPresets from './components/ui/MoodPresets.jsx'


import './App.css'

function App() {
  const [lightColor, setLightColor] = useState('#ff7a45')
  const [lightIntensity, setLightIntensity] = useState(2.5)
  const activePresetId = getActivePresetId(
    LIGHT_PRESETS,
    lightColor,
    lightIntensity,
  )

  function handlePresetSelect(preset) {
    setLightColor(preset.color)
    setLightIntensity(preset.intensity)
  }

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
        <Lights color={lightColor} intensity={lightIntensity} />

        <Suspense fallback={null}>
          <Bounds fit clip observe margin={1.2}>
            <Room />
          </Bounds>
        </Suspense>

        <OrbitControls makeDefault enableDamping />
      </Canvas>

      <LightControls
        color={lightColor}
        onColorChange={setLightColor}
        intensity={lightIntensity}
        onIntensityChange={setLightIntensity}
      />

      <MoodPresets
        presets={LIGHT_PRESETS}
        activePresetId={activePresetId}
        onPresetSelect={handlePresetSelect}
      />

      <p className="experience__hint">
        Click and drag the mouse to explore the room.
      </p>
    </main>
  )
}

export default App
