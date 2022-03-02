import { Suspense, useEffect, useState } from 'react'
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
  const [rotation, setRotation] = useState(false)
  const defaultFocalLength = 900

  //   mainCamera.lookAt()

  const cam = mainCamera as any

  const observer = new IntersectionObserver(
    (e) => {
      console.log(e)
      console.log(e[0].isIntersecting)
      if (e[0].isIntersecting) {
        setRotation(true)
      } else setRotation(false)
    },
    { threshold: 0.15 },
  )

  const problemSection = document.getElementById('problem-container') as Element
  observer.observe(problemSection as Element)

  // console.log(cam)
  useEffect(() => {
    cam.setFocalLength(defaultFocalLength)
  }, [])

  useFrame((state) => {
    const camera = state.camera as any

    const cameraValue = normalize(window.scrollY, window.innerHeight, 0)

    state.camera.lookAt(-0.1, 0.185, 0)

    // if (rotation) {
    //   const rotationValue = normalize(
    //     window.scrollY,
    //     problemSection.getBoundingClientRect().top + problemSection.getBoundingClientRect().height,
    //     problemSection.getBoundingClientRect().top,
    //   )
    //   console.log(rotationValue * 0.01)
    //   gltf.scene.rotation.y += rotationValue
    // }

    // console.log(100 + cameraValue * 100)
    const focalLength = defaultFocalLength - cameraValue * 100
    if (focalLength > 200) camera.setFocalLength(focalLength)
  })

  const onScroll = () => {
    if (rotation) {
      // const rotationValue = normalize(
      //   window.scrollY,
      //   problemSection.getBoundingClientRect().top + problemSection.getBoundingClientRect().height,
      //   problemSection.getBoundingClientRect().top,
      // )
      // console.log(rotationValue * 0.01)
      gltf.scene.rotation.y += 0.02
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
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
