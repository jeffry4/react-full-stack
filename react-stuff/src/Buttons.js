// import React, {component} from 'React'
import Button from './Button'
const Buttons = ({arr, handleClick})=> {
    return(
        
           arr.map(function(elem){
               return <Button elem = {elem}
                handleClick = {handleClick}
                // state= {state}
                />
            
             
            
    }) 
        
    )}

export default Buttons