import React from 'react';
import { Canvas } from '@react-three/fiber';
import LongTailedTitModel from './LongTailedTitModel';

const ModelCanvas: React.FC = () => {
  return (
    <Canvas
      style={{ width: '100%', height: '100%' }}
      gl={{ alpha: true }}
      frameloop="always"
      performance={{ min: 0.5 }}
    >
      <spotLight
        intensity={0.4}
        position={[-10, 40, 5]}
        angle={0.3}
        penumbra={0.8}
        castShadow
      />
      <LongTailedTitModel />
    </Canvas>
  );
};

export default ModelCanvas;
