
import React from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="heading-xl mb-6 animate-fade-in">
            <span className="block text-primary">Hareesh Karni</span>
            <span className="block">Web Developer & ML Engineer</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Specializing in modern web technologies to create fast, 
            accessible, and user-friendly applications.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
          
          <div className="mt-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <a 
              href="#skills" 
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
              aria-label="Scroll to skills section"
            >
              <ArrowDown className="animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
