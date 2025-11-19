
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const projects = [
    {
      title: "AI-Powered Fake Job Detector",
      description: "NLP-based fraud detection system with 99.11% accuracy using DistilBERT, ChromaDB vector database, and RAG-powered explanations.",
      longDescription: "Built an end-to-end NLP system to detect fraudulent job postings using fine-tuned DistilBERT transformer model. Integrated ChromaDB vector database with 17,880 job embeddings for semantic similarity search. Implemented RAG architecture using OpenAI GPT to provide explainable AI fraud analysis. Deployed production-ready Flask web application with real-time predictions, similar job retrieval, and automatic URL scraping capabilities.",
      technologies: ["Python", "DistilBERT", "Transformers", "ChromaDB", "Flask", "OpenAI", "Docker", "Sentence-Transformers"],
      category: "NLP, Deep Learning, RAG",
      metrics: ["99.11% detection accuracy", "<2 second response time", "17,880 vectorized job postings"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
      githubUrl: "https://github.com/surya1332002/fake-job-detector",
      liveUrl: "https://huggingface.co/spaces/SuryaVardhanReddy/fake-job-detector"
    },
    {
      title: "Financial Risk & Customer Analytics Platform",
      description: "Advanced fraud detection system with 97% accuracy using machine learning and LangChain PDF QA capabilities.",
      longDescription: "Developed a comprehensive platform combining fraud detection algorithms with PDF question-answering capabilities. The system processes financial documents, extracts key insights, and provides real-time risk assessments. Integrated Power BI dashboards for executive reporting and customer behavior analysis.",
      technologies: ["Python", "LangChain", "Machine Learning", "Power BI", "PDF Processing"],
      category: "ML Engineering, Generative AI",
      metrics: ["97% fraud detection accuracy", "40% reduction in false positives", "Real-time processing"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      githubUrl: "https://github.com/surya1332002/Financial-Risk-Customer-Analytics-Platform",
      liveUrl: "#"
    },
    {
      title: "Disneyland Visitor Experience Dashboard",
      description: "Comprehensive analytics dashboard analyzing 45+ features with NLP sentiment analysis and Tableau visualizations.",
      longDescription: "Built an end-to-end data pipeline analyzing visitor reviews and experience data. Implemented NLP models for sentiment analysis, created predictive models for visitor satisfaction, and developed interactive Tableau dashboards for stakeholder insights.",
      technologies: ["R", "NLP", "Tableau", "Sentiment Analysis", "Data Visualization"],
      category: "Data Analytics, Information Visualization",
      metrics: ["45+ features analyzed", "85% sentiment accuracy", "20% insight improvement"],
      image: "https://res.cloudinary.com/dpcfu8ekd/image/upload/v1750358193/final_1_hlakno.jpg",
      githubUrl: "https://github.com/surya1332002/Disneyland-Review-Analysis-Using-NLP-Tableau-",
      liveUrl: "#"
    },
    {
      title: "Generative AI Cold Email Generator",
      description: "AI-powered email generation system using LangChain, ChromaDB, and Llama 3.3 with semantic matching capabilities.",
      longDescription: "Created an intelligent email generation platform that analyzes job postings and candidate profiles to generate personalized cold emails. Utilized vector databases for semantic matching and implemented a Streamlit interface for easy user interaction.",
      technologies: ["LangChain", "ChromaDB", "Llama 3.3", "Streamlit", "Vector DB"],
      category: "Generative AI",
      metrics: ["95% relevance score", "60% response rate improvement", "500+ emails generated"],
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=500&h=300&fit=crop",
      githubUrl: "https://github.com/surya1332002/Generative-AI-Cold-Email-Generator",
      liveUrl: "#"
    },
    {
      title: "Movie Recommendation System",
      description: "Sophisticated recommendation engine using KNN and Apriori algorithms on MovieLens-20M dataset with R Shiny dashboard.",
      longDescription: "Developed a comprehensive movie recommendation system combining collaborative filtering and association rule mining. Achieved 100% top-5 hit rate through advanced algorithm optimization and created an interactive R Shiny dashboard for user interaction.",
      technologies: ["R", "KNN", "Apriori", "Shiny", "Collaborative Filtering"],
      category: "Recommendation Systems",
      metrics: ["100% top-5 hit rate", "MovieLens-20M dataset", "Interactive dashboard"],
      image: "https://res.cloudinary.com/dpcfu8ekd/image/upload/v1750315806/0_BIJL7Ue0fMQqxd_d_x68cug.png",
      githubUrl: "https://github.com/surya1332002/Movie-Recommendation-System-Using-Collaborative-Filtering-and-KNN-Recommendation-",
      liveUrl: "#"
    },
    {
      title: "Real-Time Background Subtraction Tool",
      description: "Computer vision tool for real-time object isolation using OpenCV.",
      longDescription: "Built a real-time object isolation system with motion-based background removal. Optimized frame processing using OpenCV filters to improve efficiency by 30% while achieving 89.2% accuracy.",
      technologies: ["Python", "OpenCV", "Computer Vision"],
      category: "Computer Vision",
      metrics: ["30% faster frame processing", "89.2% foreground detection accuracy"],
      image: "https://res.cloudinary.com/dpcfu8ekd/image/upload/v1750359987/ChatGPT_Image_Jun_19_2025_01_59_56_PM_ln4fgl.png",
      githubUrl: "https://github.com/surya1332002/Background-Subtraction-System-for-Real-Time-Video-Streams",
      liveUrl: "#"
    },
    {
      title: "Oil Spill Detection from Satellite Imagery",
      description: "Binary classifier trained with VGG-19 to detect oil spills in satellite images.",
      longDescription: "Trained a VGG-19 transfer learning model on 2,000+ annotated satellite images to detect marine oil spills. Enabled early-stage environmental risk identification with 91% precision.",
      technologies: ["Python", "CNN", "VGG-19", "Transfer Learning"],
      category: "Deep Learning",
      metrics: ["91% precision", "2000+ satellite images", "Early risk detection"],
      image: "https://res.cloudinary.com/dpcfu8ekd/image/upload/v1750359988/ChatGPT_Image_Jun_19_2025_02_04_08_PM_echb3d.png",
      githubUrl: "https://github.com/surya1332002/Binary-Image-Classification-System-to-Identify-Oil-Spills-in-Ocean-Imagery",
      liveUrl: "#"
    },
    {
      title: "Fish Species Classifier for Allergic People",
      description: "CNN-based classifier to identify fish species and potential allergies from images.",
      longDescription: "Created a deep learning model using CNNs to classify fish species with 96% accuracy from Kaggle datasets. Developed a user-friendly interface to upload images and retrieve species info and allergy alerts.",
      technologies: ["Python", "CNN", "Deep Learning", "Image Classification"],
      category: "Healthcare AI",
      metrics: ["96% accuracy", "Real-time species and allergy identification"],
      image: "https://res.cloudinary.com/dpcfu8ekd/image/upload/v1750359989/ChatGPT_Image_Jun_19_2025_02_04_02_PM_te3fup.png",
      githubUrl: "https://ieeexplore.ieee.org/document/10084124",
      liveUrl: "#"
    },
    {
      title: "Silver Jewelry E-Commerce Website",
      description: "Unique e-commerce site for men’s silver jewelry built with React.",
      longDescription: "Built a full-stack web application selling men-specific silver jewelry like bracelets, rings, and chains. Highlighted niche marketing through UI tailored for male customers using React.",
      technologies: ["React", "JavaScript", "E-Commerce"],
      category: "Web Development",
      metrics: ["Custom UI for men", "Complete product catalog integration"],
      image: "https://res.cloudinary.com/dpcfu8ekd/image/upload/v1750359989/ChatGPT_Image_Jun_19_2025_02_04_26_PM_xij9jp.png",
      githubUrl: "https://github.com/surya1332002/The_Loop_eCommerceWebsite#",
      liveUrl: "#"
    },
    {
      title: "Dry Bean Data Classification",
      description: "Logistic regression model for classifying dry bean types using Kaggle dataset.",
      longDescription: "Used logistic regression to classify multiple dry bean types based on various physical characteristics. Achieved 71.5% classification accuracy using data preprocessing and model tuning.",
      technologies: ["Python", "Logistic Regression", "Data Preprocessing"],
      category: "Machine Learning",
      metrics: ["71.5% classification accuracy", "Multi-class bean type prediction"],
      image: "https://res.cloudinary.com/dpcfu8ekd/image/upload/v1750359990/ChatGPT_Image_Jun_19_2025_02_06_02_PM_njtdnf.png",
      githubUrl: "https://github.com/surya1332002/dry_bean_dataset_using_logistic_regression#",
      liveUrl: "#"
    }
  ];

  const categories = ['All', 'ML Engineering', 'Data Analytics', 'Generative AI', 'Recommendation Systems'];

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  return (
    <div className="min-h-screen py-20 bg-black">
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="display-lg text-white mb-6 animate-fade-in">
            My <span className="text-red-600">Projects</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto body-light animate-fade-in">
            Exploring the intersection of data science, machine learning, and artificial intelligence through practical applications.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedFilter === category ? "default" : "outline"}
              onClick={() => setSelectedFilter(category)}
              className={selectedFilter === category ? "bg-red-600 hover:bg-red-700 text-white border-none" : "border-neutral-600 text-neutral-300 hover:bg-neutral-900 hover:text-white"}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="group card-hover animate-on-scroll overflow-hidden bg-neutral-900 border-neutral-800" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover studio-image group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl group-hover:text-red-600 transition-colors line-clamp-2 text-white">
                    {project.title}
                  </CardTitle>
                  <span className="border border-neutral-600 text-neutral-300 px-2 py-1 rounded text-xs ml-2 shrink-0">
                    {project.category}
                  </span>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-neutral-400 mb-4 line-clamp-3 body-light">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="skill-tag text-xs px-2 py-1">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="skill-tag text-xs px-2 py-1">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-3">
                    <a href={project.githubUrl} className="text-neutral-400 hover:text-white transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={project.liveUrl} className="text-neutral-400 hover:text-white transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="sm" className="group-hover:text-red-600 text-neutral-400 hover:bg-transparent">
                        Read More →
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-black border-neutral-800">
                      <DialogHeader>
                        <DialogTitle className="text-2xl text-white">{project.title}</DialogTitle>
                      </DialogHeader>
                      
                      <div className="space-y-6">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-64 object-cover studio-image"
                        />
                        
                        <p className="text-neutral-400 leading-relaxed body-light">
                          {project.longDescription}
                        </p>
                        
                        <div>
                          <h4 className="font-semibold mb-3 text-white">Key Metrics</h4>
                          <ul className="space-y-2">
                            {project.metrics.map((metric, idx) => (
                              <li key={idx} className="text-sm text-neutral-400 flex items-center body-light">
                                <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                                {metric}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3 text-white">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span key={tech} className="skill-tag">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex gap-4 pt-4">
                          <Button asChild className="bg-red-600 hover:bg-red-700 text-white border-none">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              View Code
                            </a>
                          </Button>
                          <Button variant="outline" asChild className="border-neutral-600 text-neutral-300 hover:bg-neutral-900 hover:text-white">
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <h3 className="text-2xl font-bold mb-6 text-white">Want to see more?</h3>
          <p className="text-neutral-400 mb-8 body-light">
            Check out my GitHub for additional projects and contributions.
          </p>
          <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white border-none">
            <a href="https://github.com/surya1332002" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              Visit GitHub
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
