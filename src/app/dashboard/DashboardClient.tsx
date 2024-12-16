"use client";

import Button from "@/components/Button";
import Card from "@/components/Card";
import ThemeToggle from "@/components/ThemeToggle";
import ChartComponent from "@/components/ChartComponent";

interface DashboardClientProps {
  userEmail: string;
}

export default function DashboardClient({ userEmail }: DashboardClientProps) {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-blue-500 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p>Bienvenido, {userEmail}</p>
        </div>
      </header>
      <main className="container mx-auto p-6">
        <div className="bg-white p-4 rounded-md shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-2">Resumen</h2>
          <ChartComponent />
        </div>
        <Card title="Componente Card">
          <p className="text-gray-600 dark:text-gray-300">
            Esto es un componente reutilizable.
          </p>
          <Button onClick={() => alert("¡Hola!")}>Haz clic</Button>
        </Card>
        <div className="mt-4">
          <ThemeToggle />
        </div>
      </main>
    </div>
  );
}
