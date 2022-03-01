import { Suspense } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { useLoader, useFrame } from '@react-three/fiber'
import { Environment, SpotLight } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import { CanvasWrapper } from 'styles/pages/home'

// const lerp = (start: number, end: number, amt: number): number => {
//   return (1 - amt) * start + amt * end
// }

const normalize = (val: number, max: number, min: number): number => {
  return (val - min) / (max - min)
}

const Model = () => {
  // console.log(scroll);
  const { camera: mainCamera } = useThree()
  const gltf = useLoader(GLTFLoader, './untitled.glb')
  const defaultFocalLength = 900

  //   mainCamera.lookAt()

  const cam = mainCamera as any

  console.log(cam)

  cam.setFocalLength(defaultFocalLength)

  useFrame((state) => {
    const camera = state.camera as any

    const cameraValue = normalize(window.scrollY, window.innerHeight, 0)
    state.camera.lookAt(-0.1, 0.2, 0)

    console.log(100 + cameraValue * 100)
    const focalLength = defaultFocalLength - cameraValue * 100
    if (focalLength > 200) camera.setFocalLength(focalLength)
  })
  return (
    <>
      <primitive object={gltf.scene} scale={1} />
    </>
  )
}

export default function App() {
  return (
    // <CanvasWrapper>
    <Canvas className="model-container">
      <Suspense fallback={null}>
        <Model />
        <Environment preset="warehouse" background={false} />
        <SpotLight
          distance={6}
          angle={0.45}
          attenuation={10}
          color="purple"
          opacity={1}
          anglePower={10} // Diffuse-cone anglePower (default: 5)
        />
      </Suspense>
    </Canvas>
    // </CanvasWrapper>
  )
}
