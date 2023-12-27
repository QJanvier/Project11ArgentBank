import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../redux/reducers/authSlice';
import EditButton from '../EditButton/EditButton';
import Account from '../Account/Account';
import Header from '../../Components/Header/Header';

function ProfilePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(state => state.auth.token) || localStorage.getItem('token');
  const [profileData, setProfileData] = useState({ id: '', email: '', userName: '' });

  useEffect(() => {
    if (!token) {
      // Pas de token, déconnexion et redirection
      dispatch(logout());
      navigate('/login');
    } else {
      fetchData();
    }
  }, [token, dispatch, navigate]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST', 
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
  

      const data = await response.json();
      if (data.status === 200) {
        setProfileData({ 
          id: data.body.id, 
          email: data.body.email,
          userName: data.body.userName // Assurez-vous que cette donnée est incluse dans la réponse
        });
      }
    } catch (error) {
      console.error('Error:', error);
      localStorage.removeItem('token');
      dispatch(logout());
      navigate('/login');
    }
  };

  return (
    <>
<Header profileData={{ userName: profileData.userName, userId: profileData.id }} />
      <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back<br />{profileData.userName}!</h1>
        <EditButton onProfileUpdate={setProfileData} />
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance"
      />
      <Account
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        description="Available Balance"
      />
      <Account
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        description="Current Balance"
      />
    </main>
      </>
  );
}

export default ProfilePage;
