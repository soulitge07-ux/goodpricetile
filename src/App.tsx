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

// Interactive Storytelling Hero Component
const InteractiveHero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div 
      className="relative w-full aspect-square schematic-border bg-dark/5 overflow-hidden cursor-none group"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Story Layers */}
      <div className="absolute inset-0 p-8 md:p-12 flex items-center justify-center">
        {/* State 1: Forgotten (Always there but dimmed) */}
        <div className="relative w-full h-full opacity-20">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Spider Webs */}
            <path d="M0 0 L40 40 M0 20 L20 40 M20 0 L40 20" stroke="currentColor" strokeWidth="0.5" className="text-dark" strokeDasharray="2 2" />
            <path d="M160 0 L200 40 M180 0 L200 20 M160 20 L180 40" stroke="currentColor" strokeWidth="0.5" className="text-dark" strokeDasharray="2 2" />
            
            {/* Background Tiles (Dull) */}
            <rect x="70" y="70" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="1" className="text-dark" />
            <text x="100" y="150" textAnchor="middle" className="text-[6px] font-black uppercase opacity-20">Forgotten Gem</text>
          </svg>
        </div>
      </div>

      {/* State 2: Reclaimed (Revealed by Spotlight) */}
      <div 
        className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          WebkitMaskImage: `radial-gradient(circle 120px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
          maskImage: `radial-gradient(circle 120px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
        }}
      >
        <div className="absolute inset-0 bg-brand/10 p-8 md:p-12 flex items-center justify-center">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Sparkles */}
            <motion.path 
              animate={{ opacity: [0, 1, 0] }} 
              transition={{ duration: 2, repeat: Infinity }}
              d="M150 50 L155 45 M150 45 L155 50" stroke="#CC543A" strokeWidth="1" 
            />
            <motion.path 
              animate={{ opacity: [0, 1, 0] }} 
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              d="M40 140 L45 135 M40 135 L45 140" stroke="#CC543A" strokeWidth="1" 
            />

            {/* Reclaimed Tile Character */}
            <g transform="translate(70, 70)">
              <rect width="60" height="60" fill="white" stroke="#CC543A" strokeWidth="2" className="shadow-2xl" />
              
              {/* Eyes that follow mouse */}
              <g transform={`translate(${30 + (mousePos.x - mousePos.x/1.1)/20}, ${25 + (mousePos.y - mousePos.y/1.1)/20})`}>
                <circle cx="-10" cy="0" r="3" fill="#141414" />
                <circle cx="10" cy="0" r="3" fill="#141414" />
                {/* Blinking effect */}
                <motion.rect 
                  animate={{ scaleY: [1, 0, 1] }} 
                  transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 4 }}
                  x="-14" y="-4" width="8" height="8" fill="#F5E9DC"
                />
                <motion.rect 
                  animate={{ scaleY: [1, 0, 1] }} 
                  transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 4 }}
                  x="6" y="-4" width="8" height="8" fill="#F5E9DC"
                />
              </g>
              
              {/* Happy Mouth */}
              <path d="M22 40 Q30 46 38 40" fill="none" stroke="#141414" strokeWidth="2" strokeLinecap="round" />
            </g>
            
            <text x="100" y="160" textAnchor="middle" className="text-[8px] font-black uppercase text-brand tracking-widest">Reclaimed Quality</text>
          </svg>
        </div>
      </div>

      {/* Cursor Spotlight Frame */}
      <motion.div 
        animate={{ x: mousePos.x - 60, y: mousePos.y - 60, opacity: isHovered ? 1 : 0 }}
        className="absolute top-0 left-0 w-[120px] h-[120px] border-2 border-brand rounded-full z-30 pointer-events-none flex items-center justify-center"
      >
        <div className="w-1 h-1 bg-brand rounded-full"></div>
      </motion.div>

      {/* Instruction text (Visible when not hovered) */}
      <div className={`absolute bottom-8 left-0 w-full text-center transition-opacity duration-300 pointer-events-none ${isHovered ? 'opacity-0' : 'opacity-40'}`}>
        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Hover to find hidden gems</span>
      </div>
    </div>
  );
};

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
    <nav className="fixed top-0 left-0 w-full z-50 p-8 flex justify-between items-center bg-bg/80 backdrop-blur-md">
      <div className="flex items-center gap-3 cursor-pointer">
        <div className="w-10 h-10 schematic-border flex items-center justify-center p-2 bg-dark text-bg">
          <Layers className="w-full h-full" />
        </div>
        <div className="flex flex-col -space-y-1">
          <span className="font-black uppercase tracking-tighter text-2xl">GoodPriceTile</span>
          <span className="text-[9px] font-bold tracking-[0.2em] opacity-40 uppercase">Nonhyeon Showroom</span>
        </div>
      </div>
      
      <div className="hidden md:flex items-center gap-12 text-[11px] font-black uppercase tracking-[0.2em] opacity-60">
        <a href="#about" className="hover:text-brand hover:opacity-100 transition-all">About</a>
        <a href="#trust" className="hover:text-brand hover:opacity-100 transition-all">Trust</a>
        <a href="#guide" className="hover:text-brand hover:opacity-100 transition-all">Guide</a>
        <a 
          href={import.meta.env.VITE_RESERVATION_URL || "#"} 
          target="_blank" 
          rel="noopener noreferrer" 
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
            <div className="flex justify-between items-center mb-16">
              <span className="font-black uppercase tracking-tighter text-2xl">GoodPriceTile</span>
              <button onClick={() => setIsOpen(false)} className="p-4 schematic-border"><X /></button>
            </div>
            <div className="flex flex-col gap-8">
              {['About', 'Trust', 'Guide', 'Reservation'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-6xl font-black uppercase tracking-tighter hover:text-brand transition-all">{item}</a>
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
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-brand mb-6 md:mb-8 block">Verified Stock Tile Showroom</span>
              <h1 className="heading-giant mb-8 md:mb-12">
                예산 안에서<br />좋은 타일은<br /><span className="text-brand">이미 여기에.</span>
              </h1>
              <p className="text-xl md:text-3xl font-medium tracking-tight opacity-70 mb-10 md:mb-16 max-w-2xl leading-relaxed">
                600각 박스 1만원부터 — 벨라세라믹이 20년간 구축한 네트워크가 찾아낸 진짜 가성비 쇼룸.<br /> 
                <span className="text-dark font-bold underline decoration-brand/30 decoration-4 underline-offset-4">인테리어 전문가를 위한 프라이빗 프로젝트 입니다.</span>
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6">
                <a 
                  href={import.meta.env.VITE_RESERVATION_URL || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer" 
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
          <div className="lg:col-span-5 hidden lg:block">
            <InteractiveHero />
          </div>
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
              " 이 가격에 <span className="text-brand underline decoration-4 underline-offset-8">이 제품이요?</span> "
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
                href={import.meta.env.VITE_NAVER_MAP_URL || "#"} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cta-primary w-full max-w-[320px] sm:max-w-md md:max-w-xl flex items-center justify-center gap-4 md:gap-6 group"
              >
                <MapPin className="w-6 h-6 md:w-8 md:h-8" />
                <span className="text-base sm:text-lg md:text-2xl">네이버 지도로 위치 확인 현장 방문</span>
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
          <div className="w-8 h-8 bg-dark text-bg flex items-center justify-center p-1">G</div>
          <span>Good Price Tile @ Bella Ceramic</span>
        </div>
        <div className="flex flex-wrap justify-center gap-12 opacity-50">
          <a href={import.meta.env.VITE_INSTAGRAM_URL || "#"} target="_blank" rel="noopener noreferrer" className="hover:text-brand hover:opacity-100 transition-all">Instagram</a>
          <a href={import.meta.env.VITE_BLOG_URL || "#"} target="_blank" rel="noopener noreferrer" className="hover:text-brand hover:opacity-100 transition-all">Blog</a>
          <a href="#" className="hover:text-brand hover:opacity-100 transition-all">About Us</a>
          <a href={import.meta.env.VITE_NAVER_MAP_URL || "#"} target="_blank" rel="noopener noreferrer" className="hover:text-brand hover:opacity-100 transition-all">Directions</a>
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
