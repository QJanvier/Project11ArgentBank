import UserEdit from "../../Components/User/UserEdit";
import Accounts from "../../Components/Accounts/Accounts";

function Profile() {
    return (
        <>
        <main className="main bg-dark">
            <UserEdit />
            <h2 className="sr-only">Accounts</h2>
            <Accounts title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance" />
            <Accounts title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
            <Accounts title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" />
        </main>
        </>
    )
}

export default Profile