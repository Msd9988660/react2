import React , {useState}from 'react'
// import {Button} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import List from './List'
 
function Todolist() {
const [item, setitem]=useState('');
const [newitem, setnewitem]=useState([])


const change =(d) =>{
  const res = d.target.value;
  setitem(res);
}
const list=()=>{
    setnewitem((preValue)=>{
return[ ...preValue, item]
    })
    setitem('')
}

    return (
        <>
        <h1>Todo list</h1>
      <br />
      <input type="text" value={item}  placeholder="Add an item" onChange={change} />   
          <button onClick={list}>  <AddIcon/> </button>
          <br />
          <ul>


            { newitem.map((val, index)=>{

        return (     <List key={index} text={val}/>    )
             })}
          </ul>
          <br />

        </>
    )
}

export default Todolist
