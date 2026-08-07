import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  FiSearch,
  FiCamera,
  FiImage,
  FiGrid,
  FiSun,
  FiUser,
  FiCpu,
  FiX,
} from "react-icons/fi";

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const getNavLinkClass = ({ isActive }) =>
    `px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
      isActive
        ? "bg-[#F85000] text-white shadow-lg shadow-[#F85000]/20"
        : "bg-[#1A1A1A] text-zinc-400 hover:bg-zinc-800 hover:text-white"
    }`;

  // تنفيذ البحث عند النقر أو الـ Enter
  const handleSearchTrigger = () => {
    if (searchQuery.trim()) {
      // توجيه المستخدم لصفحة جميع المقالات إذا أراد البحث في كل شيء
      console.log("جارٍ البحث عن:", searchQuery);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearchTrigger();
    }
  };

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div
      className="w-full min-h-screen bg-[#0A0A0A] text-white font-sans text-right"
      dir="rtl"
    >
      {/* ================= SECTION 1 ================= */}
      <section className="relative w-full py-16 px-4 flex flex-col items-center justify-center bg-[#0D0D0D] border-b border-zinc-800/50 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* توهج برتقالي */}
        <div className="absolute w-96 h-96 bg-[#F85000]/15 blur-[120px] rounded-full pointer-events-none" />

        {/* محتوى الهيدر */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#F85000]/40 bg-[#F85000]/10 text-[#F85000] text-sm font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#F85000] animate-pulse"></span>
            <span>مدونتنا</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white">
            استكشف <span className="text-[#F85000]">مقالاتنا</span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg">
            اكتشف الدروس والرؤى وأفضل الممارسات للتطوير والتصوير الحديث
          </p>
        </div>
      </section>

      {/* ================= SECTION 2: Navigation Bar & Search ================= */}
      <div className="w-full bg-[#111111] border-b border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* حقل البحث المتفاعل */}
          <div className="relative w-full md:w-80 order-2 md:order-1">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="ابحث في المقالات..."
              className="w-full bg-[#0D0D0D] border border-zinc-800 text-sm text-white placeholder-zinc-500 rounded-xl pr-10 pl-10 py-2.5 focus:outline-none focus:border-[#F85000] transition-colors"
            />

            {/* زر الأيقونة لتنفيذ البحث onClick */}
            <button
              onClick={handleSearchTrigger}
              type="button"
              aria-label="بحث"
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-[#F85000] transition-colors"
            >
              <FiSearch className="w-4 h-4" />
            </button>

            {/* زر مسح نص البحث إذا كان مدخلاً */}
            {searchQuery && (
              <button
                onClick={handleClearSearch}
                type="button"
                aria-label="مسح البحث"
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors"
              >
                <FiX className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* (Navbar) */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none order-1 md:order-2">
            <NavLink end to="" className={getNavLinkClass}>
              <FiGrid className="w-4 h-4" />
              <span>جميع المقالات</span>
            </NavLink>

            <NavLink to="Lighting" className={getNavLinkClass}>
              <FiSun className="w-4 h-4" />
              <span>إضاءة</span>
            </NavLink>

            <NavLink to="Portrait" className={getNavLinkClass}>
              <FiUser className="w-4 h-4" />
              <span>بورتريه</span>
            </NavLink>

            <NavLink to="Naturallandscapes" className={getNavLinkClass}>
              <FiImage className="w-4 h-4" />
              <span>مناظر طبيعية</span>
            </NavLink>

            <NavLink to="Technologiesweb" className={getNavLinkClass}>
              <FiCpu className="w-4 h-4" />
              <span>تقنيات</span>
            </NavLink>

            <NavLink to="equipment" className={getNavLinkClass}>
              <FiCamera className="w-4 h-4" />
              <span>معدات</span>
            </NavLink>
          </div>
        </div>
      </div>

      {/* ================= SECTION 3: Dynamic Content Area ================= */}
      <main className="max-w-7xl mx-auto px-4 pb-16">
        {/* نمرر حالة البحث للأطفال عبر context */}
        <Outlet context={{ searchQuery, setSearchQuery }} />
      </main>
    </div>
  );
}
