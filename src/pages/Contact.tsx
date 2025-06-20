
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'surya.unf257@gmail.com',
      href: 'mailto:surya.unf257@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1-346-628-8609',
      href: 'tel:+13466288609'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Houston, TX',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/suryavardhanreddypuchalapalli',
      color: 'hover:text-red-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/surya1332002',
      color: 'hover:text-red-600'
    }
  ];

  return (
    <div className="min-h-screen py-12 bg-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="display-lg text-white mb-6 animate-fade-in">
            Get In <span className="text-red-600">Touch</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto body-light animate-fade-in">
            I'm always open to discussing new opportunities, interesting projects, or just having a conversation about data science and AI.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="animate-on-scroll bg-neutral-800 border-neutral-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    className="bg-neutral-900 border-neutral-600 text-white placeholder:text-neutral-400 focus:border-red-600 focus:ring-red-600"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-neutral-900 border-neutral-600 text-white placeholder:text-neutral-400 focus:border-red-600 focus:ring-red-600"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    required
                    className="bg-neutral-900 border-neutral-600 text-white placeholder:text-neutral-400 focus:border-red-600 focus:ring-red-600"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white border-none">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-on-scroll" style={{animationDelay: '0.2s'}}>
            {/* Contact Details */}
            <Card className="bg-neutral-800 border-neutral-700">
              <CardHeader>
                <CardTitle className="text-white">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-600/10 rounded-lg flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-400">{info.label}</p>
                      {info.href !== '#' ? (
                        <a
                          href={info.href}
                          className="font-medium hover:text-red-600 transition-colors text-white"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium text-white">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-neutral-800 border-neutral-700">
              <CardHeader>
                <CardTitle className="text-white">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-neutral-900 border-neutral-700 border rounded-lg transition-all duration-300 hover:scale-105 ${social.color}`}
                    >
                      <social.icon className="w-6 h-6 text-white" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Current Status */}
            <Card className="bg-neutral-800 border-neutral-700">
              <CardHeader>
                <CardTitle className="text-white">Current Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Availability</span>
                    <Badge className="bg-green-600 text-white border-none">
                      Open to Opportunities
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Graduation</span>
                    <Badge className="bg-neutral-700 text-white border-neutral-600">May 2025</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Response Time</span>
                    <Badge className="bg-neutral-700 text-white border-neutral-600">Within 24 hours</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
