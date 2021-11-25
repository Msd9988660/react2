import React, { useState } from "react";



function Form() {
const [person,setperson]=useState({
username:'',
email:'',
phone:'',
password:''
})

const[client,setclient]=useState([]);

const change = (e) =>{
 const name=e.target.name;
 const value=e.target.value;
 console.log(name,value);

 setperson({...person, [name]:value})
}

const render = (d) =>{
  d.preventDefault()
  const {username,email,phone,password}=person;
  if(username && email &&   phone && password){ 
  const newUser={...person , id: new Date().getTime().toString()}

  setclient([...client, newUser]);

  setperson({username:"",email:'',phone:'',password:''})     
}else{
  alert('Please fill data completely')
}

}
  return (
    <div>
      <form action="" onSubmit={render} >
          <div>
             <label htmlFor="username">name</label>
             <input type="text"  name='username' value={person.username} onChange={change}  id='username' />
             </div>
          <div>
             <label htmlFor="email">email</label>
             <input type="email"  name='email' value={person.email} onChange={change} id='email' />
             </div>
          <div>
             <label htmlFor="phone">phone</label>
             <input type="text"  name='phone' value={person.phone} onChange={change}  id='phone' />
             </div>
          <div>
             <label htmlFor="password">password</label>
             <input type="password"  name='password' value={person.password} onChange={change}  id='password' />
             </div>
             <button type='submit'>registration</button>
      </form>
<div>
    {client.map((sa)=>{
        const {id,username,email,phone,password}=sa;
        return(
            <div key={id}>
            <h1>
             {username}     <br />
             {email}       <br />
             {phone}       <br />
             {password} 
             </h1>

            </div>
        )
    })}
</div>

    </div>
  );
}

export default Form;
  