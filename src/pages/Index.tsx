import { useEffect, useRef, useState, useCallback } from "react";

const FORM_URL = "https://tally.so/r/BzGLP7";

const Index = () => {
  useScrollReveal();

  return (
    <div className="bg-navy-950 text-white">
      <Navigation />
      <Hero />
      <HowIWork />
      <Services />
      <Process />
      <CTASection />
      <FAQ />
      <Footer />
    </div>
  );
};

/* ───────────────── SCROLL REVEAL HOOK ───────────────── */
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.12 }
    );
    const els = document.querySelectorAll(".reveal");
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ───────────────── NAVIGATION ───────────────── */
function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-950/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-display text-xl font-semibold tracking-wide">
          Martin <span className="gold-shimmer">Dobiš</span>
        </div>
        <a
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-pulse hidden sm:inline-flex items-center gap-2 bg-gold-400 hover:bg-gold-300 text-navy-950 font-body font-medium text-sm px-5 py-2.5 rounded-full transition-colors duration-300"
        >
          <i className="fa-regular fa-calendar-check text-xs"></i>
          Chci analýzu zdarma
        </a>
      </div>
    </nav>
  );
}

/* ───────────────── HERO ───────────────── */
function Hero() {
  return (
    <section className="relative bg-navy-900 overflow-hidden" style={{ minHeight: "100vh" }}>
      {/* Background grid lines */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(212,175,106,0.3) 80px), repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(212,175,106,0.3) 80px)",
        }}
      />

      {/* Gold glow blob */}
      <div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-8 pointer-events-none hidden md:block"
        style={{ background: "radial-gradient(circle, #d4af6a 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center min-h-screen pt-24 pb-16 gap-12 md:gap-0">
        {/* Left: Text content */}
        <div className="flex-1 md:pr-12 text-left">
          <p className="fade-up ornament font-body text-xs tracking-[0.3em] text-gold-400 uppercase mb-6">
            Specialista na životní a úrazové pojištění
          </p>

          <h1 className="fade-up-2 font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] mb-4">
            <span className="text-white/70 text-2xl md:text-3xl font-normal block mb-2">
              Jsem <span className="gold-shimmer font-semibold">Martin Dobiš</span>
            </span>
            Vaše rodina si zaslouží
            <br />
            <em className="gold-shimmer not-italic">skutečnou ochranu.</em>
          </h1>

          <p className="fade-up-3 font-body text-white/60 text-lg max-w-xl leading-relaxed mb-10">
            Čtu pojistné podmínky do posledního písmene, porovnávám produkty reálně a najdu řešení,
            které skutečně chrání vás, vaše děti a vaši hypotéku.
          </p>

          <div className="fade-up-4 flex flex-col sm:flex-row gap-4 items-start">
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pulse w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gold-400 hover:bg-gold-300 text-navy-950 font-body font-semibold text-base px-8 py-4 rounded-full transition-colors duration-300 shadow-lg shadow-gold-400/20"
            >
              <i className="fa-solid fa-shield-halved"></i>
              Chci nezávaznou analýzu
            </a>
            <a
              href="#jak-pracuji"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white/70 hover:text-white border border-white/20 hover:border-white/40 font-body text-base px-8 py-4 rounded-full transition-all duration-300"
            >
              Jak pracuji
              <i className="fa-solid fa-arrow-down text-xs"></i>
            </a>
          </div>

          <div className="fade-in mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+420744193713"
              className="flex items-center gap-2 text-white/50 hover:text-white/80 font-body text-sm transition-colors"
            >
              <i className="fa-solid fa-phone text-gold-400 text-xs"></i>
              +420 744 193 713
            </a>
            <span className="hidden sm:block text-white/20">·</span>
            <a
              href="mailto:martin.dobis@zp.metlife.cz"
              className="flex items-center gap-2 text-white/50 hover:text-white/80 font-body text-sm transition-colors"
            >
              <i className="fa-solid fa-envelope text-gold-400 text-xs"></i>
              martin.dobis@zp.metlife.cz
            </a>
          </div>

          {/* Trust bar */}
          <div className="fade-in mt-14 grid grid-cols-3 gap-4 max-w-lg border-t border-white/10 pt-10">
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-gold-400">0 Kč</p>
              <p className="font-body text-xs text-white/50 mt-1 uppercase tracking-wider">Analýza zdarma</p>
            </div>
            <div className="text-center border-x border-white/10">
              <p className="font-display text-3xl font-bold text-gold-400">24h</p>
              <p className="font-body text-xs text-white/50 mt-1 uppercase tracking-wider">Odpovím do</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-gold-400">∞</p>
              <p className="font-body text-xs text-white/50 mt-1 uppercase tracking-wider">Podpora po podpisu</p>
            </div>
          </div>
        </div>

        {/* Right: Photo */}
        <div className="fade-in relative w-full md:w-auto flex justify-center md:justify-end shrink-0">
          <div
            className="absolute -inset-4 rounded-3xl opacity-20 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center, #d4af6a 0%, transparent 70%)" }}
          />
          <div className="relative">
            <div className="absolute -top-2 -left-2 w-full h-full rounded-3xl border border-gold-400/30 pointer-events-none"></div>
            <img
              src="/martin-dobis.png"
              alt="Martin Dobiš – specialista na životní a úrazové pojištění"
              className="relative z-10 w-72 md:w-80 lg:w-96 rounded-3xl shadow-2xl shadow-black/40 object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── HOW I WORK ───────────────── */
