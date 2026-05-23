"use client";

import { ChangeEvent, useState } from "react";

const moods = [
  { name: "clean", image: "/faces/clean.jpg" },
  { name: "soft glam", image: "/faces/soft-glam.jpg" },
  { name: "punk", image: "/faces/punk.jpg" },
  { name: "editorial", image: "/faces/editorial.jpg" },
  { name: "goth", image: "/faces/goth.jpg" },
  { name: "glowy", image: "/faces/glamy.jpg" },
  { name: "bold color", image: "/faces/bold-color.jpg" },
  { name: "bronze", image: "/faces/bronze.jpg" },
];

const heroPolaroids = [
  { label: "soft glam", image: "/faces/soft-glam.jpg", rotate: "-rotate-6" },
  { label: "clean", image: "/faces/clean.jpg", rotate: "rotate-3" },
  { label: "editorial", image: "/faces/editorial.jpg", rotate: "rotate-6" },
  { label: "punk", image: "/faces/punk.jpg", rotate: "-rotate-3" },
  { label: "goth", image: "/faces/goth.jpg", rotate: "rotate-2" },
  { label: "bold color", image: "/faces/bold-color.jpg", rotate: "-rotate-2" },
  { label: "drag", image: "/faces/drag.jpg", rotate: "rotate-4" },
  { label: "bronze", image: "/faces/bronze.jpg", rotate: "-rotate-4" },
  { label: "glowy", image: "/faces/glamy.jpg", rotate: "rotate-3" },
];

const budgets = ["use what i own", "under €20", "€20 – €50", "luxury mix"];

const lookPlans: Record<
  string,
  {
    title: string;
    note: string;
    steps: string[];
    products: string[];
  }
> = {
  clean: {
    title: "soft clean glow",
    note: "Quiet skin, soft edges, nothing overworked.",
    steps: [
      "Start with hydration, not coverage.",
      "Use tint or concealer only where you want balance.",
      "Tap cream blush high on cheeks.",
      "Brush brows up without forcing the shape.",
      "Finish with balm, gloss, or a sheer lip.",
    ],
    products: ["skin tint", "cream blush", "brow gel", "lip balm"],
  },
  "soft glam": {
    title: "soft focus glam",
    note: "Polished, warm, diffused. Still you.",
    steps: [
      "Keep the base light and alive.",
      "Blend warm brown around the eyes.",
      "Use brown liner close to the lash line.",
      "Add gentle warmth where you want depth.",
      "Finish with a nude, rose, brown, or berry lip.",
    ],
    products: ["brown shadow", "brown liner", "blush", "lip liner"],
  },
  punk: {
    title: "lived-in liner",
    note: "A little messy. On purpose.",
    steps: [
      "Keep skin simple.",
      "Use black or dark brown pencil around the lash line.",
      "Smudge with a finger, cotton bud, or brush.",
      "Add blush only if you want contrast.",
      "Finish with stain, gloss, or a deep lip.",
    ],
    products: ["black pencil", "dark shadow", "clear gloss", "deep lip"],
  },
  editorial: {
    title: "one strange detail",
    note: "A face with a point of view.",
    steps: [
      "Choose one feature: eyes, cheeks, lips, or shine.",
      "Keep the rest restrained.",
      "Place color somewhere slightly unexpected.",
      "Echo the color once, softly.",
      "Stop before it becomes too explained.",
    ],
    products: ["cream pigment", "gloss", "mascara", "blush"],
  },
  goth: {
    title: "romantic dark glam",
    note: "Smoke, shadow, gloss, restraint.",
    steps: [
      "Create a soft base.",
      "Smoke dark shadow around the eyes.",
      "Use grey-brown, plum, black, or espresso tones.",
      "Keep blush muted or very intentional.",
      "Finish with brown, berry, plum, or black cherry lips.",
    ],
    products: ["smoky shadow", "cool contour", "berry lip", "powder"],
  },
  glowy: {
    title: "wet light",
    note: "Glow is placement. Not a filter.",
    steps: [
      "Prep skin generously.",
      "Use sheer base or no base.",
      "Add highlight to cheekbones, lids, and nose bridge.",
      "Use blush as a soft wash.",
      "Finish lips with balm or gloss.",
    ],
    products: ["moisturizer", "liquid highlight", "balm", "cream blush"],
  },
  "bold color": {
    title: "color with a point",
    note: "One vivid choice can carry the whole face.",
    steps: [
      "Choose one color family.",
      "Keep skin balanced.",
      "Place color on eyes, cheeks, or lips.",
      "Echo the color softly somewhere else.",
      "Use gloss or mascara to pull it together.",
    ],
    products: ["bright shadow", "color liner", "cream blush", "gloss"],
  },
  bronze: {
    title: "warm sunlit skin",
    note: "Warmth, light, shadow. That’s the look.",
    steps: [
      "Choose a bronzer that brings warmth.",
      "Place it where the sun naturally hits.",
      "Use copper, caramel, rose, or espresso around the eyes.",
      "Add glow only where you want light.",
      "Finish with a lip that sits well with the warmth.",
    ],
    products: ["bronzer", "warm shadow", "highlight", "lip liner"],
  },
};

