import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Download } from 'lucide-react';
import BackgroundAnimation from './BackgroundAnimation';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Education', path: '/education' },
    { name: 'Skills', path: '/skills' },
    { name: 'Research', path: '/research' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-black relative">
      {/* Global Background Animation - positioned as the deepest layer */}
      <BackgroundAnimation />
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-neutral-800' : 'bg-black/70'
      }`}>
        <div className="container mx-auto px-8 h-20 flex items-center justify-between relative z-10">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-red-600 flex items-center justify-center text-white font-bold text-lg">
              S
            </div>
            <span className="font-bold text-xl hidden sm:block text-white tracking-tight">Surya Vardhan Reddy</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-light tracking-wide transition-colors hover:text-white ${
                  isActive(item.path) ? 'text-white' : 'text-neutral-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
  href="/After_Reventure_Resume.pdf"
  download
  className="ml-6"
>
  <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
    <Download className="w-4 h-4 mr-2" />
    Resume
  </Button>
</a>

          </div>

          {/* Mobile Navigation */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm" className="text-white hover:text-white hover:bg-neutral-900">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-black border-neutral-800">
              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg font-light transition-colors hover:text-white ${
                      isActive(item.path) ? 'text-white' : 'text-neutral-400'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <a
  href="/SuryaResume_DataScienceGrad.pdf"
  download
  className="mt-6 w-fit"
>
  <Button className="bg-red-600 hover:bg-red-700 text-white">
    <Download className="w-4 h-4 mr-2" />
    Resume
  </Button>
</a>

              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20 relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-neutral-900/80 backdrop-blur-sm border-t border-neutral-800 py-12 relative z-10">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-8 h-8 bg-red-600 flex items-center justify-center text-white font-bold">
                S
              </div>
              <span className="font-semibold text-white">Surya Vardhan Reddy Puchalapalli</span>
            </div>
            <div className="flex items-center space-x-8">
              <a href="mailto:surya.unf257@gmail.com" className="text-neutral-400 hover:text-white transition-colors font-light">
                surya.unf257@gmail.com
              </a>
              <a href="tel:+13466288609" className="text-neutral-400 hover:text-white transition-colors font-light">
                +1-346-628-8609
              </a>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-neutral-800 text-neutral-500 font-light">
            <p>&copy; 2025 Surya Vardhan Reddy Puchalapalli. Designed with precision.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
