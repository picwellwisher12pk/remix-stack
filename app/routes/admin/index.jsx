import { redirect } from "@remix-run/node";
export const loader = async () => redirect("/admin/dashboard");
