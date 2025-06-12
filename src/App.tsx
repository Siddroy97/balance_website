import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import ScoutPage from "./pages/ScoutPage";
import TallyPage from "./pages/TallyPage";
import MissionPage from "./pages/MissionPage";
import TallyDemo from "./components/TallyDemo";
import { AnimatePresence, motion } from 'framer-motion';

const queryClient = new QueryClient();

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  useEffect(() => {
    // Smooth scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      style={{ minHeight: '100vh' }}
    >
      {children}
    </motion.div>
  );
};

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Index /></PageWrapper>} />
        <Route path="/scout" element={<PageWrapper><ScoutPage /></PageWrapper>} />
        <Route path="/tally" element={<PageWrapper><TallyPage /></PageWrapper>} />
        <Route path="/mission" element={<PageWrapper><MissionPage /></PageWrapper>} />
        <Route path="/tally-demo" element={<PageWrapper><TallyDemo /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster position="top-center" richColors />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
