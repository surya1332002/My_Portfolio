import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Link } from 'react-router-dom';
import { Download, ArrowRight, Mail, Github } from 'lucide-react';

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0);

  const dynamicRoles = [
  "AI Automation Engineer",
  "LLM Systems Builder",
  "Applied GenAI Engineer",
  "Workflow Orchestration",
  "AI Agents & RAG Systems",
  "End-to-End AI Solutions"
];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % dynamicRoles.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Initialize scroll animations
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    // Observe elements
    document.querySelectorAll('.animate-on-scroll, .animate-slide-left, .animate-slide-right').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black relative">
      {/* Floating particles background */}
      <div className="floating-particles"></div>
      
      {/* Hero Section */}
      <section className="flex items-center justify-center min-h-[calc(100vh-5rem)] bg-black relative z-10">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Portrait */}
            <div className="flex justify-center lg:justify-start animate-slide-left order-1 lg:order-1">
              <div className="relative">
                <Avatar className="w-[28rem] h-[35rem] studio-image">
                  <AvatarImage 
                    src="https://res.cloudinary.com/dpcfu8ekd/image/upload/v1750351573/ChatGPT_Image_Jun_19_2025_11_31_37_AM_h07aj6.jpg" 
                    alt="Surya Vardhan Reddy Puchalapalli"
                    className="object-cover"
                  />
                  <AvatarFallback className="text-6xl font-bold bg-neutral-900 text-white">
                    SVR
                  </AvatarFallback>
                </Avatar>
                {/* Subtle frame effect */}
                <div className="absolute inset-0 border border-neutral-800 rounded-full"></div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8 animate-slide-right order-2 lg:order-2">
              <div className="space-y-6">
                <div className="text-sm font-medium text-neutral-400 tracking-widest uppercase">
                  AI AUTOMATION | LLM WORKFLOWS | END-TO-END SYSTEM DESIGN
                </div>
                
                <h1 className="display-xl text-white leading-tight">
                  I BUILD<br />
                  INTELLIGENT<br />
                  SYSTEMS FOR<br />
                  <span className="text-red-600">HUMAN IMPACT.</span>
                </h1>
                
                <div className="text-xl text-neutral-300 font-light max-w-lg">
                  Focused on building AI-powered workflows and automation systems that reduce manual effort and turn complex business processes into scalable solutions.
                </div>
                
                <div className="text-base text-neutral-400 body-light">
                  {dynamicRoles[currentRole]}
                </div>
              </div>

             <div className="flex flex-col sm:flex-row gap-4 pt-8">
  

  <Button asChild className="bg-red-600 hover:bg-red-700 text-white border-none">
    <Link to="/experience" className="flex items-center">
      View Experience
      <ArrowRight className="w-4 h-4 ml-2" />
    </Link>
  </Button>

  <Button asChild className="bg-red-600 hover:bg-red-700 text-white border-none">
    <Link to="/projects" className="flex items-center">
      View Projects
      <ArrowRight className="w-4 h-4 ml-2" />
    </Link>
  </Button>

  <a href="/Surya_Ds_Resume.pdf" download className="w-fit">
    <Button className="bg-red-600 hover:bg-red-700 text-white border-none">
      <Download className="w-4 h-4 mr-2" />
      Download Resume
    </Button>
  </a>
</div>


              {/* Contact Links */}
              <div className="flex space-x-6 pt-4">
                <a href="mailto:surya.unf257@gmail.com" className="text-neutral-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="https://github.com/surya1332002" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-24 bg-neutral-900 relative z-10">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="display-lg text-white mb-12 text-center animate-on-scroll">
              My Story
            </h2>
            
            <Card className="bg-black/50 border-neutral-800 animate-on-scroll">
              <CardContent className="p-12">
                <p className="text-xl leading-relaxed text-neutral-300 body-light text-center">
                 <p>
   I'm <strong>Surya</strong>, an AI Automation Engineer and Master's graduate in Engineering Data Science from the University of Houston, focused on building intelligent systems that solve real operational problems.
</p>
<br />
<p>
   My journey started with data science and machine learning, but over time I became more interested in building complete systems instead of isolated models. I enjoy designing workflows that combine <strong>LLMs</strong>, <strong>APIs</strong>, automation platforms, and user-facing applications into solutions people can actually use every day.
</p>
<br />
<p>
  At <strong>ReVenture Systems</strong>, I worked on AI automation workflows that streamlined operations across email, documents, and internal business processes. At <strong>Aggregate Technologies (ATI)</strong>, I’ve been building workflow automation and meeting intelligence systems focused on CRM management, task orchestration, and operational efficiency using AI-driven solutions.
</p>
<br />
<p>
  I’ve built projects involving <strong>RAG pipelines</strong>, <strong>AI-powered support systems</strong>, <strong>workflow orchestration</strong>, <strong>CRM automation</strong>, and intelligent task management systems using tools like <strong>n8n</strong>, <strong>LangChain</strong>, <strong>OpenAI APIs</strong>, and vector databases.
</p>
<p>
  What excites me most is turning complex business processes into scalable AI systems that feel simple, intuitive, and genuinely useful for the people using them.
</p>

                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-20 bg-black relative z-10">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { label: "Projects Completed", value: "20+" },
              { label: "Research Papers", value: "1" },
              { label: "Technologies", value: "20+" }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-on-scroll" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-neutral-400 font-light text-sm uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-24 bg-neutral-900 relative z-10">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="display-lg text-white mb-6 animate-on-scroll">
              Featured Work
            </h2>
            <p className="text-xl text-neutral-400 body-light max-w-2xl mx-auto animate-on-scroll">
              Exploring the intersection of data science, machine learning, and artificial intelligence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Financial Risk Analytics",
                description: "97% fraud detection accuracy",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
              },
              {
                title: "AI Email Generator",
                description: "60% response rate improvement",
                image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400&h=300&fit=crop"
              },
              {
                title: "Recommendation Engine",
                description: "100% top-5 hit rate",
                image: "https://res.cloudinary.com/dpcfu8ekd/image/upload/v1750315806/0_BIJL7Ue0fMQqxd_d_x68cug.png"
              },
            ].map((project, index) => (
              <Card key={index} className="group card-hover bg-black border-neutral-800 overflow-hidden animate-on-scroll" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover studio-image group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-neutral-400 body-light">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-red-600 hover:bg-red-700 text-white border-none animate-on-scroll">
              <Link to="/projects">
                View All Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
