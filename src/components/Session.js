
const Session = ({sessions}) => {
    return (
      sessions.map(({eventYear,title},index) => {
        return(
          <div className="extra content" key={index}>
            <span>
               <i className="bullhorn icon "> {title}</i>
               <i className="bullhorn icon "> {eventYear}</i>

            </span>

          </div>
        )
      }
      
        
     ) 
    );
}

export default Session;