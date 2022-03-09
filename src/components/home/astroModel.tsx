import * as THREE from 'three';
import { Suspense, useEffect, useState, useLayoutEffect } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { useLoader, useFrame } from '@react-three/fiber'
import { Environment, Scroll, ScrollControls, SpotLight, useScroll, useAnimations, useGLTF } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import { CanvasWrapper } from 'styles/pages/home'

// const lerp = (start: number, end: number, amt: number): number => {
//   return (1 - amt) * start + amt * end
// }

// const normalize = (val: number, max: number, min: number): number => {
//   return (val - min) / (max - min)
// }

const Model = ({ ...props }) => {
  // console.log(scroll);
  const { camera: mainCamera } = useThree()
  // const gltf = useLoader(GLTFLoader, './robot.gltf')
  const [rotation, setRotation] = useState(false)
  const defaultFocalLength = 5
  const [ambient, setAmbient] = useState(-1)

  //on-scroll animation
  const scroll = useScroll()
  const { scene, nodes, animations } = useGLTF('/movingRobo.gltf')
  const { actions } = useAnimations(animations, scene)

  //   mainCamera.lookAt()

  useLayoutEffect(() => Object.values(nodes).forEach((node) => (node.receiveShadow = node.castShadow = true)))
  useEffect(() => {
    console.log('actions',actions);
    void (actions['helmet.001Action.001'].play().paused = true), [actions]
  })
  useFrame((state, delta) => {
    // update()
    // const clip = THREE.AnimationClip.findByName(clips, 'Line003.001Action.002')
    // clips.forEach(function(clip) {
    //   mixer.clipAction(clip).play()
    // });
    const action = actions['helmet.001Action.001']
    // // The offset is between 0 and 1, you can apply it to your models any way you like
    const offset = 1 - scroll.offset
    action.time = THREE.MathUtils.damp(action.time, (action.getClip().duration) * offset, 100, delta)
    state.camera.position.set(window.scrollY, window.innerHeight, 0)
    state.camera.lookAt(0, 0, 0)
    state.camera.setFocalLength(10);
  })
  return (
  <primitive object={scene} {...props} />
  )

  // const cam = mainCamera as any

  // const observer = new IntersectionObserver(
  //   (e) => {
  //     console.log(e)
  //     console.log(e[0].isIntersecting)
  //     if (e[0].isIntersecting) {
  //       setRotation(true)
  //     } else {
  //       setRotation(false)
  //     }
  //   },
  //   { threshold: 0.15 },
  // )

  // const problemSection = document.getElementById('problem-container') as Element
  // observer.observe(problemSection as Element)

  // console.log(cam)
  // useEffect(() => {
  //   cam.setFocalLength(defaultFocalLength)
  // }, [])

  // useFrame((state) => {
  //   const camera = state.camera as any

  //   // const cameraValue = normalize(window.scrollY, window.innerHeight, 0)

  //   state.camera.lookAt(-0.1, 0.185, 0)
  //   console.log('window.scrollY',window.scrollY)
    
  //   setAmbient(window.scrollY/5000-1);
    

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
  //   const focalLength = defaultFocalLength * 100
  //   if (focalLength > 200) camera.setFocalLength(focalLength)
  // })

  // const onScroll = () => {
  //   // setAmbient(ambient+0.01);
    
  //   if (rotation) {
  //     // const rotationValue = normalize(
  //     //   window.scrollY,
  //     //   problemSection.getBoundingClientRect().top + problemSection.getBoundingClientRect().height,
  //     //   problemSection.getBoundingClientRect().top,
  //     // )
  //     // console.log(rotationValue * 0.01)
  //     gltf.scene.rotation.y += 0.02
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', onScroll)
  //   return () => {
  //     window.removeEventListener('scroll', onScroll)
  //   }
  // })
  // return (
  //   <>
  //     <ambientLight intensity={ambient} />
  //     <primitive object={gltf.scene} scale={1} />
  //   </>
  // )
}

useGLTF.preload('/movingRobo.gltf')

export default function App() {
  return (
    // <CanvasWrapper>
    // className="model-container"
    <Canvas dpr={[1, 2]} shadows camera={{ position: [0, 0, 10], near: 0.1, far: 1000 }} >
      <Suspense fallback={null}>
        <ambientLight intensity={1.5} />
        <ScrollControls 
        pages={3}
        distance={10}
        >
          <Scroll>
            <Model className="model-container" scale={20} position={[0, 5.5, 0]}/>
          </Scroll>
        </ScrollControls>
        {/* <Environment preset="warehouse" background={false} /> */}
        <SpotLight
        color="white"
          distance={6}
          angle={0.45}
          attenuation={10}
          opacity={0.01}
          // anglePower={10} // Diffuse-cone anglePower (default: 5)
        />
      </Suspense>
    </Canvas>
    // </CanvasWrapper>
  )
}
