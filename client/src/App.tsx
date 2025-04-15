import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Dashboard from "@/pages/Dashboard";

// Define all routes for the application
function Router() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/spoofer" component={Dashboard} />
      <Route path="/features" component={Dashboard} />
      <Route path="/pricing" component={Dashboard} />
      <Route path="/faq" component={Dashboard} />
      <Route path="/testimonials" component={Dashboard} />
      <Route path="/support" component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen overflow-hidden bg-slate-950">
        <Router />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;
