import { NavLink } from "react-router-dom";

const FormLogin = () => {

    const handleLogin = (event) => {
        event.preventDefault();
        console.log(event.target.email.value)
    }

    return (
        <div onSubmit={handleLogin}>
            <form className="fieldset bg-base-200 border-base-300 rounded-box w-xs border my-6  p-4 mx-auto">
                <legend className="fieldset-legend text-xl font-bold">Login</legend>

                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" name="email" />

                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" name="password" />

                <button className="btn btn-neutral mt-4">Login</button>
                <div>
                    <label className="label mt-3">don't have any account </label> <NavLink to='/registerForm' className="font-bold">Register</NavLink> 
                </div>
            </form>
        </div>
    );
};

export default FormLogin;