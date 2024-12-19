import { redirect } from 'next/navigation';

export default function Home() {
  // Redirigir al login
  redirect('/login');
  
  return null; // No se renderiza nada ya que se redirige al login
}
