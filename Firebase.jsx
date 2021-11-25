import React,{useState} from 'react'


function Firebase() {

    const [user,setuser]=useState({
        name:'',
        email:'',
        phone:'',
        address:'',
        message:'',

    })

    const change =  (e) =>{
        const name = e.target.name;
        const value = e.target.value;

        setuser({ ...user, [name]:value});
}

 const postData = async (d) =>{
       d.preventDefault();

      const {name, email, phone,address ,message} = user;
      if (name &&  email &&  phone && address  && message){

        const response = await fetch("https://fir-reeact-default-rtdb.firebaseio.com/react-login.json",{
           
            method:'POST',
             header:{'Content-Type':'application/json'},
         body:JSON.stringify({
                  name,
                  email,
                  phone,
                  address,
                  message,
 
         })
        })
        if (response){
            setuser({
             name:'',
             email:'',
             phone:'',
             address:'',
             message:'',
            });
            alert('Data store successfully')
            
        }
          

      }else{
          alert('please fill the data')
      }

   
 }

    return (
        <>
            <h1>Contact Us</h1>
            <form action="nothing" method="POST">  
            <div> <h6> Your Name</h6></div>       
              <div>
                <input type="text" name="name"  value={user.name   } onChange={change} placeholder="Enter your name " autoComplete="off" required />
            </div>
            <div> <h6> Email </h6></div> 
            <div>
                <input type="text" name="email"  value={user.email  } onChange={change}  placeholder="Enter your email " autoComplete="off" required />
            </div>
            <div> <span> Mobile Number</span></div> 
            <div>
                <input type="text" name="phone"  value={user.phone  } onChange={change}   placeholder="Enter your phone  " autoComplete="off" required />
            </div>
            <div> <h6> Address</h6></div> 
            <div>
                <input type="text" name="address"  value={user.address} onChange={change}    placeholder="Enter your address " autoComplete="off" required />
            </div>
            <div> <h6> Message </h6> </div> 
            <div>
                <input type="text" name="message"  value={user.message} onChange={change}     placeholder="Enter your message " autoComplete="off" required />
            </div>
</form>
 <button type='submit' onClick={postData}>submit</button>

        </>
    )
}

export default Firebase
