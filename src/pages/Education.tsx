
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays, MapPin, GraduationCap, BookOpen } from 'lucide-react';
import { useEffect } from 'react';

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Engineering Data Science",
      school: "University of Houston",
      location: "Houston, TX",
      period: "August 2023 – May 2025",
      status: "Recent",
      gpa: "3.63/4.0",
      description: "Comprehensive program combining engineering principles with advanced data science techniques, machine learning, and statistical analysis.",
      highlights: [
        "Focus on Machine Learning and AI applications",
        "Applied real-world datasets to build end-to-end data pipelines and deploy machine learning models",
        "Research in Computer Vision and NLP",
        "Led different teams in academic projects"
      ],
      relevantCoursework: [
        "Data Science",
        "Machine Learning & Deep Learning",
        "Statistical Data Analysis",
        "Natural Language Processing",
        "Computer Vision",
        "Data Mining for Engineers",
        "Big Data Analytics",
        "Database Management Tools for Business Analytics",
        "Probability and Statistics",
        "Information Visualization"
      ]
    },
    {
      degree: "Bachelor of Engineering in Computer Science",
      school: "Sathyabama University",
      location: "Chennai, India",
      period: "August 2019 – May 2023",
      status: "Completed",
      gpa: "3.7/4.0",
      description: "Strong foundation in computer science fundamentals, programming, and software engineering principles.",
      highlights: [
        "First Class with Distinction",
        "Led multiple technical projects",
        "Active member of coding club",
        "Participated in hackathons and competitions",
        "Published IEEE research paper"
      ],
      relevantCoursework: [
        "Python and Problem Solving Techniques",
        "Data Structures",
        "Database Management Systems",
        "Machine Learning",
        "Big Data Analytics",
        "Probability and Statistics",
        "Artificial Intelligence",
        "Augmented & VirtualReality"
      ]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2025",
      status: "In Progress"
    },
    {
      name: "Oracle Cloud Infrastructure Generative AI Professional ",
      issuer: "Oracle",
      date: "2024",
      status: "Completed"
    },
    {
      name: "Machine Learning",
      issuer: "Cognibot",
      date: "2023",
      status: "Completed"
    }
  ];

  const achievements = [
    {
      title: "IEEE Research Publication",
      description: "Published research on Fish Species Classification at ICCMC 2023",
      icon: "📄"
    },
    {
      title: "Academic Excellence",
      description: "Maintained high GPA across both undergraduate and graduate studies",
      icon: "🏆"
    },
    {
      title: "Technical Leadership",
      description: "Led multiple academic and personal projects with measurable impact",
      icon: "👨‍💻"
    }
  ];

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

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen py-20 bg-black">
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="display-lg text-white mb-6 animate-fade-in">
            Educational <span className="text-red-600">Background</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto body-light animate-fade-in">
            Building a strong foundation in data science, machine learning, and computer science through rigorous academic training.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8 mb-16">
          {education.map((edu, index) => (
            <Card key={index} className={`overflow-hidden animate-on-scroll bg-neutral-900 border-neutral-800 ${index === 0 ? 'ring-1 ring-red-600/20' : ''}`} style={{animationDelay: `${index * 0.2}s`}}>
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="w-6 h-6 text-red-600" />
                      {index === 0 && <span className="border border-red-600 text-red-600 px-3 py-1 rounded-md text-sm">Current</span>}
                    </div>
                    <CardTitle className="text-2xl mb-2 text-white">{edu.degree}</CardTitle>
                    <div className="text-xl font-semibold text-red-600 mb-2">{edu.school}</div>
                    <div className="flex flex-wrap gap-4 text-neutral-400">
                      <div className="flex items-center gap-1">
                        <CalendarDays className="w-4 h-4" />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </div>
                      <span className="border border-neutral-600 text-neutral-300 px-3 py-1 rounded-md text-sm">GPA: {edu.gpa}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-neutral-400 mb-6 leading-relaxed body-light">
                  {edu.description}
                </p>

                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Highlights */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-white">Key Highlights</h3>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-neutral-400 flex items-start gap-2 body-light">
                          <span className="w-2 h-2 bg-red-600 rounded-full mt-2 shrink-0"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Relevant Coursework */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-white">
                      <BookOpen className="w-5 h-5" />
                      Relevant Coursework
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {edu.relevantCoursework.slice(0, 6).map((course) => (
                        <span key={course} className="border border-neutral-600 text-neutral-300 px-2 py-1 rounded text-xs">
                          {course}
                        </span>
                      ))}
                      {edu.relevantCoursework.length > 6 && (
                        <span className="border border-neutral-600 text-neutral-300 px-2 py-1 rounded text-xs">
                          +{edu.relevantCoursework.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-white animate-on-scroll">Academic Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center p-6 card-hover animate-on-scroll bg-neutral-900 border-neutral-800" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h3 className="font-semibold mb-2 text-white">{achievement.title}</h3>
                <p className="text-sm text-neutral-400 body-light">{achievement.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-white animate-on-scroll">Certifications & Professional Development</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="card-hover animate-on-scroll bg-neutral-900 border-neutral-800" style={{animationDelay: `${index * 0.2}s`}}>
                <CardHeader>
                  <CardTitle className="text-lg text-white">{cert.name}</CardTitle>
                  <div className="flex items-center justify-between">
                    <span className="text-red-600 font-medium">{cert.issuer}</span>
                    <span className={`px-3 py-1 rounded-md text-sm ${cert.status === 'Completed' ? 'border border-red-600 text-red-600' : 'border border-neutral-600 text-neutral-300'}`}>
                      {cert.status}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-400 body-light">{cert.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Future Learning Goals */}
        <div className="text-center p-8 bg-neutral-900/50 border border-neutral-800 animate-on-scroll">
          <h3 className="text-2xl font-bold mb-4 text-white">Continuous Learning Journey</h3>
          <p className="text-neutral-400 mb-6 max-w-2xl mx-auto body-light">
            I believe in lifelong learning and staying current with emerging technologies in data science and AI. 
            Currently exploring advanced topics in LangChain, RAG systems, and generative AI applications.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["LangChain", "RAG Systems", "FAISS", "Vector Databases", "MLOps", "Cloud Computing"].map((topic) => (
              <span key={topic} className="border border-neutral-600 text-neutral-300 px-3 py-1 rounded-md text-sm">
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
