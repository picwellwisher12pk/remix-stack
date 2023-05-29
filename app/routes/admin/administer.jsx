import { Link, Outlet, useMatches } from "@remix-run/react";

export default function AdministerTabs() {
  const matches = useMatches();
  const { pathname } = matches[3];
  const administerTabs = [
    { label: "Users", url: "/admin/administer/users" },
    { label: "Roles", url: "/admin/administer/roles" },
    { label: "Locations", url: "/admin/administer/locations" },
    { label: "Approval tracks", url: "/admin/administer/approvals" },
    { label: "Email Templates", url: "/admin/administer/email-templates" },
  ];
  return (
    <>
      <ul className="nav nav-tabs">
        {administerTabs.map((tab) => (
          <li className="nav-item" key={tab.url}>
            <Link
              className={`nav-link ${pathname === tab.url && "active"}`}
              to={tab.url}
            >
              {tab.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="tab-content bg-white border border-top-0">
        <div className="tab-pane active p-3">
          <Outlet />
        </div>
      </div>
    </>
  );
}
