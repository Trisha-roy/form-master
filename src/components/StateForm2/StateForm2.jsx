import { useState } from "react";


const StateForm2 = () => {

    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[pass,setPass]=useState('')
    const[error,setError]=useState('')
    
    const handleSubmit=e=>{
        e.preventDefault();
        if(pass.length<8){
            setError('Pass must have 8 character')
        }else{
            setError('')
            console.log(name,email,pass)
        }
        
    }

    const handleName=e=>{
        setName(e.target.value)
    }
    const handleEmail=e=>{
        setEmail(e.target.value)
    }
    const handlePass=e=>{
        setPass(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleName} type="text" name="name" ></input>
                <p></p>
                <input onChange={handleEmail} type="email" name="email"></input>
                <p></p>
                <input onChange={handlePass} type="password" name="password" ></input>
                <p></p>
                <input type="submit"></input>
                {
                    error&&<p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StateForm2;