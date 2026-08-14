export default function Lights() {
  return (
    <>
      <ambientLight color="#ff7a45" intensity={2.5} />
      <directionalLight
        castShadow
        color="#ffffff"
        intensity={2.5}
        position={[4, 6, 4]}
      />
    </>
  )
}
