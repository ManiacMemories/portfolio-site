import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function NavBar({ activeSection, onNavClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      ${scrolled ? 'bg-white/80 shadow backdrop-blur' : 'bg-transparent'}`}
    >
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-xl font-bold text-primary">MyPortfolio</div>

        {/* 데스크탑 네비게이션 */}
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavClick(link.id)}
              className={`transition font-medium text-sm tracking-wide 
                ${activeSection === link.id ? 'text-primary underline underline-offset-4' : 'text-gray-700 hover:text-primary'}`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* 모바일 햄버거 아이콘 */}
        <div className="md:hidden text-xl">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* 모바일 메뉴 */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 bg-white shadow">
          <div className="flex flex-col space-y-3">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavClick(link.id);
                  setMenuOpen(false); // 메뉴 닫기
                }}
                className={`text-left font-medium text-sm tracking-wide 
                  ${activeSection === link.id ? 'text-primary underline underline-offset-4' : 'text-gray-700 hover:text-primary'}`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
