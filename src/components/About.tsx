import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Clock, Users, Shield } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "15+ Years Experience",
    description: "Trusted by pet owners with over 15 years of professional grooming experience"
  },
  {
    icon: Shield,
    title: "Safe & Gentle",
    description: "We use only pet-safe products and gentle techniques for your pet's comfort"
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Convenient appointment times that work with your busy schedule"
  },
  {
    icon: Users,
    title: "Certified Groomers",
    description: "Our team consists of certified, professional pet grooming specialists"
  }
];

export const About = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Why Choose Our Grooming Services?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At our professional pet grooming salon, we understand that your pets are family. 
                That's why we provide gentle, caring service with the highest standards of safety 
                and cleanliness. Every pet receives personalized attention and love.
              </p>
            </div>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button size="lg" className="shadow-soft">
              Learn More About Us
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Happy Pets</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-soft mt-8">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-soft -mt-4">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Safe Products</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-soft mt-4">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};