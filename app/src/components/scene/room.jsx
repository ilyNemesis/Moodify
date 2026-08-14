import { useGLTF } from '@react-three/drei'
import roomModelUrl from '../../assets/models/room.glb?url'

export default function Room() {
  const { scene } = useGLTF(roomModelUrl)

  return <primitive object={scene} />
}

useGLTF.preload(roomModelUrl)
