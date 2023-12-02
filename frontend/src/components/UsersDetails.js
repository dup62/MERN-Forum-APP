const UsersDetails = ({ user }) => {

    return (
      <div className="user-details">
        <h4>{user.username}</h4>
        <p><strong>Mail: </strong>{user.email}</p>
        <p><strong>Number of posts: </strong>{user.posts.length}</p>
        <p>{user.createdAt}</p>
        <span>Delete</span>
      </div>
    )
  }
  
export default UsersDetails