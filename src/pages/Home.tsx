import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Activity, Heart, Users, Award, Stethoscope, Clock, Shield, Microscope } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-600 via-teal-700 to-blue-700 text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, white 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-teal-400/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Text Content */}
            <div className="animate-fade-in-up">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm backdrop-blur">
                <Activity className="h-4 w-4" />
                <span>مركز طبي متخصص ومعتمد</span>
              </div>
              <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
                مركز علاج و
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">غسيل الكلى</span>
                <br />
                مصراتة
              </h1>
              <p className="mb-8 max-w-lg text-lg leading-relaxed text-white/80">
                نقدم رعاية طبية متكاملة لمرضى الكلى بأحدث التقنيات العالمية وأفضل الكوادر الطبية المتخصصة.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/appointment"
                  className="rounded-xl bg-white px-8 py-4 text-base font-bold text-teal-700 shadow-xl shadow-black/20 transition-all duration-300 hover:bg-gray-100 hover:scale-105"
                >
                  احجز موعداً الآن
                </Link>
                <Link
                  to="/about"
                  className="flex items-center gap-2 rounded-xl border-2 border-white/40 px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-white/10"
                >
                  تعرف علينا
                  <ArrowLeft className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Hero Image / Illustration */}
            <div className="animate-slide-in-left hidden justify-center lg:flex">
              <div className="relative">
                <div className="flex h-80 w-80 items-center justify-center rounded-full bg-white/10 backdrop-blur md:h-96 md:w-96">
                  <div className="text-center">
                    <Activity className="mx-auto h-24 w-24 text-white/60" />
                    <div className="mt-4 space-y-2">
                      <div className="mx-auto h-3 w-32 rounded-full bg-white/30" />
                      <div className="mx-auto h-3 w-24 rounded-full bg-white/20" />
                      <div className="mx-auto h-3 w-40 rounded-full bg-white/25" />
                    </div>
                  </div>
                </div>
                {/* Floating cards */}
                <div className="animate-float absolute -top-6 -right-6 rounded-2xl bg-white p-4 shadow-xl">
                  <Heart className="h-8 w-8 text-red-500" />
                </div>
                <div className="animate-float animation-delay-200 absolute -bottom-4 -left-4 rounded-2xl bg-white p-4 shadow-xl">
                  <Shield className="h-8 w-8 text-blue-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="relative mx-auto max-w-7xl px-4 pb-12">
          <div className="grid grid-cols-2 gap-4 rounded-2xl bg-white/10 p-6 backdrop-blur md:grid-cols-4">
            {[
              { icon: Users, number: '5000+', label: 'مريض سنوياً' },
              { icon: Award, number: '15+', label: 'سنة خبرة' },
              { icon: Stethoscope, number: '20+', label: 'طبيب متخصص' },
              { icon: Clock, number: '24/7', label: 'خدمة طوارئ' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="mx-auto mb-2 h-6 w-6 text-teal-300" />
                <div className="text-2xl font-bold">{stat.number}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="animate-slide-in-right">
              <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-1.5 text-sm font-medium text-teal-700">
                <Activity className="h-4 w-4" />
                من نحن
              </div>
              <h2 className="mt-4 mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                مركز متخصص في رعاية
                <span className="text-gradient"> صحة الكلى</span>
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-gray-600">
                تأسس مركز علاج وغسيل الكلى مصراتة ليكون منارة للرعاية الطبية المتخصصة في أمراض الكلى. نقدم خدماتنا وفق أعلى المعايير العالمية وبأحدث الأجهزة الطبية.
              </p>
              <ul className="space-y-3">
                {[
                  'فريق طبي متخصص من استشاريين وأخصائيين',
                  'أحدث أجهزة غسيل الكلى بتقنيات متطورة',
                  'بيئة علاجية مريحة وآمنة للمرضى',
                  'نظام متابعة دوري شامل لجميع الحالات',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="h-5 w-5 shrink-0 text-teal-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-gray-800"
              >
                اقرأ المزيد عن المركز
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </div>

            <div className="animate-slide-in-left grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 p-6 text-white shadow-xl">
                  <Microscope className="mb-3 h-10 w-10" />
                  <h3 className="text-lg font-bold">تقنيات حديثة</h3>
                  <p className="mt-1 text-sm text-white/80">أحدث أجهزة غسيل الكلى</p>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-teal-50 p-6 shadow-xl">
                  <Heart className="mb-3 h-10 w-10 text-red-500" />
                  <h3 className="text-lg font-bold text-gray-900">رعاية شاملة</h3>
                  <p className="mt-1 text-sm text-gray-600">متابعة دورية متكاملة</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-teal-50 p-6 shadow-xl">
                  <Users className="mb-3 h-10 w-10 text-blue-500" />
                  <h3 className="text-lg font-bold text-gray-900">كادر متميز</h3>
                  <p className="mt-1 text-sm text-gray-600">نخبة من الأطباء</p>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 p-6 text-white shadow-xl">
                  <Shield className="mb-3 h-10 w-10" />
                  <h3 className="text-lg font-bold">أمان تام</h3>
                  <p className="mt-1 text-sm text-white/80">تعقيم ومعايير سلامة</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-1.5 text-sm font-medium text-teal-700">
              <Activity className="h-4 w-4" />
              خدماتنا
            </div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              خدماتنا <span className="text-gradient">الطبية</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">نقدم مجموعة متكاملة من الخدمات الطبية المتخصصة في أمراض الكلى</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'غسيل الكلى الدموي',
                desc: 'جلسات غسيل كلى باستخدام أحدث أجهزة الديال الدموي مع أنظمة مراقبة متطورة',
                icon: Activity,
                color: 'from-teal-500 to-teal-600',
              },
              {
                title: 'غسيل الكلى البريتوني',
                desc: 'خدمة غسيل الكلى البريتوني للمرضى المؤهلين مع تدريب كامل للمريض وأسرته',
                icon: Heart,
                color: 'from-blue-500 to-blue-600',
              },
              {
                title: 'استشارات طبية',
                desc: 'استشارات متخصصة في أمراض الكلى وضغط الدم مع خطط علاجية مخصصة لكل مريض',
                icon: Stethoscope,
                color: 'from-emerald-500 to-emerald-600',
              },
              {
                title: 'التحاليل المخبرية',
                desc: 'مختبر متكامل لإجراء جميع التحاليل المتعلقة بأمراض الكلى بدقة وسرعة عالية',
                icon: Microscope,
                color: 'from-violet-500 to-violet-600',
              },
              {
                title: 'متابعة ما بعد الزراعة',
                desc: 'برنامج متابعة شامل لمرضى زراعة الكلى يشمل الفحوصات الدورية والعلاجات المناعية',
                icon: Shield,
                color: 'from-orange-500 to-orange-600',
              },
              {
                title: 'طوارئ 24/7',
                desc: 'خدمة طوارئ على مدار الساعة للحالات الطارئة لمرضى الكلى مع فريق استجابة سريع',
                icon: Clock,
                color: 'from-red-500 to-red-600',
              },
            ].map((svc) => (
              <div
                key={svc.title}
                className="group rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${svc.color} shadow-lg`}>
                  <svc.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{svc.title}</h3>
                <p className="text-gray-600 leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-8 py-4 text-base font-bold text-white transition-all hover:bg-gray-800 hover:scale-105"
            >
              جميع الخدمات
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-teal-600 to-blue-700 py-20 text-white">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, white 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }} />
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            هل تحتاج إلى استشارة طبية؟
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
            فريقنا الطبي على أتم الاستعداد لخدمتك. احجز موعدك الآن واستشر أطباءنا المتخصصين.
          </p>
          <Link
            to="/appointment"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-10 py-5 text-lg font-bold text-teal-700 shadow-2xl transition-all duration-300 hover:bg-gray-100 hover:scale-105"
          >
            احجز موعداً الآن
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
