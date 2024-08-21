import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './lawyer.css';


export default function Lawyer() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users');
        setUsers(response.data);
      } catch (err) {
        setError('Error fetching users');
        console.error('Error fetching users:', err);
      }
    };

    fetchUsers();
  }, []);

  if (error) return <div>{error}</div>;
  if (!users.length) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>All Users</h1>
      <div className="user-list">
        {users.map(user => (
          <div key={user._id} className="user-card">
            <img src={user.avatar || 'default-avatar.png'} alt={`${user.fullname} ${user.lastname}`} />
            <div className="info">
              <h2>{user.fullname} {user.lastname}</h2>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
              <p>Organization: {user.organization}</p>
              <p>Birthday: {new Date(user.birthday).toLocaleDateString()}</p>
              <Link to={`/lawyerprofile/${user._id}`}>View Profile</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
