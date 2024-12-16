import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-red-50">
        <div className="p-6 bg-white rounded-md shadow-md text-red-600 font-semibold">
          No tienes acceso. Por favor, inicia sesión.
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p>Bienvenido, {session.user?.email}</p>
        </div>
      </header>
      <main className="container mx-auto p-6">
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-2">Resumen</h2>
          <p className="text-gray-700">Este es tu panel de control. 🎉</p>
        </div>
      </main>
    </div>
  );
}
