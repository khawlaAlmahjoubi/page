import { Activity, Heart, Stethoscope, Microscope, Shield, Clock, Droplets, FileText, Pill, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const mainServices = [
  {
    icon: Activity,
    title: 'غسيل الكلى الدموي',
    desc: 'نقدم جلسات غسيل الكلى الدموي باستخدام أحدث أجهزة الديال الدموي المزودة بأنظمة مراقبة ذكية تضمن أعلى مستويات الأمان والفعالية. نوفر بيئة مريحة لكل مريض مع شاشات ترفيه فردية.',
    features: ['أجهزة حديثة بمعايير عالمية', 'مراقبة مستمرة للعلامات الحيوية', 'جلسات مريحة في بيئة هادئة', 'فلاتر عالية الكفاءة'],
    color: 'from-teal-500 to-teal-600',
    bgColor: 'bg-teal-50',
    textColor: 'text-teal-700',
  },
  {
    icon: Heart,
    title: 'غسيل الكلى البريتوني',
    desc: 'برنامج متكامل للغسيل البريتوني يشمل تقييم المريض وتدريبه وأسرته على إجراء الغسيل في المنزل بأمان، مع متابعة دورية من فريقنا الطبي المتخصص.',
    features: ['تدريب شامل للمريض والأسرة', 'متابعة دورية منتظمة', 'دعم فني على مدار الساعة', 'توفير المحاليل والمستلزمات'],
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-700',
  },
  {
    icon: Stethoscope,
    title: 'استشارات أمراض الكلى',
    desc: 'نقدم استشارات طبية متخصصة في أمراض الكلى وضغط الدم، مع تقييم شامل للحالة ووضع خطة علاجية فردية لكل مريض تشمل النظام الغذائي والأدوية المناسبة.',
    features: ['تقييم شامل لوظائف الكلى', 'خطة علاجية مخصصة', 'متابعة ضغط الدم', 'نصائح غذائية متخصصة'],
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'bg-emerald-50',
    textColor: 'text-emerald-700',
  },
  {
    icon: Microscope,
    title: 'التحاليل المخبرية',
    desc: 'مختبر متكامل ومجهز بأحدث أجهزة التحليل لإجراء جميع الفحوصات المتعلقة بأمراض الكلى والوظائف الحيوية بدقة عالية وسرعة في النتائج.',
    features: ['تحاليل وظائف الكلى', 'تحاليل الدم الشاملة', 'فحص البول', 'نتائج دقيقة وسريعة'],
    color: 'from-violet-500 to-violet-600',
    bgColor: 'bg-violet-50',
    textColor: 'text-violet-700',
  },
  {
    icon: Shield,
    title: 'متابعة زراعة الكلى',
    desc: 'برنامج متابعة متكامل لمرضى ما بعد زراعة الكلى يشمل الفحوصات الدورية المنتظمة، ومراقبة مستويات الأدوية المثبطة للمناعة، والكشف المبكر عن أي مضاعفات.',
    features: ['فحوصات دورية شاملة', 'مراقبة الأدوية المثبطة', 'كشف مبكر عن الرفض', 'دعم نفسي واجتماعي'],
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    textColor: 'text-orange-700',
  },
  {
    icon: Clock,
    title: 'خدمة الطوارئ',
    desc: 'فريق طبي متخصص متاح على مدار الساعة للتعامل مع الحالات الطارئة لمرضى الكلى، مع إمكانية التواصل المباشر مع الأطباء المناوبين في أي وقت.',
    features: ['استجابة سريعة 24/7', 'فريق طبي متخصص', 'تجهيزات طوارئ كاملة', 'تواصل مباشر مع الأطباء'],
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
    textColor: 'text-red-700',
  },
];

const additionalServices = [
  { icon: Droplets, title: 'قياس وتخطيط وظائف الكلى', desc: 'فحوصات متطورة لتقييم وظائف الكلى بدقة' },
  { icon: FileText, title: 'التقارير الطبية', desc: 'إصدار تقارير طبية شاملة ومعتمدة للمرضى' },
  { icon: Pill, title: 'صيدلية متخصصة', desc: 'توفير الأدوية المتعلقة بأمراض الكلى وضغط الدم' },
  { icon: Truck, title: 'خدمة النقل', desc: 'خدمة نقل المرضى من وإلى المركز للحالات الخاصة' },
];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-600 to-blue-700 py-20 text-white">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 30% 50%, white 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">خدماتنا الطبية</h1>
          <p className="mt-4 text-lg text-white/80">مجموعة متكاملة من الخدمات الطبية المتخصصة في رعاية مرضى الكلى</p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="space-y-12">
            {mainServices.map((svc, idx) => (
              <div
                key={svc.title}
                className={`grid gap-8 rounded-2xl p-8 md:p-12 lg:grid-cols-2 ${svc.bgColor} ${
                  idx % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}
              >
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${svc.color} shadow-lg`}>
                    <svc.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className={`mb-4 text-2xl font-bold ${svc.textColor}`}>{svc.title}</h3>
                  <p className="mb-6 text-lg leading-relaxed text-gray-700">{svc.desc}</p>
                  <ul className="space-y-3">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-gray-700">
                        <span className={`h-2 w-2 rounded-full bg-gradient-to-r ${svc.color}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`flex items-center justify-center ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className={`flex h-64 w-64 items-center justify-center rounded-full bg-white/60 shadow-lg md:h-80 md:w-80`}>
                    <svc.icon className={`h-24 w-24 bg-gradient-to-r ${svc.color} bg-clip-text text-transparent`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900">خدمات <span className="text-gradient">إضافية</span></h2>
            <p className="mt-4 text-lg text-gray-600">نقدم أيضاً مجموعة من الخدمات المساندة لضمان راحة مرضانا</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {additionalServices.map((svc) => (
              <div key={svc.title} className="rounded-2xl bg-white p-6 text-center shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-blue-600">
                  <svc.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">{svc.title}</h3>
                <p className="text-sm text-gray-600">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">هل تحتاج إلى إحدى خدماتنا؟</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
            احجز موعداً الآن وسيقوم فريقنا بتقديم الاستشارة المناسبة لحالتك.
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
