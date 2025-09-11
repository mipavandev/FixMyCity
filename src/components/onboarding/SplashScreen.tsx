import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-primary flex flex-col items-center justify-center text-primary-foreground p-6">
      <div className="text-center space-y-8">
        {/* Modern Logo */}
        <div className="space-y-4">
          <div className="w-28 h-28 bg-gradient-to-br from-primary-foreground to-civic-secondary rounded-3xl mx-auto flex items-center justify-center shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <div className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center transform -rotate-3 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-black text-primary tracking-tighter">FMC</div>
                <div className="text-[8px] text-civic-secondary font-bold tracking-wider">CITY</div>
              </div>
            </div>
          </div>
          
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary-foreground via-white to-civic-secondary bg-clip-text text-transparent mb-2 tracking-tight">
              FixMyCity
            </h1>
            <p className="text-xl text-primary-foreground/90 font-medium tracking-wide">
              Report. Resolve. Rebuild.
            </p>
          </div>
        </div>

        {showContent && (
          <div className="space-y-4 animate-fade-in">
            <p className="text-primary-foreground/80 max-w-sm mx-auto">
              Join thousands of citizens making their cities better, one report at a time.
            </p>
            <Button
              variant="secondary"
              size="lg"
              onClick={onComplete}
              className="w-full max-w-xs mx-auto"
            >
              Get Started
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SplashScreen;