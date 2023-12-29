

const SimpleForm = () => {
    const handleSubmit=e=>{
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
        console.log("Form submitted")
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name"></input>
                <p></p>
                <input type="email" name="email"></input>
                <p></p>
                <input type="text" name="phone"></input>
                <p></p>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
};

export default SimpleForm;