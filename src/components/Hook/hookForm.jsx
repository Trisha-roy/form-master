import useInputState from "./useInputState";


const hookForm = () => {

    const [name,handleNameChange]=useInputState('')

    const handleSubmit=e=>{
        console.log(name)
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChange}  type="text" name="name"></input>
                <p></p>
                <input  type="email" name="email"></input>
                <p></p>
                <input  type="password" name="password"></input>
                <p></p>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
};

export default hookForm;