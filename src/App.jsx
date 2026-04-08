import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router";

// queryClient
// 1 -  Use to manages server-data concerns: caching, background refetching, retries, and shared query state.
// 2 - Why create it once: if you recreate it on every render you lose the cache and trigger extra network activity. Create it outside components (App.jsx:) so it stays stable.
const queryClient = new QueryClient();

const App = () => (
  // store cache
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* success/error snackbars */}
      <Toaster />
      <Sonner />
      {/* to find all the routes */}
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
