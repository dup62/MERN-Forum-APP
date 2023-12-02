import { useState } from 'react';
import { useUsersContext } from '../hooks/useUsersContext';

const UserForm = () => {
    const { dispatch } = useUsersContext()

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = { username, password, email };

        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json();

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setError(null)
            setUsername('')
            setPassword('')
            setEmail('')
            dispatch({type: 'CREATE_USERS', payload: json})
            console.log('New users added:', json)
        }

    };

    return (
        <form className="user-form" onSubmit={handleSubmit}>
            <h3>Créer un nouvel utilisateur</h3>

            <label htmlFor="username">Nom d'utilisateur</label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <label htmlFor="password">Mot de passe</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <button>Add User</button>
            {error && <div className="error">{error}</div>}

        </form>
    );
};

export default UserForm;