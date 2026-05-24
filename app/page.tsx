"use client";

import { ChangeEvent, useState } from "react";

const moods = [
  { name: "clean", image: "/faces/clean.jpg" },
  { name: "soft glam", image: "/faces/soft-glam.jpg" },
  { name: "punk", image: "/faces/punk.jpg" },
  { name: "editorial", image: "/faces/editorial.jpg" },
  { name: "goth", image: "/faces/goth.jpg" },
  { name: "glowy", image: "/faces/glowy.jpg" },
  { name: "bold color", image: "/faces/bold-color.jpg" },
  { name: "bronze", image: "/faces/bronze.jpg" },
];

const occasions = [
  "everyday",
  "office look",
  "bridal makeup",
  "date night",
  "party",
  "festival",
  "photoshoot",
  "first try",
];

const budgets = ["under €20", "€20 – €50", "€50 – €100", "luxury mix"];

const lookPlans: Record<
  string,
  {
    title: string;
    note: string;
    steps: string[];
    artistTips: string[];
    products: {
      drugstore: string[];
      mid: string[];
      luxury: string[];
    };
  }
> = {
  clean: {
    title: "quiet skin",
    note: "Fresh texture. Light placement. Nothing overworked.",
    steps: [
      "Hydrate first; let skincare settle.",
      "Use concealer only where you want balance.",
      "Tap cream blush high on cheeks.",
      "Brush brows up softly.",
      "Finish with balm or gloss.",
    ],
    artistTips: [
      "Powder only where makeup moves.",
      "Use fingers for cream products if you want it to melt in.",
      "A tiny bit of blush across the nose makes it feel lived-in.",
    ],
    products: {
      own: ["moisturizer", "concealer", "lip balm", "cream blush"],
      drugstore: ["e.l.f. Halo Glow", "NYX brow gel", "Maybelline concealer"],
      mid: ["Rare Beauty blush", "Fenty skin tint", "Glossier balm"],
      luxury: ["Armani Luminous Silk", "Dior Lip Glow", "Westman stick"],
    },
  },
  "soft glam": {
    title: "soft focus glam",
    note: "Warmth, softness, structure.",
    steps: [
      "Keep the base even but light.",
      "Blend warm brown around the eyes.",
      "Use brown liner close to lashes.",
      "Add warmth to cheeks and temples.",
      "Blur the lip edge softly.",
    ],
    artistTips: [
      "Brown liner is softer than black.",
      "Cream blush under powder blush helps it last.",
      "Use bronzer higher if you want lift.",
    ],
    products: {
      own: ["brown liner", "bronzer", "neutral shadow", "clear gloss"],
      drugstore: ["NYX lip liner", "Milani blush", "L’Oréal mascara"],
      mid: ["MAC lip pencil", "Fenty Gloss Bomb", "Rare Beauty bronzer"],
      luxury: ["Charlotte Tilbury liner", "Makeup by Mario palette", "Armani base"],
    },
  },
  punk: {
    title: "lived-in liner",
    note: "A little messy. On purpose.",
    steps: [
      "Keep skin simple.",
      "Draw dark liner close to lashes.",
      "Smudge with a finger or cotton bud.",
      "Add mascara and leave some friction.",
      "Finish with gloss, stain, or deep lip.",
    ],
    artistTips: [
      "Do liner before concealer so you can clean after.",
      "Balm over shadow gives slept-in texture.",
      "Do not overblend.",
    ],
    products: {
      own: ["black pencil", "cotton bud", "old mascara", "balm"],
      drugstore: ["Rimmel kohl liner", "Essence mascara", "NYX gloss"],
      mid: ["Urban Decay pencil", "MAC eye kohl", "Fenty gloss"],
      luxury: ["Victoria Beckham liner", "Pat McGrath shadow", "Gucci lipstick"],
    },
  },
  editorial: {
    title: "one strange detail",
    note: "One idea. One focal point.",
    steps: [
      "Choose one feature.",
      "Keep the rest restrained.",
      "Place shape or color intentionally.",
      "Echo a tiny detail once.",
      "Stop before it over-explains itself.",
    ],
    artistTips: [
      "One strong idea is better than five small ones.",
      "Use tape for sharp graphic shapes.",
      "Gloss creases. Sometimes that is the point.",
    ],
    products: {
      own: ["lipstick as blush", "clear gloss", "bright shadow", "liner"],
      drugstore: ["NYX color liner", "Kiko shadow stick", "e.l.f. putty blush"],
      mid: ["About-Face eye paint", "Danessa Myricks Colorfix", "MAC pigment"],
      luxury: ["Pat McGrath palette", "Dior Backstage", "YSL lip color"],
    },
  },
  goth: {
    title: "romantic dark glam",
    note: "Soft shadow. Smoke. Structure.",
    steps: [
      "Create a soft base.",
      "Smoke cool tones around the eyes.",
      "Keep depth close to lash line.",
      "Use blush quietly.",
      "Finish with berry or black cherry lips.",
    ],
    artistTips: [
      "Plum is softer than black.",
      "Powder around the mouth before dark lip.",
      "Keep one edge soft so it feels romantic.",
    ],
    products: {
      own: ["dark shadow", "brown pencil", "berry lipstick", "powder"],
      drugstore: ["Essence liner", "Maybelline tattoo shadow", "NYX lip cream"],
      mid: ["MAC Diva", "Urban Decay pencil", "Fenty contour"],
      luxury: ["Pat McGrath lipstick", "Chanel shadow quad", "Dior powder"],
    },
  },
  glowy: {
    title: "wet light",
    note: "Glow is placement. Not perfection.",
    steps: [
      "Prep skin generously.",
      "Use sheer base or no base.",
      "Highlight cheekbones, lids and nose bridge.",
      "Use blush as a soft wash.",
      "Finish with balm or gloss.",
    ],
    artistTips: [
      "Glow everywhere becomes shine. Choose the high points.",
      "If oily, powder center and keep glow on cheeks.",
      "Mix highlighter into moisturizer for body glow.",
    ],
    products: {
      own: ["moisturizer", "balm", "cream blush", "clear gloss"],
      drugstore: ["e.l.f. Halo Glow", "Catrice highlighter", "NYX gloss"],
      mid: ["Saie Glowy Gel", "Rare Beauty highlighter", "Fenty Gloss Bomb"],
      luxury: ["Charlotte Tilbury Flawless Filter", "Dior Glow Palette", "Armani Fluid Sheer"],
    },
  },
  "bold color": {
    title: "color with intention",
    note: "One vivid choice can carry the face.",
    steps: [
      "Choose one color family.",
      "Keep skin balanced.",
      "Place color with intent.",
      "Echo it softly somewhere else.",
      "Ground it with gloss or mascara.",
    ],
    artistTips: [
      "Color looks stronger when the rest is calm.",
      "Use concealer on lids first to make pigment pop.",
      "Repeat one tiny color note elsewhere.",
    ],
    products: {
      own: ["bright lipstick", "colored pencil", "blush", "gloss"],
      drugstore: ["NYX color liner", "Kiko shadow stick", "e.l.f. blush"],
      mid: ["About-Face eye paint", "Danessa Myricks Colorfix", "Fenty blush"],
      luxury: ["Pat McGrath palette", "Dior blush", "YSL lip color"],
    },
  },
  bronze: {
    title: "sun warmth",
    note: "Bronze is warmth, not a skin tone.",
    steps: [
      "Choose warmth, not grey shadow.",
      "Place it where sun naturally hits.",
      "Use copper, caramel, rose or espresso around eyes.",
      "Add glow selectively.",
      "Balance with a warm lip.",
    ],
    artistTips: [
      "Bronzer is not contour.",
      "Place warmth slightly higher for lift.",
      "Use the same bronzer softly on eyes.",
    ],
    products: {
      own: ["brown liner", "warm shadow", "bronzer", "lip balm"],
      drugstore: ["Milani bronzer", "NYX lip liner", "Maybelline mascara"],
      mid: ["Fenty bronzer", "Rare Beauty bronzer stick", "MAC lip pencil"],
      luxury: ["Makeup by Mario Skin Enhancer", "Charlotte Tilbury bronzer", "Armani glow base"],
    },
  },
};

