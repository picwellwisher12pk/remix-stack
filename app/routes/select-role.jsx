import { json, redirect } from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";

import loginStyle from "~/styles/login.css";
import logo from "public/logo.png";

export function links() {
  return [{ rel: "stylesheet", href: loginStyle }];
}
export const loader = async ({ request }) => {
  const roles = [
    "Approver - CEO",
    "Approver - COO",
    "Approver - Level 1",
    "Approver - Level 2",
    "Requester - HR",
  ]; //await getRoles();
  return json({ roles });
};

export const meta = () => [{ title: "Select Role" }];

export default function LoginPage() {
  const { roles } = useLoaderData();
  return (
    <div className="card form-signin w-100 m-auto px-5 d-flex flex-column align-items-stretch text-center">
      <img
        src={logo}
        alt="logo"
        style={{ width: 200, height: "auto" }}
        className="height-auto m-auto"
      />
      <span className="text-muted mb-5">Human Resource Management System</span>
      <div className="d-flex flex-column" style={{ gap: 15 }}>
        <h1 className="h3 mb-3 fw-normal text-center">Select Role</h1>
        {roles.map((role, index) => (
          <Link
            to="/admin/dashboard"
            key={role}
            type="button"
            className="w-100 btn btn-primary"
          >
            {role}
          </Link>
        ))}
        <Form action="/logout" method="post">
          <button type="submit" className="btn btn-link text-decoration-none">
            Log out
          </button>
        </Form>
      </div>
    </div>
  );
}
