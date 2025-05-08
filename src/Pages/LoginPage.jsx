import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function login(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:5000/auth/login', {
        username,
        password,
      });
      localStorage.setItem('token', data.token);
      navigate('/');
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  function goToRegister() {
    navigate('/register')
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={login} className="bg-white p-6 rounded shadow-md w-96 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input 
        className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        <input 
        className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition duration-200">
          Login
        </button>
        <button
          type="button"
          onClick={goToRegister}
          className="mt-4 w-full text-blue-600 hover:underline text-sm"
        >
          Doesn't have an account? Go to Register
        </button>
      </form>
    </div>
  );
}

export default Login;