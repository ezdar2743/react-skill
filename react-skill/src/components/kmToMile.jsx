import React,{useState} from 'react';

const KmToMile = () => {
    const[distance,setDistance] = useState(0)
    const[controller,setController]= useState(false);
    const onChange = (e)=>{
        setDistance(e.target.value)
    }
    const onReset=()=>{
        setDistance(0)
    }
    const onFlip=()=>{
        setDistance(0)
        setController(current => !current)
    }
    return (
        <div>
            <label htmlFor="km">km</label>
            <input 
            type="number"
            onChange={onChange}
            value={controller ? Math.round(distance/1.6) : distance}
            placeholder='km'
            id='km'
            disabled={controller}/>

            <label htmlFor="mile">Mile</label>
            <input 
            type="number"
            onChange={onChange}
            value={!controller? distance*1.6: distance}
            placeholder='Mile'
            id='mile' 
            disabled={!controller}/>

            

            <button onClick={onReset}>Reset</button>
            <button onClick={onFlip}>Flip</button>
        </div>
    );
};

export default KmToMile;