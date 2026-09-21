import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const CHEMISTRY_2014_EC_PART2: Question[] = [
  {
    id: 'chem-2014-q21',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Acids and Bases: Polyprotic Acids',
    questionText: '21. Which of the following is a polyprotic acid?',
    options: [
      'HNO₃',
      'HF',
      'H₃PO₄',
      'HCl'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
A polyprotic acid contains more than one ionizable hydrogen atom (proton) per molecule. H₃PO₄ (phosphoric acid) has 3 ionizable protons (triprotic), releasing protons in three successive stages:
1. H₃PO₄ ⇌ H⁺ + H₂PO₄⁻
2. H₂PO₄⁻ ⇌ H⁺ + HPO₄²⁻
3. HPO₄²⁻ ⇌ H⁺ + PO₄³⁻
In contrast, HNO₃, HF, and HCl are all monoprotic acids.

🇪🇹 አማርኛ (Amharic):
ፖሊፕሮቲክ አሲድ (Polyprotic acid) ከአንድ በላይ አዮናይዝ የሚሆኑ ሃይድሮጅን ፕሮቶኖች ያሉት አሲድ ነው። H₃PO₄ (ፎስፈሪክ አሲድ) 3 አሲዳዊ ሃይድሮጅኖች ያሉት ትራይፕሮቲክ አሲድ ነው።

🌳 Afaan Oromoo:
Asidiin poolii-pirootikii pirootoonii tokkoo ol kan gadhisuudha. H₃PO₄ pirootoonota sadii qabaachuun asidii ta'a.`,
    hint: 'Count the ionizable hydrogens: H₃PO₄ can donate 3 protons, making it polyprotic.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q22',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Acids and Bases: General Properties of Bases',
    questionText: '22. Which of the following does represent a general property of a base?',
    options: [
      'Aqueous solution of bases turns methyl orange into red.',
      'Soluble bases release hydronium ion in aqueous solution.',
      'Aqueous solution of bases turns blue litmus paper to red.',
      'Solutions of strong bases are good conductors of electricity.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Strong bases (e.g., NaOH, KOH, Ba(OH)₂) dissociate completely into mobile cations and hydroxide ions (OH⁻) in water, making their aqueous solutions strong electrolytes that conduct electricity very well. Note: Bases turn methyl orange yellow, turn red litmus paper blue, and release OH⁻ ions.

🇪🇹 አማርኛ (Amharic):
የጠንካራ ቤዞች የውሃ መፍትሄ ሙሉ በሙሉ ወደ አዮኖች (OH⁻ እና ካታዮኖች) ስለሚከፋፈል ኤሌክትሪክን በከፍተኛ ሁኔታ ያስተላልፋል (good conductors of electricity)።

🌳 Afaan Oromoo:
Furmaatni beezii jabaa ayoonota hedduu waan qabuuf elektirikii akka gaariitti dabarsa.`,
    hint: 'Dissociated ions in base solutions carry electric current freely.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q23',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Salts: Chemical Composition & Nature of Salts',
    questionText: '23. What are salts? Salts are',
    options: [
      'ionic compounds formed by partial replacement of ionizable hydroxide by metal cations.',
      'ionic compounds that derive their cations from a base and their anions from an acid.',
      'ionic compounds that result from the reaction between metal hydroxide and water.',
      'ionic compounds formed by complete replacement of ionizable hydrogen by anions of the acid.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
A salt is an ionic compound composed of positively charged cations (derived from a base or metal) and negatively charged anions (derived from an acid) formed during neutralization or related reactions.

🇪🇹 አማርኛ (Amharic):
ጨዎች (Salts) ማለት ካታዮናቸው ከቤዝ (base) እና አናዮናቸው ከአሲድ (acid) የሚመነጭ አዮኒክ ውህዶች ናቸው።

🌳 Afaan Oromoo:
Soogiddoonni kompaawundoota ayooniikii kaataayoonii beezii irraa fi an-aayoonii asidii irraa argataniidha.`,
    hint: 'Salts are formed when base cations pair with acid anions.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q24',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Electrochemistry: Electrolysis',
    questionText: '24. The process in which a compound absorbs electrical energy and decomposes into its elements is',
    options: [
      'electroplating.',
      'hydrolysis.',
      'solvolysis.',
      'electrolysis.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Electrolysis is a non-spontaneous chemical process where electrical energy is supplied from an external DC power source to drive the decomposition of a molten or aqueous ionic compound into its constituent elements at the electrodes.

🇪🇹 አማርኛ (Amharic):
ኤሌክትሮሊሲስ (Electrolysis) ማለት የኤሌክትሪክ ሃይልን በመጠቀም አንድ ውህድ ተከፋፍሎ ወደ ተሰሪ ንጥረ ነገሮቹ የሚለወጥበት ሂደት ነው።

🌳 Afaan Oromoo:
Elektiroolayisiisii jechuun anniisaa elektirikiitti fayyadamuun kompaawundii gara elementoota isaatti caccabsuudha.`,
    hint: 'Electro = electrical, lysis = decomposition or splitting.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q25',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Batteries: Lead Storage Batteries',
    questionText: '25. Which of the following is true about galvanic cells used in commercial lead storage batteries? In lead storage batteries,',
    options: [
      'the galvanic cells are made up of PbO₂ of anodes.',
      'half of the galvanic cells are connected in series.',
      'galvanic cells are connected in parallel.',
      'galvanic cells are connected in series.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
In a commercial lead storage battery (e.g., 12-volt car battery), six individual 2-volt secondary galvanic cells are connected in series (6 × 2 V = 12 V) to supply the required high electromotive force (EMF). Anode is spongy Pb and cathode is PbO₂.

🇪🇹 አማርኛ (Amharic):
በመኪና ሊድ ባትሪ (Lead storage battery) ውስጥ፣ የሚፈለገውን 12 ቮልት ቮልቴጅ ለማግኘት ስድስት ባለ 2-ቮልት ጋልቫኒክ ሴሎች በተከታታይ (in series) ይያያዛሉ።

🌳 Afaan Oromoo:
Baatrii liidii keessatti seelonni galvaanikii walitti fufiinsaan (in series) walitti qabamu.`,
    hint: 'Individual 2V cells are joined in series to sum their voltages to 12V.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q26',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Stoichiometry: Mole Ratios in Chemical Equations',
    questionText: '26. What is the mole ratio of oxygen gas to carbon dioxide gas in the following reaction?\nC₃H₈(g) + 5O₂(g) → 3CO₂(g) + 4H₂O(l)',
    options: [
      '7 mole oxygen gas to 5 mole carbon dioxide',
      '2 mole oxygen gas to 3 mole carbon dioxide',
      '5 mole oxygen gas to 3 mole carbon dioxide',
      '10 mole oxygen gas to 6 mole carbon dioxide'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
According to the stoichiometric coefficients of the balanced combustion reaction:
1 mol C₃H₈ + 5 mol O₂ → 3 mol CO₂ + 4 mol H₂O.
The mole ratio of O₂ to CO₂ is 5 : 3 (5 moles of oxygen gas to 3 moles of carbon dioxide gas).

🇪🇹 አማርኛ (Amharic):
ከተመጣጠነው የኬሚካል እኩልዮሽ እንደሚታየው፣ 5 ሞል O₂ ከ 3 ሞል CO₂ ጋር ስለሚዛመድ የሞል ሬሾው 5 ሞል O₂ ለ 3 ሞል CO₂ (5 to 3) ነው።

🌳 Afaan Oromoo:
Hima herregaa keemikaalaa madaalame irraa, reeshiyoon O₂ fi CO₂ gidduu jiru 5 : 3 dha.`,
    hint: 'Look at the stoichiometric coefficients before O₂ (5) and CO₂ (3).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q27',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Chemical Kinetics: Relative Rates of Reaction',
    questionText: '27. Consider the following chemical equation for the combustion of ethane (C₂H₆) in the presence of oxygen to produce carbon dioxide and water:\n2C₂H₆(g) + 7O₂(g) → 4CO₂(g) + 6H₂O(l)\nIn this reaction:',
    options: [
      'CO₂ is formed twice as fast as ethane is consumed.',
      'water is formed at a rate equal to 2/3 the rate of formation of CO₂.',
      'the rate of formation of CO₂ equals the rate of formation of water.',
      'the rate of consumption of ethane is 7 times faster than the rate of consumption of oxygen.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
The generalized rate of reaction relates reactant loss and product appearance by their stoichiometric coefficients:
Rate = -(1/2)(Δ[C₂H₆]/Δt) = +(1/4)(Δ[CO₂]/Δt).
Rearranging gives: (Δ[CO₂]/Δt) = (4/2) × -(Δ[C₂H₆]/Δt) = 2 × -(Δ[C₂H₆]/Δt).
Thus, CO₂ is produced twice as fast as ethane is consumed.

🇪🇹 አማርኛ (Amharic):
የግብረ-መልስ ፍጥነት ቀመር፦ (Δ[CO₂]/Δt) = 4/2 × -(Δ[C₂H₆]/Δt) = 2 × Rate(C₂H₆)። ስለዚህ የ CO₂ የመፈጠር ፍጥነት ከኤቴን የመፈጀት ፍጥነት በሁለት እጥፍ ፈጣን ነው (twice as fast)።

🌳 Afaan Oromoo:
Saffisni uumama CO₂ saffisa bifa caccabuu C₂H₆ dachaa lamaan (twice as fast) caala.`,
    hint: 'Compare the coefficients: 4 moles CO₂ formed vs 2 moles C₂H₆ consumed (4/2 = 2 times).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q28',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Chemical Kinetics: Factors Affecting Reaction Rates',
    questionText: '28. Which of the following factors DOES NOT affect the rate of a reaction?',
    options: [
      'Enthalpy (ΔH)',
      'Temperature',
      'Surface area',
      'Concentration'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
The rate of a chemical reaction is governed by kinetic factors: temperature, reactant concentration, physical state/surface area, and catalysts. Enthalpy change (ΔH) is a thermodynamic state function that indicates overall heat of reaction and energy difference between products and reactants, but does not dictate how fast the reaction proceeds.

🇪🇹 አማርኛ (Amharic):
የግብረ-መልስ ፍጥነት በሙቀት፣ በክምችት፣ በገጽታ ስፋት (surface area) እና በካታሊስት ይወሰናል። ኢንታልፒ (Enthalpy) የቴርሞዳይናሚክስ ባህሪ እንጂ የኪነቲክስ ፍጥነትን አይወስንም።

🌳 Afaan Oromoo:
Saffisa re'aakshinii kan hin murteessine Eentaalpii (ΔH) dha.`,
    hint: 'Enthalpy is a thermodynamic property, whereas rate depends on activation energy, temperature, and concentration.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q29',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Catalysis: Mechanism of Catalytic Acceleration',
    questionText: '29. How does a catalyst increase the rate of a reaction?',
    options: [
      'By changing the equilibrium constant',
      'By lowering the activation energy',
      'By increasing the activation energy',
      'By forming an intermediate complex'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
A catalyst increases the reaction rate by providing an alternative reaction pathway/mechanism that possesses a lower activation energy (E_a). Lowering E_a allows a much larger fraction of colliding molecules to have kinetic energy equal to or greater than E_a.

🇪🇹 አማርኛ (Amharic):
ካታሊስት (Catalyst) የአክቲቬሽን ኢነርጂን (Activation Energy, E_a) ዝቅ በማድረግ የኬሚካላዊ ግብረ-መልሱን ፍጥነት ያፋጥነዋል።

🌳 Afaan Oromoo:
Kaataalistii anniisaa kaka\'umsaa (Activation Energy) gadi buusuun saffisa re'aakshinii dabalata.`,
    hint: 'Catalysts lower the energy barrier (activation energy) needed for reactants to reach transition state.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q30',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Gas Laws: Boyle\'s Law',
    questionText: '30. Which of the following statements correctly describes Boyle\'s Law?',
    options: [
      'The volume of a gas at a given temperature is inversely proportional to the square root of the applied pressure.',
      'The volume of a gas at a given temperature is proportional to the square root of the applied pressure.',
      'The volume of a gas at a given temperature is inversely proportional to the applied pressure.',
      'The volume of a gas at a given temperature is directly proportional to the applied pressure.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Boyle's Law states that at constant temperature and for a fixed mass of an ideal gas, the volume (V) of the gas is inversely proportional to the applied pressure (P): V ∝ 1/P or P₁V₁ = P₂V₂.

🇪🇹 አማርኛ (Amharic):
የቦይል ሕግ (Boyle's Law) እንደሚደነግገው ቋሚ በሆነ የሙቀት መጠን፣ የአንድ ጋዝ ይዘት (volume) ከሚደረግበት ጫና/ግፊት (pressure) ጋር የተገላቢጦሽ ተመጣጣኝ (inversely proportional) ነው።

🌳 Afaan Oromoo:
Seerri Booyil: Teempireechara dhaabbataa irratti voliyumiin gaasii dhiibbaa wajjin faallaa wal-madaala (inversely proportional).`,
    hint: 'As pressure increases at constant temperature, gas volume decreases proportionally (V ∝ 1/P).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q31',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Chemical Bonding: Covalent Bonding Mechanism',
    questionText: '31. Which statement describes the formation of a covalent bond? In covalent bond electrons are',
    options: [
      'transferred from non-metallic atoms to metallic atoms.',
      'shared between non-metallic atoms.',
      'transferred from metallic atoms to non-metallic atoms.',
      'shared between metallic atoms.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
A covalent bond is formed when valence electrons are shared between two non-metallic atoms with similar electronegativities to achieve stable valence shell octet configurations.

🇪🇹 አማርኛ (Amharic):
ኮቫለንት ቦንድ የሚፈጠረው ኤሌክትሮኖች በብረት ባልሆኑ (non-metallic) አተሞች መካከል በጋራ ሲጋሩ (shared between non-metallic atoms) ነው።

🌳 Afaan Oromoo:
Boondiin kovaalantii elektiroonota atooma sibiila hin taane gidduutti waloo qoodachuun (sharing) uumama.`,
    hint: 'Covalent = sharing of electrons between non-metals.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q32',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Periodic Table: Group IIA Ion Formation',
    questionText: '32. How do the elements of Group IIA form ions?',
    options: [
      'By gaining 2 electrons',
      'By losing 2 electrons',
      'By losing one electron',
      'By gaining one electron'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Group IIA (alkaline earth metals: Be, Mg, Ca, Sr, Ba) have 2 valence electrons (ns²). They readily lose these two valence electrons to achieve the stable octet configuration of the preceding noble gas, forming divalent cations (M²⁺).

🇪🇹 አማርኛ (Amharic):
የግሩፕ IIA ንጥረ ነገሮች (Alkaline earth metals) በውጫዊ ሼላቸው 2 ቫለንስ ኤሌክትሮኖች ስላሏቸው ሁለቱን ኤሌክትሮኖች በማጣት (by losing 2 electrons) ወደ +2 ካታዮኖች ይቀየራሉ።

🌳 Afaan Oromoo:
Elementoonni Garee IIA elektiroonota vaalansii 2 dhabuun (losing 2 electrons) ayoonii +2 uumu.`,
    hint: 'Metals in Group 2 have 2 valence electrons that they lose to form +2 ions.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q33',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Intermolecular Forces: Hydrogen Bonding',
    questionText: '33. How is hydrogen bonding formed? It is formed when a hydrogen atom is bonded to',
    options: [
      'highly electronegative elements, fluorine, oxygen and nitrogen.',
      'highly electronegative elements, chlorine, oxygen and nitrogen.',
      'highly electronegative elements, fluorine, oxygen and phosphorus.',
      'highly electronegative elements, fluorine, chlorine and oxygen.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
A hydrogen bond is a strong dipole-dipole attraction that occurs when a hydrogen atom is covalently bonded directly to one of the three smallest, most highly electronegative elements: Fluorine (F), Oxygen (O), or Nitrogen (N) (e.g., in HF, H₂O, NH₃).

🇪🇹 አማርኛ (Amharic):
የሃይድሮጅን ቦንድ የሚፈጠረው የሃይድሮጅን አቶም ከፍተኛ ኤሌክትሮኔጋቲቪቲ ካላቸው አነስተኛ አተሞች (ፍሎሪን F፣ ኦክስጅን O እና ናይትሮጅን N) ጋር ሲያያዝ ነው።

🌳 Afaan Oromoo:
Boondiin haayidiroojiinii kan uumamu yeroo haayidiroojiiniin elementoota elektiroonegaatiivii olaanaa qaban (Fulooriinii, Oksijiinii fi Naayitiroojiinii) wajjin wal-qabatudha.`,
    hint: 'Remember FON: Fluorine, Oxygen, and Nitrogen.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q34',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Thermochemistry: Combustion of Carbon',
    questionText: '34. Which one of the following forms of energy change occurs from the combustion of carbon in oxygen?',
    options: [
      'solar energy.',
      'heat energy.',
      'electrical energy.',
      'light energy.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
The combustion of carbon in oxygen (C(s) + O₂(g) → CO₂(g) + heat) is a highly exothermic chemical reaction where chemical potential energy stored in chemical bonds is released primarily as thermal/heat energy.

🇪🇹 አማርኛ (Amharic):
ካርቦን በኦክስጅን ውስጥ ሲቃጠል (Combustion of carbon) በኬሚካል ቦንዶች ውስጥ የነበረው ፖቴንሻል ሃይል ወደ ሙቀት ሃይል (heat energy) ይቀየራል።

🌳 Afaan Oromoo:
Gubachuun kaarboonii oksijiinii keessatti anniisaa ho'aa (heat energy) gadhisa.`,
    hint: 'Combustion reactions primarily release thermal (heat) energy.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q35',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Gas Laws: Molar Volume at STP',
    questionText: '35. What is the molar volume of a gas?',
    options: [
      'The volume of a gas at STP (standard temperature 25°C and pressure 1 kPa), which is equal to 22.4 L/mol.',
      'The volume of a gas at STP (standard temperature 0°C and pressure 1 kPa), which is equal to 22.4 L/mol.',
      'The volume of a gas at STP (standard temperature 25°C and pressure 1 atm), which is equal to 22.4 L/mol.',
      'The volume of a gas at STP (standard temperature 0°C and pressure 1 atm), which is equal to 22.4 L/mol.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Standard Temperature and Pressure (STP) in classical chemistry is defined as 0°C (273.15 K) and 1 atm (101.325 kPa). At STP, one mole of any ideal gas occupies a molar volume of exactly 22.4 Litres (22.4 L/mol).

🇪🇹 አማርኛ (Amharic):
በ STP (ስታንዳርድ የሙቀት መጠን 0°C እና ግፊት 1 atm) ውስጥ፣ የአንድ ሞል ጋዝ ይዘት (Molar volume) 22.4 ሊትር/ሞል (22.4 L/mol) ነው።

🌳 Afaan Oromoo:
Voliyumiin Moolarii gaasii tokkoo STP (0°C fi 1 atm) irratti 22.4 L/mol dha.`,
    hint: 'STP = 0°C (273 K) and 1 atm pressure, where V_m = 22.4 L/mol.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q36',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Chemical Kinetics: First Order Rate Constant Calculation',
    questionText: '36. In the first order decomposition of dinitrogen pentoxide at 335 K:\nN₂O₅(g) → 2NO₂(g) + 1/2 O₂(g)\nA reaction was carried out with 2.50 g of N₂O₅ sample at 335 K and after 109 seconds, 1.50 g of N₂O₅ remained. What is the value of the rate constant?',
    options: [
      '7.63 × 10² s⁻¹',
      '6.25 × 10⁻² s⁻¹',
      '4.69 × 10⁻³ s⁻¹',
      '2.25 × 10⁻⁵ s⁻¹'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
For a first-order integrated rate law:
ln([A]₀ / [A]_t) = k · t
k = (1 / t) · ln([A]₀ / [A]_t)
Given: [A]₀ = 2.50 g, [A]_t = 1.50 g, t = 109 s.
k = (1 / 109 s) · ln(2.50 / 1.50) = (1 / 109) · ln(1.6667)
k = (1 / 109) · 0.5108 = 0.004686 s⁻¹ = 4.69 × 10⁻³ s⁻¹.

🇪🇹 አማርኛ (Amharic):
ለአንደኛ ደረጃ ግብረ-መልስ (First-order rate law)፦
k = (1/t) × ln([A]₀/[A]_t)
k = (1/109) × ln(2.50/1.50) = (1/109) × 0.5108 = 4.69 × 10⁻³ s⁻¹።

🌳 Afaan Oromoo:
k = (1/109) × ln(2.50/1.50) = 4.69 × 10⁻³ s⁻¹ dha.`,
    hint: 'Use the first-order formula k = (1/t) ln([A]₀/[A]_t) = (1/109) * ln(2.5/1.5).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q37',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Chemical Equilibrium: Reversible vs Irreversible Reactions',
    questionText: '37. What is the difference between reversible and irreversible reactions?',
    options: [
      'In irreversible reactions, there is a mixture of products and reactants.',
      'In reversible reactions, the reaction goes to completion.',
      'In irreversible reactions, there is equilibrium between reactants and products.',
      'In reversible reactions, there is equilibrium between reactants and products.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
A reversible reaction can proceed in both forward and reverse directions and establishes a dynamic chemical equilibrium where the rates of forward and reverse reactions are equal and both reactants and products coexist. Irreversible reactions proceed only in one direction until limiting reactants are completely consumed.

🇪🇹 አማርኛ (Amharic):
ተመላላሽ ግብረ-መልሶች (Reversible reactions) ወደፊትም ሆነ ወደ ኋላ ስለሚካሄዱ በተቀባዮችና ውጤቶች መካከል የኬሚካል ሚዛን (equilibrium) ይፈጥራሉ።

🌳 Afaan Oromoo:
Re'aakshinii duubatti deebi'u (reversible) keessatti re'aaktantootaa fi oomishaalee gidduutti madaalliin (equilibrium) ni uumama.`,
    hint: 'Reversible reactions reach a state of dynamic equilibrium between reactants and products.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q38',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Chemical Equilibrium: Relationship between Kp and Kc',
    questionText: '38. Consider the reactions all given below are in gaseous state. For which of the following reactions is K_p less than K_c?',
    options: [
      '2SO₂(g) + O₂(g) ⇌ 2SO₃(g)',
      'N₂O₄(g) ⇌ 2NO₂(g)',
      'N₂(g) + O₂(g) ⇌ 2NO(g)',
      '2HI(g) ⇌ H₂(g) + I₂(g)'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
The relationship between K_p and K_c is given by:
K_p = K_c(RT)^(Δn_g), where Δn_g = (moles of gaseous products) - (moles of gaseous reactants).
For K_p < K_c, we must have Δn_g < 0 (i.e. negative):
• In 2SO₂(g) + O₂(g) ⇌ 2SO₃(g): Δn_g = 2 - (2 + 1) = -1 < 0. Thus K_p = K_c / (RT) < K_c.
• In N₂O₄ ⇌ 2NO₂: Δn_g = +1 (K_p > K_c).
• In N₂ + O₂ ⇌ 2NO and 2HI ⇌ H₂ + I₂: Δn_g = 0 (K_p = K_c).

🇪🇹 አማርኛ (Amharic):
K_p = K_c(RT)^(Δn_g) ቀመር መሠረት፣ K_p ከ K_c እንዲያንስ Δn_g አሉታዊ (negative) መሆን አለበት። በ 2SO₂ + O₂ ⇌ 2SO₃ ውስጥ Δn_g = 2 - 3 = -1 ስለሆነ K_p < K_c ይሆናል።

🌳 Afaan Oromoo:
K_p < K_c ta'uuf Δn_g < 0 ta'uu qaba. Re'aakshinii 2SO₂ + O₂ ⇌ 2SO₃ keessatti Δn_g = -1 waan ta'eef K_p < K_c dha.`,
    hint: 'Calculate Δn_g = n(products) - n(reactants). If Δn_g < 0, then K_p < K_c.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q39',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'States of Matter: Heating Curve Interpretation',
    questionText: '39. The heating curve shows a substance in the solid, liquid and gas phase. Which segment represents only the liquid phase?',
    options: [
      'Segment 5',
      'Segment 3',
      'Segment 2',
      'Segment 1'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
On a standard temperature vs. time heating curve:
• Segment 1: Heating solid (temperature rises)
• Segment 2: Melting (solid-liquid phase change plateau)
• Segment 3: Heating liquid only (temperature rises from melting point to boiling point)
• Segment 4: Boiling (liquid-gas phase change plateau)
• Segment 5: Heating gas only.
Segment 3 represents the pure liquid single-phase region.

🇪🇹 አማርኛ (Amharic):
በማሞቂያ ኩርባ (Heating curve) ላይ፦ ክፍል 1 (ጠጣር ብቻ)፣ ክፍል 2 (የመቅለጥ ሂደት)፣ ክፍል 3 (ፈሳሽ ብቻ - only liquid phase)፣ ክፍል 4 (የመፍላት ሂደት) እና ክፍል 5 (ጋዝ ብቻ) ነው። ስለዚህ ፈሳሹን ብቻ የሚወክለው ክፍል 3 ነው።

🌳 Afaan Oromoo:
Kutaan 3 dhangala'oo qofaa (liquid only) bakka bu'a.`,
    hint: 'Segment 1 = solid, 2 = melting, 3 = liquid only, 4 = boiling, 5 = gas.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q40',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Carboxylic Acids: General Formula',
    questionText: '40. The general formula for saturated monocarboxylic acids is',
    options: [
      'RCOR (Ketones)',
      'RCOOH (Carboxylic acids)',
      'ROR (Ethers)',
      'RCHO (Aldehydes)'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Saturated monocarboxylic acids (alkanoic acids) contain one carboxyl functional group (-COOH) bonded to an alkyl radical R (or hydrogen), represented by the general formula RCOOH (or CₙH₂ₙ₊₁COOH).

🇪🇹 አማርኛ (Amharic):
የካርቦክሲሊክ አሲዶች (Carboxylic acids) አጠቃላይ ኬሚካላዊ ፎርሙላ RCOOH (ወይም CₙH₂ₙ₊₁COOH) ነው።

🌳 Afaan Oromoo:
Foormulaan waliigalaa asidota monookaarbooksiiliikii RCOOH dha.`,
    hint: 'Carboxylic acids contain the -COOH group, represented as RCOOH.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  }
];
