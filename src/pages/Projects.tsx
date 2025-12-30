import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";

const allProjects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with cart functionality, payment processing, and admin dashboard for managing products and orders.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates, team features, and kanban board functionality.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    title: "Weather Dashboard",
    description: "Beautiful weather application with location-based forecasts, interactive maps, and severe weather alerts.",
    technologies: ["React", "OpenWeather API", "Mapbox"],
    githubUrl: "https://github.com",
  },
  {
    title: "AI Image Generator",
    description: "Web app that generates unique images using machine learning models and custom prompts with style controls.",
    technologies: ["Python", "FastAPI", "React", "Stable Diffusion"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for tracking social media metrics across multiple platforms with data visualization.",
    technologies: ["React", "D3.js", "Node.js", "Redis"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    title: "Fitness Tracker",
    description: "Mobile-first fitness application with workout logging, progress tracking, and personalized recommendations.",
    technologies: ["React Native", "Firebase", "TypeScript"],
    githubUrl: "https://github.com",
  },
  {
    title: "Recipe Sharing Platform",
    description: "Community-driven recipe platform with social features, meal planning, and shopping list generation.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Cloudinary"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    title: "Real Estate Marketplace",
    description: "Property listing platform with advanced search, virtual tours, and integrated messaging system.",
    technologies: ["React", "Node.js", "Elasticsearch", "AWS S3"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    title: "Learning Management System",
    description: "Educational platform with course creation tools, video streaming, and progress tracking features.",
    technologies: ["Vue.js", "Django", "PostgreSQL", "AWS"],
    githubUrl: "https://github.com",
  },
  {
    title: "Crypto Portfolio Tracker",
    description: "Cryptocurrency portfolio management tool with real-time price updates and portfolio analytics.",
    technologies: ["React", "WebSocket", "CoinGecko API", "Chart.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  }
];

const Projects = () => {
  return (
    <Layout>
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="My Projects"
            subtitle="A comprehensive collection of my work, from personal experiments to production applications"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.map((project, index) => (
              <div 
                key={project.title} 
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
