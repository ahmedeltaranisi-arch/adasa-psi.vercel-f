import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import heroImg from "../assets/hero.png";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className="sticky top-0 z-50 w-full bg-[#161616]/90 backdrop-blur-md text-white px-4 md:px-8 py-3 shadow-md border-b border-[#a1a1a11a]"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* 1. اليمين: الشعار واسم الموقع (يمين دائماً) */}
        <div className="flex gap-3 items-center">
          <div className="flex items-center">
            <img
              src={heroImg}
              className="h-8 md:h-10 w-auto object-contain"
              alt="Hero Logo"
            />
          </div>
          <div className="flex flex-col items-start">
            <p className="text-[18px] md:text-[20px] font-bold leading-tight">
              عدسة
            </p>
            <span className="text-[#ff8904cc] text-[10px] md:text-[12px]">
              عالم التصوير الفوتوغرافى
            </span>
          </div>
        </div>

        {/* 2. الوسط: روابط التنقل (Desktop) */}
        <div className="hidden md:flex border border-[#a1a1a13a] p-1 rounded-2xl gap-1 bg-black/30">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-4 py-1.5 rounded-3xl text-sm transition-colors ${
                isActive
                  ? "bg-[#F85000] text-white font-semibold"
                  : "text-[#ffffff80] hover:text-white"
              }`
            }
          >
            الرئيسية
          </NavLink>

          <NavLink
            to="/Blog"
            className={({ isActive }) =>
              `px-4 py-1.5 rounded-3xl text-sm transition-colors ${
                isActive
                  ? "bg-[#F85000] text-white font-semibold"
                  : "text-[#ffffff80] hover:text-white"
              }`
            }
          >
            المدونة
          </NavLink>

          <NavLink
            to="/About"
            className={({ isActive }) =>
              `px-4 py-1.5 rounded-3xl text-sm transition-colors ${
                isActive
                  ? "bg-[#F85000] text-white font-semibold"
                  : "text-[#ffffff80] hover:text-white"
              }`
            }
          >
            من نحن
          </NavLink>
        </div>

        {/* 3. اليسار: زر ابدأ القراءة والبحث (يسار دائماً) */}
        <div className="hidden md:flex items-center gap-2">
          <button
            aria-label="بحث"
            className="p-2 flex items-center justify-center"
          >
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-[#a1a1a1] text-lg border border-transparent hover:text-[#E05400] hover:border-[#a1a1a12c] transition-colors duration-300 p-2.5 rounded-xl cursor-pointer"
            />
          </button>

          <Link
            to="/Blog"
            className="inline-block bg-[#EE5F0F] py-2.5 px-5 rounded-full font-semibold text-[15px] font-tajawal transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg hover:bg-[#e05400] active:translate-y-0"
          >
            ابدأ القراءة
          </Link>
        </div>

        {/* أزرار التحكم بالشاشات الصغيرة (Mobile - يسار الناف بار) */}
        <div className="flex items-center md:hidden gap-3">
          <button
            aria-label="بحث"
            className="text-[#a1a1a1] hover:text-[#E05400] text-lg p-1"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>

          <button
            onClick={toggleMenu}
            className="text-2xl text-[#a1a1a1] hover:text-white p-1 focus:outline-none"
            aria-label="القائمة"
          >
            <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
          </button>
        </div>
      </div>

      {/* قائمة الموبايل (Dropdown Menu) */}
      {isOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-neutral-800 space-y-3 pb-2 flex flex-col text-right">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `px-4 py-2 rounded-xl text-sm ${
                isActive
                  ? "bg-[#F85000] text-white font-bold"
                  : "text-neutral-300 hover:bg-neutral-800"
              }`
            }
          >
            الرئيسية
          </NavLink>

          <NavLink
            to="/Blog"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `px-4 py-2 rounded-xl text-sm ${
                isActive
                  ? "bg-[#F85000] text-white font-bold"
                  : "text-neutral-300 hover:bg-neutral-800"
              }`
            }
          >
            المدونة
          </NavLink>

          <NavLink
            to="/About"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `px-4 py-2 rounded-xl text-sm ${
                isActive
                  ? "bg-[#F85000] text-white font-bold"
                  : "text-neutral-300 hover:bg-neutral-800"
              }`
            }
          >
            من نحن
          </NavLink>

          <Link
            to="/Blog"
            onClick={() => setIsOpen(false)}
            className="block text-center bg-[#EE5F0F] py-2.5 rounded-xl font-semibold text-sm hover:bg-[#e05400] transition-colors mt-2"
          >
            ابدأ القراءة
          </Link>
        </div>
      )}
    </nav>
  );
}
