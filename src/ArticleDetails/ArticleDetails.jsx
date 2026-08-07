import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import {
  Home,
  ChevronLeft,
  Clock,
  Calendar,
  Camera,
  ListOrdered,
  Tag,
  Mail,
  Share2,
  Link as LinkIcon,
  MessageCircle,
  Image as ImageIcon,
  ArrowLeft,
} from "lucide-react";

export default function ArticleDetails() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getArticleData() {
    try {
      const { data } = await axios.get("/posts.json");
      const posts = data.posts || [];
      const found = posts.find((item) => String(item.id) === String(id));
      setArticle(found || null);

      // ترشيح مقالات ذات صلة
      const related = posts
        .filter((item) => String(item.id) !== String(id))
        .slice(0, 3);
      setRelatedPosts(related);
    } catch (error) {
      console.log("خطأ في جلب بيانات المقال:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getArticleData();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <div
        className="flex justify-center items-center py-32 text-neutral-400 font-sans min-h-[60vh]"
        dir="rtl"
      >
        جاري تحميل تفاصيل المقال...
      </div>
    );
  }

  if (!article) {
    return (
      <div
        className="text-center py-32 text-neutral-300 font-sans space-y-4"
        dir="rtl"
      >
        <h2 className="text-2xl font-bold">المقال غير موجود</h2>
        <Link
          to="/Blog"
          className="inline-block text-[#FF6000] underline font-semibold"
        >
          العودة للمدونة
        </Link>
      </div>
    );
  }

  // أقسام المقال الداخلية لجدول المحتويات
  const sections = [
    { id: "why-golden-hour", title: "لماذا الساعة الذهبية؟", number: 1 },
    { id: "preparation", title: "التحضير المسبق", number: 2 },
    { id: "camera-settings", title: "إعدادات الكاميرا", number: 3 },
    { id: "artistic-composition", title: "التكوين الفني", number: 4 },
    { id: "summary", title: "الخلاصة", number: 5 },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      dir="rtl"
      className="w-full bg-[#0a0a0a] text-white font-sans min-h-screen pb-20"
    >
      {/* ================= 1. HERO BANNER ================= */}
      <div className="relative w-full h-[450px] md:h-[500px] overflow-hidden flex flex-col justify-between p-6 md:p-12">
        <div className="absolute inset-0 z-0">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/60 to-black/30" />
        </div>

        {/* Breadcrumb */}
        <div className="relative z-10 flex items-center justify-end gap-2 text-xs md:text-sm text-neutral-300 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 w-fit mr-auto">
          <Link to="/" className="hover:text-white transition-colors">
            <Home className="w-4 h-4" />
          </Link>
          <ChevronLeft className="w-3.5 h-3.5 text-neutral-500" />
          <Link to="/Blog" className="hover:text-white transition-colors">
            المدونة
          </Link>
          <ChevronLeft className="w-3.5 h-3.5 text-neutral-500" />
          <span className="text-[#FF6000] font-semibold">
            {article.category}
          </span>
        </div>

        {/* Article Title & Meta */}
        <div className="relative z-10 max-w-4xl space-y-5 mb-2">
          <div className="flex items-center gap-3 text-xs md:text-sm">
            <span className="bg-[#FF6000] text-white font-bold px-4 py-1.5 rounded-full">
              {article.category}
            </span>
            <div className="flex items-center gap-1.5 text-neutral-300">
              <Calendar className="w-4 h-4" />
              <span>{article.date}</span>
            </div>
            <span className="text-neutral-500">•</span>
            <div className="flex items-center gap-1.5 text-neutral-300">
              <Clock className="w-4 h-4" />
              <span>{article.readTime} للقراءة</span>
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-white">
            {article.title}
          </h1>

          <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md p-2 px-4 rounded-2xl border border-white/10 w-fit">
            <img
              src={article.author?.avatar}
              alt={article.author?.name}
              className="w-10 h-10 rounded-full object-cover border border-[#FF6000]"
            />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white">
                {article.author?.name}
              </span>
              <span className="text-xs text-neutral-400">
                {article.author?.role || "مصور محترف"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= 2. MAIN BODY AREA ================= */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* RIGHT SIDEBAR (محتويات المقال والكروت التابعة له على اليمين مع Sticky) */}
        <div className="lg:col-span-4 space-y-6 sticky top-6">
          {/* محتويات المقال */}
          <div className="bg-[#121212] border border-neutral-800/80 rounded-3xl p-6 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <h3 className="text-lg font-bold text-white">محتويات المقال</h3>
              <div className="w-9 h-9 rounded-xl bg-[#FF6000]/10 text-[#FF6000] flex items-center justify-center border border-[#FF6000]/20">
                <ListOrdered className="w-5 h-5" />
              </div>
            </div>

            <nav className="space-y-2">
              {sections.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className="w-full flex items-center justify-between text-neutral-400 hover:text-white hover:bg-neutral-900/60 p-2.5 rounded-xl transition-all text-sm group text-right"
                >
                  <span className="group-hover:translate-x-[-4px] transition-transform">
                    {sec.title}
                  </span>
                  <span className="w-6 h-6 rounded-lg bg-[#1a1a1a] text-neutral-500 group-hover:bg-[#FF6000] group-hover:text-white flex items-center justify-center text-xs font-bold transition-colors">
                    {sec.number}
                  </span>
                </button>
              ))}
            </nav>
          </div>

          {/* وقت القراءة وتاريخ النشر */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#121212] border border-neutral-800/80 rounded-2xl p-5 text-center space-y-2">
              <Clock className="w-6 h-6 text-[#FF6000] mx-auto" />
              <div className="text-base font-bold text-white">
                {article.readTime}
              </div>
              <div className="text-xs text-neutral-500">وقت القراءة</div>
            </div>

            <div className="bg-[#121212] border border-neutral-800/80 rounded-2xl p-5 text-center space-y-2">
              <Calendar className="w-6 h-6 text-[#FF6000] mx-auto" />
              <div className="text-base font-bold text-white">
                {article.date}
              </div>
              <div className="text-xs text-neutral-500">تاريخ النشر</div>
            </div>
          </div>

          {/* كارت لا تفوّت جديدنا */}
          <div className="bg-[#171008] border border-[#3d220d] rounded-3xl p-6 text-center space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FF6000]/10 border border-[#FF6000]/30 text-[#FF6000] flex items-center justify-center mx-auto">
              <Mail className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-lg font-bold text-white">لا تفوّت جديدنا</h4>
              <p className="text-xs text-neutral-400">
                اشترك للحصول على أحدث المقالات
              </p>
            </div>
            <button className="w-full bg-[#FF6000] hover:bg-[#e05400] text-white font-bold py-3 rounded-xl transition-colors shadow-lg shadow-[#FF6000]/20 text-sm">
              تصفح المزيد
            </button>
          </div>
        </div>

        {/* LEFT ARTICLE CONTENT (المحتوى الرئيسي للمقال أصبح على اليسار) */}
        <div className="lg:col-span-8 space-y-8">
          {/* اقتباس رئيسي */}
          <div className="bg-[#150f0a] border border-[#3d220d] p-5 md:p-6 rounded-2xl text-center">
            <p className="text-[#FF6000] font-semibold text-base md:text-lg italic">
              "تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح احترافية
              حول الإضاءة والتكوين."
            </p>
          </div>

          <p className="text-neutral-300 text-base leading-relaxed">
            الساعة الذهبية هي أكثر الأوقات سحراً للتصوير الفوتوغرافي. ذلك الوقت
            القصير بعد شروق الشمس وقبل غروبها حيث يكون الضوء ناعماً ودافئاً
            وساحراً.
          </p>

          {/* 1. لماذا الساعة الذهبية */}
          <div id="why-golden-hour" className="space-y-3 pt-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#FF6000] text-white flex items-center justify-center shrink-0">
                <Camera className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-white">
                لماذا الساعة الذهبية؟
              </h2>
            </div>
            <p className="text-neutral-300 text-base leading-relaxed">
              الضوء خلال هذا الوقت له صفات فريدة: ظلال طويلة ناعمة، ألوان دافئة
              ذهبية، وتباين منخفض يجعل كل شيء يبدو أجمل. البورتريهات تكتسب
              توهجاً طبيعياً والمناظر الطبيعية تتحول إلى لوحات فنية.
            </p>
          </div>

          {/* 2. التحضير المسبق */}
          <div id="preparation" className="space-y-3 pt-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#FF6000] text-white flex items-center justify-center shrink-0">
                <Camera className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-white">التحضير المسبق</h2>
            </div>
            <p className="text-neutral-300 text-base leading-relaxed">
              خطط لجلسة التصوير مسبقاً. استخدم تطبيقات مثل PhotoPills لمعرفة وقت
              الساعة الذهبية بدقة في موقعك. وصل قبل 30 دقيقة لاختيار أفضل زاويه.
            </p>
          </div>

          {/* 3. إعدادات الكاميرا */}
          <div id="camera-settings" className="space-y-3 pt-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#FF6000] text-white flex items-center justify-center shrink-0">
                <Camera className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-white">
                إعدادات الكاميرا
              </h2>
            </div>
            <p className="text-neutral-300 text-base leading-relaxed">
              استخدم ISO منخفض للحصول على أقل ضوضاء. فتحة العدسة تعتمد على ما
              تريد: f/1.8-f/2.8 للبورتريهات مع خلفية ضبابية، أو f/8-f/11 للمناظر
              الطبيعية الحادة.
            </p>
          </div>

          {/* 4. التكوين الفني */}
          <div id="artistic-composition" className="space-y-3 pt-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#FF6000] text-white flex items-center justify-center shrink-0">
                <Camera className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-white">التكوين الفني</h2>
            </div>
            <p className="text-neutral-300 text-base leading-relaxed">
              ضع الشمس خلف موضوعك للحصول على تأثير الإضاءة الخلفية الساحر. أو
              استخدمها كمصدر جانبي لإبراز الملمس والعمق.
            </p>
          </div>

          {/* 5. الخلاصة */}
          <div id="summary" className="space-y-3 pt-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#FF6000] text-white flex items-center justify-center shrink-0">
                <Camera className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-white">الخلاصة</h2>
            </div>
            <p className="text-neutral-300 text-base leading-relaxed">
              الساعة الذهبية هي هدية للمصورين. استغلها جيداً وستحصل على صور لا
              تُنسى تتميز بجمالها الطبيعي.
            </p>
          </div>

          {/* الوسوم (Tags) */}
          <div className="bg-[#121212] border border-neutral-800 rounded-3xl p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
              <span className="text-base font-bold text-white">الوسوم</span>
              <div className="w-9 h-9 rounded-xl bg-[#FF6000]/10 border border-[#FF6000]/20 text-[#FF6000] flex items-center justify-center">
                <Tag className="w-5 h-5" />
              </div>
            </div>
            <div className="flex flex-wrap gap-3 pt-1">
              {["#إضاءة", "#الساعة_الذهبية", "#تصوير_خارجي"].map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-[#181818] hover:bg-[#FF6000]/10 hover:border-[#FF6000]/40 hover:text-[#FF6000] text-neutral-300 text-xs px-4 py-2 rounded-xl border border-neutral-800 cursor-pointer transition-all"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* شارك المقال (Share) */}
          <div className="bg-[#121212] border border-neutral-800 rounded-3xl p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
              <span className="text-base font-bold text-white">
                شارك المقال
              </span>
              <div className="w-9 h-9 rounded-xl bg-[#FF6000]/10 border border-[#FF6000]/20 text-[#FF6000] flex items-center justify-center">
                <Share2 className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-center gap-3 pt-1">
              <button
                aria-label="نسخ الرابط"
                className="w-10 h-10 rounded-xl bg-[#181818] border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-700 transition-all"
              >
                <LinkIcon className="w-4 h-4" />
              </button>
              <button
                aria-label="واتساب"
                className="w-10 h-10 rounded-xl bg-[#181818] border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-700 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
              </button>
              <button
                aria-label="لينكدإن"
                className="w-10 h-10 rounded-xl bg-[#181818] border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-700 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </button>
              <button
                aria-label="تويتر / X"
                className="w-10 h-10 rounded-xl bg-[#181818] border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-700 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </button>
            </div>
          </div>

          {/* كاتب المقال السفلي */}
          <div className="bg-[#121212] border border-neutral-800 rounded-3xl p-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
            <div className="space-y-2 text-center md:text-right flex-1">
              <span className="text-xs font-bold text-[#FF6000]">
                كاتب المقال
              </span>
              <h3 className="text-2xl font-extrabold text-white">
                {article.author?.name || "سالم أحمد"}
              </h3>
              <p className="text-xs text-neutral-400 font-medium">
                {article.author?.role || "مصور محترف"}
              </p>
              <p className="text-sm text-neutral-400 leading-relaxed pt-2">
                مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير
                الفوتوغرافي.
              </p>
            </div>

            <img
              src={article.author?.avatar}
              alt={article.author?.name}
              className="w-24 h-24 md:w-28 md:h-28 rounded-2xl object-cover border-2 border-neutral-800 shrink-0"
            />
          </div>
        </div>
      </div>

      {/* ================= 3. RELATED POSTS SECTION (مقالات قد تعجبك) ================= */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-20 pt-10 border-t border-neutral-900 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FF6000]/10 border border-[#FF6000]/30 text-[#FF6000] flex items-center justify-center">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">مقالات قد تعجبك</h3>
              <p className="text-xs text-neutral-400">
                استكشف المزيد من المحتوى المميز
              </p>
            </div>
          </div>

          <Link
            to="/Blog"
            className="flex items-center gap-2 text-sm text-[#FF6000] hover:text-[#e05400] font-bold transition-colors"
          >
            <span>عرض الكل</span>
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedPosts.map((post) => (
            <Link
              key={post.id}
              to={`/Blog/${post.id}`}
              className="group bg-[#121212] border border-neutral-800/80 hover:border-[#FF6000]/40 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 right-4 bg-[#FF6000] text-white text-xs font-bold px-3 py-1 rounded-full">
                  {post.category || "إضاءة"}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <h4 className="text-base font-bold text-white group-hover:text-[#FF6000] transition-colors leading-snug line-clamp-2">
                  {post.title}
                </h4>

                <div className="flex items-center justify-between pt-3 border-t border-neutral-800/60 text-xs text-neutral-400">
                  <div className="flex items-center gap-2">
                    {post.author?.avatar && (
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-5 h-5 rounded-full object-cover"
                      />
                    )}
                    <span>{post.author?.name}</span>
                  </div>
                  <span>{post.readTime} للقراءة</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
