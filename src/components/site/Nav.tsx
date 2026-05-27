import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import logoPrincipal from "@/assets/Barber/logo1principal.png";

export function Nav() {
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
    { label: t.nav.visit, href: "#space" },
  ];

  return (
    <motion.nav
      style={{ backgroundColor: bg, backdropFilter: blur as unknown as string }}
      className="fixed top-0 inset-x-0 z-50 border-b border-white/0"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logoPrincipal}
            alt="Lifestyle Barber & Beauty"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </a>
        <div className="hidden md:flex gap-10 font-mono text-[10px] uppercase tracking-[0.25em] text-champagne/70">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-gold transition-colors">
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-champagne/70 hover:text-gold transition-colors flex items-center gap-1"
          >
            <span className={language === "en" ? "text-gold font-bold" : ""}>EN</span>
            <span className="text-champagne/30">|</span>
            <span className={language === "es" ? "text-gold font-bold" : ""}>ES</span>
          </button>
          <a
            href="#book"
            className="bg-gold text-charcoal px-4 md:px-5 py-2 md:py-2.5 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em] hover:bg-champagne transition-colors"
          >
            {t.nav.book}
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
