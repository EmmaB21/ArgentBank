import "../style/main.css"
import Account from "../components/Account"

function User() {
    return (
        <div className='main account-bg-dark'>
            <div className="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <button className="edit-button">Edit Name</button>
            </div>
            <h2 class="sr-only">Accounts</h2>
            <Account
                title="Argent Bank Checking (x8349)"
                amount="$2,082.79"
                text="Available Balance"
            />
            <Account
                title="Argent Bank Savings (x6712)"
                amount="$10,928.42"
                text="Available Balance"
            />
            <Account
                title="Argent Bank Credit Card (x8349)"
                amount="$184.30"
                text="Current Balance"
            />
        </div>
    )
}

export default User