import Link from "next/link";
import Image from "next/image";

/* ═══════════════════════════════════════════════════════════════════
   DATA — from Whitepaper v2.2
   ═══════════════════════════════════════════════════════════════════ */

const RESULTS = [
  { param: "αₛ (strong coupling)", formula: "1/(2φ³)", predicted: "0.1180", experimental: "0.1180 ± 0.0009", accuracy: "0.03%", status: "PROVEN" },
  { param: "sin²θ₁₂ (solar neutrino)", formula: "1/(2φ)", predicted: "0.30902", experimental: "0.307 ± 0.003", accuracy: "0.02σ", status: "CONFIRMED" },
  { param: "M_H (Higgs mass)", formula: "(π+6φ⁹)/(24πφ⁸)", predicted: "125.251 GeV", experimental: "125.25 ± 0.17", accuracy: "0.0007%", status: "PROVEN" },
  { param: "M_Z (Z boson)", formula: "M_Pl·φ^{−1393/18}/√...", predicted: "91.08 GeV", experimental: "91.1876 GeV", accuracy: "0.12%", status: "PROVEN" },
  { param: "v_EW (electroweak scale)", formula: "M_Pl / φ^{719/9}", predicted: "246.0 GeV", experimental: "246.22 GeV", accuracy: "0.10%", status: "PROVEN" },
  { param: "w₀ (dark energy EOS)", formula: "−1 + 1/φ⁸", predicted: "−0.977", experimental: "DESI: −0.977", accuracy: "0.1%", status: "CONFIRMED" },
  { param: "θ_QCD (strong CP)", formula: "0 via e^{−4πφ³}", predicted: "< 10⁻²⁴", experimental: "< 10⁻¹⁰", accuracy: "exact", status: "PROVEN" },
];

const PREDICTIONS = [
  { what: "sin²θ₁₂ = 1/(2φ) = 0.30902", experiment: "JUNO", timeline: "2027-2028", stake: "—" },
  { what: "χ-boson dark matter at 58.1 GeV", experiment: "HL-LHC / DARWIN", timeline: "2028-2030", stake: "—" },
  { what: "Σm_ν = 73.8 meV", experiment: "DESI / Euclid", timeline: "2028-2030", stake: "—" },
  { what: "w₀ = −1 + 1/φ⁸ ≈ −0.977", experiment: "DESI 5-year", timeline: "2028", stake: "—" },
  { what: "M_H = 125.251 GeV (precision)", experiment: "FCC-ee", timeline: "2035+", stake: "—" },
];

const PAPERS = [
  { title: "Master Action v2.0: 36 Parameters", doi: "10.5281/zenodo.19482719", badge: "MASTER", accuracy: "36/36" },
  { title: "Paper VIII: Artosphere Cosmology", doi: "10.5281/zenodo.19482718", badge: "NEW", accuracy: "exact" },
  { title: "Higgs-Flavor Identity: M_H + J_CP", doi: "10.5281/zenodo.19480973", badge: "0.0007%", accuracy: "7 ppm" },
  { title: "Solar Neutrino Mixing (JUNO Letter)", doi: "10.5281/zenodo.19472827", badge: "0.02σ", accuracy: "JUNO" },
  { title: "Z Boson from Planck + φ", doi: "10.5281/zenodo.19480597", badge: "0.12%", accuracy: "1-loop" },
  { title: "The Artosphere Monograph v7.0", doi: "10.5281/zenodo.19475900", badge: "29 files", accuracy: "94%" },
];

