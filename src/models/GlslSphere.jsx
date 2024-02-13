import { Sphere, shaderMaterial } from '@react-three/drei';

function GlslSphere() {


    return (
        <>
            <Sphere castShadow receiveShadow position={[0, 0, 0]} args={[3, 32, 32]}>
            <shaderMaterial
                attach="material"
                args={[
                    // Vertex shader
                    `
                    varying vec3 vNormal;
                    void main() {
                        vNormal = normalize(normalMatrix * normal);
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    }
                    `,
                    // Fragment shader
                    `
                    varying vec3 vNormal;
                    void main() {
                        vec3 lightDirection = normalize(vec3(1.0, 1.0, 1.0));
                        float intensity = dot(vNormal, lightDirection);
                        vec3 color = vec3(0.8, 0.8, 0.8); // Base color
                        vec3 specularColor = vec3(1.0, 1.0, 1.0); // Specular color
                        float shininess = 32.0; // Shininess factor
                
                        vec3 ambient = vec3(0.2, 0.2, 0.2);
                        vec3 diffuse = max(intensity, 0.0) * color;
                        
                        vec3 reflectDir = reflect(-lightDirection, vNormal);
                        vec3 viewDir = normalize(-vNormal);
                        float spec = pow(max(dot(reflectDir, viewDir), 0.0), shininess);
                        vec3 specular = specularColor * spec;
                
                        gl_FragColor = vec4(ambient + diffuse + specular, 1.0);
                    }
                    `
                ]}
            />
            </Sphere>
        </>
    )

}

export default GlslSphere;