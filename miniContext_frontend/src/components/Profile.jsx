import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  return (
    <div className="bg-white p-6 rounded shadow-md w-full max-w-md text-center">
      {!user ? (
        <p className="text-red-600 font-medium">
          Login is required! Please login!
        </p>
      ) : (
        <p className="text-green-700 font-semibold">
          Welcome {user.username}! useContext is working fine.
        </p>
      )}
    </div>
  );
}

export default Profile;
