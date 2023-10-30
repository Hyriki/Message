import React, {useState} from 'react';
import { useEffect } from 'react';
import './Icon.css'

function Icon() {
    const [isFloating, setIsFloating] = useState(false);
    const [showIcons, setShowIcons] = useState(false);
  
    const toggleFloating = () => {
      setShowIcons(!showIcons);
      setIsFloating(!isFloating);
  
      // Set a delay (e.g., 1 second) to show the icons
      
    };
   /*useEffect(()=>
      {return()=>
        {setTimeout(
          () => {setIsFloating(false)}, 5000)}},
          [showIcons]);*/
    
  
    return (
      <div>
        <button onClick={toggleFloating}>Love you</button>
        
          <div className={`icon-container ${isFloating ? 'floating' : ''}`}>
          
            <>
              <div className={`${isFloating ? 'icon':''}`}>
                {showIcons &&(
                <img src="https://svgsilh.com/svg/1139378-e91e63.svg" style={{ width: '50px', height: '50px'}} alt="Icon 1" />
                )}
                </div>
              <div className={`${isFloating ? 'icon':''}`}>
                {showIcons &&(
                <img src="https://svgsilh.com/svg/1139378-e91e63.svg" style={{ width: '50px', height: '50px' }} alt="Icon 2" />
                )}  
                </div>
              <div className={`${isFloating ? 'icon':''}`}>
                {showIcons &&(
                <img src="https://svgsilh.com/svg/1139378-e91e63.svg" style={{ width: '50px', height: '50px'}} alt="Icon 3" />
                )}  
                </div>
            </>
          
          </div>
        
      </div>
    );
  }
  
  export default Icon;