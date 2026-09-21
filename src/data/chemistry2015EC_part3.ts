import { Question } from '../types';

export const CHEMISTRY_2015_EC_PART3: Question[] = [
  {
    id: 'chem-2015-q41',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Thermochemistry: Standard Enthalpy of Formation',
    questionText: '41. The heat change at constant pressure that results when 1 mole of a compound is formed from its elements in their standard states is',
    options: [
      'standard entropy of reaction',
      'standard enthalpy of reaction',
      'standard reduction potential',
      'standard enthalpy of formation'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
The standard enthalpy of formation (ΔH°_f) is precisely defined as the enthalpy/heat change at 1 atm and 298.15 K when exactly one mole of a pure compound is synthesized directly from its constituent elements in their standard thermodynamic states.

🇪🇹 አማርኛ (Amharic):
አንድ ሞል ውህድ ከመሰረታዊ ንጥረ ነገሮቹ በመደበኛ ሁኔታ (standard states) ሲፈጠር የሚፈጠረው የሙቀት ለውጥ ስታንዳርድ ኢንታልፒ ኦፍ ፎርሜሽን (Standard enthalpy of formation - ΔH°_f) ይባላል።

🌳 Afaan Oromoo:
Jijjiiramni ho'aa dhiibbaa dhaabbataa irratti mooliin 1 kompaawundii tokkoo elementoota isaa irraa sadarkaa idileetti yeroo uumamu mul'atu Inthaalpii uumamaa idilee (Standard enthalpy of formation) jedhama.`,
    hint: 'Heat change when 1 mole of a substance is formed from its elements in standard state.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q42',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Redox Reactions: Definition of Electron Transfer',
    questionText: '42. What is a redox reaction? It is a reaction in which',
    options: [
      'two insoluble ions in compounds form an insoluble products.',
      'electrons are transferred between species.',
      'atoms or ions of two compound exchange bonding partners.',
      'an acid and a base neutralize each other.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
A redox (oxidation-reduction) reaction is defined fundamentally as a chemical reaction involving the transfer of electrons from a reducing agent (which loses electrons/is oxidized) to an oxidizing agent (which gains electrons/is reduced).

🇪🇹 አማርኛ (Amharic):
ሬዶክስ ግብረ-መልስ (Redox reaction) ማለት በአተሞች ወይም አዮኖች መካከል የኤሌክትሮን ልውውጥ (transfer of electrons) የሚካሄድበት እና የአቶሞች ኦክሲዴሽን ቁጥር የሚለወጥበት የኬሚካል ግብረ-መልስ ነው።

🌳 Afaan Oromoo:
Re'aakshiniin reedooksii (Redox reaction) re'aakshinii keemikaalaa elektiroononni wantoota wal-nyaatan gidduutti daddarban (transfer of electrons) dha.`,
    hint: 'Redox reactions fundamentally involve electron transfer between species.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q43',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Electrochemistry: Principles of Electroplating',
    questionText: '43. Which one of the following explains how electroplating takes place?',
    options: [
      'The electrolyte is an aqueous solution of a salt of the plated metal.',
      'The object to be electroplated either metal or graphite-coated plastic constitutes the anode.',
      'The cations in the electrolyte are supplied either by the added salt or from oxidation of the anode.',
      'Metal is deposited on the anode by reduction of ions in the electrolyte solution.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
In electroplating:
1. The object to be plated is made the cathode (negative electrode), where metal cations are reduced and deposit as a solid metal layer: Mⁿ⁺ + ne⁻ → M(s).
2. The anode (positive electrode) is made of the plating metal, which oxidizes (dissolves) to replenish metal cations in the electrolyte solution (M → Mⁿ⁺ + ne⁻).
Therefore, the cations in the electrolyte are supplied either from the initial salt solution or continuously from the oxidation of the anode.

🇪🇹 አማርኛ (Amharic):
በኤሌክትሮፕሌቲንግ (Electroplating) ሂደት፣ የሚለበጠው እቃ ካቶድ ሲሆን፣ በአኖድ በኩል ያለው ብረት ኦክሲዳይዝድ እየሆነ አዮኖችን ወደ ኤሌክትሮላይት መፍትሄው ይለግሳል፤ ወይም አዮኖቹ ከተጨመረው ጨው ይገኛሉ።

🌳 Afaan Oromoo:
Adeemsa elektiroopleetiingii keessatti kaatiyoononni elektiroolaayitii keessa jiran soogidda itti dabalaman irraa ykn aanoodiin ooksidaayizii ta'ee ayoonota dhangala'ootti dhangalaasuun argamu.`,
    hint: 'Metal cations are supplied by the salt solution and sustained by anode oxidation.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q44',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Quantitative Chemistry: Equivalent Mass of a Base',
    questionText: '44. How does the equivalent mass of a base is obtained?',
    options: [
      'By multiplying its molar mass by the number of OH⁻ ions furnished by one formula unit of a base.',
      'By dividing its molar mass by the number of OH⁻ ions furnished by one formula unit of a base.',
      'By multiplying its number of equivalent by the number of OH⁻ ions furnished by one formula unit of a base.',
      'By dividing its number of equivalent by the number of OH⁻ ions furnished by one formula unit of a base.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
The equivalent mass of a base is defined as:
Equivalent Mass = (Molar Mass of Base) / (Acidity of Base), where acidity is the number of replaceable hydroxide (OH⁻) ions produced per formula unit of the base (e.g., for Ca(OH)₂, Eq. Mass = Molar Mass / 2).

🇪🇹 አማርኛ (Amharic):
የአንድ ቤዝ ኢክዊቫለንት ማስ (Equivalent mass of a base) የሚሰላው የቤዙን ሞላር ማስ (Molar mass) በአንድ ፎርሙላ ዩኒት በሚለቀቁት የOH⁻ አዮኖች ብዛት በማካፈል ነው።

🌳 Afaan Oromoo:
Ulfaatinni ikwiivaaleentii beezii kan argamu ulfaatina moolarii beezichaa baay'ina ayoonota OH⁻ foormulaa tokkoon kennamaniif hiruu (dividing) dhaani.`,
    hint: 'Equivalent mass of base = Molar mass / number of OH- ions furnished.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q45',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Electrochemistry: Standard Cell Potential & Spontaneity',
    questionText: '45. Which one of the following reactions would occur spontaneously in an aqueous solution at 25°C? Assume that the initial concentrations of the dissolved species are all 1.0 M.\nGiven reduction potentials:\n• Sn²⁺ + 2e⁻ → Sn (-0.14 V)\n• Br₂ + 2e⁻ → 2Br⁻ (+1.07 V)\n• Ag⁺ + e⁻ → Ag (+0.80 V)\n• Ni²⁺ + 2e⁻ → Ni (-0.25 V)\n• Ca²⁺ + 2e⁻ → Ca (-2.87 V)\n• Cd²⁺ + 2e⁻ → Cd (-0.40 V)\n• Cu²⁺ + e⁻ → Cu⁺ (+0.15 V)\n• Fe³⁺ + e⁻ → Fe²⁺ (+0.77 V)',
    options: [
      '2Ag(s) + Ni²⁺(aq) → 2Ag⁺(aq) + Ni(s)',
      '2Br⁻(aq) + Sn²⁺(aq) → Br₂(l) + Sn(s)',
      'Cu⁺(aq) + Fe³⁺(aq) → Cu²⁺(aq) + Fe²⁺(aq)',
      'Ca(s) + Cd²⁺(aq) → Ca²⁺(aq) + Cd(s)'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
For a spontaneous reaction, E°_cell = E°_cathode - E°_anode > 0.
- Option D: Ca(s) + Cd²⁺(aq) → Ca²⁺(aq) + Cd(s):
  E°_cell = E°(Cd²⁺/Cd) - E°(Ca²⁺/Ca) = -0.40 V - (-2.87 V) = +2.47 V > 0 (highly spontaneous single displacement!).
- Option C: Cu⁺(aq) + Fe³⁺(aq) → Cu²⁺(aq) + Fe²⁺(aq):
  E°_cell = +0.77 V - 0.15 V = +0.62 V > 0.
In standard metallurgical activity and textbook single displacement, Option D gives the largest positive standard cell potential (+2.47 V).

🇪🇹 አማርኛ (Amharic):
ግብረ-መልሱ ራሱን ችሎ እንዲካሄድ (Spontaneous) የሴል ፖቴንሻሉ ፖዘቲቭ (E° > 0) መሆን አለበት።
ለ Ca(s) + Cd²⁺(aq) → Ca²⁺(aq) + Cd(s)፡
E°_cell = -0.40 - (-2.87) = +2.47 V > 0 በመሆኑ በጣም ፈጣንና ራሱን ችሎ የሚካሄድ ነው።

🌳 Afaan Oromoo:
Re'aakshiniin ofumaan raawwatamuuf E°_cell > 0 ta'uu qaba.
Ca(s) + Cd²⁺(aq) → Ca²⁺(aq) + Cd(s) keessatti: E° = -0.40 - (-2.87) = +2.47 V > 0 waan ta'eef re'aakshiniin kun ofumaan ni raawwatama.`,
    hint: 'Calculate E°cell = E°cathode - E°anode; Ca displacing Cd gives large positive +2.47 V.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q46',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Industrial Chemistry: Definition of Chemical Industries',
    questionText: '46. Which of the following statements describes chemical industries? It is',
    options: [
      'an area of chemistry concerned with the speeds, or rates, at which chemical reactions occur.',
      'an expression for the chemical composition of a compound in terms of the symbols of the atoms of the elements involved.',
      'a process in which dissolved solute comes out of solution and forms crystals.',
      'a firm that involves usage of raw material to produce desired products by using chemical reactions and refining methods.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
A chemical industry is defined as an enterprise or manufacturing sector that converts natural and synthetic raw materials into useful commercial products (such as fertilizers, plastics, pharmaceuticals, and fuels) through large-scale chemical transformations, separations, and refining processes.

🇪🇹 አማርኛ (Amharic):
የኬሚካል ኢንዱስትሪ (Chemical industry) ማለት ጥሬ እቃዎችን (raw materials) በኬሚካላዊ ግብረ-መልሶችና በማጣራት ዘዴዎች በመጠቀም ወደ ተፈላጊና ጠቃሚ ምርቶች የሚቀይር ድርጅት ወይም የማምረቻ ተቋም ነው።

🌳 Afaan Oromoo:
Industiriin keemikaalaa jechuun dhaabbata meeshaalee dheedhii (raw materials) gara oomishaalee barbaadamootti jijjiiruuf wal-nyaatinsa keemikaalaa fi tooftaalee qulqulleessuu fayyadamuudha.`,
    hint: 'Chemical industry converts raw materials into products using chemical processes.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q47',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Inorganic Chemistry: Combustion of Phosphorus',
    questionText: '47. What will be the product if phosphorus reacts with excess amount of oxygen?',
    options: [
      'H₃PO₃',
      'H₃PO₄',
      'P₄O₁₀',
      'P₄O₆'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
When elemental white or red phosphorus burns in an excess supply of oxygen, it undergoes complete oxidation to form tetraphosphorus decaoxide (phosphorus pentoxide dimer, P₄O₁₀):
P₄(s) + 5O₂(g) → P₄O₁₀(s).
(In a limited supply of oxygen, it produces tetraphosphorus hexaoxide, P₄O₆).

🇪🇹 አማርኛ (Amharic):
ፎስፈረስ (P₄) ከተትረፈረፈ ኦክስጅን (excess oxygen) ጋር ሲቃጠል ቴትራፎስፈረስ ዴካኦክሳይድ (P₄O₁₀) የተሰኘውን ነጭ ጠጣር ኦክሳይድ ይፈጥራል (P₄ + 5O₂ → P₄O₁₀)።

🌳 Afaan Oromoo:
Fosfarasii (P₄) n oksijiinii gahaa/hedduu wajjin yeroo wal-nyaatu teetiraafosfaras deekaaooksaayidii (P₄O₁₀) uuma: P₄ + 5O₂ → P₄O₁₀.`,
    hint: 'Excess oxygen oxidizes phosphorus completely to P4O10.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q48',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Electrochemistry: Metallic vs Electrolytic Conduction',
    questionText: '48. One of the basic differences between metallic conduction and electrolytic conduction is:',
    options: [
      'The conduction of electricity is due to the movement of ions in an electrolytic conduction while the flow of mobile electrons in metallic conduction.',
      'The charge carriers in metals are cations and anions while mobile electrons are in electrolytic conduction.',
      'The charge carriers in metals are localized electrons while strongly held ions are in electrolytic conduction.',
      'The conduction of electricity is due to the movement of ions in metallic conduction while the flow of mobile electrons in electrolytic conduction.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
- In metallic conduction: Current is carried by the flow of free, delocalized valence electrons through the metal crystal lattice without any chemical decomposition.
- In electrolytic conduction: Current is carried by the physical migration of mobile cations and anions in molten state or aqueous solution toward oppositely charged electrodes, accompanied by chemical change.

🇪🇹 አማርኛ (Amharic):
በሜታሊክ ኮንዳክሽን የኤሌክትሪክ ፍሰት የሚካሄደው በተንቀሳቃሽ ኤሌክትሮኖች (mobile electrons) አማካኝነት ሲሆን፣ በኤሌክትሮላይቲክ ኮንዳክሽን ግን ፍሰቱ የሚካሄደው በተንቀሳቃሽ አዮኖች (movement of ions) አማካኝነት ነው።

🌳 Afaan Oromoo:
Kondaakshinii sibiilaa keessatti elektirikiin daddarbuun elektiroonota bilisaatiin kan raawwatamu yoo ta'u, kondaakshinii elektiroolaayitii keessatti garuu sochii ayoonotaatiin (cations fi anions) raawwatama.`,
    hint: 'Metals conduct via delocalized electrons; electrolytes conduct via mobile ions.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q49',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Environmental Chemistry: Greenhouse Gases & Global Warming',
    questionText: '49. Which one of the following gases is released from combustion of a fuel in an industrial machinery causing global warming?',
    options: [
      'CO',
      'CO₂',
      'NO',
      'SO₂'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Carbon dioxide (CO₂) is the principal greenhouse gas emitted in vast quantities from fossil fuel combustion in industrial machinery, motor vehicles, and power plants. It absorbs infrared radiation emitted from Earth\'s surface, trapping thermal energy in the atmosphere and driving global warming.

🇪🇹 አማርኛ (Amharic):
ካርቦን ዳይኦክሳይድ (CO₂) በኢንዱስትሪ ማሽኖችና በነዳጅ ቃጠሎ ምክንያት በብዛት የሚለቀቅ እና የአለም ሙቀት መጨመርን (Global warming) የሚያስከትል ዋነኛ የግሪንሃውስ ጋዝ ነው።

🌳 Afaan Oromoo:
Kaarboon daayooksaayidiin (CO₂) gubannaa boba'aa industirii irraa kan gad-lakkifamuu fi ho'a addunyaa dabaluuf (global warming) gaasii sababa guddaa ta'eedha.`,
    hint: 'CO2 is the primary greenhouse gas produced by hydrocarbon fuel combustion.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q50',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Measurements in Chemistry: Decimal Places vs Significant Figures',
    questionText: '50. The number of digits to the right of the decimal point denotes:',
    options: [
      'Significant figures',
      'Decimal places',
      'Conversion factor',
      'Scientific notation'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
By mathematical and scientific definition, the count of numerical digits located strictly to the right of a decimal point represents the number of decimal places (e.g., 3.1415 has 4 decimal places).

🇪🇹 አማርኛ (Amharic):
ከነጥብ (decimal point) በስተቀኝ የሚገኙ የዲጂቶች ቁጥር የዴሲማል ቦታዎች (Decimal places) በመባል ይጠራሉ።

🌳 Afaan Oromoo:
Lakkoofsi diijitii qabxii herregaa (decimal point) irraa gara mirgaatti argamu bakka kurnyee (Decimal places) jedhama.`,
    hint: 'Digits to the right of decimal point are decimal places.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q51',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Chemical Bonding: Ion Formation & Valence Electrons',
    questionText: '51. Which of the following would occur during the formation of ions?',
    options: [
      'Inner most shell electrons are involved.',
      'Valence electrons are shared between atoms.',
      'The electronic configuration of an atom forming the ion remains unaffected.',
      'Valence electrons are transferred from one atom to another.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
During the formation of ions (ionic bonding), valence electrons from the outermost energy level of a metal atom are transferred to the valence shell of a nonmetal atom, forming cations and anions with stable noble gas electron configurations.

🇪🇹 አማርኛ (Amharic):
አዮኖች በሚፈጠሩበት ጊዜ፣ የቫለንስ ኤሌክትሮኖች (Valence electrons) ከአንዱ አቶም ወደ ሌላኛው አቶም ይተላለፋሉ (transferred)።

🌳 Afaan Oromoo:
Uumama ayoonotaa keessatti, elektiroononni vaaleensii atoomii tokko irraa gara atoomii biraatti daddarbu (transfer of valence electrons).`,
    hint: 'Ion formation occurs when valence electrons are transferred to achieve octet.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q52',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Chemical Bonding: Electron Sea Model of Metallic Bonding',
    questionText: '52. In order to illustrate the structure and properties of a solid, a student put hundred marble balls into a box representing metal cations and the empty space between and around the marble representing the electron sea. Which one of the following bonding is represented by this model?',
    options: [
      'Covalent bonding',
      'Ionic bonding',
      'Metallic bonding',
      'Dative bonding'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
The "Electron Sea Model" (Drude-Lorentz model) describes metallic bonding as an orderly 3D array of positive metal cations immersed in a delocalized "sea" of freely moving mobile valence electrons.

🇪🇹 አማርኛ (Amharic):
የእብነበረድ ኳሶች የብረት ፖዘቲቭ አዮኖችን እና በመካከላቸው ያለው ክፍተት የኤሌክትሮን ባህርን (electron sea) የሚወክሉበት ይህ ሞዴል የሜታሊክ ቦንዲንግ (Metallic bonding) መዋቅርን ያሳያል።

🌳 Afaan Oromoo:
Moodelliin kuusaa elektiroonota bilisaa (electron sea) fi kaatiyoonota sibiilaa agarsiisu kun boondii sibiilawaa (Metallic bonding) ibsa.`,
    hint: 'Cations in a pool/sea of mobile electrons represents metallic bonding.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q53',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Intermolecular Forces: Dipole-Dipole Attractions',
    questionText: '53. Which one of the following explains dipole-dipole force?',
    options: [
      'A type of intermolecular force that exists between non-polar molecules.',
      'The intermolecular attraction between oppositely charged poles of nearby polar molecules.',
      'An attractive force resulting from temporary dipoles induced in molecules.',
      'An electrostatic attraction between metal ions and valence electrons.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Dipole-dipole forces are attractive electrostatic intermolecular forces that occur between molecules with permanent dipole moments (polar molecules). The partially positive end (δ⁺) of one polar molecule attracts the partially negative end (δ⁻) of an adjacent polar molecule.

🇪🇹 አማርኛ (Amharic):
ዳይፖል-ዳይፖል ሃይል (Dipole-dipole force) ማለት በፖላር ሞለኪውሎች ተቃራኒ ቻርጅ ባላቸው ጫፎች (positive and negative poles) መካከል የሚፈጠር የሞለኪውሎች መስህብ ሃይል ነው።

🌳 Afaan Oromoo:
Humni daayipool-daayipoolii humna harkisaa molakiyuulota poolaaraa kanneen poonxoota faallaa qaban (oppositely charged poles) gidduutti uumamudha.`,
    hint: 'Attraction between positive and negative ends of permanent polar dipoles.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q54',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Biochemical Energetics: Cellular Respiration Reaction',
    questionText: '54. Which one of the following reactions creates energy in our bodies during respiration?',
    options: [
      'C₆H₁₂O₆(s) + 6O₂(g) → 6CO₂(g) + 6H₂O(l)',
      '6CO₂(g) + 6H₂O(l) → C₆H₁₂O₆(s) + 6O₂(g)',
      'C₆H₁₂O₆(s) → 2C₂H₅OH(l) + 2CO₂(g)',
      'N₂H₄CO(g) + H₂O(g) → 2NH₃(l) + CO₂(g)'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Aerobic cellular respiration is the metabolic biochemical process in which glucose (C₆H₁₂O₆) is enzymatically oxidized by inhaled oxygen (O₂) to carbon dioxide (CO₂) and water (H₂O), releasing ATP energy:
C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + Energy (ATP).

🇪🇹 አማርኛ (Amharic):
በሰውነታችን ውስጥ በሴሉላር ሬስፒሬሽን ወቅት ጉልበት የሚመነጨው ግሉኮስ በኦክስጅን ሲቃጠል ነው፡
C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ጉልበት (ATP)።

🌳 Afaan Oromoo:
Qaama keenya keessatti hargansuu seeliitiin anniisaan kan uumamu yeroo giluukoosiin oksijiiniin ooksidaayizii ta'uudha:
C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + Anniisaa (ATP).`,
    hint: 'Glucose + Oxygen yields Carbon Dioxide + Water + Energy.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q55',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Types of Reactions: Double Displacement Reaction',
    questionText: '55. "A reaction that involves the exchange of positive and negative ions of each reactant". This is a definition of a',
    options: [
      'Decomposition reaction',
      'Combination reaction',
      'Double displacement reaction',
      'Single displacement reaction'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
A double displacement (metathesis) reaction occurs when the cations and anions of two reacting ionic compounds switch partners: AB + CD → AD + CB.

🇪🇹 አማርኛ (Amharic):
ሁለት ውህዶች ፖዘቲቭ እና ኔጌቲቭ አዮኖቻቸውን እርስ በእርስ በመለዋወጥ ሁለት አዳዲስ ውህዶችን የሚፈጥሩበት ግብረ-መልስ ደብል ዲስፕሌስመንት (Double displacement reaction) ይባላል።

🌳 Afaan Oromoo:
Re'aakshiniin kompaawundoota lama gidduutti jijjiirraa ayoonota poozatiivii fi neegaatiiviitiin raawwatamu re'aakshinii bakka bu'iinsa dachaa (Double displacement reaction) jedhama.`,
    hint: 'Cation-anion exchange between two compounds is double displacement.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q56',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Atomic Structure: Quantum Numbers for 2s Electron',
    questionText: '56. What are the four quantum numbers for an electron in a 2s orbital?',
    options: [
      '2, 1, 0, +1/2',
      '2, 1, 1, +1/2',
      '2, 0, 0, +1/2',
      '2, 0, 1, +1/2'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
For an electron in a 2s subshell:
1. Principal quantum number n = 2
2. Angular momentum quantum number l = 0 (since it is an s-orbital; l = 0 for s, 1 for p, 2 for d)
3. Magnetic quantum number m_l = 0 (since -l ≤ m_l ≤ +l, so m_l = 0)
4. Spin quantum number m_s = +1/2 (or -1/2).
Thus, the valid set of quantum numbers is (2, 0, 0, +1/2).

🇪🇹 አማርኛ (Amharic):
በ2s ኦርቢታል ውስጥ ላለ ኤሌክትሮን፡-
n = 2, l = 0 (ለs ኦርቢታል), m_l = 0, m_s = +1/2። ስለዚህ ትክክለኛው የኳንተም ቁጥር ስብስብ (2, 0, 0, +1/2) ነው።

🌳 Afaan Oromoo:
Elektiroonii oorbiitaalii 2s keessa jiruuf: n = 2, l = 0, m_l = 0, m_s = +1/2 ta'a.`,
    hint: 's orbital has l = 0 and m_l = 0; 2s has n = 2.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q57',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Experimental Chemistry: Precision of Laboratory Instruments',
    questionText: '57. A student uses a digital balance (±0.02), a thermometer (±0.1), a measuring cylinder (±0.05), and a beaker (±0.5) during an experiment. Which of the above instrument is more precise?',
    options: [
      'The thermometer',
      'The digital balance',
      'The Beaker',
      'The measuring cylinder'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Precision of a measuring instrument is determined by its resolution (the smallest division or uncertainty value). The smaller the absolute uncertainty, the higher the precision:
- Digital balance: ±0.02 (smallest uncertainty ⇒ highest precision!)
- Measuring cylinder: ±0.05
- Thermometer: ±0.1
- Beaker: ±0.5.

🇪🇹 አማርኛ (Amharic):
የአንድ መለኪያ መሳሪያ ትክክለኛነትና ጥራት (precision) የሚወሰነው በትንሹ የስህተት ህዳግ (uncertainty) ነው። ዲጂታል ሚዛኑ ±0.02 ትንሹ ቁጥር በመሆኑ ከሁሉም የበለጠ ፕሪሳይስ (more precise) ነው።

🌳 Afaan Oromoo:
Meeshaan safaraa dandeettii safaruu ol'aanaa qabu kan dogoggora safaraa (uncertainty) xiqqaate qabudha. Madaallii dijitaalaa (±0.02) hunda caalaa safara sirrii kenna.`,
    hint: 'Smallest uncertainty (±0.02) corresponds to the highest measurement precision.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q58',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Atomic Models: Dual Nature of Light',
    questionText: '58. Which one of the following explains that light has BOTH wave and particle nature?',
    options: [
      'A beam of light is a stream of particles of electromagnetic energy, with energy proportional to the observed frequency of the light (E = hν).',
      'An electron that is bound to the nucleus behaves like a standing wave and its position is given in terms of probability.',
      'Microscopic systems, such as atoms and molecules can possess wave properties.',
      'Light consists of electromagnetic waves which have an oscillating electric and magnetic disturbance that spreads electromagnetic radiation.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
According to Einstein\'s photon theory and Planck\'s quantum equation E = hν, light behaves as localized packets/particles of energy (photons) while simultaneously possessing wave frequency (ν) and wavelength (λ), demonstrating wave-particle duality.

🇪🇹 አማርኛ (Amharic):
ብርሃን የሞገድም የንጥረ-ነገርም (Wave-particle duality) ባህሪ አለው የሚባለው፣ የብርሃን ጨረር ከፍሪኩዌንሲው ጋር ተመጣጣኝ የሆነ ጉልበት ያላቸው የፎቶን ቅንጣቶች (photons: E = hν) ስብስብ በመሆኑ ነው።

🌳 Afaan Oromoo:
Ifti amala dambalii fi amala suudoo (wave-particle duality) qaba kan jedhamu, ifti anniisaa gosa footoonii kan reeffansa (frequency) wajjin wal-simu (E = hν) qabaachuu isaatiini.`,
    hint: 'E = hν connects particle energy (E) with wave frequency (ν).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q59',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Nuclear Chemistry: Definition of Radioactive Decay',
    questionText: '59. A nuclear breakdown in which particles or electromagnetic radiation is emitted is',
    options: [
      'Radioactive isotopes',
      'Radioactivity',
      'Radio wave',
      'Radioactive decay'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Radioactive decay is the spontaneous process by which an unstable atomic nucleus loses energy by emitting ionizing radiation (such as alpha particles, beta particles, or gamma electromagnetic rays).

🇪🇹 አማርኛ (Amharic):
አንድ ያልተረጋጋ ኒውክሊየስ ተሰባብሮ ቅንጣቶችን (alpha, beta) ወይም ኤሌክትሮማግኔቲክ ጨረሮችን (gamma) የሚለቅበት ሂደት ራዲዮአክቲቭ ዲኬይ (Radioactive decay) ይባላል።

🌳 Afaan Oromoo:
Adeemsi niwukilaasiin hin tasgabboofne suudowwan ykn raadiyeeshinii elektiroomaagneetikii gad-lakkisuudhaan caccabu Caccabbii Raadiyoo-aktiviitii (Radioactive decay) jedhama.`,
    hint: 'Nuclear breakdown with particle/radiation emission is radioactive decay.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q60',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Chemical Bonding: VSEPR Theory Principles',
    questionText: '60. Which statement describes valence shell electron pair repulsion (VSEPR) theory?',
    options: [
      'Each degenerate orbitals are occupied by a single electron before the second electrons of opposite spin enters the orbitals.',
      'Electron pairs will be as far apart from each other in three dimensional spaces as possible.',
      'Atomic orbitals are capable of combining to produce new electron distribution.',
      'A covalent bond is formed when orbitals of two atoms overlap and the overlap region is occupied by a pair of electrons.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Valence Shell Electron Pair Repulsion (VSEPR) theory states that electron pairs (bonding pairs and lone pairs) in the valence shell of a central atom repel one another electrostatically and will orient themselves in 3D space as far apart as possible to minimize repulsion.

🇪🇹 አማርኛ (Amharic):
የVSEPR ንድፈ-ሀሳብ (Valence shell electron pair repulsion theory) በማእከላዊው አቶም ዙሪያ ያሉ የኤሌክትሮን ጥንዶች እርስ በርስ ስለሚገፋፉ በቦታ ውስጥ በተቻለ መጠን በተራራቀ አቅጣጫ ይደረደራሉ ይላል።

🌳 Afaan Oromoo:
Tiyoorii VSEPR tiin, cimdiileen elektiroonii baqqaana alaa jiran wal-dhiibuudhaan bakka 3D keessatti hanga danda'ame walirraa fagaatanii qophaa'u.`,
    hint: 'VSEPR theory: Electron pairs orient as far apart in 3D space as possible to minimize repulsion.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  }
];
