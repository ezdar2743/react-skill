import React, { useState } from 'react';
import KmToMile from './kmToMile';
import MinuteTohour from './minuteTohour';

const Select = () => {
    const[index, setIndex]= useState('xx')
    const onSelect=(e)=>{
        setIndex(e.target.value);
        
    }
    
    return (
        <div>
            <select onChange={onSelect} value={index}>
                <option value='xx'>Select Option</option>
                <option value='0'>Time Convert</option>
                <option value='1'>Distance Convert</option>
            </select>
            <hr/>
            {index ==="0" ?<MinuteTohour/>:null}
            {index ==="1" ?<KmToMile/>:null}
        </div>
    );
};

export default Select;