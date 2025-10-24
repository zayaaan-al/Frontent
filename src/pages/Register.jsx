import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [cpass, setCpass] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (pass !== cpass) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('/adduser', {
        name,
        email,
        pass,
        cpass,
      });

      alert(response.data.msg);

      // ✅ Redirect to home after registration
      navigate('/home');
    } catch (error) {
      alert(error.response?.data?.msg || 'Registration failed');
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister} className="auth-form">
        <input type="text" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={pass} onChange={e => setPass(e.target.value)} required />
        <input type="password" placeholder="Confirm Password" value={cpass} onChange={e => setCpass(e.target.value)} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
