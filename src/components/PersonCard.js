// Functional component version
//import React, {useState} from 'react';


// const PersonCard = (props) => {
//     const [ count, setCount ] = useState(props.age);
//     return (
//         <div>
//             <h1>{ props.last_name }, { props.first_name }</h1>
//             <p>Age: { count }</p>
//             <p>Hair Color: { props.hair_color }</p>
//             <button onClick={ () => setCount(count+1) }>
//                 Birthday Button for { props.first_name } { props.last_name }
//             </button>
//         </div>
//     )
// }


// Class Component version
import React, {Component} from 'react';


class PersonCard extends Component {
    render() {
        const {firstName, lastName, age, hairColor} = this.props;
        return (
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
            </div>
        )
    }
}


export default PersonCard;
