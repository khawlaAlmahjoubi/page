import { CheckCircle, Award, Eye, Target, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-600 to-blue-700 py-20 text-white">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 30% 50%, white 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">عن المركز</h1>
          <p className="mt-4 text-lg text-white/80">تعرف على مركزنا ورسالتنا في خدمة مرضى الكلى</p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="animate-slide-in-right">
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                مركز <span className="text-gradient">علاج وغسيل الكلى</span> مصراتة
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-gray-600">
                <p>
                  تأسس مركز علاج وغسيل الكلى مصراتة ليكون صرحاً طبياً متخصصاً في تقديم الرعاية الطبية المتكاملة لمرضى الكلى في مدينة مصراتة والمناطق المجاورة.
                </p>
                <p>
                  نفتخر بتقديم خدماتنا وفق أعلى المعايير الطبية العالمية، باستخدام أحدث الأجهزة والتقنيات في مجال غسيل الكلى وعلاج أمراضها، وبإشراف نخبة من الاستشاريين والأخصائيين ذوي الخبرة العالية.
                </p>
                <p>
                  نسعى جاهدين لتوفير بيئة علاجية آمنة ومريحة لمرضانا، مع التركيز على التوعية الصحية والوقاية من أمراض الكلى، وتقديم الدعم النفسي والاجتماعي للمرضى وأسرهم.
                </p>
              </div>
            </div>

            <div className="animate-slide-in-left space-y-6">
              {[
                { icon: Eye, title: 'رؤيتنا', desc: 'أن نكون المركز الرائد في تشخيص وعلاج أمراض الكلى على مستوى ليبيا، ونموذجاً يحتذى به في جودة الرعاية الطبية.' },
                { icon: Target, title: 'رسالتنا', desc: 'تقديم خدمات طبية متكاملة ومتميزة لمرضى الكلى وفق أعلى المعايير العالمية، مع الالتزام بالتطوير المستمر والابتكار.' },
                { icon: Heart, title: 'قيمنا', desc: 'الإنسانية في التعامل، التميز في الأداء، الأمانة في الخدمة، والالتزام بالتطوير المستمر لخدمة مرضانا.' },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-blue-600">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                      <p className="mt-1 text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              لماذا <span className="text-gradient">تختارنا؟</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">أسباب تجعل مركزنا الخيار الأمثل لرعاية مرضى الكلى</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'أحدث الأجهزة',
                desc: 'نستخدم أحدث تقنيات غسيل الكلى مع أنظمة مراقبة متطورة لضمان سلامة المرضى.',
              },
              {
                title: 'كادر طبي متميز',
                desc: 'فريق من الاستشاريين والأخصائيين ذوي الخبرة والكفاءة العالية في أمراض الكلى.',
              },
              {
                title: 'بيئة مريحة',
                desc: 'نوفر بيئة علاجية مريحة وآمنة مع اهتمام خاص براحة المرضى أثناء جلسات الغسيل.',
              },
              {
                title: 'متابعة شاملة',
                desc: 'برنامج متابعة دوري شامل لكل مريض يشمل الفحوصات والاستشارات المنتظمة.',
              },
              {
                title: 'خدمة 24/7',
                desc: 'خدمة طوارئ على مدار الساعة للحالات الطارئة مع فريق استجابة سريع.',
              },
              {
                title: 'توعية صحية',
                desc: 'برامج توعوية للمرضى وأسرهم حول أمراض الكلى وطرق الوقاية والعلاج.',
              },
            ].map((item) => (
              <div key={item.title} className="group rounded-2xl bg-white p-8 shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
                <CheckCircle className="mb-4 h-8 w-8 text-teal-500" />
                <h3 className="mb-3 text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <Award className="mx-auto mb-6 h-16 w-16 text-teal-500" />
          <h2 className="mb-4 text-3xl font-bold text-gray-900">نحن هنا لخدمتك</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
            لا تتردد في التواصل معنا أو حجز موعد لاستشارة أطبائنا المتخصصين.
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
