import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

function Dashboard() {
  const navigate = useNavigate();

  function logOut() {
    localStorage.removeItem('token');
    navigate('/login')
  }

  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center">
        Dashboard
        <button 
          className="bg-blue-500 w-24 h-12 rounded-lg hover:bg-blue-700 transition-colors duration-100"
          onClick={logOut}>
          Log Out
        </button>
      </div>
    </div>
  )
}

export default Dashboard;