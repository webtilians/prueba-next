"use client";

import Button from "@/components/Button";
import Card from "@/components/Card";
import ThemeToggle from "@/components/ThemeToggle";
import ChartComponent from "@/components/ChartComponent";
import { generateMockData } from "@/data/mockData";
import DataTable from "@/components/DataTable";

// interface User {
//     id: number;
//     name: string;
//     email: string;
//     age: number;
// }
interface DashboardClientProps {
    userEmail: string;
}

export default function DashboardClient({ userEmail }: DashboardClientProps) {
    const data = generateMockData();
    const columns = [
        { accessorKey: "id", header: "ID" },
        { accessorKey: "name", header: "Nombre" },
        { accessorKey: "email", header: "Correo Electrónico" },
        { accessorKey: "age", header: "Edad" },
      ];
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <header className="bg-blue-500 text-white py-4">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                    <div className="mt-4">
                    <ThemeToggle />
                </div>
                    <p>Bienvenido, {userEmail}</p>
                </div>
            </header>
            <main className="container mx-auto p-6">
                <div className="min-h-screen bg-gray-100 p-6">
                    <h1 className="text-3xl font-bold mb-4">Dashboard - Tabla de Datos</h1>
                    <DataTable data={data} columns={columns} />
                </div>
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
                
            </main>
        </div>
    );
}
