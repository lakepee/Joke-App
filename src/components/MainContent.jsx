import React, { useState } from 'react'
import toggleON from '../assets/toggle-on.svg'
import toggleOFF from '../assets/toggle-off.svg'


export default function MainContent(props) {
    const [isToggle, setToggle] = useState(false)
    function toggle(){
        setToggle(prev => !isToggle)
    }
  return (
    <div className='jokes'>
      <div>
        {props.setup && <h3>{props.setup} </h3>}
        {isToggle && <p>{props.punchline}</p>}
        <hr/>
      </div>
      <img onClick={toggle} className='toggle' src={ isToggle? toggleON: toggleOFF } alt=" toggle icon"/>
    </div>
  )
}
