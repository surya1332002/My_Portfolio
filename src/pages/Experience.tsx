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
      title: "Lead AI & Automation Engineer",
      company: "ReVenture Systems",
      location: "Remote",
      period: "June 2025 – Present",
      type: "FullTime",
      description:
        "Building intelligent workflows and AI-driven automation systems for client outreach, voice agents, and data pipelines.",
      achievements: [
        "Led end to end design of AI powered automation workflows aligned with client use cases, delivering iterative improvements with clear operational impact.",
        "Engineered scalable n8n based automation systems integrating APIs and LLMs, reducing manual effort by over 80%",
        "Designed and implemented LangChain based RAG systems using OpenAI and vector databases to extract accurate, context aware answers from contracts and reports.",
        "Led testing and deployment of production ready workflows with cross functional teams, ensuring reliable performance and successful client adoption."
      ],
      skills: [
        "LangChain",
        "n8n",
        "ElevenLabs",
        "Python",
        "Prompt Engineering",
        "Workflow Automation",
        "API Integration",
        "Notion",
        "Supabase",
        "Vector Databases",
        "Rag Systems"
      ],
      // ⬇️ Replace this with your own ReVenture image if you have one
      image: "https://res.cloudinary.com/dpcfu8ekd/image/upload/v1755618150/1748289158637_g65yai.jpg",
      imageAlt: "Remote collaboration at ReVenture Systems",
      imageCaption: "Collaborating remotely with the ReVenture Systems AI team."
    },
    {
      title: "Data Analyst (IT Operations)",
      company: "University of Houston",
      location: "Houston, TX",
      period: "August 2023 – january 2026",
      type: "Part-time",
      description:
        "Supporting IT operations and enhancing technological infrastructure for the university campus.",
      achievements: [
        "Developed Python automation scripts to streamline weekly data collection from 3+ systems, saving 3 hours per week previously spent on manual Excel consolidation.",
        "Consolidated WiFi usage and signal data for 6,500+ access points into a single dataset, accelerating diagnosis of low performance zones across campus.",
        "Integrated Excel with Power BI to enable auto refreshing dashboards, reducing weekly reporting preparation from 3–4 hours to under 5 minutes.",
        "Improved WiFi coverage by 20% by identifying poor signal zones and supporting infrastructure upgrades across 10+ buildings.",
        "Analysed departmental expenditures and created Excel and Power BI dashboards for the NSM Department of Chemistry, improving budget visibility and audit workflows."
      ],
      skills: [
        "Python",
        "Excel",
        "Power BI",
        "Dashboard Development",
        "Automation",
        "Network Administration",
        "Aruba Central",
        "HPE GreenLake",
        "...."
      ],
      image:
        "https://res.cloudinary.com/dpcfu8ekd/image/upload/v1750357769/867a88cc-6758-488e-8cc8-70935e43227a_1_qqa50n.jpg",
      imageAlt: "Surya with colleagues at University of Houston",
      imageCaption:
        "Collaborating with amazing peers at the University of Houston IT Department."
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
