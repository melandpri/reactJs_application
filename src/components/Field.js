import React , {useState} from "react";

const Field = () => {

    const [term, setTerm] = useState("");
    return (
        <div>
        <div className='ui icon input'>
          <i className='search icon'></i>
          <input
            type='text'
            onChange={(e) => setTerm(e.target.value)}
            placeholder="taper votre nom"
            value={term}
          />
        </div>
        <div>value: {term}</div>
        <br />
      </div>
      );
}
 
export default Field;