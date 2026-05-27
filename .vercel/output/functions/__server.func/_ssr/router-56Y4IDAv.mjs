import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { b as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, c as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
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
const translations = {
  en: {
    nav: {
      experience: "Experience",
      services: "Services",
      artisans: "Artisans",
      gallery: "Gallery",
      visit: "Visit",
      book: "Book Now"
    },
    hero: {
      location: "· Leander, Texas · Est. 2014 ·",
      title1: "Modern ",
      title2: "Grooming",
      title3: "& Beauty Lifestyle",
      desc: "A cinematic fusion of luxury barbering and modern beauty atelier — reimagining style in the heart of Leander.",
      reviews: "170+ Reviews",
      btnBook: "Book Appointment",
      btnExplore: "Explore Services",
      scroll: "Scroll ↓"
    },
    marquee: [
      "2405 S Hwy 183 #102, Leander TX",
      "•",
      "Est. 2014",
      "•",
      "Premium Cuts & Couture Beauty",
      "•",
      "Open 7 Days",
      "•"
    ],
    space: {
      subtitle: "— The Space",
      title1: "Designed for ",
      title2: "your comfort.",
      desc: "A modern sanctuary where luxury meets raw industrial aesthetic. Relax, have a drink, and enjoy a premium grooming experience in an environment crafted exclusively for you."
    },
    philosophy: {
      subtitle: "— The Philosophy",
      title1: "The hush of a ",
      title2: "Lounge.",
      title3: "The polish of a ",
      title4: "Couture ",
      title5: "studio.",
      desc: "We believe that grooming is a ritual, not a chore. Our space is divided between the dark leather comfort of a master barber and the sun-drenched marble of a couture styling studio.",
      stat1: "12+",
      stat1Desc: "Years Crafting",
      stat2: "8",
      stat2Desc: "Master Artisans",
      stat3: "170+",
      stat3Desc: "5★ Reviews",
      label1: "Barber Craft",
      label2: "Beauty Couture"
    },
    services: {
      barberSubtitle: "— For Him",
      barberTitle: "Master Barbering",
      barberMenu: "The Barber Menu →",
      barberList: [
        { name: "Taper & Skin Fade", price: "$45+" },
        { name: "Beard Sculpting", price: "$30+" },
        { name: "The Razor Line Up", price: "$35+" },
        { name: "Hot Towel Shave", price: "$50+" },
        { name: "Kids Cuts", price: "$25+" },
        { name: "Signature Ritual", price: "$85+" }
      ],
      beautySubtitle: "— For Her",
      beautyTitle: "Artisan Beauty",
      beautyMenu: "The Beauty Menu →",
      beautyList: [
        { name: "Couture Color", price: "$120+" },
        { name: "Balayage & Highlights", price: "$180+" },
        { name: "Sculpted Styling", price: "$65+" },
        { name: "Bespoke Facial", price: "$95+" },
        { name: "Brow Artistry", price: "$30+" },
        { name: "Lash Extensions", price: "$110+" }
      ]
    },
    team: {
      subtitle: "— The Founder",
      title1: "Our ",
      title2: "Story.",
      p1: "Lifestyle Barber & Beauty was born with a clear vision: to elevate the traditional barbershop into a space where flawless technique meets modern comfort.",
      p2: "What began as a genuine vocation for grooming has become a benchmark of style. Driven by passion and perfectionism, we have created an environment where every client not only receives exceptional service but lives a true experience of personal care, exclusivity, and style.",
      badge: "Master Barber",
      name: "Alberto",
      role: "CEO & Manager",
      founder: "Founder"
    },
    gallery: {
      subtitle: "— Visual Archive",
      title1: "Moments, ",
      title2: "captured.",
      alt1: "Razor line up",
      alt2: "Salon interior",
      alt3: "Balayage detail",
      alt4: "Beauty atelier",
      alt5: "Editorial portrait",
      alt6: "Beauty editorial"
    },
    reels: {
      subtitle: "— @lifestyle_barberstx",
      title1: "The Ritual ",
      title2: "In Motion",
      follow: "Follow on Instagram →",
      label: "Reel",
      items: [
        { title: "Hot Towel Ritual" },
        { title: "Balayage Magic" },
        { title: "The Skin Fade" },
        { title: "Beauty Glow Up" },
        { title: "Beard Sculpt" },
        { title: "Color Story" }
      ]
    },
    testimonials: {
      subtitle: "— Voices",
      title1: "A standard ",
      title2: "our guests",
      title3: " recognize.",
      verified: "Verified Guest",
      reviews: [
        {
          quote: "Excellent service and amazing attention to detail. The best taper fade I've had in years.",
          name: "Marcus R.",
          rating: 5
        },
        {
          quote: "Professional, modern, and highly recommended. Walked out feeling like a new person.",
          name: "Sofia K.",
          rating: 5
        },
        {
          quote: "Best barber shop in Leander. The atmosphere is incredible and the cuts are precision-level.",
          name: "Daniel V.",
          rating: 5
        }
      ]
    },
    contact: {
      subtitle: "— Reserve Your Seat",
      title1: "Book your ",
      title2: "appointment",
      title3: " today.",
      nameLabel: "Name",
      namePlaceholder: "Your full name",
      phoneLabel: "Phone",
      phonePlaceholder: "(830) 555-0000",
      serviceLabel: "Service",
      servicePlaceholder: "What can we do for you?",
      btnBook: "Request Booking",
      btnWhatsApp: "WhatsApp Us"
    },
    footer: {
      visit: "Visit",
      hours: "Hours",
      connect: "Connect",
      monSat: "Mon–Sat: 9AM – 8PM",
      sun: "Sun: 10AM – 6PM",
      copy: "© 2026 Lifestyle Barber & Beauty Salon",
      crafted: "Crafted with precision in Leander, TX"
    },
    cta: {
      book: "Book"
    }
  },
  es: {
    nav: {
      experience: "Experiencia",
      services: "Servicios",
      artisans: "Artistas",
      gallery: "Galería",
      visit: "Visítanos",
      book: "Reservar"
    },
    hero: {
      location: "· Leander, Texas · Est. 2014 ·",
      title1: "Estilo ",
      title2: "Moderno",
      title3: "& Belleza Exclusiva",
      desc: "Una fusión cinematográfica entre la barbería de lujo y el atelier de belleza moderno — redefiniendo el estilo en Leander.",
      reviews: "170+ Reseñas",
      btnBook: "Agendar Cita",
      btnExplore: "Explorar Servicios",
      scroll: "Deslizar ↓"
    },
    marquee: [
      "2405 S Hwy 183 #102, Leander TX",
      "•",
      "Est. 2014",
      "•",
      "Cortes Premium y Alta Belleza",
      "•",
      "Abierto los 7 días",
      "•"
    ],
    space: {
      subtitle: "— El Lugar",
      title1: "Diseñado para ",
      title2: "tu comodidad.",
      desc: "Un santuario moderno donde el lujo se encuentra con la estética industrial. Relájate, toma una bebida y disfruta de una experiencia premium en un ambiente creado exclusivamente para ti."
    },
    philosophy: {
      subtitle: "— La Filosofía",
      title1: "La paz de un ",
      title2: "Lounge.",
      title3: "La elegancia de un ",
      title4: "estudio de ",
      title5: "Alta Costura.",
      desc: "Creemos que el cuidado personal es un ritual, no una obligación. Nuestro espacio se divide entre el confort de un máster barbero y el mármol iluminado de un estudio de alta belleza.",
      stat1: "12+",
      stat1Desc: "Años de Arte",
      stat2: "8",
      stat2Desc: "Máster Artistas",
      stat3: "170+",
      stat3Desc: "Reseñas 5★",
      label1: "Arte Barbería",
      label2: "Alta Belleza"
    },
    services: {
      barberSubtitle: "— Para Él",
      barberTitle: "Barbería Máster",
      barberMenu: "Menú de Barbería →",
      barberList: [
        { name: "Taper & Skin Fade", price: "$45+" },
        { name: "Esculpido de Barba", price: "$30+" },
        { name: "Alineación a Navaja", price: "$35+" },
        { name: "Afeitado con Toalla Caliente", price: "$50+" },
        { name: "Cortes para Niños", price: "$25+" },
        { name: "Ritual de la Casa", price: "$85+" }
      ],
      beautySubtitle: "— Para Ella",
      beautyTitle: "Belleza Artesanal",
      beautyMenu: "Menú de Belleza →",
      beautyList: [
        { name: "Coloración Couture", price: "$120+" },
        { name: "Balayage y Luces", price: "$180+" },
        { name: "Peinado Esculpido", price: "$65+" },
        { name: "Facial a la Medida", price: "$95+" },
        { name: "Arte en Cejas", price: "$30+" },
        { name: "Extensiones de Pestañas", price: "$110+" }
      ]
    },
    team: {
      subtitle: "— El Fundador",
      title1: "Nuestra ",
      title2: "Historia.",
      p1: "Lifestyle Barber & Beauty nació con una visión clara: elevar la barbería tradicional a un espacio donde la técnica impecable se encuentra con la comodidad moderna.",
      p2: "Lo que comenzó como una auténtica vocación por el cuidado personal se ha convertido en un referente de estilo. Impulsados por la pasión y el perfeccionismo, hemos creado un ambiente donde cada cliente no solo recibe un servicio excepcional, sino que vive una verdadera experiencia de cuidado personal, exclusividad y estilo.",
      badge: "Máster Barbero",
      name: "Alberto",
      role: "CEO y Mánager",
      founder: "Fundador"
    },
    gallery: {
      subtitle: "— Archivo Visual",
      title1: "Momentos, ",
      title2: "capturados.",
      alt1: "Alineación a navaja",
      alt2: "Interior del salón",
      alt3: "Detalle de Balayage",
      alt4: "Atelier de belleza",
      alt5: "Retrato editorial",
      alt6: "Belleza editorial"
    },
    reels: {
      subtitle: "— @lifestyle_barberstx",
      title1: "El Ritual ",
      title2: "En Movimiento",
      follow: "Síguenos en Instagram →",
      label: "Reel",
      items: [
        { title: "Ritual de Toalla Caliente" },
        { title: "Magia del Balayage" },
        { title: "El Skin Fade" },
        { title: "Resplandor de Belleza" },
        { title: "Esculpido de Barba" },
        { title: "Historia de Color" }
      ]
    },
    testimonials: {
      subtitle: "— Voces",
      title1: "Un estándar que ",
      title2: "nuestros clientes",
      title3: " reconocen.",
      verified: "Cliente Verificado",
      reviews: [
        {
          quote: "Excelente servicio y una increíble atención al detalle. El mejor Taper Fade que me han hecho en años.",
          name: "Marcus R.",
          rating: 5
        },
        {
          quote: "Profesional, moderno y altamente recomendado. Salí sintiéndome como una persona nueva.",
          name: "Sofia K.",
          rating: 5
        },
        {
          quote: "La mejor barbería en Leander. El ambiente es increíble y los cortes son de nivel de precisión.",
          name: "Daniel V.",
          rating: 5
        }
      ]
    },
    contact: {
      subtitle: "— Reserva Tu Asiento",
      title1: "Agenda tu ",
      title2: "cita",
      title3: " hoy.",
      nameLabel: "Nombre",
      namePlaceholder: "Tu nombre completo",
      phoneLabel: "Teléfono",
      phonePlaceholder: "(830) 555-0000",
      serviceLabel: "Servicio",
      servicePlaceholder: "¿Qué podemos hacer por ti?",
      btnBook: "Solicitar Reserva",
      btnWhatsApp: "Escríbenos por WhatsApp"
    },
    footer: {
      visit: "Visítanos",
      hours: "Horarios",
      connect: "Conectar",
      monSat: "Lun–Sáb: 9AM – 8PM",
      sun: "Dom: 10AM – 6PM",
      copy: "© 2026 Lifestyle Barber & Beauty Salon",
      crafted: "Creado con precisión en Leander, TX"
    },
    cta: {
      book: "Reservar"
    }
  }
};
const LanguageContext = reactExports.createContext(void 0);
const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = reactExports.useState("en");
  reactExports.useEffect(() => {
    const savedLang = localStorage.getItem("preferredLanguage");
    if (savedLang === "es" || savedLang === "en") {
      setLanguageState(savedLang);
    } else {
      const browserLang = navigator.language.startsWith("es") ? "es" : "en";
      setLanguageState(browserLang);
    }
  }, []);
  const setLanguage = (lang) => {
    setLanguageState(lang);
    localStorage.setItem("preferredLanguage", lang);
  };
  const t = translations[language];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LanguageContext.Provider, { value: { language, setLanguage, t }, children });
};
const useLanguage = () => {
  const context = reactExports.useContext(LanguageContext);
  if (context === void 0) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
const appCss = "/assets/styles-w_3IdNHW.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$1 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#1A1A1A" },
      { title: "Lifestyle Barber & Beauty Salon — Leander, TX" },
      {
        name: "description",
        content: "Premium barber and beauty experience in Leander, Texas. Tailored cuts, beard sculpting, hair coloring, facials & more. Book today."
      },
      { name: "author", content: "Lifestyle Barber & Beauty Salon" },
      { property: "og:title", content: "Lifestyle Barber & Beauty Salon — Leander, TX" },
      {
        property: "og:description",
        content: "A cinematic fusion of luxury barbering and modern beauty atelier in Leander, Texas."
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Lifestyle Barber & Beauty Salon — Leander, TX" },
      {
        name: "twitter:description",
        content: "Premium barber and beauty experience in Leander, Texas. Tailored cuts, beard sculpting, hair coloring, facials & more. Book today."
      },
      { name: "twitter:image", content: "/og-image.jpg" }
    ],
    links: [
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon.png"
      },
      {
        rel: "apple-touch-icon",
        href: "/favicon.png"
      },
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$1.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LanguageProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }) });
}
const $$splitComponentImporter = () => import("./index-C22hN2Rl.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Lifestyle Barber & Beauty Salon — Premium Cuts & Beauty in Leander, TX"
    }, {
      name: "description",
      content: "A cinematic fusion of luxury barbering and modern beauty atelier in Leander, Texas. Tailored cuts, beard sculpting, hair coloring, facials & more. Book today."
    }, {
      property: "og:title",
      content: "Lifestyle Barber & Beauty Salon — Leander, TX"
    }, {
      property: "og:description",
      content: "Premium cuts, beauty services, grooming & style in Leander, Texas."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$1
});
const rootRouteChildren = {
  IndexRoute
};
const routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  router as r,
  useLanguage as u
};
