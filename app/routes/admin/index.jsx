import { requireUserId } from "../../session.server";

export const loader = async ({ request }) => {
  const user = await requireUserId(request, "/admin/dashboard");
  return user;
};
