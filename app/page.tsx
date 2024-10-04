"use client";


import Loader from "@/components/Loader";
import { gsap } from "gsap";
import { useLayoutEffect, useState } from "react";

export default function Home() {
  // Explicitly type the timeline state
  const [loaderFinished, setLoaderFinished] = useState(false);
  const [timeline, setTimeline] = useState<gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setLoaderFinished(true),
      });
      setTimeline(tl);  // Update the state with the gsap timeline
    });

    return () => context.revert();
  }, []);

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden ">
      <div className="w-full">
        {/* Pass the timeline to the Loader component */}
        <main> <Loader timeline={timeline} /></main>
      </div>
    </main>
  );
}
