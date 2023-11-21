import { Affix, Button, Stack } from "@mantine/core"
import { useCharacterAnimations } from '../contexts/CharecterAnimationContext'

const Interface=()=>{
    const {animations,animationIndex,setAnimationIndex}=useCharacterAnimations()

    return(
        <>
        <Affix position={{ bottom: 50, right: 20 }}>
        {animations.map((animation,index)=>(


<Stack sx={{height: 50}} key={animation} >

            <Button key={animation}
             value={index === animationIndex ? "filled" : "light"}
             onClick={()=>setAnimationIndex(index)}
             
             
             >
                
                
            {animation}
        </Button>
</Stack>
        ))}
       
        </Affix>
        </>
    )
}
export default Interface