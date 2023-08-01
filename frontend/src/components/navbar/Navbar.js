import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
import "./navbar.scss";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext(); //for getting the data
  const handleClick = () => {
    logout();
  };
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>PASTOSCMS</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" className="icon notifications" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-1/346763091_221518153920330_6486623292985375490_n.jpg?stp=dst-jpg_s320x320&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=FBS9TYpGnOsAX9CJ59N&_nc_ht=scontent.fktm8-1.fna&oh=00_AfB7yEWc_nZPSFUkwOO5MZMWzZCeFEEOEKROABioReXThA&oe=64CDB6A2"
            alt="Profile"
          />
          {user && <span>{user.email}</span>}
        </div>
        <img src="/settings.svg" alt="" className="icon settings" />
        <img src="/logout.svg" alt="" className="icon logout" />
      </div>
    </div>

    // <header>
    //   <div>
    //     <Link to="/">
    //       <h1>PASTOSCMS</h1>
    //     </Link>
    //     <nav>
    //       {user && (
    //         <div>
    //           <span>{user.email}</span>
    //           <button onClick={handleClick}>Log out</button>
    //         </div>
    //       )}
    //       {!user && (
    //         <div>
    //           <Link to="/login">Login</Link>
    //           <Link to="/signup">Sighup</Link>
    //         </div>
    //       )}
    //     </nav>
    //   </div>
    // </header>
  );
};

export default Navbar;
