import SpeakerUi from "./SpeakerUi";
import { data } from "../data";
import React,{ useEffect ,useState } from "react";
import UserPlaceHolder from "./UserPlaceHolder";

//le useEffect est utilisé pour récupérer les données








const SpeakerCard = () => {
    const [data,setData]= useState([]);
    const [isError ,setIsError] = useState(false);
    const [isLoading , setIsLoading] = useState(false);

    const fetchData = async() => {
      try {
        const response = await  fetch('https://server-speakers.herokuapp.com/speakers')
        const data = await response.json();
            setData(data);

            setIsLoading(false);
        
      } catch (error) {
        setIsError(true);

        setIsLoading(false);
        
      }}
      
   
    useEffect(()=>{
        setIsLoading(true);
        fetchData()
    },[])

     if(isLoading) return <UserPlaceHolder />;
     if(isError)
        return(
            <div style={{ color:'red'}} className='ui text'>
                Nous avons rencontré une erreur 

            </div>
        );

    return ( 

        <div className='ui four colunn stackable grid'>


        {data.map((speaker,index)=>{
        
        return (
            <div className='four wide column' key={index}>


            <SpeakerUi 
            id ={speaker.id}
            nom ={speaker.first}
            company={speaker.company}
            prenom= {speaker.last}
            bio= {speaker.bio}
            twitter ={speaker.twitter}
            sessions={speaker.sessions}
            key={index}/>
            </div>
        )
        }
        )}
    </div>
     );
}

export default SpeakerCard;