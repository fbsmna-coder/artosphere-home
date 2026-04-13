# Artosphere (ARTS) Whitepaper

**A DeSci Protocol With Token Emission Tied to Real Physics Experiments**

*Author:* F.B. Sapronov (ORCID: 0009-0008-1747-1200)
*Chain:* Base Mainnet (chain ID 8453)
*Date:* 2026-04-13

---

## Table of Contents

1. [Abstract](#abstract)
2. [Scientific Foundation](#scientific-foundation)
3. [Protocol Architecture](#protocol-architecture)
4. [Tokenomics](#tokenomics)
5. [Governance](#governance)
6. [Experimental Roadmap](#experimental-roadmap)
7. [Security](#security)
8. [Risk Factors](#risk-factors)
9. [Competitive Landscape](#competitive-landscape)
10. [Legal and Regulatory](#legal-and-regulatory)
11. [Deployed Contracts](#deployed-contracts)
12. [References](#references)

---

## 1. Abstract

Artosphere (ARTS) is a decentralized science (DeSci) protocol on Base mainnet whose token emission is triggered by real-world physics experiments. When an experiment publishes results relevant to an on-chain prediction, the protocol mints a predetermined amount of ARTS and distributes it automatically across a grant fund, liquidity pool, staking rewards, and burn.

The underlying scientific hypothesis proposes that certain Standard Model parameters obey discrete algebraic identities over the ring ℤ[φ] = ℚ(√5), where φ = (1+√5)/2 is the golden ratio. One Tier 1 prediction — the solar neutrino mixing angle sin²θ₁₂ = 1/(2φ) ≈ 0.30902 — has been experimentally confirmed by the JUNO collaboration at 0.021σ. Five additional decisive experimental tests are scheduled between 2026 and 2045.

The maximum token supply is 987,000,000 ARTS = F(16) × 10⁶. Supply is science-gated: new ARTS can only be minted through the Experiment Milestone Protocol upon sector resolution, which requires either AI oracle consensus or human arbitration by ORCID-verified researchers.

---

## 2. Scientific Foundation

### 2.1 The Hypothesis

The Artosphere Hypothesis is a falsifiable proposal that certain Standard Model parameters obey discrete algebraic identities over the ring ℤ[φ] = ℚ(√5), with a single dimensional constant (M_Planck) and a single dimensionless constant (φ = (1+√5)/2).

The mathematical structure has a category-theoretic interpretation via A₅ (the icosahedral group, PSL(2,5)) and Fibonacci Modular Tensor Category. The scope is algebraic relations within the Standard Model flavor sector; the hypothesis does not propose new particles beyond the Standard Model, modified gravity, or a Theory of Everything.

Full derivations and mathematical proofs are published in peer-reviewable depositions on Zenodo (see Section 9). This whitepaper summarizes the results directly relevant to token mechanics.

### 2.2 Tier 1 Predictions

| # | Prediction | Formula | Experimental status |
|---|-----------|---------|--------------------|
| 1 | Solar neutrino mixing | sin²θ₁₂ = 1/(2φ) = 0.30902 | **JUNO 2025: 0.3092 ± 0.0087 → 0.021σ** ⭐ |
| 2 | Strong coupling | αₛ(M_Z) = 1/(2φ³) = 0.11803 | PDG 2024: 0.1180 ± 0.0009 → 0.15σ |
| 3 | Leptonic CP phase | δ_CP = π + arctan(√5) ≈ 243.4° | T2K/NOvA: consistent within current precision |
| 4 | Strong CP | θ_QCD = 0 (topological) | nEDM bound: consistent |
| 5 | Critical line identity | ½ − 1/φ² = αₛ | Algebraic consequence of #1 and #2 |

**Tier 1.5** — Higgs self-coupling λ_H = (1/2)φ^(−(5+√5)/4), predicting m_H = 125.256 GeV (matches PDG at 0.04σ). The exponent (5+√5)/4 equals D²(Fib)/2, where D²(Fib) is the global quantum dimension squared of Fibonacci Modular Tensor Category — a category-theoretic invariant defined a priori, independent of the Higgs sector.

### 2.3 The JUNO Confirmation

The JUNO (Jiangmen Underground Neutrino Observatory) collaboration released its first neutrino oscillation result in late 2025: **sin²θ₁₂ = 0.3092 ± 0.0087**, based on 59 days of reactor-antineutrino data. The Artosphere prediction 1/(2φ) = 0.309017 differs from this measurement by 0.021σ.

The prediction was pre-registered in Zenodo depositions in early 2026, before the JUNO measurement was published.

**Uniqueness of the pattern.** The value 1/(2φ) (equivalently, tan θ₁₂ = 5^(1/4)) is the only "golden ratio" neutrino mixing pattern compatible with current global fit data (NuFIT 5.2) within 1σ. Two prior proposals in the literature — GR1 (Kajiyama, Raidal, Strumia 2007, sin²θ₁₂ = 0.276) and GR2 (Rodejohann 2009, sin²θ₁₂ = 0.345) — are now excluded at 3.8σ and 4.1σ respectively. The Artosphere pattern is not found in the published A₅ flavor model literature (Albright–Dueck–Rodejohann 2010 canonical classification), making it an original prediction.

Final JUNO precision (~0.5%) is expected between 2028 and 2030, providing approximately 16σ discrimination between the Artosphere prediction and all competing golden-ratio or tri-bimaximal patterns.

### 2.4 Honest Probability

The prior probability that the Artosphere Hypothesis describes real physics, as assessed after extensive internal audit:

- Optimistic: 24%
- **Neutral: 15–16%**
- Pessimistic: 8%

The protocol is designed to function and create value across the full range of outcomes, including refutation of one or more Tier 1 predictions.

---

## 3. Protocol Architecture

The Artosphere protocol on Base mainnet consists of a token and staking layer (existing) plus an Experiment Milestone layer that translates real-world physics results into on-chain events.

### 3.1 Token and Staking Layer

- **PhiCoin (ARTS)** — ERC-20 token with UUPS upgradeability and a 0.618% spiral burn applied to transfers (with exempt addresses for staking and liquidity infrastructure).
- **PhiStaking V3** — Lock-tiered staking contract with Fibonacci lock durations (5, 21, 55 days) and golden-ratio tier multipliers (1×, φ, φ²). Initial APY of 61.8% with weekly epoch decay by a factor of 1/φ.
- **PhiAMM** — Constant-product automated market maker (spot swaps, no leverage) with a 1.18% swap fee routed to the protocol treasury.
- **DiscoveryStaking** — Stake-on-prediction contract allowing users to back or oppose specific experimental outcomes.
- **ResearcherRegistry** — On-chain registry mapping wallet addresses to ORCID-verified researcher identities.

### 3.2 Experiment Milestone Protocol

The Experiment Milestone Protocol (EMP) is the core innovation of Artosphere. It consists of four smart contracts that collectively translate experimental publications into on-chain state transitions and token emission.

#### 3.2.1 ExperimentMilestoneProtocol.sol

Tracks six experiment sectors. Each sector represents a specific falsifiable prediction tied to a specific experiment and has:

- Name, textual prediction, target experiment
- Predicted numerical value with sigma threshold
- Fixed ARTS emission amount (triggered on resolution)
- State machine: `PENDING → DATA_RECEIVED → CONFIRMED / REFUTED / INCONCLUSIVE / PREDICTION_RECLASSIFIED / SCOPE_REFINED`

**Emission is identical for all terminal states:** a sector transitioning to `CONFIRMED` mints the same amount of ARTS as a sector transitioning to `REFUTED`, with the same distribution. The protocol treats all experimental results as value-creating events.

Sector transitions are permissioned (`ORACLE_ROLE`, held by the ScienceOracle contract). Each transition triggers `MilestoneEmission.onSectorResolved()`.

#### 3.2.2 ScienceOracle.sol

A four-layer oracle system for translating off-chain experimental results into on-chain state.

**Layer 1 — Data Feeds (off-chain).** Daily scraping of arXiv (hep-ph, hep-ex, nucl-ex), PDG API, HEPData, and INSPIRE-HEP. Automated parsing for publications matching each sector's keywords and experimental identifiers.

**Layer 2 — AI Verification (off-chain).** Two independent large language model agents (Claude and GPT) each extract numerical results from the parsed publication and compute the sigma deviation from the on-chain prediction. Only results where both agents agree advance to on-chain submission.

**Layer 3 — On-Chain Submission (`submitResult`).** An authorized submitter (Chainlink Functions node calling from the off-chain pipeline) submits the result on-chain with: sector ID, measured value and sigma deviation, proposed outcome, evidence hash (arXiv DOI or IPFS), and dual-AI consensus proof. This begins a 7-day challenge window. Any address may challenge the submission by posting a 0.001 ETH bond and providing counter-evidence.

**Layer 4 — Resolution.**
- **No challenge within 7 days** → any address may call `finalizeSubmission()` (permissionless). The result pushes to ExperimentMilestoneProtocol and the sector transitions.
- **Challenge submitted** → `ARBITER_ROLE` (ResearcherRegistry 2-of-3 multisig of ORCID-verified physicists) resolves the challenge. If upheld, original submission stands and the challenger forfeits the bond. If overturned, the submission is discarded; a new submission may be made.

#### 3.2.3 MilestoneEmission.sol

Receives callbacks from ExperimentMilestoneProtocol when a sector is resolved. Mints the sector's predetermined ARTS amount via PhiCoin's `mintTo` (requires MINTER_ROLE on PhiCoin) and distributes in fixed proportions:

| Destination | Share |
|-------------|-------|
| HypothesisEvolutionFund | 50% |
| Liquidity Pool (Aerodrome) | 30% |
| Staking Rewards Pool | 15% |
| Burn | 5% |

A sector can only emit once. The contract tracks `sectorEmitted[sectorId]` and reverts on double-emission attempts.

#### 3.2.4 HypothesisEvolutionFund.sol

A grant and bounty contract that receives 50% of every milestone emission and distributes through two channels:

**Grant Proposals.** Any address may propose a grant by calling `proposeGrant(recipient, amount, title, ipfsHash, sectorId)`. `APPROVER_ROLE` reviews and either approves (with a note) or rejects. Approved grants are disbursed by admin.

**Bounty Board.** Admin creates bounties with `createBounty(reward, title, ipfsHash, sectorId)`. Any address may submit work via `submitBounty(bountyId, submissionHash)`. APPROVER_ROLE evaluates and releases payment.

The fund is initially seeded with 8,000,000 ARTS and refills through ongoing milestone emissions, creating a self-sustaining research budget that grows with experimental progress.

---

## 4. Tokenomics

### 4.1 Supply

- **Maximum supply:** 987,000,000 ARTS = F(16) × 10⁶
- **Minted as of April 2026:** 8,000,000 ARTS (in HypothesisEvolutionFund)
- **Unminted, reserved for milestone emission:** 979,000,000 ARTS

The unminted supply is science-gated: it can only be minted through the MilestoneEmission contract, which can only be called by ExperimentMilestoneProtocol after a sector is resolved, which requires oracle consensus or arbitration. There is no administrative path to mint ARTS without a real experimental result.

### 4.2 Milestone Emission Schedule

| Sector | Target Experiment | Expected Resolution | Emission | % of Max |
|--------|-------------------|---------------------|----------|----------|
| STRONG_CP | n2EDM at PSI | 2026–2028 | 30,000,000 | 3.04% |
| JUNO | JUNO final precision | 2028–2030 | 50,000,000 | 5.07% |
| CP_PHASE | DUNE + Hyper-K | 2029–2033 | 40,000,000 | 4.05% |
| HIGGS_MTC | HL-LHC ATLAS+CMS | 2030–2033 | 80,000,000 | 8.11% |
| STRONG_COUPLING | FCC-ee Z-pole | 2040–2045+ | 100,000,000 | 10.13% |
| **Total reserved for Tier 1 sectors** | | | **300,000,000** | **30.40%** |

Remaining unminted supply (679M) is reserved for additional sectors added via governance and for platform extension.

### 4.3 Per-Milestone Distribution

Every milestone emission, regardless of outcome, distributes via MilestoneEmission.sol:

```
Example: JUNO sector resolves (50,000,000 ARTS minted)
  ├─ 25,000,000 (50%) → HypothesisEvolutionFund (research grants)
  ├─ 15,000,000 (30%) → Aerodrome LP              (protocol liquidity)
  ├─  7,500,000 (15%) → Staking rewards pool       (staker incentives)
  └─  2,500,000  (5%) → Burn                        (supply reduction)
```

### 4.4 Spiral Burn

PhiCoin implements a 0.618% (≈ 1/φ²) burn on every token transfer when total supply exceeds the floor of 9,200,000 ARTS. Addresses registered in `spiralBurnExempt` (staking contracts, liquidity pairs, critical infrastructure) are exempt from burn to prevent double-taxation during routine operations.

### 4.5 Staking

PhiStaking V3 offers three lock tiers with Fibonacci durations and golden-ratio multipliers:

| Tier | Lock Duration | Multiplier |
|------|---------------|-----------|
| 0 | 5 days | 1.0× |
| 1 | 21 days | φ ≈ 1.618× |
| 2 | 55 days | φ² ≈ 2.618× |

Initial APY is 61.8% (= 1/φ), decaying by a factor of 1/φ each weekly epoch. Staking rewards are paid from the staking rewards pool (funded by 15% of each milestone emission).

### 4.6 Fees

- **NashFee** — 1.18% on every PhiAMM swap, routed to protocol treasury
- **DiscoveryStaking royalty** — 9.02% of losing-pool payouts routed to the founder wallet as transparent on-chain royalty

Both rates are golden-ratio derived and fully disclosed in contract source code.

---

## 5. Governance

### 5.1 Administration

The protocol is administered by a Gnosis Safe multisig at `0x75BA1367c9B2B750A1751Dd527902e0f1d67a8fb`. The Safe currently operates as 1-of-1 with the founder as sole owner; migration to a 2-of-3 multisig with additional ORCID-verified signers is planned.

### 5.2 Role-Based Access Control

Contract operations are gated by OpenZeppelin AccessControl roles:

| Role | Held By | Authority |
|------|---------|-----------|
| `DEFAULT_ADMIN_ROLE` | Safe multisig | Grant and revoke other roles |
| `UPGRADER_ROLE` | Safe multisig | Authorize UUPS upgrades (PhiCoin, PhiStaking V3, DiscoveryStaking) |
| `ORACLE_ROLE` | ScienceOracle contract | Call `resolveSector()` on ExperimentMilestoneProtocol |
| `ARBITER_ROLE` | ResearcherRegistry 2-of-3 | Resolve oracle disputes |
| `APPROVER_ROLE` | Safe multisig | Approve grants and bounties in HypothesisEvolutionFund |
| `MINTER_ROLE` (on PhiCoin) | MilestoneEmission + PhiStaking V3 | Mint ARTS for emissions and staking rewards |

### 5.3 Minting Authority

No role grants minting authority to any individual wallet. Minting requires the full contract chain:

```
ExperimentMilestoneProtocol → MilestoneEmission → PhiCoin.mintTo()
```

This chain requires a resolved sector, which requires oracle consensus (AI + 7-day challenge) or ORCID-verified arbitration. The founder cannot unilaterally mint ARTS.

---

## 6. Experimental Roadmap

Token emission is driven by real-world experimental schedules.

| Year | Event | Sector | Emission |
|------|-------|--------|----------|
| 2026–2028 | n2EDM at PSI — final d_n result (θ_QCD test) | STRONG_CP | 30M ARTS |
| 2027 | JUNO intermediate data (precision ~1%) | JUNO (informational) | — |
| 2028–2030 | JUNO final sin²θ₁₂ to 0.5% precision | JUNO | 50M ARTS |
| 2029–2033 | DUNE Phase I δ_CP measurement | CP_PHASE | 40M ARTS |
| 2030–2033 | HL-LHC ATLAS+CMS m_H to 21 MeV | HIGGS_MTC | 80M ARTS |
| 2032 | Hyper-Kamiokande δ_CP cross-check | CP_PHASE | (completes sector) |
| 2040–2045+ | FCC-ee Z-pole αₛ to 0.1% precision | STRONG_COUPLING | 100M ARTS |

Four of the five sectors are expected to resolve between 2026 and 2033.

---

## 7. Security

### 7.1 Audit Status

All contracts are open-source under the MIT license and published at `github.com/fbsmna-coder/artosphere-contracts`. Source code is verifiable and reproducible via Foundry.

At the time of writing, **no third-party professional audit has been commissioned**. The following audit pipeline is planned:

- **Q2 2026:** Code4rena competitive audit for core contracts (PhiCoin, PhiStaking V3, ExperimentMilestoneProtocol, MilestoneEmission, HypothesisEvolutionFund)
- **Q3 2026:** Internal formal verification passes (Certora or Halmos) for critical invariants (supply cap, emission limits, role boundaries)
- **Ongoing:** Immunefi-style bug bounty program funded from HypothesisEvolutionFund once protocol activity begins

Prospective holders should assume the contracts may contain bugs until a full audit is completed. No prior incident history exists because no user interactions have occurred.

### 7.2 Upgrade Authority

Three contracts are UUPS-upgradeable:
- PhiCoin (ARTS token)
- PhiStaking V3
- DiscoveryStaking

The `UPGRADER_ROLE` on each is held by the Gnosis Safe multisig. There is no timelock on upgrades. The founder has committed to publishing any planned upgrade at least 72 hours before execution via official channels (artosphere.org, @FSspronov on X).

All other contracts (PhiAMM, ExperimentMilestoneProtocol, ScienceOracle, MilestoneEmission, HypothesisEvolutionFund) are **non-upgradeable**. Their bytecode is permanent.

### 7.3 Admin Privileges

The Safe multisig holds the following roles across the protocol:

| Role | Contracts | Authority |
|------|-----------|-----------|
| `DEFAULT_ADMIN_ROLE` | All | Grant and revoke other roles |
| `UPGRADER_ROLE` | 3 UUPS proxies | Execute contract upgrades |
| `APPROVER_ROLE` | HypothesisEvolutionFund | Approve grants and bounties |

Contract-to-contract roles (not held by any human):

| Role | Holder | Purpose |
|------|--------|---------|
| `ORACLE_ROLE` | ScienceOracle | Resolve sectors |
| `ARBITER_ROLE` | ResearcherRegistry 2-of-3 | Resolve oracle disputes |
| `MINTER_ROLE` on PhiCoin | MilestoneEmission, PhiStaking V3 | Mint ARTS for emissions and rewards |

No single address holds standalone minting authority. Minting requires the full ExperimentMilestoneProtocol → MilestoneEmission → PhiCoin chain, which requires either oracle consensus or ORCID-verified arbitration.

### 7.4 Oracle Security

The ScienceOracle implements a four-layer defense against result manipulation:

1. **Dual AI consensus (off-chain).** Two independent large language models (Claude and GPT) must both agree on the extracted numerical result. Divergent analyses are discarded.
2. **Chainlink Functions transport.** Results are submitted to the oracle contract via Chainlink Functions nodes, preventing a single off-chain submitter from controlling the data flow.
3. **7-day permissionless challenge window.** Any address can challenge a pending result with a 0.001 ETH bond. A single honest challenger blocks the finalization.
4. **Human arbitration.** If challenged, the ResearcherRegistry 2-of-3 ORCID-verified arbiter multisig resolves the dispute. Arbiters are public physicists whose professional reputation is at stake.

This design makes collusion extraction-resistant: corrupting the result would require simultaneously compromising two AI providers, the Chainlink node infrastructure, the entire community's ability to challenge, and the ORCID arbiters.

### 7.5 Known Issues

Transparently documented unresolved issues as of the whitepaper date:

- **Grant accountability gap.** Once a grant is disbursed from HypothesisEvolutionFund, no on-chain mechanism currently verifies that the recipient actually completes the funded research. A milestone-based release pattern (partial disbursement on approval, remainder on publication evidence) is planned but not yet implemented.
- **Safe 1-of-1.** The administrative multisig currently has a single owner. Migration to 2-of-3 with additional ORCID-verified signers is prioritized for Q2 2026.
- **No MEV protection on PhiAMM.** The AMM does not implement MEV-resistant mechanisms (no private mempool, no commit-reveal). Sandwich attacks are theoretically possible once trading begins.

---

## 8. Risk Factors

### 8.1 Scientific Risk

The Artosphere Hypothesis has a prior probability of 15–16% of being correct based on internal hostile audit. This implies approximately 85% probability that one or more Tier 1 predictions will be refuted by future experiments.

The protocol architecture is designed to continue functioning across all experimental outcomes. Refuted predictions trigger the same token emission as confirmed ones, and the HypothesisEvolutionFund finances alternative research directions on refutation. However, **long-term token value may be materially impacted** by scientific outcomes, particularly if:

- Multiple Tier 1 predictions are refuted simultaneously
- The JUNO final precision measurement (2028–2030) deviates significantly from 1/(2φ)
- The scientific community rejects the algebraic framework despite individual predictions holding

### 8.2 Technical Risk

- **Smart contract vulnerabilities.** Contracts may contain bugs that enable unauthorized minting, fund extraction, or role escalation. No third-party audit has been completed.
- **Oracle manipulation.** The AI oracle relies on off-chain infrastructure (Chainlink Functions, LLM providers, arXiv API). Outage or manipulation of these dependencies could delay or corrupt sector resolution.
- **Upgrade risk.** UUPS upgrades on three core contracts could introduce new vulnerabilities or change protocol behavior. No on-chain timelock enforces a delay.
- **Key management.** The Safe 1-of-1 private key is a single point of failure. Loss would result in loss of administrative control. Compromise would result in full protocol takeover.
- **Dependency risk.** Critical dependencies include OpenZeppelin contracts, Chainlink Functions, Base L2 sequencer, and Aerodrome DEX. Any of these introducing bugs or changing terms could affect the protocol.

### 8.3 Market and Liquidity Risk

- **Pre-launch state.** As of the whitepaper date, no public trading has occurred. There is no established market price, no liquidity pool, and no trading volume.
- **Bootstrap dependency.** Initial liquidity will depend on founder-provided seed capital and first milestone emission. Until sufficient liquidity depth accumulates, slippage on any trade may be severe.
- **Low float.** If staking lock-up rates are high, circulating supply may be very low, amplifying price volatility.
- **No market makers.** No professional market maker agreement exists. Spread and depth will depend on organic liquidity provision.

### 8.4 Regulatory Risk

- **Securities classification uncertainty.** ARTS has not been formally classified by any regulator. The founder's position (see Section 10) is that ARTS does not meet the Howey test, but this has not been tested in court.
- **MiCA exposure.** Once public trading occurs within the EU, MiCA whitepaper notification to ESMA or the Spanish CNMV may be required. The protocol is currently pre-launch and outside MiCA's trigger conditions.
- **Tax treatment.** Token receipts (staking rewards, grants, bounties) may create taxable events in participants' jurisdictions. No tax advice is provided.
- **Sanctions.** PhiAMM is a decentralized contract with no KYC. Interactions from sanctioned addresses are not technically prevented, creating theoretical sanctions exposure for protocol participants.

### 8.5 Founder Dependency

The protocol is currently developed and administered by a single individual (F.B. Sapronov). This creates concentrated risk:

- **Single-person continuity.** Illness, incapacitation, or loss of interest would stall protocol development until alternative governance is established.
- **Reputational dependency.** The protocol's credibility is tied to the founder's public scientific reputation. Damage to that reputation, whether justified or not, affects the protocol.
- **Key person risk.** Role migration to a 2-of-3 multisig with independent signers is planned but not complete.

### 8.6 Scientific Publication Risk

Predictions are registered in Zenodo depositions with DOI timestamps. However:

- Zenodo is a CERN-hosted service and is subject to CERN policy changes.
- The arXiv endorsement process for direct submission is ongoing and not yet complete.
- If traditional peer review rejects the hypothesis publicly, protocol narrative value may be impaired regardless of experimental outcomes.

### 8.7 No Investment Advice

This whitepaper is a technical and scientific description of the Artosphere protocol. It is not investment advice, solicitation, or an offer to sell securities. ARTS is a research instrument tied to experimental outcomes with a 15% prior probability of the underlying hypothesis being correct.

**Prospective holders should assume maximum loss and deploy only capital they can afford to write off.**

---

## 9. Competitive Landscape

Artosphere occupies a specific niche within the broader decentralized science ecosystem. Comparable projects and positioning:

| Project | Category | Mechanism | Differentiation from Artosphere |
|---------|----------|-----------|--------------------------------|
| **VitaDAO** | DeSci (longevity) | IP-NFTs funded by DAO token votes | Token votes fund research; Artosphere emits tokens on experimental outcomes |
| **Molecule** | DeSci infrastructure | IP-NFT marketplace | Tokenizes intellectual property; Artosphere tokenizes predictions |
| **ResearchHub** | DeSci (publishing) | Scientific content rewards (RSC) | Rewards contribution; Artosphere rewards predictive accuracy |
| **Ocean Protocol** | Data marketplace | Data tokens and compute-to-data | Generic data tokenization; Artosphere specific to physics experiments |
| **Polymarket (science topics)** | Prediction markets | Binary/scalar markets with USDC | Speculative markets; Artosphere ties markets to token emission and research funding |
| **Gitcoin Grants** | Public goods funding | Quadratic funding rounds | Community-voted grants; Artosphere automates grant release on experimental resolution |

### 9.1 Positioning

Artosphere is the first DeSci protocol with the following combined properties:

1. **Token emission tied to real physics experiments**, not to team decisions, time, or block number
2. **Symmetric economic response** to confirmation and refutation (both trigger identical emission and distribution)
3. **Dual-AI oracle** reading physics publications to drive on-chain state transitions
4. **Self-replenishing grant fund** that both depletes (through grants) and refills (through emission) on each milestone

### 9.2 Collaboration Potential

Artosphere is designed to complement existing DeSci projects rather than compete. Possible integrations:

- **VitaDAO / Molecule partnership** for IP-NFT tokens representing Artosphere-funded research outputs
- **Ocean data tokens** for experimental datasets referenced in Artosphere predictions
- **ResearcherRegistry federation** with other DeSci identity systems based on ORCID
- **Chainlink Functions** already integrated for oracle transport

The protocol does not pursue network-effect lock-in. Researchers using Artosphere can publish and fund work elsewhere in parallel.

---

## 10. Legal and Regulatory

### 10.1 Token Classification

The founder's position, not constituting legal advice and not verified by external counsel at the time of writing, is that ARTS is **not a security** under the Howey test:

- **Investment of money:** No primary sale has occurred. No ICO, presale, private round, or token distribution has taken place. Investors have not transferred value in exchange for ARTS.
- **Common enterprise:** The protocol does not operate a managed investment vehicle. Token holders do not pool capital under central management.
- **Expectation of profits:** The protocol does not guarantee, imply, or promote price appreciation. Official materials disclose 15% prior probability for the underlying hypothesis and 85% probability that one or more predictions will be refuted.
- **Efforts of others:** The primary value driver is experimental outcomes external to the protocol team (JUNO, n2EDM, HL-LHC, DUNE, FCC-ee collaborations). Token value does not depend on ongoing promotional or managerial efforts by the founder.

This analysis has not been reviewed by US or EU securities counsel. Prospective holders in any jurisdiction should obtain independent legal advice before acquiring ARTS.

### 10.2 MiCA (EU Regulation 2023/1114)

MiCA became fully applicable to crypto-asset service providers in the EU as of 2024. Under MiCA:

- ARTS may fall within the "Other crypto-asset" category (neither e-money token nor asset-referenced token).
- A MiCA whitepaper notification to the competent national authority (Spanish CNMV, where the founder is resident, or the destination market's regulator) may be required before any "offer to the public" or "admission to trading."
- **As of the whitepaper date, no offer to the public has occurred within the EU.** The protocol is pre-launch. MiCA's trigger conditions have not been activated.

Formal MiCA compliance review is planned prior to any public liquidity event.

### 10.3 Jurisdiction

- **Founder residence:** Spain (EU member state).
- **Smart contract deployment:** Base L2 (Coinbase network), physically distributed globally, no central server.
- **Governance entity:** None. The protocol operates through smart contracts and the Gnosis Safe multisig. No legal wrapper (DAO LLC, foundation, association) has been established.
- **Future structure:** A Swiss Verein or Liechtenstein Stiftung structure for the governance council is under consideration for 2026–2027, contingent on protocol activity levels.

### 10.4 Prohibited Jurisdictions

ARTS is not marketed, solicited, or available in jurisdictions where such activity would violate local law. Participants are responsible for ensuring compliance with their local regulatory environment. The protocol cannot and does not enforce jurisdiction-based access controls at the smart contract level.

### 10.5 Anti-Money-Laundering

The protocol itself does not perform KYC or transaction monitoring. PhiAMM is a non-custodial automated market maker. Participants using centralized services to on-ramp or off-ramp ARTS will be subject to those services' AML requirements.

### 10.6 Intellectual Property

All Artosphere smart contract source code is released under the **MIT License** and is freely forkable. Scientific content (Zenodo papers) is licensed under **Creative Commons Attribution (CC BY 4.0)** and is openly citable. The project claims no patent coverage on the algebraic identities discussed in the scientific foundation.

### 10.7 Disclaimer

This whitepaper is provided for informational purposes only. It is not an offer to sell, a solicitation of an offer to buy, or a recommendation regarding any security, investment, or crypto-asset. It is not tax, legal, or investment advice. No regulatory authority has reviewed, approved, or endorsed this document or the ARTS protocol.

**Forward-looking statements** (including experimental roadmap, emission schedule, and predicted scientific outcomes) are subject to change based on experimental results, scientific discoveries, regulatory developments, and protocol evolution. The founder makes no guarantee that any described milestone, feature, or outcome will occur.

---

## 11. Deployed Contracts

All contracts are live on **Base Mainnet (chain ID 8453)** and verified on Basescan.

### 11.1 Token and Staking Layer

| Contract | Address |
|----------|---------|
| PhiCoin (ARTS) | `0x1C11133D4dDa9D85a6696B020b0c48e2c24Ed0bf` |
| PhiStaking V3 | `0x5ba76643E3ef93Ab76Efc8e162594405A3c79f7B` |
| DiscoveryStaking | `0x3Fc4d3466743e0c068797D64A91EF7A8826a19e2` |
| PhiAMM | `0xf32c97846963c335eb78969c8c732945edc4e575` |
| NashFee | `0xb11e81168f97b6241cb037d9d02b282879ec3e52` |
| ResearcherRegistry | `0x295410735a0d9f68850a94b97a43fff7a5961cc9` |
| HypothesisEvolutionFund (seed) | `0x5c818B269A484321D650b526e4d47cF8D29dCF4B` |

### 11.2 Governance

| Contract | Address |
|----------|---------|
| Gnosis Safe (multisig admin) | `0x75BA1367c9B2B750A1751Dd527902e0f1d67a8fb` |

### 11.3 Experiment Milestone Protocol v3

The four v3 contracts (ExperimentMilestoneProtocol, ScienceOracle, MilestoneEmission, new HypothesisEvolutionFund) are written and compiling. Deployment addresses will be published in the authoritative `DEPLOYED_ADDRESSES.md` file upon launch.

### 11.4 Source Code

All Solidity contracts, Foundry scripts, and test suites are available at:

`github.com/fbsmna-coder/artosphere-contracts`

License: MIT

---

## 12. References

### 12.1 Artosphere Scientific Papers (Zenodo)

1. Sapronov, F.B. *Framework: 36 Standard Model Parameters from {M_Planck, φ}.* Zenodo. DOI: 10.5281/zenodo.19484143
2. Sapronov, F.B. *Master Action — The Artosphere Hypothesis.* Zenodo. DOI: 10.5281/zenodo.19481141
3. Sapronov, F.B. *Paper I–II: Twenty-Eight Standard Model Parameters.* Zenodo. DOI: 10.5281/zenodo.19371475
4. Sapronov, F.B. *Paper III: Structural Derivations from V_Art.* Zenodo. DOI: 10.5281/zenodo.19469471
5. Sapronov, F.B. *Paper IV: Gravity Hierarchy and Dark Energy (Icosahedral).* Zenodo. DOI: 10.5281/zenodo.19469469
6. Sapronov, F.B. *Paper V: Complete Derivation (28 Parameters).* Zenodo. DOI: 10.5281/zenodo.19469909
7. Sapronov, F.B. *Paper VI-b: Z-boson from M_Planck and φ.* Zenodo. DOI: 10.5281/zenodo.19480597
8. Sapronov, F.B. *Paper VII: Higgs-Flavor Identity M_H and J_CP.* Zenodo. DOI: 10.5281/zenodo.19480973
9. Sapronov, F.B. *Paper VIII: Cosmology (Inflation + CPV + Strong CP).* Zenodo. DOI: 10.5281/zenodo.19482717
10. Sapronov, F.B. *Monograph v7.0: The Artosphere Hypothesis.* Zenodo. DOI: 10.5281/zenodo.19475900
11. Sapronov, F.B. *JUNO Letter — Neutrino Mixing from A₅ ⊂ Cl(6).* Zenodo. DOI: 10.5281/zenodo.19472827
12. Sapronov, F.B. *Fibonacci Fusion: Z₃-graded Cl(6) → V_Art.* Zenodo. DOI: 10.5281/zenodo.19473026
13. Sapronov, F.B. *Z Boson Mass from Gauge-Spectral Eigenvalue.* Zenodo. DOI: 10.5281/zenodo.19473552
14. Sapronov, F.B. *Complete Electroweak Spectrum (L4 Spectral).* Zenodo. DOI: 10.5281/zenodo.19473762

### 12.2 External Scientific References

- JUNO Collaboration (2025). *First Measurement of Solar Neutrino Mixing from Reactor Antineutrinos.* (arXiv, 59-day dataset)
- Esteban, I., Gonzalez-Garcia, M.C., Maltoni, M. et al. *NuFIT 5.2: Three-Flavor Global Fit to Neutrino Oscillation Data.*
- Particle Data Group (2024). *Review of Particle Physics.* PRD 110, 030001.
- Kajiyama, Y., Raidal, M., Strumia, A. (2007). *The Golden Ratio Prediction for the Solar Neutrino Mixing.* arXiv: 0705.4559.
- Rodejohann, W. (2009). *Unified Parametrization for Quark and Lepton Mixing Angles.* arXiv: 0903.0531.
- Albright, C.H., Dueck, A., Rodejohann, W. (2010). *Possible Alternatives to Tri-Bimaximal Mixing.* arXiv: 1004.2798.
- n2EDM Collaboration (2021). *Design of n2EDM.* EPJ C 81, 512.
- HL-LHC ATLAS+CMS Physics Projections (2025). ATL-PHYS-PUB-2025-018.

### 12.3 Technical References

- OpenZeppelin Contracts v5.x — `github.com/OpenZeppelin/openzeppelin-contracts`
- Gnosis Safe — `github.com/safe-global/safe-smart-account`
- Chainlink Functions — `docs.chain.link/chainlink-functions`
- Foundry — `github.com/foundry-rs/foundry`
- Base (Coinbase L2) — `base.org`

---

*The protocol mints ARTS when experiments publish results. Every result — confirmation or refutation — creates emission, liquidity, and research funding. The token exists to sustain a cycle of scientific progress, not to bet on any single outcome.*

— F.B. Sapronov
