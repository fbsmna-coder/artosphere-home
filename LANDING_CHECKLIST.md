# artosphere.org — Elite Landing Page Checklist

**Goal:** World-class ecosystem page combining VitaDAO (dark + science), Aave (trust metrics), eLife (academic credibility)
**Design:** Dark theme + φ-Gold accent, golden spiral visual identity
**Principle:** Science-first, crypto-as-infrastructure. Lead with physics, not token.

---

## Sections (12)

### Above the Fold
- [ ] Hero: "Two Parameters. All of Physics." heading
- [ ] Subheadline: derive 36 parameters from M_Pl and φ
- [ ] Dual CTA: "Read the Papers" (→ scholar) + "Launch App" (→ defi)
- [ ] Animated golden spiral background (CSS/SVG)
- [ ] "Live on Base Mainnet" badge

### Section 2: Metrics Bar
- [ ] 6-column horizontal: 36 Parameters | 17 DOIs | 15 NFTs | 20 Contracts | 0.61% Accuracy | $0 Cost
- [ ] Gold numbers on dark cards

### Section 3: The Hypothesis
- [ ] Axiom: Ψ ∈ Cl(9,1) = Cl(3,1) ⊗ Cl(6)
- [ ] V_Art formula with visual
- [ ] Results table: αₛ, sin²θ₁₂, M_H, M_Z, v_EW, w₀, θ_QCD (7 rows)
- [ ] Accuracy column with color-coded badges
- [ ] "Download Whitepaper" button → PDF
- [ ] Link to Zenodo Master Action DOI

### Section 4: Ecosystem Pillars (3 cards)
- [ ] Scholar card: "Publish & Verify" → scholar.artosphere.org
  - Triple-lock priority, 5-21 day review, ORCID
- [ ] DeFi card: "Stake & Earn" → defi.artosphere.org
  - Discovery Staking, Fibonacci APY, φ-Cascade
- [ ] Verify card: "Check Priority" → scholar.artosphere.org/verify
  - No login needed, reads from blockchain

### Section 5: Triple Lock
- [ ] Visual: 3 connected lock icons
- [ ] Lock 1: Zenodo DOI (CERN archive)
- [ ] Lock 2: Blockchain Timestamp (Base Mainnet)
- [ ] Lock 3: Content Hash (Keccak256)
- [ ] "Verify any paper →" button

### Section 6: Discovery Staking
- [ ] φ-Cascade v2 visual: 4 segments (61.8% / 23.6% / 9.02% / 5.57%)
- [ ] "Prediction market for physics"
- [ ] Explain: stake CONFIRM/REFUTE, oracle resolves with DOI evidence
- [ ] "Science Weight as alternative to Impact Factor"

### Section 7: Papers Carousel
- [ ] 6 key papers as horizontal scrollable cards:
  - Master Action v2.0 (36 params)
  - Paper VIII (Cosmology)
  - Higgs-Flavor (0.0007%)
  - JUNO Letter (0.02σ)
  - Z Boson (0.12%)
  - Monograph v7.0
- [ ] Each card: title, key formula, DOI link, accuracy badge

### Section 8: Predictions Table
- [ ] 5 testable predictions with timeline:
  - sin²θ₁₂ → JUNO 2027
  - χ-boson 58 GeV → HL-LHC 2028-2030
  - Σm_ν → DESI/Euclid 2028
  - w₀ ≈ −0.977 → DESI 5yr 2028
  - M_H precision → FCC-ee 2035+
- [ ] "Every prediction has a kill condition"

### Section 9: Token Economics
- [ ] ARTS token overview card:
  - Supply: 987,000,000 = F(16) × 10⁶
  - Emission: Fibonacci schedule with φ-decay
  - Spiral Burn: approaches floor F(34) asymptotically
  - Staking: 3 tiers (5/21/55 days) at x1/xφ/xφ²
  - Governance: 61.8% supermajority (= 1/φ)
  - Fee: 0.618% base (= 1/φ in %)
- [ ] Treasury Zeckendorf chart (6 compartments)
- [ ] "Every parameter from physics, not governance"

### Section 10: Smart Contracts
- [ ] Table: 20 contracts with names + Base Mainnet addresses
- [ ] "All verified on Sourcify" badge
- [ ] Basescan links
- [ ] "306 Foundry tests. MIT license."

### Section 11: Honest Assessment
- [ ] "What we claim — and what we don't"
- [ ] 12 derived, 14 semi-derived, 2 empirical
- [ ] "Not yet peer-reviewed in traditional journals"
- [ ] "arXiv submission pending endorsement"
- [ ] "55% truly derived — we're working on the rest"
- [ ] "If you think it's wrong — stake against it"

### Section 12: Footer
- [ ] 4-column grid: Ecosystem | Research | Code | Author
- [ ] Ecosystem: Scholar, DeFi, Verify, Journal (Mac Mini)
- [ ] Research: Whitepaper, Zenodo, ORCID, arXiv (pending)
- [ ] Code: Basescan, Smart Contracts, Foundry tests
- [ ] Author: F.B. Sapronov, ORCID, IBG Technologies
- [ ] "Two parameters. All of physics. Published, verified, on-chain."

---

## Design Specs

| Element | Value |
|---|---|
| Background | #0a0a12 (near-black) |
| Surface/Cards | rgba(255,255,255,0.03) + glass border |
| Primary accent | Linear gradient #c8a000 → #ffd700 (φ-gold) |
| Secondary | #4488ff (links), #00c878 (verified), #ff4466 (predictions) |
| Text primary | #e8e8f0 |
| Text secondary | #9ca3af |
| Text muted | #6b7280 |
| Font body | Geist Sans, 16px base |
| Font formulas | Geist Mono |
| Border | rgba(200,160,0,0.15) — golden glass |
| Card hover | box-shadow: 0 0 30px rgba(200,160,0,0.1) |
| Animations | CSS only (fade-in on scroll, spiral rotation) |

## Content Sources

| Section | Data Source |
|---|---|
| Hypothesis | Whitepaper v2.1 sections 3.1-3.5 |
| Results table | Whitepaper table (lines 100-111) |
| Predictions | Whitepaper section 2.5 (lines 131-137) |
| Token economics | Whitepaper section 4 |
| Honest assessment | Whitepaper section 2.6 (lines 139-152) |
| Smart contracts | artosphere-dapp contracts.ts (20 addresses) |
| Papers | lib/discoveries.ts (15 entries) |

## Technical

- Framework: Next.js 15 (artosphere-home project)
- Deploy: Vercel → artosphere.org
- Domain: artosphere.org (GoDaddy, DNS configured)
- No blockchain reads on landing page (static, fast)
- Logo: /artosphere-project/assets/logo.jpeg
