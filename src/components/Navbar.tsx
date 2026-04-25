import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'الرئيسية' },
  { path: '/about', label: 'عن المركز' },
  { path: '/services', label: 'الخدمات' },
  { path: '/doctors', label: 'الأطباء' },
  { path: '/contact', label: 'اتصل بنا' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Top Bar */}
      <div className="hidden bg-teal-700 text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              051-1234567
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              مصراتة - شارع المستشفى المركزي
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>ساعات العمل: السبت - الخميس 8:00 ص - 8:00 م</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 border-b bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-blue-600 shadow-lg shadow-teal-200">
                <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                  <path d="M12 6v6l4 2" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-gray-800 leading-tight">مركز علاج وغسيل الكلى</h1>
                <p className="text-xs text-teal-600 font-medium">مصراتة</p>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                    location.pathname === link.path
                      ? 'bg-teal-50 text-teal-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-teal-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/appointment"
                className="mr-4 rounded-xl bg-gradient-to-r from-teal-500 to-blue-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-teal-200 transition-all duration-300 hover:shadow-xl hover:shadow-teal-300 hover:scale-105"
              >
                حجز موعد
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 lg:hidden"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            isOpen ? 'max-h-96 border-t' : 'max-h-0'
          }`}
        >
          <div className="space-y-1 bg-white px-4 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'bg-teal-50 text-teal-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-teal-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/appointment"
              onClick={() => setIsOpen(false)}
              className="block rounded-xl bg-gradient-to-r from-teal-500 to-blue-600 px-6 py-3 text-center text-sm font-bold text-white mt-2"
            >
              حجز موعد
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
