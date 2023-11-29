import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Account() {
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };
  const save = async () => {
    await client.updateUser(account);
  };
  const signout = async () => {
    await client.signout();
    navigate("/project/signin");
  };
  useEffect(() => {
    fetchAccount();
  }, []);
  return (
    <div className="w-50">
      <h1>Account</h1>
      {account && (
        <div>
            <div className="row">
                <input value={account.password} className="form-control" style={{"max-width" : "20%"}}
                    onChange={(e) => setAccount({ ...account,
                    password: e.target.value })}/>
                <input value={account.firstName} className="form-control" style={{"max-width" : "20%"}}
                    onChange={(e) => setAccount({ ...account,
                    firstName: e.target.value })}/> 
                <input value={account.lastName} className="form-control" style={{"max-width" : "20%"}}
                    onChange={(e) => setAccount({ ...account,
                    lastName: e.target.value })}/>
                <input value={account.dob} className="form-control" style={{"max-width" : "10%"}}
                    onChange={(e) => setAccount({ ...account,
                    dob: e.target.value })}/>
                <input value={account.email} className="form-control" style={{"max-width" : "20%"}}
                    onChange={(e) => setAccount({ ...account,
                    email: e.target.value })}/>
                <select className="form-control" style={{"max-width" : "10%"}} onChange={(e) => setAccount({ ...account,
                    role: e.target.value })}> 
                    <option value="USER">User</option>
                    <option value="ADMIN">Admin</option>
                    <option value="FACULTY">Faculty</option>
                    <option value="STUDENT">Student</option>
                </select>
            </div>
          <br/>
          <button className="btn btn-primary w-100" onClick={save}>
            Save
          </button>
          <Link to="/project/admin/users" className="btn btn-warning w-100">
            Users
          </Link>
          <button className="btn btn-danger w-100" onClick={signout}>
            Signout
          </button>
        </div>
      )}
    </div>
  );
}
export default Account