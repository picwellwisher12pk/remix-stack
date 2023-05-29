import { Outlet } from "@remix-run/react";
import Header from "~/components/header";

export default function AdminIndexPage() {
  const navLinks = [
    { label: "Dashboard", url: "/admin/dashboard" },
    { label: "Administer", url: "/admin/administer" },
    { label: "Jobs", url: "/admin/jobs" },
    { label: "Reports", url: "/admin/reports" },
  ];
  return (
    <div>
      <Header navLinks={navLinks} />
      <div className="container mt-3">
        <Outlet />
      </div>
    </div>
  );
}
