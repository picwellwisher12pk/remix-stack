import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";

export default function UsersPage() {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between">
        <Link
          className="btn btn-success btn-sm"
          to="/admin/administer/new-user"
        >
          + Add User
        </Link>
        <div className="input-group" style={{ width: 240 }}>
          <input
            type="text"
            className="form-control"
            placeholder="Search Users"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Search
          </button>
        </div>
      </div>
      {!users ? (
        <div class="d-flex justify-content-center p-3">Loading...</div>
      ) : (
        <table className="table mt-3">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Status</th>
              <th scope="col">Role/s</th>
              <th scope="col">Locations</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {users.users.map((user) => (
              <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>Active</td>
                <td>{user.roles}</td>
                <td>{user.address.address}</td>
                <td>...</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
