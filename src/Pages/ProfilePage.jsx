import Navbar from "../Components/Navbar";

function ProfilePage({ username = "User", email = "user@example.com" }) {
  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="flex-1 flex justify-center items-center bg-gray-50 p-10">
        <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md text-center">
          <div className="mb-6">
            <div className="w-24 h-24 mx-auto bg-blue-200 rounded-full flex items-center justify-center text-4xl font-bold text-white">
              {username.charAt(0).toUpperCase()}
            </div>
          </div>
          <h2 className="text-2xl font-semibold mb-2">{username}</h2>
          <p className="text-gray-600 mb-6">{email}</p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
