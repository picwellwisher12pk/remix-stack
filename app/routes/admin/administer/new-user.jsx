import React, { useState } from "react";

export default function AddUserForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [email, setEmail] = useState("");
  const [telephoneWork, setTelephoneWork] = useState("");
  const [telephoneCell, setTelephoneCell] = useState("");
  const [roles, setRoles] = useState([]);
  const [regions, setRegions] = useState([]);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (name === "roles") {
      if (checked) {
        setRoles([...roles, event.target.value]);
      } else {
        setRoles(roles.filter((role) => role !== event.target.value));
      }
    } else if (name === "regions") {
      if (checked) {
        setRegions([...regions, event.target.value]);
      } else {
        setRegions(regions.filter((region) => region !== event.target.value));
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission or other actions here
    // You can access the form values in the state variables
    console.log({
      firstName,
      lastName,
      employeeId,
      email,
      telephoneWork,
      telephoneCell,
      roles,
      regions,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="h2">Add User</h1>
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="employeeId" className="form-label">
            GMS Employee ID
          </label>
          <input
            type="text"
            className="form-control"
            id="employeeId"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="telephoneWork" className="form-label">
            Telephone - Work
          </label>
          <input
            type="text"
            className="form-control"
            id="telephoneWork"
            value={telephoneWork}
            onChange={(e) => setTelephoneWork(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="telephoneCell" className="form-label">
            Telephone - Cell
          </label>
          <input
            type="text"
            className="form-control"
            id="telephoneCell"
            value={telephoneCell}
            onChange={(e) => setTelephoneCell(e.target.value)}
          />
        </div>
      </div>
      <h2 className="h4">Select Roles</h2>
      <div className="row mb-3">
        <div className="col-md-6">
          <div>
            <input
              type="checkbox"
              id="administrator"
              name="roles"
              value="Administrator"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="administrator">Administrator</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="approverCEO"
              name="roles"
              value="Approver - CEO"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="approverCEO">Approver - CEO</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="approverCOO"
              name="roles"
              value="Approver - COO"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="approverCOO">Approver - COO</label>
          </div>
        </div>
        <div className="col-md-6">
          <div>
            <input
              type="checkbox"
              id="approverLevel1"
              name="roles"
              value="Approver - Level 1"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="approverLevel1">Approver - Level 1</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="approver2"
              name="roles"
              value="Approver - 2"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="approver2">Approver - 2</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="requesterHR"
              name="roles"
              value="Requester - HR"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="requesterHR">Requester - HR</label>
          </div>
        </div>
      </div>
      <h2 className="h4">Select Regions</h2>
      <div className="row mb-3">
        <div className="col-md-6">
          <div>
            <input
              type="checkbox"
              id="csbgBrunswickNsc"
              name="regions"
              value="CSBG - Brunswick NSC"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="csbgBrunswickNsc">CSBG - Brunswick NSC</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="csbgElizabethtownNsc"
              name="regions"
              value="CSBG - Elizabethtown NSC"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="csbgElizabethtownNsc">
              CSBG - Elizabethtown NSC
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="csbgHokeNsc"
              name="regions"
              value="CSBG - Hoke NSC"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="csbgHokeNsc">CSBG - Hoke NSC</label>
          </div>
        </div>
        <div className="col-md-6">
          <div>
            <input
              type="checkbox"
              id="csbgLumbertonNsc"
              name="regions"
              value="CSBG - Lumberton NSC"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="csbgLumbertonNsc">CSBG - Lumberton NSC</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="headStartElizabethtownHsc"
              name="regions"
              value="Head Start - Elizabethtown HSC"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="headStartElizabethtownHsc">
              Head Start - Elizabethtown HSC
            </label>
          </div>
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Add User
      </button>
    </form>
  );
}