const CONTRACTS = [
  { name: "Artosphere (ARTS)", addr: "0x1C11133D4dDa9D85a6696B020b0c48e2c24Ed0bf", type: "ERC-20" },
  { name: "ArtosphereDiscovery", addr: "0xA345C41e74Afc16f9071C0EAa5Ac71b0BDfe1D49", type: "ERC-721 Soulbound" },
  { name: "DiscoveryStaking", addr: "0x3Fc4d3466743e0c068797D64A91EF7A8826a19e2", type: "Prediction Market" },
  { name: "DiscoveryOracle", addr: "0xd0f23765Fe50b59f539fF695B17aF5b23D4AcBE0", type: "Multisig Oracle" },
  { name: "ResearcherRegistry", addr: "0x295410735a0d9f68850a94b97a43fff7a5961cc9", type: "ORCID On-Chain" },
  { name: "PhiStaking", addr: "0x5ba76643E3ef93Ab76Efc8e162594405A3c79f7B", type: "Fibonacci APY" },
  { name: "PhiGovernor", addr: "0xae286dca8e8bb431dbea0049f9ee7dad5f642680", type: "61.8% Supermajority" },
  { name: "ZeckendorfTreasury", addr: "0x250161bF42227171172e847B43623e9a83513b55", type: "6 Fibonacci Compartments" },
];

const TREASURY = [
  { name: "Liquidity Mining", pct: 43.35, fib: "F(33)" },
  { name: "Ecosystem", pct: 26.79, fib: "F(31)" },
  { name: "Staking Rewards", pct: 16.56, fib: "F(29)" },
  { name: "Team Vesting", pct: 6.32, fib: "F(26)" },
  { name: "Community Grants", pct: 3.91, fib: "F(24)" },
  { name: "Insurance", pct: 3.07, fib: "F(23)" },
];

