import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "3-7 Crescent Eagle Boulevard\nJohannesburg, South Africa 2190"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "076 3899908"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@leanprojects.co.za"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Monday - Friday: 8:00 AM - 5:00 PM\nSaturday: 9:00 AM - 2:00 PM"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-eco-light to-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to make your business more sustainable? We'd love to hear from you. 
              Contact us today to discuss how we can help you achieve your eco-friendly goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-eco transition-all duration-300 border-0 bg-card/50">
                <CardHeader className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <info.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-foreground">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground whitespace-pre-line">
                    {info.content}
                  </p>
                  {info.title === "Phone" && (
                    <a 
                      href={`tel:${info.content}`}
                      className="inline-block mt-2 text-primary hover:text-primary/80 transition-colors"
                    >
                      Call Now
                    </a>
                  )}
                  {info.title === "Email" && (
                    <a 
                      href={`mailto:${info.content}`}
                      className="inline-block mt-2 text-primary hover:text-primary/80 transition-colors"
                    >
                      Send Email
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 bg-card/50">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send Us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Your first name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Your last name" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Your phone number" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input id="company" placeholder="Your company name" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interest</Label>
                    <select 
                      id="service"
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select a service</option>
                      <option value="cleaning">Eco-Friendly Cleaning Services</option>
                      <option value="construction">Sustainable Construction Products</option>
                      <option value="electrical">Energy-Efficient Electrical Appliances</option>
                      <option value="consumables">Sustainable Daily Consumables</option>
                      <option value="consulting">Environmental Consulting</option>
                      <option value="waste">Waste Management Solutions</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project or requirements..." 
                      className="min-h-[120px]"
                      required 
                    />
                  </div>
                  
                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              <Card className="border-0 bg-card/50">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Visit Our Office</CardTitle>
                  <p className="text-muted-foreground">
                    Located in the heart of Johannesburg, we're easily accessible by car or public transport.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-eco-light rounded-lg flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <MapPin className="h-12 w-12 text-primary mx-auto" />
                      <p className="text-foreground font-medium">Interactive Map</p>
                      <p className="text-sm text-muted-foreground">
                        3-7 Crescent Eagle Boulevard<br />
                        Johannesburg, South Africa 2190
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card/50">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Quick Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Call Us</p>
                      <a href="tel:0763899908" className="text-primary hover:text-primary/80">
                        076 3899908
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Email Us</p>
                      <a href="mailto:info@leanprojects.co.za" className="text-primary hover:text-primary/80">
                        info@leanprojects.co.za
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Business Hours</p>
                      <p className="text-sm text-muted-foreground">
                        Mon-Fri: 8:00 AM - 5:00 PM<br />
                        Sat: 9:00 AM - 2:00 PM
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-eco-medium">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
            Let's Build a Sustainable Future Together
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Whether you're looking to reduce your environmental impact, cut costs, or improve your 
            brand reputation, we're here to help you achieve your sustainability goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Schedule a Consultation
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Request a Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;