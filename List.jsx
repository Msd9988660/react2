import React, { useState } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
const List = (props) =>{
    const [line,setline]=useState(false)
 
    const cutIt = () =>{
         setline(true)
    }

    return (
<div>
    <span onClick={cutIt}> 

    <DeleteIcon/> 
    
    </span>

    <span style={{ textDecoration : line ? 'line-through' : "none"}}>
    {props.text}
    </span>  
    </div>)
}
export default List;