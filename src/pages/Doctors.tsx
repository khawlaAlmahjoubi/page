import { Stethoscope, Award, GraduationCap, Clock, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const doctors = [
  {
    name: 'د. أحمد محمد المقريف',
    title: 'استشاري أمراض الكلى والغسيل الكلوي',
    specialty: 'أمراض الكلى',
    education: 'دكتوراه في أمراض الكلى - جامعة طرابلس',
    experience: '18 سنة',
    description: 'استشاري أمراض الكلى والغسيل الكلوي بخبرة تزيد عن 18 عاماً. متخصص في علاج أمراض الكلى المزمنة والحادة وإدارة حالات الغسيل الكلوي.',
  },
  {
    name: 'د. فاطمة علي الزروق',
    title: 'استشارية أمراض الكلى',
    specialty: 'أمراض الكلى وضغط الدم',
    education: 'البورد الليبي في أمراض الكلى',
    experience: '15 سنة',
    description: 'استشارية متخصصة في أمراض الكلى وارتفاع ضغط الدم. لها خبرة واسعة في متابعة مرضى زراعة الكلى والغسيل البريتوني.',
  },
  {
    name: 'د. عمر خالد الشويهدي',
    title: 'أخصائي أمراض الكلى',
    specialty: 'الغسيل الكلوي',
    education: 'ماجستير أمراض الكلى - جامعة بنغازي',
    experience: '12 سنة',
    description: 'أخصائي متمرس في إدارة جلسات الغسيل الكلوي ومتابعة المرضى. متخصص في تركيب وإدارة القساطر الوريدية للغسيل.',
  },
  {
    name: 'د. سارة إبراهيم الأطرش',
    title: 'أخصائية أمراض الكلى',
    specialty: 'أمراض الكلى للأطفال',
    education: 'البورد العربي في طب الأطفال وأمراض الكلى',
    experience: '10 سنوات',
    description: 'أخصائية أمراض كلى الأطفال، متخصصة في تشخيص وعلاج أمراض الكلى لدى الأطفال واليافعين مع خبرة في الغسيل الكلوي للأطفال.',
  },
  {
    name: 'د. محمد علي الدوادي',
    title: 'استشاري أمراض الباطنة والكلى',
    specialty: 'أمراض الباطنة والكلى',
    education: 'زمالة الكلية الملكية البريطانية',
    experience: '16 سنة',
    description: 'استشاري أمراض باطنة وكلى بخبرة دولية. متخصص في تشخيص وعلاج أمراض الكلى المعقدة والأمراض الجهازية المؤثرة على الكلى.',
  },
  {
    name: 'د. نورة حسن الفيتوري',
    title: 'أخصائية تغذية علاجية',
    specialty: 'تغذية مرضى الكلى',
    education: 'ماجستير التغذية العلاجية - جامعة مصراتة',
    experience: '8 سنوات',
    description: 'أخصائية تغذية علاجية متخصصة في وضع الخطط الغذائية المناسبة لمرضى الكلى في مختلف مراحل المرض، مع خبرة في تثقيف المرضى.',
  },
];

export default function Doctors() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-600 to-blue-700 py-20 text-white">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 30% 50%, white 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">فريقنا الطبي</h1>
          <p className="mt-4 text-lg text-white/80">نخبة من الأطباء المتخصصين في رعاية مرضى الكلى</p>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              أطباؤنا <span className="text-gradient">المتخصصون</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">فريق طبي متكامل يجمع بين الخبرة والكفاءة والتخصص</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
             {doctors.map((doc) => (
              <div
                key={doc.name}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                {/* Gradient top bar */}
                <div className="h-2 bg-gradient-to-r from-teal-500 to-blue-600" />

                <div className="p-8">
                  {/* Doctor avatar placeholder */}
                  <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-teal-100 to-blue-100">
                    <Stethoscope className="h-12 w-12 text-teal-600" />
                  </div>

                  <h3 className="mb-1 text-xl font-bold text-gray-900">{doc.name}</h3>
                  <p className="mb-4 text-sm font-medium text-teal-600">{doc.title}</p>

                  <p className="mb-6 text-sm leading-relaxed text-gray-600">{doc.description}</p>

                  <div className="space-y-2 border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Award className="h-4 w-4 shrink-0 text-teal-500" />
                      <span>التخصص: {doc.specialty}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <GraduationCap className="h-4 w-4 shrink-0 text-teal-500" />
                      <span>{doc.education}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="h-4 w-4 shrink-0 text-teal-500" />
                      <span>الخبرة: {doc.experience}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <Phone className="mx-auto mb-6 h-16 w-16 text-teal-500" />
          <h2 className="mb-4 text-3xl font-bold text-gray-900">استشر أطباءنا المتخصصين</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
            احجز موعداً مع أحد أطبائنا المتخصصين واحصل على الاستشارة الطبية المناسبة لحالتك.
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
