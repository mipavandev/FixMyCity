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
      <div className="text-center space-y-6">
        <div className="w-24 h-24 mx-auto bg-primary-foreground rounded-full flex items-center justify-center mb-8">
          <div className="text-primary text-4xl font-bold">FC</div>
        </div>
        
        <h1 className="text-4xl font-bold mb-2">FixMyCity</h1>
        <p className="text-xl text-primary-foreground/90 mb-8">
          Report. Resolve. Rebuild.
        </p>

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