import { Link } from "@remix-run/react";

export default function AdminIndexPage() {
  return (
    <p>
      this is admin{" "}
      <Link to="new" className="text-blue-500 underline">
        dashboard
      </Link>
    </p>
  );
}
