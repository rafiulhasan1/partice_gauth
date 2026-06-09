import { GoogleAuthProvider } from "firebase/auth/web-extension";

const Login = () => {

    const provider = new GoogleAuthProvider()
    
    const loginWithGoogle = () =>{
        console.log("hiiii",provider)
    }

    return (
        <div className="mt-5 flex justify-center">
            <button onClick={loginWithGoogle} className="btn btn-primary">sign in with google</button>
        </div>
    );
};

export default Login;