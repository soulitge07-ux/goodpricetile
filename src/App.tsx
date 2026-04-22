/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu, 
  X, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe,
  Database,
  Layers,
  Phone,
  Layout,
  ExternalLink,
  ChevronRight,
  MapPin,
  MessageSquare,
  Clock,
  Briefcase
} from "lucide-react";

// 3D Floating Shape — adapted from ElegantShape
const ElegantShape = ({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-dark/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
    animate={{ opacity: 1, y: 0, rotate }}
    transition={{ duration: 2.4, delay, ease: [0.23, 0.86, 0.39, 0.96], opacity: { duration: 1.2 } }}
    className={`absolute ${className}`}
  >
    <motion.div
      animate={{ y: [0, 15, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      style={{ width, height }}
      className="relative"
    >
      <div
        className={`absolute inset-0 rounded-full bg-gradient-to-r to-transparent ${gradient} backdrop-blur-[2px] border-2 border-dark/[0.06] shadow-[0_8px_32px_0_rgba(0,0,0,0.04)]`}
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(204,84,58,0.06), transparent 70%)`,
        }}
      />
    </motion.div>
  </motion.div>
);

const Section = ({ children, className, id, dark = false, style }: { children: ReactNode, className?: string, id?: string, dark?: boolean, style?: React.CSSProperties }) => (
  <section id={id} style={style} className={`section-padding border-b border-dark/10 relative ${dark ? "bg-dark text-bg" : "bg-bg text-dark"} ${className}`}>
    <div className="max-w-7xl mx-auto relative z-10">
      {children}
    </div>
  </section>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-3 md:px-8 md:py-4 flex justify-between items-center bg-bg/80 backdrop-blur-md">
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
        {/* Logo removed */}
      </div>
      
      <div className="hidden md:flex items-center gap-12 text-[11px] font-black uppercase tracking-[0.2em] opacity-60">
        <a href="#about" className="hover:text-brand hover:opacity-100 transition-all">About</a>
        <a href="#trust" className="hover:text-brand hover:opacity-100 transition-all">Trust</a>
        <a href="#guide" className="hover:text-brand hover:opacity-100 transition-all">Guide</a>
        <a
          href="#cta"
          className="bg-dark text-bg px-6 py-3 hover:bg-brand transition-all"
        >
          Reservation
        </a>
      </div>

      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden schematic-border p-2">
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 bg-white z-50 flex flex-col p-12 overflow-y-auto"
          >
            <div className="flex justify-end items-center mb-16">
              <button onClick={() => setIsOpen(false)} className="p-4 schematic-border"><X /></button>
            </div>
            <div className="flex flex-col gap-8">
              {[
                { label: 'About', href: '#about' },
                { label: 'Trust', href: '#trust' },
                { label: 'Guide', href: '#guide' },
                { label: 'Reservation', href: '#cta' },
              ].map((item) => (
                <a key={item.label} href={item.href} onClick={() => setIsOpen(false)} className="text-6xl font-black uppercase tracking-tighter hover:text-brand transition-all">{item.label}</a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand selection:text-white">
      <Navbar />

      {/* SECTION 1. HERO */}
      <section className="min-h-[90vh] pt-32 pb-20 md:pt-40 md:pb-24 px-6 md:px-16 flex flex-col justify-center border-b border-dark/10 relative overflow-hidden">
        {/* 3D Floating Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <ElegantShape
            delay={0.3}
            width={500}
            height={120}
            rotate={12}
            gradient="from-brand/[0.08]"
            className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
          />
          <ElegantShape
            delay={0.5}
            width={420}
            height={100}
            rotate={-15}
            gradient="from-brand/[0.06]"
            className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
          />
          <ElegantShape
            delay={0.4}
            width={260}
            height={70}
            rotate={-8}
            gradient="from-dark/[0.04]"
            className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
          />
          <ElegantShape
            delay={0.6}
            width={180}
            height={50}
            rotate={20}
            gradient="from-brand/[0.10]"
            className="right-[10%] md:right-[15%] top-[8%] md:top-[12%]"
          />
          <ElegantShape
            delay={0.7}
            width={140}
            height={36}
            rotate={-25}
            gradient="from-dark/[0.03]"
            className="left-[20%] md:left-[25%] top-[5%] md:top-[8%]"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-brand mb-6 md:mb-8 block">Verified Stock Tile Showroom</span>
            <h1 className="heading-giant mb-8 md:mb-12">
              예산 안에서<br />좋은 타일은 <span className="text-brand">이미 여기에</span>
            </h1>
            <p className="text-xl md:text-3xl font-medium tracking-tight opacity-70 mb-10 md:mb-16 w-full leading-relaxed">
              600각 박스 1만원부터 — 벨라세라믹의 자원순환 프로젝트로 만든 진짜 가성비.<br />
              <span className="text-dark font-bold underline decoration-brand/30 decoration-4 underline-offset-4">인테리어 전문가를 위한 프라이빗 네트워크 쇼룸 입니다.</span>
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6">
              <a
                href="#cta"
                className="cta-primary flex items-center justify-center gap-4 group"
              >
                <span>쇼룸 방문 예약하기</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </a>
              <div className="flex items-center gap-4 px-4 text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-40">
                <Database className="w-4 h-4 md:w-5 md:h-5" />
                <span>벨라세라믹 직접 검증 재고</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Background Grid Pattern */}
        <div className="absolute inset-0 z-[-1] opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </section>

      {/* SECTION 2. PAIN POINT */}
      <Section className="bg-white/40">
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] italic">
            논현동을 다 뒤져도<br />
            "이 가격"은 <span className="text-brand">없었습니다.</span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="space-y-8 md:space-y-10 text-xl md:text-2xl font-medium opacity-60 leading-relaxed">
            <p>클라이언트 예산 맞추기 위해 퀄리티를 포기하셨나요?</p>
            <p>박스당 1만원대에서도 '디자인'과 '품질'을 모두 챙길 수 있는 비법, 굿프라이스타일이 알려드립니다.</p>
            <div className="h-px w-32 bg-dark opacity-10"></div>
            <p className="text-dark font-black">20년 수입 경력의 벨라세라믹이 직접 선별한 재고 물량으로 증명합니다.</p>
          </div>
          <div className="relative p-10 md:p-12 schematic-border bg-white group overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-brand/20 group-hover:text-brand transition-colors">
              <Briefcase size={80} />
            </div>
            <h3 className="text-3xl md:text-4xl font-black mb-8">Designer's Choice</h3>
            <ul className="space-y-4 md:space-y-6 text-base md:text-lg font-bold opacity-50">
              <li className="flex items-center gap-4"><ChevronRight className="text-brand shrink-0" /> 예산 집행 효율성 200% 증가</li>
              <li className="flex items-center gap-4"><ChevronRight className="text-brand shrink-0" /> 시즌 아웃 명품 타일 최저가 선점</li>
              <li className="flex items-center gap-4"><ChevronRight className="text-brand shrink-0" /> 당일 출고 가능 재고 확보</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* SECTION 3. HOW — 어떻게 가능하냐고요? */}
      <Section id="about" dark className="!py-24 md:!py-40 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1]">
            창고에서 잊혀진 타일,<br />
            <span className="text-brand">이제 당신이 발견할 차례.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            {
              step: "01",
              label: "Forgotten",
              title: "창고에서 잊혀진 타일",
              desc: "단종·재고·초과발주, 프로젝트 납품 후 남은 좋은 타일이 창고 한켠에서 빛을 보지 못하고 잠들어 있습니다.",
              icon: (inView: boolean) => (
                <svg viewBox="0 0 110 110" fill="none" className="w-24 h-24 md:w-28 md:h-28">
                  <rect x="15" y="52" width="80" height="48" rx="3" stroke="#9CA3AF" strokeWidth="1.6"
                    strokeDasharray="500" strokeDashoffset={inView ? 0 : 500} style={{ transition: 'stroke-dashoffset 1.3s cubic-bezier(0.4,0,0.2,1)' }} />
                  <path d="M10 52 L100 52 L93 38 L17 38 Z" stroke="#9CA3AF" strokeWidth="1.6"
                    strokeDasharray="500" strokeDashoffset={inView ? 0 : 500} style={{ transition: 'stroke-dashoffset 1.3s cubic-bezier(0.4,0,0.2,1)' }} />
                  <line x1="15" y1="70" x2="95" y2="70" stroke="#9CA3AF" strokeWidth="0.9" opacity="0.5"
                    strokeDasharray="500" strokeDashoffset={inView ? 0 : 500} style={{ transition: 'stroke-dashoffset 1.3s cubic-bezier(0.4,0,0.2,1)' }} />
                  <rect x="26" y="74" width="16" height="13" rx="1.5" stroke="#9CA3AF" strokeWidth="1.1" opacity="0.6"
                    strokeDasharray="300" strokeDashoffset={inView ? 0 : 300} style={{ transition: 'stroke-dashoffset 1s cubic-bezier(0.4,0,0.2,1) 0.4s' }} />
                  <rect x="47" y="74" width="16" height="13" rx="1.5" stroke="#9CA3AF" strokeWidth="1.1" opacity="0.6"
                    strokeDasharray="300" strokeDashoffset={inView ? 0 : 300} style={{ transition: 'stroke-dashoffset 1s cubic-bezier(0.4,0,0.2,1) 0.4s' }} />
                  <rect x="68" y="74" width="16" height="13" rx="1.5" stroke="#9CA3AF" strokeWidth="1.1" opacity="0.6"
                    strokeDasharray="300" strokeDashoffset={inView ? 0 : 300} style={{ transition: 'stroke-dashoffset 1s cubic-bezier(0.4,0,0.2,1) 0.4s' }} />
                  <path d="M15 38 Q4 20 14 12 Q11 26 24 30" stroke="#9CA3AF" strokeWidth="0.7" opacity="0.55"
                    strokeDasharray="300" strokeDashoffset={inView ? 0 : 300} style={{ transition: 'stroke-dashoffset 1s cubic-bezier(0.4,0,0.2,1) 0.4s' }} />
                  <circle cx="72" cy="24" r="2" fill="#9CA3AF" opacity={inView ? 0.3 : 0} style={{ transition: 'opacity 0.5s ease 1s' }} />
                  <circle cx="82" cy="16" r="1.5" fill="#9CA3AF" opacity={inView ? 0.2 : 0} style={{ transition: 'opacity 0.5s ease 1s' }} />
                  <circle cx="62" cy="18" r="1" fill="#9CA3AF" opacity={inView ? 0.25 : 0} style={{ transition: 'opacity 0.5s ease 1s' }} />
                  <text x="52" y="28" fill="#9CA3AF" fontSize="11" opacity={inView ? 0.4 : 0} fontFamily="Georgia,serif" letterSpacing="3" style={{ transition: 'opacity 0.5s ease 1s' }}>zzz</text>
                </svg>
              ),
            },
            {
              step: "02",
              label: "Rescued",
              title: "발굴합니다",
              desc: "벨라세라믹이 직접 발품을 팔아 숨어 있는 좋은 타일을 찾아냅니다.",
              icon: (inView: boolean) => (
                <svg viewBox="0 0 110 110" fill="none" className="w-24 h-24 md:w-28 md:h-28">
                  <line x1="55" y1="8" x2="55" y2="40" stroke="#CC543A" strokeWidth="2"
                    strokeDasharray="500" strokeDashoffset={inView ? 0 : 500} style={{ transition: 'stroke-dashoffset 1.3s cubic-bezier(0.4,0,0.2,1)' }} />
                  <path d="M43 40 Q55 34 67 40 L67 62 Q67 70 55 70 Q43 70 43 62 Z" stroke="#9CA3AF" strokeWidth="1.5"
                    strokeDasharray="500" strokeDashoffset={inView ? 0 : 500} style={{ transition: 'stroke-dashoffset 1.3s cubic-bezier(0.4,0,0.2,1)' }} />
                  <path d="M48 40 L48 30 Q48 25 51 25 Q54 25 54 30 L54 40" stroke="#9CA3AF" strokeWidth="1.2"
                    strokeDasharray="300" strokeDashoffset={inView ? 0 : 300} style={{ transition: 'stroke-dashoffset 1s cubic-bezier(0.4,0,0.2,1) 0.4s' }} />
                  <path d="M55 39 L55 28 Q55 23 58 23 Q61 23 61 28 L61 39" stroke="#9CA3AF" strokeWidth="1.2"
                    strokeDasharray="300" strokeDashoffset={inView ? 0 : 300} style={{ transition: 'stroke-dashoffset 1s cubic-bezier(0.4,0,0.2,1) 0.4s' }} />
                  <path d="M63 40 L63 33 Q63 28 66 28 Q69 28 69 33 L69 40" stroke="#9CA3AF" strokeWidth="1.2"
                    strokeDasharray="300" strokeDashoffset={inView ? 0 : 300} style={{ transition: 'stroke-dashoffset 1s cubic-bezier(0.4,0,0.2,1) 0.4s' }} />
                  <rect x="38" y="72" width="34" height="26" rx="3" stroke="#9CA3AF" strokeWidth="1.5"
                    strokeDasharray="300" strokeDashoffset={inView ? 0 : 300} style={{ transition: 'stroke-dashoffset 1s cubic-bezier(0.4,0,0.2,1) 0.4s' }} />
                  <path d="M20 52 L23 47 L26 52 L23 57 Z" fill="#CC543A" opacity={inView ? 0.75 : 0} style={{ transition: 'opacity 0.5s ease 1s' }} />
                  <path d="M84 46 L87 41 L90 46 L87 51 Z" fill="#CC543A" opacity={inView ? 0.75 : 0} style={{ transition: 'opacity 0.5s ease 1s' }} />
                  <circle cx="26" cy="76" r="2.5" fill="#CC543A" opacity={inView ? 0.45 : 0} style={{ transition: 'opacity 0.5s ease 1s' }} />
                </svg>
              ),
            },
            {
              step: "03",
              label: "Curated",
              title: "선별합니다",
              desc: "디자인과 품질을 꼼꼼히 따졌습니다. 저렴하다고 아무거나 팔지 않습니다.",
              icon: (inView: boolean) => (
                <svg viewBox="0 0 110 110" fill="none" className="w-24 h-24 md:w-28 md:h-28">
                  <rect x="12" y="18" width="24" height="20" rx="2" stroke="#9CA3AF" strokeWidth="1.4"
                    strokeDasharray="500" strokeDashoffset={inView ? 0 : 500} style={{ transition: 'stroke-dashoffset 1.3s cubic-bezier(0.4,0,0.2,1)' }} />
                  <rect x="43" y="18" width="24" height="20" rx="2" stroke="#9CA3AF" strokeWidth="1.4"
                    strokeDasharray="500" strokeDashoffset={inView ? 0 : 500} style={{ transition: 'stroke-dashoffset 1.3s cubic-bezier(0.4,0,0.2,1)' }} />
                  <rect x="74" y="18" width="24" height="20" rx="2" stroke="#9CA3AF" strokeWidth="1.4"
                    strokeDasharray="500" strokeDashoffset={inView ? 0 : 500} style={{ transition: 'stroke-dashoffset 1.3s cubic-bezier(0.4,0,0.2,1)' }} />
                  <rect x="12" y="44" width="24" height="20" rx="2" stroke="#9CA3AF" strokeWidth="1.4"
                    strokeDasharray="500" strokeDashoffset={inView ? 0 : 500} style={{ transition: 'stroke-dashoffset 1.3s cubic-bezier(0.4,0,0.2,1)' }} />
                  <rect x="43" y="44" width="24" height="20" rx="2" stroke="#9CA3AF" strokeWidth="1.4"
                    strokeDasharray="500" strokeDashoffset={inView ? 0 : 500} style={{ transition: 'stroke-dashoffset 1.3s cubic-bezier(0.4,0,0.2,1)' }} />
                  <rect x="74" y="44" width="24" height="20" rx="2" stroke="#9CA3AF" strokeWidth="1.4"
                    strokeDasharray="500" strokeDashoffset={inView ? 0 : 500} style={{ transition: 'stroke-dashoffset 1.3s cubic-bezier(0.4,0,0.2,1)' }} />
                  <path d="M17 28 L22 33 L32 20" stroke="#CC543A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    strokeDasharray="300" strokeDashoffset={inView ? 0 : 300} style={{ transition: 'stroke-dashoffset 1s cubic-bezier(0.4,0,0.2,1) 0.4s' }} />
                  <path d="M48 54 L53 59 L63 46" stroke="#CC543A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    strokeDasharray="300" strokeDashoffset={inView ? 0 : 300} style={{ transition: 'stroke-dashoffset 1s cubic-bezier(0.4,0,0.2,1) 0.4s' }} />
                  <path d="M79 22 L96 38 M96 22 L79 38" stroke="#9CA3AF" strokeWidth="1.1" opacity="0.35" strokeLinecap="round"
                    strokeDasharray="300" strokeDashoffset={inView ? 0 : 300} style={{ transition: 'stroke-dashoffset 1s cubic-bezier(0.4,0,0.2,1) 0.4s' }} />
                  <circle cx="83" cy="52" r="9" stroke="#9CA3AF" strokeWidth="1.5"
                    strokeDasharray="300" strokeDashoffset={inView ? 0 : 300} style={{ transition: 'stroke-dashoffset 1s cubic-bezier(0.4,0,0.2,1) 0.4s' }} />
                  <line x1="89" y1="58" x2="98" y2="67" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round"
                    strokeDasharray="300" strokeDashoffset={inView ? 0 : 300} style={{ transition: 'stroke-dashoffset 1s cubic-bezier(0.4,0,0.2,1) 0.4s' }} />
                  <rect x="22" y="72" width="66" height="30" rx="2" stroke="#9CA3AF" strokeWidth="1" opacity="0.4"
                    strokeDasharray="300" strokeDashoffset={inView ? 0 : 300} style={{ transition: 'stroke-dashoffset 1s cubic-bezier(0.4,0,0.2,1) 0.4s' }} />
                  <line x1="30" y1="82" x2="80" y2="82" stroke="#9CA3AF" strokeWidth="0.8" opacity="0.35"
                    strokeDasharray="300" strokeDashoffset={inView ? 0 : 300} style={{ transition: 'stroke-dashoffset 1s cubic-bezier(0.4,0,0.2,1) 0.4s' }} />
                  <line x1="30" y1="90" x2="64" y2="90" stroke="#9CA3AF" strokeWidth="0.8" opacity="0.35"
                    strokeDasharray="300" strokeDashoffset={inView ? 0 : 300} style={{ transition: 'stroke-dashoffset 1s cubic-bezier(0.4,0,0.2,1) 0.4s' }} />
                </svg>
              ),
            },
            {
              step: "04",
              label: "Reclaimed",
              title: "새로운 기회",
              desc: "좋은 타일을 합리적인 가격에. 이것이 굿프라이스타일이 존재하는 이유입니다.",
              icon: (inView: boolean) => (
                <svg viewBox="0 0 110 110" fill="none" className="w-24 h-24 md:w-28 md:h-28">
                  <rect x="43" y="18" width="24" height="18" rx="2" stroke="#9CA3AF" strokeWidth="1.4" fill="#9CA3AF" fillOpacity="0.07"
                    strokeDasharray="500" strokeDashoffset={inView ? 0 : 500} style={{ transition: 'stroke-dashoffset 1.3s cubic-bezier(0.4,0,0.2,1)' }} />
                  <rect x="26" y="40" width="24" height="18" rx="2" stroke="#9CA3AF" strokeWidth="1.4" fill="#9CA3AF" fillOpacity="0.07"
                    strokeDasharray="500" strokeDashoffset={inView ? 0 : 500} style={{ transition: 'stroke-dashoffset 1.3s cubic-bezier(0.4,0,0.2,1)' }} />
                  <rect x="60" y="40" width="24" height="18" rx="2" stroke="#9CA3AF" strokeWidth="1.4" fill="#9CA3AF" fillOpacity="0.07"
                    strokeDasharray="500" strokeDashoffset={inView ? 0 : 500} style={{ transition: 'stroke-dashoffset 1.3s cubic-bezier(0.4,0,0.2,1)' }} />
                  <rect x="8" y="62" width="24" height="18" rx="2" stroke="#9CA3AF" strokeWidth="1.4" fill="#9CA3AF" fillOpacity="0.07"
                    strokeDasharray="500" strokeDashoffset={inView ? 0 : 500} style={{ transition: 'stroke-dashoffset 1.3s cubic-bezier(0.4,0,0.2,1)' }} />
                  <rect x="43" y="62" width="24" height="18" rx="2" stroke="#9CA3AF" strokeWidth="1.4" fill="#9CA3AF" fillOpacity="0.07"
                    strokeDasharray="500" strokeDashoffset={inView ? 0 : 500} style={{ transition: 'stroke-dashoffset 1.3s cubic-bezier(0.4,0,0.2,1)' }} />
                  <rect x="78" y="62" width="24" height="18" rx="2" stroke="#9CA3AF" strokeWidth="1.4" fill="#9CA3AF" fillOpacity="0.07"
                    strokeDasharray="500" strokeDashoffset={inView ? 0 : 500} style={{ transition: 'stroke-dashoffset 1.3s cubic-bezier(0.4,0,0.2,1)' }} />
                  <circle cx="50" cy="26" r="2.2" fill="#CC543A" opacity={inView ? 1 : 0} style={{ transition: 'opacity 0.5s ease 1s' }} />
                  <circle cx="60" cy="26" r="2.2" fill="#CC543A" opacity={inView ? 1 : 0} style={{ transition: 'opacity 0.5s ease 1s' }} />
                  <path d="M48 31 Q55 35 62 31" stroke="#CC543A" strokeWidth="1.5" fill="none" strokeLinecap="round"
                    opacity={inView ? 1 : 0} style={{ transition: 'opacity 0.5s ease 1s' }} />
                  <line x1="4" y1="82" x2="106" y2="82" stroke="#9CA3AF" strokeWidth="0.8" opacity="0.2"
                    strokeDasharray="500" strokeDashoffset={inView ? 0 : 500} style={{ transition: 'stroke-dashoffset 1.3s cubic-bezier(0.4,0,0.2,1)' }} />
                  <path d="M72 10 L96 10 L96 26 L72 26 Z" stroke="#CC543A" strokeWidth="1.3"
                    strokeDasharray="300" strokeDashoffset={inView ? 0 : 300} style={{ transition: 'stroke-dashoffset 1s cubic-bezier(0.4,0,0.2,1) 0.4s' }} />
                  <circle cx="77" cy="16" r="1.8" fill="#CC543A" opacity={inView ? 1 : 0} style={{ transition: 'opacity 0.5s ease 1s' }} />
                  <text x="76" y="25" fill="#CC543A" fontSize="8" fontFamily="sans-serif" fontWeight="700"
                    opacity={inView ? 1 : 0} style={{ transition: 'opacity 0.5s ease 1s' }}>₩</text>
                  <line x1="72" y1="18" x2="67" y2="18" stroke="#CC543A" strokeWidth="0.9" opacity="0.7"
                    strokeDasharray="300" strokeDashoffset={inView ? 0 : 300} style={{ transition: 'stroke-dashoffset 1s cubic-bezier(0.4,0,0.2,1) 0.4s' }} />
                </svg>
              ),
            },
            {
              step: "05",
              label: "Your Choice",
              title: "당신의 안목으로 완성됩니다",
              desc: "이 프로젝트에 동참하세요. 폐기물을 줄이고, 경제적 혜택을 얻고, 좋은 취향을 나눕니다.",
              icon: (_inView: boolean) => (
                <svg viewBox="0 0 110 110" fill="none" className="w-24 h-24 md:w-28 md:h-28">
                  <circle cx="55" cy="22" r="10" stroke="#CC543A" strokeWidth="1.5" fill="none" />
                  <path d="M35 55 Q35 38 55 38 Q75 38 75 55 L75 60 L35 60 Z" stroke="#CC543A" strokeWidth="1.5" fill="none" />
                  <path d="M47 72 Q47 66 55 66 Q63 66 63 72 Q63 80 55 88 Q47 80 47 72 Z" stroke="#CC543A" strokeWidth="1.3" fill="none" />
                  <path d="M22 78 Q18 68 28 65" stroke="#9CA3AF" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                  <path d="M28 65 L24 62 L31 63" stroke="#9CA3AF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.7" />
                  <path d="M88 78 Q92 68 82 65" stroke="#9CA3AF" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                  <path d="M82 65 L86 62 L79 63" stroke="#9CA3AF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.7" />
                  <path d="M20 45 L23 40 L26 45 L23 50 Z" fill="#CC543A" opacity="0.6" />
                  <path d="M84 40 L87 35 L90 40 L87 45 Z" fill="#CC543A" opacity="0.6" />
                  <circle cx="15" cy="60" r="2" fill="#CC543A" opacity="0.35" />
                  <circle cx="95" cy="55" r="1.5" fill="#CC543A" opacity="0.3" />
                </svg>
              ),
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.15 }}
              className="bg-white/[0.03] rounded-2xl p-8 md:p-9 flex flex-col hover:bg-white/[0.06] transition-colors duration-300 group"
            >
              <div className="h-32 md:h-36 flex items-center justify-center mb-7 overflow-hidden rounded-xl">
                {card.icon(true)}
              </div>
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-brand mb-2.5">{card.step} · {card.label}</span>
              <h4 className="text-lg md:text-xl font-black text-bg mb-2.5 tracking-tight">{card.title}</h4>
              <p className="text-[13px] font-light text-bg/40 leading-[1.85]">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* SECTION 4. TRUST (BRUSH QUOTE) */}
      <Section id="trust" className="text-center overflow-hidden">
        <div className="max-w-5xl mx-auto py-12 md:py-20 relative">
          {/* Decorative Brush Stroke Shadow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] md:text-[20rem] opacity-[0.03] font-brush whitespace-nowrap pointer-events-none">
            Trust Quality
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] opacity-40 mb-8 md:mb-12 block">— 전문가들의 리얼 보이스 —</span>
            <h2 className="font-sans text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none text-dark mb-8 md:mb-12">
              " 이 가격 <span className="text-brand underline decoration-4 underline-offset-8">정말 맞나요?</span> "
            </h2>
            <div className="max-w-3xl mx-auto space-y-6 md:space-y-8 text-lg md:text-2xl font-medium opacity-60 leading-relaxed italic px-4">
              <p>우리는 압니다. <br /> 싸면 의심부터 하게 된다는 것을.</p>
              <p>우리는 타일의 품질을 낮춘 것이 아니라, 유통 과정에서 잠들어 있던 '재고'를<br className="hidden md:block" />디자이너의 프로젝트로 순환시키는 '합리적 구조'를 만들었을 뿐입니다.</p>
              <div className="inline-block px-6 py-3 md:px-8 md:py-4 bg-dark text-bg font-black text-xs md:text-sm uppercase tracking-widest mt-8 md:mt-12">
                Structure Defines Price
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* SECTION 3. BENEFITS (GRID DIAGRAM) */}
      <Section dark className="!py-24 md:!py-48">
        <div className="grid lg:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="lg:col-span-4">
            <h2 className="text-5xl md:text-8xl font-black -ml-1 tracking-tighter uppercase mb-4 md:mb-6">Price.</h2>
            <h2 className="text-5xl md:text-8xl font-black -ml-1 tracking-tighter text-brand italic uppercase mb-10 md:mb-16 underline decoration-brand/30 underline-offset-16">Verified.</h2>
            <p className="text-lg md:text-xl font-medium opacity-50 leading-relaxed max-w-sm">우리의 모든 타일은 4단계의 검증 프로세스를 거쳐 디자이너의 현장에 투입될 준비를 마칩니다.</p>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
            {[
              { title: "600각 1만원~", desc: "국내 최저가 수준의 파격적 가격대 형성", icon: <Zap /> },
              { title: "원산지 투명성", desc: "숨기지 않는 정직한 원산지 표기와 품질 등급", icon: <Globe /> },
              { title: "칩 샘플 즉시 지원", desc: "디자인 보드 구성을 위한 현장 샘플 비치", icon: <Layout /> },
              { title: "전문가 실시간 매칭", desc: "기술 자문이 필요한 즉시 현장 전문가 연결", icon: <ShieldCheck /> }
            ].map((item, i) => (
              <div key={i} className="p-8 md:p-12 bg-dark hover:bg-white/5 transition-all group">
                <div className="flex justify-between items-start mb-8 md:mb-12">
                  <div className="text-brand opacity-60 group-hover:opacity-100 transition-opacity">
                    {React.cloneElement(item.icon as React.ReactElement, { size: 32 })}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest opacity-30 font-black">Feature 0{i + 1}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black mb-3 md:mb-4">{item.title}</h3>
                <p className="text-base md:text-lg opacity-40 font-bold group-hover:opacity-60 transition-opacity">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* SECTION 6. GUIDE (SCHEMATIC) */}
      <Section id="guide" className="bg-surface/50 border-t border-dark/10">
        <div className="grid lg:grid-cols-12 gap-16 md:gap-20">
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 md:mb-12">무인 쇼룸<br /><span className="text-brand">이용 가이드</span></h2>
            <div className="space-y-10 md:space-y-16 py-4 md:py-8">
              {[
                { title: "자유로운 관람", desc: "눈치 보지 말고 필요한 만큼 찍고 확인하세요." },
                { title: "QR 코드 구매/문의", desc: "네이버 톡톡으로 즉시 상담과 재고 파악 가능." },
                { title: "담당자 호출 시스템", desc: "깊이 있는 상담은 바로 옆 전시장 직원을 불러주세요." }
              ].map((step, i) => (
                <div key={i} className="relative pl-12 md:pl-16 group">
                  <div className="absolute left-0 top-0 w-8 h-8 md:w-10 md:h-10 schematic-border flex items-center justify-center font-black text-base md:text-lg group-hover:bg-dark group-hover:text-bg transition-all">
                    {i + 1}
                  </div>
                  <h4 className="text-xl md:text-2xl font-black mb-2 md:mb-3">{step.title}</h4>
                  <p className="text-base md:text-lg opacity-60 font-medium">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 bg-white p-8 md:p-20 schematic-border relative overflow-hidden flex flex-col justify-center">
            <div className="absolute -top-20 -right-20 opacity-[0.02]">
              <Database size={400} />
            </div>
            <div className="relative z-10 space-y-8 md:space-y-12">
               <div className="inline-block px-4 py-1.5 border-2 border-brand text-brand font-black text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em]">Special Offer</div>
               <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.1] md:leading-none">SNS 할인 혜택<br />박스당 300원 더.</h3>
               <p className="text-lg md:text-2xl font-medium opacity-50 max-w-md">방문 인증샷 하나면 <br /> 프로젝트 예산이 더 가벼워집니다.</p>
               <div className="h-px w-full bg-dark opacity-10"></div>
               <div className="flex flex-wrap gap-6 md:gap-12 text-[10px] md:text-sm font-black uppercase tracking-widest opacity-40">
                  <div className="flex items-center gap-2 md:gap-3"><MapPin size={16} /> Nonhyeon-dong</div>
                  <div className="flex items-center gap-2 md:gap-3"><Briefcase size={16} /> Bella Ceramic Network</div>
               </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 7. CTA */}
      <Section id="cta" className="text-center bg-bg relative overflow-hidden !py-24 md:!py-64">
        <div className="max-w-5xl mx-auto relative z-10 px-4 md:px-8">
          <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-black mb-10 md:mb-16 tracking-tight leading-[1.1] md:leading-tight">
              논현동에 오셨다면,<br />
              <span className="text-brand">무조건 들러야 할 곳.</span>
            </h2>
            <p className="text-lg md:text-3xl lg:text-4xl font-medium opacity-70 mb-10 md:mb-20 leading-relaxed max-w-3xl mx-auto">
              5분이면 충분합니다. <br /> 실물을 확인하고
              <span className="text-dark font-black underline decoration-brand/30 decoration-8 underline-offset-8 px-1"> 굿프라이스 가격에 확신을 얻으세요.</span>
            </p>
            <div className="flex flex-col gap-5 md:gap-10 items-center">
              <a 
                href={"https://naver.me/F0znYoRG"} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cta-primary w-full max-w-[320px] sm:max-w-md md:max-w-xl flex items-center justify-center gap-4 md:gap-6 group"
              >
                <MapPin className="w-6 h-6 md:w-8 md:h-8" />
                <span className="text-base sm:text-lg md:text-2xl">방문 예약 하기</span>
                <ExternalLink className="w-4 h-4 md:w-5 md:h-5 opacity-40 shrink-0" />
              </a>
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-full max-w-[320px] sm:max-w-md md:max-w-xl">
                <button className="flex-1 bg-white border-2 md:border-4 border-dark text-dark px-6 py-4 md:py-6 rounded-full font-black text-base md:text-lg lg:text-xl hover:bg-dark hover:text-bg transition-all flex items-center justify-center gap-4">
                  <Phone className="w-5 h-5 md:w-6 md:h-6" />
                  <span>문의하기 02-517-8602</span>
                </button>
              </div>
            </div>
            <div className="mt-12 md:mt-24 flex flex-wrap justify-center gap-6 md:gap-12 text-[9px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.5em] opacity-40 px-6">
              <span>Verified Inventory</span>
              <span className="hidden sm:inline">•</span>
              <span>Private Showroom</span>
              <span className="hidden sm:inline">•</span>
              <span>Wholesale Pricing</span>
            </div>
          </motion.div>
        </div>
        {/* Large Decorative Text background */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[25vw] font-black opacity-[0.02] -mb-10 pointer-events-none uppercase italic leading-none whitespace-nowrap">
          Good Price Tile
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="py-20 px-12 md:px-24 border-t border-dark/10 flex flex-col md:flex-row justify-between items-center gap-12 bg-bg text-dark font-black uppercase text-[10px] tracking-[0.3em]">
        <div className="flex items-center gap-4">
          {/* Logo removed */}
        </div>
        <div className="flex flex-wrap justify-center gap-12 opacity-50">
          <a href={"https://instagram.com/_bellaceramic"} target="_blank" rel="noopener noreferrer" className="hover:text-brand hover:opacity-100 transition-all">Instagram</a>
          <a href={"https://blog.naver.com/bellaceramic1"} target="_blank" rel="noopener noreferrer" className="hover:text-brand hover:opacity-100 transition-all">Blog</a>
          <a href="https://bellaceramic.co.kr" target="_blank" rel="noopener noreferrer" className="hover:text-brand hover:opacity-100 transition-all">Website</a>
          <a href={"https://naver.me/F0znYoRG"} target="_blank" rel="noopener noreferrer" className="hover:text-brand hover:opacity-100 transition-all">Directions</a>
        </div>
        <div className="opacity-30">
          © 2024 All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

// MapPin helper if not correctly working from lucide (sometimes vite has issues with direct SVG components in loops)
// const MapPin = ({ size = 20, className = "" }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>
// );
