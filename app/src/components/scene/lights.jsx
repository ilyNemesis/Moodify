export default function Lights({ color }) {
  return (
    <>
      <ambientLight color={color} intensity={2.5} />
      <directionalLight
        castShadow
        color="#ffffff"
        intensity={2.5}
        position={[4, 6, 4]}
      />
    </>
  )
}
