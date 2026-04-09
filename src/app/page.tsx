import Link from "next/link";

const PRODUCTS = [
  {
    title: "Scholar",
    subtitle: "Scientific Journal",
    desc: "Publish research with triple-lock priority: Zenodo DOI + blockchain timestamp + cryptographic proof. Transparent peer review. Free and open.",
    href: "https://scholar.artosphere.org",
    cta: "Submit Paper",
    features: ["Triple-lock priority", "5-21 day peer review", "DOI per review", "ORCID integration"],
    color: "#1a56db",
    stats: "15 papers on-chain",
  },
  {
    title: "DeFi",
    subtitle: "Golden Ratio Protocol",
    desc: "Stake ARTS tokens on scientific discoveries. Prediction market for physics with phi-Cascade economics. Every parameter from proven physics.",
    href: "https://defi.artosphere.org",
    cta: "Launch App",
    features: ["Discovery Staking", "Fibonacci APY tiers", "Soulbound NFTs", "16 contracts on Base"],
    color: "#0e7c7b",
    stats: "987M ARTS supply",
  },
  {
    title: "Verify",
    subtitle: "Priority Proof",
    desc: "Anyone can verify a paper's scientific priority. No account needed. Paste a DOI, see the triple lock. Trustless verification for science.",
    href: "https://scholar.artosphere.org/verify",
    cta: "Verify a Paper",
    features: ["No login required", "Reads from blockchain", "Zenodo + Base + Hash", "PDF certificate"],
    color: "#059669",
    stats: "14 Zenodo DOIs",
  },
];

const DISCOVERIES = [
  { name: "28 SM Parameters", accuracy: "0.58%", status: "PROVEN" },
  { name: "Solar Neutrino Mixing", accuracy: "0.02σ", status: "CONFIRMED (JUNO)" },
  { name: "Dark Energy w₀", accuracy: "0.1%", status: "CONFIRMED (DESI)" },
  { name: "Higgs Mass M_H", accuracy: "0.0007%", status: "PROVEN" },
  { name: "Z Boson Mass M_Z", accuracy: "0.12%", status: "PROVEN" },
  { name: "Cosmology + Strong CP", accuracy: "exact", status: "PREDICTED" },
];

