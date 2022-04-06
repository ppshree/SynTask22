import React,{useState} from 'react'
import './Task.css'
const Task = () => {
    const [count, setCount] = useState(100);
    //const [count, setCount] = useState([1,2]);

    let counter;
    const customStyle={
        color:'',
        fontSize: '150px'
    }
    if(count>100 && count%2==0 && count%3==0){
        counter=count;
        customStyle.color='orange'
    }else if(count>100 && count%3==0){
        counter=count;
        customStyle.color='green'
    }else if(count>100 && count%2==0){
        counter=count;
        customStyle.color='blue'
    }else{
        counter=count;
    }
   const btnHandler=()=>{
        setCount(count+1)
    }
    // const btnHandler=()=>{
    //     setCount([...count,{}])
    // }
    
  return (
    <div className='counter'>
<h1 style={customStyle}>{counter}</h1>
<button onClick={btnHandler} className='btn-button'>Increase Number</button>
    </div>
  )
}

export default Task