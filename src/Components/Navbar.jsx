import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-1">
      <button
        onClick={() => {
          navigate("/profile");
        }}
        className="bg-blue-500 w-24 h-12 rounded-lg hover:bg-blue-700 transition-colors duration-100"
      >
        Profile
      </button>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-blue-500 w-24 h-12 rounded-lg hover:bg-blue-700 transition-colors duration-100"
      >
        Dashboard
      </button>
      <button
        onClick={() => {
          navigate("/tasks");
        }}
        className="bg-blue-500 w-24 h-12 rounded-lg hover:bg-blue-700 transition-colors duration-100"
      >
        Tasks
      </button>
      <button
        onClick={() => {
          navigate("/calendar");
        }}
        className="bg-blue-500 w-24 h-12 rounded-lg hover:bg-blue-700 transition-colors duration-100"
      >
        Calendar
      </button>
    </div>
  );
}

export default Navbar;
