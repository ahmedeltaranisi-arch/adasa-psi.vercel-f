import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Clock, ChevronLeft, LayoutGrid, List, ArrowLeft } from "lucide-react";

export default function LightingArticles() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // حالة التحكم بالعرض: 'grid' أو 'list'
  const [viewMode, setViewMode] = useState("grid");

  async function getProducts() {
    try {
      const { data } = await axios.get("/public/posts.json");
      setProducts(data.posts);
    } catch (error) {
      console.log("خطأ في جلب المقالات:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  // دالة الانتقال لصفحة تفاصيل المقال باستعمال الـ id
  const handleArticleClick = (id) => {
    navigate(`/Blog/${id}`);
  };

  if (loading) {
    return (
      <div
        className="flex justify-center items-center py-20 text-neutral-400 font-sans min-h-[40vh]"
        dir="rtl"
      >
        جاري تحميل مقالات الإضاءة...
      </div>
    );
  }

  // ================= فلترة قسم إضاءة (6 كروت فقط) =================
  const lightingPosts = products
    .filter((post) => post.category === "إضاءة")
    .slice(0, 6);

  return (
    <div dir="rtl" className="w-full pt-4 space-y-8 font-sans">
      {/* ================= الهيدر: العنوان وأزرار التبديل ================= */}
      <div className="flex justify-between items-center border-b border-neutral-800 pb-4">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold text-white">قسم الإضاءة</h2>
          <span className="text-xs bg-[#FF6000]/10 text-[#FF6000] border border-[#FF6000]/20 px-2.5 py-0.5 rounded-full font-medium">
            {lightingPosts.length} مقالات
          </span>
        </div>

        {/* أزرار التبديل */}
        <div className="flex items-center gap-1 bg-[#141414] p-1 rounded-xl border border-neutral-800">
          <button
            onClick={() => setViewMode("grid")}
            aria-label="عرض شبكي"
            className={`p-2 rounded-lg transition-all ${
              viewMode === "grid"
                ? "bg-[#FF6000] text-white"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode("list")}
            aria-label="عرض قائمة"
            className={`p-2 rounded-lg transition-all ${
              viewMode === "list"
                ? "bg-[#FF6000] text-white"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ================= عرض المقالات ================= */}
      {viewMode === "grid" ? (
        /* طريقة العرض الشبكية (Grid View) */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {lightingPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => handleArticleClick(post.id)}
              className="w-full rounded-3xl overflow-hidden bg-[#121212] text-white border border-neutral-800 shadow-xl group transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-neutral-700 flex flex-col justify-between cursor-pointer"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover object-center transition-all duration-500 ease-out group-hover:scale-105 group-hover:brightness-90"
                />
                <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full font-medium border border-white/10">
                  {post.category}
                </span>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-neutral-400 text-xs">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white leading-snug duration-300 ease-in-out group-hover:text-[#FF6000] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-neutral-400 text-sm leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>

                <div>
                  <hr className="border-neutral-800/80 my-4" />
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-3">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-10 h-10 rounded-full object-cover border border-neutral-700"
                      />
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-white">
                          {post.author.name}
                        </span>
                        <span className="text-xs text-neutral-400">
                          {post.author.role}
                        </span>
                      </div>
                    </div>

                    <button
                      aria-label="قراءة المقال"
                      className="w-9 h-9 rounded-full duration-300 ease-in-out bg-[#1e140a] group-hover:bg-[#FF6000] border border-[#3d220d] group-hover:border-[#FF6000] text-[#e8701a] flex items-center justify-center transition-all"
                    >
                      <ChevronLeft className="w-5 h-5 duration-300 ease-in-out group-hover:text-white text-[#e8701a]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* طريقة عرض القائمة الأفقيّة (List View) */
        <div className="flex flex-col gap-6">
          {lightingPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => handleArticleClick(post.id)}
              className="w-full rounded-2xl overflow-hidden bg-[#121212] text-white border border-neutral-800/80 shadow-lg group transition-all duration-300 hover:border-neutral-700 flex flex-col md:flex-row justify-between items-stretch cursor-pointer"
            >
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="bg-[#FF6000]/10 text-[#FF6000] border border-[#FF6000]/20 font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-neutral-400">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                    <span className="text-neutral-600">•</span>
                    <span className="text-neutral-400">{post.date}</span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#FF6000] transition-colors leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-neutral-400 text-sm leading-relaxed line-clamp-2 max-w-3xl">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-3">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-10 h-10 rounded-full object-cover border border-neutral-700"
                    />
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-white">
                        {post.author.name}
                      </span>
                      <span className="text-xs text-neutral-400">
                        {post.author.role}
                      </span>
                    </div>
                  </div>

                  <button className="flex items-center gap-2 text-xs font-bold text-[#FF6000] hover:text-white transition-colors group/btn">
                    <span>اقرأ المقال</span>
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover/btn:-translate-x-1" />
                  </button>
                </div>
              </div>

              <div className="relative md:w-80 h-52 md:h-auto overflow-hidden bg-neutral-900 shrink-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
