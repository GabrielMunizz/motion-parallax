"use client";
import MotionParallax from "@/components/MotionParallax";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);
  return (
    <main>
      <MotionParallax />
    </main>
  );
}
