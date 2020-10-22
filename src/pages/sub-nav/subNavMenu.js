import React, {useState} from 'react'
import SubMenuDropDownLinks from './subMenuDropDownLinks'





function SubNavMenu() {
    const [isActive, setIsActive] = useState(false);
    
        const onClick = () => {
            console.log("am i happening")
            setIsActive(!isActive) 
            
        }


    return (
        
        <div
       onClick={onClick}
       style={{width: `100%`}}
        >
            Select a feature
        { isActive ? (  
            <SubMenuDropDownLinks />
        ) :
        null
        }

      </div>
      
        
    )
}

export default SubNavMenu

