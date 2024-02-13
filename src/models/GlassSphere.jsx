import { Sphere } from '@react-three/drei';

function GlassSphere({ position }) {

  const handleSphereClick = () => {
    console.log("you clicked me");
  };

  const materialProps = {
    thickness: 4,
    roughness: 0,
    clearcoat: 0.3,
    clearcoatRoughness: 0.1,
    transmission: 1,
    ior: 1.2,
    envMapIntensity: 0,
    color: '#ffffff',
    attenuationTint: '#ffe79e',
    attenuationDistance: 0.2
  }

  return (
    <Sphere onClick={handleSphereClick}  castShadow receiveShadow position={position} args={[2, 40, 40]}>
      <meshPhysicalMaterial {...materialProps} />
    </Sphere>
  )
}

export default GlassSphere;