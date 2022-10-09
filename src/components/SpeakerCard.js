import SpeakerUi from "./SpeakerUi";
import { data } from "../data";
import ImageSpeaker from "./ImageSpeaker";
import Session from "./Session";

const SpeakerCard = () => {
    return ( 
        <div className='ui four colunn stackable grid'>


        {data.map((speaker,index)=>{
        
        return (
            <div className='four wide column' key={index}>
            <ImageSpeaker  image= {`images/speaker-${speaker.id}.jpg`}/>


            <SpeakerUi  
            nom ={speaker.first}
            company={speaker.company}
            prenom= {speaker.last}
            bio= {speaker.bio}
            twitter ={speaker.twitter}
            key={index}/>
             <Session session={speaker.sessions.length}  />

            </div>
            )
        
            
        }
        
        )}

    </div>


     );
}
 
export default SpeakerCard;