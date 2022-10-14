import React from "react";
import Session from "./Session";
import ImageSpeaker from "./ImageSpeaker";

function SpeakerUi({id,nom,prenom,bio,company,twitter,sessions}) {
    return(
        <div className='ui card'>
          <ImageSpeaker  id={id}/>

         
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

            <Session  sessions={sessions} />
            <span>
              <i className='home icon'>{twitter}</i>
            </span>
          </div>
          
        </div> 
            
    )  
}
export default SpeakerUi;