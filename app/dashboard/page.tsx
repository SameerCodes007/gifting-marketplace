import { getUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import { DashboardView } from "@/components/dashboard/dashboard-view";

export default async function DashboardPage() {
  const user = await getUser();
  
  if (!user) {
    redirect("/auth/login");
  }

  return <DashboardView user={user} />;
}