
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, FileText, Users, TrendingUp } from 'lucide-react';

const Research = () => {
  const mainResearch = {
    title: "Fish Species Classifier for Allergic People",
    conference: "IEEE International Conference on Computer, Communication, and Artificial Intelligence (ICCMC 2023)",
    status: "Published",
    doi: "10.1109/ICCMC56507.2023.10083690",
    abstract: "Developed an advanced computer vision system for fish species classification specifically designed to help allergic individuals identify safe seafood options. The system achieved 99.6% accuracy using deep learning techniques and comprehensive dataset analysis.",
    fullDescription: "Developed a CNN-based system trained on a 9-class seafood image dataset (9,000 images) to accurately identify fish species and support allergy-aware decisions. The tool enables real-time image-based classification to assist allergic individuals and healthcare applications, offering over 99% accuracy. This approach addresses a critical health need, as traditional fish identification methods are unreliable and pose safety risks.",
    methodology: [
      "Collected and preprocessed comprehensive fish species dataset",
      "Implemented multiple CNN architectures (ResNet, VGG, EfficientNet)",
      "Applied data augmentation techniques to improve generalization",
      "Performed extensive hyperparameter tuning and model optimization",
      "Validated results through cross-validation and test set evaluation"
    ],
    results: [
      {
        metric: "Overall Accuracy",
        value: "99.6%",
        description: "Achieved across all fish species in the test dataset"
      },
      {
        metric: "Precision",
        value: "99.4%",
        description: "High precision ensures accurate positive identifications"
      },
      {
        metric: "Recall",
        value: "99.2%",
        description: "Excellent recall minimizes missed detections"
      },
      {
        metric: "Species Covered",
        value: "9",
        description: "Comprehensive coverage of common fish species"
      }
    ],
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "CNN", "Deep Learning", "Computer Vision"],
    impact: [
      "Provides safety tool for allergic individuals",
      "Reduces health risks from fish misidentification",
      "Demonstrates practical AI application in healthcare",
      "Establishes foundation for mobile app development"
    ],
    futureWork: [
      "Development of mobile application for real-time identification",
      "Expansion to include shellfish and other seafood categories",
      "Integration with nutritional and allergen databases",
      "Collaboration with healthcare providers for clinical validation",
      "Expand dataset to include more fish species and improve generalization to unseen data"
    ]
  };

  const additionalResearch = [
    {
      title: "Revealed shortly",
      status: "Ongoing",
      description: "",
      technologies: []
    },
    {
      title: "Fraud Detection Using Ensemble Methods",
      status: "Completed",
      description: "Comparative study of ensemble learning techniques for financial fraud detection, achieving 97% accuracy in real-world datasets.",
      technologies: ["Machine Learning", "Ensemble Methods", "Python", "Scikit-learn"]
    }
  ];

  return (
    <div className="min-h-screen py-12 bg-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="display-lg text-white mb-6 animate-fade-in">
            Research <span className="text-red-600">Publications</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto body-light animate-fade-in">
            Contributing to the advancement of AI and machine learning through innovative research and practical applications.
          </p>
        </div>

        {/* Main Research Publication */}
        <Card className="mb-16 overflow-hidden animate-on-scroll bg-neutral-800 border-neutral-700">
          <div className="bg-gradient-to-r from-red-600/10 to-red-500/10 p-1">
            <Card className="border-0 bg-neutral-800">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <FileText className="w-6 h-6 text-red-600" />
                      <Badge className="bg-red-600 text-white border-none">IEEE Published</Badge>
                    </div>
                    <CardTitle className="text-2xl lg:text-3xl mb-3 text-white">{mainResearch.title}</CardTitle>
                    <p className="text-lg text-red-600 font-medium mb-2">{mainResearch.conference}</p>
                    <p className="text-neutral-400">DOI: {mainResearch.doi}</p>
                  </div>
                  <Button asChild className="shrink-0 bg-red-600 hover:bg-red-700 text-white border-none">
                    <a href={`https://doi.org/${mainResearch.doi}`} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Publication
                    </a>
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-8">
                {/* Abstract */}
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Abstract</h3>
                  <p className="text-neutral-400 leading-relaxed body-light">{mainResearch.abstract}</p>
                </div>

                {/* Key Results */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
                    <TrendingUp className="w-5 h-5 text-red-600" />
                    Key Results
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {mainResearch.results.map((result, index) => (
                      <Card key={index} className="text-center p-4 bg-neutral-900 border-neutral-700">
                        <div className="text-2xl font-bold text-red-600 mb-1">{result.value}</div>
                        <div className="font-semibold mb-1 text-white">{result.metric}</div>
                        <p className="text-xs text-neutral-400 body-light">{result.description}</p>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Full Description */}
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Research Overview</h3>
                  <p className="text-neutral-400 leading-relaxed body-light">{mainResearch.fullDescription}</p>
                </div>

                {/* Methodology */}
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">Methodology</h3>
                    <ul className="space-y-2">
                      {mainResearch.methodology.map((step, index) => (
                        <li key={index} className="text-neutral-400 flex items-start gap-2 body-light">
                          <span className="w-2 h-2 bg-red-600 rounded-full mt-2 shrink-0"></span>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">Research Impact</h3>
                    <ul className="space-y-2">
                      {mainResearch.impact.map((impact, index) => (
                        <li key={index} className="text-neutral-400 flex items-start gap-2 body-light">
                          <span className="w-2 h-2 bg-red-600 rounded-full mt-2 shrink-0"></span>
                          {impact}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {mainResearch.technologies.map((tech) => (
                      <Badge key={tech} className="bg-neutral-700 text-white border-neutral-600 px-3 py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Future Work */}
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Future Research Directions</h3>
                  <ul className="space-y-2">
                    {mainResearch.futureWork.map((work, index) => (
                      <li key={index} className="text-neutral-400 flex items-start gap-2 body-light">
                        <span className="w-2 h-2 bg-red-600 rounded-full mt-2 shrink-0"></span>
                        {work}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </Card>

        {/* Additional Research */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Ongoing & Additional Research</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {additionalResearch.map((research, index) => (
              <Card key={index} className="card-hover animate-on-scroll bg-neutral-800 border-neutral-700" style={{animationDelay: `${index * 0.2}s`}}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl flex-1 text-white">{research.title}</CardTitle>
                    <Badge className={research.status === 'Completed' ? 'bg-red-600 text-white border-none' : 'bg-neutral-700 text-white border-neutral-600'}>
                      {research.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-400 mb-4 leading-relaxed body-light">{research.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {research.technologies.map((tech) => (
                      <Badge key={tech} className="bg-neutral-700 text-white border-neutral-600 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Research Interests */}
        <div className="mt-16 text-center p-8 bg-neutral-800 border border-neutral-700 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2 text-white">
            <Users className="w-6 h-6" />
            Research Interests & Collaboration
          </h3>
          <p className="text-neutral-400 mb-6 max-w-3xl mx-auto body-light">
            I'm passionate about applying AI and machine learning to solve real-world problems, particularly in healthcare, 
            finance, and social impact domains. Open to research collaborations and academic partnerships.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {["Computer Vision", "NLP", "Healthcare AI", "Financial ML", "Ethical AI", "Explainable AI"].map((interest) => (
              <Badge key={interest} className="bg-neutral-700 text-white border-neutral-600 px-3 py-1">
                {interest}
              </Badge>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-red-600 hover:bg-red-700 text-white border-none">
              <a href="/contact">Collaborate With Me</a>
            </Button>
            <Button variant="outline" asChild className="border-neutral-600 text-neutral-300 hover:bg-neutral-800 hover:text-white bg-transparent">
              <a href="mailto:surya.unf257@gmail.com">Discuss Research Ideas</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
