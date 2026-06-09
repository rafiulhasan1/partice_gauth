import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from './../../../Firebase/firebase.init';
import { useState } from "react";

const Login = () => {

    const [user, setUser] = useState(null)

    const provider = new GoogleAuthProvider()

    const loginWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result.user)
                setUser(result.user)
            })
            .catch((error) => {
                console.log("Error", error)
                setUser(null)
            })
    }

    const logout = () => {
        signOut(auth)
            .then(() => {
                console.log("sign-out successful")
                setUser(null)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div>
            <div className="m-5 flex justify-center">
                <button onClick={loginWithGoogle} className="btn btn-primary">sign in with google</button>
                <button onClick={logout} className="btn btn-primary ml-3">Logout</button>
            </div>
            {
                user && <div>
                    <h4>{user.displayName}</h4>
                    <p>{user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;