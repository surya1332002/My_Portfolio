
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const skillCategories = [
    {
      category: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "Python", description: "Data Science, ML, Web Development", years: "" },
        { name: "R", description: "Statistical Analysis, Data Visualization", years: "" },
        { name: "SQL", description: "Database Queries, Data Management", years: "" }
      ]
    },
    {
      category: "Libraries & Frameworks",
      icon: "🧠",
      skills: [
        { name: "TensorFlow", description: "Deep Learning, Neural Networks", years: "" },
        { name: "PyTorch", description: "Research, Computer Vision", years: "" },
        { name: "Scikit-learn", description: "Classical ML, Model Selection", years: "" },
        { name: "Keras", description: "Rapid Prototyping, Deep Learning", years: "" },
        { name: "LangChain", description: "LLM Applications, RAG Systems", years: "" },
        { name: "OpenCV", description: "Computer Vision, Image Processing", years: "" },
        { name: "FAISS", description: "Similarity Search, Vector Indexing (library, not DB)", years: "" },
        { name: "OpenAI (API/SDK)", description: "Generative AI, LLM Integration", years: "" },
        { name: "SHAP", description: "Model Explainability", years: "" }
      ]
    },
    {
      category: "Data Visualization",
      icon: "📊",
      skills: [
        { name: "Power BI", description: "Business Intelligence, Dashboards", years: "" },
        { name: "Tableau", description: "Data Visualization, Analytics", years: "" },
        { name: "Matplotlib", description: "Python Plotting, Statistical Viz", years: "" },
        { name: "Seaborn", description: "Statistical Data Visualization", years: "" }
      ]
    },
    {
      category: "Tools & Platforms",
      icon: "🛠️",
      skills: [
        { name: "n8n", description: "Workflow Automation", years: "" },
        { name: "Notion", description: "Project / Knowledge Management", years: "" },
        { name: "Slack", description: "Collaboration", years: "" },
        { name: "ElevenLabs", description: "Voice AI Platform", years: "" },
        { name: "Streamlit", description: "Data Apps & Deployment", years: "" },
        { name: "GitHub", description: "Version Control, Collaboration", years: "" },
        { name: "Jupyter Notebook", description: "Data Analysis, Prototyping", years: "" },
        { name: "Google Colab", description: "Cloud ML Training", years: "" },
        { name: "Oracle Cloud", description: "Cloud Database & Computing", years: "" }
      ]
    },
    {
      category: "Databases & Big Data",
      icon: "🗄️",
      skills: [
        { name: "MySQL", description: "Database Design, Optimization", years: "" },
        { name: "ChromaDB", description: "Vector Database, Embeddings", years: "" }
      ]
    },
    {
      category: "Specialized Skills",
      icon: "🎯",
      skills: [
        { name: "Recommendation Systems", description: "Collaborative Filtering, ML", years: "" },
        { name: "Natural Language Processing (NLP)", description: "Text Analysis, Sentiment", years: "" },
        { name: "Computer Vision", description: "Image Classification, Detection", years: "" },
        { name: "Statistical Analysis", description: "Hypothesis Testing, Inference", years: "" },
        { name: "Time Series Analysis", description: "Forecasting, Trend Analysis", years: "" },
        { name: "A/B Testing", description: "Experimental Design, Analysis", years: "" }
      ]
    }
  ];

  const categories = ['All', ...skillCategories.map(cat => cat.category)];

  const filteredCategories = selectedCategory === 'All' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.category === selectedCategory);

  const overallStats = {
    totalSkills: skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0),
    //expertLevel: skillCategories.reduce((acc, cat) => acc + cat.skills.filter(skill => skill.years.includes('4+')).length, 0),
    //advancedLevel: skillCategories.reduce((acc, cat) => acc + cat.skills.filter(skill => skill.years.includes('3+')).length, 0),
    avgExperience: "1.5+ years"
  };

  return (
    <div className="min-h-screen py-20 bg-black">
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="display-lg text-white mb-6 animate-fade-in">
            Technical <span className="text-red-600">Skills</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto body-light animate-fade-in">
            Comprehensive expertise across the data science and machine learning technology stack.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mb-16">
          <Card className="text-center p-6 animate-on-scroll bg-neutral-800 border-neutral-700">
            <div className="text-3xl font-bold text-white mb-2">{overallStats.totalSkills}</div>
            <div className="text-sm text-neutral-400 font-light">Total Skills</div>
          </Card>
          {/* <Card className="text-center p-6 animate-on-scroll bg-neutral-800 border-neutral-700">
            <div className="text-3xl font-bold text-red-600 mb-2">{overallStats.expertLevel}</div>
            <div className="text-sm text-neutral-400 font-light">Expert Level</div>
          </Card> */}
          {/* <Card className="text-center p-6 animate-on-scroll bg-neutral-800 border-neutral-700">
            <div className="text-3xl font-bold text-white mb-2">{overallStats.advancedLevel}</div>
            <div className="text-sm text-neutral-400 font-light">Advanced Level</div>
          </Card> */}
          <Card className="text-center p-6 animate-on-scroll bg-neutral-800 border-neutral-700">
            <div className="text-3xl font-bold text-white mb-2">{overallStats.avgExperience}</div>
            <div className="text-sm text-neutral-400 font-light">Avg Experience</div>
          </Card>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category 
                ? "bg-red-600 hover:bg-red-700 text-white border-none" 
                : "border-neutral-600 text-neutral-300 hover:bg-neutral-800 hover:text-white bg-transparent"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {filteredCategories.map((categoryData, categoryIndex) => (
            <Card key={categoryData.category} className="overflow-hidden animate-on-scroll bg-neutral-800 border-neutral-700" style={{animationDelay: `${categoryIndex * 0.1}s`}}>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-4 text-white">
                  <span className="text-3xl">{categoryData.icon}</span>
                  {categoryData.category}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categoryData.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="group">
                      <div className="skill-tag w-full p-4 text-left bg-neutral-900 border-neutral-700">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-base text-white">{skill.name}</h3>
                          <span className="text-xs bg-neutral-700 text-neutral-300 px-2 py-1 rounded">
                            {skill.years}
                          </span>
                        </div>
                        <p className="text-xs text-neutral-400 leading-relaxed body-light">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Journey */}
        <div className="mt-20 text-center p-12 bg-neutral-800 border border-neutral-700">
          <h3 className="text-2xl font-bold mb-6 text-white">Continuous Learning Journey</h3>
          <p className="text-neutral-400 mb-8 max-w-3xl mx-auto body-light">
            Technology evolves rapidly, and I'm committed to staying at the forefront. Currently expanding my expertise in 
            Large Language Models, Vector Databases, and MLOps practices.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {["GPT/LLMs", "Vector Search", "MLOps", "Kubernetes", "Retrieval Systems", "Edge AI"].map((skill) => (
              <span key={skill} className="border border-neutral-600 text-neutral-300 px-3 py-1 rounded text-sm">
                🚀 {skill}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-red-600 hover:bg-red-700 text-white border-none">
              <a href="/projects">See Skills in Action</a>
            </Button>
            <Button variant="outline" asChild className="border-neutral-600 text-neutral-300 hover:bg-neutral-800 hover:text-white bg-transparent">
              <a href="/contact">Discuss Technical Projects</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
