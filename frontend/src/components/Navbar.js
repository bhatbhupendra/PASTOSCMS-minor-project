import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext(); //for getting the data
  const handleClick = () => {
    logout();
  };
  return (
    <header>
      <div>
        <Link to="/">
          <h1>PASTOSCMS</h1>
        </Link>
        <nav>
          {user && (
            <div>
              <span>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sighup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
