import { Link, Outlet } from "@remix-run/react";
export const meta = () => [{ title: "Users - Administer" }];
export default function Dashboard() {
  return (
    <div className="bg-white border p-3">
      <h1>Home</h1>
      <p>
        This is the admin dashboard. You can use the links above to navigate to
        other admin pages.
      </p>
      <div className="d-flex text-white" style={{ gap: 10 }}>
        <div
          className="d-flex justify-content-between p-3 rounded-3"
          style={{ background: "#FCA5A5", gap: 30 }}
        >
          <div>
            <h2>01</h2>
            <span>Pending</span>
          </div>
          <div>
            <h2>01</h2>
            <span>Recalled</span>
          </div>
        </div>
        <div
          className="d-flex justify-content-between p-3 rounded-3"
          style={{ background: "#94A3B8", gap: 30 }}
        >
          <div>
            <h2>01</h2>
            <span>Pending</span>
          </div>
          <div>
            <h2>01</h2>
            <span>Recalled</span>
          </div>
        </div>
        <div
          className="d-flex justify-content-between p-3 rounded-3"
          style={{ background: "#A5B4FC", gap: 30 }}
        >
          <div>
            <h2>01</h2>
            <span>Pending</span>
          </div>
          <div>
            <h2>01</h2>
            <span>Recalled</span>
          </div>
        </div>
        <div
          className="justify-content-between p-3 px-4 rounded-3"
          style={{ background: "#D9D9D9" }}
        >
          <h2>01</h2>
          <span>Pending</span>
        </div>
      </div>
    </div>
  );
}
