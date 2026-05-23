"use client";

import { useState } from "react";

const styles = [
  "Clean Girl",
  "Soft Glam",
  "Rihanna Energy",
  "Punk Glam",
  "Editorial",
  "Goth Beauty",
  "Glass Skin",
  "Bold Color",
];

const results: Record<
  string,
  {
    title: string;
    description: string;
    tags: string[];
  }
> = {
  "Clean Girl": {
    title: "Polished Clean Glow",
    description:
      "Your look direction is fresh skin, brushed brows, soft cream blush and glossy lips.",
    tags: ["Skin Tint", "Clear Brow Gel", "Cream Blush", "Glossy Lips"],
  },
  "Soft Glam": {
    title: "Soft Sculpted Glam",
    description:
      "Your beauty energy leans toward diffused eyes, warm neutrals, soft contour and a blurred lip.",
    tags: ["Warm Browns", "Soft Liner", "Peach Blush", "Nude Lip"],
  },
  "Rihanna Energy": {
    title: "Bold Luminous Confidence",
    description:
      "Think radiant skin, sculpted glow, statement lips and high-impact confidence.",
    tags: ["Golden Glow", "Bold Lip", "Soft Smoke", "Glossy Highlight"],
  },
  "Punk Glam": {
    title: "Graphic Punk Beauty",
    description:
      "Your look is built around attitude: sharp liner, smoked edges, cool tones and unapologetic contrast.",
    tags: ["Black Liner", "Smoked Eyes", "Cool Blush", "Vinyl Lip"],
  },
  Editorial: {
    title: "Art School Editorial",
    description:
      "This direction is expressive, artistic and unexpected, with color, shape and texture leading the look.",
    tags: ["Color Wash", "Graphic Shape", "Gloss Texture", "Statement Blush"],
  },
  "Goth Beauty": {
    title: "Romantic Dark Glam",
    description:
      "Deep tones, sculpted skin, smoked eyes and dramatic lips create a powerful beauty identity.",
    tags: ["Deep Plum", "Smoky Eye", "Porcelain Glow", "Dark Lip"],
  },
  "Glass Skin": {
    title: "Luminous Glass Skin",
    description:
      "Your direction is all about glow: hydrated-looking skin, sheer color and reflective highlights.",
    tags: ["Dewy Base", "Liquid Highlight", "Tinted Balm", "Soft Flush"],
  },
  "Bold Color": {
    title: "Electric Color Story",
    description:
      "A playful, expressive look with vivid color, high contrast and beauty as self-expression.",
    tags: ["Bright Shadow", "Color Liner", "Juicy Blush", "Gloss Finish"],
  },
};

export default function Home() {
  const [selectedStyle, setSelectedStyle] = useState("Clean Girl");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(false);

  const currentResult = results[selectedStyle];

  const handleScan = () => {
    setLoading(true);
    setResult(false);

    setTimeout(() => {
      setLoading(false);
      setResult(true);
    }, 2500);
  };

  const resetScan = () => {
    setResult(false);
    setLoading(false);
  };

  return (
    <main className="overflow-hidden bg-[#f8f3ee] text-[#111111]">
      <section className="relative flex min-h-screen flex-col justify-center px-6 py-20 md:px-12">
        <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-pink-300 opacity-30 blur-3xl"></div>

        <div className="relative z-10">
          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-[#ff4fa3]">
            AI BEAUTY IDENTITY
          </p>

          <h1 className="max-w-6xl text-7xl font-bold uppercase leading-[0.9] tracking-[-0.05em] md:text-[170px]">
            Discover
            <span className="block font-serif italic lowercase text-[#ff4fa3]">
              your next
            </span>
            beauty era.
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-[#444444] md:text-xl">
            Lumora is an inclusive AI makeup inspiration platform for every
            face, every identity and every aesthetic.
          </p>
        </div>
      </section>

      <section className="px-6 pb-32 md:px-12">
        <div className="rounded-[50px] bg-black p-8 text-white md:p-16">
          <p className="text-sm uppercase tracking-[0.4em] text-[#ff4fa3]">
            START YOUR SCAN
          </p>

          <h2 className="mt-6 max-w-4xl text-5xl font-bold uppercase leading-[0.9] md:text-7xl">
            Choose your beauty energy.
          </h2>

          <p className="mt-6 max-w-2xl text-lg text-neutral-300">
            Pick a direction, upload a selfie later, and let Lumora create a
            look guide with steps, colors and product inspiration.
          </p>

          <p className="mt-4 text-sm text-neutral-500">
            Lumora is designed for users aged 16+.
          </p>

          {!loading && !result && (
            <div className="mt-12 rounded-[40px] border border-white/20 bg-white/5 p-8 md:p-10">
              <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
                Select an aesthetic
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {styles.map((style) => (
                  <button
                    key={style}
                    onClick={() => setSelectedStyle(style)}
                    className={`rounded-full px-5 py-3 text-sm transition ${
                      selectedStyle === style
                        ? "bg-[#ff4fa3] text-white"
                        : "border border-white/20 text-white hover:bg-white hover:text-black"
                    }`}
                  >
                    {style}
                  </button>
                ))}
              </div>

              <div className="mt-10 flex flex-col items-center justify-center rounded-[30px] border border-dashed border-white/30 px-6 py-16 text-center">
                <p className="text-xl font-medium">
                  Selected: {selectedStyle}
                </p>

                <p className="mt-3 text-sm text-neutral-400">
                  Selfie upload comes next. For now, test the AI experience.
                </p>

                <button
                  onClick={handleScan}
                  className="mt-8 rounded-full bg-[#ff4fa3] px-8 py-4 text-sm uppercase tracking-[0.2em] text-white transition hover:scale-105"
                >
                  Start AI Scan
                </button>
              </div>
            </div>
          )}

          {loading && (
            <div className="mt-12 rounded-[40px] border border-white/20 bg-white/5 p-16 text-center">
              <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-white/20 border-t-[#ff4fa3]"></div>

              <h3 className="mt-8 text-3xl font-bold uppercase">
                Building your {selectedStyle} look...
              </h3>

              <p className="mt-4 text-neutral-400">
                Mapping color, texture, contrast and creative direction.
              </p>
            </div>
          )}

          {result && (
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-[40px] bg-[#ff4fa3] p-8 text-white">
                <p className="text-sm uppercase tracking-[0.3em]">
                  BEAUTY RESULT
                </p>

                <h3 className="mt-6 text-5xl font-bold uppercase leading-none">
                  {currentResult.title}
                </h3>

                <p className="mt-6 text-lg text-pink-100">
                  {currentResult.description}
                </p>
              </div>

              <div className="rounded-[40px] bg-white p-8 text-black">
                <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                  LOOK ELEMENTS
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {currentResult.tags.map((item) => (
                    <div
                      key={item}
                      className="rounded-full bg-black px-4 py-2 text-sm text-white"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <button className="mt-10 rounded-full bg-black px-8 py-4 text-sm uppercase tracking-[0.2em] text-white transition hover:scale-105">
                  Unlock Full Report
                </button>

                <button
                  onClick={resetScan}
                  className="mt-4 block text-sm text-neutral-500 underline"
                >
                  Try another aesthetic
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}