import React from 'react';
import 'tachyons';

const Card = ({name,email,id}) =>{
    //const{name,email,id}=props;
    return (
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5' >
        <img src={`https://robohash.org/${id}?200*200`} alt="Robot"/>
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    </div>
    );
}
export default Card;