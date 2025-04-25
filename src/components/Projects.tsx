
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online store with a name PrimeGadgetz, having electronic items categorized into mobiles,laptops and smartwatches.",
      tags: ["HTML5", "CSS3", "Bootstrap",],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      liveUrl: "#",
      githubUrl: "https://github.com/hareeshkarni/primegadgetz"
    },
    {
      title: "GitHub Profile Analyser",
      description: "A sleek, responsive React + TypeScript app that allows users to search for any GitHub profile and view their repositories and commit activity.",
      tags: ["React", "ShadCN", "Tailwind CSS", "Typescript"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      liveUrl: "#",
      githubUrl: "https://github.com/hareeshkarni/GitHub-Profile-Analyser"
    },
    {
      title: "Animal Classification using CNN",
      description: "Trained and Developed a Animal classification model using CNN and classifies the Animal images into 4 distnict classes.",
      tags: ["Machine Learning", "TensorFlow", "CNN", "Colab"],
      image: "https://iticollege.edu/wp-content/uploads/2024/07/Machine-Learning-Basics.jpg",
      liveUrl: "#",
      githubUrl: "https://github.com/hareeshkarni/Animal_classification-Using-CNN"
    },
    {
      title: "TrafficTelligence-Traffic Volume Estimator",
      description: "This system analyzes the previous historical traffic data to assist city planners and transportation authorities in making data-driven decisions for congestion management.",
      tags: ["Machine Learning", "Numpy", "Pandas", "Matplotlib","Seaborn","Sci-kit Learn"],
      image: "https://media.istockphoto.com/id/1387900612/photo/automation-data-analytic-with-robot-and-digital-visualization-for-big-data-scientist.jpg?s=612x612&w=0&k=20&c=50maOJU6CpVC55mYnUqtff2aiaJZ7KlmMn4jNhWD_eo=",
      liveUrl: "#",
      githubUrl: "https://github.com/hareeshkarni/TrafficTelligence-Advanced-Traffic-Volume-Estimation-with-Machine-Learning"
    }
  ];

  return (
    <section id="projects" className="section-spacing">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg">
            A selection of my recent work showcasing my capabilities in web development and machine learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden card-hover">
              <div className="aspect-video overflow-hidden bg-muted">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="heading-sm mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0 flex gap-4">
                <Button variant="outline" size="sm" className="flex items-center gap-2" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </Button>
                {/* <Button size="sm" className="flex items-center gap-2" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </Button> */}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
