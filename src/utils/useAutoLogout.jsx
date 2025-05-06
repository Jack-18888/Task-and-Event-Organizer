import jwt_decode from "jwt-decode";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function useAutoLogout() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    const decoded = jwt_decode(token);
    const timeout = decoded.exp * 1000 - Date.now();

    if (timeout <= 0) {
      localStorage.removeItem('token');
      navigate('/login');
    } else {
      const timer = setTimeout(() => {
        localStorage.removeItem('token');
        navigate('/login');
      }, timeout);

      return () => clearTimeout(timer);
    }
  }, [navigate]);
};

export default useAutoLogout;
