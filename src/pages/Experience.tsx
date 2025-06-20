
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MapPin, Users } from 'lucide-react';

const Experience = () => {
  const experience = [
    {
      title: "Instructional Assistant",
      company: "University of Houston IT Department (Wifi Team)",
      location: "Houston, TX",
      period: "January 2024 – May 2025",
      type: "Part-time",
      description: "Supporting IT operations and enhancing technological infrastructure for the university campus.",
      achievements: [
        "Built Python scripts to automate weekly data collection from 3+ sources (Cape sensors, HPE GreenLake, Aruba Central), saving 3 hours/week of manual effort previously spent on Excel consolidation",
        "Centralized Wi-Fi usage and signal data for 6,500+ access points into a single Excel file, enabling faster diagnostics of lowperformance zones across the university campus.",
        "Integrated Excel with Power BI to auto-refresh dashboards used by IT managers in weekly meetings, cutting preparation time from 3–4 hours to under 5 minutes.",
        "Helped improve Wi-Fi coverage by 20% by identifying poor signal zones and supporting infrastructure upgrades including the installation of new routers in 10+ buildings",
        "Performed on-site signal testing and designed Wi-Fi layouts for large facilities like the university library, leading to a 30% increase in signal reliability in high-traffic student areas."
      ],
      skills: ["Python", "Excel", "Power BI", "Dashboard Development", "Automation", "Network Administration", "Aruba Central", "HPE GreenLake" ]
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
            <Card key={index} className="animate-on-scroll mb-8 bg-neutral-900 border-neutral-800" style={{animationDelay: `${index * 0.2}s`}}>
              <CardHeader className="pb-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-3 text-white font-bold">{exp.title}</CardTitle>
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
                <p className="text-neutral-400 mb-8 body-light text-lg">{exp.description}</p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4 text-white text-lg">Key Achievements</h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-4 shrink-0"></span>
                          <span className="text-neutral-400 body-light">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-4 text-white text-lg">Team Collaboration</h4>
                    <div className="relative overflow-hidden">
                      <img 
                        src="https://res.cloudinary.com/dpcfu8ekd/image/upload/v1750357769/867a88cc-6758-488e-8cc8-70935e43227a_1_qqa50n.jpg" 
                        alt="Surya with colleagues at University of Houston"
                        className="w-full h-56 object-cover studio-image rounded-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <p className="text-white text-sm body-light">
                          Collaborating with amazing peers at the University of Houston IT Department.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-semibold mb-4 text-white text-lg">Technologies Used</h4>
                  <div className="flex flex-wrap gap-3">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="border border-neutral-600 text-neutral-300 px-3 py-1 rounded-md text-sm">
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
