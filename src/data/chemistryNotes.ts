import { StudyNote } from '../types';

export const CHEMISTRY_GRADE_12_NOTES: StudyNote[] = [
  {
    id: 'chem-g12-u1-note',
    title: 'Unit 1: Acid-Base Equilibria (Complete Revision Summary)',
    subject: 'Chemistry',
    topic: 'Acid-Base Equilibria',
    summary: 'Concise short notes for Grade 12 Chemistry Unit 1: Arrhenius, Brønsted-Lowry & Lewis theories, autoionization of water, pH/pOH scale, Ka & Kb equilibria, common ion effect, buffer solutions (Henderson-Hasselbalch), salt hydrolysis, and acid-base titrations.',
    readTimeMinutes: 10,
    isFreePreview: true,
    tags: ['Chemistry', 'Grade 12', 'Acid-Base', 'Buffers', 'Titrations', 'Equilibrium'],
    keyTakeaways: [
      'Acid-Base Theories: Arrhenius (H⁺ / OH⁻ in water), Brønsted-Lowry (proton donor / acceptor; conjugate pairs), Lewis (electron pair acceptor / donor).',
      'Water Autoionization: Kw = [H₃O⁺][OH⁻] = 1.0 × 10⁻¹⁴ at 25°C (pH + pOH = 14).',
      'Weak Acid/Base Equilibria: Ka = [H₃O⁺][A⁻]/[HA], Kb = [HB⁺][OH⁻]/[B], and Ka × Kb = Kw.',
      'Buffer Solutions: Resist pH changes; pH = pKa + log([Conjugate Base]/[Weak Acid]) (Henderson-Hasselbalch).',
      'Salt Hydrolysis: Salt of Weak Acid + Strong Base = Basic (pH > 7); Strong Acid + Weak Base = Acidic (pH < 7); Strong + Strong = Neutral (pH = 7).',
      'Titrations: At equivalence point, moles of H⁺ = moles of OH⁻ (N₁V₁ = N₂V₂).'
    ],
    contentMarkdown: `GRADE 12 CHEMISTRY — UNIT 1: ACID-BASE EQUILIBRIA

1. ACID-BASE CONCEPTS & DEFINITIONS

A. Arrhenius Concept:
• Acid: A substance that increases the concentration of H⁺ (H₃O⁺) in aqueous solution (e.g., HCl, HNO₃, H₂SO₄, HClO₄).
• Base: A substance that increases the concentration of OH⁻ in aqueous solution (e.g., NaOH, KOH, Ca(OH)₂).
• Neutralization: Reaction between H⁺ and OH⁻ to form H₂O.
• Limitation: Restricted exclusively to aqueous solutions and cannot explain the basicity of species like NH₃ that lack OH⁻ in their formula.

B. Brønsted-Lowry Concept:
• Acid: Proton (H⁺) donor.
• Base: Proton (H⁺) acceptor.
• Conjugate Acid-Base Pairs: Two species that differ by exactly one proton (H⁺).
  - When an acid donates a proton, it becomes its conjugate base (e.g., CH₃COOH → CH₃COO⁻).
  - When a base accepts a proton, it becomes its conjugate acid (e.g., NH₃ → NH₄⁺).
  - Strength Rule: The stronger an acid, the weaker its conjugate base. A reaction proceeds to form the weaker acid and weaker base.
• Amphiprotic Species: Substances that can either donate or accept protons depending on reaction partners (e.g., H₂O, HCO₃⁻, H₂PO₄⁻).

C. Lewis Concept:
• Acid: Electron pair acceptor (electron-deficient atoms, cations, or molecules with empty orbitals, e.g., BF₃, AlCl₃, CO₂, metal ions).
• Base: Electron pair donor (species with lone pairs or anions, e.g., :NH₃, H₂O:, OH⁻, Cl⁻).
• Coordinate Covalent Bond: Formed when a Lewis base donates a pair of electrons to a Lewis acid to produce an adduct.

============================================================

2. AUTOIONIZATION OF WATER & THE pH SCALE

• Autoionization Reaction:
  2H₂O(l) ⇌ H₃O⁺(aq) + OH⁻(aq)

• Ion-Product Constant for Water (Kw):
  Kw = [H₃O⁺][OH⁻] = 1.0 × 10⁻¹⁴ (at 25°C)
  In pure water: [H₃O⁺] = [OH⁻] = 1.0 × 10⁻⁷ M

• The pH and pOH Scale:
  pH = -log[H₃O⁺]  and  [H₃O⁺] = 10^(-pH)
  pOH = -log[OH⁻]  and  [OH⁻] = 10^(-pOH)
  pH + pOH = pKw = 14.00 (at 25°C)

• Solution Classification at 25°C:
  - Neutral: [H₃O⁺] = [OH⁻] = 1.0 × 10⁻⁷ M,  pH = 7.00
  - Acidic:  [H₃O⁺] > [OH⁻],  [H₃O⁺] > 1.0 × 10⁻⁷ M,  pH < 7.00
  - Basic:   [OH⁻] > [H₃O⁺],  [H₃O⁺] < 1.0 × 10⁻⁷ M,  pH > 7.00

============================================================

3. WEAK ACID & WEAK BASE EQUILIBRIA

• Acid Dissociation Constant (Ka):
  HA(aq) + H₂O(l) ⇌ H₃O⁺(aq) + A⁻(aq)
  Ka = ([H₃O⁺][A⁻]) / [HA]
  Larger Ka value indicates a stronger weak acid.

• Base Dissociation Constant (Kb):
  B(aq) + H₂O(l) ⇌ HB⁺(aq) + OH⁻(aq)
  Kb = ([HB⁺][OH⁻]) / [B]

• Relationship between Ka and Kb:
  Ka × Kb = Kw = 1.0 × 10⁻¹⁴ (at 25°C)
  pKa + pKb = 14.00

• Percent Ionization:
  Percent Ionization = ([Ionized acid at equilibrium] / [Initial concentration of acid]) × 100%
  5% Rule: If percent ionization is less than or equal to 5%, the approximation [HA]₀ - x ≈ [HA]₀ is valid.

============================================================

4. COMMON ION EFFECT & BUFFER SOLUTIONS

• Common Ion Effect:
  The suppression of ionization of a weak electrolyte by the addition of a strong electrolyte that provides a common ion (shifts equilibrium to the left according to Le Chatelier's principle).

• Buffer Solution:
  A solution that resists changes in pH upon the addition of small amounts of strong acid or strong base.
  - Acidic Buffer: Weak acid + its salt/conjugate base (e.g., CH₃COOH + CH₃COONa).
  - Basic Buffer: Weak base + its salt/conjugate acid (e.g., NH₃ + NH₄Cl).

• Henderson-Hasselbalch Equation:
  For Acidic Buffers: pH = pKa + log([Conjugate Base] / [Weak Acid])
  For Basic Buffers:  pOH = pKb + log([Conjugate Acid] / [Weak Base])

• Buffer Capacity:
  The amount of acid or base a buffer can absorb without significant pH change. Buffer capacity is highest when [Conjugate Base] = [Acid], meaning pH = pKa.

============================================================

5. HYDROLYSIS OF SALTS

• Salt of Strong Acid + Strong Base (e.g., NaCl, KNO₃):
  Neither ion reacts with water. Solution is Neutral (pH = 7.00).

• Salt of Weak Acid + Strong Base (e.g., CH₃COONa, Na₂CO₃):
  The anion hydrolyzes: CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻.
  Solution is Basic (pH > 7.00).

• Salt of Strong Acid + Weak Base (e.g., NH₄Cl, (NH₄)₂SO₄):
  The cation hydrolyzes: NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺.
  Solution is Acidic (pH < 7.00).

• Salt of Weak Acid + Weak Base (e.g., NH₄CH₃COO, NH₄F):
  Both ions hydrolyze.
  - If Ka > Kb, the solution is Acidic.
  - If Kb > Ka, the solution is Basic.
  - If Ka = Kb, the solution is Neutral.

============================================================

6. ACID-BASE INDICATORS & TITRATIONS

• Acid-Base Indicators:
  Weak organic acids (HIn ⇌ H⁺ + In⁻) whose non-ionized molecule and conjugate base exhibit distinct colors.
  - Phenolphthalein: Colorless in acid, Pink in base (pH range 8.2 - 10.0).
  - Methyl Orange: Red in acid, Yellow in base (pH range 3.2 - 4.4).
  - Litmus: Red in acid, Blue in base (pH range 5.0 - 8.0).

• Titration Terms:
  - Equivalence Point: The exact stoichiometric point where moles of H⁺ equal moles of OH⁻.
  - End Point: The experimental point where the indicator visibly changes color.

• Volumetric Neutralization Formulas:
  Normality N = (Number of Equivalents) / (Liters of Solution) = Molarity × n_val
  N₁V₁ = N₂V₂
  Volume of Base × Concentration of Base = Volume of Acid × Unknown Concentration of Acid
`,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-g12-u2-note',
    title: 'Unit 2: Electrochemistry (Complete Revision Summary)',
    subject: 'Chemistry',
    topic: 'Electrochemistry',
    summary: 'Comprehensive short notes for Grade 12 Chemistry Unit 2: Redox reactions & balancing, electrolytic vs galvanic cells, preferential discharge rules, Faraday\'s laws of electrolysis, cell potentials, Nernst equation, Gibbs free energy, batteries, fuel cells, and corrosion prevention.',
    readTimeMinutes: 12,
    isFreePreview: true,
    tags: ['Chemistry', 'Grade 12', 'Electrochemistry', 'Galvanic Cells', 'Electrolysis', 'Nernst Equation', 'Corrosion'],
    keyTakeaways: [
      'Redox Definitions: Oxidation is electron loss / increase in oxidation state; Reduction is electron gain / decrease in oxidation state.',
      'Electrochemical Cells: Galvanic/Voltaic converts spontaneous chemical energy into electricity (ΔG < 0, E°cell > 0); Electrolytic uses electricity to drive non-spontaneous reactions (ΔG > 0).',
      'Electrode Signs: In Galvanic cells, Anode is (-), Cathode is (+); In Electrolytic cells, Anode is (+), Cathode is (-). Oxidation ALWAYS occurs at the Anode.',
      'Faraday\'s 1st Law: Mass deposited m = (M · I · t) / (n · F), where F = 96,500 C/mol e⁻.',
      'Faraday\'s 2nd Law: m₁ / E₁ = m₂ / E₂ (masses deposited in series are proportional to equivalent weights).',
      'Cell Potential & Spontaneity: E°cell = E°cathode - E°anode. Spontaneous when E°cell > 0 and ΔG° = -nFE°cell < 0.',
      'Nernst Equation at 25°C: Ecell = E°cell - (0.0592 / n) · log(Q).',
      'Corrosion & Protection: Rust is Fe₂O₃·nH₂O. Prevented by galvanizing (sacrificial Zn coating), cathodic protection, painting, and alloying.'
    ],
    contentMarkdown: `GRADE 12 CHEMISTRY — UNIT 2: ELECTROCHEMISTRY

1. REDOX REACTIONS & BALANCING

• Oxidation: Loss of electrons; increase in oxidation state.
• Reduction: Gain of electrons; decrease in oxidation state.
• Oxidizing Agent: The substance that gets reduced (causes oxidation of another).
• Reducing Agent: The substance that gets oxidized (causes reduction of another).

• Balancing by Half-Reaction (Ion-Electron) Method:
  Step 1: Divide overall reaction into oxidation and reduction half-reactions.
  Step 2: Balance elements other than O and H.
  Step 3: Balance O atoms by adding H₂O.
  Step 4: Balance H atoms by adding H⁺ (for acidic medium).
  Step 5: Balance net electrical charge by adding electrons (e⁻).
  Step 6: Multiply half-reactions by minimum integers to equalize electrons.
  Step 7: Add half-reactions, cancel electrons and common species.
  Step 8 (For Basic Medium): Add equal OH⁻ to both sides to neutralize H⁺ into H₂O.

============================================================

2. ELECTRICAL CONDUCTION & ELECTROLYSIS

• Metallic vs Electrolytic Conduction:
  - Metallic Conduction: Flow of free electrons; no chemical change; no transfer of matter; conductivity decreases with increasing temperature.
  - Electrolytic Conduction: Migration of mobile cations and anions; accompanied by chemical decomposition; actual transfer of matter; conductivity increases with increasing temperature.

• Preferential Discharge Rules:
  - At Cathode (Reduction): Cations with higher reduction potentials discharge first (Au³⁺ > Ag⁺ > Cu²⁺ > H⁺ > Pb²⁺ > Fe²⁺ > Zn²⁺ > Al³⁺ > Mg²⁺ > Na⁺ > K⁺).
  - At Anode (Oxidation): Anions with higher oxidation potentials discharge first (S²⁻ > I⁻ > Br⁻ > Cl⁻ > OH⁻ > NO₃⁻ > SO₄²⁻ > F⁻).
  - Concentration Effect: High halide concentration in concentrated NaCl (brine) causes Cl⁻ to discharge as Cl₂(g) rather than OH⁻ as O₂(g).
  - Active Electrodes: In electrolysis of CuSO₄ with copper electrodes, the Cu anode dissolves (Cu → Cu²⁺ + 2e⁻) and pure Cu plates onto the cathode.

============================================================

3. QUANTITATIVE LAWS OF ELECTROLYSIS (FARADAY'S LAWS)

• Faraday's First Law:
  The mass (m) of a substance deposited or liberated at an electrode is directly proportional to the quantity of electricity (Q = I · t) passed.
  m = z · Q = (M · I · t) / (n · F)
  where:
  - M = molar mass (g/mol)
  - I = current in Amperes (A)
  - t = time in seconds (s)
  - n = number of electrons transferred (valence)
  - F = Faraday constant = 96,500 Coulombs/mol e⁻

• Faraday's Second Law:
  When the same quantity of electricity is passed through several electrolytes in series, the masses deposited are directly proportional to their chemical equivalent masses (E = M/n).
  m₁ / E₁ = m₂ / E₂ = m₃ / E₃

============================================================

4. GALVANIC (VOLTAIC) CELLS & CELL THERMODYNAMICS

• Galvanic vs Electrolytic Cells:
  - Galvanic Cell: Converts spontaneous chemical energy into electrical energy (ΔG < 0, E°cell > 0). Anode is negative (-), Cathode is positive (+).
  - Electrolytic Cell: Uses electrical energy to drive non-spontaneous redox reactions (ΔG > 0, E°cell < 0). Anode is positive (+), Cathode is negative (-).
  - In ALL cells: Oxidation occurs at the Anode; Reduction occurs at the Cathode.

• Daniell Cell (Zn-Cu Cell):
  - Anode (Oxidation): Zn(s) → Zn²⁺(aq) + 2e⁻
  - Cathode (Reduction): Cu²⁺(aq) + 2e⁻ → Cu(s)
  - Overall: Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)
  - Cell Notation: Zn(s) | Zn²⁺(1 M) || Cu²⁺(1 M) | Cu(s)
  - Salt Bridge: Inverted U-tube with inert electrolyte (KCl, KNO₃) maintaining charge neutrality.

• Standard Hydrogen Electrode (SHE):
  Reference electrode defined with E° = 0.00 V (2H⁺(1 M) + 2e⁻ ⇌ H₂(1 atm) over Pt).

• Standard Cell Potential & Spontaneity:
  E°cell = E°cathode - E°anode
  ΔG° = -n · F · E°cell
  ln K = (n · E°cell) / 0.0257 V (at 25°C)

• Nernst Equation (Effect of Concentration on EMF at 25°C):
  Ecell = E°cell - (0.0592 / n) · log(Q)
  At equilibrium, Ecell = 0 and Q = K.

• Concentration Cells:
  Two identical half-cells differing only in ion concentrations. E°cell = 0, but Ecell > 0 as electrons flow from dilute compartment to concentrated compartment until concentrations equalize.

============================================================

5. BATTERIES, FUEL CELLS & CORROSION

• Primary Batteries: Non-rechargeable (e.g., Zinc-carbon dry cell, Alkaline cell).
• Secondary Batteries: Rechargeable (e.g., Lead-acid storage battery: Pb anode, PbO₂ cathode, 33.5% H₂SO₄ electrolyte; Lithium-ion battery).
• Fuel Cells: Continuous supply of fuel (e.g., H₂-O₂ fuel cell: 2H₂ + O₂ → 2H₂O, 40-60% efficiency, clean water by-product).

• Metallic Corrosion of Iron (Rusting):
  - Anodic Region (Pit): Fe(s) → Fe²⁺(aq) + 2e⁻
  - Cathodic Region: O₂(g) + 4H⁺(aq) + 4e⁻ → 2H₂O(l)
  - Rust Formation: 2Fe²⁺ + (1/2)O₂ + (2+n)H₂O → Fe₂O₃·nH₂O(s) + 4H⁺
  - Catalyzed by moisture, oxygen, acidic pH (high H⁺), and electrolytes.

• Corrosion Prevention Methods:
  1. Painting and barrier coatings (grease, plastic).
  2. Galvanizing (coating iron with a sacrificial layer of zinc).
  3. Cathodic Protection (attaching sacrificial anodes of Mg, Zn, or Al to underground pipes/tanks).
  4. Alloying (e.g., Stainless Steel containing Fe + Cr + Ni).
`,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-g12-u3-note',
    title: 'Unit 3: Industrial Chemistry in Ethiopia (Complete Revision Summary)',
    subject: 'Chemistry',
    topic: 'Industrial Chemistry',
    summary: 'Comprehensive short notes for Grade 12 Chemistry Unit 3: Renewable/non-renewable resources, industrial synthesis of Ammonia (Haber), Nitric Acid (Ostwald), Fertilizers (Urea, DAP), Sulphuric Acid (Contact process), Solvay process for Na2CO3, NaOH production, pesticides, and Ethiopian manufacturing (glass, ceramics, cement, sugar, paper, tannery, ethanol, soap & detergents).',
    readTimeMinutes: 14,
    isFreePreview: false,
    tags: ['Chemistry', 'Grade 12', 'Industrial Chemistry', 'Haber Process', 'Contact Process', 'Solvay Process', 'Fertilizers', 'Ethiopian Industry'],
    keyTakeaways: [
      'Industrial Chemistry: Applies chemical and physical transformations to convert raw materials into beneficial commercial products.',
      'Ammonia (Haber-Bosch): N₂ + 3H₂ ⇌ 2NH₃ (Fe catalyst, 15-25 MPa, 300-500°C, 97% recycling yield).',
      'Nitric Acid (Ostwald 3-step): NH₃ + O₂ → NO → NO₂ + H₂O → HNO₃ (Pt/Rh catalyst at 850°C).',
      'Sulfuric Acid (Contact Process): S → SO₂ → SO₃ (over V₂O₅ at 400-500°C) → Oleum H₂S₂O₇ → H₂SO₄ (National economic barometer).',
      'Fertilizers: Urea (46% N, highest nitrogen content), DAP ((NH₄)₂HPO₄ providing both N and P).',
      'Sodium Salts: Na₂CO₃ (Solvay process using brine, limestone, NH₃); NaOH (Castner-Kellner mercury cell / chlor-alkali electrolysis).',
      'Ethiopian Manufacturing: Glass (SiO₂ + Na₂CO₃ + CaCO₃), Cement (calcining limestone & clay to clinker + 2-3% gypsum), Sugar (8-step cane refining), Tanning (vegetable & chrome mineral tanning), Ethanol (fermentation of molasses/malt, local Araki distillation), Soaps (saponification of triglycerides with NaOH/KOH).'
    ],
    contentMarkdown: `GRADE 12 CHEMISTRY — UNIT 3: INDUSTRIAL CHEMISTRY

1. NATURAL RESOURCES & CLASSIFICATION OF CHEMICAL INDUSTRIES

• Natural Resource Spheres:
  - Atmosphere: N₂, O₂, CO₂, Ar, Ne, Kr, Xe (extracted via liquefaction and fractional distillation).
  - Hydrosphere: Oceans and lakes containing NaCl, Mg, Br₂.
  - Lithosphere: Crust minerals, ores, coal, petroleum, and natural gas.
  - Biosphere: Plants and animals providing agro-based raw materials (fats, oils, sugar, timber, leather).

• Resource Types:
  - Renewable: Replenished rapidly by natural cycles (plants, animals, water, soil, solar energy).
  - Non-Renewable: Fixed finite reserves that deplete with consumption (petroleum, coal, metallic ores, rock minerals).

• Characteristics of Chemical Industries:
  - Convert raw materials into finished/semi-finished goods via chemical reactions.
  - Consume substantial energy.
  - Employ strict quality control testing and safety standards.

============================================================

2. INDUSTRIAL MANUFACTURING OF VALUABLE CHEMICALS

A. Ammonia (NH₃) — Haber-Bosch Process:
• Raw Materials: N₂ (from fractional distillation of air) + H₂ (from natural gas methane steam reforming or water electrolysis).
• Reaction:
  N₂(g) + 3H₂(g) ⇌ 2NH₃(g) + Heat (ΔH = -92.4 kJ/mol)
• Operating Conditions: Finely divided Iron (Fe) catalyst, 15 - 25 MPa (150 - 250 atm) pressure, 300 - 500°C temperature. Unreacted gases are chilled, condensed to liquid NH₃, and recycled for a 97% overall conversion yield.
• Uses: Nitrogen fertilizers, explosives (TNT, nitrocellulose), nitric acid, cleaning agents.

B. Nitric Acid (HNO₃) — Ostwald Process:
• 3-Step Production:
  Step 1 (Catalytic Oxidation): 4NH₃(g) + 5O₂(g) → 4NO(g) + 6H₂O(g) [over Pt/Rh catalyst at 850°C, 5 atm].
  Step 2 (Oxidation): 2NO(g) + O₂(g) → 2NO₂(g).
  Step 3 (Water Absorption): 3NO₂(g) + H₂O(l) → 2HNO₃(aq) + NO(g) [NO is recycled].
• Laboratory Preparation: Heating KNO₃ with concentrated H₂SO₄ below 200°C:
  2KNO₃ + H₂SO₄ → K₂SO₄ + 2HNO₃
• Uses: Ammonium nitrate fertilizer, explosives (nitroglycerine, TNT), rocket fuel (red fuming nitric acid).

C. Nitrogen-Based Fertilizers:
• Anhydrous Ammonia (NH₃): 82% N; injected into soil.
• Urea ((NH₂)₂CO): 46% N (highest solid N content); produced from:
  2NH₃ + CO₂ → NH₂COONH₄ (ammonium carbamate) → (NH₂)₂CO + H₂O
• Diammonium Phosphate (DAP, (NH₄)₂HPO₄): Dual nutrient fertilizer ($N + P$); produced in 2 steps from NH₃ and H₃PO₄.

D. Sulfuric Acid (H₂SO₄) — Contact Process:
• National Barometer: World\'s largest volume chemical; consumption indicates national industrial growth.
• 4 Major Steps:
  Step 1 (Combustion): S(s) + O₂(g) → SO₂(g)
  Step 2 (Catalytic Oxidation): 2SO₂(g) + O₂(g) ⇌ 2SO₃(g) [over V₂O₅ catalyst at 400 - 500°C].
  Step 3 (Oleum Formation): SO₃(g) + H₂SO₄(l) → H₂S₂O₇(l) [Oleum / fuming sulfuric acid].
  Step 4 (Dilution): H₂S₂O₇(l) + H₂O(l) → 2H₂SO₄(l) [98% pure acid].
• Note: Never add water directly to concentrated sulfuric acid due to extreme exothermic heat release. Always add acid slowly to water!

E. Sodium Carbonate (Na₂CO₃, Washing Soda) — Solvay Process:
• Raw Materials: Brine (NaCl), Limestone (CaCO₃), Ammonia (NH₃), Coke.
• Key Reactions:
  CaCO₃ → CaO + CO₂
  NaCl + CO₂ + NH₃ + H₂O → NaHCO₃(s)↓ + NH₄Cl(aq)
  2NaHCO₃(s) → Na₂CO₃(s) + H₂O(g) + CO₂(g) [heated in calciner]
• By-product: Calcium chloride (CaCl₂); Ammonia is regenerated and recycled using Ca(OH)₂.
• Uses: Glass manufacturing (50% of global production as flux), soaps/detergents, water softening.

F. Sodium Hydroxide (NaOH, Caustic Soda):
• Manufactured via electrolysis of brine in Castner-Kellner mercury cell, Nelson diaphragm cell, or membrane cell:
  2NaCl(aq) + 2H₂O(l) → 2NaOH(aq) + Cl₂(g) + H₂(g)
• Uses: Pulp and paper, alumina extraction from bauxite, soap making, textiles.

============================================================

3. PESTICIDES & HERBICIDES

• Pesticide Classes:
  - Organochlorines (e.g., DDT, Endosulfan): Lipophilic, accumulate in animal fatty tissues, high persistence.
  - Organophosphates (e.g., Malathion): Central phosphorus atom; less persistent, neurotoxic to insects.
  - Carbamates (e.g., Carbofuran): Carbamate acid derivatives; low environmental persistence.
  - Pyrethroids (e.g., Permethrin): Derived from Chrysanthemum flowers; low mammalian toxicity, household insecticides.
  - Botanical Pesticides (Traditional Ethiopian): Neem leaf (Azadirachta indica), garlic and salt spray.
• Herbicides (Weed Killers):
  - Chlorophenoxy acids (2,4-D; 2,4,5-T), Triazines (Atrazine), Organic phosphorus (Glyphosate).

============================================================

4. MANUFACTURING INDUSTRIES IN ETHIOPIA

• Glass:
  - Soda-Lime Glass (90%): 60% SiO₂ sand + 21% Na₂CO₃ + 19% CaCO₃ melted at 1600°C.
  - Borosilicate (Pyrex): Contains B₂O₃ for thermal resistance (lab glassware, ovenware).
  - Annealing: Controlled reheating and slow cooling to relieve internal mechanical stresses.

• Ceramics:
  - Formed from clay, talc, and feldspar.
  - Steps: Powder purification → Moulding (with wax/plastic binders) → Densification/Sintering at 1000 - 1700°C (shrinks by 20% to maximize density and strength).

• Cement:
  - Raw Materials: Limestone (CaO), Clay (SiO₂, Al₂O₃, Fe₂O₃), Gypsum.
  - Rotary Kiln (1450 - 1600°C): Calcination produces hard nodules called Cement Clinker.
  - Setting Control: Ground with 2–3% Gypsum (CaSO₄·2H₂O) to retard initial flash setting.

• Sugar Manufacturing:
  - Sugarcane harvesting → Cleansing & shredding → Juicing (rollers yield bagasse fuel) → Clarifying (with milk of lime Ca(OH)₂ and CO₂) → Vacuum evaporation → Crystallization → Centrifugal separation → SO₂ bleaching.

• Paper & Pulp:
  - Mechanical Pulping: High temperature steam (contains lignin, weaker paper for newsprint).
  - Chemical Pulping: Kraft Process (NaOH + Na₂S basic digestion at 170°C) or Sulphite Process (bisulphite at pH 3).

• Leather Tanning:
  - Preparatory: Curing (brine salting) → Soaking → Liming (hair removal) → Scudding → Deliming.
  - Tanning: Vegetable tanning (plant tannins from acacia/wattle, oak for firm shoe soles) vs Mineral tanning (chromium sulfate for flexible blue leather in 24 hours).
  - Crusting: Dyeing, oiling, and finishing.

• Ethanol & Local Beverages:
  - Fermentation: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ (via yeast zymase enzyme up to 12-15% ABV).
  - Distillation: Concentrates spirits to 30-45% ABV.
  - Ethiopian Araki: Prepared from barley malt (Bikel) + Gesho powder + cereal bread starter (Tinses) followed by traditional pot distillation. Residue is Atela (cattle feed).

• Soap & Detergents:
  - Soap: Saponification of fats/triglycerides with NaOH (hard soap) or KOH (soft soap). Salted out with saturated NaCl.
  - Synthetic Detergents: Sodium alkylbenzene sulfonates (R-C₆H₄-SO₃Na). Highly soluble, lather in hard water without forming insoluble scum (curd).
`,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-g12-u4-note',
    title: 'Unit 4: Polymers (Complete Revision Summary)',
    subject: 'Chemistry',
    topic: 'Polymers & Macromolecules',
    summary: 'Comprehensive short notes for Grade 12 Chemistry Unit 4: Monomers & polymers, degree of polymerization, addition (chain-growth) vs condensation (step-growth) polymerization, homopolymers vs copolymers, natural macromolecules (starch, cellulose, proteins, nucleic acids, natural rubber), and thermoplastics vs thermosetting plastics.',
    readTimeMinutes: 10,
    isFreePreview: false,
    tags: ['Chemistry', 'Grade 12', 'Polymers', 'Polymerization', 'Thermoplastics', 'Thermosets', 'Nylon', 'Dacron'],
    keyTakeaways: [
      'Polymer Concepts: Macromolecules made of repeating monomer units; Degree of Polymerization (DP) = M_polymer / M_monomer.',
      'Addition Polymerization (Chain-Growth): Monomers with C=C double bonds add without by-products in 3 steps: Initiation (free radical/ionic), Propagation, Termination.',
      'Key Addition Polymers: Polyethylene (bottles/films), Polypropylene (ropes/containers), PVC (pipes/tiles), Polystyrene, PMMA/Plexiglass (airplane windows), PTFE/Teflon (non-stick pans).',
      'Condensation Polymerization (Step-Growth): Polyfunctional monomers combine with elimination of small molecules (H₂O, HCl).',
      'Key Condensation Polymers: Polyamides (Nylon 66 from adipic acid + hexamethylenediamine), Polyesters (Dacron/PET from terephthalic acid + ethylene glycol), Bakelite (phenol-formaldehyde).',
      'Thermal Response: Thermoplastics (linear/branched, melt and reshape, recyclable); Thermosets (extensive 3D covalent cross-links, decompose on heating, non-recyclable).'
    ],
    contentMarkdown: `GRADE 12 CHEMISTRY — UNIT 4: POLYMERS

1. INTRODUCTION TO POLYMERS & MONOMERS

• Polymer: Giant macromolecule composed of large numbers of repeating structural units bonded covalently.
• Monomer: Small reactive building block molecule (must be polyfunctional, having two or more reactive sites or double/triple bonds).
• Oligomer: Low molecular weight polymer comprising fewer than 100 monomer units.
• Degree of Polymerization (DP):
  DP = n = (Molar Mass of Polymer) / (Molar Mass of Repeating Monomer Unit)

============================================================

2. POLYMERIZATION REACTIONS

A. Addition Polymerization (Chain-Growth):
• Occurs with unsaturated monomers containing C=C double bonds; double bonds convert to single bonds with no loss of atoms (100% atom economy).
• Three Sequential Steps:
  1. Chain Initiation: An initiator (free radical, cation, or anion) attacks the pi-bond of a monomer, generating an active reactive center.
  2. Chain Propagation: Monomers add rapidly in succession to the active chain end, extending the chain length.
  3. Chain Termination: The active center is neutralized (by combination of two radical chains or chain transfer), stopping growth.

• Common Addition Polymers:
  - Polyethylene (PE): Ethene (CH₂=CH₂) → [-CH₂-CH₂-]n. Squeeze bottles, plastic wraps, trash bags, wire insulation.
  - Polypropylene (PP): Propene (CH₂=CH-CH₃) → [-CH₂-CH(CH₃)-]n. Stronger than PE, dishwasher safe; food containers, ropes, carpets.
  - Polyvinyl Chloride (PVC): Vinyl chloride (CH₂=CHCl) → [-CH₂-CH(Cl)-]n. Water pipes, raincoats, floor tiles, phonograph records.
  - Polystyrene (PS): Styrene (CH₂=CH-C₆H₅) → [-CH₂-CH(C₆H₅)-]n. Disposable cups, packaging materials, thermal insulation.
  - Polymethyl Methacrylate (PMMA / Plexiglass / Lucite): Methyl methacrylate (CH₂=C(CH₃)COOCH₃). Transparent glass substitute for airplane windows and streetlights.
  - Polytetrafluoroethylene (PTFE / Teflon): Tetrafluoroethylene (CF₂=CF₂) → [-CF₂-CF₂-]n. Low friction coefficient, chemically inert, heat resistant (-73°C to 260°C); non-stick cookware coatings.

B. Condensation Polymerization (Step-Growth):
• Combination of monomers containing two or more functional groups with the elimination of small by-product molecules (such as H₂O, HCl, or CH₃OH).

• Key Synthetic Condensation Polymers:
  - Nylon 66 (Polyamide): Formed from 1,6-hexanedioic acid (Adipic acid) and 1,6-diaminohexane (Hexamethylenediamine) with elimination of (2n-1) H₂O. Linked by Amide Bonds (-CO-NH-). Used for ropes, parachutes, carpets, stockings, tire cords.
  - Dacron / Terylene / PET (Polyester): Formed from 1,4-benzenedicarboxylic acid (Terephthalic acid) and 1,2-ethanediol (Ethylene glycol). Linked by Ester Bonds (-COO-). Used for crease-resistant fabrics, beverage bottles.
  - Bakelite (Phenol-Formaldehyde): Dense crosslinked network polymer used for electrical switches and cookware handles.

============================================================

3. CLASSIFICATION OF POLYMERS

A. By Monomer Diversity:
• Homopolymers: Made from a single type of monomer (e.g., Polyethylene, PVC, Teflon).
• Copolymers: Made from two or more different monomer units (e.g., Nylon 66, Dacron, SBR rubber).
  - Random Copolymer: -A-B-B-A-A-A-B-A-
  - Regular / Alternating Copolymer: -A-B-A-B-A-B-

B. By Origin:
• Natural Polymers (Biopolymers):
  - Carbohydrates: Starch and Cellulose (glucose monomers linked by glycosidic bonds).
  - Proteins: Polypeptides of amino acids linked by peptide/amide bonds.
  - Nucleic Acids: DNA and RNA (nucleotide chains).
  - Natural Rubber: cis-1,4-polyisoprene from isoprene monomers (CH₂=C(CH₃)-CH=CH₂).
• Synthetic Polymers: Man-made industrial plastics, synthetic fibers, and synthetic elastomers.

C. By Thermal Treatment Response:
• Thermoplastics:
  - Linear or lightly branched chains with weak intermolecular forces.
  - Soften and melt when heated, resolidify when cooled.
  - Can be remelted, reshaped, and recycled repeatedly.
  - Examples: Polyethylene, Polypropylene, PVC, Polystyrene, Teflon, Nylon, PMMA.
• Thermosets (Thermosetting Plastics):
  - Extensive 3D network of permanent covalent cross-links.
  - Do not melt upon heating; decompose/char irreversibly at high temperatures.
  - Non-recyclable, rigid, and heat/corrosion resistant.
  - Examples: Bakelite, Epoxy resins, Vulcanized rubber, Polyurethane, Melamine.
`,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-g12-u5-note',
    title: 'Unit 5: Environmental Chemistry & Green Chemistry (Complete Revision Summary)',
    subject: 'Chemistry',
    topic: 'Environmental Chemistry',
    summary: 'Comprehensive short notes for Grade 12 Chemistry Unit 5: Environmental spheres & biogeochemical cycles, air/water/soil pollution, acid rain, ozone depletion mechanisms, greenhouse effect & global warming, and the 12 Principles of Green Chemistry & Atom Economy calculations.',
    readTimeMinutes: 11,
    isFreePreview: false,
    tags: ['Chemistry', 'Grade 12', 'Environmental Chemistry', 'Green Chemistry', 'Atom Economy', 'Pollution', 'Global Warming'],
    keyTakeaways: [
      'Environmental Spheres: Atmosphere (gaseous envelope: 78% N₂, 21% O₂), Hydrosphere (all water, 1% freshwater), Lithosphere (crust & soil), Biosphere (realm of living organisms).',
      'Biogeochemical Cycles: Hydrologic, Carbon (photosynthesis vs respiration), Nitrogen (fixation → nitrification → denitrification), Oxygen, Phosphorus, Sulfur.',
      'Key Environmental Indicators: Dissolved Oxygen (DO optimal: 4-8 mg/L), Biological Oxygen Demand (BOD), Threshold Limit Value (TLV).',
      'Air Pollution & Atmospheric Reactions: Acid rain (SO₂, NO₂ + H₂O), Photochemical smog (NO₂ + hydrocarbons + UV), Ozone depletion by CFCs (Cl• + O₃ → ClO• + O₂).',
      'Water Pollution: Eutrophication caused by excess nitrate/phosphate runoff creating algal blooms and oxygen depletion.',
      'Global Warming: Greenhouse gases (CO₂ 52.9%, CH₄ 14.9%, CFCs 10.8%, O₃, N₂O) absorb outgoing terrestrial IR radiation, elevating Earth\'s temperature by 33 K.',
      'Green Chemistry: Benign by design; 12 principles prioritizing Waste Prevention and Atom Economy (% Atom Economy = [Mass of Desired Product / Total Mass of Reactants] × 100%).'
    ],
    contentMarkdown: `GRADE 12 CHEMISTRY — UNIT 5: ENVIRONMENTAL CHEMISTRY

1. ENVIRONMENTAL SPHERES & BIOGEOCHEMICAL CYCLES

• The Four Environmental Spheres:
  1. Atmosphere: Gaseous blanket surrounding Earth (78% N₂, 20.95% O₂, 0.93% Ar, 0.04% CO₂).
  2. Hydrosphere: All water bodies on, under, and above Earth (97% ocean saltwater, ~1% accessible fresh water).
  3. Lithosphere: Earth's crust and soil minerals.
  4. Biosphere: Realm of living organisms interacting in ecosystems.

• Biogeochemical Natural Cycles:
  - Hydrologic Cycle: Continuous circulation of water via evaporation, transpiration, condensation, precipitation, and percolation.
  - Carbon Cycle: Photosynthesis (6CO₂ + 6H₂O + sunlight → C₆H₁₂O₆ + 6O₂, ΔH = +2803 kJ/mol) balances Respiration and fossil fuel combustion (C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + Energy, ΔH = -2803 kJ/mol).
  - Nitrogen Cycle: Biological fixation (Rhizobium) → Nitrification (NH₄⁺ → NO₂⁻ by Nitrosomonas, NO₂⁻ → NO₃⁻ by Nitrobacter) → Plant assimilation → Denitrification (NO₃⁻ → N₂ gas).
  - Phosphorus Cycle: Mineral rock weathering releases orthophosphates (H₂PO₄⁻, HPO₄²⁻); no significant atmospheric gas phase.
  - Sulfur Cycle: Oxidation of sulfides to plant-usable sulfates (SO₄²⁻).

• Key Environmental Parameters:
  - Pollutant: Substance whose concentration increases due to human activity, causing detrimental effects.
  - Contaminant: Non-naturally occurring substance introduced by human activity.
  - Sink: Medium that interacts with and retains pollutants (e.g., oceans/soils as CO₂ sink).
  - Dissolved Oxygen (DO): Oxygen dissolved in water vital for aquatic life (optimum: 4 - 8 mg/L; <4 mg/L indicates heavy pollution).
  - Biological Oxygen Demand (BOD): Milligrams of oxygen consumed by microorganisms to decompose organic matter in 1 liter of water over 5 days.
  - Threshold Limit Value (TLV): Permissible atmospheric concentration of a toxic pollutant to which workers can be exposed for an 8-hour workday without adverse effects.

============================================================

2. ENVIRONMENTAL POLLUTION

A. Air Pollution:
• Acid Rain: SO₂ and NO₂ gases react with atmospheric moisture:
  SO₂ + (1/2)O₂ + H₂O → H₂SO₄
  2NO₂ + H₂O → HNO₃ + HNO₂
  Causes soil acidification, forest defoliation, aquatic toxicity, and limestone building corrosion.
• Stratospheric Ozone Layer Depletion:
  CFCs (e.g., CF₂Cl₂) photodissociate under UV radiation to release free chlorine radicals:
  CF₂Cl₂ + UV → CF₂Cl• + Cl•
  Cl• + O₃ → ClO• + O₂
  ClO• + O → Cl• + O₂
  Allows harmful UV-B radiation to reach Earth's surface, causing skin cancer and cataract risks.
• Photochemical Smog: Brownish haze formed by reaction of vehicle exhaust (NO₂, volatile hydrocarbons) under sunlight, producing ozone (O₃) and eye/lung irritants.
• Carbon Monoxide (CO): Toxic gas from incomplete combustion; binds irreversibly to blood hemoglobin, reducing oxygen transport.

B. Water Pollution:
• Eutrophication: Excess nitrate and phosphate fertilizers wash into water bodies, causing rapid algal blooms. Dead algae decompose via aerobic bacteria, completely depleting dissolved oxygen (DO) and killing fish.
• Heavy Metals: Lead (Pb), Mercury (Hg), Cadmium (Cd) accumulate in food chains, causing neurological and organ damage.

C. Land Pollution:
• Dumping of non-biodegradable synthetic wastes (plastics, electronics, glass) that remain in landfills for hundreds of years.

============================================================

3. GLOBAL WARMING & CLIMATE CHANGE

• Greenhouse Effect Mechanism:
  Greenhouse gases absorb and re-radiate infrared (IR) thermal radiation emitted by Earth. Natural greenhouse warming keeps Earth 33 K warmer (at +15°C instead of -18°C).

• Human-Origin Greenhouse Gas Contributions:
  1. Carbon Dioxide (CO₂): 52.92% (combustion of fossil fuels, cement manufacturing, deforestation).
  2. Methane (CH₄): 14.88% (livestock, rice cultivation, decomposing landfill waste; 25× more potent than CO₂).
  3. Halogenated Compounds (CFCs & HCFCs): 10.78%.
  4. Tropospheric Ozone (O₃): 10.72%.
  5. Nitrous Oxide (N₂O): 10.70% (fertilizer application, biomass burning).

============================================================

4. GREEN CHEMISTRY & CLEANER PRODUCTION

• Definition: The design of chemical products and processes that reduce or eliminate the use and generation of hazardous substances ("Benign by Design").

• Atom Economy Formula:
  % Atom Economy = (Formula Weight of Desired Product / Sum of Formula Weights of All Reactants) × 100%
  - Higher atom economy means less raw material waste.
  - Direct addition reactions have 100% atom economy (e.g., Ethene + H₂O → Ethanol).
  - Fermentation (C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂) has only ~51.1% atom economy because CO₂ is lost as waste.

• The 12 Principles of Green Chemistry:
  1. Waste Prevention: Better to prevent waste than to treat it after generation.
  2. Atom Economy: Maximize incorporation of starting atoms into the final desired product.
  3. Less Hazardous Synthesis: Design reactions using and producing non-toxic chemicals.
  4. Design Safer Chemicals: Retain product efficacy while minimizing toxicity.
  5. Safer Solvents: Eliminate toxic organic solvents; use water or liquid/supercritical CO₂.
  6. Energy Efficiency: Conduct reactions at ambient temperature and pressure.
  7. Renewable Feedstocks: Use biomass and agricultural raw materials instead of depletable petroleum.
  8. Reduce Derivatives: Minimize temporary modification steps and blocking groups.
  9. Catalysis: Use selective reusable catalysts and biodegradable enzymes instead of stoichiometric reagents.
  10. Design for Degradation: Products should degrade into harmless, non-persistent substances after use.
  11. Real-Time Analysis: Continuous in-process monitoring to prevent hazardous emissions.
  12. Accident Prevention: Choose chemical forms that minimize fire, explosion, and toxic release risks.
`,
    createdAt: '2026-08-19'
  }
];
