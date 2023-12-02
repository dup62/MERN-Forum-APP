import { useUsersContext } from '../hooks/useUsersContext';

import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale'

const UsersDetails = ({ user }) => {

  const { dispatch } = useUsersContext()

  const handleDelete = async () => {
    const response = await fetch(`/api/users/${user._id}`, {
      method: 'DELETE'
    })

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: 'DELETE_USERS', payload: json })
    }

  };

  return (
    <div className="user-details">
      <h4>{user.username}</h4>
      <p><strong>Mail: </strong>{user.email}</p>
      <p><strong>Number of posts: </strong>{user.posts.length}</p>
      {user.createdAt && (
        <p>{formatDistanceToNow(new Date(user.createdAt), { addSuffix: true, locale: fr })}</p>
      )}
      <span className='material-symbols-outlined' onClick={handleDelete}>Delete</span>
    </div>
  )
}

export default UsersDetails