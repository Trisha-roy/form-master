import { useRef,useEffect } from "react";


const RefForm = () => {
    const nameRef=useRef(null);
    const eamilRef=useRef(null);
    const passRef=useRef(null);


    useEffect(() => {
        
        nameRef.current.focus()
    }, []);


    const handleSubmit=e=>{
        e.preventDefault()
        console.log(nameRef.current.value)
        console.log(eamilRef.current.value)
        console.log(passRef.current.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name="name"></input>
                <p></p>
                <input ref={eamilRef} type="email" name="email"></input>
                <p></p>
                <input ref={passRef} type="password" name="password"></input>
                <p></p>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
};

export default RefForm;