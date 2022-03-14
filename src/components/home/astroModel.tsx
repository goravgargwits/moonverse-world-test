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
  const [containerBottom, setContainerBottom] = useState(0)
  const [moonverseBottomContainer, setMoonverseBottomContainer] = useState(0)
  const [problemBottomContainer, setProblemBottomContainer] = useState(0)
  const [participateBottomContainer, setParticipateBottomContainer] = useState(0)
  const [tokenUtilityBottomContainer, setTokenUtilityBottomContainer] = useState(0)
  const moonverseContainer = document.getElementById('moonverse-container')?.getBoundingClientRect()
  const problemContainer = document.getElementById('problem-container')?.getBoundingClientRect()
  const participateContainer = document.getElementById('participate-container')?.getBoundingClientRect()
  const tokenUtilityContainer = document.getElementById('token-utilities')?.getBoundingClientRect()
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
    console.log('mainLight',mainLight);
    
    if(moonverseContainer) {
      setMoonverseBottomContainer(moonverseContainer?.top + moonverseContainer?.height)
    }
    if(problemContainer) {
      setProblemBottomContainer(problemContainer?.top + problemContainer?.height)
    }
    if(participateContainer) {
      setParticipateBottomContainer(participateContainer?.top + participateContainer?.height)
    }
    if(tokenUtilityContainer) {
      setTokenUtilityBottomContainer(tokenUtilityContainer?.top + tokenUtilityContainer?.height)
    }
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
    const purpleColor = new THREE.Color('rgb(202, 58, 244)')
    const greenColor = new THREE.Color('rgb(0, 255, 207)')
    const whiteColor = new THREE.Color('rgb(255, 241, 245)')
    const whiteBackColor = new THREE.Color('rgb(253, 255, 247)')
    const pinkFrontColor = new THREE.Color('rgb(255, 92, 175)')
    const pinkBackColor = new THREE.Color('rgb(255, 241, 245)')

    // Getting the current scrollHeight
    const scroll = window.scrollY
    if (moonverseContainer && scroll <= moonverseBottomContainer) {
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
      const secondaryLightChange = greenColor.lerp(whiteBackColor, secondaryLightMap)

      // Set the values to the correct lights
      if (mainLight.current) {
        mainLight.current.color = mainLightChange
      }

      if (secondaryLight.current) {
        secondaryLight.current.color = secondaryLightChange
      }
      setContainerBottom(moonverseContainer?.top + moonverseContainer?.height)
    }

    if (problemContainer && scroll > moonverseBottomContainer && scroll <= problemBottomContainer) {
      console.log('scroll', scroll);
      console.log('containerBottom', moonverseBottomContainer);
      console.log('problemContainer', problemContainer.top + problemContainer.height);
      
      const mainLightMap = MathUtils.clamp(
        MathUtils.mapLinear(scroll, moonverseBottomContainer, problemContainer.top + problemContainer.height, 0, 1),
        0,
        1,
      )
      const secondaryLightMap = MathUtils.clamp(
        MathUtils.mapLinear(scroll, moonverseBottomContainer, problemContainer.top + problemContainer.height, 0, 1),
        0,
        1,
      )

      // Lerp the Final Change of values
      const mainLightChange = whiteColor.lerp(pinkFrontColor, mainLightMap)
      const secondaryLightChange = whiteBackColor.lerp(pinkBackColor, secondaryLightMap)

      // Set the values to the correct lights
      if (mainLight.current) {
        mainLight.current.color = mainLightChange
      }

      if (secondaryLight.current) {
        secondaryLight.current.color = secondaryLightChange
      }
    }

    if (participateContainer && scroll > problemBottomContainer && scroll <= tokenUtilityBottomContainer) {
      console.log('scroll', scroll);
      console.log('containerBottom', problemBottomContainer);
      console.log('problssssemContainer', participateContainer.top + participateContainer.height, mainLight);
      console.log('pinkFrontColor', mainLight);

      mainLight.current.position.x = -150
      
      const mainLightMap = MathUtils.clamp(
        MathUtils.mapLinear(scroll, problemBottomContainer, participateContainer.top + participateContainer.height, 0, 1),
        0,
        1,
      )
      const secondaryLightMap = MathUtils.clamp(
        MathUtils.mapLinear(scroll, problemBottomContainer, participateContainer.top + participateContainer.height, 0, 1),
        0,
        1,
      )

      // Lerp the Final Change of values
      const mainLightChange = pinkFrontColor.lerp(pinkFrontColor, mainLightMap)
      const secondaryLightChange = whiteColor.lerp(pinkBackColor, secondaryLightMap)

      // Set the values to the correct lights
      if (mainLight.current) {
        mainLight.current.color = mainLightChange
      }

      if (secondaryLight.current) {
        secondaryLight.current.color = secondaryLightChange
      }
    }

    if (tokenUtilityContainer && scroll >= participateBottomContainer ) {
      console.log('scroll', scroll);
      console.log('containerBottom', participateBottomContainer);
      console.log('problemContainer', tokenUtilityContainer.top + tokenUtilityContainer.height);
      
      const mainLightMap = MathUtils.clamp(
        MathUtils.mapLinear(scroll, participateBottomContainer, tokenUtilityContainer.top + tokenUtilityContainer.height, 0, 1),
        0,
        1,
      )
      const secondaryLightMap = MathUtils.clamp(
        MathUtils.mapLinear(scroll, participateBottomContainer, tokenUtilityContainer.top + tokenUtilityContainer.height, 0, 1),
        0,
        1,
      )

      // Lerp the Final Change of values
      const mainLightChange = pinkFrontColor.lerp(purpleColor, mainLightMap)
      const secondaryLightChange = pinkBackColor.lerp(pinkFrontColor, secondaryLightMap)

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
      <directionalLight ref={mainLight} intensity={1} position={[-10, 0, -20]} color="rgb(255, 255, 255)"/>
      <directionalLight ref={secondaryLight} intensity={0.2} position={[80, -10, 20]} color="rgb(255, 255, 255)" />
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
