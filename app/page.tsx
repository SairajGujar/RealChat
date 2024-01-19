import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button"
import { db } from "@/lib/db";


export default async function Home() {
  await db.set('hello', 'hello');
  return (
    <main className="flex flex-col">
      <Navbar></Navbar>      
    </main>
  );
}
