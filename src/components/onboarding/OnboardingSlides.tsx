import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Camera, MapPin, Bell } from "lucide-react";

interface OnboardingSlidesProps {
  onComplete: () => void;
}

const OnboardingSlides = ({ onComplete }: OnboardingSlidesProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      icon: Camera,
      title: "Report Issues",
      description: "Snap a photo of civic problems like potholes, broken streetlights, or garbage dumps",
      color: "text-primary"
    },
    {
      icon: MapPin,
      title: "Auto Location",
      description: "Your location is captured automatically, helping authorities find and fix issues faster",
      color: "text-accent"
    },
    {
      icon: Bell,
      title: "Track Progress",
      description: "Get real-time updates on your reports and see how your city is improving",
      color: "text-status-resolved"
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col p-6">
      <div className="flex-1 flex flex-col items-center justify-center text-center space-y-8">
        <div className={`w-32 h-32 rounded-full bg-muted flex items-center justify-center ${slides[currentSlide].color}`}>
          {(() => {
            const IconComponent = slides[currentSlide].icon;
            return <IconComponent size={64} />;
          })()}
        </div>

        <div className="space-y-4 max-w-sm">
          <h2 className="text-3xl font-bold text-foreground">
            {slides[currentSlide].title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {slides[currentSlide].description}
          </p>
        </div>

        {/* Progress indicators */}
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center mt-8">
        <Button
          variant="ghost"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="flex items-center"
        >
          <ChevronLeft size={20} className="mr-1" />
          Back
        </Button>

        <Button onClick={nextSlide} className="flex items-center">
          {currentSlide === slides.length - 1 ? "Get Started" : "Next"}
          <ChevronRight size={20} className="ml-1" />
        </Button>
      </div>
    </div>
  );
};

export default OnboardingSlides;