import { 
  Sparkles, 
  Hammer, 
  Zap, 
  ShoppingCart, 
  Lightbulb, 
  TreePine,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Eco-Friendly Cleaning Services",
      description: "Professional cleaning solutions using environmentally safe products and sustainable practices.",
      features: [
        "Non-toxic cleaning products",
        "Biodegradable solutions",
        "Commercial & residential services",
        "Green certification compliance"
      ]
    },
    {
      icon: Hammer,
      title: "Sustainable Construction Products",
      description: "High-quality building materials and construction supplies that minimize environmental impact.",
      features: [
        "Recycled building materials",
        "Energy-efficient insulation",
        "Sustainable timber products",
        "Green roofing solutions"
      ]
    },
    {
      icon: Zap,
      title: "Energy-Efficient Electrical Appliances",
      description: "Modern electrical appliances designed for maximum efficiency and minimal energy consumption.",
      features: [
        "Energy Star certified products",
        "Smart home technologies",
        "Solar-powered solutions",
        "LED lighting systems"
      ]
    },
    {
      icon: ShoppingCart,
      title: "Sustainable Daily Consumables",
      description: "Everyday products for offices and homes that are environmentally friendly and sustainable.",
      features: [
        "Biodegradable packaging",
        "Organic office supplies",
        "Recyclable materials",
        "Carbon-neutral shipping"
      ]
    },
    {
      icon: Lightbulb,
      title: "Environmental Consulting",
      description: "Expert guidance to help businesses adopt sustainable practices and reduce their carbon footprint.",
      features: [
        "Sustainability assessments",
        "Carbon footprint analysis",
        "Green policy development",
        "Implementation strategies"
      ]
    },
    {
      icon: TreePine,
      title: "Waste Management Solutions",
      description: "Comprehensive waste reduction and management services to minimize environmental impact.",
      features: [
        "Waste audit services",
        "Recycling programs",
        "Composting solutions",
        "Zero-waste strategies"
      ]
    }
  ];

  const benefits = [
    "Reduce environmental impact",
    "Lower operational costs",
    "Improve brand reputation",
    "Comply with regulations",
    "Enhance employee satisfaction",
    "Future-proof your business"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-eco-light to-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive eco-friendly solutions designed to help your business thrive 
              while protecting the environment for future generations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-eco transition-all duration-300 border-0 bg-card/50">
                <CardHeader className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Why Choose Our Eco-Friendly Solutions?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our sustainable services provide tangible benefits for your business and the environment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-card/50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A simple, transparent approach to implementing sustainable solutions in your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", description: "We assess your current practices and sustainability goals" },
              { step: "02", title: "Planning", description: "Custom solution design tailored to your specific needs" },
              { step: "03", title: "Implementation", description: "Professional installation and setup of eco-friendly solutions" },
              { step: "04", title: "Support", description: "Ongoing maintenance and optimization for maximum efficiency" }
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-eco-medium">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Let's work together to create a sustainable future. Contact us today to discuss 
            how our eco-friendly solutions can benefit your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                Get a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
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

export default Services;