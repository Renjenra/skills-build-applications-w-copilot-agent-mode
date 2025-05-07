import React, { useEffect, useState } from 'react';


function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://obscure-tribble-57w75grrp6j37rx-8000.app.github.dev/api/users/')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="card mt-4">
      <div className="card-body">
        <h2 className="card-title text-primary mb-4">Users</h2>
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(users) && users.map(user => (
                <tr key={user._id}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;
