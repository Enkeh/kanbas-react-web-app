import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="list-group">
      <Link
        to="/project/home"
        className="list-group-item list-group-item-action"
      >
        Home
      </Link>
      <Link
        to="/project/search"
        className="list-group-item list-group-item-action"
      >
        Search
      </Link>
      <Link
        to="/project/signin"
        className="list-group-item list-group-item-action"
      >
        Signin
      </Link>
      <Link
        to="/project/signup"
        className="list-group-item list-group-item-action"
      >
        Signup
      </Link>
      <Link
        to="/project/account"
        className="list-group-item list-group-item-action"
      >
        Account
      </Link>
    </div>
  );
}

export default Nav