export default function Home() {
  const [selectedMood, setSelectedMood] = useState("soft glam");
  const [selectedBudget, setSelectedBudget] = useState("use what i own");
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
    <main className="min-h-screen bg-[#efe0ca] text-[#1b120d]">
      <header className="flex items-center justify-between px-6 py-5 font-mono text-sm font-black uppercase tracking-widest md:px-10">
        <div className="text-3xl text-[#b94f2f]">Lumora</div>

        <nav className="hidden gap-10 md:flex">
          <a>home</a>
          <a>ethos</a>
          <a>how it works</a>
          <a>journal</a>
        </nav>

        <button className="rounded-full bg-[#111] px-7 py-3 text-white">
          16+
        </button>
      </header>

      <section className="grid gap-8 px-6 pb-12 pt-6 md:grid-cols-[0.9fr_1.1fr] md:px-10">
        <div className="relative">
          <p className="mb-5 w-fit rounded-full bg-[#c96b2d] px-4 py-2 font-mono text-xs font-black uppercase tracking-widest text-white">
            beauty, built by hand
          </p>

          <h1 className="max-w-xl text-[72px] font-black uppercase leading-[0.82] tracking-[-0.07em] text-[#32120b] md:text-[118px]">
            what’s your
            <span className="block text-[#c95e51]">beauty mood</span>
            <span className="block font-serif text-[0.75em] font-normal lowercase italic tracking-[-0.04em]">
              today?
            </span>
          </h1>

          <p className="mt-8 max-w-md font-mono text-sm leading-relaxed">
            Lumora turns a makeup reference into a real-life plan: what to use,
            where to put it, and how to make it work with your budget.
          </p>

          <button className="mt-8 rounded-full bg-[#b94f2f] px-8 py-4 font-mono text-sm uppercase tracking-widest text-white">
            build your look →
          </button>

          <div className="mt-8 rounded-[28px] bg-[#f7ecd9] p-5 shadow-md md:max-w-sm">
            <p className="font-serif text-3xl italic">
              The face stays. The mood changes.
            </p>
            <p className="mt-3 font-mono text-xs leading-relaxed">
              16+ because your face is not content. Uploading it should feel
              considered, not casual.
            </p>
          </div>
        </div>

        <div className="relative grid grid-cols-3 gap-3">
          <div className="absolute left-4 top-16 z-20 rotate-[-8deg] rounded-full bg-[#d4a64e] px-6 py-5 text-center font-mono text-sm font-black">
            use what <br /> you already <br /> own ♡
          </div>

          <div className="absolute right-2 top-56 z-20 rotate-6 rounded-full bg-[#c95e72] px-5 py-5 text-center font-mono text-sm font-black">
            taste over <br /> trend over <br /> noise
          </div>

          {heroPolaroids.map((item) => (
            <div
              key={item.label}
              className={`bg-[#f7ecd9] p-3 shadow-xl ${item.rotate}`}
            >
              <img
                src={item.image}
                alt={item.label}
                className="h-40 w-full object-cover md:h-52"
              />
              <p className="mt-2 text-center font-serif text-2xl italic">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-[#8b4a2f] bg-[#c96b2d] py-3 font-mono text-sm uppercase tracking-widest text-[#23120c]">
        <p className="text-center">
          technique ✶ instinct ✶ texture ✶ budget ✶ play ✶
        </p>
      </section>

      <section className="grid gap-8 border-b border-[#b89976] px-6 py-10 md:grid-cols-[260px_1fr] md:px-10">
        <div>
          <p className="font-mono text-xs uppercase">step 01</p>
          <h2 className="mt-2 text-4xl font-black uppercase leading-none">
            pick a direction
          </h2>
          <p className="mt-4 font-serif text-2xl italic">
            Some looks whisper. Some looks bite.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-8">
          {moods.map((mood) => (
            <button
              key={mood.name}
              onClick={() => {
                setSelectedMood(mood.name);
                setShowPlan(false);
              }}
              className={`rounded-lg border p-2 text-left transition ${
                selectedMood === mood.name
                  ? "border-[#b94f2f] bg-[#f4d4c1]"
                  : "border-[#9b8267] bg-[#f7ecd9]"
              }`}
            >
              <p className="mb-2 font-mono text-xs font-black uppercase text-[#b94f2f]">
                {mood.name}
              </p>
              <img
                src={mood.image}
                alt={mood.name}
                className="h-32 w-full rounded object-cover"
              />
            </button>
          ))}
        </div>
      </section>

      <section className="grid gap-8 border-b border-[#b89976] px-6 py-10 md:grid-cols-[260px_1fr] md:px-10">
        <div className="bg-[#e3a09a] p-5">
          <p className="font-mono text-xs uppercase">step 02</p>
          <h2 className="mt-2 text-4xl font-black uppercase leading-none">
            set the budget
          </h2>
          <p className="mt-4 font-serif text-2xl italic">
            More product is not always more look.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-4">
          {budgets.map((budget) => (
            <button
              key={budget}
              onClick={() => {
                setSelectedBudget(budget);
                setShowPlan(false);
              }}
              className={`rounded-lg border px-6 py-6 font-mono text-sm uppercase ${
                selectedBudget === budget
                  ? "bg-[#b94f2f] text-white"
                  : "border-[#9b8267] bg-[#f7ecd9]"
              }`}
            >
              {budget}
            </button>
          ))}
        </div>
      </section>

      <section className="grid gap-8 border-b border-[#b89976] px-6 py-12 md:grid-cols-[1fr_1fr] md:px-10">
        <div>
          <p className="font-mono text-xs uppercase text-[#b94f2f]">
            product logic
          </p>
          <h2 className="mt-3 text-6xl font-black uppercase leading-[0.88] tracking-[-0.06em]">
            buy less.
            <span className="block font-serif font-normal lowercase italic">
              understand more.
            </span>
          </h2>
        </div>

        <div className="space-y-5 font-mono text-sm leading-relaxed">
          <p>
            A brown liner can soften an eye, deepen a lip, or sketch a shadow.
            Blush can live on cheeks, nose, lids, or lips. Balm can turn powder
            into shine.
          </p>
          <p>
            Lumora is built for product logic: the reason something works, the
            cheaper swap, the luxury option, and the thing already sitting in
            your bag.
          </p>
        </div>
      </section>

      <section className="grid gap-8 px-6 py-10 md:grid-cols-[260px_1fr_1fr] md:px-10">
        <div>
          <p className="font-mono text-xs uppercase">step 03</p>
          <h2 className="mt-2 text-4xl font-black uppercase leading-none">
            add your face
          </h2>
          <p className="mt-3 font-serif text-2xl italic">
            Only when you feel like it.
          </p>

          <label className="mt-8 flex h-40 cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-[#8b6f58] bg-[#f7ecd9] font-mono uppercase">
            📷
            <span className="mt-2 font-black">upload photo</span>
            <span className="text-xs lowercase">local preview only for now</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        </div>

        <div className="-rotate-3 bg-[#f7ecd9] p-4 shadow-xl">
          <img
            src={preview || "/faces/upload-preview.jpg"}
            alt="preview"
            className="h-80 w-full object-cover"
          />
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-[#df7890] px-5 py-2 font-mono text-sm">
              {selectedMood}
            </span>
            <span className="rounded-full bg-[#d68a22] px-5 py-2 font-mono text-sm">
              {selectedBudget}
            </span>
          </div>
        </div>

        <div className="relative rounded-sm bg-[#bd5a46] p-8 text-[#f7ecd9]">
          <div className="absolute right-8 top-[-20px] rotate-6 bg-[#d8ae61] p-5 font-mono text-sm text-black shadow">
            technique <br /> not magic ✶
          </div>

          <p className="font-mono text-xs uppercase">you get</p>
          <h2 className="mt-3 text-5xl font-black uppercase leading-none">
            your makeup plan
          </h2>

          <div className="mt-8 space-y-5 font-mono text-sm">
            <p>◎ steps you can actually follow</p>
            <p>◎ product logic: what goes where and why</p>
            <p>◎ swaps for what you own, drugstore, mid-range or luxury</p>
            <p>◎ a look to make — not a face to become</p>
          </div>

          <button
            onClick={() => setShowPlan(true)}
            className="mt-8 rounded-full bg-[#f7ecd9] px-7 py-4 font-mono text-sm font-black uppercase text-[#1b120d]"
          >
            create my plan
          </button>
        </div>
      </section>

      {showPlan && (
        <section className="grid gap-8 border-t border-[#b89976] bg-[#f4dfc8] px-6 py-12 md:grid-cols-[0.9fr_1.1fr] md:px-10">
          <div>
            <p className="font-mono text-xs uppercase text-[#b94f2f]">
              your look plan
            </p>
            <h2 className="mt-3 text-6xl font-black uppercase leading-[0.88] tracking-[-0.06em]">
              {plan.title}
            </h2>
            <p className="mt-5 max-w-md font-serif text-2xl italic">
              {plan.note}
            </p>
          </div>

          <div className="rounded-[28px] bg-[#f7ecd9] p-6 shadow-md">
            <p className="font-mono text-xs uppercase tracking-widest text-[#b94f2f]">
              recreate it
            </p>

            <div className="mt-5 space-y-3">
              {plan.steps.map((step, index) => (
                <div
                  key={step}
                  className="grid grid-cols-[40px_1fr] gap-3 rounded-2xl bg-[#efe0ca] p-4 font-mono text-sm"
                >
                  <span className="font-black">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p>{step}</p>
                </div>
              ))}
            </div>

            <p className="mt-7 font-mono text-xs uppercase tracking-widest text-[#b94f2f]">
              product logic / {selectedBudget}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {plan.products.map((product) => (
                <span
                  key={product}
                  className="rounded-full bg-[#1b120d] px-4 py-2 font-mono text-sm text-white"
                >
                  {product}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-[#b89976] bg-[#1b120d] px-6 py-12 text-[#f7ecd9] md:px-10">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <h2 className="text-6xl font-black uppercase leading-[0.88] tracking-[-0.06em]">
            made for
            <span className="block font-serif font-normal lowercase italic">
              the mirror.
            </span>
          </h2>

          <div className="space-y-5 font-mono text-sm leading-relaxed text-[#ead8bd]">
            <p>
              Bathroom light. Backseat liner. Wedding nerves. A borrowed blush.
              A saved reference. A look you tried at midnight and almost got
              right.
            </p>
            <p>
              Lumora sits somewhere between a makeup artist, an older cousin,
              and a very specific group chat. Less fixing. More experimenting.
            </p>
          </div>
        </div>
      </section>

      <footer className="flex flex-col gap-4 border-t border-[#b89976] px-6 py-6 font-mono text-xs uppercase md:flex-row md:items-center md:justify-between md:px-10">
        <span className="text-3xl font-black text-[#b94f2f]">Lumora</span>
        <span className="font-serif text-2xl lowercase italic">
          try the look. keep the face.
        </span>
        <span>instagram &nbsp; tiktok &nbsp; pinterest</span>
      </footer>
    </main>
  );
}