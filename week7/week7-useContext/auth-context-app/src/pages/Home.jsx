import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

function Home() {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <div>
      <h1>Home</h1>
      {isLoggedIn ? (
        <>
          <p>Welcome you are logged in.</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <p>Please log in to acces more features.</p>
      )}
    </div>
  );
}
export default Home;
