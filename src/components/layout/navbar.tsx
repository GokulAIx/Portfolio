
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#resume', label: 'Resume' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 left-0 right-0">
      <div className="flex h-16 items-center px-0 sm:mx-auto sm:container sm:px-4 md:max-w-5xl lg:px-6 relative">
        
        <Link href="#home" className="block"> {/* Explicitly set display: block */}
          <div className="relative w-[144px] h-[48px]">
            <Image
              src="/Logo.png"
              alt="Logo"
              fill
              className="object-contain rounded-sm"
              priority
              sizes="(max-width: 768px) 144px, 144px"
            />
          </div>
        </Link>

        {/* Brand.png - Centered on Mobile, hidden on desktop */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:hidden">
          <div className="relative w-[150px] h-[48px]">
            <Image
              src="/Brand.png"
              alt="Brand Name"
              fill
              className="object-contain rounded-sm"
              sizes="(max-width: 768px) 150px, 150px"
              data-ai-hint="brand text"
            />
          </div>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex flex-nowrap">
          {navItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              asChild
              size="sm" 
              className="px-2" 
            >
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </nav>

        <div className="ml-auto"> {/* Pushes mobile menu to the right */}
          <div className="md:hidden"> {/* Mobile menu trigger */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <Button key={item.label} variant="ghost" asChild className="w-full justify-start text-lg">
                      <Link href={item.href}>{item.label}</Link>
                    </Button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
