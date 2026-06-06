import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { u as useLanguage } from "./router-DDq2cRNl.mjs";
import { u as useScroll, a as useTransform, m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const logoPrincipal = "/assets/logo1principal-ClIfHp36.png";
function Nav() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 120], ["rgba(18,18,18,0)", "rgba(18,18,18,0.75)"]);
  const blur = useTransform(scrollY, [0, 120], ["blur(0px)", "blur(14px)"]);
  const { language, setLanguage, t } = useLanguage();
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };
  const navLinks = [
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.artisans, href: "#artisans" },
    { label: t.nav.gallery, href: "#gallery" },
    { label: t.nav.visit, href: "#space" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.nav,
    {
      style: { backgroundColor: bg, backdropFilter: blur },
      className: "fixed top-0 inset-x-0 z-50 border-b border-white/0",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1600px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#top", className: "flex items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: logoPrincipal,
            alt: "Lifestyle Barber & Beauty",
            className: "h-10 md:h-12 w-auto object-contain"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:flex gap-10 font-mono text-[10px] uppercase tracking-[0.25em] text-champagne/70", children: navLinks.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: link.href, className: "hover:text-gold transition-colors", children: link.label }, link.label)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: toggleLanguage,
              className: "font-mono text-[10px] md:text-xs uppercase tracking-widest text-champagne/70 hover:text-gold transition-colors flex items-center gap-1",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: language === "en" ? "text-gold font-bold" : "", children: "EN" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-champagne/30", children: "|" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: language === "es" ? "text-gold font-bold" : "", children: "ES" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#book",
              className: "bg-gold text-charcoal px-4 md:px-5 py-2 md:py-2.5 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em] hover:bg-champagne transition-colors",
              children: t.nav.book
            }
          )
        ] })
      ] })
    }
  );
}
const barberia4 = "/assets/barberia4-qf7ag7vD.jpg";
const portraitBarber = "/assets/fade5-CsMoiu34.jpg";
const reel4 = "/assets/mujer1-CUI8GTNP.JPG";
const reel6 = "/assets/fade6-DcqwxqAs.MOV";
const g2 = "/assets/mujer4-Dzhu5n90.JPG";
const g3 = "/assets/fade2-D9UMAtim.jpg";
const g4 = "/assets/mujer5-U4wrUFQ1.JPG";
const g5 = "/assets/fade3-CMqBJ_WJ.JPG";
const reel5 = "/assets/facialvideo2-D46yWUuc.mov";
const reel1 = "/assets/fade9-TQCkW4Ze.MOV";
const reel2 = "/assets/mujer6-D5fz0w_y.JPG";
const reel3 = "/assets/fade4-CPvUoarH.jpg";
const barberia1 = "/assets/barberia1-Dk--rgIX.jpg";
const barberia2 = "/assets/barberia2-BXvCMMuB.jpg";
function Media({
  src,
  alt,
  className,
  loading
}) {
  if (typeof src === "string" && (src.toLowerCase().endsWith(".mov") || src.toLowerCase().endsWith(".mp4"))) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("video", { src, className, autoPlay: true, loop: true, muted: true, playsInline: true });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt, className, loading });
}
const fadeUp = {
  initial: {
    opacity: 0,
    y: 40
  },
  whileInView: {
    opacity: 1,
    y: 0
  },
  viewport: {
    once: true,
    margin: "-80px"
  },
  transition: {
    duration: 0.9,
    ease: [0.16, 1, 0.3, 1]
  }
};
function Hero() {
  const ref = reactExports.useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
  const {
    t
  } = useLanguage();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", ref, className: "relative min-h-screen w-full overflow-hidden flex flex-col justify-end p-6 md:p-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { style: {
      y,
      scale
    }, className: "absolute inset-0 z-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Media, { src: barberia4, alt: "Luxury barbershop interior", className: "w-full h-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/60" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grain opacity-60 mix-blend-overlay" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { style: {
      opacity
    }, className: "relative z-10 max-w-[1600px] w-full mx-auto pb-12 md:pb-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.8,
        delay: 0.1
      }, className: "font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-gold mb-8", children: t.hero.location }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-12 gap-8 items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          y: 40
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 1,
          delay: 0.2,
          ease: [0.16, 1, 0.3, 1]
        }, className: "md:col-span-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-[18vw] md:text-[10vw] leading-[0.85] text-champagne italic text-balance", children: [
          t.hero.title1,
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-gold", children: t.hero.title2 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-sans not-italic font-black uppercase text-[7vw] md:text-[3.5vw] tracking-tighter text-rose/40 block mt-2", children: t.hero.title3 })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 40
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 1,
          delay: 0.45,
          ease: [0.16, 1, 0.3, 1]
        }, className: "md:col-span-4 flex flex-col gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-champagne/70 max-w-sm text-base md:text-lg leading-relaxed", children: t.hero.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-[10px] uppercase tracking-widest text-champagne/60 leading-tight", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gold text-sm font-bold", children: "★ 4.6" }),
            t.hero.reviews
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#book", className: "bg-gold text-charcoal px-6 py-4 font-mono text-[10px] uppercase tracking-[0.25em] text-center hover:bg-champagne transition-all gold-glow", children: t.hero.btnBook }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#services", className: "border border-champagne/30 text-champagne px-6 py-4 font-mono text-[10px] uppercase tracking-[0.25em] text-center hover:border-gold hover:text-gold transition-all", children: t.hero.btnExplore })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: {
      y: [0, 10, 0]
    }, transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }, className: "absolute bottom-6 left-1/2 -translate-x-1/2 z-10 font-mono text-[9px] uppercase tracking-[0.3em] text-champagne/40", children: t.hero.scroll })
  ] });
}
function Marquee() {
  const {
    t
  } = useLanguage();
  const items = t.marquee;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gold py-5 overflow-hidden border-y border-charcoal/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex animate-marquee whitespace-nowrap font-mono text-[11px] md:text-sm uppercase tracking-[0.4em] text-charcoal/80", children: [...Array(4)].map((_, k) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-10 pr-10", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: it }, i)) }, k)) }) });
}
function Space() {
  const {
    t
  } = useLanguage();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "space", className: "bg-ink text-champagne py-24 md:py-40 px-6 md:px-10 relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-12 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fadeUp, className: "relative z-40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-gold text-[10px] uppercase tracking-[0.4em] mb-6", children: t.space.subtitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-7xl text-champagne italic leading-[0.95] mb-8", children: [
        t.space.title1,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold block mt-2", children: t.space.title2 })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-champagne/60 text-lg max-w-md leading-relaxed", children: t.space.desc })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[500px] md:h-[700px] w-full flex items-center justify-center mt-10 lg:mt-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        y: 50,
        rotate: -5
      }, whileInView: {
        opacity: 1,
        y: 0,
        rotate: -10
      }, transition: {
        duration: 1,
        ease: "easeOut"
      }, viewport: {
        once: true
      }, className: "absolute top-0 left-0 w-3/5 md:w-1/2 aspect-[4/5] z-10 shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Media, { src: barberia1, className: "w-full h-full object-cover border-[8px] border-charcoal" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        y: 50,
        x: 50,
        rotate: 5
      }, whileInView: {
        opacity: 1,
        y: 0,
        x: 0,
        rotate: 5
      }, transition: {
        duration: 1,
        delay: 0.2,
        ease: "easeOut"
      }, viewport: {
        once: true
      }, className: "absolute bottom-0 right-0 w-3/4 md:w-3/5 aspect-[4/3] z-20 shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Media, { src: barberia4, className: "w-full h-full object-cover border-[8px] border-charcoal" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        y: -50,
        x: 20,
        rotate: 15
      }, whileInView: {
        opacity: 1,
        y: 0,
        x: 0,
        rotate: 15
      }, transition: {
        duration: 1,
        delay: 0.4,
        ease: "easeOut"
      }, viewport: {
        once: true
      }, className: "absolute top-1/4 right-5 w-2/5 aspect-square z-30 shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Media, { src: barberia2, className: "w-full h-full object-cover border-[8px] border-charcoal" }) })
    ] })
  ] }) });
}
function Philosophy() {
  const {
    t
  } = useLanguage();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "experience", className: "bg-champagne text-ink py-24 md:py-40 px-6 md:px-10 overflow-hidden relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-12 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fadeUp, className: "lg:col-span-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-gold text-[10px] uppercase tracking-[0.4em] mb-6", children: t.philosophy.subtitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-7xl text-ink leading-[0.95] mb-8 italic", children: [
        t.philosophy.title1,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "not-italic font-sans font-black uppercase text-3xl md:text-5xl tracking-tighter", children: t.philosophy.title2 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        t.philosophy.title3,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: t.philosophy.title4 }),
        t.philosophy.title5
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ink/60 text-lg max-w-md leading-relaxed mb-12", children: t.philosophy.desc }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-6 border-t border-ink/10 pt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-4xl text-gold", children: t.philosophy.stat1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[9px] uppercase tracking-widest text-ink/50 mt-2", children: t.philosophy.stat1Desc })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-4xl text-gold", children: t.philosophy.stat2 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[9px] uppercase tracking-widest text-ink/50 mt-2", children: t.philosophy.stat2Desc })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-4xl text-gold", children: t.philosophy.stat3 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[9px] uppercase tracking-widest text-ink/50 mt-2", children: t.philosophy.stat3Desc })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 relative h-[500px] md:h-[700px] flex items-center justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 60,
        rotate: 8
      }, whileInView: {
        opacity: 1,
        y: 0,
        rotate: 3
      }, viewport: {
        once: true
      }, transition: {
        duration: 1.1,
        ease: [0.16, 1, 0.3, 1]
      }, className: "absolute top-0 right-0 w-2/3 aspect-[4/5] z-20 shadow-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Media, { src: portraitBarber, alt: "Barber craft", className: "w-full h-full object-cover border-[6px] border-champagne", loading: "lazy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-3 -left-3 bg-charcoal text-gold font-mono text-[9px] uppercase tracking-widest px-3 py-1.5", children: t.philosophy.label1 })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 60,
        rotate: -8
      }, whileInView: {
        opacity: 1,
        y: 0,
        rotate: -4
      }, viewport: {
        once: true
      }, transition: {
        duration: 1.1,
        delay: 0.2,
        ease: [0.16, 1, 0.3, 1]
      }, className: "absolute bottom-0 left-0 w-3/5 aspect-[4/5] z-10 shadow-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Media, { src: reel4, alt: "Beauty couture", className: "w-full h-full object-cover border-[6px] border-champagne", loading: "lazy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-3 -right-3 bg-rose text-ink font-mono text-[9px] uppercase tracking-widest px-3 py-1.5", children: t.philosophy.label2 })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: {
        y: [-10, 10, -10]
      }, transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }, className: "absolute top-1/2 left-1/2 -translate-x-1/2 size-32 rounded-full bg-gold/20 blur-3xl pointer-events-none" })
    ] })
  ] }) });
}
function ServiceSplit() {
  const {
    t
  } = useLanguage();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "services", className: "grid md:grid-cols-2 min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fadeUp, className: "bg-charcoal text-champagne p-10 md:p-16 lg:p-20 flex flex-col justify-between min-h-[600px] relative overflow-hidden group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-32 -right-32 size-96 bg-gold/10 blur-3xl rounded-full pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-gold text-[10px] uppercase tracking-[0.4em] mb-6", children: t.services.barberSubtitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display italic text-gold text-5xl md:text-6xl mb-12", children: t.services.barberTitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-10", children: t.services.barberCategories.map((category) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-mono text-champagne/50 text-[10px] uppercase tracking-widest", children: category.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-white/5" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4", children: category.items.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between items-end group/item cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-sans font-bold uppercase text-sm md:text-lg text-champagne group-hover/item:text-gold group-hover/item:translate-x-1 transition-all", children: s.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-gold text-[10px] md:text-xs pb-1 whitespace-nowrap ml-4", children: s.price })
          ] }, s.name)) })
        ] }, category.title)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mt-16 self-start border border-gold text-gold px-8 py-3.5 font-mono text-[10px] uppercase tracking-[0.25em] hover:bg-gold hover:text-charcoal transition-all", children: t.services.barberMenu })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fadeUp, className: "bg-rose text-ink p-10 md:p-16 lg:p-20 flex flex-col justify-between min-h-[600px] relative overflow-hidden group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-32 -left-32 size-96 bg-gold/20 blur-3xl rounded-full pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-espresso text-[10px] uppercase tracking-[0.4em] mb-6", children: t.services.beautySubtitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display italic text-espresso text-5xl md:text-6xl mb-12", children: t.services.beautyTitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-10", children: t.services.beautyCategories.map((category) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-mono text-ink/50 text-[10px] uppercase tracking-widest", children: category.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-ink/10" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4", children: category.items.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between items-end group/item cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-sans font-bold uppercase text-sm md:text-lg text-ink group-hover/item:text-espresso group-hover/item:translate-x-1 transition-all", children: s.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-espresso text-[10px] md:text-xs pb-1 whitespace-nowrap ml-4", children: s.price })
          ] }, s.name)) })
        ] }, category.title)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mt-16 self-start border border-espresso text-espresso px-8 py-3.5 font-mono text-[10px] uppercase tracking-[0.25em] hover:bg-espresso hover:text-rose transition-all", children: t.services.beautyMenu })
    ] })
  ] });
}
function Team() {
  const {
    t
  } = useLanguage();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "artisans", className: "bg-charcoal py-24 md:py-32 overflow-hidden relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1600px] mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fadeUp, className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-gold text-[10px] uppercase tracking-[0.4em] mb-4", children: t.team.subtitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-7xl text-champagne italic leading-[0.95] mb-8", children: [
        t.team.title1,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: t.team.title2 })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 text-champagne/70 text-lg leading-relaxed", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t.team.p1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t.team.p2 })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center lg:justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 60
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }, className: "w-full max-w-sm mt-10 lg:mt-0 p-8 md:p-10 bg-espresso/30 border border-white/5 hover:border-gold/20 transition-all", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block font-mono text-[10px] uppercase tracking-widest text-gold bg-charcoal/80 px-3 py-1.5 border border-gold/20 mb-8", children: t.team.badge }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-5xl md:text-6xl text-champagne italic mb-6", children: t.team.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center border-t border-white/10 pt-6 mt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-[0.2em] text-gold font-bold", children: t.team.role }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-widest text-champagne/40", children: t.team.founder })
      ] })
    ] }) })
  ] }) });
}
function Gallery() {
  const {
    t
  } = useLanguage();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "gallery", className: "bg-charcoal py-24 md:py-32 px-6 md:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1600px] mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fadeUp, className: "mb-16 max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-gold text-[10px] uppercase tracking-[0.4em] mb-4", children: t.gallery.subtitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-7xl text-champagne italic leading-[0.9]", children: [
        t.gallery.title1,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: t.gallery.title2 })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-3 md:gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { ...fadeUp, className: "col-span-6 md:col-span-4 aspect-[3/4] overflow-hidden group", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Media, { src: reel6, alt: t.gallery.alt1, className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105", loading: "lazy" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { ...fadeUp, className: "col-span-6 md:col-span-5 aspect-[4/3] mt-0 md:mt-16 overflow-hidden group", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Media, { src: g3, alt: t.gallery.alt2, className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105", loading: "lazy" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { ...fadeUp, className: "col-span-12 md:col-span-3 aspect-square md:aspect-[3/5] overflow-hidden group", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Media, { src: g2, alt: t.gallery.alt3, className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105", loading: "lazy" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { ...fadeUp, className: "col-span-6 md:col-span-4 aspect-[4/5] md:-mt-16 overflow-hidden group", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Media, { src: g4, alt: t.gallery.alt4, className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105", loading: "lazy" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { ...fadeUp, className: "col-span-6 md:col-span-4 aspect-square overflow-hidden group", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Media, { src: g5, alt: t.gallery.alt5, className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105", loading: "lazy" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { ...fadeUp, className: "col-span-12 md:col-span-4 aspect-[4/3] overflow-hidden group", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Media, { src: reel5, alt: t.gallery.alt6, className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105", loading: "lazy" }) })
    ] })
  ] }) });
}
function Reels() {
  const {
    t
  } = useLanguage();
  const reels = [{
    img: reel1,
    title: t.reels.items[0].title
  }, {
    img: reel2,
    title: t.reels.items[1].title
  }, {
    img: reel3,
    title: t.reels.items[2].title
  }, {
    img: reel4,
    title: t.reels.items[3].title
  }, {
    img: reel5,
    title: t.reels.items[4].title
  }, {
    img: reel6,
    title: t.reels.items[5].title
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-espresso py-24 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 md:px-10 max-w-[1600px] mx-auto mb-12 flex justify-between items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fadeUp, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-gold text-[10px] uppercase tracking-[0.4em] mb-4", children: t.reels.subtitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-6xl text-champagne italic", children: [
          t.reels.title1,
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: t.reels.title2 })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.instagram.com/lifestyle_barberstx/reels/", target: "_blank", rel: "noreferrer", className: "font-mono text-[10px] text-champagne/50 uppercase tracking-widest hover:text-gold", children: t.reels.follow })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden px-6 md:px-10 pb-8 cursor-grab active:cursor-grabbing", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: {
      x: ["0%", "-50%"]
    }, transition: {
      duration: 25,
      ease: "linear",
      repeat: Infinity
    }, className: "flex gap-5 w-max", children: [...reels, ...reels].map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-none w-60 md:w-72 aspect-[9/16] relative group overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Media, { src: r.img, alt: r.title, className: "w-full h-full object-cover transition-all duration-700 group-hover:scale-110 pointer-events-none", loading: "lazy" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-14 rounded-full border-2 border-champagne flex items-center justify-center backdrop-blur", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-0 border-l-[12px] border-l-champagne border-y-[8px] border-y-transparent ml-1" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-4 right-4 pointer-events-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[9px] uppercase tracking-widest text-gold mb-1", children: t.reels.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display italic text-champagne text-lg", children: r.title })
      ] })
    ] }, i)) }) })
  ] });
}
function Testimonials() {
  const {
    t
  } = useLanguage();
  const reviews = t.testimonials.reviews;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-charcoal py-24 md:py-32 px-6 md:px-10 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grain opacity-30" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1600px] mx-auto relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fadeUp, className: "mb-16 max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-gold text-[10px] uppercase tracking-[0.4em] mb-4", children: t.testimonials.subtitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-7xl text-champagne italic leading-[0.9]", children: [
          t.testimonials.title1,
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: t.testimonials.title2 }),
          t.testimonials.title3
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: reviews.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 40
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.8,
        delay: i * 0.15
      }, className: `border border-white/10 p-8 md:p-10 bg-espresso/40 backdrop-blur hover:border-gold/40 transition-all ${i === 1 ? "md:translate-y-12" : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 mb-6 text-gold", children: [...Array(r.rating)].map((_, i2) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "★" }, i2)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display italic text-2xl text-champagne leading-snug mb-8", children: [
          '"',
          r.quote,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 pt-6 border-t border-white/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-full bg-gold/20 flex items-center justify-center font-mono text-xs text-gold", children: r.name[0] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs text-champagne", children: r.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[9px] uppercase tracking-widest text-champagne/40", children: t.testimonials.verified })
          ] })
        ] })
      ] }, i)) })
    ] })
  ] });
}
function Contact() {
  const {
    t
  } = useLanguage();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "book", className: "bg-champagne text-ink py-24 md:py-32 px-6 md:px-10 relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1600px] mx-auto relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fadeUp, className: "lg:col-span-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-gold text-[10px] uppercase tracking-[0.4em] mb-6", children: t.contact.subtitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-8xl italic leading-[0.9] text-ink mb-12 text-balance", children: [
        t.contact.title1,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: t.contact.title2 }),
        t.contact.title3
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 max-w-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-ink/20 pb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-mono text-[9px] uppercase tracking-widest text-ink/50 block mb-1", children: t.contact.nameLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: t.contact.namePlaceholder, className: "w-full bg-transparent font-display text-xl text-ink placeholder:text-ink/30 focus:outline-none" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-ink/20 pb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-mono text-[9px] uppercase tracking-widest text-ink/50 block mb-1", children: t.contact.phoneLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "tel", placeholder: t.contact.phonePlaceholder, className: "w-full bg-transparent font-display text-xl text-ink placeholder:text-ink/30 focus:outline-none" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-ink/20 pb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-mono text-[9px] uppercase tracking-widest text-ink/50 block mb-1", children: t.contact.serviceLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: t.contact.servicePlaceholder, className: "w-full bg-transparent font-display text-xl text-ink placeholder:text-ink/30 focus:outline-none" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 pt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "bg-ink text-champagne px-8 py-4 font-mono text-[10px] uppercase tracking-[0.25em] hover:bg-gold hover:text-ink transition-all", children: t.contact.btnBook }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://wa.me/18303302172", className: "border border-ink/30 text-ink px-8 py-4 font-mono text-[10px] uppercase tracking-[0.25em] hover:bg-ink hover:text-champagne transition-all text-center", children: t.contact.btnWhatsApp })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fadeUp, className: "lg:col-span-5 flex flex-col gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] bg-ink relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "Lifestyle Barber Map", src: "https://www.google.com/maps?q=2405+S+Hwy+183+%23102,+Leander,+TX+78641&output=embed", className: "w-full h-full grayscale contrast-125 opacity-90", loading: "lazy" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-6 font-mono text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gold uppercase tracking-widest text-[9px] mb-2", children: "Location" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-ink/70 leading-relaxed", children: [
            "2405 S Hwy 183 #102",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Leander, TX 78641"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gold uppercase tracking-widest text-[9px] mb-2", children: "Contact" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:8303302172", className: "block text-ink/70 hover:text-gold", children: "(830) 330-2172" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://wa.me/18303302172", className: "block text-ink/70 hover:text-gold mt-1", children: "WhatsApp" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gold uppercase tracking-widest text-[9px] mb-2", children: t.footer.hours }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-ink/70 leading-relaxed", children: [
            t.footer.monFri,
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            t.footer.sat,
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            t.footer.sun
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gold uppercase tracking-widest text-[9px] mb-2", children: "Rating" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ink/70", children: "★ 4.6 / 170+ reviews" })
        ] })
      ] })
    ] })
  ] }) }) });
}
function Footer() {
  const {
    t
  } = useLanguage();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { id: "visit", className: "bg-charcoal pt-24 pb-10 px-6 md:px-10 border-t border-white/5 relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1600px] mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-champagne text-[18vw] md:text-[14vw] italic opacity-[0.04] select-none leading-[0.8] mb-12 -mx-2 pointer-events-none", children: "Lifestyle." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-4 gap-12 font-mono text-[10px] uppercase tracking-widest text-champagne/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display italic text-2xl text-champagne normal-case tracking-normal mb-2", children: "Lifestyle" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gold", children: "Barber · Beauty" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-champagne", children: t.footer.visit }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "leading-relaxed", children: [
          "2405 S Hwy 183 #102",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Leander, TX 78641"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-champagne", children: t.footer.hours }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "leading-relaxed", children: [
          t.footer.monFri,
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          t.footer.sat,
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          t.footer.sun
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-champagne", children: t.footer.connect }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.instagram.com/lifestyle_barberstx/", target: "_blank", rel: "noreferrer", className: "hover:text-gold", children: "Instagram" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://wa.me/18303302172", className: "hover:text-gold", children: "WhatsApp" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:8303302172", className: "hover:text-gold", children: "(830) 330-2172" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 font-mono text-[9px] uppercase tracking-widest text-champagne/30", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.footer.copy }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.footer.crafted })
    ] })
  ] }) });
}
function FloatingCTA() {
  const {
    t
  } = useLanguage();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://wa.me/18303302172", className: "fixed bottom-6 right-6 z-40 size-16 rounded-full bg-gold text-charcoal flex items-center justify-center font-mono text-[10px] uppercase tracking-tighter font-bold shadow-2xl gold-glow hover:bg-champagne transition-all", "aria-label": "Book via WhatsApp", children: t.cta.book });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-charcoal text-champagne overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Marquee, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Space, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Philosophy, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceSplit, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reels, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Gallery, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Team, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingCTA, {})
  ] });
}
export {
  Index as component
};
