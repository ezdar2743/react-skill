import React, { useEffect, useState } from 'react';

const Sample = () => {
    const [name,setName] = useState('');
    const [year,setYear] = useState('');
    const onChangeName= (e)=>{
        setName(e.target.value)
    }
    const onChangeYear= (e)=>{
        setYear(e.target.value)
    }
    useEffect(()=>{
        console.log('effet')
        console.log(name)
        return()=>{
            console.log('clean')
        console.log(name)
        }
        },[])
    
    

    return (
        <>
        <input type="text" value={name} onChange={onChangeName}/>
        <input type="text" value={year} onChange={onChangeYear}/>
        <div>{name} 년도 {year}</div>
        </>
    );
};

export default Sample;