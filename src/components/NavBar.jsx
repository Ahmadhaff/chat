import { UserAuth } from "../context/AuthContext";

const NavBar = () => {
  const {currentUser , logout} = UserAuth() ;

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="navbar bg-neutral text-neutral-content">
        <div className="containerWrap flex justify-between">
          <a className="btn btn-ghost normal-case text-xl">Chat</a>
          {currentUser ? <button onClick={handleLogout}>logout</button> : ""}
        </div>
    </div>
  );
};

export default NavBar;
