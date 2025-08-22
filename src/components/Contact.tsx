import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: "123 Pet Care Lane\nSunnyville, CA 90210"
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "(555) 123-PETS\n(555) 123-7387"
  },
  {
    icon: Clock,
    title: "Hours",
    details: "Mon-Fri: 8am-6pm\nSat: 9am-5pm\nSun: 10am-4pm"
  },
  {
    icon: Mail,
    title: "Email Us",
    details: "hello@pawsgrooming.com\ninfo@pawsgrooming.com"
  }
];

export const Contact = () => {
  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to pamper your pet? Contact us today to schedule an appointment or learn more about our services.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="border-0 shadow-soft text-center hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{info.title}</h3>
                <p className="text-sm text-muted-foreground whitespace-pre-line">{info.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" className="shadow-soft mr-4">
            Book Appointment Now
          </Button>
          <Button size="lg" variant="outline">
            Request Quote
          </Button>
        </div>
      </div>
    </section>
  );
};