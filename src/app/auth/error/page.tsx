'use client';

export default function AuthErrorPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-md shadow-md text-center">
        <h1 className="text-2xl font-bold text-red-500">Error de autenticación</h1>
        <p className="text-gray-700 mt-4">
          Hubo un problema durante el proceso de autenticación. Por favor, intenta nuevamente.
        </p>
        <a
          href="/login"
          className="mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Volver al login
        </a>
      </div>
    </div>
  );
}
