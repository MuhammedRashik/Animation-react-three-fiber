import { Canvas } from '@react-three/fiber';
import Experience from './component/Experience';
import Interface from './component/Interface';






const App = () => {
  return (
    <>
     
     <Canvas shadows camera={{ position: [1, 1.5, 2.5], fov: 50 }}>

            <Experience />
         
         </Canvas>
       <Interface/>
    </>
  );
};

export default App;
