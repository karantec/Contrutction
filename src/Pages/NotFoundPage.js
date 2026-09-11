import React from "react";

export default function NotFoundPage({
  onHome = () => { window.location.href = "/"; },
  onContact = () => { window.location.href = "/contact"; },
}) {
  return (
    <div className="cw404-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Barlow+Condensed:wght@500;600&family=Barlow:wght@400;500;600&display=swap');

        .cw404-page{
          --charcoal: #1B1A17;
          --steel: #3D5A73;
          --steel-light: #6E90A8;
          --safety-orange: #E85D0A;
          --safety-yellow: #F5B700;
          --cream: #EDEAE1;
          --muted: #8C8778;

          min-height: 100vh;
          display: flex;
          flex-direction: column;
          position: relative;
          background: var(--charcoal);
          font-family: 'Barlow', sans-serif;
          color: var(--cream);
          overflow-x: hidden;
        }

        .cw404-blueprint{
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(var(--steel) 1px, transparent 1px),
            linear-gradient(90deg, var(--steel) 1px, transparent 1px);
          background-size: 48px 48px;
          opacity: 0.07;
          pointer-events: none;
        }

        .cw404-hazard{
          height: 14px;
          width: 100%;
          flex-shrink: 0;
          background: repeating-linear-gradient(
            -45deg,
            var(--safety-yellow),
            var(--safety-yellow) 18px,
            var(--charcoal) 18px,
            var(--charcoal) 36px
          );
        }

        .cw404-main{
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 64px 24px;
          position: relative;
          z-index: 1;
        }

        .cw404-board{
          max-width: 780px;
          width: 100%;
          text-align: center;
        }

        .cw404-tag{
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 7px 16px;
          border: 2px solid var(--safety-orange);
          border-radius: 3px;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 600;
          font-size: 15px;
          letter-spacing: 0.02em;
          color: var(--safety-orange);
          margin-bottom: 36px;
          transform: rotate(-1.5deg);
        }

        .cw404-tag svg{ width: 18px; height: 18px; flex-shrink: 0; }

        .cw404-stencil{
          font-family: 'Archivo Black', sans-serif;
          font-size: clamp(96px, 22vw, 220px);
          line-height: 0.85;
          margin: 0 0 8px 0;
          letter-spacing: -0.02em;
          color: var(--cream);
          position: relative;
          display: inline-block;
        }

        .cw404-stencil::after{
          content: "404";
          position: absolute;
          inset: 0;
          color: transparent;
          background: repeating-linear-gradient(
            100deg,
            rgba(0,0,0,0.18) 0px,
            rgba(0,0,0,0.18) 2px,
            transparent 2px,
            transparent 7px
          );
          -webkit-background-clip: text;
          background-clip: text;
          pointer-events: none;
        }

        .cw404-headline{
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 600;
          font-size: clamp(22px, 3.4vw, 32px);
          margin: 4px 0 18px 0;
          color: var(--cream);
        }

        .cw404-subcopy{
          font-size: 17px;
          line-height: 1.6;
          color: var(--muted);
          max-width: 480px;
          margin: 0 auto 40px auto;
        }

        .cw404-subcopy strong{ color: var(--cream); font-weight: 600; }

        .cw404-actions{
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 56px;
        }

        .cw404-btn{
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 600;
          font-size: 18px;
          letter-spacing: 0.01em;
          padding: 14px 30px;
          border-radius: 3px;
          cursor: pointer;
          border: 2px solid transparent;
          transition: transform 0.15s ease, background 0.15s ease, border-color 0.15s ease;
        }

        .cw404-btn-primary{
          background: var(--safety-orange);
          color: var(--charcoal);
        }
        .cw404-btn-primary:hover{ transform: translateY(-2px); }

        .cw404-btn-secondary{
          background: transparent;
          color: var(--cream);
          border-color: var(--steel-light);
        }
        .cw404-btn-secondary:hover{
          border-color: var(--cream);
          transform: translateY(-2px);
        }

        .cw404-barricade{
          width: 260px;
          max-width: 70%;
          margin: 0 auto;
          display: block;
        }

        .cw404-footer{
          position: relative;
          z-index: 1;
          text-align: center;
          padding: 18px 24px 28px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 14px;
          color: var(--muted);
        }

        .cw404-btn:focus-visible{
          outline: 3px solid var(--safety-yellow);
          outline-offset: 2px;
        }

        @media (prefers-reduced-motion: no-preference){
          .cw404-tag{ animation: cw404-settle 0.5s ease-out; }
          @keyframes cw404-settle{
            from{ opacity: 0; transform: rotate(-1.5deg) translateY(-8px); }
            to{ opacity: 1; transform: rotate(-1.5deg) translateY(0); }
          }
        }
      `}</style>

      <div className="cw404-blueprint" />
      <div className="cw404-hazard" />

      <main className="cw404-main">
        <div className="cw404-board">
          <span className="cw404-tag">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2 2 21h20L12 2z" />
              <line x1="12" y1="9" x2="12" y2="14" />
              <circle cx="12" cy="17" r="0.8" fill="currentColor" stroke="none" />
            </svg>
            DETOUR — PAGE NOT ON SITE
          </span>

          <h1 className="cw404-stencil">404</h1>
          <p className="cw404-headline">This page hasn't been poured yet.</p>
          <p className="cw404-subcopy">
            The link you followed doesn't match anything we've built. It may have moved,
            been taken down, or never existed. Check the address, or head back to{" "}
            <strong>solid ground</strong>.
          </p>

          <div className="cw404-actions">
            <button className="cw404-btn cw404-btn-primary" onClick={onHome}>
              Back to homepage
            </button>
            <button className="cw404-btn cw404-btn-secondary" onClick={onContact}>
              Contact the crew
            </button>
          </div>

          <svg
            className="cw404-barricade"
            viewBox="0 0 200 130"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <line x1="30" y1="30" x2="10" y2="120" stroke="#6E90A8" strokeWidth="6" strokeLinecap="round" />
            <line x1="30" y1="30" x2="50" y2="120" stroke="#6E90A8" strokeWidth="6" strokeLinecap="round" />
            <line x1="170" y1="30" x2="150" y2="120" stroke="#6E90A8" strokeWidth="6" strokeLinecap="round" />
            <line x1="170" y1="30" x2="190" y2="120" stroke="#6E90A8" strokeWidth="6" strokeLinecap="round" />
            <rect x="8" y="40" width="184" height="26" rx="2" fill="url(#cw404-stripes)" />
            <rect x="8" y="40" width="184" height="26" rx="2" fill="none" stroke="#1B1A17" strokeWidth="2" />
            <defs>
              <pattern id="cw404-stripes" patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="rotate(45)">
                <rect width="10" height="20" fill="#F5B700" />
                <rect x="10" width="10" height="20" fill="#1B1A17" />
              </pattern>
            </defs>
          </svg>
        </div>
      </main>

      <div className="cw404-hazard" />
      <footer className="cw404-footer">Site work in progress — thanks for your patience.</footer>
    </div>
  );
}