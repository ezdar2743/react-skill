import React, { useState } from 'react';

const MinuteTohour = () => {
    const[time,setTime] = useState(0)
    const[controller,setController]= useState(false);
    const onChange = (e)=>{
        setTime(e.target.value)
    }
    const onReset=()=>{
        setTime(0)
    }
    const onFlip=()=>{
        setTime(0)
        setController(current => !current)
    }
    
    return (
        <div>
            <label htmlFor="hour">Hour</label>
            <input 
            type="number"
            onChange={onChange}
            value={controller ? Math.round(time/60) : time}
            placeholder='Hour'
            id='hour'
            disabled={controller}/>

            <label htmlFor="minute">Minute</label>
            <input 
            type="number"
            onChange={onChange}
            value={!controller? time*60: time}
            placeholder='Minute'
            id='minute' 
            disabled={!controller}/>

            

            <button onClick={onReset}>Reset</button>
            <button onClick={onFlip}>Flip</button>
        </div>

    );
};

export default MinuteTohour;