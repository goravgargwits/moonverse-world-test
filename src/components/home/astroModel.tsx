import { Suspense, useEffect, useState, useRef } from 'react'
import { Canvas, useThree, useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { Html, useProgress } from '@react-three/drei'
import loader from 'assets/gif/loader.gif'
import * as THREE from 'three'
// import { Vector3 } from 'three'

const Model = ({ setAnimation }: any) => {
  const { camera: mainCamera, scene } = useThree()
  const gltf = useLoader(GLTFLoader, './Mesh.glb')

  const [moonverseBottomContainer, setMoonverseBottomContainer] = useState(0)
  const [problemBottomContainer, setProblemBottomContainer] = useState(0)
  const [participateBottomContainer, setParticipateBottomContainer] = useState(0)
  const [tokenUtilityBottomContainer, setTokenUtilityBottomContainer] = useState(0)
  const moonverseContainer = document.getElementById('moonverse-container')?.getBoundingClientRect()
  const problemContainer = document.getElementById('problem-container')?.getBoundingClientRect()
  const participateContainer = document.getElementById('participate-container')?.getBoundingClientRect()
  const tokenUtilityContainer = document.getElementById('token-utilities')?.getBoundingClientRect()
  const defaultFocalLength = 60
  const scale = 40.5
  const documentHeight = document.documentElement.getBoundingClientRect().height
  const { MathUtils } = THREE
  const bgColor = new THREE.Color('rgb(10, 0, 10)')
  let scrollOffset = 0
  let scrollPercent = 0
  let scrollProgress = scrollPercent

  // const blueColor = new THREE.Color('rgb(0, 0, 255)')
  scene.background = bgColor

  const mainLight = useRef<any>(null)
  const secondaryLight = useRef<any>(null)

  const mixer = new THREE.AnimationMixer(gltf.scene)

  const cam = mainCamera as any

  useEffect(() => {
    if (moonverseContainer) {
      setMoonverseBottomContainer(moonverseContainer?.top + moonverseContainer?.height)
    }

    if (problemContainer) {
      setProblemBottomContainer(problemContainer?.top + problemContainer?.height)
    }

    if (participateContainer) {
      setParticipateBottomContainer(participateContainer?.top + participateContainer?.height)
    }

    if (tokenUtilityContainer) {
      setTokenUtilityBottomContainer(tokenUtilityContainer?.top + tokenUtilityContainer?.height)
    }

    cam.setFocalLength(defaultFocalLength)

    startAnimation()
  }, [gltf])

  useFrame(() => {
    // Setting the initial Colors
    // const purpleColor = new THREE.Color('rgb(202, 58, 244)')
    const orangeColor = new THREE.Color('rgba(237,150,15)')
    const babyBlueColor = new THREE.Color('rgba(75,212,213)')
    // const greenColor = new THREE.Color('rgb(0, 255, 207)')
    const whiteColor = new THREE.Color('rgb(255, 241, 245)')
    const whiteBackColor = new THREE.Color('rgb(253, 255, 247)')
    const pinkFrontColor = new THREE.Color('rgb(255, 92, 175)')
    const pinkBackColor = new THREE.Color('rgb(255, 241, 245)')
    const blackColor = new THREE.Color('rgb(100, 100, 100)')
    // Setting the initial Colors
    const mainLightPos = new THREE.Vector3(-1, -0.1, -0.8)
    const mainLightPosDest = new THREE.Vector3(0.9, -0.1, 0)
    const mainLightPosDest2 = new THREE.Vector3(-0.2, 0, -1)

    // Getting the current scrollHeight
    scrollOffset = document.documentElement.scrollTop || document.body.scrollTop
    scrollPercent = scrollOffset / documentHeight || 0
    scrollProgress += (scrollPercent - scrollProgress) * 0.03

    const scroll = MathUtils.mapLinear(scrollProgress, 0, 1.2, 0, documentHeight)

    const timeValue = MathUtils.mapLinear(scroll, 0, documentHeight, 0, gltf.animations[0]?.duration)
    console.log('timevalue', timeValue);
     mixer?.setTime(timeValue)
    if (moonverseContainer && scroll <= moonverseBottomContainer) {
      const moonverseClosingHeight = moonverseContainer?.top + moonverseContainer?.height
      // Mapping for the main light
      // Convert scrollHeight to a value within range 0 to 1 based on initial height 0 and moonverse container end height
      // Clamping the final value so it does not go out of range
      const mainLightMap = MathUtils.clamp(
        MathUtils.mapLinear(scroll, moonverseClosingHeight / 1.65, moonverseClosingHeight, 0, 1),
        0,
        1,
      )
      // Same as above
      const secondaryLightMap = MathUtils.clamp(
        MathUtils.mapLinear(scroll, moonverseClosingHeight / 1.65, moonverseClosingHeight, 0, 1),
        0,
        1,
      )
      // Lerp the Final Change of values
      const mainLightChange = orangeColor.lerp(whiteBackColor, mainLightMap)
      const secondaryLightChange = babyBlueColor.lerp(whiteBackColor, secondaryLightMap)
      const mainLightPosChange = mainLightPos.lerp(mainLightPosDest, secondaryLightMap)
      // Set the values to the correct lights
      if (mainLight.current) {
        mainLight.current.color = mainLightChange
        mainLight.current.position.x = mainLightPosChange.x
      }

      if (secondaryLight.current) {
        secondaryLight.current.color = secondaryLightChange
      }
    }

    if (problemContainer && scroll > moonverseBottomContainer && scroll <= problemBottomContainer) {
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
      const secondaryLightIntensity = MathUtils.clamp(
        MathUtils.mapLinear(scroll, moonverseBottomContainer, problemContainer.top + problemContainer.height, 0.1, 1),
        0.1,
        1,
      )
      // Set the values to the correct lights
      if (mainLight.current) {
        mainLight.current.color = mainLightChange
      }

      if (secondaryLight.current) {
        secondaryLight.current.color = secondaryLightChange
        secondaryLight.current.intensity = secondaryLightIntensity
      }
    }

    if (participateContainer && scroll > problemBottomContainer && scroll <= tokenUtilityBottomContainer) {
      // mainLight.current.position.x = -150
      const mainLightMap = MathUtils.clamp(
        MathUtils.mapLinear(
          scroll,
          problemBottomContainer,
          participateContainer.top + participateContainer.height,
          0,
          1,
        ),
        0,
        1,
      )
      const secondaryLightMap = MathUtils.clamp(
        MathUtils.mapLinear(
          scroll,
          problemBottomContainer,
          participateContainer.top + participateContainer.height,
          0,
          1,
        ),
        0,
        1,
      )
      // Lerp the Final Change of values
      const mainLightChange = pinkFrontColor.lerp(orangeColor, mainLightMap)
      const secondaryLightChange = whiteColor.lerp(babyBlueColor, secondaryLightMap)
      // Set the values to the correct lights
      if (mainLight.current) {
        mainLight.current.color = mainLightChange
      }

      if (secondaryLight.current) {
        secondaryLight.current.color = secondaryLightChange
      }
    }

    if (tokenUtilityContainer && scroll >= participateBottomContainer) {
      const mainLightMap = MathUtils.clamp(
        MathUtils.mapLinear(
          scroll,
          participateBottomContainer,
          tokenUtilityContainer.top + tokenUtilityContainer.height,
          0,
          1,
        ),
        0,
        1,
      )
      const secondaryLightMap = MathUtils.clamp(
        MathUtils.mapLinear(
          scroll,
          participateBottomContainer,
          tokenUtilityContainer.top + tokenUtilityContainer.height,
          0,
          1,
        ),
        0,
        1,
      )
      // Lerp the Final Change of values
      const mainLightChange = pinkFrontColor.lerp(orangeColor, mainLightMap)
      const secondaryLightChange = pinkBackColor.lerp(blackColor, secondaryLightMap)
      const mainLightPosChange = mainLightPosDest.lerp(mainLightPosDest2, secondaryLightMap)
      // Set the values to the correct lights
      if (mainLight.current) {
        mainLight.current.color = mainLightChange
        mainLight.current.position.x = mainLightPosChange.x
        mainLight.current.position.y = mainLightPosChange.y
        mainLight.current.position.z = mainLightPosChange.z
      }

      if (secondaryLight.current) {
        secondaryLight.current.color = secondaryLightChange
      }
    }
  })


  THREE.DefaultLoadingManager.onLoad = function ( ) {

	console.log( 'Loading Complete!');

};


THREE.DefaultLoadingManager.onProgress = function ( url, itemsLoaded, itemsTotal ) {

	console.log( 'Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );

};

  const onScroll = () => {
    // pass
  }

  useEffect(() => {
    if (mainLight.current) {
      // console.log(mainLight)
    }
  }, [mainLight])

  const startAnimation = (model?: any, player?: any) => {
    const m = model ? model : gltf
    const mix = player ? player : mixer

    // console.log(mixer)
    const scroll = document.documentElement.scrollTop;
      m.animations.forEach((clip: any) => {
        const action = mix.clipAction(clip)
        console.log(action);
        
        if(window.scrollY < 6000){
        action?.play()
        }
        else{
          action?.paused()
        }
      })
      if(window.scrollY < 6000){
      window.addEventListener('scroll', () => {
        console.log(window.scrollY);
        
        const temp = MathUtils.mapLinear(window.scrollY, 0, documentHeight, 0, 50)
        console.log(temp);
        
        mix.setTime(temp)
      })
    }
  }

  if(window.scrollY < 6000){
    setAnimation(startAnimation)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  })

  // console.log(gltf)

  return (
    <>
      <directionalLight ref={mainLight} intensity={1} position={[-1, -0.1, -0.8]} color="rgb(202, 58, 244)" />
      <directionalLight ref={secondaryLight} intensity={0.1} position={[10, -10, 10]} color="rgb(0, 255, 207)" />
      <primitive object={gltf.scene} scale={scale} position={[105, -185, 0]} />
    </>
  )
}

useLoader.preload(GLTFLoader, '/Mesh3.gltf')

function Loader() {
  // const { progress } = useProgress()
  const progress = <img src={loader} />
  console.log('progress ==== ', progress)
  return <Html className='model-loader' center>{progress} % loaded</Html>
}
// const Spheres = ({ position }: { position: Vector3 | number[] }) => (
//   <mesh position={position as Vector3}>
//     <sphereBufferGeometry attach="geometry" args={[0.1]} />
//     <meshPhongMaterial attach="material" color="purple" />
//   </mesh>
// )

const AstroModel = () => {
  const [, setAnimation] = useState()
  return (
    <>  
    <img src={loader} />
      <Canvas className="model-container" style={{ filter: 'blur(0px)' }}>
       
        <Suspense fallback={<Loader />}>
          {/* <Spheres position={[0, 0, -12]} /> */}
          {/* <Spheres position={[1, 0, -12]} /> */}

          <mesh renderOrder={1001}>
            <Model setAnimation={setAnimation} />
          </mesh>
        </Suspense>
      </Canvas>
    </>
  )
}

export default AstroModel
