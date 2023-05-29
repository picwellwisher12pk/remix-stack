import { json, redirect } from "@remix-run/node";
import { Form, Link, useActionData, useSearchParams } from "@remix-run/react";
import { useEffect, useRef } from "react";

import { verifyLogin } from "~/models/user.server";
import { createUserSession, getUserId } from "~/session.server";
import { safeRedirect, validateEmail } from "~/utils";
import loginStyle from "~/styles/login.css";
import logo from "public/logo.png";

export function links() {
  return [{ rel: "stylesheet", href: loginStyle }];
}
export const loader = async ({ request }) => {
  const userId = await getUserId(request);
  if (userId) return redirect("/admin/");
  return json({});
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const redirectTo = safeRedirect(formData.get("redirectTo"), "/");
  const remember = formData.get("remember");

  if (!validateEmail(email)) {
    return json(
      { errors: { email: "Email is invalid", password: null } },
      { status: 400 }
    );
  }

  if (typeof password !== "string" || password.length === 0) {
    return json(
      { errors: { email: null, password: "Password is required" } },
      { status: 400 }
    );
  }

  if (password.length < 8) {
    return json(
      { errors: { email: null, password: "Password is too short" } },
      { status: 400 }
    );
  }

  const user = await verifyLogin(email, password);

  if (!user) {
    return json(
      { errors: { email: "Invalid email or password", password: null } },
      { status: 400 }
    );
  }

  return createUserSession({
    redirectTo,
    remember: remember === "on" ? true : false,
    request,
    userId: user.id,
  });
};

export const meta = () => [{ title: "Login" }];

export default function LoginPage() {
  const [searchParams] = useSearchParams();
  const redirectTo =
    searchParams.get("redirectTo") === "/"
      ? "/select-role"
      : searchParams.get("redirectTo");
  const actionData = useActionData();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    console.log(actionData?.errors);
    if (actionData?.errors?.email) {
      emailRef.current?.focus();
    } else if (actionData?.errors?.password) {
      passwordRef.current?.focus();
    }
  }, [actionData]);

  return (
    <div className="card form-signin w-100 m-auto px-5 d-flex flex-column align-items-stretch text-center">
      <img
        src={logo}
        alt="logo"
        style={{ width: 200, height: "auto" }}
        className="height-auto m-auto"
      />
      <span className="text-muted mb-5">Human Resource Management System</span>
      <Form method="post">
        <div>
          <h1 className="h3 mb-3 fw-normal text-center">Please sign in</h1>
          <div className="form-floating">
            <input
              ref={emailRef}
              id="email"
              required
              autoFocus={true}
              name="email"
              type="email"
              autoComplete="email"
              aria-invalid={actionData?.errors?.email ? true : undefined}
              aria-describedby="email-error"
              className="form-control"
              placeholder="name@example.com"
            />
            <label htmlFor="email">Email address</label>
          </div>
          <div className="form-floating">
            <input
              id="password"
              ref={passwordRef}
              name="password"
              type="password"
              autoComplete="current-password"
              aria-invalid={actionData?.errors?.password ? true : undefined}
              aria-describedby="password-error"
              className="form-control"
            />
            <label htmlFor="password">Password</label>
          </div>
          {actionData?.errors?.password ? (
            <div className="pt-1 text-red-700" id="password-error">
              {actionData.errors.password}
            </div>
          ) : null}
        </div>

        <input type="hidden" name="redirectTo" value={redirectTo} />
        <div className="d-flex items-center justify-content-between py-3">
          <div className="d-flex items-center" style={{ gap: 5 }}>
            <input
              id="remember"
              name="remember"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label
              htmlFor="remember"
              className="ml-2 block text-sm text-gray-900"
            >
              Remember me
            </label>
          </div>
          <div className="text-end text-sm text-gray-500">
            <Link
              className="text-blue-500 underline"
              to={{
                pathname: "/join",
                search: searchParams.toString(),
              }}
            >
              Forgot Password?
            </Link>
          </div>
        </div>
        <button type="submit" className="w-100 btn btn-lg btn-primary">
          Log in
        </button>
      </Form>
    </div>
  );
}
