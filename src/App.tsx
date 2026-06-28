import { useState, useEffect, useRef } from "react";
import { 
  Phone, MapPin, Clock, Mail, Star, Play, ChevronDown, ArrowRight, 
  Check, Sparkles, GraduationCap, BookOpen, Brain, Globe, 
  ArrowUpRight, Quote, X, ChevronLeft, ChevronRight 
} from "lucide-react";

import heroStudent from "@/assets/hero-student.jpg";
import aboutClassroom from "@/assets/about-classroom.jpg";
import courseEnglish from "@/assets/course-english.jpg";
import courseRussian from "@/assets/course-russian.jpg";
import courseMental from "@/assets/course-mental.jpg";
import student1 from "@/assets/student-1.jpg";
import student2 from "@/assets/student-2.jpg";
import student3 from "@/assets/student-3.jpg";
import student4 from "@/assets/student-4.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";


function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-[#F5B81F]/10 px-4 py-1.5 text-[11px] font-black tracking-widest text-[#F5B81F] uppercase">
      {children}
    </span>
  );
}


const NAV = [
  { label: "Biz haqimizda", href: "#about" },
  { label: "Kurslar", href: "#courses" },
  { label: "Natijalar", href: "#results" },
  { label: "Blog", href: "#blog" },
  { label: "Aloqa", href: "#contact" },
];

