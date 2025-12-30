import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  return (
    <Layout>
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading 
                title="About Me"
                subtitle="The story behind the code"
              />
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Hi, I'm John Doe, a passionate Full Stack Developer based in San Francisco, 
                  California. With a deep love for technology and creativity, I've spent the 
                  past 5+ years crafting digital experiences that make a difference.
                </p>
                
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    Background & Education
                  </h3>
                  <p>
                    I graduated with a Bachelor's degree in Computer Science from Stanford 
                    University, where I discovered my passion for web development. Since then, 
                    I've continuously expanded my skills through hands-on projects and 
                    professional development courses.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    Professional Experience
                  </h3>
                  <p>
                    I've had the privilege of working with startups and established companies 
                    alike, contributing to projects ranging from e-commerce platforms to 
                    enterprise SaaS solutions. Currently, I work as a Senior Developer at a 
                    leading tech company, where I lead front-end architecture decisions.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    What Drives Me
                  </h3>
                  <p>
                    I believe in writing clean, maintainable code that solves real problems. 
                    Beyond coding, I enjoy mentoring junior developers, contributing to open 
                    source projects, and staying updated with the latest industry trends.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    Personal Interests
                  </h3>
                  <p>
                    When I'm not coding, you'll find me hiking in the mountains, exploring 
                    new coffee shops, or working on personal side projects. I'm also an avid 
                    reader and enjoy learning about design, psychology, and business.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:sticky lg:top-32">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-3xl" />
                <img
                  src={profilePhoto}
                  alt="John Doe - About"
                  className="relative w-full max-w-md mx-auto rounded-2xl object-cover border-4 border-border/50 shadow-2xl animate-slide-in-right"
                />
                
                {/* Stats cards */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-card p-6 rounded-xl border border-border/50 text-center">
                    <p className="font-display text-3xl font-bold text-primary mb-1">5+</p>
                    <p className="text-sm text-muted-foreground">Years Experience</p>
                  </div>
                  <div className="bg-card p-6 rounded-xl border border-border/50 text-center">
                    <p className="font-display text-3xl font-bold text-primary mb-1">50+</p>
                    <p className="text-sm text-muted-foreground">Projects Completed</p>
                  </div>
                  <div className="bg-card p-6 rounded-xl border border-border/50 text-center">
                    <p className="font-display text-3xl font-bold text-primary mb-1">30+</p>
                    <p className="text-sm text-muted-foreground">Happy Clients</p>
                  </div>
                  <div className="bg-card p-6 rounded-xl border border-border/50 text-center">
                    <p className="font-display text-3xl font-bold text-primary mb-1">15+</p>
                    <p className="text-sm text-muted-foreground">Technologies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
