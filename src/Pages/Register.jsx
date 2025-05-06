import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/auth/register', formData);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Registration failed.');
    }
  };

  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Register
        </button>

        {message && <p className="mt-4 text-center text-sm text-red-600">{message}</p>}

        <button
          type="button"
          onClick={goToLogin}
          className="mt-4 w-full text-blue-600 hover:underline text-sm"
        >
          Already have an account? Go to Login
        </button>
      </form>
    </div>
  );
};

export default Register;
