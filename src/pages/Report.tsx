import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Construction, 
  Trash2, 
  Lightbulb, 
  Droplets, 
  Building,
  Car,
  TreePine,
  ArrowLeft,
  Camera,
  MapPin,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const Report = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [step, setStep] = useState(1); // 1: Category, 2: Photo, 3: Location, 4: Success

  const categories = [
    { id: "potholes", icon: Construction, label: "Potholes", description: "Road damage, cracks, holes" },
    { id: "garbage", icon: Trash2, label: "Garbage", description: "Waste disposal, overflowing bins" },
    { id: "streetlights", icon: Lightbulb, label: "Streetlights", description: "Broken or dim lights" },
    { id: "water", icon: Droplets, label: "Water Issues", description: "Leaks, drainage problems" },
    { id: "buildings", icon: Building, label: "Public Buildings", description: "Maintenance, accessibility" },
    { id: "traffic", icon: Car, label: "Traffic & Roads", description: "Signals, signs, barriers" },
    { id: "parks", icon: TreePine, label: "Parks & Gardens", description: "Maintenance, cleanliness" },
  ];

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setStep(2);
  };

  const handlePhotoUpload = () => {
    setStep(3);
  };

  const handleLocationConfirm = () => {
    setStep(4);
  };

  if (step === 1) {
    return (
      <div className="min-h-screen bg-background pb-20">
        {/* Header */}
        <div className="bg-primary text-primary-foreground p-6">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/20">
                <ArrowLeft size={20} />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold">Report Issue</h1>
              <p className="text-primary-foreground/80">What type of issue do you want to report?</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid gap-4">
            {categories.map(({ id, icon: Icon, label, description }) => (
              <Card 
                key={id} 
                className="p-4 cursor-pointer hover:shadow-md transition-shadow border-2 hover:border-primary/20"
                onClick={() => handleCategorySelect(id)}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <Icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{label}</h3>
                    <p className="text-sm text-muted-foreground">{description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="min-h-screen bg-background pb-20">
        <div className="bg-primary text-primary-foreground p-6">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-primary-foreground hover:bg-primary-foreground/20"
              onClick={() => setStep(1)}
            >
              <ArrowLeft size={20} />
            </Button>
            <div>
              <h1 className="text-2xl font-bold">Add Photo</h1>
              <p className="text-primary-foreground/80">Take or upload a photo of the issue</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="text-center space-y-4">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto">
              <Camera size={32} className="text-muted-foreground" />
            </div>
            <p className="text-muted-foreground">A clear photo helps authorities understand and resolve the issue faster</p>
          </div>

          <div className="space-y-3">
            <Button size="lg" className="w-full" onClick={handlePhotoUpload}>
              <Camera size={20} className="mr-2" />
              Take Photo
            </Button>
            <Button size="lg" variant="outline" className="w-full" onClick={handlePhotoUpload}>
              Upload from Gallery
            </Button>
          </div>

          {selectedCategory && (
            <Card className="p-4">
              <div className="flex items-center space-x-3">
                <Badge variant="outline">Selected Category</Badge>
                <span className="font-medium capitalize">{selectedCategory}</span>
              </div>
            </Card>
          )}
        </div>
      </div>
    );
  }

  if (step === 3) {
    return (
      <div className="min-h-screen bg-background pb-20">
        <div className="bg-primary text-primary-foreground p-6">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-primary-foreground hover:bg-primary-foreground/20"
              onClick={() => setStep(2)}
            >
              <ArrowLeft size={20} />
            </Button>
            <div>
              <h1 className="text-2xl font-bold">Confirm Location</h1>
              <p className="text-primary-foreground/80">Verify the issue location</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <Card className="p-4">
            <div className="flex items-center space-x-3 mb-4">
              <MapPin size={20} className="text-primary" />
              <span className="font-medium">Current Location</span>
            </div>
            <div className="bg-muted rounded-lg h-48 flex items-center justify-center">
              <p className="text-muted-foreground">Map view placeholder</p>
            </div>
          </Card>

          <Card className="p-4">
            <h3 className="font-medium mb-2">Detected Address</h3>
            <p className="text-muted-foreground">MG Road, Near City Center, Bangalore - 560001</p>
            <Button variant="ghost" size="sm" className="mt-2 p-0">
              Edit Address
            </Button>
          </Card>

          <Button size="lg" className="w-full" onClick={handleLocationConfirm}>
            Confirm & Submit Report
          </Button>
        </div>
      </div>
    );
  }

  if (step === 4) {
    return (
      <div className="min-h-screen bg-background pb-20 flex items-center justify-center">
        <div className="p-6 text-center space-y-6 max-w-sm mx-auto">
          <div className="w-24 h-24 bg-status-resolved rounded-full flex items-center justify-center mx-auto">
            <CheckCircle size={48} className="text-white" />
          </div>
          
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-foreground">Report Submitted!</h1>
            <p className="text-muted-foreground">Your report has been successfully submitted to the authorities.</p>
          </div>

          <Card className="p-4 text-left">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Ticket ID:</span>
                <span className="font-bold text-primary">FC2024004</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Category:</span>
                <span className="capitalize">{selectedCategory}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Status:</span>
                <Badge className="bg-status-reported">Reported</Badge>
              </div>
            </div>
          </Card>

          <div className="space-y-3">
            <Link to="/my-issues" className="block">
              <Button size="lg" className="w-full">
                Track This Issue
              </Button>
            </Link>
            <Link to="/" className="block">
              <Button size="lg" variant="outline" className="w-full">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default Report;