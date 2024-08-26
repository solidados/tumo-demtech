import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './lawyer.css';

import { Link } from 'react-router-dom';

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
    <>
    <div class="blue-banner">
    <div class="bcrumb">
      <ol id="js-breadcrumbs" class="breadcrumbs">
        <li itemprop="itemListElement">
          <span itemprop="name">Our Services</span>
        </li>
        <li itemprop="itemListElement">
          <span itemprop="name"> &rarr; Find a Lawyer</span>
        </li>
      </ol>
    </div>
    <header class="header-syle">
      <h1>Lawyers</h1>
    </header>
  </div>
    <div className="containerr">
      <div className="user-list">
        {users.map(user => (
          <Link to={`/lawyerprofile/${user._id}`} key={user._id} className="user-card">
            <div className="user-card-inner">
              {/* Add a "Verified" badge */}
              <div className="verified-badge">
                <span>✔</span> Verified
              </div>
              <img 
                src={user.photoPath || 'default-avatar.png'} 
                alt={`${user.fullname} ${user.lastname}`} 
                className="user-avatar" 
              />
              <div className="info">
                <h2>{user.fullname} {user.surname}</h2>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Organization: {user.organization}</p>
                <p>Birthday: {new Date(user.birthday).toLocaleDateString()}</p>
                <Link to={`/lawyerprofile/${user._id}`} className="profile-link">View Profile</Link>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </>
  );
}
