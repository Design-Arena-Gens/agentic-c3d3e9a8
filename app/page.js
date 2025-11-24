'use client';

import { useMemo } from 'react';

export default function Page() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <main className="container">
      <div className="sky" />
      <div className="canopy" />
      <div className="ground" />

      <h1 className="title">Jungle Tales</h1>

      {/* Scene 1: Meeting */}
      <section className="scene scene1">
        <div className="character lion">
          <span role="img" aria-label="lion">??</span>
        </div>
        <div className="character rabbit">
          <span role="img" aria-label="rabbit">??</span>
        </div>
        <p className="narration">At dawn, the lion meets a curious rabbit by the river.</p>
        <div className="bubble bubble-left delay-1">Good morning, little friend!</div>
        <div className="bubble bubble-right delay-2">Hi! The jungle feels extra alive today.</div>
      </section>

      {/* Scene 2: Guidance */}
      <section className="scene scene2">
        <div className="character owl">
          <span role="img" aria-label="owl">??</span>
        </div>
        <p className="narration">An owl glides in, sharing wisdom from the treetops.</p>
        <div className="bubble bubble-top delay-1">Follow the sunlit path and listen to the wind.</div>
      </section>

      {/* Scene 3: Together */}
      <section className="scene scene3">
        <div className="character lion small-move">
          <span role="img" aria-label="lion">??</span>
        </div>
        <div className="character rabbit small-move">
          <span role="img" aria-label="rabbit">??</span>
        </div>
        <div className="character owl small-move">
          <span role="img" aria-label="owl">??</span>
        </div>
        <p className="narration">Together they wander, finding new stories in every leaf.</p>
        <div className="bubble bubble-center delay-2">Let's go - adventure awaits!</div>
      </section>

      <footer className="footer">{'\u00A9'} {year} Jungle Tales</footer>
    </main>
  );
}
