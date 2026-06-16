
import { NavLink } from 'react-router-dom';
const RegisterForm = () => {

    const handleRegister = (event) =>{
        event.preventDefault();
        console.log(event.target.name.value)
    }

    return (
        <form onSubmit={handleRegister}  className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 my-6 mx-auto">
                <legend className="fieldset-legend text-xl font-bold">Register</legend>

                <label className="label">Name</label>
                <input type="text" className="input" placeholder="Name" name="name" />

                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" name="email" />

                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" name="password" />

                <button className="btn btn-neutral mt-4">Register</button>
                <div>
                    <label className="label mt-3">Already have an account </label> <NavLink className="font-bold" to='/formLogin'>Login</NavLink> 
                </div>
            </form>
    );
};

export default RegisterForm;