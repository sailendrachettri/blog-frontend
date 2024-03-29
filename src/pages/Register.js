import { useState } from "react";

export default function Register(){
    // STATE VARIABLES
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // FUNCTIONS
    async function register(ev){
        ev.preventDefault();

        const response = await fetch('https://mernbackend-v71f.onrender.com/register', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-type': 'application/json'}
        })

        if(response.status === 200)
            alert("User created successfully!");
        else
            alert('Registration failed');
    }

    return(
        <>
            <form className="register" onSubmit={register}>
                <h1>Register</h1>
                <input type="text" 
                    placeholder="username" 
                    value={username}
                    onChange={ev => setUsername(ev.target.value)} 
                />
                <input type="password"
                    placeholder="password"
                    value={password}
                    onChange={ev => setPassword(ev.target.value)}
                />
                <button>Register</button>
            </form>
        </>
    );
}