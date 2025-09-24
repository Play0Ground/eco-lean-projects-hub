import { Target, Eye, Heart, Award, Users, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import aboutImage from "@/assets/about-office.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Sustainability",
      description: "We prioritize environmental sustainability in all our operations and decision-making processes."
    },
    {
      icon: Award,
      title: "Innovation",
      description: "We continuously seek innovative solutions and technologies to improve our services and reduce environmental impact."
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We operate with transparency and integrity, ensuring our business practices align with our values and mission."
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "1000+", label: "Products Delivered" },
    { number: "50+", label: "Projects Completed" },
    { number: "5+", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-eco-light to-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
              About <span className="text-primary">Lean Eco Trading</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are a dynamic and innovative company dedicated to promoting eco-friendly practices 
              and sustainable development across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Lean Eco Trading and Projects was founded with a clear vision: to provide high-quality, 
                  eco-conscious products and services that meet the needs of our clients while minimizing 
                  our impact on the environment.
                </p>
                <p>
                  Based in Johannesburg, South Africa, we have grown to become a leading distributor 
                  of modern eco-friendly products, specializing in cleaning services, construction products, 
                  electrical appliances, and day-to-day consumables.
                </p>
                <p>
                  Our commitment to sustainability drives everything we do, from the products we source 
                  to the services we provide. We believe that businesses can thrive while making a 
                  positive impact on the planet.
                </p>
              </div>
            </div>
            <div>
              <img 
                src={aboutImage} 
                alt="Lean Eco Trading office in Johannesburg" 
                className="rounded-2xl shadow-eco w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 bg-card/50 hover:shadow-eco transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <Target className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground">
                  Our mission is to provide high-quality, eco-conscious products and services that meet 
                  the needs of our clients while minimizing our impact on the environment. We strive to 
                  be a leader in sustainable trading and project development, fostering a greener future 
                  for generations to come.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card/50 hover:shadow-eco transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <Eye className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground">
                  To be the leading provider of sustainable solutions in South Africa and beyond, 
                  creating a world where businesses operate in harmony with the environment, 
                  driving positive change through innovation and responsible practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These values guide our decisions and shape our relationships with clients, partners, and the environment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-eco transition-all duration-300 border-0 bg-card/50">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-primary to-eco-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Making a difference, one sustainable solution at a time
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/90 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Market */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Who We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our target market includes businesses, organizations, and individuals seeking eco-friendly 
              products and sustainable solutions across various industries.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Businesses</h3>
                <p className="text-muted-foreground">
                  Companies looking to reduce their environmental footprint while maintaining operational efficiency
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Organizations</h3>
                <p className="text-muted-foreground">
                  NGOs, government entities, and institutions committed to sustainable practices
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Individuals</h3>
                <p className="text-muted-foreground">
                  Environmentally conscious consumers seeking sustainable alternatives for their homes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;