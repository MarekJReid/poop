import React, {useState} from 'react'
import FeaturesList from './features-list'
import Features from './features';
import gsap from 'gsap'
import {CSSTransition} from 'react-transition-group'
import './features.scss'
import {Route} from 'react-router-dom'

import USA from './usa'
import UK from './uk'

function FeaturesListMenu() {
    const [isActive, setIsActive] = useState(false);
    
        const onClick = () => {
            console.log("am i happening")
            setIsActive(!isActive) 
            
        }
        const routes = [
            { path: "/features/usa", name: "USA", Component: USA },
            { path: "/features/uk", name: "UK", Component: UK }
          ]

    return (
        
        <div
       onClick={onClick}
       style={{width: `100%`}}
        >
            Select a feature
        { isActive ? (
            <FeaturesList />
        ) :
        null
        }

      </div>
      
        
    )
}

export default FeaturesListMenu
