import React from 'react'
import {NavLink, useParams} from 'react-router-dom'
function FeaturesList() {
    let location = useParams()
    return (
        <div>
            <div className="menu-box">
                <div className="link">
                <NavLink
        to='/features/USA'
        exact
        activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}>
        Home
      </NavLink>
      <NavLink
        to='/features/UK'
        exact
        activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}>
        About
      </NavLink>
                    <ul>
                        <li>link 1</li>
                        <li>link 2</li>
                        <li>link 3 </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FeaturesList
