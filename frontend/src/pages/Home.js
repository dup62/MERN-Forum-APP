import { useEffect, useState } from "react";

// Compoments
import UsersDetails from "../components/UsersDetails";

const Home = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('/api/users');
            const data = await response.json();

            if (response.ok) {
                setUsers(data);
            }

        };

        fetchUsers();

    }, []);

    return (
        <div className="home">
            <div className="users">
                { users && users.map(user => (
                    <UsersDetails user={user} key={user._id} />
                )) }
            </div>
        </div>
    );
}

export default Home;