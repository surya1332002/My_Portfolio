import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MapPin, Users } from 'lucide-react';

type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  skills: string[];
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
};

const Experience = () => {
  const experience: ExperienceItem[] = [
    {
  title: "Director of Digital Transformations (AI & Automations)",
  company: "Aggregate Technologies (ATI)",
  location: "Houston, TX",
  period: "Apr 2025 – Present",
  type: "Full-Time",
  description:
    "Building AI-powered workflow automation systems focused on CRM orchestration, meeting intelligence, task automation, and operational efficiency.",

  achievements: [
    "Designed modular AI workflow systems integrating APIs, LLMs, and automation pipelines for operational workflows",
    "Built automation pipelines using n8n, Salesforce, and OpenAI APIs for CRM updates, lead tracking, and workflow orchestration",
    "Implemented AI-powered meeting intelligence systems for summarisation, task extraction, and follow-up generation",
    "Improved operational visibility by centralising workflows, task tracking, and business process automation",
    "Collaborated directly with non-technical stakeholders to redesign workflows and deliver scalable AI solutions"
  ],

  skills: [
    "n8n",
    "OpenAI APIs",
    "Workflow Automation",
    "CRM Automation",
    "Salesforce",
    "API Integration",
    "LLM Workflows",
    "Meeting Intelligence",
    "Task Orchestration",
    "AI Systems"
  ],

  image:
    "https://res.cloudinary.com/dpcfu8ekd/image/upload/v1779746256/601b77a6-1fcd-48d2-84fd-aa99ab554e79_uyxwcc.png",

  imageAlt: "Aggregate Technologies automation systems",

  imageCaption:
    "Designing AI-driven workflow systems for operational automation and CRM orchestration."
},
    {
  title: "Lead AI & Automation Engineer",
  company: "ReVenture Systems",
  location: "Remote",
  period: "Jun 2025 – Apr 2026",
  type: "Full-Time",

  description:
    "Designing and deploying AI automation systems, LLM workflows, and intelligent business process automation solutions for client operations.",

  achievements: [
    "Designed and deployed AI automation systems for client workflows using APIs, LLMs, and workflow orchestration",
    "Engineered n8n-based automation pipelines integrating OpenAI and Anthropic Claude APIs",
    "Built RAG systems using LangChain and vector databases for context-aware document querying",
    "Led full lifecycle delivery including workflow design, prototyping, deployment, and optimisation",
    "Collaborated directly with clients to redesign inefficient manual workflows into scalable AI systems"
  ],

  skills: [
    "LangChain",
    "n8n",
    "OpenAI",
    "Anthropic Claude",
    "RAG",
    "Supabase",
    "ElevenLabs",
    "Workflow Automation",
    "API Integration",
    "Vector Databases",
    "AI Agents"
  ],

  image:
    "https://res.cloudinary.com/dpcfu8ekd/image/upload/v1755618150/1748289158637_g65yai.jpg",

  imageAlt: "ReVenture Systems AI workflows",

  imageCaption:
    "Building AI automation systems and intelligent workflow solutions for real-world client operations."
},
    {
  title: "Data & Automation Analyst (IT Operations)",
  company: "University of Houston",
  location: "Houston, TX",
  period: "Aug 2023 – Jan 2026",
  type: "Part-Time",

  description:
    "Built automation and operational monitoring systems supporting university IT infrastructure and network operations.",

  achievements: [
    "Built Python-based automation pipelines for ingesting and consolidating operational data from multiple systems",
    "Automated reporting and monitoring workflows across campus network infrastructure",
    "Designed Power BI dashboards with automated refresh for operational monitoring and analysis",
    "Applied anomaly detection and data analysis techniques to identify infrastructure performance issues"
  ],

  skills: [
    "Python",
    "Power BI",
    "Data Pipelines",
    "Operational Monitoring",
    "Workflow Automation",
    "Aruba Central",
    "HPE GreenLake",
    "Infrastructure Analytics"
  ],

  image:
    "https://res.cloudinary.com/dpcfu8ekd/image/upload/v1750357769/867a88cc-6758-488e-8cc8-70935e43227a_1_qqa50n.jpg",

  imageAlt: "University of Houston IT operations",

  imageCaption:
    "Collaborating with the University of Houston IT operations team on automation and infrastructure monitoring systems."
}
  ];

  return (
    <div className="min-h-screen py-20 bg-black">
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="display-lg text-white mb-6 animate-fade-in">
            Professional <span className="text-red-600">Experience</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto body-light animate-fade-in">
            Building expertise through hands-on experience in data science, automation, and IT infrastructure.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          {experience.map((exp, index) => (
            <Card
              key={index}
              className="animate-on-scroll mb-8 bg-neutral-900 border-neutral-800"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-3 text-white font-bold">
                      {exp.title}
                    </CardTitle>
                    <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6 text-neutral-400">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {exp.company}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {exp.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.period}
                      </div>
                    </div>
                  </div>
                  <span className="mt-4 md:mt-0 border border-neutral-600 text-neutral-300 px-3 py-1 rounded-md text-sm w-fit">
                    {exp.type}
                  </span>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-neutral-400 mb-8 body-light text-lg">
                  {exp.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4 text-white text-lg">
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-4 shrink-0"></span>
                          <span className="text-neutral-400 body-light">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {exp.image && (
                    <div>
                      <h4 className="font-semibold mb-4 text-white text-lg">
                        Team Collaboration
                      </h4>
                      <div className="relative overflow-hidden">
                        <img
                          src={exp.image}
                          alt={exp.imageAlt || `${exp.company} team`}
                          className="w-full h-56 object-cover studio-image rounded-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <p className="text-white text-sm body-light">
                            {exp.imageCaption || "Team collaboration and culture."}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold mb-4 text-white text-lg">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="border border-neutral-600 text-neutral-300 px-3 py-1 rounded-md text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
