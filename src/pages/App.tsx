import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplashScreen from "@/components/onboarding/SplashScreen";
import OnboardingSlides from "@/components/onboarding/OnboardingSlides";
import BottomNavigation from "@/components/layout/BottomNavigation";
import Home from "@/pages/Home";
import Report from "@/pages/Report";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

const AppContent = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(false);

  const handleSplashComplete = () => {
    setShowSplash(false);
    setShowOnboarding(true);
  };

  const handleOnboardingComplete = () => {
    setShowOnboarding(false);
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  if (showOnboarding) {
    return <OnboardingSlides onComplete={handleOnboardingComplete} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<Report />} />
        <Route path="/my-issues" element={<div className="p-6 pb-20">My Issues - Coming Soon</div>} />
        <Route path="/community" element={<div className="p-6 pb-20">Community - Coming Soon</div>} />
        <Route path="/profile" element={<div className="p-6 pb-20">Profile - Coming Soon</div>} />
      </Routes>
      <BottomNavigation />
    </div>
  );
};

const App = () => {
  return (
    <TooltipProvider>
      <BrowserRouter>
        <AppContent />
        <Toaster />
        <Sonner />
      </BrowserRouter>
    </TooltipProvider>
  );
};

export default App;