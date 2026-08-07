import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Info,
  Newspaper,
  Users,
  Folder,
  PenTool,
  Clock,
  Sun,
  User,
  Mountain,
  Sliders,
  Camera,
  ChevronLeft,
  ArrowUpLeft,
  Mail,
  CheckCircle,
  X,
} from "lucide-react";

export default function HomeLanding() {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [latestPosts, setLatestPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [email, setEmail] = useState("");

  const [notification, setNotification] = useState({
    show: false,
    message: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/posts.json")
      .then((res) => {
        if (!res.ok) throw new Error("فشل في تحميل المقالات");
        return res.json();
      })
      .then((data) => {
        const posts = data.posts || [];
        setFeaturedPosts(posts.filter((post) => post.featured).slice(0, 3));
        setLatestPosts(posts.slice(0, 3));
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
        setLoading(false);
      });
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setNotification({
        show: true,
        message: "تم الاشتراك بنجاح! شكراً لانضمامك إلى مجتمع عدسة.",
      });
      setEmail("");

      setTimeout(() => {
        setNotification({ show: false, message: "" });
      }, 4000);
    }
  };

  const stats = [
    { icon: Newspaper, count: "+50", label: "مقالة" },
    { icon: Users, count: "10+ ألف", label: "قارئ" },
    { icon: Folder, count: "4", label: "تصنيفات" },
    { icon: PenTool, count: "6", label: "كاتب" },
  ];

  const categories = [
    {
      id: "lighting",
      title: "إضاءة",
      count: "3 مقالة",
      icon: Sun,
    },
    {
      id: "portrait",
      title: "بورتريه",
      count: "3 مقالة",
      icon: User,
    },
    {
      id: "nature",
      title: "مناظر طبيعية",
      count: "2 مقالة",
      icon: Mountain,
    },
    {
      id: "tech",
      title: "تقنيات",
      count: "5 مقالة",
      icon: Sliders,
    },
    {
      id: "equipment",
      title: "معدات",
      count: "3 مقالة",
      icon: Camera,
    },
  ];

  return (
    <div
      dir="rtl"
      className="w-full bg-[#0a0a0a] text-white font-sans overflow-x-hidden"
    >
      {/* ================= SECTION 1: HERO SECTION ================= */}
      <section className="relative w-full py-20 px-4 overflow-hidden flex flex-col items-center justify-center border-b border-neutral-900">
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

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#FF6000]/10 blur-[120px] pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-[#171717] border border-neutral-800 text-neutral-300 px-4 py-1.5 rounded-full text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-[#FF6000] inline-block animate-pulse" />
            <span>مرحباً بك في عدسة</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6000] inline-block" />
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
            اكتشف <span className="text-[#FF6000]">فن</span>
            <br />
            التصوير الفوتوغرافي
          </h1>

          <p className="text-neutral-400 text-base sm:text-lg max-w-xl mx-auto font-normal leading-relaxed">
            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/Blog"
              className="flex items-center gap-2 bg-[#FF6000] hover:bg-[#e05400] text-white font-semibold px-6 py-3.5 rounded-full text-sm transition-all duration-300 shadow-lg shadow-[#FF6000]/20 hover:-translate-y-0.5"
            >
              <span>استكشف المقالات</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>

            <Link
              to="/About"
              className="flex items-center gap-2 bg-transparent hover:bg-[#2A180B] text-neutral-300 hover:text-[#f97316] border border-neutral-800 px-6 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
            >
              <Info className="w-4 h-4 text-neutral-400" />
              <span>اعرف المزيد</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-12 max-w-3xl mx-auto">
            {stats.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-[#121212]/80 backdrop-blur-md border border-neutral-800/80 rounded-2xl p-5 flex flex-col items-center justify-center space-y-2 transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon className="w-5 h-5 text-[#FF6000]" />
                  <span className="text-2xl font-bold text-[#FA9B1D] tracking-wide">
                    {item.count}
                  </span>
                  <span className="text-xs text-neutral-400 font-medium">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: FEATURED ARTICLES ================= */}
      <section className="w-full py-16 px-4 border-b border-neutral-900">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-neutral-900 pb-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 bg-[#171717] border border-neutral-800 text-[#FF6000] px-3.5 py-1 rounded-full text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6000]" />
                <span>مميز</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                مقالات مختارة
              </h2>
              <p className="text-neutral-400 text-sm">
                محتوى منتقى ليبدأ رحلة تعلمك
              </p>
            </div>

            <Link
              to="/Blog"
              className="flex items-center gap-2 bg-[#FF6000] hover:bg-[#e05400] text-white px-5 py-2.5 rounded-2xl text-xs font-bold transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-[#FF6000]/10"
            >
              <span>عرض الكل</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>

          {loading ? (
            <div className="w-full py-12 text-center text-neutral-400 text-sm">
              جاري تحميل المقالات المختارة...
            </div>
          ) : (
            <div className="space-y-6">
              {featuredPosts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => navigate(`/Blog/${post.id}`)}
                  className="w-full rounded-3xl overflow-hidden bg-[#121212] border border-neutral-800/80 hover:border-[#FF6000]/50 transition-all duration-300 group cursor-pointer flex flex-col md:flex-row justify-between items-stretch shadow-2xl"
                >
                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-xs">
                        <span className="bg-[#FF6000]/10 text-[#FF6000] border border-[#FF6000]/20 font-bold px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1 text-neutral-400">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#FF6000] transition-colors leading-snug">
                        {post.title}
                      </h3>

                      <p className="text-neutral-400 text-sm leading-relaxed line-clamp-2 max-w-2xl">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-neutral-800/50">
                      <div className="flex items-center gap-3">
                        <img
                          src={post.author?.avatar}
                          alt={post.author?.name}
                          className="w-10 h-10 rounded-full object-cover border border-neutral-700"
                        />
                        <span className="text-sm font-bold text-white">
                          {post.author?.name}
                        </span>
                      </div>

                      <button className="flex items-center gap-1.5 text-xs font-bold text-[#FF6000] group-hover:text-white transition-colors">
                        <span>اقرأ المقال</span>
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                      </button>
                    </div>
                  </div>

                  <div className="relative md:w-1/2 min-h-[240px] md:min-h-full overflow-hidden bg-neutral-900 shrink-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-[#FF6000] text-white text-[10px] font-bold px-2.5 py-1 rounded-md shadow-md">
                      مميز
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ================= SECTION 3: CATEGORIES (حل نهائي وبدون اهتزاز) ================= */}
      <section className="w-full py-20 px-4 border-b border-neutral-900">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#171717] border border-neutral-800 text-[#FF6000] px-4 py-1 rounded-full text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6000]" />
              <span>التصنيفات</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6000]" />
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              استكشف حسب الموضوع
            </h2>

            <p className="text-neutral-400 text-sm sm:text-base">
              اعثر على محتوى مصمم حسب اهتماماتك
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-3 pb-3">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isHovered = hoveredCategory === cat.id;

              return (
                <div
                  key={cat.id}
                  onMouseEnter={() => setHoveredCategory(cat.id)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  onClick={() => navigate(`/Blog/${cat.id}`)}
                  className={`relative h-[150px] p-6 rounded-2xl cursor-pointer flex flex-col justify-between border border-neutral-800/80 bg-[#111111] text-white transition-transform duration-300 ease-out transform-gpu will-change-transform ${
                    isHovered
                      ? "-translate-y-1.5 shadow-xl shadow-[#FF6000]/20 border-[#FF6000]/50"
                      : "hover:border-neutral-700"
                  }`}
                >
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FF8C00] to-[#FF5500] transition-opacity duration-300 pointer-events-none ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  <div className="relative z-10 flex items-center justify-between">
                    <div
                      className={`w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 ${
                        isHovered
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-2 pointer-events-none"
                      }`}
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </div>

                    <div
                      className={`p-2 rounded-xl transition-colors ${
                        isHovered
                          ? "bg-white/20 text-white"
                          : "bg-[#1d1712] text-[#FF6000] border border-[#FF6000]/20"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="relative z-10 text-center space-y-1">
                    <h3 className="text-lg font-bold">{cat.title}</h3>
                    <p
                      className={`text-xs ${
                        isHovered ? "text-white/80" : "text-neutral-500"
                      }`}
                    >
                      {cat.count}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: LATEST POSTS ================= */}
      <section className="w-full py-20 px-4 border-b border-neutral-900">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="flex flex-col items-center text-center space-y-3 relative">
            <div className="inline-flex items-center gap-2 bg-[#171717] border border-neutral-800 text-[#FF6000] px-4 py-1 rounded-full text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6000]" />
              <span>الأحدث</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6000]" />
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              أحدث المقالات
            </h2>

            <p className="text-neutral-400 text-sm">
              محتوى جديد طازج من المطبعة
            </p>

            <Link
              to="/Blog"
              className="sm:absolute sm:left-0 sm:bottom-0 flex items-center gap-1.5 text-[#FF6000] hover:text-[#e05400] text-xs font-bold transition-colors pt-2 sm:pt-0"
            >
              <span>عرض جميع المقالات</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestPosts.map((post, index) => (
              <div
                key={post.id || index}
                onClick={() => navigate(`/Blog/${post.id}`)}
                className="group relative rounded-3xl overflow-hidden bg-[#121212] border border-neutral-800/80 hover:border-[#FF6000]/60 hover:shadow-xl hover:shadow-[#FF6000]/5 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div className="relative w-full h-52 overflow-hidden bg-neutral-900">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full border border-neutral-700">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-[11px] text-neutral-400">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                      <span>•</span>
                      <span>{post.date || "8 يناير 2026"}</span>
                    </div>

                    <h3 className="text-lg font-bold leading-snug text-white group-hover:text-[#FF6000] transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-neutral-400 text-xs leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-neutral-800/60">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={post.author?.avatar}
                        alt={post.author?.name}
                        className="w-8 h-8 rounded-full object-cover border border-neutral-700"
                      />
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-white">
                          {post.author?.name}
                        </span>
                        <span className="text-[10px] text-neutral-500">
                          {post.author?.role || "كاتب"}
                        </span>
                      </div>
                    </div>

                    <button className="w-8 h-8 rounded-full flex items-center justify-center bg-neutral-800/80 text-neutral-400 group-hover:bg-[#FF6000] group-hover:text-white transition-all">
                      <ArrowUpLeft className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: NEWSLETTER ================= */}
      <section className="w-full py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#141414] border border-neutral-800/80 rounded-[32px] p-8 sm:p-14 text-center space-y-8 relative overflow-hidden">
            <div className="w-14 h-14 bg-[#FF6000] rounded-2xl flex items-center justify-center mx-auto text-white shadow-lg shadow-[#FF6000]/20">
              <Mail className="w-7 h-7" />
            </div>

            <div className="space-y-3 max-w-xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                اشترك في نشرتنا الإخبارية
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base font-normal leading-relaxed">
                احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
                الإلكتروني
              </p>
            </div>

            {notification.show && (
              <div className="max-w-md mx-auto bg-[#1f1915] border border-[#FF6000]/40 rounded-2xl p-4 flex items-center justify-between gap-3 text-right shadow-xl animate-fade-in">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FF6000] shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-white">
                    {notification.message}
                  </span>
                </div>
                <button
                  onClick={() => setNotification({ show: false, message: "" })}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}

            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="أدخل بريدك الإلكتروني"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-[#0d0d0d] border border-neutral-800 rounded-2xl px-5 py-3.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FF6000] transition-colors"
                />
                <button
                  type="submit"
                  className="bg-[#FF6000] hover:bg-[#e05400] text-white font-bold px-8 py-3.5 rounded-2xl text-sm transition-all duration-300 shadow-lg shadow-[#FF6000]/20 shrink-0 hover:-translate-y-0.5 active:translate-y-0"
                >
                  اشترك الآن
                </button>
              </div>
            </form>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-2 text-xs text-neutral-400 font-medium">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2 space-x-reverse">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                    alt="user"
                    className="w-7 h-7 rounded-full border-2 border-[#141414] object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                    alt="user"
                    className="w-7 h-7 rounded-full border-2 border-[#141414] object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
                    alt="user"
                    className="w-7 h-7 rounded-full border-2 border-[#141414] object-cover"
                  />
                </div>
                <span>
                  انضم لـ <strong className="text-white">+10,000</strong> مصور
                </span>
              </div>

              <span className="hidden sm:inline text-neutral-700">•</span>
              <span>بدون إزعاج</span>

              <span className="hidden sm:inline text-neutral-700">•</span>
              <span>إلغاء الاشتراك في أي وقت</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
