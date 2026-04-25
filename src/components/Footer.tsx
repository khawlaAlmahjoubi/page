import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Clock, ArrowUpRight } from 'lucide-react';

const quickLinks = [
  { path: '/', label: 'الرئيسية' },
  { path: '/about', label: 'عن المركز' },
  { path: '/services', label: 'الخدمات' },
  { path: '/doctors', label: 'الأطباء' },
  { path: '/contact', label: 'اتصل بنا' },
  { path: '/appointment', label: 'حجز موعد' },
];

const services = [
  'غسيل الكلى الدموي',
  'غسيل الكلى البريتوني',
  'استشارات أمراض الكلى',
  'متابعة ما بعد الزراعة',
  'التحاليل المخبرية',
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gray-900 text-gray-300">
      {/* Wave Divider */}
      <div className="absolute -top-1 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="h-auto w-full" preserveAspectRatio="none">
          <path
            fill="#111827"
            d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
          />
        </svg>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-blue-600">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                  <path d="M12 6v6l4 2" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">مركز علاج وغسيل الكلى</h3>
                <p className="text-xs text-teal-400">مصراتة</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              مركز متخصص في علاج أمراض الكلى وغسيل الكلى بأحدث الأجهزة الطبية وتحت إشراف نخبة من الأطباء المتخصصين.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-lg font-bold text-white">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-teal-400"
                  >
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 text-lg font-bold text-white">خدماتنا</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="flex items-center gap-2 text-sm text-gray-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-6 text-lg font-bold text-white">معلومات التواصل</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" />
                <span className="text-sm text-gray-400">
                  شارع المستشفى المركزي، مصراتة، ليبيا
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-teal-400" />
                <span className="text-sm text-gray-400" dir="ltr">051-1234567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-teal-400" />
                <span className="text-sm text-gray-400">info@misrata-kidney.ly</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" />
                <span className="text-sm text-gray-400">
                  السبت - الخميس: 8:00 ص - 8:00 م
                  <br />
                  الجمعة: عطلة
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 text-center md:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} مركز علاج وغسيل الكلى مصراتة. جميع الحقوق محفوظة.
          </p>
          <button
            onClick={scrollToTop}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-teal-400 transition-all hover:bg-teal-600 hover:text-white"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
