import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Nav } from "@/components/site/Nav";
import { useLanguage } from "@/i18n/LanguageContext";
import heroImg from "@/assets/Barber/barberia4.jpg";
import portraitBarber from "@/assets/Barber/fade5.jpg";
import portraitBeauty from "@/assets/Barber/mujer1.JPG";
import team1 from "@/assets/Barber/fade2.jpg";
import team2 from "@/assets/Barber/mujer2.JPG";
import team3 from "@/assets/Barber/fade8.jpeg";
import team4 from "@/assets/Barber/mujer3.JPG";
import g1 from "@/assets/Barber/fade6.MOV";
import g2 from "@/assets/Barber/mujer4.JPG";
import g3 from "@/assets/Barber/fade2.jpg";
import g4 from "@/assets/Barber/mujer5.JPG";
import g5 from "@/assets/Barber/fade3.JPG";
import g6 from "@/assets/Barber/facialvideo2.mov";
import reel1 from "@/assets/Barber/fade9.MOV";
import reel2 from "@/assets/Barber/mujer6.JPG";
import reel3 from "@/assets/Barber/fade4.jpg";
import reel4 from "@/assets/Barber/mujer1.JPG";
import reel5 from "@/assets/Barber/facialvideo2.mov";
import reel6 from "@/assets/Barber/fade6.MOV";

// Interior space images
import barberia1 from "@/assets/Barber/barberia1.jpg";
import barberia2 from "@/assets/Barber/barberia2.jpg";
import barberia4 from "@/assets/Barber/barberia4.jpg";

function Media({
  src,
  alt,
  className,
  loading,
}: {
  src: string;
  alt?: string;
  className?: string;
  loading?: "lazy";
}) {
  if (
    typeof src === "string" &&
    (src.toLowerCase().endsWith(".mov") || src.toLowerCase().endsWith(".mp4"))
  ) {
    return <video src={src} className={className} autoPlay loop muted playsInline />;
  }
  return <img src={src} alt={alt} className={className} loading={loading} />;
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lifestyle Barber & Beauty Salon — Premium Cuts & Beauty in Leander, TX" },
      {
        name: "description",
        content:
          "A cinematic fusion of luxury barbering and modern beauty atelier in Leander, Texas. Tailored cuts, beard sculpting, hair coloring, facials & more. Book today.",
      },
      { property: "og:title", content: "Lifestyle Barber & Beauty Salon — Leander, TX" },
      {
        property: "og:description",
        content: "Premium cuts, beauty services, grooming & style in Leander, Texas.",
      },
    ],
  }),
  component: Index,
});

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
};

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
  const { t } = useLanguage();

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden flex flex-col justify-end p-6 md:p-16"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <Media
          src={heroImg}
          alt="Luxury barbershop interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/60" />
        <div className="absolute inset-0 grain opacity-60 mix-blend-overlay" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-[1600px] w-full mx-auto pb-12 md:pb-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-gold mb-8"
        >
          {t.hero.location}
        </motion.div>

        <div className="grid md:grid-cols-12 gap-8 items-end">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-8"
          >
            <h1 className="font-display text-[18vw] md:text-[10vw] leading-[0.85] text-champagne italic text-balance">
              {t.hero.title1}
              <span className="block text-gold">{t.hero.title2}</span>
              <span className="font-sans not-italic font-black uppercase text-[7vw] md:text-[3.5vw] tracking-tighter text-rose/40 block mt-2">
                {t.hero.title3}
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-4 flex flex-col gap-8"
          >
            <p className="text-champagne/70 max-w-sm text-base md:text-lg leading-relaxed">
              {t.hero.desc}
            </p>
            <div className="flex items-center gap-4">
              <div className="font-mono text-[10px] uppercase tracking-widest text-champagne/60 leading-tight">
                <div className="text-gold text-sm font-bold">★ 4.6</div>
                {t.hero.reviews}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#book"
                className="bg-gold text-charcoal px-6 py-4 font-mono text-[10px] uppercase tracking-[0.25em] text-center hover:bg-champagne transition-all gold-glow"
              >
                {t.hero.btnBook}
              </a>
              <a
                href="#services"
                className="border border-champagne/30 text-champagne px-6 py-4 font-mono text-[10px] uppercase tracking-[0.25em] text-center hover:border-gold hover:text-gold transition-all"
              >
                {t.hero.btnExplore}
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 font-mono text-[9px] uppercase tracking-[0.3em] text-champagne/40"
      >
        {t.hero.scroll}
      </motion.div>
    </section>
  );
}