const NUMBERS = [
  { value: "2", label: "Inputs", sub: "M_Pl and φ" },
  { value: "36", label: "Parameters", sub: "SM + DM + DE + Cosmo" },
  { value: "15", label: "On-Chain Papers", sub: "Soulbound NFTs" },
  { value: "16", label: "Smart Contracts", sub: "Base Mainnet" },
  { value: "14", label: "Zenodo DOIs", sub: "CERN-archived" },
  { value: "$0", label: "Cost to Publish", sub: "Free forever" },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-[var(--border)] bg-white/95 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[var(--blue)] flex items-center justify-center text-white text-xs font-bold">A</div>
            <span className="text-base font-bold text-[var(--text)]">Artosphere</span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <a href="https://scholar.artosphere.org" className="text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors">Scholar</a>
            <a href="https://defi.artosphere.org" className="text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors">DeFi</a>
            <a href="https://scholar.artosphere.org/verify" className="text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors">Verify</a>
            <a
              href="https://scholar.artosphere.org/submit"
              className="px-4 py-1.5 rounded-lg bg-[var(--blue)] text-white text-sm font-medium hover:bg-[#1e40af] transition-colors"
            >
              Submit Paper
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--blue-light)] text-[var(--blue)] text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)]"></span>
            Live on Base Mainnet
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-[var(--text)]">
            Two Parameters.
            <br />
            <span className="text-[var(--blue)]">All of Physics.</span>
          </h1>
          <p className="mt-5 text-lg text-[var(--text-secondary)] leading-relaxed">
            The Artosphere derives 36 parameters of the Standard Model, dark matter,
            dark energy, and cosmology from just two inputs: the Planck mass and the
            golden ratio. Published, peer-reviewed, and verified on-chain.
          </p>
          <div className="mt-8 flex items-center gap-3 flex-wrap">
            <a href="https://scholar.artosphere.org" className="px-6 py-3 rounded-xl bg-[var(--blue)] text-white font-bold hover:bg-[#1e40af] transition-colors">
              Read the Papers
            </a>
            <a href="https://scholar.artosphere.org/verify" className="px-6 py-3 rounded-xl border border-[var(--border)] text-[var(--text-secondary)] font-medium hover:border-[#9ca3af] hover:text-[var(--text)] transition-colors">
              Verify Priority
            </a>
            <a href="https://doi.org/10.5281/zenodo.19482719" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl border border-[var(--border)] text-[var(--text-secondary)] font-medium hover:border-[#9ca3af] hover:text-[var(--text)] transition-colors">
              Master Action (Zenodo)
            </a>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {NUMBERS.map((n) => (
            <div key={n.label} className="text-center p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border)]">
              <div className="text-2xl font-bold text-[var(--text)]">{n.value}</div>
              <div className="text-xs text-[var(--text-secondary)] mt-0.5">{n.label}</div>
              <div className="text-[10px] text-[var(--text-muted)]">{n.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="bg-[var(--bg-surface)] border-y border-[var(--border)] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[var(--text)] text-center mb-3">The Ecosystem</h2>
          <p className="text-[var(--text-secondary)] text-center mb-10">Science, economics, and verification — unified by the golden ratio</p>
          <div className="grid md:grid-cols-3 gap-6">
            {PRODUCTS.map((p) => (
              <div key={p.title} className="card flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-bold" style={{ background: p.color }}>
                    {p.title[0]}
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--text)]">{p.title}</h3>
                    <p className="text-xs text-[var(--text-muted)]">{p.subtitle}</p>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">{p.desc}</p>
                <ul className="space-y-1.5 mb-5">
                  {p.features.map((f) => (
                    <li key={f} className="text-xs text-[var(--text-muted)] flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full" style={{ background: p.color }}></span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-[var(--border)]">
                  <span className="text-xs text-[var(--text-muted)]">{p.stats}</span>
                  <a
                    href={p.href}
                    className="text-sm font-medium px-4 py-1.5 rounded-lg transition-colors"
                    style={{ color: p.color, background: `${p.color}10`, border: `1px solid ${p.color}30` }}
                  >
                    {p.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Discoveries */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-[var(--text)] text-center mb-3">Key Discoveries</h2>
        <p className="text-[var(--text-secondary)] text-center mb-8">All from two inputs: M<sub>Pl</sub> and φ = (1+√5)/2</p>
        <div className="card !p-0 overflow-hidden">
          <table>
            <thead>
              <tr className="bg-[var(--bg-surface)]">
                <th>Discovery</th>
                <th>Accuracy</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {DISCOVERIES.map((d) => (
                <tr key={d.name}>
                  <td className="font-medium">{d.name}</td>
                  <td className="font-mono text-[var(--text-secondary)]">{d.accuracy}</td>
                  <td>
                    <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${
                      d.status.includes("CONFIRMED") ? "text-[var(--green)]" :
                      d.status === "PREDICTED" ? "text-[var(--gold)]" :
                      "text-[var(--blue)]"
                    }`}>
                      <span className="w-1.5 h-1.5 rounded-full" style={{
                        background: d.status.includes("CONFIRMED") ? "var(--green)" :
                          d.status === "PREDICTED" ? "var(--gold)" : "var(--blue)"
                      }}></span>
                      {d.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-[var(--text-muted)] text-center mt-4">
          F.B. Sapronov | ORCID: 0009-0008-1747-1200 | 17 Zenodo DOIs | 15 on-chain NFTs
        </p>
      </section>

      {/* Triple Lock mini */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="rounded-2xl bg-[var(--blue)] p-10 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-3">Triple-Lock Priority</h2>
            <p className="text-blue-100 mb-6">
              Every discovery is fixed by three independent systems:
              Zenodo DOI (CERN) + blockchain timestamp (Base) + cryptographic hash.
              Verifiable by anyone, forever.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="p-3 rounded-lg bg-white/10">
                <div className="text-lg font-bold">DOI</div>
                <div className="text-xs text-blue-200">Zenodo / CERN</div>
              </div>
              <div className="p-3 rounded-lg bg-white/10">
                <div className="text-lg font-bold">Block</div>
                <div className="text-xs text-blue-200">Base Mainnet</div>
              </div>
              <div className="p-3 rounded-lg bg-white/10">
                <div className="text-lg font-bold">Hash</div>
                <div className="text-xs text-blue-200">Keccak256</div>
              </div>
            </div>
            <a
              href="https://scholar.artosphere.org/verify"
              className="inline-block px-6 py-3 rounded-lg bg-white text-[var(--blue)] font-bold hover:bg-blue-50 transition-colors"
            >
              Verify a Discovery
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] py-10 mt-auto bg-[var(--bg-surface)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-start justify-between flex-wrap gap-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded bg-[var(--blue)] flex items-center justify-center text-white text-[10px] font-bold">A</div>
                <span className="text-sm font-bold text-[var(--text)]">Artosphere</span>
              </div>
              <p className="text-xs text-[var(--text-muted)] max-w-xs">
                Two parameters. All of physics. Published, verified, on-chain.
              </p>
              <p className="text-xs text-[var(--text-muted)] mt-2">
                F.B. Sapronov | Independent Researcher | 2026
              </p>
            </div>
            <div className="flex gap-12">
              <div>
                <div className="text-xs font-semibold text-[var(--text-secondary)] mb-2 uppercase tracking-wider">Ecosystem</div>
                <div className="space-y-1.5 text-sm text-[var(--text-muted)]">
                  <a href="https://scholar.artosphere.org" className="block hover:text-[var(--blue)]">Scholar</a>
                  <a href="https://defi.artosphere.org" className="block hover:text-[var(--blue)]">DeFi</a>
                  <a href="https://scholar.artosphere.org/verify" className="block hover:text-[var(--blue)]">Verify</a>
                </div>
              </div>
              <div>
                <div className="text-xs font-semibold text-[var(--text-secondary)] mb-2 uppercase tracking-wider">Links</div>
                <div className="space-y-1.5 text-sm text-[var(--text-muted)]">
                  <a href="https://doi.org/10.5281/zenodo.19482719" target="_blank" rel="noopener noreferrer" className="block hover:text-[var(--blue)]">Zenodo</a>
                  <a href="https://orcid.org/0009-0008-1747-1200" target="_blank" rel="noopener noreferrer" className="block hover:text-[var(--blue)]">ORCID</a>
                  <a href="https://basescan.org/address/0xA345C41e74Afc16f9071C0EAa5Ac71b0BDfe1D49" target="_blank" rel="noopener noreferrer" className="block hover:text-[var(--blue)]">Basescan</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
