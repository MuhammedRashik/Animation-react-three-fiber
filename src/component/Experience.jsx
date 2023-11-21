
import {OrbitControls} from '@react-three/drei'
import Avatar from './Small-avatar'
import Women from './WOMEN'
const Experience=()=>{
    return (
<>
<ambientLight />
      <directionalLight position={[-5, 5, 5]} castShadow shadow-mapSize={1024} />
<OrbitControls/>
      {/* <group position={[0, -1, 0]} scale={[6, 6, 6]}>
<Avatar />
</group> */}

<group position={[0, -1, 0]} scale={[15, 15, 15]}>
<Women/>
</group>


<mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <planeGeometry args={[10, 10, 1, 1]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>

</>
    )
}

export default Experience