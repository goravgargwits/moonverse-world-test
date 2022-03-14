import { Suspense, useEffect, useState, useRef } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'

const normalize = (val: number, max: number, min: number): number => {
  return (val - min) / (max - min)
}

const Model = ({ setAnimation }: any) => {
  const { camera: mainCamera } = useThree()
  const gltf = useLoader(GLTFLoader, './newModel.glb')
  const moonverseContainer = document.getElementById('moonverse-container')?.getBoundingClientRect()
  const defaultFocalLength = 90
  const scale = 40.5
  // const documentHeight = document.documentElement.getBoundingClientRect().height
  const { MathUtils } = THREE

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
    const timeValue = normalize(window.scrollY, window.innerHeight / 1.5, 0)

    mixer?.setTime(timeValue)

    mainCamera.lookAt(-0.2, 0, 0)

    // Setting the initial Colors
    const purpleColor = new THREE.Color('rgb(128, 0, 128)')
    const greenColor = new THREE.Color('rgb(0, 255, 0)')
    const whiteColor = new THREE.Color('rgb(255, 255, 255)')

    // Getting the current scrollHeight
    const scroll = window.scrollY
    if (moonverseContainer) {
      // Mapping for the main light
      // Convert scrollHeight to a value within range 0 to 1 based on initial height 0 and moonverse container end height
      // Clamping the final value so it does not go out of range
      const mainLightMap = MathUtils.clamp(
        MathUtils.mapLinear(scroll, 0, moonverseContainer.top + moonverseContainer.height, 0, 1),
        0,
        1,
      )

      // Same as above
      const secondaryLightMap = MathUtils.clamp(
        MathUtils.mapLinear(scroll, 0, moonverseContainer.top + moonverseContainer.height, 0, 1),
        0,
        1,
      )

      // Lerp the Final Change of values
      const mainLightChange = purpleColor.lerp(whiteColor, mainLightMap)
      const secondaryLightChange = greenColor.lerp(whiteColor, secondaryLightMap)

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
      <directionalLight ref={mainLight} intensity={0.6} position={[-10, 0, 20]} color="rgb(128, 0, 128)" />
      <directionalLight ref={secondaryLight} intensity={2} position={[100, -10, 20]} color="rgb(255, 255, 255)" />
      <primitive object={gltf.scene} scale={scale} position={[105, -185, 0]} />
    </>
  )
}

export default function App() {
  const [animation, setAnimation] = useState()

  console.log(animation)
  return (
    // <CanvasWrapper>
    <>
      {/* <button onClick={animation}>Hello</button> */}
      <Canvas className="model-container">
        <Suspense fallback={null}>
          {/* <ambientLight intensity={0.3} /> */}
          {/* <ambientLight intensity={0.1} />  */}

          {/* <directionalLight
          castShadow
          color="black"
          position={[105, -175, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        /> */}
          {/* <directionalLight intensity={0.5} />
      <ambientLight intensity={0.5} />
      <spotLight position={[105, -165, 0]} angle={0.9} /> */}
          {/* <pointLight position={[105, -165, 0]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} /> */}
          <Model setAnimation={setAnimation} />
          {/* <Environment preset="warehouse" background={false} /> */}
          {/* <SpotLight
            distance={8}
            angle={0.45}
            attenuation={10}
            color="black"
            opacity={0.8}
            anglePower={15} // Diffuse-cone anglePower (default: 5)
          />
          <SpotLight
            distance={10}
            angle={0.30}
            attenuation={10}
            color="white"
            opacity={0.4}
            anglePower={5} // Diffuse-cone anglePower (default: 5)
          />
          <SpotLight
            distance={5}
            angle={0.30}
            attenuation={18}
            color="#fa708c"
            opacity={0.5}
            anglePower={10} // Diffuse-cone anglePower (default: 5)
          /> */}
        </Suspense>
      </Canvas>
    </>

    // </CanvasWrapper>
  )
}
