import React, {useState} from 'react';


const PersonCard = (props) => {
    const [ count, setCount ] = useState(props.age);
    return (
        <div>
            <h1>{ props.last_name }, { props.first_name }</h1>
            <p>Age: { count }</p>
            <p>Hair Color: { props.hair_color }</p>
            <button onClick={ () => setCount(count+1) }>
                Birthday Button for { props.first_name } { props.last_name }
            </button>
        </div>
    )
}


export default PersonCard;