function Marquee() {
  const { t } = useLanguage();
  const items = t.marquee;
  return (
    <div className="bg-gold py-5 overflow-hidden border-y border-charcoal/10">
      <div className="flex animate-marquee whitespace-nowrap font-mono text-[11px] md:text-sm uppercase tracking-[0.4em] text-charcoal/80">
        {[...Array(4)].map((_, k) => (
          <div key={k} className="flex items-center gap-10 pr-10">
            {items.map((it, i) => (
              <span key={i}>{it}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Space() {
  const { t } = useLanguage();
  return (
    <section
      id="space"
      className="bg-ink text-champagne py-24 md:py-40 px-6 md:px-10 relative overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div {...fadeUp} className="relative z-40">
          <div className="font-mono text-gold text-[10px] uppercase tracking-[0.4em] mb-6">
            {t.space.subtitle}
          </div>
          <h2 className="font-display text-5xl md:text-7xl text-champagne italic leading-[0.95] mb-8">
            {t.space.title1}
            <span className="text-gold block mt-2">{t.space.title2}</span>
          </h2>
          <p className="text-champagne/60 text-lg max-w-md leading-relaxed">{t.space.desc}</p>
        </motion.div>

        <div className="relative h-[500px] md:h-[700px] w-full flex items-center justify-center mt-10 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 50, rotate: -5 }}
            whileInView={{ opacity: 1, y: 0, rotate: -10 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute top-0 left-0 w-3/5 md:w-1/2 aspect-[4/5] z-10 shadow-2xl"
          >
            <Media
              src={barberia1}
              className="w-full h-full object-cover border-[8px] border-charcoal"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50, x: 50, rotate: 5 }}
            whileInView={{ opacity: 1, y: 0, x: 0, rotate: 5 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute bottom-0 right-0 w-3/4 md:w-3/5 aspect-[4/3] z-20 shadow-2xl"
          >
            <Media
              src={barberia4}
              className="w-full h-full object-cover border-[8px] border-charcoal"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -50, x: 20, rotate: 15 }}
            whileInView={{ opacity: 1, y: 0, x: 0, rotate: 15 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute top-1/4 right-5 w-2/5 aspect-square z-30 shadow-2xl"
          >
            <Media
              src={barberia2}
              className="w-full h-full object-cover border-[8px] border-charcoal"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  const { t } = useLanguage();
  return (
    <section
      id="experience"
      className="bg-champagne text-ink py-24 md:py-40 px-6 md:px-10 overflow-hidden relative"
    >
      <div className="max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-12 items-center">
        <motion.div {...fadeUp} className="lg:col-span-5">
          <div className="font-mono text-gold text-[10px] uppercase tracking-[0.4em] mb-6">
            {t.philosophy.subtitle}
          </div>
          <h2 className="font-display text-5xl md:text-7xl text-ink leading-[0.95] mb-8 italic">
            {t.philosophy.title1}
            <span className="not-italic font-sans font-black uppercase text-3xl md:text-5xl tracking-tighter">
              {t.philosophy.title2}
            </span>
            <br />
            {t.philosophy.title3}
            <span className="text-gold">{t.philosophy.title4}</span>
            {t.philosophy.title5}
          </h2>
          <p className="text-ink/60 text-lg max-w-md leading-relaxed mb-12">{t.philosophy.desc}</p>
          <div className="grid grid-cols-3 gap-6 border-t border-ink/10 pt-8">
            <div>
              <div className="font-display text-4xl text-gold">{t.philosophy.stat1}</div>
              <div className="font-mono text-[9px] uppercase tracking-widest text-ink/50 mt-2">
                {t.philosophy.stat1Desc}
              </div>
            </div>
            <div>
              <div className="font-display text-4xl text-gold">{t.philosophy.stat2}</div>
              <div className="font-mono text-[9px] uppercase tracking-widest text-ink/50 mt-2">
                {t.philosophy.stat2Desc}
              </div>
            </div>
            <div>
              <div className="font-display text-4xl text-gold">{t.philosophy.stat3}</div>
              <div className="font-mono text-[9px] uppercase tracking-widest text-ink/50 mt-2">
                {t.philosophy.stat3Desc}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="lg:col-span-7 relative h-[500px] md:h-[700px] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 60, rotate: 8 }}
            whileInView={{ opacity: 1, y: 0, rotate: 3 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 right-0 w-2/3 aspect-[4/5] z-20 shadow-2xl"
          >
            <Media
              src={portraitBarber}
              alt="Barber craft"
              className="w-full h-full object-cover border-[6px] border-champagne"
              loading="lazy"
            />
            <div className="absolute -bottom-3 -left-3 bg-charcoal text-gold font-mono text-[9px] uppercase tracking-widest px-3 py-1.5">
              {t.philosophy.label1}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 60, rotate: -8 }}
            whileInView={{ opacity: 1, y: 0, rotate: -4 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-0 left-0 w-3/5 aspect-[4/5] z-10 shadow-xl"
          >
            <Media
              src={portraitBeauty}
              alt="Beauty couture"
              className="w-full h-full object-cover border-[6px] border-champagne"
              loading="lazy"
            />
            <div className="absolute -top-3 -right-3 bg-rose text-ink font-mono text-[9px] uppercase tracking-widest px-3 py-1.5">
              {t.philosophy.label2}
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 size-32 rounded-full bg-gold/20 blur-3xl pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
}

function ServiceSplit() {
  const { t } = useLanguage();
  const barberServices = t.services.barberList;
  const beautyServices = t.services.beautyList;
  return (
    <section id="services" className="grid md:grid-cols-2 min-h-screen">
      {/* Barber */}
      <motion.div
        {...fadeUp}
        className="bg-charcoal text-champagne p-10 md:p-20 flex flex-col justify-between min-h-[600px] relative overflow-hidden group"
      >
        <div className="absolute -bottom-32 -right-32 size-96 bg-gold/10 blur-3xl rounded-full pointer-events-none" />
        <div className="relative z-10">
          <div className="font-mono text-gold text-[10px] uppercase tracking-[0.4em] mb-6">
            {t.services.barberSubtitle}
          </div>
          <h3 className="font-display italic text-gold text-5xl md:text-6xl mb-12">
            {t.services.barberTitle}
          </h3>
          <ul className="space-y-5">
            {barberServices.map((s, i) => (
              <li
                key={s.name}
                className={`flex justify-between items-end pt-5 group/item cursor-pointer ${i > 0 ? "border-t border-white/5" : ""}`}
              >
                <span className="font-sans font-extrabold uppercase text-lg md:text-2xl text-champagne group-hover/item:text-gold group-hover/item:translate-x-1 transition-all">
                  {s.name}
                </span>
                <span className="font-mono text-gold text-xs pb-1.5 whitespace-nowrap ml-4">
                  {s.price}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <button className="mt-12 self-start border border-gold text-gold px-8 py-3.5 font-mono text-[10px] uppercase tracking-[0.25em] hover:bg-gold hover:text-charcoal transition-all">
          {t.services.barberMenu}
        </button>
      </motion.div>

      {/* Beauty */}
      <motion.div
        {...fadeUp}
        className="bg-rose text-ink p-10 md:p-20 flex flex-col justify-between min-h-[600px] relative overflow-hidden group"
      >
        <div className="absolute -top-32 -left-32 size-96 bg-gold/20 blur-3xl rounded-full pointer-events-none" />
        <div className="relative z-10">
          <div className="font-mono text-espresso text-[10px] uppercase tracking-[0.4em] mb-6">
            {t.services.beautySubtitle}
          </div>
          <h3 className="font-display italic text-espresso text-5xl md:text-6xl mb-12">
            {t.services.beautyTitle}
          </h3>
          <ul className="space-y-5">
            {beautyServices.map((s, i) => (
              <li
                key={s.name}
                className={`flex justify-between items-end pt-5 group/item cursor-pointer ${i > 0 ? "border-t border-ink/10" : ""}`}
              >
                <span className="font-sans font-extrabold uppercase text-lg md:text-2xl text-ink group-hover/item:text-espresso group-hover/item:translate-x-1 transition-all">
                  {s.name}
                </span>
                <span className="font-mono text-espresso text-xs pb-1.5 whitespace-nowrap ml-4">
                  {s.price}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <button className="mt-12 self-start border border-espresso text-espresso px-8 py-3.5 font-mono text-[10px] uppercase tracking-[0.25em] hover:bg-espresso hover:text-rose transition-all">
          {t.services.beautyMenu}
        </button>
      </motion.div>
    </section>
  );
}

function Team() {
  const { t } = useLanguage();
  return (
    <section id="artisans" className="bg-charcoal py-24 md:py-32 overflow-hidden relative">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div {...fadeUp} className="max-w-2xl">
          <div className="font-mono text-gold text-[10px] uppercase tracking-[0.4em] mb-4">
            {t.team.subtitle}
          </div>
          <h2 className="font-display text-5xl md:text-7xl text-champagne italic leading-[0.95] mb-8">
            {t.team.title1}
            <span className="text-gold">{t.team.title2}</span>
          </h2>
          <div className="space-y-6 text-champagne/70 text-lg leading-relaxed">
            <p>{t.team.p1}</p>
            <p>{t.team.p2}</p>
          </div>
        </motion.div>

        <div className="flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-sm mt-10 lg:mt-0 p-8 md:p-10 bg-espresso/30 border border-white/5 hover:border-gold/20 transition-all"
          >
            <span className="inline-block font-mono text-[10px] uppercase tracking-widest text-gold bg-charcoal/80 px-3 py-1.5 border border-gold/20 mb-8">
              {t.team.badge}
            </span>
            <h4 className="font-display text-5xl md:text-6xl text-champagne italic mb-6">
              {t.team.name}
            </h4>
            <div className="flex justify-between items-center border-t border-white/10 pt-6 mt-2">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold font-bold">
                {t.team.role}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-champagne/40">
                {t.team.founder}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const { t } = useLanguage();
  return (
    <section id="gallery" className="bg-charcoal py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[1600px] mx-auto">
        <motion.div {...fadeUp} className="mb-16 max-w-2xl">
          <div className="font-mono text-gold text-[10px] uppercase tracking-[0.4em] mb-4">
            {t.gallery.subtitle}
          </div>
          <h2 className="font-display text-5xl md:text-7xl text-champagne italic leading-[0.9]">
            {t.gallery.title1}
            <span className="text-gold">{t.gallery.title2}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-12 gap-3 md:gap-5">
          <motion.div
            {...fadeUp}
            className="col-span-6 md:col-span-4 aspect-[3/4] overflow-hidden group"
          >
            <Media
              src={g1}
              alt={t.gallery.alt1}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            {...fadeUp}
            className="col-span-6 md:col-span-5 aspect-[4/3] mt-0 md:mt-16 overflow-hidden group"
          >
            <Media
              src={g3}
              alt={t.gallery.alt2}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            {...fadeUp}
            className="col-span-12 md:col-span-3 aspect-square md:aspect-[3/5] overflow-hidden group"
          >
            <Media
              src={g2}
              alt={t.gallery.alt3}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            {...fadeUp}
            className="col-span-6 md:col-span-4 aspect-[4/5] md:-mt-16 overflow-hidden group"
          >
            <Media
              src={g4}
              alt={t.gallery.alt4}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            {...fadeUp}
            className="col-span-6 md:col-span-4 aspect-square overflow-hidden group"
          >
            <Media
              src={g5}
              alt={t.gallery.alt5}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            {...fadeUp}
            className="col-span-12 md:col-span-4 aspect-[4/3] overflow-hidden group"
          >
            <Media
              src={g6}
              alt={t.gallery.alt6}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Reels() {
  const { t } = useLanguage();
  const reels = [
    { img: reel1, title: t.reels.items[0].title },
    { img: reel2, title: t.reels.items[1].title },
    { img: reel3, title: t.reels.items[2].title },
    { img: reel4, title: t.reels.items[3].title },
    { img: reel5, title: t.reels.items[4].title },
    { img: reel6, title: t.reels.items[5].title },
  ];
  return (
    <section className="bg-espresso py-24 overflow-hidden">
      <div className="px-6 md:px-10 max-w-[1600px] mx-auto mb-12 flex justify-between items-end">
        <motion.div {...fadeUp}>
          <div className="font-mono text-gold text-[10px] uppercase tracking-[0.4em] mb-4">
            {t.reels.subtitle}
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-champagne italic">
            {t.reels.title1}
            <span className="text-gold">{t.reels.title2}</span>
          </h2>
        </motion.div>
        <a
          href="https://www.instagram.com/lifestyle_barberstx/reels/"
          target="_blank"
          rel="noreferrer"
          className="font-mono text-[10px] text-champagne/50 uppercase tracking-widest hover:text-gold"
        >
          {t.reels.follow}
        </a>
      </div>
      <div className="overflow-hidden px-6 md:px-10 pb-8 cursor-grab active:cursor-grabbing">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
          className="flex gap-5 w-max"
        >
          {[...reels, ...reels].map((r, i) => (
            <div
              key={i}
              className="flex-none w-60 md:w-72 aspect-[9/16] relative group overflow-hidden"
            >
              <Media
                src={r.img}
                alt={r.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 pointer-events-none"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="size-14 rounded-full border-2 border-champagne flex items-center justify-center backdrop-blur">
                  <div className="size-0 border-l-[12px] border-l-champagne border-y-[8px] border-y-transparent ml-1" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                <div className="font-mono text-[9px] uppercase tracking-widest text-gold mb-1">
                  {t.reels.label}
                </div>
                <div className="font-display italic text-champagne text-lg">{r.title}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Testimonials() {
  const { t } = useLanguage();
  const reviews = t.testimonials.reviews;
  return (
    <section className="bg-charcoal py-24 md:py-32 px-6 md:px-10 relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-30" />
      <div className="max-w-[1600px] mx-auto relative">
        <motion.div {...fadeUp} className="mb-16 max-w-3xl">
          <div className="font-mono text-gold text-[10px] uppercase tracking-[0.4em] mb-4">
            {t.testimonials.subtitle}
          </div>
          <h2 className="font-display text-5xl md:text-7xl text-champagne italic leading-[0.9]">
            {t.testimonials.title1}
            <span className="text-gold">{t.testimonials.title2}</span>
            {t.testimonials.title3}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className={`border border-white/10 p-8 md:p-10 bg-espresso/40 backdrop-blur hover:border-gold/40 transition-all ${i === 1 ? "md:translate-y-12" : ""}`}
            >
              <div className="flex gap-1 mb-6 text-gold">
                {[...Array(r.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="font-display italic text-2xl text-champagne leading-snug mb-8">
                "{r.quote}"
              </p>
              <div className="flex items-center gap-3 pt-6 border-t border-white/10">
                <div className="size-10 rounded-full bg-gold/20 flex items-center justify-center font-mono text-xs text-gold">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-mono text-xs text-champagne">{r.name}</div>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-champagne/40">
                    {t.testimonials.verified}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { t } = useLanguage();
  return (
    <section
      id="book"
      className="bg-champagne text-ink py-24 md:py-32 px-6 md:px-10 relative overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto relative">
        <div className="grid lg:grid-cols-12 gap-12">
          <motion.div {...fadeUp} className="lg:col-span-7">
            <div className="font-mono text-gold text-[10px] uppercase tracking-[0.4em] mb-6">
              {t.contact.subtitle}
            </div>
            <h2 className="font-display text-5xl md:text-8xl italic leading-[0.9] text-ink mb-12 text-balance">
              {t.contact.title1}
              <span className="text-gold">{t.contact.title2}</span>
              {t.contact.title3}
            </h2>
            <div className="space-y-6 max-w-md">
              <div className="border-b border-ink/20 pb-3">
                <label className="font-mono text-[9px] uppercase tracking-widest text-ink/50 block mb-1">
                  {t.contact.nameLabel}
                </label>
                <input
                  type="text"
                  placeholder={t.contact.namePlaceholder}
                  className="w-full bg-transparent font-display text-xl text-ink placeholder:text-ink/30 focus:outline-none"
                />
              </div>
              <div className="border-b border-ink/20 pb-3">
                <label className="font-mono text-[9px] uppercase tracking-widest text-ink/50 block mb-1">
                  {t.contact.phoneLabel}
                </label>
                <input
                  type="tel"
                  placeholder={t.contact.phonePlaceholder}
                  className="w-full bg-transparent font-display text-xl text-ink placeholder:text-ink/30 focus:outline-none"
                />
              </div>
              <div className="border-b border-ink/20 pb-3">
                <label className="font-mono text-[9px] uppercase tracking-widest text-ink/50 block mb-1">
                  {t.contact.serviceLabel}
                </label>
                <input
                  type="text"
                  placeholder={t.contact.servicePlaceholder}
                  className="w-full bg-transparent font-display text-xl text-ink placeholder:text-ink/30 focus:outline-none"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button className="bg-ink text-champagne px-8 py-4 font-mono text-[10px] uppercase tracking-[0.25em] hover:bg-gold hover:text-ink transition-all">
                  {t.contact.btnBook}
                </button>
                <a
                  href="https://wa.me/18303302172"
                  className="border border-ink/30 text-ink px-8 py-4 font-mono text-[10px] uppercase tracking-[0.25em] hover:bg-ink hover:text-champagne transition-all text-center"
                >
                  {t.contact.btnWhatsApp}
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="lg:col-span-5 flex flex-col gap-8">
            <div className="aspect-[4/3] bg-ink relative overflow-hidden">
              <iframe
                title="Lifestyle Barber Map"
                src="https://www.google.com/maps?q=2405+S+Hwy+183+%23102,+Leander,+TX+78641&output=embed"
                className="w-full h-full grayscale contrast-125 opacity-90"
                loading="lazy"
              />
            </div>

            <div className="grid grid-cols-2 gap-6 font-mono text-xs">
              <div>
                <div className="text-gold uppercase tracking-widest text-[9px] mb-2">Location</div>
                <p className="text-ink/70 leading-relaxed">
                  2405 S Hwy 183 #102
                  <br />
                  Leander, TX 78641
                </p>
              </div>
              <div>
                <div className="text-gold uppercase tracking-widest text-[9px] mb-2">Contact</div>
                <a href="tel:8303302172" className="block text-ink/70 hover:text-gold">
                  (830) 330-2172
                </a>
                <a
                  href="https://wa.me/18303302172"
                  className="block text-ink/70 hover:text-gold mt-1"
                >
                  WhatsApp
                </a>
              </div>
              <div>
                <div className="text-gold uppercase tracking-widest text-[9px] mb-2">Hours</div>
                <p className="text-ink/70 leading-relaxed">
                  Mon–Sat: 9–8
                  <br />
                  Sunday: 10–6
                </p>
              </div>
              <div>
                <div className="text-gold uppercase tracking-widest text-[9px] mb-2">Rating</div>
                <p className="text-ink/70">★ 4.6 / 170+ reviews</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useLanguage();
  return (
    <footer
      id="visit"
      className="bg-charcoal pt-24 pb-10 px-6 md:px-10 border-t border-white/5 relative overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="font-display text-champagne text-[18vw] md:text-[14vw] italic opacity-[0.04] select-none leading-[0.8] mb-12 -mx-2 pointer-events-none">
          Lifestyle.
        </div>
        <div className="grid md:grid-cols-4 gap-12 font-mono text-[10px] uppercase tracking-widest text-champagne/40">
          <div className="md:col-span-1">
            <div className="font-display italic text-2xl text-champagne normal-case tracking-normal mb-2">
              Lifestyle
            </div>
            <div className="text-gold">Barber · Beauty</div>
          </div>
          <div className="space-y-3">
            <div className="text-champagne">{t.footer.visit}</div>
            <p className="leading-relaxed">
              2405 S Hwy 183 #102
              <br />
              Leander, TX 78641
            </p>
          </div>
          <div className="space-y-3">
            <div className="text-champagne">{t.footer.hours}</div>
            <p className="leading-relaxed">
              {t.footer.monSat}
              <br />
              {t.footer.sun}
            </p>
          </div>
          <div className="space-y-3">
            <div className="text-champagne">{t.footer.connect}</div>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.instagram.com/lifestyle_barberstx/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gold"
              >
                Instagram
              </a>
              <a href="https://wa.me/18303302172" className="hover:text-gold">
                WhatsApp
              </a>
              <a href="tel:8303302172" className="hover:text-gold">
                (830) 330-2172
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 font-mono text-[9px] uppercase tracking-widest text-champagne/30">
          <span>{t.footer.copy}</span>
          <span>{t.footer.crafted}</span>
        </div>
      </div>
    </footer>
  );
}

function FloatingCTA() {
  const { t } = useLanguage();
  return (
    <a
      href="https://wa.me/18303302172"
      className="fixed bottom-6 right-6 z-40 size-16 rounded-full bg-gold text-charcoal flex items-center justify-center font-mono text-[10px] uppercase tracking-tighter font-bold shadow-2xl gold-glow hover:bg-champagne transition-all"
      aria-label="Book via WhatsApp"
    >
      {t.cta.book}
    </a>
  );
}

function Index() {
  return (
    <div className="bg-charcoal text-champagne overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Space />
        <Philosophy />
        <ServiceSplit />
        <Reels />
        <Gallery />
        <Testimonials />
        <Team />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
