import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-10 pt-[15%] items-center top-0 left-0 bg-blue-950 h-full w-1/6">
      <button
        onClick={() => {
          navigate("/profile");
        }}
        className="text-white text-2xl hover:bg-blue-900 active:bg-blue-800 w-full h-15"
      >
        Profile
      </button>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="text-white text-2xl hover:bg-blue-900 active:bg-blue-800 w-full h-15"
      >
        Dashboard
      </button>
      <button
        onClick={() => {
          navigate("/tasks");
        }}
        className="text-white text-2xl hover:bg-blue-900 active:bg-blue-800 w-full h-15"
      >
        Tasks
      </button>
      <button
        onClick={() => {
          navigate("/calendar");
        }}
        className="text-white text-2xl hover:bg-blue-900 active:bg-blue-800 w-full h-15"
      >
        Calendar
      </button>
    </div>
  );
}

export default Navbar;
