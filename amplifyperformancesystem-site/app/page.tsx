import React from "react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 antialiased flex flex-col">
      <SiteNav />
      <section className="text-center py-32 px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Amplify Performance System
        </h1>
        <p className="mt-6 text-neutral-400 max-w-xl mx-auto text-base md:text-lg">
          The system that connects performance, sport IQ, mindset, and leadership.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="/our-story"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Our Story
          </a>
          <a
            href="/athletes"
            className="border border-neutral-600 hover:border-red-500 text-neutral-300 hover:text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Explore APS
          </a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