export default function App() {
  return (
    <div className="bg-hero min-h-screen text-foreground antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Courses />
        <Results />
        <Gallery />
        <Testimonials />
        <Location />
        <Blog />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

//* ---------------- HEADER ---------------- */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 transition-all duration-500 ${
          scrolled 
            ? "bg-white/90 backdrop-blur-md border border-zinc-200/80 py-2.5 shadow-[0_10px_30px_-10px_rgba(7,19,38,0.08)] rounded-3xl" 
            : "py-3"
        }`}
      >
        <div className="w-full grid grid-cols-2 lg:grid-cols-3 items-center">
          <div className="flex items-center min-w-[240px] shrink-0">
            <a href="#" className="flex items-center gap-3">
              <div className="flex flex-col items-center justify-center font-black text-2xl text-[#F5B81F] tracking-tighter leading-none select-none">
                <span>M</span>
                <span className="text-[7px] tracking-widest uppercase mt-[-2px]">Maris</span>
              </div>
              <div className="font-display text-lg font-bold tracking-wide text-[#071326] border-l border-zinc-200 pl-3">
                MARIS ACADEMY
              </div>
            </a>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <nav className="flex items-center gap-1 rounded-full bg-zinc-50 border border-zinc-200/60 px-2 py-1.5 shadow-sm">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  className="rounded-full px-4 py-2 text-sm text-[#071326]/70 font-semibold transition-all hover:text-[#F5B81F] hover:bg-white whitespace-nowrap"
                >
                  {n.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center justify-end gap-2">
            <a 
              href="tel:+998777204040" 
              className="hidden sm:inline-flex items-center gap-2 bg-[#F5B81F] text-zinc-900 px-5 py-2.5 rounded-full font-bold text-sm hover:bg-[#e0a616] transition-all shadow-sm"
            >
              <Phone className="h-4 w-4" /> Qo'ng'iroq qilish
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden grid h-11 w-11 place-items-center rounded-full bg-white border border-zinc-200 shadow-sm"
              aria-label="Menu"
            >
              <div className="space-y-1.5">
                <span className="block h-0.5 w-5 bg-[#071326]" />
                <span className="block h-0.5 w-5 bg-[#071326]" />
              </div>
            </button>
          </div></div>
      </div>

      {open && (
        <div className="lg:hidden mx-4 mt-2 rounded-2xl bg-white border border-zinc-200 p-4 shadow-xl animate-fade-up">
          <div className="flex flex-col gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-[#071326]/70 hover:text-[#F5B81F] hover:bg-zinc-50"
              >
                {n.label}
              </a>
            ))}
            <a 
              href="tel:+998777204040" 
              className="mt-2 inline-flex items-center justify-center gap-2 bg-[#F5B81F] text-[#071326] py-3 rounded-xl font-bold text-sm hover:bg-[#F5B81F]/90 transition-all shadow-sm"
            >
              <Phone className="h-4 w-4" /> Qo'ng'iroq qilish
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 lg:pt-48 lg:pb-32 bg-white">
      <div className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-[#F5B81F]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-[500px] w-[500px] rounded-full bg-[#F5B81F]/5 blur-3xl" />
      <GridPattern />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#F5B81F]/10 border border-[#F5B81F]/20 px-4 py-1.5 text-xs font-bold tracking-wider text-[#F5B81F]">
            <Sparkles className="h-3.5 w-3.5" /> MARIS ACADEMY
          </div>

          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl text-[#0b1f3d]">
            BILIM — ENG <br />
            KATTA <span className="text-[#F5B81F] italic font-black">INVESTITSIYA</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg font-medium text-[#0b1f3d] leading-relaxed">
            Ingliz tili, rus tili va mental arifmetika bo'yicha zamonaviy
            ta'lim markazi. Zamonaviy metodika, individual yondashuv, kafolatlangan natija.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-[#F5B81F] text-white px-7 py-3.5 rounded-full font-bold hover:bg-[#e0a616] transition-all shadow-md hover:shadow-lg"
            >
              Ro'yxatdan o'tish <ArrowRight className="h-4 w-4" />
            </a>
            <a 
              href="#courses" 
              className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-7 py-3.5 text-sm font-bold text-[#071326] hover:border-[#F5B81F] transition-all shadow-sm"
            >
              Kurslarni ko'rish
            </a>
          </div>

          <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#071326]/70">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-[#F5B81F]/15 text-[#F5B81F]">
              <Check className="h-3.5 w-3.5 stroke-[3]" />
            </span>
            <span><span className="text-[#071326] font-bold">Bepul sinov darsi</span> — hech qanday majburiyat yo'q</span>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md border-t border-zinc-100 pt-8">
            {[
              { v: "200+", l: "O'quvchi" },
              { v: "7+", l: "Yil tajriba" },
              { v: "95%", l: "Mamnunlik" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl font-black text-[#F5B81F]">{s.v}</div>
                <div className="mt-1 text-xs font-bold text-[#071326]/50 uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* O'ng tarafdagi vizual qism */}
        <div className="relative animate-fade-up [animation-delay:150ms]">
          <div className="relative mx-auto aspect-square w-full max-w-[520px]">
            {/* Oltin rangli aylanma nur */}
            <div 
              className="absolute inset-6 rounded-full opacity-60 animate-pulse-glow"
              style={{ background: "radial-gradient(closest-side, rgba(245,184,31,0.25), transparent 70%)" }} 
            />
            <div className="absolute inset-10 rounded-full border border-[#F5B81F]/20" />
            <div className="absolute inset-20 rounded-full border border-[#F5B81F]/10" />

            {/* Geometrik elementlar (Oq fonga moslandi) */}
            <div className="absolute -top-4 right-10 h-14 w-14 rounded-2xl bg-white border border-zinc-200/80 shadow-md animate-float grid place-items-center">
              <GraduationCap className="h-6 w-6 text-[#F5B81F]" />
            </div>
            <div className="absolute bottom-8 -left-4 h-14 w-14 rounded-2xl bg-white border border-zinc-200/80 shadow-md animate-float [animation-delay:1.5s] grid place-items-center">
              <BookOpen className="h-6 w-6 text-[#F5B81F]" />
            </div>

            {/* Asosiy talaba rasmi */}
            <div className="absolute inset-x-8 bottom-0 top-8 overflow-hidden rounded-[2.5rem] border border-[#F5B81F]/30 shadow-xl shadow-zinc-200/50">
              <img
                  src={heroStudent}
                  alt="Maris Academy o'quvchisi"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover"
                />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071326]/30 via-transparent to-transparent" />
            </div>

            {/* Floating badge (Pastdagi o'quvchilar rasmlari stringga o'tkazildi) */}
            <div className="absolute -bottom-6 left-4 sm:left-10 bg-white border border-zinc-200/80 shadow-lg rounded-2xl px-5 py-3.5 flex items-center gap-3 animate-float [animation-delay:0.7s]">
              <div className="flex -space-x-2.5">
                {["1", "2", "3"].map((num) => (
                  <img 
                    key={num} 
                    src={`/src/assets/student-${num}.jpg`} 
                    alt="" 
                    width={32} 
                    height={32}
                    className="h-9 w-9 rounded-full border-2 border-white object-cover shadow-sm" 
                  />
                ))}
              </div>
              <div>
                <div className="text-[11px] font-bold text-[#071326]/40 uppercase tracking-wider">Joriy hafta</div>
                <div className="text-sm font-extrabold text-[#071326]">+38 yangi o'quvchi</div>
              </div>
            </div>

            {/* Reyting badge */}
            <div className="absolute -top-4 -left-4 bg-white border border-zinc-200/80 shadow-lg rounded-2xl px-4 py-3 animate-float [animation-delay:1.2s]">
              <div className="flex items-center gap-0.5 text-[#F5B81F]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <div className="mt-1 text-xs font-bold text-[#071326]">4.9 / 5 reyting</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GridPattern() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 -z-0 h-full w-full opacity-[0.04]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse">
          <path d="M 64 0 L 0 0 0 64" fill="none" stroke="#071326" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
}
/* ---------------- ABOUT ---------------- */
function About() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20">
        
        {/* CHAP TOMON: RASM VA VIDEO TUGMASI */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#F5B81F]/20 shadow-xl shadow-zinc-100">
            <img
                src={aboutClassroom} 
                alt="Maris Academy Classroom"
                className="rounded-3xl object-cover w-full h-full shadow-2xl"
              />
            
            <button
              onClick={() => setIsVideoOpen(true)}
              className="group absolute inset-0 grid place-items-center bg-black/10 transition-colors hover:bg-black/20"
              aria-label="Videoni ko'rish"
            >
              <span className="grid h-20 w-20 place-items-center rounded-full bg-[#F5B81F] text-white transition-transform duration-300 group-hover:scale-110 shadow-[0_15px_40px_-10px_rgba(245,184,31,0.6)]">
                <Play className="h-7 w-7 fill-current ml-1" />
              </span>
            </button>
          </div>
          
          <div className="absolute -bottom-6 -right-6 hidden md:block bg-white border border-zinc-200 rounded-2xl p-5 w-56 shadow-xl shadow-zinc-200/50">
            <div className="font-display text-3xl font-black text-[#F5B81F]">5+</div>
            <div className="text-sm font-bold text-[#071326]/60 mt-1">yillik ta'lim tajribasi</div>
          </div>
        </div>

        {/* O'NG TOMON: MATNLAR */}
        <div>
          <SectionLabel>BIZ HAQIMIZDA</SectionLabel>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-[#0b1f3d] sm:text-5xl">
            Har bir o'quvchi — <span className="text-[#0b1f3d] italic font-black">alohida yondashuv</span>
          </h2>
          <p className="mt-5 text-base font-medium text-[#071326]/70 leading-relaxed">
            Maris Academy — bu zamonaviy metodika, xalqaro standartlar va inson-markazli ta'lim
            falsafasini birlashtirgan zamonaviy o'quv markazi. Biz har bir o'quvchining
            individual potensialini ochishga yo'naltirilgan tizim yaratdik.
          </p>
          <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              "Kichik guruhlar",
              "Individual yondashuv",
              "Tajribali mentorlar",
              "Natijaga yo'naltirilgan tizim",
              "Zamonaviy metodika",
              "Xalqaro standartlar",
            ].map((b) => (
              <li key={b} className="flex items-center gap-3 rounded-xl bg-zinc-50 border border-zinc-200/60 px-4 py-3 shadow-sm">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#F5B81F]/15 text-[#F5B81F]">
                  <Check className="h-4 w-4 stroke-[3]" />
                </span>
                <span className="text-sm font-bold text-[#071326]/80">{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-[#F5B81F] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#e0a616] transition-all shadow-md"
            >
              Maslahat olish <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* 🎬 PROFESSIONAL VIDEO MODAL OYNASI */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="absolute inset-0" onClick={() => setIsVideoOpen(false)} />
          
          <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl z-10">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-20 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white hover:bg-[#F5B81F] hover:text-[#071326] transition-all duration-300"
              aria-label="Yopish"
            >
              <X className="h-5 w-5" />
            </button>

            <video
              src="/about-video.mp4"
              className="h-full w-full object-contain bg-black"
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      )}
    </section>
  );
}

/* ---------------- COURSES ---------------- */
function Courses() {
  const items = [
    {
      title: "English Language",
      sub: "London theme · IELTS · CEFR · SAT",
      img: courseEnglish,
      icon: Globe,
      tags: ["IELTS", "CEFR", "SAT"],
      features: ["Beginner to Advanced", "IELTS Preparation", "Speaking Practice"],
    },
    {
      title: "Russian Language",
      sub: "Moscow theme · Grammar · Speaking",
      img: courseRussian,
      icon: BookOpen,
      tags: ["Grammar", "Speaking"],
      features: ["Daily Communication", "Grammar Mastery", "Real-life Practice"],
    },
    {
      title: "Mental Arithmetic",
      sub: "Brain · Mantiq · Tezkor hisob",
      img: courseMental,
      icon: Brain,
      tags: ["Tezkor hisob", "Mantiq"],
      features: ["Brain Development", "Fast Calculation", "Logical Thinking"],
    },
  ];

  return (
    <section id="courses" className="relative py-24 lg:py-32 bg-zinc-50/50 border-t border-b border-zinc-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>KURSLAR</SectionLabel>
          <h2 className="mt-4 font-display text-4xl font-extrabold text-[#071326] sm:text-5xl">
            Sizga mos <span className="text-[#F5B81F] italic font-black">yo'nalishni</span> tanlang
          </h2>
          <p className="mt-4 text-base font-medium text-[#071326]/70">
            Har bir kurs xalqaro standartlar va zamonaviy metodika asosida loyihalangan.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((c) => {
            const Icon = c.icon;
            return (
              <article
                key={c.title}
                className="group relative overflow-hidden rounded-[2rem] bg-white border border-zinc-200/80 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-zinc-200/60 hover:border-[#F5B81F]/30"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={c.img} // c.image o'rniga to'g'ri c.img o'zgaruvchisi o'rnatildi
                    alt={c.title}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Premium yengil quyuq qatlam gradienti */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071326]/40 via-[#071326]/10 to-transparent" />
                  
                  <div className="absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-2xl bg-[#F5B81F] text-white shadow-md shadow-[#F5B81F]/30">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="absolute right-5 top-5 flex flex-wrap justify-end gap-1.5">
                    {c.tags.map((t) => (
                      <span key={t} className="rounded-full bg-white/90 border border-white/20 px-3 py-1 text-[10px] font-bold tracking-wider text-[#071326] shadow-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="p-7 bg-white">
                  <h3 className="font-display text-2xl font-extrabold text-[#071326]">{c.title}</h3>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-[#071326]/40">{c.sub}</p>
                  
                  <ul className="mt-5 space-y-3 border-t border-zinc-100 pt-5">
                    {c.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm font-semibold text-[#071326]/70">
                        <Check className="h-4 w-4 text-[#F5B81F] stroke-[3]" /> {f}
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="#contact"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#F5B81F] transition-all hover:gap-3"
                  >
                    Batafsil <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- RESULTS ---------------- */
function Results() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const results = [
    { name: "Aziza Karimova", badge: "IELTS 7.5", year: "2025", img: "/src/assets/student-1.jpg" },
    { name: "Jasur Tursunov", badge: "IELTS 8.0", year: "2025", img: "/src/assets/student-2.jpg" },
    { name: "Madina Nazarova", badge: "CEFR C1", year: "2024", img: "/src/assets/student-3.jpg" },
    { name: "Otabek Yusupov", badge: "CEFR C1", year: "2025", img: "/src/assets/student-4.jpg" },
    { name: "Shahnoza Olimova", badge: "IELTS 7.0", year: "2024", img: "/src/assets/student-1.jpg" },
    { name: "Sardor Rasulov", badge: "CEFR B2", year: "2025", img: "/src/assets/student-2.jpg" },
  ];

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320; 
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="results" className="relative py-24 lg:py-32 overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* TEPA QISMI: Sarlavha va Navigatsiya tugmalari */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <SectionLabel>NATIJALAR</SectionLabel>
            <h2 className="mt-4 font-display text-4xl font-extrabold text-[#0b1f3d] sm:text-5xl">
              O'quvchilarimiz <span className="text-[#F5B81F] italic font-black">natijalari</span>
            </h2>
          </div>
          
          <div className="flex items-center justify-between md:justify-end gap-5 w-full md:w-auto">
            <p className="text-[#071326]/60 text-sm font-medium max-w-xs hidden md:block">
              Yuzlab o'quvchilarimiz xalqaro imtihonlardan yuqori natijalarni qo'lga kiritmoqda.
            </p>
            
            {/* PREMIYUM STRELKALAR (OQ USLUBDA) */}
            <div className="flex gap-2">
              <button
                onClick={() => handleScroll("left")}
                className="h-12 w-12 rounded-full border border-zinc-200 bg-white shadow-sm hover:border-[#F5B81F] text-[#071326] hover:text-[#F5B81F] transition-all duration-300 grid place-items-center group"
                aria-label="Oldingisi"
              >
                <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-0.5 stroke-[2.5]" />
              </button>
              <button
                onClick={() => handleScroll("right")}
                className="h-12 w-12 rounded-full border border-zinc-200 bg-white shadow-sm hover:border-[#F5B81F] text-[#071326] hover:text-[#F5B81F] transition-all duration-300 grid place-items-center group"
                aria-label="Keyingisi"
              >
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>

        {/* KARTALAR RO'YXATI */}
        <div 
          ref={scrollRef}
          className="mt-12 -mx-6 px-6 flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style>{`
            div::-webkit-scrollbar { display: none; }
          `}</style>

          {results.map((r, i) => (
            <article
              key={i}
              className="group relative w-72 shrink-0 overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-md shadow-zinc-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-[#F5B81F]/30 snap-start"
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={r.img} 
                  alt={r.name} 
                  width={768} 
                  height={896}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071326]/80 via-[#071326]/20 to-transparent" />
                
                {/* NISBATI / BADGE (PREMIUM OLTIN) */}
                <div className="absolute top-4 right-4 rounded-full bg-[#F5B81F] px-3 py-1 text-[11px] font-black tracking-wider text-white shadow-sm">
                  {r.badge}
                </div>
                
                {/* MATNLARI */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="text-base font-extrabold tracking-wide text-white group-hover:text-[#F5B81F] transition-colors duration-300">
                    {r.name}
                  </div>
                  <div className="text-xs font-semibold text-zinc-300 mt-0.5">{r.badge} · {r.year}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
        
      </div>
    </section>
  );
}

/* ---------------- GALLERY ---------------- */
function Gallery() {
  const [activeImg, setActiveImg] = useState<{ src: string; alt: string } | null>(null);

  const imgs = [
    { src: gallery1, alt: "Sinfxona darslari", span: "md:col-span-2 md:row-span-2" },
    { src: gallery2, alt: "Speaking sessiya", span: "" },
    { src: gallery3, alt: "Faol o'quvchilar", span: "" },
    { src: gallery4, alt: "Sertifikat marosimi", span: "md:col-span-2" },
  ];

  return (
    <section id="gallery" className="relative py-24 lg:py-32 bg-zinc-50/50 border-t border-b border-zinc-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>GALEREYA</SectionLabel>
          <h2 className="mt-4 font-display text-4xl font-extrabold text-[#071326] sm:text-5xl">
            Markazimizdan <span className="text-[#F5B81F] italic font-black">lavhalar</span>
          </h2>
        </div>

        {/* RASMLAR SETKASI */}
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[220px]">
          {imgs.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImg({ src: img.src, alt: img.alt })}
              className={`group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm text-left ${img.span} w-full h-full focus:outline-none`}
            >
              <img 
                src={img.src} // To'g'ridan-to'g'ri o'zgaruvchidan o'qiydi
                alt={img.alt} 
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071326]/60 via-transparent to-transparent opacity-40 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="text-sm font-bold text-white tracking-wide">{img.alt}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* 🖼️ LIGHTBOX MODAL OYNASI */}
      {activeImg && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="absolute inset-0" onClick={() => setActiveImg(null)} />
          
          <div className="relative max-w-5xl max-h-[85vh] rounded-2xl overflow-hidden border border-white/10 shadow-2xl z-10">
            {/* ❌ YOPISH TUGMASI */}
            <button
              onClick={() => setActiveImg(null)}
              className="absolute top-4 right-4 z-20 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white hover:bg-[#F5B81F] hover:text-[#071326] transition-all duration-300"
              aria-label="Yopish"
            >
              <X className="h-5 w-5 stroke-[2.5]" />
            </button>

            <img
              src={activeImg.src}
              alt={activeImg.alt}
              className="w-full h-full object-contain max-h-[85vh]"
            />
            
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 pt-12">
              <p className="text-white text-base font-bold tracking-wide">{activeImg.alt}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const data = [
    {
      name: "Dilnoza Karimova",
      course: "IELTS kursi",
      img: student1, // Matn o'rniga tepadagi import o'zgaruvchisi
      text: "Maris Academy menga IELTS 7.5 olishimga yordam berdi. Mentorlarning yondashuvi va metodikasi haqiqatan ham boshqacha — har bir o'quvchiga alohida e'tibor qaratiladi.",
    },
    {
      name: "Bekzod Yusupov",
      course: "General English",
      img: student2, // Matn o'rniga tepadagi import o'zgaruvchisi
      text: "Speaking darajam tubdan o'zgardi. Yarim yil ichida professional muloqot qila oladigan darajaga yetdim. Bu yerda har bir dars sifatga yo'naltirilgan.",
    },
    {
      name: "Sevinch Olimova",
      course: "Russian Language",
      img: student3, // Matn o'rniga tepadagi import o'zgaruvchisi
      text: "Rus tili kursi juda kuchli. Kichik guruh va sifatli darslar tufayli tezda natija ko'rdim. Maris Academy haqiqatan ham premium ta'lim markazi.",
    },
  ];
  const [active, setActive] = useState(0);

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>FIKRLAR</SectionLabel>
          <h2 className="mt-4 font-display text-4xl font-extrabold text-[#0b1f3d] sm:text-5xl">
            O'quvchilarimiz <span className="text-[#F5B81F] italic font-black">fikri</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {data.map((t, i) => (
            <article
              key={i}
              onMouseEnter={() => setActive(i)}
              className={`relative rounded-3xl border p-7 transition-all duration-500 bg-white ${
                active === i 
                  ? "border-[#F5B81F]/40 shadow-xl shadow-zinc-200/60 -translate-y-1" 
                  : "border-zinc-200/80 shadow-md shadow-zinc-100/50"
              }`}
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-[#F5B81F]/10 stroke-[1.5]" />
              <div className="flex items-center gap-1 text-[#F5B81F]">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 text-sm font-medium leading-relaxed text-[#071326]/70">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3 border-t border-zinc-100 pt-4">
                <img 
                  src={t.img} 
                  alt={t.name} 
                  width={48} 
                  height={48}
                  loading="lazy" 
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-[#F5B81F]/20" 
                />
                <div>
                  <div className="text-sm font-extrabold text-[#071326]">{t.name}</div>
                  <div className="text-xs font-bold text-[#071326]/40 mt-0.5">{t.course}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- LOCATION ---------------- */
function Location() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-zinc-50/50 border-t border-b border-zinc-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>LOKATSIYA</SectionLabel>
          <h2 className="mt-4 font-display text-4xl font-extrabold text-[#071326] sm:text-5xl">
            Bizni <span className="text-[#F5B81F] italic font-black">toping</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-md shadow-zinc-100">
            <h3 className="font-display text-2xl font-extrabold text-[#071326]">Aloqa ma'lumotlari</h3>
            <p className="mt-2 text-sm font-medium text-[#071326]/60">
              Bizga tashrif buyuring yoki qo'ng'iroq qiling — biz har doim yordam berishga tayyormiz.
            </p>
            <ul className="mt-7 space-y-5">
              <ContactRow icon={MapPin} label="Manzil" value="G'azalkent Shahri" />
              <ContactRow icon={Phone} label="Telefon" value="+998 77 720 40 40" />
              <ContactRow icon={Mail} label="Email" value="info@marisacademy.uz" />
              <ContactRow icon={Clock} label="Ish vaqti" value="Du - Sh: 09:00 — 20:00 · Yak: dam" />
            </ul>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-[#F5B81F] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#e0a616] transition-all shadow-md shadow-[#F5B81F]/20"
            >
              Yo'nalishni ochish <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
            </a>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-white min-h-[420px] shadow-md shadow-zinc-100">
            <iframe
              title="Maris Academy lokatsiya"
              className="absolute inset-0 h-full w-full opacity-90"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2983.567!2d69.771!3d41.567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDM0JzAxLjIiTiA2OcKwNDYnMTUuNiJF!5e0!3m2!1suz!2suz!4v1625000000000"
              loading="lazy"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <li className="flex items-start gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#F5B81F]/15 text-[#F5B81F]">
        <Icon className="h-5 w-5 stroke-[2.5]" />
      </span>
      <div>
        <div className="text-[10px] font-black uppercase tracking-wider text-[#071326]/40">{label}</div>
        <div className="mt-0.5 text-sm font-bold text-[#071326]/80">{value}</div>
      </div>
    </li>
  );
}

/* ---------------- BLOG ---------------- */
function Blog() {
  const posts = [
    {
      title: "Ingliz tilini 3 oyda qanday yaxshilash mumkin?",
      sub: "Ta'lim · Motivatsiya",
      date: "12 IYUN 2026",
      img: blog1, // Tepadagi import qilingan blog1 o'zgaruvchisi
    },
    {
      title: "IELTS 7+ olish uchun 7 ta professional maslahat",
      sub: "Imtihon · Metodika",
      date: "05 IYUN 2026",
      img: blog2, // blog2 o'zgaruvchisi
    },
    {
      title: "Mental arifmetika bolaning miyasini qanday rivojlantiradi",
      sub: "Mantiq · Tezkor hisob",
      date: "28 MAY 2026",
      img: blog3, // blog3 o'zgaruvchisi
    },
  ];

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <SectionLabel>BLOG</SectionLabel>
            <h2 className="mt-4 font-display text-4xl font-extrabold text-[#071326] sm:text-5xl">
              Foydali <span className="text-[#F5B81F] italic font-black">maqolalar</span>
            </h2>
          </div>
          <p className="max-w-md text-sm font-semibold text-[#071326]/60 md:text-right">
            Ta'lim, motivatsiya va imtihonlarga tayyorgarlik bo'yicha eng so'nggi materiallar.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((p, index) => (
            <article key={index} className="group overflow-hidden rounded-3xl border border-zinc-100 bg-zinc-50/30 p-4 transition-all hover:shadow-lg">
              <div className="overflow-hidden rounded-2xl h-52 bg-zinc-200">
                <img 
                  src={p.img} // To'g'ri o'zgaruvchi ulandi
                  alt={p.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 px-2">
                <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-[#F5B81F]">
                  <span>{p.sub}</span>
                  <span className="text-zinc-400">{p.date}</span>
                </div>
                <h3 className="mt-2 text-lg font-bold text-[#071326] line-clamp-2 group-hover:text-[#F5B81F] transition-colors">
                  {p.title}
                </h3>
                <a href="#contact" className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#F5B81F]">
                  Batafsil <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
/* ---------------- FAQ ---------------- */
function FAQ() {
  const items = [
    { q: "Kurs qancha davom etadi?", a: "Tanlangan yo'nalish va darajaga qarab 3 oydan 12 oygacha. Har bir kurs aniq natija va o'lchanadigan maqsadlarga ega." },
    { q: "Darslar haftada necha marta?", a: "Standart format — haftada 3 marta, 90 daqiqadan. Intensiv guruhlar uchun 5 marta variant ham mavjud." },
    { q: "To'lov qanday amalga oshiriladi?", a: "Naqd, plastik karta, online to'lov va bo'lib to'lash variantlari mavjud. Birinchi to'lovdan oldin bepul maslahat bering." },
    { q: "Sertifikat beriladimi?", a: "Ha, kursni muvaffaqiyatli yakunlagan har bir o'quvchiga Maris Academy rasmiy sertifikati taqdim etiladi." },
    { q: "Bepul sinov darsi mavjudmi?", a: "Albatta. Bizning saytdan ro'yxatdan o'tib, bepul sinov darsiga yozilishingiz mumkin — hech qanday majburiyatsiz." },
  ];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 lg:py-32 bg-zinc-50/50 border-t border-b border-zinc-100">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-4 font-display text-4xl font-extrabold text-[#071326] sm:text-5xl">
            Tez-tez so'raladigan <span className="text-[#F5B81F] italic font-black">savollar</span>
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={`rounded-2xl border bg-white transition-all duration-300 ${isOpen ? "border-[#F5B81F]/40 shadow-md shadow-zinc-100" : "border-zinc-200"}`}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none"
                >
                  <span className="font-extrabold text-base text-[#071326]/90">{it.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[#F5B81F] transition-transform duration-300 stroke-[2.5] ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className="grid transition-all duration-300"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm font-medium text-[#071326]/60 leading-relaxed border-t border-zinc-50 pt-3">{it.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCTA() {
  return (
    <section className="relative py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-zinc-200/80 bg-white p-10 sm:p-16 text-center shadow-xl shadow-zinc-100">
          
          {/* Orqa fondagi nozik va hashamatli oltin nur effekti */}
          <div className="pointer-events-none absolute -top-32 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[#F5B81F]/10 blur-3xl" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#F5B81F]/10 border border-[#F5B81F]/20 px-4 py-1.5 text-[11px] font-black tracking-wider text-[#F5B81F] uppercase">
              <Sparkles className="h-3.5 w-3.5 fill-current" /> BEPUL SINOV DARSI
            </div>
            <h2 className="mt-6 font-display text-4xl font-extrabold leading-tight text-[#0b1f3d] sm:text-6xl">
              Kelajagingizga <span className="text-[#F5B81F] italic font-black">bugundan</span>
              <br className="hidden sm:block" /> investitsiya qiling
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base font-medium text-[#071326]/60 leading-relaxed">
              Bepul sinov darsiga yoziling va ta'lim sifatini o'zingiz baholang.
              Hech qanday majburiyat yo'q — faqat sof natija.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a 
                href="tel:+998777204040" 
                className="inline-flex items-center gap-2 bg-[#F5B81F] text-white px-8 py-4 rounded-full font-bold text-base hover:bg-[#e0a616] transition-all shadow-md shadow-[#F5B81F]/20"
              >
                Ro'yxatdan o'tish <ArrowRight className="h-4 w-4 stroke-[2.5]" />
              </a>
              <a 
                href="tel:+998777204040" 
                className="inline-flex items-center gap-2 border-2 border-zinc-200 bg-white text-[#071326] px-8 py-4 rounded-full font-bold text-base hover:border-[#F5B81F] hover:text-[#F5B81F] transition-all"
              >
                <Phone className="h-4 w-4 stroke-[2.5]" /> +998 77 720 40 40
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="relative border-t border-zinc-100 bg-white py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-2 lg:grid-cols-4">
        
        {/* BREND VA IJTIMOIY TARMOQLAR */}
        <div>
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#F5B81F] text-white font-black text-xl shadow-sm shadow-[#F5B81F]/20">
              M
            </div>
            <div className="font-display text-lg font-extrabold tracking-wide text-[#071326]">
              MARIS ACADEMY
            </div>
          </div>
          <p className="mt-5 text-sm font-medium text-[#071326]/60 max-w-xs leading-relaxed">
            Ingliz tili, rus tili va mental arifmetika bo'yicha zamonaviy ta'lim markazi.
          </p>

          <div className="mt-6 flex gap-3">
            {[
              {
                name: "Telegram",
                url: "https://t.me/maris_academy", 
                svg: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.198 2.43a.5.5 0 0 0-.53-.08L2.55 10.22a.5.5 0 0 0 .01.93l4.75 1.58 3.51 5.26a.5.5 0 0 0 .83-.04l2.45-3.68 4.88 3.25a.5.5 0 0 0 .78-.32l3-14.5a.5.5 0 0 0-.56-.57Z"/>
                    <path d="M8.13 12.35 17 6"/>
                  </svg>
                )
              },
              {
                name: "Instagram",
                url: "https://www.instagram.com/maris.academy.uz/", 
                svg: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                )
              }
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="grid h-10 w-10 place-items-center rounded-full border border-zinc-200 bg-white text-[#071326]/60 transition-all duration-300 hover:border-[#F5B81F] hover:bg-[#F5B81F]/5 hover:text-[#F5B81F] hover:shadow-sm"
              >
                {social.svg}
              </a>
            ))}
          </div>
        </div>

        {/* NAVIGATSIYA */}
      {/* NAVIGATSIYA */}
<FooterCol title="Navigatsiya" links={["Bosh sahifa", "Kurslar", "Natijalar", "Blog", "Aloqa"]} />
        {/* KURSLAR */}
        <FooterCol title="Kurslar" links={["English Language", "Russian Language", "Mental Arithmetic", "IELTS Preparation", "SAT Preparation"]} />
        
        {/* ALOQA MA'LUMOTLARI */}
        <div>
          <div className="text-xs font-black tracking-wider text-[#F5B81F] uppercase">Aloqa</div>
          <ul className="mt-5 space-y-4 text-sm font-medium text-[#071326]/70">
            <li className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 mt-0.5 text-[#F5B81F] shrink-0 stroke-[2.5]" /> 
              <span>G'azalkent Shahri, Raimqulov ko‘chasi</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="h-4 w-4 mt-0.5 text-[#F5B81F] shrink-0 stroke-[2.5]" /> 
              <span>+998 77 720 40 40</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="h-4 w-4 mt-0.5 text-[#F5B81F] shrink-0 stroke-[2.5]" /> 
              <span className="break-all">info@marisacademy.uz</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="h-4 w-4 mt-0.5 text-[#F5B81F] shrink-0 stroke-[2.5]" /> 
              <span>Du-Sh 09:00 — 20:00</span>
            </li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mx-auto mt-12 max-w-7xl border-t border-zinc-100 px-6 pt-6">
        <p className="text-center text-xs font-bold text-[#071326]/40">
          © {new Date().getFullYear()} Maris Academy. Barcha huquqlar himoyalangan.
        </p>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <div className="text-xs font-black tracking-wider text-[#F5B81F] uppercase">{title}</div>
      <ul className="mt-5 space-y-3">
        {links.map((l) => (
          <li key={l}>
            <a 
              href="#" 
              className="text-sm font-medium text-[#071326]/60 transition-colors hover:text-[#F5B81F]"
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}