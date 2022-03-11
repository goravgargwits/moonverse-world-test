import { Suspense, useEffect, useState } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { useLoader, useFrame } from '@react-three/fiber'
import { Environment, SpotLight } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'
import { AmbientLight } from 'three'
// import { CanvasWrapper } from 'styles/pages/home'

// const lerp = (start: number, end: number, amt: number): number => {
//   return (1 - amt) * start + amt * end
// }

const normalize = (val: number, max: number, min: number): number => {
  return (val - min) / (max - min)
}

const Model = ({ setAnimation }: any) => {
  // console.log(scroll);
  const { camera: mainCamera } = useThree()
  const gltf = useLoader(GLTFLoader, './Astro.glb', undefined, (event) => console.log('event', event))
  // const [rotation, setRotation] = useState(false)
  const defaultFocalLength = 60
  const scale = 21.5

  const mixer = new THREE.AnimationMixer(gltf.scene)

  //   mainCamera.lookAt()

  const cam = mainCamera as any

  mainCamera.lookAt(-0.8, 1.4, 0)

  console.log(gltf)

  // const observer = new IntersectionObserver(
  //   (e) => {
  //     if (e[0].isIntersecting) {
  //       setRotation(true)
  //     } else setRotation(false)
  //   },
  //   { threshold: 0.15 },
  // )

  // const problemSection = document.getElementById('problem-container') as Element
  // observer.observe(problemSection as Element)

  // console.log(cam)
  useEffect(() => {
    cam.setFocalLength(defaultFocalLength)
    // scene.attach(gltf.cameras[0])
    const blenderCamera = gltf.cameras[0] as any
    console.log(blenderCamera.parent.position)
    // cam.position.x = blenderCamera?.parent.position.x
    // cam.position.y = blenderCamera?.parent.position.y
    // cam.position.z = blenderCamera?.parent.position.z

    // cam.aspect = blenderCamera.aspect
    // cam.fov = blenderCamera.fov
    // cam.far = blenderCamera.far
    // cam.near = blenderCamera.near

    console.log(gltf.animations[0])
    startAnimation()
  }, [gltf])

  console.log(mixer)

  useFrame(() => {
    // const camera = state.camera as any

    // gltf.animations.forEach((clip) => {
    //   const action = mixer.clipAction(clip)
    //   action?.play()
    // })
    const timeValue = normalize(window.scrollY, window.innerHeight / 1.5, 0)

    console.log(gltf?.animations?.[0]?.duration, timeValue)

    mixer?.setTime(timeValue)

    // console.log(mixer.setTime(10))

    // state.camera.lookAt(0, 1.4, 0)

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
    // const focalLength = defaultFocalLength - cameraValue * 100
    // if (focalLength > 200) camera.setFocalLength(focalLength)
  })

  const onScroll = () => {
    // if (rotation) {
    // const rotationValue = normalize(
    //   window.scrollY,
    //   problemSection.getBoundingClientRect().top + problemSection.getBoundingClientRect().height,
    //   problemSection.getBoundingClientRect().top,
    // )
    // console.log(rotationValue * 0.01)
    // gltf.scene.rotation.y += 0.02
    // }
  }

  const startAnimation = () => {
    gltf.animations.forEach((clip) => {
      const action = mixer.clipAction(clip)
      action?.play()
    })
  }

  setAnimation(startAnimation)

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  })
  return (
    <>
      <primitive object={gltf.scene} scale={scale} position={[35, 1, 0]} />
    </>
  )
}

export default function App() {
  const [animation, setAnimation] = useState()
  return (
    // <CanvasWrapper>
    <>
      {/* <button onClick={animation}>Hello</button> */}
      <Canvas className="model-container">
        <Suspense fallback={null}>
          {/* <ambientLight intensity={0.3} /> */}
          <Model setAnimation={setAnimation} />
          <Environment preset="warehouse" background={false} />
          <SpotLight
            distance={6}
            angle={0.45}
            attenuation={10}
            color="purple"
            opacity={0.001}
            anglePower={10} // Diffuse-cone anglePower (default: 5)
          />
        </Suspense>
      </Canvas>
    </>

    // </CanvasWrapper>
  )
}
