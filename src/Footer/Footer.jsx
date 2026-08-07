import React from "react";
import { Link } from "react-router-dom";
import {
  FiLinkedin,
  FiGithub,
  FiYoutube,
  FiChevronLeft,
  FiMail,
} from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

export default function FooterAlt() {
  const exploreLinks = [
    { name: "الرئيسية", path: "/" },
    { name: "المدونة", path: "/blog" },
    { name: "من نحن", path: "/about" },
  ];

  const categoryLinks = [
    { name: "إضاءة", path: "/blog/lighting" },
    { name: "بورتريه", path: "/blog/portrait" },
    { name: "مناظر طبيعية", path: "/blog/NaturalLandscapes" },
    { name: "تقنيات", path: "/blog/Technologiesweb" },
    { name: "معدات", path: "/blog/equipment" },
  ];

  return (
    <footer
      className="w-full bg-[#0a0a0a] text-zinc-400 font-sans pt-16 pb-8 border-t border-zinc-900"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section 1: المحتوى الرئيسي للـ Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* العمود الأول: التعريف والشعار */}
          <div className="flex flex-col items-start gap-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#FF6F00] to-[#F3AA00] text-white font-black text-xl rounded-2xl flex items-center justify-center shadow-lg shadow-[#FF6F00]/20">
                ع
              </div>
              <span className="text-2xl font-bold text-white tracking-wide">
                عدسة
              </span>
            </Link>

            <p className="text-sm text-zinc-500 leading-relaxed">
              منصة عربية متخصصة تُثري محتوى التصوير الفوتوغرافي بأحدث التقنيات
              والشروحات الاحترافية.
            </p>

            {/* أيقونات السوشيال ميديا (معكوسة: X -> Github -> Linkedin -> Youtube) */}
            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-2xl bg-[#141414] border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-[#F85000] hover:text-white hover:border-[#F85000] hover:shadow-lg hover:shadow-[#F85000]/30 transition-all duration-300"
              >
                <FaXTwitter className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-2xl bg-[#141414] border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-[#F85000] hover:text-white hover:border-[#F85000] hover:shadow-lg hover:shadow-[#F85000]/30 transition-all duration-300"
              >
                <FiGithub className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-2xl bg-[#141414] border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-[#F85000] hover:text-white hover:border-[#F85000] hover:shadow-lg hover:shadow-[#F85000]/30 transition-all duration-300"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-2xl bg-[#141414] border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-[#F85000] hover:text-white hover:border-[#F85000] hover:shadow-lg hover:shadow-[#F85000]/30 transition-all duration-300"
              >
                <FiYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* العمود الثاني: روابط سريعة */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F85000]"></span>
              استكشف الموقع
            </h3>
            <ul className="space-y-3.5 text-sm">
              {exploreLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="group inline-flex items-center gap-1 transition-all duration-300 hover:text-[#F85000]"
                  >
                    <FiChevronLeft className="w-4 h-4 text-[#F85000] opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out" />
                    <span className="transition-transform duration-300 ease-out group-hover:-translate-x-1">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* العمود الثالث: التصنيفات */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F85000]"></span>
              الأقسام والتصنيفات
            </h3>
            <ul className="space-y-3.5 text-sm">
              {categoryLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="group inline-flex items-center gap-1 transition-all duration-300 hover:text-[#F85000]"
                  >
                    <FiChevronLeft className="w-4 h-4 text-[#F85000] opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out" />
                    <span className="transition-transform duration-300 ease-out group-hover:-translate-x-1">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* العمود الرابع: النشرة البريدية */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F85000]"></span>
              النشرة البريدية
            </h3>
            <p className="text-xs text-zinc-500 mb-4 leading-relaxed">
              احصل على أحدث مقالاتنا الأسبوعية مباشرة في صندوق بريدك.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-3"
            >
              <div className="relative">
                <FiMail className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />
                <input
                  type="email"
                  placeholder="أدخل بريدك الإلكتروني"
                  className="w-full bg-[#141414] border border-zinc-800 rounded-2xl pr-11 pl-4 py-3 text-sm text-zinc-200 focus:outline-none focus:border-[#F85000] transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#F85000]  text-white font-bold py-3 px-6 rounded-2xl transition-transform duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 "
              >
                اشتراك الآن
              </button>
            </form>
          </div>
        </div>

        {/* Section 2: الشريط السفلي */}
        <div className="w-full border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-1">
            <span>  موقع عدسة تم انشاء من خلال أحمد الطرانيسي فى عام 2026  </span>
            <FaHeart className="text-[#F85000] mx-0.5 w-3 h-3 inline" />
          </div>

          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="hover:text-zinc-300 transition-colors"
            >
              سياسة الخصوصية
            </Link>
            <span className="text-zinc-800">•</span>
            <Link to="/terms" className="hover:text-zinc-300 transition-colors">
              شروط الخدمة
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