function HowIWork() {
  const features = [
    {
      icon: "fa-solid fa-file-shield",
      title: "Čtu podmínky do posledního písmene",
      text: "Každou smlouvu čtu kompletně. Srovnávám výluky, karenční doby, limity plnění — nikoli brožury, ale reálné pojistné podmínky. To, co pojišťovna skutečně zaplatí.",
    },
    {
      icon: "fa-solid fa-heart-pulse",
      title: "Analýza vaší situace, ne produktu",
      text: "Začínám u vás — u vaší rodiny, vašich závazků, vašich příjmů a obav. Teprve pak hledám produkt, který odpovídá realitě. Ne naopak.",
    },
    {
      icon: "fa-solid fa-handshake",
      title: "Nulový tlak na podpis",
      text: "Mým cílem není prodat za každou cenu. Pokud produkt nedává smysl, řeknu to. Chci, abyste se rozhodli sami — s plnou informací, v klidu.",
    },
    {
      icon: "fa-solid fa-user-tie",
      title: "Osobní přístup od A do Z",
      text: "Nesklouzávám do šablonových nabídek. Každý klient je jiný příběh. Jsem tu i po podpisu — při škodě, při změně životní situace, kdykoli mě potřebujete.",
    },
  ];

  return (
    <section id="jak-pracuji" className="bg-navy-950 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="reveal text-center mb-16">
          <p className="ornament font-body text-xs tracking-[0.3em] text-gold-400 uppercase mb-4">Proč já</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Jak pracuji</h2>
        </div>

        <div className="space-y-5">
          {features.map((f, i) => (
            <div
              key={i}
              className="reveal gold-border-left pl-6 py-2 card-hover bg-navy-800/30 rounded-r-2xl pr-6 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-gold-400/10 flex items-center justify-center mt-1">
                  <i className={`${f.icon} text-gold-400`}></i>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2">{f.title}</h3>
                  <p className="font-body text-white/55 text-sm leading-relaxed">{f.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── SERVICES ───────────────── */
function Services() {
  return (
    <section className="bg-navy-950 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="reveal text-center mb-16">
          <p className="ornament font-body text-xs tracking-[0.3em] text-gold-400 uppercase mb-4">Co řeším</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Oblasti pojištění</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <ServiceCard
            icon="fa-solid fa-shield-heart"
            title="Životní pojištění"
            description="Pojištění na hypotéku, rodinné pojištění i dětská pojistka — zajistím správné krytí pro smrt, invaliditu, vážné nemoci a pracovní neschopnost přesně na míru vaší rodině."
            items={[
              "Životní pojištění a zajištění hypotéky",
              "Úrazové pojištění a pojištění invalidity",
              "Pojištění pracovní neschopnosti",
              "Rodinné pojištění a dětská pojistka",
            ]}
          />
          <ServiceCard
            icon="fa-solid fa-chart-line"
            title="Investice"
            description="Ochrana nestačí — peníze musí i růst. Pomohu vám nastavit investiční strategii, která odpovídá vašim cílům, časovému horizontu a ochotě přijmout riziko."
            items={[
              "Pravidelné investování pro budoucnost",
              "Tvorba finanční rezervy a spoření",
              "Stavební spoření a penzijní připojištění",
              "Nastavení strategie podle životní fáze",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon,
  title,
  description,
  items,
}: {
  icon: string;
  title: string;
  description: string;
  items: string[];
}) {
  return (
    <div
      className="reveal relative rounded-3xl overflow-hidden border border-white/10 card-hover"
      style={{ background: "linear-gradient(135deg, hsl(218 50% 15%) 0%, hsl(218 58% 8%) 100%)" }}
    >
      <div
        className="absolute top-0 right-0 w-48 h-48 opacity-10"
        style={{ background: "radial-gradient(circle at top right, #d4af6a, transparent 70%)" }}
      />
      <div className="p-8 relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-gold-400/15 flex items-center justify-center mb-6">
          <i className={`${icon} text-gold-400 text-2xl`}></i>
        </div>
        <h3 className="font-display text-2xl font-bold mb-4">{title}</h3>
        <p className="font-body text-white/60 text-sm leading-relaxed mb-6">{description}</p>
        <ul className="space-y-2">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-white/70 text-sm font-body">
              <i className="fa-solid fa-check text-gold-400 text-xs shrink-0"></i>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ───────────────── PROCESS ───────────────── */
function Process() {
  const steps = [
    {
      num: "01",
      title: "Nezávazná konzultace a analýza",
      text: "Vyplníte krátký formulář. Ozvu se vám a na schůzce (online nebo osobně) zjistím vše, co potřebuji — vaši situaci, rodinu, závazky a priority. Bez tlaku, bez prodeje.",
      filled: true,
    },
    {
      num: "02",
      title: "Porovnání a doporučení",
      text: "Přečtu podmínky relevantních produktů na trhu. Připravím pro vás přehledné srovnání s jasným vysvětlením výhod, výluk a doporučením — řečí, které rozumíte.",
      filled: false,
    },
    {
      num: "03",
      title: "Vaše rozhodnutí, moje podpora",
      text: "Rozhodnete se sami, v klidu, bez spěchu. Pokud kývnete, vyřídím vše za vás. A zůstanu k dispozici dlouhodobě — jsem váš poradce, ne jen prodejce.",
      filled: false,
    },
  ];

  return (
    <section className="bg-navy-900 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="reveal text-center mb-16">
          <p className="ornament font-body text-xs tracking-[0.3em] text-gold-400 uppercase mb-4">Jak to probíhá</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">3 kroky k jistotě</h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-[39px] top-10 bottom-10 w-px bg-gradient-to-b from-gold-400/40 via-gold-400/20 to-transparent"></div>
          <div className="space-y-10">
            {steps.map((s, i) => (
              <div key={i} className="reveal flex items-start gap-6">
                <div
                  className={`shrink-0 w-20 h-20 rounded-2xl flex flex-col items-center justify-center font-display font-bold text-2xl z-10 ${
                    s.filled
                      ? "bg-gold-400 text-navy-950 shadow-lg shadow-gold-400/20"
                      : "bg-navy-700 border border-gold-400/40 text-gold-400"
                  }`}
                >
                  {s.num}
                </div>
                <div className="pt-3">
                  <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
                  <p className="font-body text-white/55 text-sm leading-relaxed max-w-xl">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── CTA SECTION ───────────────── */
function CTASection() {
  return (
    <section
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0a1628 0%, #172d56 50%, #0a1628 100%)" }}
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[600px] h-[600px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #d4af6a 0%, transparent 65%)" }}
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 rounded-full border border-gold-400/10"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[520px] h-[520px] rounded-full border border-gold-400/5"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="reveal">
          <p className="ornament font-body text-xs tracking-[0.3em] text-gold-400 uppercase mb-6">Začněte ještě dnes</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Klidný spánek
            <br />
            <em className="gold-shimmer not-italic">nezaplatíte přeceněnou smlouvou.</em>
          </h2>
          <p className="font-body text-white/60 text-lg mb-10 leading-relaxed">
            Vyplňte formulář — ozvu se do 24 hodin. Prvotní analýza je zcela zdarma a bez závazků. Zjistíte, zda vaše
            stávající pojistka skutečně chrání, nebo jen vypadá, že chrání.
          </p>

          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pulse inline-flex items-center justify-center gap-3 bg-gold-400 hover:bg-gold-300 text-navy-950 font-body font-semibold text-lg px-10 py-5 rounded-full transition-colors duration-300 shadow-2xl shadow-gold-400/30"
          >
            <i className="fa-solid fa-shield-halved"></i>
            Spočítejte mi to — zdarma
            <i className="fa-solid fa-arrow-right text-sm"></i>
          </a>

          <p className="font-body text-white/35 text-xs mt-5">
            <i className="fa-solid fa-lock mr-1 text-gold-400/50"></i>
            Vaše údaje jsou v bezpečí. Žádný spam. Kdykoli se odhlaste.
          </p>
        </div>

        <div className="reveal mt-16 grid grid-cols-3 gap-6 border-t border-white/10 pt-10">
          <div className="text-center">
            <i className="fa-solid fa-medal text-gold-400 text-2xl mb-2"></i>
            <p className="font-body text-white/50 text-xs leading-relaxed">
              Osobní přístup — znám vás jménem, ne jako číslo
            </p>
          </div>
          <div className="text-center">
            <i className="fa-solid fa-file-contract text-gold-400 text-2xl mb-2"></i>
            <p className="font-body text-white/50 text-xs leading-relaxed">
              Analýza podmínek před každým doporučením
            </p>
          </div>
          <div className="text-center">
            <i className="fa-solid fa-phone-volume text-gold-400 text-2xl mb-2"></i>
            <p className="font-body text-white/50 text-xs leading-relaxed">Dostupný i po uzavření smlouvy</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── FAQ ───────────────── */
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Co je životní pojištění a proč ho potřebuji?",
      a: "Životní pojištění finančně ochraňuje vaši rodinu pro případ, že zemřete nebo se stanete invalidním. Pokud máte hypotéku, děti nebo partner závisí na vašem příjmu, životní pojištění zajistí, že budou mít na splátky a běžný život i bez vás. Pomáhám nastavit výši pojistné částky tak, aby odpovídala skutečným potřebám — ne jen doporučení pojišťovny.",
    },
    {
      q: "Jak se liší úrazové pojištění od životního?",
      a: "Úrazové pojištění kryje finanční ztráty způsobené úrazem — zlomeniny, trvalé následky nebo smrt úrazem. Na rozdíl od životního pojištění se nevztahuje na nemoci. Vhodná kombinace obojího pokrývá nejširší spektrum rizik a je základem solidního zajištění rodiny.",
    },
    {
      q: "Jak funguje pojištění pracovní neschopnosti?",
      a: "Pojištění pracovní neschopnosti vyplácí denní dávku, pokud nemůžete pracovat kvůli nemoci nebo úrazu. Státní nemocenská je výrazně nižší než váš běžný příjem — pojištění tento rozdíl dorovná a zajistí, že budete schopni platit hypotéku a běžné výdaje i v době, kdy nepracujete.",
    },
    {
      q: "Proč je důležité zajistit hypotéku pojištěním?",
      a: "Pokud zemřete, stanete se invalidním nebo ztratíte příjem kvůli nemoci, pojišťovna zaplatí splátky nebo doplatí celý zůstatek hypotéky. Bez tohoto zajištění riskujete, že vaše rodina přijde o domov. Pojistné krytí nastavím přesně na výši a délku vaší hypotéky — ne pausálně.",
    },
    {
      q: "Co je dětská pojistka a co kryje?",
      a: "Dětská pojistka kryje úrazy, vážné nemoci a trvalé následky u dětí. Důležité je přečíst podmínky pečlivě — ne každá dětská pojistka platí za všechna zranění nebo nemoci, jak by se mohlo zdát z reklamy. Rodinné pojištění pak chrání celou domácnost v rámci jedné nebo více smluv.",
    },
    {
      q: "Kolik stojí konzultace?",
      a: "Prvotní analýza a konzultace jsou zcela zdarma a bez závazků. Poradce je odměňován provizí od pojišťovny až při sjednání smlouvy — vy za poradenství neplatíte nic.",
    },
  ];

  const toggle = useCallback((i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  }, []);

  return (
    <section className="bg-navy-950 py-24 px-6" id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="reveal text-center mb-16">
          <p className="ornament font-body text-xs tracking-[0.3em] text-gold-400 uppercase mb-4">Časté otázky</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Na co se lidé ptají nejčastěji</h2>
          <p className="font-body text-white/45 mt-4 text-sm max-w-xl mx-auto">
            Odpovědi na otázky, které řeším s klienty každý týden.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="reveal bg-navy-800/40 border border-white/[0.08] rounded-2xl overflow-hidden">
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-7 py-6 text-left"
              >
                <span className="font-display text-lg font-semibold pr-4">{faq.q}</span>
                <i
                  className="fa-solid fa-plus text-gold-400 shrink-0 transition-transform duration-300"
                  style={{ transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)" }}
                ></i>
              </button>
              {openIndex === i && (
                <div className="px-7 pb-6">
                  <p className="font-body text-white/60 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="reveal mt-12 text-center">
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pulse inline-flex items-center justify-center gap-3 bg-gold-400 hover:bg-gold-300 text-navy-950 font-body font-semibold text-base px-8 py-4 rounded-full transition-colors duration-300 shadow-lg shadow-gold-400/20 mb-10"
          >
            <i className="fa-solid fa-shield-halved"></i>
            Chci nezávaznou analýzu
          </a>
          <p className="font-body text-white/40 text-sm mb-5">Máte jinou otázku? Napište nebo zavolejte přímo.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+420744193713"
              className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-gold-400/40 text-white/60 hover:text-white font-body text-sm px-6 py-3 rounded-full transition-all duration-300"
            >
              <i className="fa-solid fa-phone text-gold-400 text-xs"></i>
              +420 744 193 713
            </a>
            <a
              href="mailto:martin.dobis@zp.metlife.cz"
              className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-gold-400/40 text-white/60 hover:text-white font-body text-sm px-6 py-3 rounded-full transition-all duration-300"
            >
              <i className="fa-solid fa-envelope text-gold-400 text-xs"></i>
              martin.dobis@zp.metlife.cz
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── FOOTER ───────────────── */
function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/5 py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-sm font-body">
        <div>
          <p className="font-display text-white/70 font-semibold text-lg mb-1">Martin Dobiš</p>
          <p className="text-xs mb-3">Specialista na životní a úrazové pojištění · Investice</p>
          <div className="flex flex-col gap-1.5">
            <a
              href="tel:+420744193713"
              className="flex items-center gap-2 text-white/45 hover:text-white/70 transition-colors text-xs"
            >
              <i className="fa-solid fa-phone text-gold-400 text-[10px]"></i>
              +420 744 193 713
            </a>
            <a
              href="mailto:martin.dobis@zp.metlife.cz"
              className="flex items-center gap-2 text-white/45 hover:text-white/70 transition-colors text-xs"
            >
              <i className="fa-solid fa-envelope text-gold-400 text-[10px]"></i>
              martin.dobis@zp.metlife.cz
            </a>
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gold-400/60 hover:text-gold-400 transition-colors text-xs"
            >
              <i className="fa-solid fa-calendar-check text-gold-400 text-[10px]"></i>
              Nezávazný formulář
            </a>
          </div>
        </div>
        <div className="text-center md:text-right">
          <p className="mb-1">© 2025 Všechna práva vyhrazena</p>
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-400/70 hover:text-gold-400 transition-colors"
          >
            Kontaktní formulář
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Index;