import React, { useState } from 'react'

const TODOListMAin = () => {
    const [name,setName]=useState(["Sumanth","Narendra","Bhargav","Aravind"]);
    const [input,setInput]=useState("");
    const addItems=()=>{
        if(input.trim()!==""){
        setName([...name,input]);
        setInput("");
        }
    
    }
    const deleteItems=(index)=>{
        setName(name.filter((e,i)=> i!== index))
    }
    const handleInput=(event)=>{
        setInput(event.target.value);
    }
    const upArrow=(index)=>{
        if(index>0){
            const copy=[...name];
            [copy[index],copy[index-1]]=[copy[index-1],copy[index]];
            setName(copy);
        }
    }
    const downArrow=(index)=>{
        if(index<name.length-1){
            const copy=[...name];
            [copy[index],copy[index+1]]=[copy[index+1],copy[index]];
            setName(copy);
        }
    }

  return (
    <div className='container'>
    <h1>TODO LIST</h1>
    <input type='text' value={input} onChange={handleInput}/>
    <button className="add" onClick={addItems}>Add</button>
    <ol>
        {name.map((e,index)=><li key={index}>
                                        <span className='text'>{e}</span>
                                        <button className="delete-button" onClick={()=>deleteItems(index)}> Delete</button>
                                        <button className="Up-button" onClick={()=>upArrow(index)}> UP</button>
                                        <button className="down-button" onClick={()=>downArrow(index)}> Down</button>
                                        </li>)}
    </ol>
    </div>
  )
}

export default TODOListMAin