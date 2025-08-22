import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scissors, Droplet, Heart, Sparkles } from "lucide-react";

const services = [
  {
    icon: Droplet,
    title: "Bath & Brush",
    description: "Complete washing, conditioning, and brushing to keep your pet's coat healthy and shiny.",
    price: "From $35"
  },
  {
    icon: Scissors,
    title: "Full Grooming",
    description: "Complete grooming package including bath, haircut, nail trim, and ear cleaning.",
    price: "From $65"
  },
  {
    icon: Heart,
    title: "Nail Care",
    description: "Professional nail trimming and paw care to keep your pet comfortable and healthy.",
    price: "From $15"
  },
  {
    icon: Sparkles,
    title: "Spa Treatment",
    description: "Luxury spa experience with premium products and extra pampering for your beloved pet.",
    price: "From $85"
  }
];

export const Services = () => {
  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional grooming services tailored to your pet's specific needs and comfort
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <p className="text-lg font-semibold text-primary">{service.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};