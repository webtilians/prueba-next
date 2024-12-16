import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <div>No tienes acceso. Por favor, inicia sesión.</div>;
  }

  return <div>Bienvenido al Dashboard, {session.user?.email}!</div>;
}
