import { Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { LayerMaterial, Gradient, Noise, Depth, DebugLayerMaterial } from 'lamina'

function GradientSphere() {

  return (
    <mesh scale={100}>
      <sphereGeometry args={[1, 64, 64]} rotation={[1, 1, Math.PI / 4]}/>
      <DebugLayerMaterial side={THREE.BackSide} color="blue" alpha={1} mode="normal">
        <Depth colorA="#00ffff" colorB="#7600ff" alpha={0.7} mode="normal" near={0} far={300} origin={[100, 100, 100]} />
        <Noise mapping="local" type="cell" scale={0.5} mode="softlight" />
        {/* <Gradient
          colorA="#d4e5ff" //
          colorB="#4f94ff"
          alpha={0.5}
          start={-1}
          end={1}
        // axe={x}
        // mode="multiply"
        /> */}
      </DebugLayerMaterial>
    </mesh>
  )

}

export default GradientSphere;