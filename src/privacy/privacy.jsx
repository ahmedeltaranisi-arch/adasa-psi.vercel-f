import React from "react";
import { Link } from "react-router-dom";
import { Lock, ShieldCheck, ChevronLeft, Mail } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div
      dir="rtl"
      className="relative w-full min-h-screen bg-[#0A0A0A] text-white font-sans overflow-hidden pb-12"
    >
      {/* ================= SECTION 1: Hero Header (يحتوي على الشبكة والتوهج) ================= */}
      <section className="relative w-full py-16 px-4 flex flex-col items-center justify-center border-b border-zinc-800/50 overflow-hidden">
        {/* خلفية الشبكة (Grid Pattern) للسكشن الأول فقط */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* التوهج البرتقالي الخلفي */}
        <div className="absolute w-96 h-96 bg-[#FF6000]/15 blur-[120px] rounded-full pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto space-y-4">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-zinc-400 mb-2">
            <Link to="/" className="hover:text-white transition-colors">
              الرئيسية
            </Link>
            <ChevronLeft className="w-3.5 h-3.5 text-zinc-600" />
            <span className="text-[#FF6000]">سياسة الخصوصية</span>
          </nav>

          {/* Lock Icon Box */}
          <div className="w-14 h-14 rounded-2xl bg-[#FF6000]/10 border border-[#FF6000]/30 flex items-center justify-center text-[#FF6000] shadow-lg shadow-[#FF6000]/10 my-2">
            <Lock className="w-6 h-6" />
          </div>

          {/* Title & Date */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
            سياسة الخصوصية
          </h1>
          <p className="text-zinc-500 text-xs sm:text-sm font-medium">
            آخر تحديث: 15 يناير 2026
          </p>
        </div>
      </section>

      {/* ================= SECTION 2: Privacy Content (خلفية داكنة بدون شبكة) ================= */}
      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-10 space-y-8">
        {/* Banner: خصوصيتك تهمنا */}
        <div className="w-full bg-[#120B05] border border-[#FF6000]/30 rounded-2xl p-5 sm:p-6 flex items-start gap-4 shadow-xl">
          <div className="p-2.5 rounded-xl bg-[#FF6000]/10 text-[#FF6000] shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-[#FF6000]">
              خصوصيتك تهمنا
            </h3>
            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
              نحن نلتزم بحماية معلوماتك الشخصية ونضمنها بأمان وشفافية.
            </p>
          </div>
        </div>

        {/* Content Blocks Container */}
        <div className="space-y-8 text-right">
          {/* 1. مقدمة */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#FF6000]" />
              <h2 className="text-lg sm:text-xl font-bold text-white">مقدمة</h2>
            </div>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed pr-4">
              مرحباً بك في موقعنا. نحن نولي احترام خصوصيتك والتأكد من حماية
              بياناتك الشخصية أهمية قصوى. تستعرض سياسة الخصوصية هذه كيفية جمعنا
              ومعالجتنا وحماية معلوماتك عند زيارة موقعنا وتوفير خدماتنا الخاصة
              بك.
            </p>
          </div>

          {/* 2. المعلومات التي نجمعها */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#FF6000]" />
              <h2 className="text-lg sm:text-xl font-bold text-white">
                المعلومات التي نجمعها
              </h2>
            </div>
            <ul className="space-y-2 pr-4 text-xs sm:text-sm text-zinc-400">
              <li className="flex items-start gap-2">
                <span className="text-[#FF6000] font-bold">•</span>
                <span>
                  <strong className="text-white">بيانات الهوية:</strong> تشمل
                  الاسم الأول، اسم الثاني، اسم المستخدم أو معرف مشابه.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF6000] font-bold">•</span>
                <span>
                  <strong className="text-white">بيانات الاتصال:</strong> تشمل
                  عنوان البريد الإلكتروني.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF6000] font-bold">•</span>
                <span>
                  <strong className="text-white">البيانات التقنية:</strong> تشمل
                  عنوان IP، نوع المتصفح، المنطقة الزمنية ونظام التشغيل.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF6000] font-bold">•</span>
                <span>
                  <strong className="text-white">بيانات الاستخدام:</strong> تشمل
                  معلومات حول كيفية استخدامك لموقعنا والخدمات.
                </span>
              </li>
            </ul>
          </div>

          {/* 3. كيف نستخدم معلوماتك */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#FF6000]" />
              <h2 className="text-lg sm:text-xl font-bold text-white">
                كيف نستخدم معلوماتك
              </h2>
            </div>
            <ul className="space-y-2 pr-4 text-xs sm:text-sm text-zinc-400">
              <li className="flex items-center gap-2">
                <span className="text-[#FF6000] font-bold">•</span>
                <span>تقديم خدماتنا والحفاظ عليها.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#FF6000] font-bold">•</span>
                <span>إشعارك بالتغييرات في خدمتنا.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#FF6000] font-bold">•</span>
                <span>تقديم دعم العملاء.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#FF6000] font-bold">•</span>
                <span>جمع التحليلات أو معلومات قيمة لتحسين خدمتنا.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#FF6000] font-bold">•</span>
                <span>لمراقبة استخدام خدمتنا.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#FF6000] font-bold">•</span>
                <span>اكتشاف ومعالجة المشاكل التقنية.</span>
              </li>
            </ul>
          </div>

          {/* 4. ملفات تعريف الارتباط */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#FF6000]" />
              <h2 className="text-lg sm:text-xl font-bold text-white">
                ملفات تعريف الارتباط
              </h2>
            </div>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed pr-4">
              نستخدم ملفات تعريف الارتباط (Cookies) وتقنيات التتبع المماثلة
              لتتبع النشاط على موقعنا. يمكنك توجيه متصفحك لرفض جميع ملفات تعريف
              الارتباط أو الإشارة عند إرسال ملف تعريف الارتباط. ومع ذلك، إذا لم
              تقبل ملفات تعريف الارتباط، فقد لا تتمكن من استخدام بعض أجزاء
              موقعنا.
            </p>
          </div>

          {/* 5. أمان البيانات */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#FF6000]" />
              <h2 className="text-lg sm:text-xl font-bold text-white">
                أمان البيانات
              </h2>
            </div>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed pr-4">
              لقد أقمنا تدابير أمنية مناسبة لمنع فقدان بياناتك الشخصية أو
              استخدامها أو الوصول إليها بشكل غير مصرح به أو تعديلها. ومع ذلك، لا
              يوجد نقل عبر الإنترنت أو وسيلة تخزين إلكترونية أمنة بنسبة 100%.
            </p>
          </div>

          {/* 6. حقوقك */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#FF6000]" />
              <h2 className="text-lg sm:text-xl font-bold text-white">حقوقك</h2>
            </div>
            <ul className="space-y-2 pr-4 text-xs sm:text-sm text-zinc-400">
              <li className="flex items-center gap-2">
                <span className="text-[#FF6000] font-bold">•</span>
                <span>الحق في الوصول إلى بياناتك الشخصية.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#FF6000] font-bold">•</span>
                <span>الحق في تصحيح بياناتك الشخصية.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#FF6000] font-bold">•</span>
                <span>الحق في مسح بياناتك الشخصية.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#FF6000] font-bold">•</span>
                <span>الاعتراض على معالجة بياناتك الشخصية.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#FF6000] font-bold">•</span>
                <span>الحق في تقييد معالجة بياناتك الشخصية.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#FF6000] font-bold">•</span>
                <span>الحق في سحب الموافقة.</span>
              </li>
            </ul>
          </div>

          {/* 7. تواصل معنا */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#FF6000]" />
              <h2 className="text-lg sm:text-xl font-bold text-white">
                تواصل معنا
              </h2>
            </div>
            <p className="text-zinc-400 text-xs sm:text-sm pr-4">
              إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا:
            </p>
            <div className="pr-4 pt-1">
              <a
                href="mailto:ahmedeltaranisi@gmail.com"
                className="inline-flex items-center gap-2 text-[#FF6000] font-bold text-sm hover:underline transition-all group"
              >
                <Mail className="w-4 h-4" />
                <span>ahmedeltaranisi@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Text Divider */}
        <div className="pt-12 border-t border-zinc-900 text-center">
          <p className="text-xs text-zinc-500 font-medium">
            باستخدامك لموقعنا، فإنك توافق على سياسة الخصوصية هذه. نحن نعمل بحب
            وشغف.
          </p>
        </div>
      </main>
    </div>
  );
}
