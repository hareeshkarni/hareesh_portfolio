
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["HTML5", "CSS3","Bootstrap","JavaScript (ES6+)", "React","TypeScript", "Tailwind CSS"],
      icon: "💻"
    },
    {
      title: "Machine Learning",
      skills: ["Python", "Flask", "Numpy", "Pandas", "Matplotlib","Seaborn","Sci-Kit Learn","Tensorflow"],
      icon: "🤖 "
    },
    {
      title: "Database",
      skills: ["MongoDB","SQL"],
      icon: "🗄️"
    },
    {
      title: "DevOps & Tools",
      skills: ["Git", "GitHub","AWS", "Vite"],
      icon: "🛠️"
    }
  ];

  return (
    <section id="skills" className="section-spacing bg-muted/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Technical Skills</h2>
          <p className="text-muted-foreground text-lg">
            A comprehensive toolkit that allows me to build everything from small business websites to complex web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="heading-sm mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-background rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
