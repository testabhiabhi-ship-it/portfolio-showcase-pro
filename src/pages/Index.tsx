import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import SkillBadge from "@/components/SkillBadge";
import ProjectCard from "@/components/ProjectCard";
import profilePhoto from "@/assets/profile-photo.jpg";

const skills = [
  "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js",
  "Node.js", "Python", "Git", "Tailwind CSS", "PostgreSQL", "MongoDB",
  "Docker", "AWS", "Figma"
];

const featuredProjects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with cart functionality, payment processing, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates and team features.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    title: "Weather Dashboard",
    description: "Beautiful weather application with location-based forecasts and interactive maps.",
    technologies: ["React", "OpenWeather API", "Mapbox"],
    githubUrl: "https://github.com",
  },
  {
    title: "AI Image Generator",
    description: "Web app that generates unique images using machine learning models and custom prompts.",
    technologies: ["Python", "FastAPI", "React", "Stable Diffusion"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  }
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-primary font-medium mb-4 animate-fade-in-up stagger-1">
                Hello, I'm
              </p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in-up stagger-2">
                John Doe
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in-up stagger-3">
                Full Stack Developer & Designer
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg animate-fade-in-up stagger-4">
                Passionate about creating beautiful, functional web experiences. 
                I transform ideas into elegant digital solutions that make a difference.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in-up stagger-5">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-all duration-300 animate-pulse-glow"
                >
                  View My Work
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-lg hover:bg-secondary/80 transition-all duration-300 border border-border"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
                <img
                  src={profilePhoto}
                  alt="John Doe - Full Stack Developer"
                  className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-border/50 animate-float shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Skills & Expertise"
            subtitle="Technologies and tools I work with to bring ideas to life"
          />
          
          <div className="flex flex-wrap gap-3 mb-8">
            {skills.map((skill) => (
              <SkillBadge key={skill} name={skill} />
            ))}
          </div>
          
          <p className="text-muted-foreground leading-relaxed max-w-3xl">
            With over 5 years of experience in web development, I specialize in building 
            scalable applications using modern technologies. From responsive front-end 
            interfaces to robust back-end systems, I deliver complete solutions that 
            exceed expectations. I'm constantly learning and adapting to new technologies 
            to stay at the forefront of the industry.
          </p>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <SectionHeading 
              title="Featured Projects"
              subtitle="A selection of my recent work and personal projects"
            />
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-primary hover:text-foreground bg-primary/10 hover:bg-primary rounded-lg transition-all duration-300 group"
            >
              View All
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