export default function Home() {
  const [selectedMood, setSelectedMood] = useState("soft glam");
  const [selectedOccasion, setSelectedOccasion] = useState("everyday");
  const [selectedBudget, setSelectedBudget] = useState("€20 – €50");
  const [preview, setPreview] = useState<string | null>(null);
  const [showPlan, setShowPlan] = useState(false);

  const plan = lookPlans[selectedMood];

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setShowPlan(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f6f1e8] text-black">
      <section className="relative overflow-hidden">
        <div className="grid min-h-[820px] md:grid-cols-[0.9fr_1.1fr]">
          <div className="relative z-20 flex flex-col px-8 pb-12 pt-8 md:px-10 md:pt-10">
            <div className="flex items-center justify-between font-mono text-[13px] uppercase tracking-tight">
              <div className="text-[44px] font-black tracking-[-0.08em]">
                Lumora
              </div>

              <nav className="hidden gap-10 md:flex">
                <a className="underline underline-offset-4">home</a>
                <a>ethos</a>
                <a>how it works</a>
                <a>journal</a>
              </nav>

              <button className="rounded-full border border-black px-5 py-2 text-xs">
                16+
              </button>
            </div>

            <div className="mt-12 w-fit bg-[#f5b400] px-4 py-2 font-mono text-xs font-black uppercase tracking-wide">
              trial mode open
            </div>

            <div className="mt-6">
              <h1 className="text-[88px] font-black uppercase leading-[0.82] tracking-[-0.08em] md:text-[126px]">
                what’s your
                <span className="block">
                  beauty <span className="italic text-[#e2231a]">mood</span>
                </span>
                <span className="block font-serif text-[0.68em] font-normal italic lowercase tracking-[-0.04em]">
                  today?
                </span>
              </h1>

              <p className="mt-8 max-w-[420px] font-mono text-[17px] leading-relaxed">
                Turn any makeup reference into a real-life plan: what to use,
                where to put it, and how to make it work with your budget.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#build"
                  className="bg-black px-7 py-4 font-mono text-sm uppercase tracking-wide text-white transition hover:translate-y-[-2px]"
                >
                  try free ↗
                </a>
                <a
                  href="#pricing"
                  className="border border-black px-7 py-4 font-mono text-sm uppercase tracking-wide"
                >
                  Lumora Club
                </a>
              </div>
            </div>
          </div>

          <div className="relative hidden overflow-hidden md:block">
            <div className="absolute left-0 top-0 h-[420px] w-[330px] rotate-[-3deg] overflow-hidden shadow-2xl">
              <img src="/faces/soft-glam.jpg" alt="" className="h-full w-full object-cover" />
            </div>

            <div className="absolute right-24 top-0 h-[360px] w-[260px] rotate-[4deg] overflow-hidden shadow-2xl">
              <img src="/faces/bold-color.jpg" alt="" className="h-full w-full object-cover" />
            </div>

            <div className="absolute left-[240px] top-[120px] z-30 h-[520px] w-[260px] overflow-hidden rounded-[44px] border-[10px] border-[#2a2a2a] bg-black shadow-[0_30px_100px_rgba(0,0,0,0.35)]">
              <img src="/faces/clean.jpg" alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent px-5 pb-5 pt-20">
                <div className="flex items-center justify-between font-mono text-[11px] text-white/70">
                  <span>VIDEO</span>
                  <span className="text-[#f5b400]">PHOTO</span>
                  <span>PORTRAIT</span>
                </div>
                <div className="mt-5 flex items-center justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border-[5px] border-white">
                    <div className="h-14 w-14 rounded-full bg-white" />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute left-[120px] top-[380px] h-[340px] w-[240px] rotate-[-8deg] overflow-hidden shadow-2xl">
              <img src="/faces/punk.jpg" alt="" className="h-full w-full object-cover" />
            </div>

            <div className="absolute right-0 top-[140px] h-[340px] w-[260px] rotate-[5deg] overflow-hidden shadow-2xl">
              <img src="/faces/editorial.jpg" alt="" className="h-full w-full object-cover" />
            </div>

            <div className="absolute bottom-0 right-10 h-[220px] w-[320px] overflow-hidden shadow-xl">
              <img src="/faces/glowy.jpg" alt="" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-4 border-y border-black font-mono text-sm font-black uppercase md:grid-cols-8">
        {["technique", "instinct", "texture", "budget", "play", "shop", "save", "repeat"].map(
          (item, index) => (
            <div
              key={index}
              className={`flex items-center justify-between border-r border-black px-6 py-4 ${
                [
                  "bg-[#fbba16]",
                  "bg-[#00492c] text-white",
                  "bg-[#9bccd0]",
                  "bg-[#e22028] text-white",
                  "bg-[#e2b2b4]",
                ][index % 5]
              }`}
            >
              {item}
              <span>✱</span>
            </div>
          )
        )}
      </section>

      <section id="build" className="grid bg-[#082a8f] text-white md:grid-cols-[260px_1fr]">
        <aside className="border-r border-black/20 bg-[#e2b2b4] text-black">
          {["pick a direction", "choose occasion", "set budget", "add your face"].map(
            (item, index) => (
              <div
                key={item}
                className="flex gap-8 border-b border-black/20 px-8 py-10 font-mono uppercase"
              >
                <span className="text-2xl">{String(index + 1).padStart(2, "0")}</span>
                <span>{item}</span>
              </div>
            )
          )}
        </aside>

        <div className="px-8 py-8 md:px-12">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-5xl font-black uppercase leading-[0.9]">
              some looks whisper.
              <span className="block italic">some looks bite.</span>
            </h2>
            <span className="hidden font-mono text-sm uppercase md:block">trial mode →</span>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-8">
            {moods.map((mood) => (
              <button
                key={mood.name}
                onClick={() => {
                  setSelectedMood(mood.name);
                  setShowPlan(false);
                }}
                className={`border p-2 text-left transition ${
                  selectedMood === mood.name
                    ? "border-[#ff7b00] bg-[#14379f]"
                    : "border-white/10 bg-white/5"
                }`}
              >
                <img src={mood.image} alt={mood.name} className="h-40 w-full object-cover" />
                <p className="mt-2 font-mono text-sm lowercase">{mood.name}</p>
              </button>
            ))}
          </div>

          <div className="mt-10 border-t border-white/15 pt-10">
            <p className="font-mono text-xs uppercase text-[#fbba16]">occasion</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {occasions.map((occasion) => (
                <button
                  key={occasion}
                  onClick={() => {
                    setSelectedOccasion(occasion);
                    setShowPlan(false);
                  }}
                  className={`px-4 py-3 font-mono text-sm lowercase ${
                    selectedOccasion === occasion
                      ? "bg-[#fbba16] text-black"
                      : "border border-white/20 text-white"
                  }`}
                >
                  {occasion}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 border-t border-white/15 pt-10">
            <p className="font-mono text-xs uppercase text-[#fbba16]">budget</p>
            <div className="mt-4 grid gap-3 md:grid-cols-4">
              {budgets.map((budget) => (
                <button
                  key={budget}
                  onClick={() => {
                    setSelectedBudget(budget);
                    setShowPlan(false);
                  }}
                  className={`px-5 py-5 font-mono text-sm lowercase ${
                    selectedBudget === budget
                      ? "bg-[#e22028] text-white"
                      : "border border-white/20 text-white"
                  }`}
                >
                  {budget}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-8 border-t border-white/15 pt-10 md:grid-cols-[260px_1fr_1fr]">
            <div>
              <h2 className="text-4xl font-black uppercase leading-none">add your face</h2>
              <p className="mt-3 font-serif text-2xl italic text-white/70">Only when you feel like it.</p>

              <label className="mt-8 flex h-40 cursor-pointer flex-col items-center justify-center border border-dashed border-white/30 bg-white/5 font-mono uppercase">
                📷
                <span className="mt-2 font-black">upload photo</span>
                <span className="text-xs lowercase text-white/50">local preview only for now</span>
                <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
              </label>
            </div>

            <div className="rotate-[-2deg] bg-white p-3 text-black shadow-xl">
              <img src={preview || "/faces/upload-preview.jpg"} alt="preview" className="h-80 w-full object-cover" />
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-[#e2b2b4] px-5 py-2 font-mono text-sm">{selectedMood}</span>
                <span className="rounded-full bg-[#fbba16] px-5 py-2 font-mono text-sm">{selectedBudget}</span>
              </div>
            </div>

            <div className="bg-[#e22028] p-8 text-white">
              <p className="font-mono text-xs uppercase">trial result</p>
              <h2 className="mt-3 text-5xl font-black uppercase leading-none">your makeup plan</h2>

              <div className="mt-8 space-y-5 font-mono text-sm">
                <p>◎ base-to-finish steps</p>
                <p>◎ artist notes for placement and wear</p>
                <p>◎ product swaps by budget</p>
                <p>◎ shop buttons ready for affiliate links</p>
              </div>

              <button
                onClick={() => setShowPlan(true)}
                className="mt-8 bg-black px-7 py-4 font-mono text-sm font-black uppercase text-white"
              >
                create my plan
              </button>
            </div>
          </div>

          {showPlan && (
            <section className="mt-10 grid gap-8 border-t border-white/15 pt-10 md:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="font-mono text-xs uppercase text-[#fbba16]">
                  {selectedOccasion} / {selectedBudget}
                </p>
                <h2 className="mt-3 text-6xl font-black uppercase leading-[0.88] tracking-[-0.06em]">
                  {plan.title}
                </h2>
                <p className="mt-5 max-w-md font-serif text-2xl italic text-white/75">{plan.note}</p>

                <div className="mt-8 border border-white/15 bg-white/5 p-5">
                  <p className="font-mono text-xs uppercase text-[#fbba16]">artist notes</p>
                  <div className="mt-4 space-y-3 font-mono text-sm text-white/75">
                    {plan.artistTips.map((tip) => (
                      <p key={tip}>✶ {tip}</p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 text-black shadow-md">
                <p className="font-mono text-xs uppercase tracking-widest text-[#e22028]">recreate it</p>

                <div className="mt-5 space-y-3">
                  {plan.steps.map((step, index) => (
                    <div key={step} className="grid grid-cols-[40px_1fr] gap-3 bg-[#f6f3ee] p-4 font-mono text-sm">
                      <span className="font-black">{String(index + 1).padStart(2, "0")}</span>
                      <p>{step}</p>
                    </div>
                  ))}
                </div>

                <p className="mt-7 font-mono text-xs uppercase tracking-widest text-[#e22028]">
                  product logic / affiliate-ready
                </p>

                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <ProductBox title="drugstore" items={plan.products.drugstore} shop />
                  <ProductBox title="mid-range" items={plan.products.mid} shop />
                  <ProductBox title="luxury" items={plan.products.luxury} shop />
                </div>
              </div>
            </section>
          )}
        </div>
      </section>

      <section id="pricing" className="grid gap-6 bg-[#f6f1e8] px-8 py-16 md:grid-cols-2 md:px-12">
        <div className="border border-black bg-white p-8">
          <p className="font-mono text-xs uppercase text-[#e22028]">trial mode</p>
          <h2 className="mt-3 text-5xl font-black uppercase leading-none">try the tool</h2>
          <p className="mt-5 font-mono text-sm leading-relaxed">
            One look plan, limited product suggestions, no saved archive.
          </p>
          <button className="mt-8 bg-black px-7 py-4 font-mono text-sm uppercase text-white">
            start free
          </button>
        </div>

        <div className="border border-black bg-[#e22028] p-8 text-white">
          <p className="font-mono text-xs uppercase text-[#fbba16]">Lumora Club</p>
          <h2 className="mt-3 text-5xl font-black uppercase leading-none">unlimited looks</h2>
          <p className="mt-5 font-mono text-sm leading-relaxed">
            Saved looks, deeper product swaps, bridal/office/event modes and affiliate shoplists.
          </p>
          <button className="mt-8 bg-black px-7 py-4 font-mono text-sm uppercase text-white">
            join soon
          </button>
        </div>
      </section>
<section className="border-t border-black bg-black px-8 py-20 text-white md:px-12">

  <div className="mx-auto max-w-3xl">

    <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#fbba16]">
      Lumora Club
    </p>

    <h2 className="mt-4 text-6xl font-black uppercase leading-[0.9] tracking-[-0.06em]">

      preview the look
      <span className="block italic text-[#fbba16]">
        before you make it
      </span>

    </h2>

    <p className="mt-8 max-w-xl font-mono text-sm leading-relaxed text-white/70">

      Upload your face. Try moods, occasions and product tiers.
      Get a realistic makeup preview, artist notes and shop-ready
      product recommendations.

    </p>

    <div className="mt-10 flex flex-col gap-4 md:flex-row">

      <input
        type="email"
        placeholder="your@email.com"
        className="h-14 flex-1 border border-white/20 bg-white/5 px-5 font-mono text-sm outline-none placeholder:text-white/40"
      />

      <button className="h-14 bg-[#fbba16] px-8 font-mono text-sm uppercase text-black transition hover:translate-y-[-2px]">

        join waitlist

      </button>

    </div>

    <div className="mt-5 flex flex-wrap gap-3 font-mono text-[11px] uppercase text-white/40">

      <span>AI preview</span>

      <span>✱</span>

      <span>bridal mode</span>

      <span>✱</span>

      <span>office looks</span>

      <span>✱</span>

      <span>saved looks</span>

      <span>✱</span>

      <span>product matching</span>

    </div>
  </div>
</section>
      <footer className="flex flex-col gap-4 bg-[#f6f1e8] px-8 py-6 font-mono text-xs uppercase md:flex-row md:items-center md:justify-between md:px-12">
        <span className="text-3xl font-black">Lumora</span>
        <span className="font-serif text-2xl lowercase italic">try the look. keep the face.</span>
        <span>instagram &nbsp; tiktok &nbsp; pinterest</span>
      </footer>
    </main>
  );
}

function ProductBox({
  title,
  items,
  shop = false,
}: {
  title: string;
  items: string[];
  shop?: boolean;
}) {
  return (
    <div className="border border-black/10 bg-[#f6f3ee] p-4">
      <p className="font-mono text-xs font-black uppercase text-[#e22028]">
        {title}
      </p>

      <div className="mt-3 space-y-2 font-mono text-xs">
        {items.map((item) => (
          <div key={item} className="flex items-center justify-between gap-3">
            <span>• {item}</span>
            {shop && (
              <a href="#" className="text-[#e22028] underline underline-offset-2">
                shop
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}