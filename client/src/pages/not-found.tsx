import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import Sidebar from "@/components/Sidebar";

export default function NotFound() {
  return (
    <div className="min-h-screen flex gradient-bg-dark">
      <Sidebar />
      
      <main className="flex-1 lg:ml-16 p-8 grid place-items-center">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-6xl font-bold mb-4 gradient-text">404</h1>
          <h2 className="text-2xl font-semibold text-slate-200 mb-4">Page Not Found</h2>
          <p className="text-slate-400 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link href="/">
            <Button className="gradient-bg-button">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
