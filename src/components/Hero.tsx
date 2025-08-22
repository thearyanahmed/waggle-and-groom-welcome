import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-grooming.jpg";

export const Hero = () => {
  return (
    <section className="relative bg-gradient-hero text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative container mx-auto px-4 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Premium Pet Grooming
              <span className="block text-accent">with Love & Care</span>
            </h1>
            <p className="text-lg lg:text-xl opacity-90 leading-relaxed">
              Your furry friends deserve the best. Professional grooming services 
              that keep your pets healthy, happy, and looking their absolute best.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="shadow-soft">
                Book Appointment
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                View Services
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImage}
              alt="Professional pet grooming service"
              className="rounded-2xl shadow-glow w-full h-[400px] lg:h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};