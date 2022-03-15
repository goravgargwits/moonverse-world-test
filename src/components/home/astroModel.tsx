import { Suspense, useEffect, useState, useRef } from 'react'
import { Canvas, useThree, useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'
import { Box } from '@react-three/drei'
import { Vector3 } from 'three'
// import { SpotLight } from '@react-three/drei'

// const normalize = (val: number, max: number, min: number): number => {
//   return (val - min) / (max - min)
// }

const Model = ({ setAnimation }: any) => {
  const { camera: mainCamera, scene } = useThree()
  const gltf = useLoader(GLTFLoader, './newModel.glb')
  const moonverseContainer = document.getElementById('moonverse-container')?.getBoundingClientRect()
  const defaultFocalLength = 100
  const scale = 40
  const documentHeight = document.documentElement.getBoundingClientRect().height
  const { MathUtils } = THREE
  const bgColor = new THREE.Color('rgb(10, 0, 20)')

  // const blueColor = new THREE.Color('rgb(0, 0, 255)')
  scene.background = bgColor

  console.log(scene)

  const mainLight = useRef<any>(null)
  const secondaryLight = useRef<any>(null)

  const mixer = new THREE.AnimationMixer(gltf.scene)

  const cam = mainCamera as any

  console.log(gltf)

  useEffect(() => {
    cam.setFocalLength(defaultFocalLength)
    const blenderCamera = gltf.cameras[0] as any
    console.log(blenderCamera.parent.position)

    mainCamera.lookAt(-0.4, 1, 0)

    console.log(gltf.animations[0])
    startAnimation()
  }, [gltf])

  useFrame(() => {
    // Setting the initial Colors
    const purpleColor = new THREE.Color('rgb(128, 0, 128)')
    const greenColor = new THREE.Color('rgb(0, 255, 0)')
    const whiteColor = new THREE.Color('rgb(255, 255, 255)')

    // Getting the current scrollHeight
    const scroll = window.scrollY

    const timeValue = MathUtils.mapLinear(
      scroll,
      window.innerHeight - 200,
      documentHeight,
      0,
      gltf.animations[0]?.duration,
    )
    mixer?.setTime(timeValue)
    mainCamera.lookAt(-0.2, 0, 0)

    if (moonverseContainer) {
      const moonverseClosingHeight = moonverseContainer.top + moonverseContainer.height
      // Mapping for the main light
      // Convert scrollHeight to a value within range 0 to 1 based on initial height 0 and moonverse container end height
      // Clamping the final value so it does not go out of range
      const mainLightMap = MathUtils.clamp(
        MathUtils.mapLinear(scroll, window.innerHeight, moonverseClosingHeight, 0, 1),
        0,
        1,
      )

      // Same as above
      const secondaryLightMap = MathUtils.clamp(
        MathUtils.mapLinear(scroll, window.innerHeight, moonverseClosingHeight, 0, 1),
        0,
        1,
      )

      // Lerp the Final Change of values
      const mainLightChange = purpleColor.lerp(whiteColor, mainLightMap)
      const secondaryLightChange = greenColor.lerp(purpleColor, secondaryLightMap)

      // Set the values to the correct lights
      if (mainLight.current) {
        mainLight.current.color = mainLightChange
      }

      if (secondaryLight.current) {
        secondaryLight.current.color = secondaryLightChange
      }
    }
  })

  const onScroll = () => {
    // pass
  }

  useEffect(() => {
    if (mainLight.current) console.log(mainLight)
  }, [mainLight])

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
      <directionalLight ref={mainLight} intensity={1} position={[-7, -5, -10]} color="rgb(128, 0, 128)" />
      {/* <directionalLight ref={mainLight} intensity={0} position={[-10, 0, 20]} color="rgb(128, 0, 128)" /> */}
      <directionalLight ref={secondaryLight} intensity={0.2} position={[100, -10, 20]} color="rgb(0, 255, 0)" />
      <primitive object={gltf.scene} scale={scale} position={[105, -185, 0]} />
    </>
  )
}

const Spheres = ({ position }: { position: Vector3 | number[] }) => (
  <mesh position={position as Vector3}>
    <sphereBufferGeometry attach="geometry" args={[0.1]} />
    <meshPhongMaterial attach="material" color="purple" />
  </mesh>
)

export default function App() {
  const [animation, setAnimation] = useState()
  // const purpleColor = new THREE.Color('rgb(128, 0, 128)')

  console.log(animation)
  return (
    // <CanvasWrapper>
    <>
      {/* <button onClick={animation}>Hello</button> */}
      <Canvas className="model-container" style={{ filter: 'blur(2px)' }}>
        <Suspense fallback={null}>
          <pointLight position={[0, 0, -11]} intensity={0.1} color="gray" />
          <Box position={[1, -50, -10]} />
          {/* <mesh position={[0, 0, -12]}>
            <sphereBufferGeometry attach="geometry" args={[0.1]} />
            <meshPhongMaterial attach="material" color="white" />
          </mesh> */}
          <Spheres position={[0, 0, -12]} />
          <Spheres position={[0.3, 0.2, -12]} />

          <mesh renderOrder={1001}>
            <Model setAnimation={setAnimation} />
          </mesh>
        </Suspense>
      </Canvas>
    </>

    // </CanvasWrapper>
  )
}
