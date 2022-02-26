import React, { useMemo, useState } from 'react';

const Average = () => {
    
    const [number,setNumber]=useState('');
    const [list, setList] = useState([]);
    const getAverage= (number)=>{
        console.log('ss')
        if(number.length===0) return 0;
        const sum = number.reduce((a,b)=>a+b)
        return sum/number.length;
    }
   
        const onChange = e =>{
            setNumber(e.target.value);

        };
        const onInsert = e=>{
            const nextList= list.concat(parseInt(number));
            setList(nextList)
            setNumber('')
        }
     const avg = useMemo(()=>getAverage(list),[list])


    

    return (
        <>
        <input type="text" value={number} onChange={onChange}/>
        <button onClick={onInsert}>submit</button>
        <ul>
            {list.map((value,index)=>(
                <li key={index}>{value}</li>
            ))}
        </ul>   
        <div>{avg}</div>
        </>
    );
};

export default Average;