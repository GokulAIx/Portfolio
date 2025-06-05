
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
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#home" className="flex items-center gap-x-2"> {/* Added gap-x-2 */}
          {/* Wrapper div for Logo.png */}
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
          {/* Wrapper div for Brand.png */}
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
        </Link>

        <nav className="hidden md:flex gap-1">
          {navItems.map((item) => (
            <Button key={item.label} variant="ghost" asChild>
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </nav>

        <div className="md:hidden">
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
    </header>
  );
};

export default Navbar;
