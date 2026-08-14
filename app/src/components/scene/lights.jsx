export default function Lights({ color, intensity }) {
  return (
    <>
      <ambientLight color={color} intensity={intensity} />
      <directionalLight
        castShadow
        color="#ffffff"
        intensity={2.5}
        position={[4, 6, 4]}
      />
    </>
  )
}
