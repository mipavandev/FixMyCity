import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
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
  CheckCircle,
  AlertTriangle,
  FileText,
  Navigation
} from "lucide-react";
import { Link } from "react-router-dom";

const Report = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [step, setStep] = useState(1); // 1: Category, 2: Photo, 3: Details, 4: Location, 5: Duplicate Check, 6: Success
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("MG Road, Near City Center, Bangalore - 560001");
  const [isLocationDetected, setIsLocationDetected] = useState(false);
  const [ticketId, setTicketId] = useState("");

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

  const handleDetailsSubmit = () => {
    setStep(4);
  };

  const handleAutoDetectLocation = () => {
    setIsLocationDetected(true);
    setAddress("Auto-detected: MG Road, Sector 12, Bangalore - 560001");
  };

  const handleLocationConfirm = () => {
    setStep(5);
  };

  const handleDuplicateCheck = () => {
    // Generate ticket ID
    const newTicketId = `FC${new Date().getFullYear()}${String(Math.floor(Math.random() * 10000)).padStart(4, '0')}`;
    setTicketId(newTicketId);
    setStep(6);
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

  // Step 3: Additional Details
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
              <h1 className="text-2xl font-bold">Additional Details</h1>
              <p className="text-primary-foreground/80">Provide more information about the issue</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <FileText size={24} className="text-primary" />
            </div>
            <p className="text-muted-foreground">Help us understand the issue better with a short description</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Describe the Issue</label>
              <Textarea 
                placeholder="e.g., Large pothole blocking half the road, water logging during rain..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="min-h-[100px]"
              />
            </div>

            {selectedCategory && (
              <Card className="p-4">
                <div className="flex items-center space-x-3">
                  <Badge variant="outline">Category</Badge>
                  <span className="font-medium capitalize">{selectedCategory.replace('-', ' ')}</span>
                </div>
              </Card>
            )}
          </div>

          <Button 
            size="lg" 
            className="w-full" 
            onClick={handleDetailsSubmit}
            disabled={description.trim().length < 10}
          >
            Continue to Location
          </Button>
        </div>
      </div>
    );
  }

  // Step 4: Location Confirmation
  if (step === 4) {
    return (
      <div className="min-h-screen bg-background pb-20">
        <div className="bg-primary text-primary-foreground p-6">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-primary-foreground hover:bg-primary-foreground/20"
              onClick={() => setStep(3)}
            >
              <ArrowLeft size={20} />
            </Button>
            <div>
              <h1 className="text-2xl font-bold">Confirm Location</h1>
              <p className="text-primary-foreground/80">Share or confirm the issue location</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="space-y-3">
            <Button 
              size="lg" 
              className="w-full" 
              onClick={handleAutoDetectLocation}
              disabled={isLocationDetected}
            >
              <Navigation size={20} className="mr-2" />
              {isLocationDetected ? "Location Detected" : "Auto-Detect My Location"}
            </Button>
            
            {!isLocationDetected && (
              <Button size="lg" variant="outline" className="w-full">
                <MapPin size={20} className="mr-2" />
                Pin Location Manually
              </Button>
            )}
          </div>

          <Card className="p-4">
            <div className="flex items-center space-x-3 mb-4">
              <MapPin size={20} className="text-primary" />
              <span className="font-medium">Issue Location</span>
            </div>
            <div className="bg-muted rounded-lg h-48 flex items-center justify-center mb-4">
              <p className="text-muted-foreground">Interactive Map View</p>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium">Address</label>
              <Input 
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter or edit address"
              />
            </div>
          </Card>

          <Button 
            size="lg" 
            className="w-full" 
            onClick={handleLocationConfirm}
            disabled={!isLocationDetected && !address.trim()}
          >
            Continue to Review
          </Button>
        </div>
      </div>
    );
  }

  // Step 5: Duplicate Check
  if (step === 5) {
    return (
      <div className="min-h-screen bg-background pb-20">
        <div className="bg-primary text-primary-foreground p-6">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-primary-foreground hover:bg-primary-foreground/20"
              onClick={() => setStep(4)}
            >
              <ArrowLeft size={20} />
            </Button>
            <div>
              <h1 className="text-2xl font-bold">Similar Issues Found</h1>
              <p className="text-primary-foreground/80">Check if your issue already exists</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
              <AlertTriangle size={24} className="text-amber-600" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">We found similar issues nearby</h3>
              <p className="text-muted-foreground">Review existing reports to avoid duplicates</p>
            </div>
          </div>

          <div className="space-y-3">
            <Card className="p-4 border-l-4 border-l-amber-500">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Similar Issue #FC202400{Math.floor(Math.random() * 10)}</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Road damage near MG Road - Reported 2 days ago
                  </p>
                  <Badge variant="secondary" className="mt-2 text-xs">In Progress</Badge>
                </div>
                <Button variant="ghost" size="sm">View</Button>
              </div>
            </Card>
          </div>

          <div className="space-y-3">
            <Button size="lg" variant="outline" className="w-full">
              <CheckCircle size={20} className="mr-2" />
              This is the Same Issue
            </Button>
            
            <Button size="lg" className="w-full" onClick={handleDuplicateCheck}>
              Continue - This is Different
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            Reporting duplicate issues helps us track the severity and prioritize fixes
          </p>
        </div>
      </div>
    );
  }

  // Step 6: Success
  if (step === 6) {
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
                <span className="font-bold text-primary">{ticketId}</span>
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