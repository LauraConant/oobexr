import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Circle, ContactShadows, MeshReflectorMaterial } from '@react-three/drei';
import GlassSphere from './models/GlassSphere';
import GradientSphere from './models/GradientSphere';


function App() {

  const spheres = [
    { position: [3.5, 1, 3] },
    { position: [3.5, 1, -2] },
  ];


  return (
    <div className="canvas-container">

      <Canvas shadows camera={{ position: [15, 1, 0], fov: [40] }}>

        <OrbitControls target={[3, 0.5, 0]}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2} 
          minDistance={0.5}
          maxDistance={30}
          />

        <Suspense fallback={null}>

          <ContactShadows position={[0, -1, 0]} opacity={0.2} scale={12} blur={1.5} far={1} />
          <ambientLight intensity={5} />
          <spotLight position={[-20, 30, -20]} angle={0.5} penumbra={1} decay={0} intensity={Math.PI} castShadow />

          {spheres.map((sphere, index) => (
            <GlassSphere
              key={index}
              position={sphere.position}
            />
          ))}

          <GradientSphere />

          <Circle position={[0, -1.01, 0]} rotation={[-Math.PI / 2, 0, 0]} args={[90, 32]}>
            <MeshReflectorMaterial
              color={"grey"}
              blur={[0, 0]}
              mixBlur={1}
              mixStrength={2.9}
              mixContrast={1}
              resolution={2000}
              mirror={1}
              depthScale={0}
              minDepthThreshold={0.9}
              maxDepthThreshold={1}
              depthToBlurRatioBias={0.25}
              debug={0}
              reflectorOffset={0}
            />
          </Circle>

          {/* <Environment files="adams_place_bridge_1k.hdr" background blur={0.9} /> */}
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;