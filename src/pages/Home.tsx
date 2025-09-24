import { ArrowRight, Leaf, Recycle, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-eco.jpg";
import servicesImage from "@/assets/services-overview.jpg";

const Home = () => {
  const features = [
    {
      icon: Leaf,
      title: "Eco-Friendly Products",
      description: "Sustainable solutions for modern businesses and consumers"
    },
    {
      icon: Recycle,
      title: "Waste Reduction",
      description: "Innovative approaches to minimize environmental impact"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Certified products meeting international standards"
    },
    {
      icon: Users,
      title: "Expert Consultation",
      description: "Professional guidance for sustainable business practices"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-eco-light to-background py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Sustainable Solutions for a 
                  <span className="text-primary"> Greener Tomorrow</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Lean Eco Trading & Projects is a leading distributor in modern eco-friendly products, 
                  offering services for reduced waste targeting global eco solutions across various industries.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg">
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Link to="/contact">
                  <Button variant="outline" size="lg">
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Sustainable eco-friendly business solutions" 
                className="rounded-2xl shadow-eco w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Why Choose Lean Eco Trading?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive eco-friendly solutions that help businesses reduce their environmental footprint while maintaining operational excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-eco transition-all duration-300 border-0 bg-card/50">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Comprehensive Eco-Friendly Services
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-background rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Cleaning Services</h3>
                    <p className="text-muted-foreground">Eco-friendly cleaning solutions for commercial and residential use</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-background rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Construction Products</h3>
                    <p className="text-muted-foreground">Sustainable building materials and green construction solutions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-background rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Electrical Appliances</h3>
                    <p className="text-muted-foreground">Energy-efficient appliances and smart home technologies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-background rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Daily Consumables</h3>
                    <p className="text-muted-foreground">Sustainable everyday products for offices and homes</p>
                  </div>
                </div>
              </div>
              <Link to="/services">
                <Button variant="eco" size="lg">
                  View All Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src={servicesImage} 
                alt="Eco-friendly services overview" 
                className="rounded-2xl shadow-eco w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-eco-medium">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Make Your Business More Sustainable?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join the growing number of businesses choosing eco-friendly solutions. 
            Contact us today for a personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                Get Started Today
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Call: 076 3899908
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;