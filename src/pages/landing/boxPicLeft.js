import React, {useRef, useEffect} from 'react'

import boxInfo from './boxInfo.json'
import "./App.scss"



import { picLeftSideTextBox, picLeftSideTextBoxText, picLeftSidePicBox} from './animations.js'

const  BoxPicLeft = (boxId) => {

    const {boxRef, boxCss, textCss, slug, title, subtitle, content} = boxInfo[boxId.boxId]

    let picBox = `${boxRef}Pic` 
    picBox = useRef(null);
    let textBox = `${boxRef}TextBox`
    textBox = useRef(null)
    let textBoxText = `${boxRef}TextBoxText`
    textBoxText = useRef(null);

  useEffect(() => {
      picLeftSidePicBox(picBox, picBox)
      picLeftSideTextBox(textBox, textBox)
      picLeftSideTextBoxText(textBoxText, textBox)   
  }, []);

    return (
        <div>
           <div className={`${boxCss}`}>
        <div className={`${boxCss}-pic`} ref={(el) => (picBox = el)}></div>
        <div className={`${boxCss}-text-box`} ref={(el) => (textBox = el)}>
          <div className={`${textCss}`} ref={(el) => (textBoxText = el)}>
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
            <p>
              {content}
            </p>
          </div>
        </div>
      </div> 
        </div>
    )
}

export default BoxPicLeft
