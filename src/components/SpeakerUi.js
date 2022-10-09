import React from "react";
import Session from "./Session";

function SpeakerUi({id,nom,prenom,bio,company,twitter}) {
    return(
        <div className='ui card'>
         
          <div className='content'>
            <span className='header'>
              {nom} + {prenom}
              
            </span>

            <div className='description'>{bio}</div>
            <div className='ui divider'></div>
            <div className='meta'>
              <span>
                <i className='user icon'> {company}</i>
              </span>
            </div>

            <Session/>
            <span>
              <i className='home icon'>{twitter}</i>
            </span>
          </div>
          
        </div> 
            
    )  
}
export default SpeakerUi;