import React from "react";
import { Link } from "react-router-dom";
import { Home, BookOpen, Frown } from "lucide-react";

export default function NotFound() {
  return (
    <div
      dir="rtl"
      className="relative w-full min-h-screen bg-[#0a0a0a] text-white font-sans flex flex-col items-center justify-center p-4 overflow-hidden"
    >
      {/* خلفية الشبكة Grid Pattern */}
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

      {/* التوهج البرتقالي */}
      <div className="absolute w-[400px] h-[300px] bg-[#FF6000]/15 blur-[120px] rounded-full pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* المحتوى الرئيسي */}
      <div className="relative z-10 max-w-lg mx-auto text-center space-y-6 flex flex-col items-center">
        {/* رقم 404 */}
        <h1 className="text-7xl sm:text-8xl font-black text-[#FF6000] tracking-wider select-none">
          404
        </h1>

        {/* الأيقونة المركزية مع النقاط المتحركة */}
        <div className="relative my-2">
          {/* نقطة برتقالية علوية تتحرك للأعلى والأسفل */}
          <span className="absolute -top-2 -right-1 w-2.5 h-2.5 rounded-full bg-[#FF6000] animate-[bounce_1s_infinite]" />

          {/* أيقونة الوجه الحزين */}
          <div className="w-16 h-16 rounded-full border border-[#FF6000]/40 bg-[#FF6000]/5 backdrop-blur-md flex items-center justify-center text-[#FF6000]">
            <Frown className="w-8 h-8" />
          </div>

          {/* نقطة ذهبية سفيلية تتحرك بشكل عكسي للأعلى والأسفل */}
          <span className="absolute -bottom-1 -left-2 w-2 h-2 rounded-full bg-amber-400 animate-[bounce_2.5s_infinite_ease-in-out]" />
        </div>

        {/* النصوص */}
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            عفواً! الصفحة غير موجودة
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed max-w-sm mx-auto">
            الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار
            الصحيح.
          </p>
        </div>

        {/* الأزرار */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="flex items-center gap-2 bg-[#FF6000] hover:bg-[#e05400] text-white font-bold px-6 py-3 rounded-full text-sm transition-all duration-300 shadow-lg shadow-[#FF6000]/20 hover:-translate-y-0.5"
          >
            <Home className="w-4 h-4" />
            <span>الذهاب للرئيسية</span>
          </Link>

          <Link
            to="/Blog"
            className="flex items-center gap-2 bg-[#121212] hover:bg-neutral-800 text-white border border-neutral-800 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 hover:-translate-y-0.5"
          >
            <BookOpen className="w-4 h-4 text-neutral-400" />
            <span>تصفح المقالات</span>
          </Link>
        </div>

        {/* الروابط السفلية */}
        <div className="w-full pt-8 border-t border-neutral-900/80 mt-4 space-y-3">
          <p className="text-xs text-neutral-500 font-medium">
            قد تجد هذه مفيدة:
          </p>
          <div className="flex items-center justify-center gap-4 text-xs font-semibold">
            <Link
              to="/Blog"
              className="text-[#FF6000] hover:underline transition-colors"
            >
              المدونة
            </Link>
            <span className="text-neutral-700">•</span>
            <Link
              to="/About"
              className="text-[#FF6000] hover:underline transition-colors"
            >
              من نحن
            </Link>
            <span className="text-neutral-700">•</span>
            <Link
              to="/Privacy"
              className="text-[#FF6000] hover:underline transition-colors"
            >
              الخصوصية
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
