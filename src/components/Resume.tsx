
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const Resume = () => {
  const experiences = [
    {
      role: "Artificial Intelligence & Machine Learning Intern",
      company: "SmartInternz",
      period: "2025",
      description: "In this internship I gained hands-on experience in training models,working with datasets and utilizing the frameworks like Tensorflow and CNN.",
      technologies: ["Numpy", "Pandas","Supervised Machine Learning", "TensorFlow", "CNN","Colab","Jupyter Notebook"]
    },
    {
      role: "Artificial Intelligence Intern",
      company: "SmartInternz",
      period: "2024",
      description: "As an Artificial Intelligence Intern, I worked on developing and implementing the AI models,machine learning algorithms.",
      technologies: ["Numpy", "Pandas", "Matplotlib", "Seaborn","Sci-kit Learn"]
    },
    {
      role: "AWS Cloud Practitioner Intern",
      company: "Datapro Computer's Pvt Ltd",
      period: "2023",
      description: "This internship provides the foundational knowledge of AWS Services,Cloud Computing concepts and best practices. Interns gains hands on experience in cloud infrastructure,security and cost management.",
      technologies: ["Amazon EC2", "Amazon S3", "Amazon EBS", "Amazon IAM"]
    }
  ];

  const education = [
    {
      degree: "B.Tech in CSE",
      institution: "Avanthi Institute of Engineering and Technology",
      period: "2022 - 2025",
      description: ""
    }
  ];

  const certifications = [
    {
      name: "Frontend Developer",
      issuer: "Datapro Computer's Pvt Ltd",
      year: "2022",
      url:"https://drive.google.com/file/d/1s5P6xB6gJspr6_xklY6dpytSWIgSE_ss/view?usp=sharing",
    },
    {
      name: "AWS Cloud Practitioner",
      issuer: "Datapro Computer's Pvt Ltd",
      year: "2023",
      url:"https://drive.google.com/file/d/1tJkWSarviA4swqlungd1sP4zzyjEQk1f/view?usp=sharing",
    },
    {
      name: "Artificial Intelligence Intern",
      issuer: "SmartInternz",
      year: "2024",
      url:"https://apsche.smartinternz.com/certificate/student/18feb5b57c9be56cb87f05aedd78d9cf",
    },
    {
      name:"Artificial Intelligence & Machine Learning Intern",
      issuer:"SmartInternz",
      year:"2025",
      url:"https://apsche.smartinternz.com/certificate/student/bb5e45c65daa8656e0c8ddaf88fcaf6c",
    }
  ];

  return (
    <section id="resume" className="section-spacing bg-muted/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Experience & Education</h2>
          <p className="text-muted-foreground text-lg mb-6">
            My professional journey and educational background in software development.
          </p>
          <Button className="flex items-center gap-2" asChild>
            <a href="https://drive.google.com/file/d/1xrqgYb5-bfO4FTjHm8rqwsx3pLekGUf2/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <FileText size={18} />
              <span>View Resume</span>
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="heading-sm mb-6">Work Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <h4 className="font-bold text-lg">{exp.role}</h4>
                      <span className="text-muted-foreground">{exp.period}</span>
                    </div>
                    <div className="text-primary font-medium mb-4">{exp.company}</div>
                    <p className="mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-background rounded text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-10">
              <h3 className="heading-sm mb-6">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h4 className="font-bold text-lg mb-1">{edu.degree}</h4>
                      <div className="text-primary font-medium mb-2">{edu.institution}</div>
                      <div className="text-muted-foreground mb-3">{edu.period}</div>
                      <p>{edu.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="heading-sm mb-6">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <h4 className="font-bold mb-1">{cert.name}</h4>
                      <div className="flex justify-between text-sm">
                        <span className="text-primary">{cert.issuer}</span>
                        <span className="text-muted-foreground">{cert.year}</span>
                        <Button size="sm" className="flex items-center gap-2" asChild>
                          <a href={cert.url} target="_blank" rel="noopener noreferrer">
                            {/* <ExternalLink size={16} /> */}
                            <span>View Certificate</span>
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
