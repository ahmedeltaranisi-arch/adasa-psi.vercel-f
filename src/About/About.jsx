import React from "react";
import { Link } from "react-router-dom";
import {
  FiTag,
  FiUsers,
  FiFileText,
  FiEdit3,
  FiTarget,
  FiZap,
  FiRefreshCw,
  FiLinkedin,
  FiGithub,
  FiCheckCircle,
  FiMail,
} from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

export default function About() {
  // 1. بيانات قسم الإحصائيات
  const statistics = [
    { id: 4, value: "2+ مليون", label: "قارئ شهرياً", icon: FiUsers },
    { id: 3, value: "500+", label: "مقالة منشورة", icon: FiFileText },
    { id: 2, value: "50+", label: "كاتب خبير", icon: FiEdit3 },
    { id: 1, value: "15+", label: "تصنيف", icon: FiTag },
  ];

  // 2. بيانات قسم قيمنا
  const values = [
    {
      id: 1,
      title: "الجودة أولاً",
      description: "محتوى مدروس ومكتوب بخبرة",
      icon: FiTarget,
    },
    {
      id: 2,
      title: "تركيز عملي",
      description: "أمثلة واقعية يمكنك تطبيقها اليوم",
      icon: FiZap,
    },
    {
      id: 3,
      title: "المجتمع",
      description: "تعلم مع آلاف المصورين",
      icon: FiUsers,
    },
    {
      id: 4,
      title: "دائماً محدث",
      description: "أحدث الاتجاهات وأفضل الممارسات",
      icon: FiRefreshCw,
    },
  ];

  // 3. بيانات قسم فريق الكتاب (27 شخصية)
  const teamMembers = [
    {
      id: 1,
      name: "سالم أحمد",
      role: "مصور محترف",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      name: "محمد علي",
      role: "مصور بورتريه",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      name: "إبراهيم حسن",
      role: "مصور طبيعة",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&auto=format&fit=crop&q=80",
    },
    {
      id: 4,
      name: "مريم سعيد",
      role: "مصورة إعلانية",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&auto=format&fit=crop&q=80",
    },
    {
      id: 5,
      name: "أحمد خليل",
      role: "محرر فوتوغرافي",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&auto=format&fit=crop&q=80",
    },
    {
      id: 6,
      name: "سارة يوسف",
      role: "كاتبة محتوى فني",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80",
    },
    {
      id: 7,
      name: "عمر فاروق",
      role: "مصور حوادث وتوثيق",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&auto=format&fit=crop&q=80",
    },
    {
      id: 8,
      name: "نور الدين",
      role: "خبير معالجة ألوان",
      image:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=300&auto=format&fit=crop&q=80",
    },
    {
      id: 9,
      name: "فاطمة الزهراء",
      role: "مصورة حياة برية",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&auto=format&fit=crop&q=80",
    },
    {
      id: 10,
      name: "خالد منصور",
      role: "مصور معماري",
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&auto=format&fit=crop&q=80",
    },
    {
      id: 11,
      name: "ليلى محمود",
      role: "مصورة موضة",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&auto=format&fit=crop&q=80",
    },
    {
      id: 12,
      name: "كريم شريف",
      role: "مصور أطعمة",
      image:
        "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?w=300&auto=format&fit=crop&q=80",
    },
    {
      id: 13,
      name: "هند طارق",
      role: "مصورة مناسبات",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&auto=format&fit=crop&q=80",
    },
    {
      id: 14,
      name: "يوسف الرشيد",
      role: "مصور شارع",
      image:
        "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=300&auto=format&fit=crop&q=80",
    },
    {
      id: 15,
      name: "رانيا كمال",
      role: "كاتبة تقارير مصورة",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80",
    },
    {
      id: 16,
      name: "محمود زكي",
      role: "مصور فلكي",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&auto=format&fit=crop&q=80",
    },
    {
      id: 17,
      name: "هدى عبد الله",
      role: "مصورة صحفية",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=80",
    },
    {
      id: 18,
      name: "طارق زياد",
      role: "صانع محتوى مرئي",
      image:
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300&auto=format&fit=crop&q=80",
    },
    {
      id: 19,
      name: "سلمى فؤاد",
      role: "مراجعة معدات تصوير",
      image:
        "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=300&auto=format&fit=crop&q=80",
    },
    {
      id: 20,
      name: "وليد توفيق",
      role: "مصور رياضي",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&auto=format&fit=crop&q=80",
    },
    {
      id: 21,
      name: "منى مصطفى",
      role: "مصورة تحت الماء",
      image:
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&auto=format&fit=crop&q=80",
    },
    {
      id: 22,
      name: "مازن العلي",
      role: "مصور درون جوي",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80",
    },
    {
      id: 23,
      name: "دنيا إسلام",
      role: "مصورة أطفال ورضع",
      image:
        "https://images.unsplash.com/photo-1548142813-c348350df52b?w=300&auto=format&fit=crop&q=80",
    },
    {
      id: 24,
      name: "شريف نبيل",
      role: "مخرج فني",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&auto=format&fit=crop&q=80",
    },
    {
      id: 25,
      name: "أسماء حلمي",
      role: "مدربة تصوير",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&auto=format&fit=crop&q=80",
    },
    {
      id: 26,
      name: "باسم العطار",
      role: "مصور منتجات",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80",
    },
    {
      id: 27,
      name: "رحمة حسام",
      role: "مصورة سفر ومغامرات",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div className="w-full font-sans text-right" dir="rtl">
      {/* ================= SECTION 1: من نحن والإحصائيات ================= */}
      <section
        className="w-full min-h-screen py-16 px-4 md:px-8 flex flex-col items-center justify-center bg-[#111111]"
        style={{
          backgroundImage: `
            linear-gradient(rgb(34, 34, 34) 1px, transparent 1px),
            linear-gradient(90deg, rgb(34, 34, 34) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      >
        <div className="flex items-center gap-2 border border-[#F85000]/90 rounded-full px-3 py-1 mb-10 bg-[#5f2f08a1] backdrop-blur-sm self-center">
          <span className="w-2 h-2 rounded-full bg-[#F85000] animate-pulse"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#F85000] animate-pulse [animation-delay:500ms]"></span>
          <span className="text-[#F85000] text-lg font-bold">من نحن</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white text-center leading-tight mb-8">
          مهمتنا هي <span className="text-[#FBAD21]">الإعلام والإلهام</span>
        </h1>

        <p className="max-w-3xl text-zinc-400 text-lg md:text-xl text-center leading-relaxed mb-16 px-4">
          مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
          ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة
          المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
        </p>

        <div className="w-[85%] md:w-[70%] max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-6 container mx-auto">
          {statistics.map((stat) => (
            <div
              key={stat.id}
              className="border border-[#a1a1a13a] bg-[#141414] p-6 rounded-3xl flex flex-col items-center justify-center text-center backdrop-blur-sm"
            >
              <stat.icon
                className="w-10 h-10 text-[#F85000] mb-2"
                strokeWidth={1.5}
              />
              <span className="text-xl md:text-3xl font-black text-[#FBAD21] mb-2 tracking-tight">
                {stat.value}
              </span>
              <span className="text-sm text-zinc-500 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECTION 2: قيمنا ================= */}
      <section className="w-full py-24 px-4 md:px-8 bg-[#111111] flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-3 flex items-center justify-center gap-3">
          <span className="w-2 h-6 md:h-8 rounded-full bg-gradient-to-b from-[#FF6F00] to-[#F3AA00]"></span>
          <span>قيمنا</span>
          <span className="w-2 h-6 md:h-8 rounded-full bg-gradient-to-b from-[#FF6F00] to-[#F3AA00]"></span>
        </h2>

        <p className="text-zinc-400 text-base md:text-lg text-center mb-12">
          المبادئ التي توجه كل ما نقوم بإنشائه
        </p>

        <div className="w-[85%] md:w-[70%] max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 container mx-auto">
          {values.map((item) => (
            <div
              key={item.id}
              className="border border-[#a1a1a12a] bg-[#141414]/90 p-8 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-[#F85000]/40 hover:-translate-y-1"
            >
              <item.icon
                className="w-10 h-10 text-[#F85000] mb-5"
                strokeWidth={1.8}
              />
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECTION 3: تعرف على كتابنا ================= */}
      <section className="w-full py-24 px-4 md:px-8 bg-[#0A0A0A] flex flex-col items-center justify-center">
        <div className="flex items-center gap-2 border border-[#F85000]/40 rounded-full px-4 py-1 mb-6 bg-[#2a1608] backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[#F85000] animate-pulse"></span>
          <span className="text-[#F85000] text-sm font-semibold">فريقنا</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-white text-center mb-4">
          تعرف على كتابنا
        </h2>

        <p className="text-zinc-400 text-base md:text-lg text-center mb-14 max-w-2xl px-4">
          فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع
          المجتمع.
        </p>

        <div className="w-[90%] md:w-[80%] max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 container mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group border border-[#a1a1a122] bg-[#141414] p-8 rounded-3xl flex flex-col items-center text-center backdrop-blur-sm transition-all duration-300 hover:border-[#F85000]/40 hover:-translate-y-1 shadow-lg"
            >
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 rounded-full object-cover border-[2px] border-transparent group-hover:border-[#F85000] transition-colors duration-300"
                />
                <div className="absolute bottom-1 right-1 bg-[#F85000] text-white p-0.5 rounded-full flex items-center justify-center border-2 border-[#141414]">
                  <FiCheckCircle className="w-4 h-4 fill-[#F85000] text-white" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-[#F85000] font-medium mb-6">
                {member.role}
              </p>

              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-xl bg-[#222222] border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#F85000] hover:border-[#F85000] transition-colors"
                >
                  <FiLinkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-xl bg-[#222222] border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#F85000] hover:border-[#F85000] transition-colors"
                >
                  <FiGithub className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-xl bg-[#222222] border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#F85000] hover:border-[#F85000] transition-colors"
                >
                  <FaXTwitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECTION 4: لديك أسئلة؟ دعنا نتحدث! (جديد) ================= */}
      <section className="w-full py-20 px-6 bg-gradient-to-r from-[#FF5100] via-[#FF6A00] to-[#FFA000] flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
          لديك أسئلة؟ دعنا نتحدث!
        </h2>

        <p className="text-white/90 text-base md:text-lg max-w-2xl leading-relaxed mb-8 font-medium">
          نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة، أو
          تريد فقط إلقاء التحية، لا تتردد في التواصل.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          {/* زر تواصل معنا */}
          <Link
            to="/contact"
            className="bg-black hover:bg-zinc-900 text-white font-bold py-3.5 px-8 rounded-2xl transition-all duration-300 text-base flex items-center justify-center gap-2.5 shadow-xl hover:-translate-y-1 active:translate-y-0"
          >
            <FiMail className="w-5 h-5" />
            <span>تواصل معنا</span>
          </Link>

          {/* زر تصفح المقالات */}
          <Link
            to="/blog"
            className="border-2 duration-300 border-white/80 text-white hover:bg-white hover:text-black font-bold py-3.5 px-8 rounded-2xl "
          >
            تصفح المقالات
          </Link>
        </div>
      </section>
    </div>
  );
}
