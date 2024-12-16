import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import DashboardClient from "./DashboardClient";
import { Suspense } from "react";
export default async function DashboardPage() {
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

    // Pasamos la sesión al Client Component
    return (
        < >
            {/* Stream Rendering con Suspense */}
            <Suspense fallback={<p>Cargando dashboard...</p>}>
                <DashboardClient userEmail={session.user?.email ?? "Usuario"} />
            </Suspense>
        </>
    );
}
