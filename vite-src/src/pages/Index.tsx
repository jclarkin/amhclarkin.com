import { Mail, BookOpen, Calculator, Microscope, GraduationCap, MapPin, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const subjects = [
    { icon: Calculator, name: "Mathematics", description: "Algebra, Geometry, Calculus, Statistics (All Grades K-12)" },
    { icon: Microscope, name: "Sciences", description: "Biology, Chemistry, Physics, Earth Science (Grades K-10)" },
    { icon: BookOpen, name: "Study Skills", description: "Organization, Test Prep, Note-taking" }
  ];

  const gradeRanges = [
    { level: "Elementary", grades: "K-6", focus: "Building strong foundations in Math & Science" },
    { level: "Middle School", grades: "7-8", focus: "Bridging concepts in Math & Science" },
    { level: "High School", grades: "9-10", focus: "Advanced Science preparation" },
    { level: "High School", grades: "9-12", focus: "Advanced Math preparation" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-gray-900">Arianna Clarkin Tutoring</h1>
          </div>
          <Button>
            <Mail className="h-4 w-4 mr-2" />
            Contact Me
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Unlock Your Academic Potential
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Law student offering expert tutoring in Mathematics (all grades) and Sciences (up to Grade 10). 
            Personalized learning that builds confidence and achieves results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="text-lg px-8 py-3"><Button size="lg" className="text-lg px-8 py-3 w-full">Start Learning Today</Button></a>
            <a href="#services" className="text-lg px-8 py-3"><Button size="lg" variant="outline" className="text-lg px-8 py-3 w-full">View Services</Button></a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">About Arianna</h3>
              <p className="text-lg text-gray-600 mb-6">
                Currently pursuing a Law degree at university, I bring a unique analytical approach to tutoring 
                that helps students understand complex concepts in Mathematics and Sciences.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                My experience spans Mathematics for all grade levels (K-12) and Sciences up to Grade 10, with a focus on 
                building strong foundational skills and confidence in learning.
              </p>
              <div className="flex items-center space-x-4 text-gray-600">
                <MapPin className="h-5 w-5" />
                <span>Serving Embrun/Russell area, Ontario</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">Math K-12</div>
                  <div className="text-gray-600">All Grades</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">Science K-10</div>
                  <div className="text-gray-600">Up to Grade 10</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">Law Student</div>
                  <div className="text-gray-600">University Level</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">Local</div>
                  <div className="text-gray-600">Embrun/Russell</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Tutoring Services</h3>
            <p className="text-lg text-gray-600">Comprehensive support across core academic subjects</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {subjects.map((subject, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <subject.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{subject.name}</h4>
                  <p className="text-gray-600">{subject.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mb-12">
            <h4 className="text-2xl font-bold text-gray-900 mb-8">Grade Levels Served</h4>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {gradeRanges.map((range, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h5 className="text-xl font-bold text-primary mb-2">{range.level}</h5>
                <div className="text-lg font-semibold text-gray-900 mb-2">Grades {range.grades}</div>
                <p className="text-gray-600">{range.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">What Students Say</h3>
            <p className="text-lg text-gray-600">Building confidence and achieving results</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Arianna helped me understand calculus concepts I'd been struggling with all semester. 
                  Her patient explanation style made everything click!"
                </p>
                <div className="font-semibold text-gray-900">- High School Student</div>
              </CardContent>
            </Card>
            
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "My daughter's confidence in math has improved dramatically. Arianna creates a 
                  comfortable learning environment where questions are always welcome."
                </p>
                <div className="font-semibold text-gray-900">- Parent</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-r from-primary to-purple-700">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h3>
          <p className="text-xl text-purple-100 mb-8">
            Contact me to discuss your tutoring needs and schedule your sessions
          </p>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-left">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-gray-700">amhclarkin@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-gray-700">Embrun/Russell area, Ontario</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="text-gray-700">Flexible scheduling available</span>
                  </div>
                </div>
              </div>
              
              <div className="text-left">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h4>
                <p className="text-gray-600 mb-6">
                  Reach out to discuss your specific tutoring needs, availability, and how I can help 
                  you achieve your academic goals.
                </p>
                <Button 
                  size="lg" 
                  className="w-full"
                  onClick={() => window.location.href = 'mailto:amhclarkin@gmail.com'}
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Send Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <GraduationCap className="h-6 w-6" />
            <span className="text-lg font-semibold">Arianna Clarkin Tutoring</span>
          </div>
          <p className="text-gray-400">
            Professional tutoring services in Mathematics and Sciences • Embrun/Russell, Ontario
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
