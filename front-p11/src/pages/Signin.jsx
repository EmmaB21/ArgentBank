import Form from "../components/Form"
import "../style/main.css"

function Signin() {
    return (
        <div className='main sign-bg-dark'>
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <Form />
            </section>
        </div>
    )
}

export default Signin