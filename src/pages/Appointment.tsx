import { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle, Stethoscope } from 'lucide-react';

const services = [
  'غسيل الكلى الدموي',
  'غسيل الكلى البريتوني',
  'استشارة أمراض الكلى',
  'متابعة ما بعد زراعة الكلى',
  'تحاليل مخبرية',
  'فحص دوري',
  'غير ذلك',
];

const timeSlots = [
  '8:00 - 8:30 ص',
  '8:30 - 9:00 ص',
  '9:00 - 9:30 ص',
  '9:30 - 10:00 ص',
  '10:00 - 10:30 ص',
  '10:30 - 11:00 ص',
  '11:00 - 11:30 ص',
  '11:30 - 12:00 م',
  '12:00 - 12:30 م',
  '12:30 - 1:00 م',
  '1:00 - 1:30 م',
  '1:30 - 2:00 م',
  '2:00 - 2:30 م',
  '2:30 - 3:00 م',
  '3:00 - 3:30 م',
  '3:30 - 4:00 م',
  '4:00 - 4:30 م',
  '4:30 - 5:00 م',
  '5:00 - 5:30 م',
  '5:30 - 6:00 م',
  '6:00 - 6:30 م',
  '6:30 - 7:00 م',
  '7:00 - 7:30 م',
  '7:30 - 8:00 م',
];

export default function Appointment() {
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
          <h1 className="text-4xl font-extrabold md:text-5xl">حجز موعد</h1>
          <p className="mt-4 text-lg text-white/80">احجز موعدك الآن بسهولة وسرعة</p>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4">
          {submitted ? (
            <div className="rounded-2xl bg-white p-12 text-center shadow-xl">
              <CheckCircle className="mx-auto mb-6 h-20 w-20 text-green-500" />
              <h2 className="mb-3 text-3xl font-bold text-gray-900">تم حجز موعدك بنجاح!</h2>
              <p className="mb-2 text-lg text-gray-600">شكراً لك. تم استلام طلب حجز الموعد.</p>
              <p className="mb-8 text-gray-500">سيقوم فريقنا بالتواصل معك خلال 24 ساعة لتأكيد الموعد.</p>
              <div className="rounded-xl bg-teal-50 p-6 text-center">
                <p className="text-sm font-medium text-teal-800">
                  يرجى إحضار بطاقة الهوية والتقارير الطبية السابقة عند الحضور.
                </p>
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 rounded-xl bg-gray-900 px-8 py-3 text-sm font-bold text-white transition-all hover:bg-gray-800"
              >
                حجز موعد آخر
              </button>
            </div>
          ) : (
            <div className="rounded-2xl bg-white p-8 shadow-xl md:p-12">
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-blue-600">
                  <Calendar className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">نموذج حجز موعد</h2>
                  <p className="text-gray-500">يرجى تعبئة النموذج وسيتم التواصل معك لتأكيد الموعد</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Info */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-1.5 flex items-center gap-2 text-sm font-medium text-gray-700">
                      <User className="h-4 w-4 text-teal-500" />
                      الاسم الكامل
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="أدخل اسمك الرباعي"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm transition-all focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-100"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 flex items-center gap-2 text-sm font-medium text-gray-700">
                      <Phone className="h-4 w-4 text-teal-500" />
                      رقم الهاتف
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="رقم هاتفك للتواصل"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm transition-all focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-100"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-1.5 flex items-center gap-2 text-sm font-medium text-gray-700">
                      <Mail className="h-4 w-4 text-teal-500" />
                      البريد الإلكتروني
                    </label>
                    <input
                      type="email"
                      placeholder="بريدك الإلكتروني (اختياري)"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm transition-all focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-100"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 flex items-center gap-2 text-sm font-medium text-gray-700">
                      <User className="h-4 w-4 text-teal-500" />
                      العمر
                    </label>
                    <input
                      type="number"
                      required
                      placeholder="عمر المريض"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm transition-all focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-100"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="mb-1.5 flex items-center gap-2 text-sm font-medium text-gray-700">
                    <Stethoscope className="h-4 w-4 text-teal-500" />
                    نوع الخدمة المطلوبة
                  </label>
                  <select
                    required
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm transition-all focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-100"
                    defaultValue=""
                  >
                    <option value="" disabled>اختر الخدمة المطلوبة</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Date & Time */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-1.5 flex items-center gap-2 text-sm font-medium text-gray-700">
                      <Calendar className="h-4 w-4 text-teal-500" />
                      التاريخ المفضل
                    </label>
                    <input
                      type="date"
                      required
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm transition-all focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-100"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 flex items-center gap-2 text-sm font-medium text-gray-700">
                      <Clock className="h-4 w-4 text-teal-500" />
                      الوقت المفضل
                    </label>
                    <select
                      required
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm transition-all focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-100"
                      defaultValue=""
                    >
                      <option value="" disabled>اختر الوقت المناسب</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="mb-1.5 flex items-center gap-2 text-sm font-medium text-gray-700">
                    <FileText className="h-4 w-4 text-teal-500" />
                    ملاحظات إضافية
                  </label>
                  <textarea
                    rows={3}
                    placeholder="أي معلومات إضافية تود إضافتها (اختياري)"
                    className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-sm transition-all focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-100"
                  />
                </div>

                {/* Terms */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    required
                    id="terms"
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    أوافق على سياسة الخصوصية وأتعهد بتقديم معلومات صحيحة. سيقوم المركز بالتواصل معي لتأكيد الموعد.
                  </label>
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-blue-600 px-8 py-5 text-lg font-bold text-white shadow-xl shadow-teal-200 transition-all hover:scale-[1.02] hover:shadow-2xl"
                >
                  <Calendar className="h-6 w-6" />
                  تأكيد حجز الموعد
                </button>
              </form>

              {/* Info */}
              <div className="mt-8 rounded-xl bg-gray-50 p-6">
                <h4 className="mb-3 font-bold text-gray-900">معلومات مهمة قبل الحضور:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                    يرجى الحضور قبل الموعد بـ 15 دقيقة على الأقل
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                    إحضار بطاقة الهوية الشخصية وجميع التقارير الطبية السابقة
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                    في حالة إلغاء الموعد، يرجى إبلاغ المركز قبل 24 ساعة
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                    للطوارئ والحالات العاجلة، يرجى الاتصال مباشرة بالمركز
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
