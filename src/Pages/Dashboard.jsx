import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  function logOut() {
    localStorage.removeItem('token');
    navigate('/login')
  }

  return (
    <div className="flex flex-col items-center gap-2">
      Dashboard
      <button 
      className="bg-blue-500 w-24 h-12 rounded-lg hover:bg-blue-700 transition-colors duration-100"
      onClick={logOut}>Log Out</button>
    </div>
  )
}

export default Dashboard