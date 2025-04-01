import React, { useRef, useEffect, useState } from 'react';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { TextureLoader } from 'three';
import { Environment } from '@react-three/drei';
import * as THREE from 'three';

const LongTailedTitModel: React.FC = () => {
  // Load the GLB bird model
  const { scene, animations } = useLoader(GLTFLoader, '/models/long_tailed_tit.glb');

  // Load textures
  const [colorMap, normalMap, roughMap, aoMap, specMap] = useLoader(TextureLoader, [
    '/textures/UV1_Long-tailedTit_color.png',
    '/textures/UV1_Long-tailedTit_normal.png',
    '/textures/UV1_Long-tailedTit_rough.png',
    '/textures/UV1_Long-tailedTit_spec.png',
  ]);

  // Refs
  const modelRef = useRef<THREE.Group>(null);
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);

  // Animations state
  const [actions, setActions] = useState<Record<string, THREE.AnimationAction>>({});
  const [currentAnimIndex, setCurrentAnimIndex] = useState(0);

  // --- SETUP: Create animation mixer and actions ---
  useEffect(() => {
    if (!scene || animations.length === 0) {
      console.warn('LongTailedTit: no scene or animations found.');
      return;
    }

    console.log('Animations found in the model:', animations.map((clip) => clip.name));

    const mixer = new THREE.AnimationMixer(scene);
    mixerRef.current = mixer;

    const newActions: Record<string, THREE.AnimationAction> = {};

    // Hard-coded sequence of animations from your model
    const flySequence = ['Birdfly_A1', 'Birdfly_A2', 'Birdfly_A3'];

    flySequence.forEach((name) => {
      const clip = animations.find((c) => c.name.toLowerCase() === name.toLowerCase());
      if (clip) {
        const action = mixer.clipAction(clip);
        action.setEffectiveTimeScale(0.5); // half-speed
        newActions[name] = action;
      } else {
        console.warn(`Animation "${name}" not found in the model.`);
      }
    });

    setActions(newActions);

    // Hide the cylinder mesh if present
    scene.traverse((obj) => {
      if (obj.isMesh && obj.name.toLowerCase().includes('cylinder')) {
        obj.visible = false;
      }
    });

    // Cleanup
    return () => {
      mixer.stopAllAction();
    };
  }, [scene, animations]);

  // --- PLAY ANIMATIONS IN SEQUENCE ---
  useEffect(() => {
    const names = Object.keys(actions);
    if (names.length === 0) return;

    // Stop all actions
    Object.values(actions).forEach((action) => action.stop());

    const animName = names[currentAnimIndex];
    const action = actions[animName];
    console.log('Playing animation:', animName);

    action.reset().play();

    // Duration depends on clip length & time scale
    const clipDuration = action.getClip().duration;
    const effectiveDuration = clipDuration / 0.5; // 0.5 is the time scale

    const timeout = setTimeout(() => {
      setCurrentAnimIndex((prev) => (prev + 1) % names.length);
    }, effectiveDuration * 1000);

    return () => clearTimeout(timeout);
  }, [currentAnimIndex, actions]);

  useFrame((state, delta) => {
    if (modelRef.current) {
      // Base tilt
      modelRef.current.rotation.x = -0.2;
      modelRef.current.rotation.y = 0.4;

      modelRef.current.rotation.y += state.mouse.x * 0.3 + 0.3;
    }
    mixerRef.current?.update(delta);
  });

  // --- INITIAL POSITION & TEXTURE SETUP ---
  useEffect(() => {
    if (!scene || !modelRef.current) return;

    // Apply loaded textures
    scene.traverse((obj) => {
      if (obj.isMesh && obj.material) {
        const mat = obj.material as THREE.MeshStandardMaterial;
        mat.map = colorMap;
        mat.normalMap = normalMap;
        mat.roughnessMap = roughMap;
        mat.aoMap = aoMap;
        // mat.metalnessMap = specMap; // optional
        mat.needsUpdate = true;
      }
    });

    // Default offset
    modelRef.current.position.set(-1.5, -0.5, 0);
    // Default scale
    modelRef.current.scale.set(40, 40, 40);
  }, [scene, colorMap, normalMap, roughMap, aoMap, specMap]);

  // --- RESPONSIVE RESIZE HANDLER ---
  useEffect(() => {
    function handleResize() {
      if (!modelRef.current) return;

      const width = window.innerWidth;

      // Simple breakpoints:
      //  - small screens: shrink more, offset less
      //  - medium screens: moderate scale
      //  - large screens: original scale
      if (width < 600) {
        modelRef.current.scale.set(25, 25, 25);
        modelRef.current.position.set(0, -0.2, 0);
      } else if (width < 1024) {
        modelRef.current.scale.set(35, 35, 35);
        modelRef.current.position.set(-0.5, -0.5, 0);
      } else {
        modelRef.current.scale.set(40, 40, 40);
        modelRef.current.position.set(-1.5, -0.5, 0);
      }
    }

    // Handle resize on mount and whenever window resizes
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Environment preset="studio" />
      <primitive ref={modelRef} object={scene} />
    </>
  );
};

export default LongTailedTitModel;
