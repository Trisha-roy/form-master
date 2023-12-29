import { useState } from "react";

const StateFullForm = () => {


    const[email,setEmail]=useState(null);
    const[name,setName]=useState('');
    const[pass,setPass]=useState(null);
    const[error,setError]=useState('')

    const handleSubmit=e=>{
        e.preventDefault();
        if(pass.length<6){
            setError('Password must be above 6 character longer')
        }else{
            setError('');
            console.log(`Name : ${name} Email: ${email}  PassWord: ${pass}`)
        }
        

    }
    const handleEmailChange=e=>{

        setEmail(e.target.value)
    }
    const handleNameChange=e=>{
        setName(e.target.value)
    }
    const handlePassChange=e=>{
        setPass(e.target.value)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange} type="text" name="name"></input>
                <p></p>
                <input onChange={handleEmailChange} type="email" name="email"></input>
                <p></p>
                <input onChange={handlePassChange} type="password" name="password"></input>
                <p></p>
                <input type="submit" value="Submit"></input>
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StateFullForm;