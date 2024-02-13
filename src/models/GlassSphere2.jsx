import { Sphere } from '@react-three/drei';

function GlassSphere2({ cameraPos, setCurrentCameraPos }) {

  const handleSphereClick = () => {
    setCurrentCameraPos(cameraPos.object2);
    console.log(cameraPos.object2);
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
    <Sphere onClick={handleSphereClick} castShadow receiveShadow position={[3, 1, -2]} args={[1.5, 64, 64]}>
      <meshPhysicalMaterial {...materialProps} />
    </Sphere>
  )
}

export default GlassSphere2;