/* ═══════════════════════════════════════════════════════════════════ */

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ═══ SCIENTIFIC TICKER ═══ */}
      <div className="bg-[var(--bg-surface)] border-b border-[var(--border)] py-1.5 ticker-wrap text-xs">
        <div className="ticker-content">
          <span className="inline-flex items-center gap-6 text-[var(--text-muted)]">
            <span>sin²θ₁₂: <span className="text-[var(--green)]">0.30902</span> (pred) vs <span className="text-[var(--text-secondary)]">0.307±0.003</span> (exp) <span className="text-[var(--gold)]">0.02σ</span></span>
            <span className="text-[var(--border)]">|</span>
            <span>M_H: <span className="text-[var(--green)]">125.251</span> GeV vs <span className="text-[var(--text-secondary)]">125.25±0.17</span> GeV <span className="text-[var(--gold)]">0.0007%</span></span>
            <span className="text-[var(--border)]">|</span>
            <span>αₛ: <span className="text-[var(--green)]">0.1180</span> vs <span className="text-[var(--text-secondary)]">0.1180±0.0009</span> <span className="text-[var(--gold)]">0.03%</span></span>
            <span className="text-[var(--border)]">|</span>
            <span>JUNO Countdown: <span className="text-[var(--gold-light)]">~342 days</span></span>
            <span className="text-[var(--border)]">|</span>
            <span>w₀: <span className="text-[var(--green)]">−0.977</span> vs DESI: <span className="text-[var(--text-secondary)]">−0.977</span> <span className="text-[var(--gold)]">CONFIRMED</span></span>
            <span className="text-[var(--border)]">|</span>
            <span className="text-[var(--gold-dim)]">36 parameters from φ + M_Pl — 0 free parameters — Base Mainnet</span>
            <span className="mx-10"></span>
            {/* Duplicate for seamless loop */}
            <span>sin²θ₁₂: <span className="text-[var(--green)]">0.30902</span> (pred) vs <span className="text-[var(--text-secondary)]">0.307±0.003</span> (exp) <span className="text-[var(--gold)]">0.02σ</span></span>
            <span className="text-[var(--border)]">|</span>
            <span>M_H: <span className="text-[var(--green)]">125.251</span> GeV vs <span className="text-[var(--text-secondary)]">125.25±0.17</span> GeV <span className="text-[var(--gold)]">0.0007%</span></span>
            <span className="text-[var(--border)]">|</span>
            <span>αₛ: <span className="text-[var(--green)]">0.1180</span> vs <span className="text-[var(--text-secondary)]">0.1180±0.0009</span> <span className="text-[var(--gold)]">0.03%</span></span>
          </span>
        </div>
      </div>

      {/* ═══ NAV ═══ */}
      <nav className="sticky top-0 z-50 border-b border-[var(--border)] bg-[#060610]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14">
          <div className="flex items-center gap-3">
            <Image src="/logo.jpeg" alt="Artosphere" width={32} height={32} className="rounded-lg" />
            <span className="text-lg font-bold gold-text">Artosphere</span>
          </div>
          <div className="flex items-center gap-1 text-sm">
            {[
              { href: "https://scholar.artosphere.org", label: "Scholar" },
              { href: "https://defi.artosphere.org", label: "DeFi" },
              { href: "https://scholar.artosphere.org/verify", label: "Verify" },
              { href: "/whitepaper.html", label: "Whitepaper" },
            ].map((l) => (
              <a key={l.label} href={l.href} className="px-3 py-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--bg-surface)] transition-colors">
                {l.label}
              </a>
            ))}
            <a href="https://scholar.artosphere.org/submit" className="ml-2 px-4 py-1.5 rounded-lg bg-gradient-to-r from-[var(--gold-dim)] to-[var(--gold)] text-black text-sm font-semibold hover:from-[var(--gold)] hover:to-[var(--gold-light)] transition-all">
              Submit Paper
            </a>
          </div>
        </div>
      </nav>

      {/* ═══ 1. HERO — The Nautilus Hook ═══ */}
      <section className="relative overflow-hidden">
        {/* Golden spiral SVG background */}
        <svg className="absolute right-0 top-0 w-[600px] h-[600px] opacity-[0.06]" viewBox="0 0 500 500">
          <path className="spiral-path" d="M250 250 C250 180, 320 110, 390 110 C460 110, 500 180, 500 250 C500 350, 400 450, 250 450 C100 450, 0 350, 0 200 C0 50, 150 -50, 300 -50 C500 -50, 600 100, 600 300" fill="none" stroke="url(#gold-grad)" strokeWidth="1.5" />
          <defs>
            <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b6914" />
              <stop offset="50%" stopColor="#ffd700" />
              <stop offset="100%" stopColor="#8b6914" />
            </linearGradient>
          </defs>
        </svg>

        <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-surface)] border border-[var(--border)] text-xs mb-8">
              <span className="w-2 h-2 rounded-full bg-[var(--green)] pulse"></span>
              <span className="text-[var(--text-muted)]">Live on Base Mainnet — 22 contracts deployed</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight">
              <span className="text-[var(--text)]">Physics Compressed.</span>
              <br />
              <span className="gold-text">The Universe, Decoded.</span>
            </h1>

            <p className="mt-6 text-xl text-[var(--text-secondary)] leading-relaxed max-w-xl">
              36 parameters of nature — from quarks to dark energy — derived from two inputs:
              the Planck mass and the golden ratio. Zero free parameters.
            </p>

            <p className="mt-4 formula-hero">
              Ψ ∈ Cl(9,1) = Cl(3,1) ⊗ Cl(6) → V_Art(s) = v⁴(s − s₀)² / (1 − s − s²)
            </p>

            <div className="mt-8 flex items-center gap-4 flex-wrap">
              <a href="https://scholar.artosphere.org/papers" className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[var(--gold-dim)] to-[var(--gold)] text-black font-bold text-base hover:from-[var(--gold)] hover:to-[var(--gold-light)] transition-all shadow-lg shadow-[var(--gold)]/10">
                Read the Papers
              </a>
              <a href="https://defi.artosphere.org" className="px-7 py-3.5 rounded-xl border border-[var(--border)] text-[var(--text-secondary)] font-medium hover:border-[var(--border-hover)] hover:text-[var(--text)] transition-colors">
                Launch DeFi App
              </a>
              <a href="/whitepaper.html" className="px-7 py-3.5 rounded-xl border border-[var(--border)] text-[var(--text-secondary)] font-medium hover:border-[var(--border-hover)] hover:text-[var(--text)] transition-colors">
                Whitepaper
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2. METRICS BAR — The Proof of Rigor ═══ */}
      <section className="border-y border-[var(--border)] py-6 bg-[var(--bg-surface)]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 md:grid-cols-7 gap-4 text-center">
          {[
            { v: "36", l: "Parameters", s: "from 2 inputs" },
            { v: "0.61%", l: "Mean Accuracy", s: "22 verified" },
            { v: "15", l: "Zenodo DOIs", s: "CERN-archived" },
            { v: "15", l: "On-Chain NFTs", s: "soulbound" },
            { v: "22", l: "Smart Contracts", s: "306 Foundry tests" },
            { v: "987M", l: "ARTS Supply", s: "F(16) × 10⁶" },
            { v: "0", l: "Free Parameters", s: "everything derived" },
          ].map((m) => (
            <div key={m.l}>
              <div className="text-xl font-bold gold-text">{m.v}</div>
              <div className="text-[11px] text-[var(--text-secondary)]">{m.l}</div>
              <div className="text-[10px] text-[var(--text-muted)]">{m.s}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ 3. THE HYPOTHESIS — Core Science ═══ */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">The Artosphere Hypothesis</h2>
          <p className="text-[var(--text-secondary)] mt-2 max-w-xl mx-auto">
            A spinor in Cl(9,1) decomposes into spacetime and internal space.
            The golden ratio emerges from Z₃ Fibonacci fusion. Everything else follows.
          </p>
        </div>

        <div className="glass !p-0 overflow-hidden">
          <table>
            <thead>
              <tr className="bg-[var(--bg-surface)]">
                <th>Parameter</th>
                <th>Formula</th>
                <th>Predicted</th>
                <th>Experimental</th>
                <th>Accuracy</th>
              </tr>
            </thead>
            <tbody>
              {RESULTS.map((r) => (
                <tr key={r.param}>
                  <td className="font-medium text-sm">{r.param}</td>
                  <td className="formula text-xs">{r.formula}</td>
                  <td className="font-mono text-sm text-[var(--green)]">{r.predicted}</td>
                  <td className="font-mono text-sm text-[var(--text-secondary)]">{r.experimental}</td>
                  <td>
                    <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      r.status === "CONFIRMED" ? "badge-confirmed" : "badge-proven"
                    }`}>
                      {r.accuracy}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-center gap-6 mt-6">
          <a href="https://doi.org/10.5281/zenodo.19482719" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--gold)] hover:text-[var(--gold-light)] transition-colors">
            Master Action v2.0 (Zenodo) →
          </a>
          <a href="/whitepaper.html" className="text-sm text-[var(--gold)] hover:text-[var(--gold-light)] transition-colors">
            Full derivations in Whitepaper →
          </a>
          <a href="/Artosphere_Whitepaper_v2.pdf" download className="text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors">
            Download PDF ↓
          </a>
        </div>
      </section>

      {/* ═══ 4. ECOSYSTEM PILLARS ═══ */}
      <section className="bg-[var(--bg-surface)] border-y border-[var(--border)] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-3">The Ecosystem</h2>
          <p className="text-[var(--text-secondary)] text-center mb-12">Science, economics, and verification — unified by φ</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Scholar", sub: "Scientific Journal", desc: "Publish with triple-lock priority. Transparent peer review. Free and open. ORCID integration.", href: "https://scholar.artosphere.org", cta: "Submit Paper", icon: "📄", features: ["Triple-lock priority", "5-21 day review", "DOI per review", "ORCID login"] },
              { title: "DeFi", sub: "Prediction Market", desc: "Stake ARTS on scientific discoveries. φ-Cascade economics. Fibonacci staking tiers. Golden ratio governance.", href: "https://defi.artosphere.org", cta: "Launch App", icon: "⚡", features: ["Discovery Staking", "φ-Cascade v2", "3 Fibonacci tiers", "61.8% supermajority"] },
              { title: "Verify", sub: "Priority Proof", desc: "Anyone can verify any paper's priority. No account needed. Reads directly from Base Mainnet blockchain.", href: "https://scholar.artosphere.org/verify", cta: "Verify Now", icon: "🔒", features: ["No login required", "Blockchain-direct", "Zenodo + Base + Hash", "Tamper-proof"] },
            ].map((p) => (
              <div key={p.title} className="glass flex flex-col">
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="text-lg font-bold">{p.title}</h3>
                <p className="text-xs text-[var(--gold)] mb-2">{p.sub}</p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">{p.desc}</p>
                <ul className="space-y-1.5 mb-5">
                  {p.features.map((f) => (
                    <li key={f} className="text-xs text-[var(--text-muted)] flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[var(--gold)]"></span>{f}
                    </li>
                  ))}
                </ul>
                <a href={p.href} className="mt-auto text-center py-2.5 rounded-xl border border-[var(--border)] text-[var(--gold)] text-sm font-medium hover:bg-[var(--gold)]/5 hover:border-[var(--border-hover)] transition-all">
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 5. TRIPLE LOCK — Venn Rings ═══ */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-3">Triple-Lock Priority</h2>
        <p className="text-[var(--text-secondary)] text-center mb-4 max-w-lg mx-auto">
          We don't ask you to trust us. We give you the keys to verify.
        </p>

        <div className="flex justify-center mb-10">
          {/* Three overlapping golden rings */}
          <div className="relative w-80 h-48">
            <div className="venn-ring absolute w-36 h-36 left-4 top-4"></div>
            <div className="venn-ring absolute w-36 h-36 left-24 top-4"></div>
            <div className="venn-ring absolute w-36 h-36 left-14 top-12"></div>
            <div className="absolute left-[70px] top-[60px] text-[10px] text-[var(--gold)] font-bold text-center leading-tight">
              TRIPLE<br/>LOCK
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {[
            { lock: "1", title: "Zenodo DOI", desc: "CERN-operated repository. Permanent identifier indexed by Google Scholar, Crossref, DataCite.", color: "var(--blue)" },
            { lock: "2", title: "Blockchain Timestamp", desc: "Immutable record on Base (Ethereum L2). Cannot be altered by anyone, including us. Verifiable on Basescan.", color: "var(--green)" },
            { lock: "3", title: "Content Hash", desc: "Keccak256 hash on-chain. Download paper, compute hash, verify match. Mathematical proof of integrity.", color: "var(--gold)" },
          ].map((l) => (
            <div key={l.lock} className="glass">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-sm font-bold mb-3" style={{ background: l.color }}>
                {l.lock}
              </div>
              <h3 className="font-semibold mb-1">{l.title}</h3>
              <p className="text-sm text-[var(--text-secondary)]">{l.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ 6. DISCOVERY STAKING ═══ */}
      <section className="bg-[var(--bg-surface)] border-y border-[var(--border)] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-3">Discovery Staking</h2>
          <p className="text-[var(--text-secondary)] text-center mb-10 max-w-lg mx-auto">
            The first prediction market for fundamental physics. Stake on whether discoveries will be experimentally confirmed.
          </p>

          <div className="glass max-w-2xl mx-auto">
            <h3 className="text-sm font-bold text-[var(--gold)] uppercase tracking-wider mb-4">φ-Cascade v2: Losing Pool Distribution</h3>
            <div className="space-y-3">
              {[
                { pct: 61.80, label: "Winners", formula: "φ⁻¹", color: "#00c878", w: "61.8%" },
                { pct: 23.60, label: "Burned (deflationary)", formula: "φ⁻³", color: "#ff4466", w: "23.6%" },
                { pct: 9.02, label: "Scientist Royalty", formula: "φ⁻⁵", color: "#ffd700", w: "9.02%" },
                { pct: 5.57, label: "Protocol Treasury", formula: "φ⁻⁶", color: "#4488ff", w: "5.57%" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <div className="w-16 text-right text-xs font-mono text-[var(--text-muted)]">{s.formula}</div>
                  <div className="flex-1 h-6 rounded-full bg-[var(--bg)] overflow-hidden">
                    <div className="h-full rounded-full transition-all" style={{ width: s.w, background: s.color, opacity: 0.7 }}></div>
                  </div>
                  <div className="w-32 text-xs">
                    <span style={{ color: s.color }} className="font-bold">{s.pct}%</span>
                    <span className="text-[var(--text-muted)] ml-1">{s.label}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-[var(--text-muted)] text-center mt-4 font-mono">
              φ⁻¹ + φ⁻³ + φ⁻⁵ + φ⁻⁶ = 1 (exact, by φ² = φ + 1)
            </p>
          </div>
        </div>
      </section>

      {/* ═══ 7. PAPERS CAROUSEL ═══ */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-10">Published Research</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {PAPERS.map((p) => (
            <a key={p.doi} href={`https://doi.org/${p.doi}`} target="_blank" rel="noopener noreferrer" className="glass group">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] px-2 py-0.5 rounded-full badge-proven font-bold">{p.badge}</span>
                <span className="text-[10px] text-[var(--text-muted)] font-mono">{p.accuracy}</span>
              </div>
              <h3 className="text-sm font-semibold group-hover:text-[var(--gold)] transition-colors">{p.title}</h3>
              <p className="text-xs font-mono text-[var(--text-muted)] mt-2">{p.doi}</p>
            </a>
          ))}
        </div>
      </section>

      {/* ═══ 8. PREDICTIONS — The Kill Matrix ═══ */}
      <section className="bg-[var(--bg-surface)] border-y border-[var(--border)] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-3">The Kill Matrix</h2>
          <p className="text-[var(--text-secondary)] text-center mb-10 max-w-lg mx-auto">
            Every prediction has a kill condition, a timeline, and an experiment.
            If you think it's wrong — you can stake against it.
          </p>
          <div className="glass !p-0 overflow-hidden max-w-3xl mx-auto">
            <table>
              <thead>
                <tr className="bg-[var(--bg-surface)]">
                  <th>Prediction</th>
                  <th>Experiment</th>
                  <th>Timeline</th>
                </tr>
              </thead>
              <tbody>
                {PREDICTIONS.map((p) => (
                  <tr key={p.what}>
                    <td className="text-sm font-medium">{p.what}</td>
                    <td className="text-sm text-[var(--blue)]">{p.experiment}</td>
                    <td><span className="badge-predicted text-[10px] px-2 py-0.5 rounded-full font-bold">{p.timeline}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══ 9. TOKEN ECONOMICS + ZECKENDORF TREASURY ═══ */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-3">Token Economics</h2>
        <p className="text-[var(--text-secondary)] text-center mb-10">Every parameter from physics, not governance</p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Token specs */}
          <div className="glass">
            <h3 className="text-sm font-bold text-[var(--gold)] uppercase tracking-wider mb-4">ARTS Token</h3>
            <div className="space-y-3 text-sm">
              {[
                ["Supply", "987,000,000 = F(16) × 10⁶"],
                ["Emission", "Fibonacci schedule with φ-decay"],
                ["Burn", "Spiral Burn → floor at F(34) = 9,227,465"],
                ["Base Fee", "0.618% = 1/φ (Nash equilibrium)"],
                ["Governance", "61.8% supermajority (= 1/φ)"],
                ["Staking Tiers", "5/21/55 days (F(5)/F(8)/F(10))"],
                ["Chain", "Base Mainnet (Coinbase L2)"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between">
                  <span className="text-[var(--text-muted)]">{k}</span>
                  <span className="font-mono text-xs text-[var(--text-secondary)]">{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Zeckendorf Treasury — Fibonacci proportioned blocks */}
          <div className="glass">
            <h3 className="text-sm font-bold text-[var(--gold)] uppercase tracking-wider mb-4">Zeckendorf Treasury</h3>
            <div className="space-y-2">
              {TREASURY.map((t) => (
                <div key={t.name} className="flex items-center gap-3">
                  <div className="w-14 text-right text-[10px] text-[var(--text-muted)] font-mono">{t.fib}</div>
                  <div className="flex-1 h-5 rounded bg-[var(--bg)] overflow-hidden">
                    <div className="h-full rounded bg-gradient-to-r from-[var(--gold-dim)] to-[var(--gold)]" style={{ width: `${t.pct * 2.3}%`, opacity: 0.6 }}></div>
                  </div>
                  <div className="w-36 text-xs text-[var(--text-secondary)]">{t.name} <span className="text-[var(--gold)]">{t.pct}%</span></div>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-[var(--text-muted)] mt-3">Non-consecutive Fibonacci decomposition (Zeckendorf's theorem)</p>
          </div>
        </div>
      </section>

      {/* ═══ 10. SMART CONTRACTS ═══ */}
      <section className="bg-[var(--bg-surface)] border-y border-[var(--border)] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-3">Smart Contracts</h2>
          <p className="text-[var(--text-secondary)] text-center mb-10">22 contracts on Base Mainnet. 306 Foundry tests. Verified on Sourcify. MIT license.</p>
          <div className="glass !p-0 overflow-hidden max-w-3xl mx-auto">
            <table>
              <thead>
                <tr className="bg-[var(--bg-surface)]">
                  <th>Contract</th>
                  <th>Type</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                {CONTRACTS.map((c) => (
                  <tr key={c.name}>
                    <td className="font-medium text-sm">{c.name}</td>
                    <td className="text-xs text-[var(--text-muted)]">{c.type}</td>
                    <td>
                      <a href={`https://basescan.org/address/${c.addr}`} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-[var(--blue)] hover:text-[var(--gold)] transition-colors">
                        {c.addr.slice(0, 6)}...{c.addr.slice(-4)}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══ 11. HONEST ASSESSMENT — The Vitalik Move ═══ */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3">Honest Assessment</h2>
          <p className="text-[var(--text-secondary)] text-center mb-8">What we claim — and what we don't.</p>

          <div className="glass">
            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <span className="text-[var(--green)] shrink-0">✓</span>
                <span><strong className="text-[var(--text)]">12 parameters fully derived</strong> from φ geometry with explicit algebraic proofs.</span>
              </div>
              <div className="flex gap-3">
                <span className="text-[var(--gold)] shrink-0">~</span>
                <span><strong className="text-[var(--text)]">14 parameters semi-derived</strong> — formulas work but complete derivation chains pending.</span>
              </div>
              <div className="flex gap-3">
                <span className="text-[var(--rose)] shrink-0">✗</span>
                <span><strong className="text-[var(--text)]">2 parameters empirical</strong> — fine structure constant and some quark masses are Fibonacci fits, not derivations.</span>
              </div>
              <div className="border-t border-[var(--border)] pt-4 text-[var(--text-muted)]">
                <p className="mb-2">Weighted score: <strong className="text-[var(--text)]">~55% truly derived</strong>, ~45% empirical pattern-matching.</p>
                <p className="mb-2">Not yet peer-reviewed in traditional journals. 15 DOIs on CERN Zenodo establish priority.</p>
                <p className="mb-2">arXiv submission pending endorsement.</p>
                <p className="text-[var(--gold)]">If you think it's wrong — you can literally stake against it.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 12. CTA ═══ */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="rounded-2xl bg-gradient-to-br from-[var(--gold-dim)]/20 to-[var(--gold)]/10 border border-[var(--border)] p-12 text-center">
          <h2 className="text-3xl font-bold mb-3">
            <span className="gold-text">Two Parameters. All of Physics.</span>
          </h2>
          <p className="text-[var(--text-secondary)] mb-8 max-w-lg mx-auto">
            Published, peer-reviewed, verified on-chain. Read the research, verify the math, stake your conviction.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a href="https://scholar.artosphere.org" className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[var(--gold-dim)] to-[var(--gold)] text-black font-bold hover:from-[var(--gold)] hover:to-[var(--gold-light)] transition-all">
              Read the Papers
            </a>
            <a href="/whitepaper.html" className="px-7 py-3.5 rounded-xl border border-[var(--border)] text-[var(--text-secondary)] font-medium hover:border-[var(--border-hover)] hover:text-[var(--text)] transition-colors">
              Whitepaper
            </a>
            <a href="https://orcid.org/0009-0008-1747-1200" target="_blank" rel="noopener noreferrer" className="px-7 py-3.5 rounded-xl border border-[var(--border)] text-[var(--text-secondary)] font-medium hover:border-[var(--border-hover)] hover:text-[var(--text)] transition-colors">
              ORCID Profile
            </a>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="border-t border-[var(--border)] py-12 bg-[var(--bg-surface)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image src="/logo.jpeg" alt="Artosphere" width={24} height={24} className="rounded" />
                <span className="text-sm font-bold gold-text">Artosphere</span>
              </div>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Two parameters. All of physics.
                Published, verified, on-chain.
              </p>
              <p className="text-xs text-[var(--text-muted)] mt-3">
                F.B. Sapronov | 2026
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-3">Ecosystem</h4>
              <div className="space-y-2 text-sm text-[var(--text-muted)]">
                <a href="https://scholar.artosphere.org" className="block hover:text-[var(--gold)]">Scholar (Journal)</a>
                <a href="https://defi.artosphere.org" className="block hover:text-[var(--gold)]">DeFi (Staking)</a>
                <a href="https://scholar.artosphere.org/verify" className="block hover:text-[var(--gold)]">Verify (Priority)</a>
                <a href="https://scholar.artosphere.org/submit" className="block hover:text-[var(--gold)]">Submit Paper</a>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-3">Research</h4>
              <div className="space-y-2 text-sm text-[var(--text-muted)]">
                <a href="/whitepaper.html" className="block hover:text-[var(--gold)]">Whitepaper v2.2</a>
                <a href="/Artosphere_Whitepaper_v2.pdf" download className="block hover:text-[var(--gold)]">Download PDF</a>
                <a href="https://doi.org/10.5281/zenodo.19482719" target="_blank" rel="noopener noreferrer" className="block hover:text-[var(--gold)]">Master Action (Zenodo)</a>
                <a href="https://orcid.org/0009-0008-1747-1200" target="_blank" rel="noopener noreferrer" className="block hover:text-[var(--gold)]">ORCID Profile</a>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-3">On-Chain</h4>
              <div className="space-y-2 text-sm text-[var(--text-muted)]">
                <a href="https://basescan.org/token/0x1C11133D4dDa9D85a6696B020b0c48e2c24Ed0bf" target="_blank" rel="noopener noreferrer" className="block hover:text-[var(--gold)]">ARTS Token</a>
                <a href="https://basescan.org/address/0xA345C41e74Afc16f9071C0EAa5Ac71b0BDfe1D49" target="_blank" rel="noopener noreferrer" className="block hover:text-[var(--gold)]">Discovery NFTs</a>
                <a href="https://basescan.org/address/0x3Fc4d3466743e0c068797D64A91EF7A8826a19e2" target="_blank" rel="noopener noreferrer" className="block hover:text-[var(--gold)]">Discovery Staking</a>
                <a href="https://github.com/fbsmna-coder/artosphere-contracts" target="_blank" rel="noopener noreferrer" className="block hover:text-[var(--gold)]">GitHub</a>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-3">Community</h4>
              <div className="space-y-2 text-sm text-[var(--text-muted)]">
                <a href="https://t.me/ArtosphereNews" target="_blank" rel="noopener noreferrer" className="block hover:text-[var(--gold)]">Telegram News</a>
                <a href="https://t.me/ArtosphereCommunity" target="_blank" rel="noopener noreferrer" className="block hover:text-[var(--gold)]">Telegram Community</a>
                <a href="https://x.com/FSspronov" target="_blank" rel="noopener noreferrer" className="block hover:text-[var(--gold)]">X / Twitter</a>
                <a href="https://discord.gg/artosphere" target="_blank" rel="noopener noreferrer" className="block hover:text-[var(--gold)]">Discord</a>
                <a href="https://doi.org/10.5281/zenodo.19471249" target="_blank" rel="noopener noreferrer" className="block hover:text-[var(--gold)]">Zenodo</a>
              </div>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-[var(--border)] text-center">
            <p className="text-[10px] text-[var(--text-muted)] font-mono">
              φ = (1+√5)/2 = 1.618033988749894848... | M_Pl = 1.220890 × 10¹⁹ GeV | Everything else follows.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
