import React, { useState, useEffect } from 'react';
import ListComponent from './ListComponent';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch users');
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading users...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>User List</h2>
      <ListComponent
        items={users}
        renderItem={(user) => (
          <div>
            <strong>{user.name}</strong> ({user.email})
          </div>
        )}
      />
    </div>
  );
};

export default UserList;