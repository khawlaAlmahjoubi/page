import { useState } from 'react';
import { Phone, MapPin, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const contactInfo = [
  {
    icon: MapPin,
    title: 'العنوان',
    details: 'شارع المستشفى المركزي، مصراتة، ليبيا',
    subDetails: 'مقابل مستشفى مصراتة المركزي',
  },
  {
    icon: Phone,
    title: 'الهاتف',
    details: '051-1234567',
    subDetails: 'للطوارئ: 091-9876543',
  },
  {
    icon: Mail,
    title: 'البريد الإلكتروني',
    details: 'info@misrata-kidney.ly',
    subDetails: 'emergency@misrata-kidney.ly',
  },
  {
    icon: Clock,
    title: 'ساعات العمل',
    details: 'السبت - الخميس: 8:00 ص - 8:00 م',
    subDetails: 'الجمعة: عطلة | الطوارئ: 24/7',
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-600 to-blue-700 py-20 text-white">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 30% 50%, white 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">اتصل بنا</h1>
          <p className="mt-4 text-lg text-white/80">نحن هنا للإجابة على استفساراتكم وخدمتكم على أكمل وجه</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-6 text-center shadow-md transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-blue-600">
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-700">{item.details}</p>
                <p className="mt-1 text-xs text-gray-500">{item.subDetails}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="rounded-2xl bg-white p-8 shadow-md">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">أرسل لنا رسالة</h2>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle className="mb-4 h-16 w-16 text-green-500" />
                  <h3 className="mb-2 text-xl font-bold text-gray-900">تم إرسال رسالتك بنجاح</h3>
                  <p className="text-gray-600">سنقوم بالتواصل معك في أقرب وقت ممكن. شكراً لتواصلك معنا.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 rounded-xl bg-gray-900 px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-gray-800"
                  >
                    إرسال رسالة أخرى
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700">الاسم الكامل</label>
                    <input
                      type="text"
                      required
                      placeholder="أدخل اسمك الكامل"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm transition-all focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-100"
                    />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-gray-700">رقم الهاتف</label>
                      <input
                        type="tel"
                        required
                        placeholder="رقم هاتفك"
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm transition-all focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-100"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-gray-700">البريد الإلكتروني</label>
                      <input
                        type="email"
                        required
                        placeholder="بريدك الإلكتروني"
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm transition-all focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-100"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700">الموضوع</label>
                    <input
                      type="text"
                      required
                      placeholder="موضوع الرسالة"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm transition-all focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-100"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700">الرسالة</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="اكتب رسالتك هنا..."
                      className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-sm transition-all focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-100"
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-blue-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-teal-200 transition-all hover:scale-[1.02]"
                  >
                    <Send className="h-5 w-5" />
                    إرسال الرسالة
                  </button>
                </form>
              )}
            </div>

            {/* Map Placeholder & Info */}
            <div className="space-y-6">
              <div className="overflow-hidden rounded-2xl shadow-md">
                <div className="flex h-80 items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                  <div className="text-center">
                    <MapPin className="mx-auto mb-3 h-12 w-12 text-gray-400" />
                    <p className="text-lg font-medium text-gray-500">خريطة الموقع</p>
                    <p className="text-sm text-gray-400">شارع المستشفى المركزي، مصراتة</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-8 shadow-md">
                <h3 className="mb-4 text-xl font-bold text-gray-900">معلومات مهمة</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-teal-500" />
                    نرحب بزيارتكم خلال ساعات العمل الرسمية من السبت إلى الخميس
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-teal-500" />
                    يمكنكم الاتصال بنا لحجز المواعيد أو الاستفسارات خلال أوقات الدوام
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-teal-500" />
                    في الحالات الطارئة، يرجى الاتصال على رقم الطوارئ المخصص
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-teal-500" />
                    نوفر مواقف مجانية للسيارات لجميع المرضى والزوار
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">هل ترغب في زيارة المركز؟</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
            احجز موعداً مسبقاً لتجنب الانتظار والحصول على أفضل خدمة.
          </p>
          <Link
            to="/appointment"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-blue-600 px-10 py-5 text-lg font-bold text-white shadow-xl shadow-teal-200 transition-all hover:scale-105"
          >
            احجز موعداً الآن
          </Link>
        </div>
      </section>
    </>
  );
}
