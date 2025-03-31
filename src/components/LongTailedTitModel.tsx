import React, { useRef, useEffect, useState } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three'
import { Environment } from '@react-three/drei'
import * as THREE from 'three'

const LongTailedTitModel: React.FC = () => {
  // Load the GLB bird model
  const { scene, animations } = useLoader(GLTFLoader, '/models/long_tailed_tit.glb')
  const modelRef = useRef<THREE.Group>(null)
  const mixerRef = useRef<THREE.AnimationMixer | null>(null)

  // Load your textures
  const [
    colorMap,
    normalMap,
    roughMap,
    aoMap,
    specMap
  ] = useLoader(TextureLoader, [
    '/textures/UV1_Long-tailedTit_color.png',
    '/textures/UV1_Long-tailedTit_normal.png',
    '/textures/UV1_Long-tailedTit_rough.png',
    '/textures/UV1_Long-tailedTit_spec.png'
  ])

  // State to hold our animation actions and current index
  const [actions, setActions] = useState<Record<string, THREE.AnimationAction>>({})
  const [currentAnimIndex, setCurrentAnimIndex] = useState(0)

  useEffect(() => {
    if (!scene || animations.length === 0) {
      console.warn('LongTailedTit: no scene or animations found.')
      return
    }

    // Log all available animations for debugging
    const animationNames = animations.map((clip) => clip.name)
    console.log('Animations found in the model:', animationNames)

    // Create the animation mixer
    const mixer = new THREE.AnimationMixer(scene)
    mixerRef.current = mixer

    const newActions: Record<string, THREE.AnimationAction> = {}

    // Hard code the sequence of animations you want to use.
    // Replace these names with the exact names from your model.
    const flySequence = ['Birdfly_A1', 'Birdfly_A2', 'Birdfly_A3'] // example names

    flySequence.forEach((name) => {
      const clip = animations.find(
        (clip) => clip.name.toLowerCase() === name.toLowerCase()
      )
      if (clip) {
        const action = mixer.clipAction(clip)
        // Set slow-motion speed (0.5 = half speed)
        action.setEffectiveTimeScale(0.5)
        newActions[name] = action
      } else {
        console.warn(`Animation "${name}" not found in the model.`)
      }
    })

    setActions(newActions)

    // Remove or hide the cylinder (landing object)
    scene.traverse((obj) => {
      if (obj.isMesh && obj.name.toLowerCase().includes('cylinder')) {
        // Hide the cylinder
        obj.visible = false
        // Alternatively, remove it entirely:
        // obj.parent?.remove(obj)
      }
    })

    return () => {
      mixer.stopAllAction()
    }
  }, [scene, animations])

  // Instead of a fixed setInterval, use the clip's duration to schedule the next animation.
  useEffect(() => {
    const names = Object.keys(actions)
    if (names.length === 0) return

    // Stop all active actions
    Object.values(actions).forEach((action) => action.stop())

    const newAnimName = names[currentAnimIndex]
    const action = actions[newAnimName]
    console.log('Playing animation:', newAnimName)

    // Play the current animation at slow-motion speed
    // (action time scale was already set during creation)
    action.reset().play()

    // Calculate effective duration: clip duration divided by time scale.
    // This ensures the full animation is played.
    const clipDuration = action.getClip().duration
    const effectiveDuration = clipDuration / 0.5

    const timeout = setTimeout(() => {
      setCurrentAnimIndex((prev) => (prev + 1) % names.length)
    }, effectiveDuration * 1000)

    return () => clearTimeout(timeout)
  }, [currentAnimIndex, actions])

  // Update the animation mixer and apply mouse rotation each frame
  useFrame((state, delta) => {
    if (modelRef.current) {
      // Base tilt: slightly up (x-axis) and to the right (y-axis)
      modelRef.current.rotation.x = -0.2; // tweak as desired
      modelRef.current.rotation.y = 0.4;  // tweak as desired
  
      // Optional: if you still want the bird to follow the mouse on top of that:
      modelRef.current.rotation.y += state.mouse.x * 0.2;
    }
    mixerRef.current?.update(delta)
  })

  // Position/scale adjustments
  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.position.y = -1.0
    }
  }, [])

  // Apply the loaded textures to the model’s materials
  useEffect(() => {
    if (!scene) return

    scene.traverse((obj) => {
      if (obj.isMesh && obj.material) {
        const mat = obj.material as THREE.MeshStandardMaterial
        mat.map = colorMap
        mat.normalMap = normalMap
        mat.roughnessMap = roughMap
        mat.aoMap = aoMap
        // Optionally, experiment with specular/metalness:
        // mat.metalnessMap = specMap
        mat.needsUpdate = true
      }
    })
  }, [scene, colorMap, normalMap, roughMap, aoMap, specMap])

  return (
    <>
      <Environment preset="studio" />
      <primitive ref={modelRef} object={scene} scale={55} />
    </>
  )
}

export default LongTailedTitModel
