import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const BIOLOGY_2013_EC_PART3: Question[] = [
  {
    id: 'bio-2013-q51',
    subject: 'Biology',
    year: '2013 E.C.',
    topic: 'Biochemistry: Proteins and Hemoglobin Structure',
    questionText: '51. Which one of the following organic molecules is used to make haemoglobin?',
    options: [
      'Glycogen',
      'Lipids',
      'Proteins',
      'Nucleic acids'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Hemoglobin is a quaternary conjugated globular protein composed of four polypeptide chains (two alpha and two beta chains), each linked to an iron-containing heme prosthetic group.

🇪🇹 አማርኛ (Amharic):
ሂሞግሎቢን (Haemoglobin) በሰውነታችን ውስጥ ኦክስጅን የሚያጓጉዝ ሲሆን የተገነባውም ከፕሮቲን (Proteins - ፖሊፔፕታይድ ሰንሰለቶች) ነው።

🌳 Afaan Oromoo:
Himoogilobiiniin (Haemoglobin) pirootiinii (protein) yoo ta\'u, dhiiga keessatti ooksijiinii qaama keessa deddeebisuuf tajaajila.`,
    hint: 'Hemoglobin is a globular protein made of polypeptide globin chains.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2013-q52',
    subject: 'Biology',
    year: '2013 E.C.',
    topic: 'Biochemistry: Carbohydrate Formulas (Maltose Disaccharide)',
    questionText: '52. Which one of the following is the correct formula of maltose?',
    options: [
      'C6H12O6',
      'C12H24O12',
      'C5H10O5',
      'C12H22O11'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Maltose is a disaccharide formed by a condensation reaction between two alpha-glucose molecules with the loss of one water molecule:
C6H12O6 + C6H12O6 - H2O = C12H22O11.

🇪🇹 አማርኛ (Amharic):
ሞልቶስ (Maltose) ሁለት የግሉኮስ ሞለኪውሎች አንድ የውሃ ሞለኪውል ሲያጡ የሚፈጠር ዳይሳካራይድ ሲሆን ትክክለኛ ቀመሩ C12H22O11 ነው።

🌳 Afaan Oromoo:
Moltoosii (Maltose) daayisaakaaraayidii yoo ta\'u foormulaan isaa sirriin C12H22O11 dha.`,
    hint: 'Condensation of 2 hexoses (C6H12O6) loses H2O, yielding C12H22O11.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2013-q53',
    subject: 'Biology',
    year: '2013 E.C.',
    topic: 'Biochemical Tests: Benedict\'s Test for Reducing Sugars',
    questionText: '53. A grade 11 student added Benedict\'s reagent to a food sample and heated the mixture for 5 minutes. Then he observed a color change. Which one of the following is FALSE about the result?',
    options: [
      'An orange colour shows that a reducing sugar is present.',
      'A yellow colour shows that a reducing sugar is present.',
      'An orange colour shows that a non-reducing sugar is present.',
      'A red colour shows that a reducing sugar is present.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Benedict\'s test produces color changes from green to yellow, orange, and brick-red in the presence of reducing sugars (like glucose and maltose). An orange color confirms the presence of reducing sugars, NOT non-reducing sugars; hence statement C is FALSE.

🇪🇹 አማርኛ (Amharic):
ቤኔዲክት ሪኤጀንት የብርቱካናማ ቀለም የሚያሳየው ሪዲዩሲንግ ስኳር (reducing sugar) መኖሩን እንጂ ኖን-ሪዲዩሲንግ ስኳርን ስላልሆነ የተሳሳተው (FALSE) ሀረግ C ነው።

🌳 Afaan Oromoo:
Qorannoo Beneediiktii keessatti halluun burtukaana mul\'isuun sukkaara hir\'isaa (reducing sugar) agarsiisa malee non-reducing miti; kanaaf C\'n dogoggora.`,
    hint: 'Benedict\'s test tests for reducing sugars; non-reducing sugars remain blue.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2013-q54',
    subject: 'Biology',
    year: '2013 E.C.',
    topic: 'Biochemical Tests: Hydrolysis in Sucrose Testing',
    questionText: '54. In a Benedict\'s test for sucrose, why is the test sample first boiled with hydrochloric acid?',
    options: [
      'To reduce Benedict\'s solution',
      'To neutralize the solution',
      'To hydrolyze non-reducing sugar',
      'To retest the mixture with Benedict\'s solution'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Sucrose is a non-reducing disaccharide that does not react directly with Benedict\'s reagent. Boiling with dilute hydrochloric acid (HCl) hydrolyzes the glycosidic bond of sucrose, splitting it into its reducing monosaccharide subunits (glucose and fructose).

🇪🇹 አማርኛ (Amharic):
ሱክሮስ ኖን-ሪዲዩሲንግ ስኳር በመሆኑ በቀጥታ ከቤኔዲክት ጋር አይሰራም፤ በሃይድሮክሎሪክ አሲድ መፍላቱ ሱክሮስ ተሰብሮ (hydrolyze ሆኖ) ወደ ግሉኮስና ፍሩክቶስ እንዲቀየር ያደርጋል።

🌳 Afaan Oromoo:
Suukiroosiin sukkaara non-reducing waan ta\'eef asiidii HCl\'n kan bilcheeffamuuf hidhoo isaa caccabsuun (hydrolyze) gara giluukoosii fi firaaktoosiitti jijjiiruufi.`,
    hint: 'Acid hydrolysis breaks non-reducing sucrose into reducing monosaccharides.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2013-q55',
    subject: 'Biology',
    year: '2013 E.C.',
    topic: 'Enzymology: Specificity of Enzymes',
    questionText: '55. Which one of the following statements explains the specificity of enzymes?',
    options: [
      'Enzymes catalyse one reaction only.',
      'Enzymes speed up a reaction without being used up.',
      'Enzymes can be destroyed by excessive heat.',
      'Enzymes can be used over and over again.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Enzyme specificity means that because of the unique complementary 3D shape and chemical environment of their active sites, individual enzymes can bind only a specific substrate and catalyse one specific reaction.

🇪🇹 አማርኛ (Amharic):
የኢንዛይሞች ልዩ ተኮርነት (Specificity of enzymes) የሚያስረዳው እያንዳንዱ ኢንዛይም የተለየ የአክቲቭ ሳይት (active site) ቅርጽ ስላለው አንድ የተወሰነ ኬሚካላዊ ምላሽ ብቻ እንደሚያፋጥን (catalyse one reaction only) ነው።

🌳 Afaan Oromoo:
Amalli addaa inzaayimootaa (specificity) kan ibsu inzaayimiin tokko bakka hojii (active site) addaa waan qabuuf re\'aakshinii adda ta\'e tokko qofa si\'eessa (catalyse one reaction only).`,
    hint: 'Specificity refers to an enzyme acting on only one specific substrate/reaction.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2013-q56',
    subject: 'Biology',
    year: '2013 E.C.',
    topic: 'Applied Biology: Contributions of Biological Sciences',
    questionText: '56. The relevance and promise of biological sciences can be demonstrated by their contribution in',
    options: [
      'finding mechanisms to feed the growing human population.',
      'finding solutions to ethnic conflicts.',
      'development of housing and construction sectors.',
      'advancement of aviation technology.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Biology makes profound societal contributions through agricultural biotechnology, crop genetics, disease-resistant plant breeding, and agronomy to secure adequate food supply for the world\'s expanding human population.

🇪🇹 አማርኛ (Amharic):
የባዮሎጂ ሳይንስ ከፍተኛ አስተዋጽኦ ለሰው ልጆች ከሚያበረክታቸው አንዱ በፍጥነት እያደገ ላለው የሰው ልጅ ህዝብ በቂ የምግብ አቅርቦት የሚያስገኙ ቴክኖሎጂዎችንና ዘሮችን ማፍራት (feed growing population) ነው።

🌳 Afaan Oromoo:
Gumaachi guddaan saayinsii baayoloojii baay\'ina uummata addunyaa dabalaa jiruuf mala oomisha nyaataa dabaluu (feed growing human population) maddisiisuudha.`,
    hint: 'Agricultural biology and genetics address global food security.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2013-q57',
    subject: 'Biology',
    year: '2013 E.C.',
    topic: 'Biology and Society: Roles in Combating HIV/AIDS',
    questionText: '57. All are the roles of biology to combat the spread of HIV/AIDS EXCEPT',
    options: [
      'producing drugs that can stop the virus from reproducing.',
      'breaking the transmission pathway.',
      'raising fund for infected people.',
      'producing a vaccine against the virus.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Biological sciences develop antiretroviral therapeutics, vaccine candidates, diagnostics, and prevention protocols. Raising monetary funds is a financial/charitable endeavor, not a biological discipline.

🇪🇹 አማርኛ (Amharic):
ባዮሎጂ ቫይረሱን የሚያግዱ መድኃኒቶችን ማዘጋጀት፣ ክትባቶችን ማጥናትና ስርጭትን መግታት ሲሆን፤ የገንዘብ ማሰባሰብ (raising fund) ግን ማህበራዊ እና ኢኮኖሚያዊ ተግባር እንጂ የባዮሎጂ ሚና አይደለም።

🌳 Afaan Oromoo:
Qoricha qopheessuu fi vaaksinii qorachuun gahee baayoloojii yoo ta\'u, maallaqa walitti qabuun (raising fund) gahee faayinaansii/hawaasummaati malee saayinsii baayoloojii miti.`,
    hint: 'Fundraising is a financial/economic activity, not a biological scientific role.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2013-q58',
    subject: 'Biology',
    year: '2013 E.C.',
    topic: 'HIV/AIDS Prevention: Transmission Dynamics',
    questionText: '58. Which one of the following statements is INCORRECT about AIDS? The rate of transmission of AIDS will reduce when',
    options: [
      'the transmission pathways are broken.',
      'promiscuous sexual intercourse is reduced.',
      'the number of sexual partners is restricted.',
      'men and women are circumcised.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
While voluntary medical male circumcision has been shown to reduce female-to-male transmission risk, female circumcision (female genital mutilation - FGM) offers NO biological protection whatsoever and causes severe reproductive and infectious trauma. Thus stating that circumcision of both men and women reduces transmission is INCORRECT.

🇪🇹 አማርኛ (Amharic):
የኤችአይቪ ስርጭት የማይቀንስበት እና የተሳሳተ ሀረግ የሴቶች ግርዛት ከኤችአይቪ ይከላከላል የሚለው ነው (D)፤ የሴቶች ግርዛት ለከፍተኛ የጤና መታወክ እና ለበሽታ ተጋላጭነት የሚዳርግ ጎጂ ልማድ ነው።

🌳 Afaan Oromoo:
Dhugaa kan hin taane dhaqna qabaan dubartootaa HIV hir\'isa kan jedhuudha (D). Dhaqna qabaan dubartootaa miidhaa guddaa fida malee HIV irraa hin ittisu.`,
    hint: 'Female genital mutilation provides no protection against HIV transmission.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2013-q59',
    subject: 'Biology',
    year: '2013 E.C.',
    topic: 'Properties of Water: Biological Significance',
    questionText: '59. Which one of the following statements explains the property of water?',
    options: [
      'It takes less energy to heat water up.',
      'It has the lowest latent heat of vaporization.',
      'It is a transparent molecule.',
      'It is highly viscous substance.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Water is optically transparent to visible light, which enables sunlight to penetrate through aquatic environments so that phytoplankton, algae, and submerged water plants can perform photosynthesis.

🇪🇹 አማርኛ (Amharic):
ውሃ ብርሃን አሳላፊ (transparent) በመሆኑ የፀሐይ ብርሃን ወደ ጥልቅ የውሃ አካላት ዘልቆ እንዲገባና የውሃ ውስጥ እፅዋት ፎቶሲንተሲስ እንዲያካሂዱ ያስችላል።

🌳 Afaan Oromoo:
Bishaan ifa kan dabarsu (transparent) waan ta\'eef ifti biiftuu bishaan keessa lixee biqiltoonni bishaan keessaa ifaan soorata akka qopheessan gargaara.`,
    hint: 'Water\'s optical transparency allows light penetration for aquatic photosynthesis.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2013-q60',
    subject: 'Biology',
    year: '2013 E.C.',
    topic: 'Public Health: Community Action and HIV Incidence',
    questionText: '60. Community A actively participates in HIV/AIDS awareness, prevention, and blood testing, whereas Community B focuses only on afforestation, seeks food aid, and HIV-positive individuals keep their status secret due to stigma. In which community will HIV incidence most probably be higher?',
    options: [
      'In both communities',
      'In Community B',
      'Impossible to decide',
      'In Community A'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Community B has lower awareness, lack of screening/VCT, and high social stigma causing concealment of infections, leading to silent transmission and significantly higher HIV incidence.

🇪🇹 አማርኛ (Amharic):
በማህበረሰብ B ውስጥ የጤና ግንዛቤ እጥረት፣ ምርመራ አለማድረግና ማግለል በመኖሩ የኤችአይቪ ስርጭት ምጣኔ እጅግ ከፍተኛ (In Community B) ይሆናል።

🌳 Afaan Oromoo:
Hawaasa B keessatti hubannoon dhabamuu fi qorannoo dhiisuu irraa kan ka\'e daddarbaan HIV baay\'ee olaanaa ta\'a.`,
    hint: 'Stigma, secrecy, and lack of testing in Community B lead to higher infection rates.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2013-q61',
    subject: 'Biology',
    year: '2013 E.C.',
    topic: 'Properties of Water: Thermal Capacity and Density Anomaly',
    questionText: '61. Which property of water is useful for life that it continues in relatively warm water underneath through cold weather?',
    options: [
      'High specific heat capacity',
      'High density in its solid form than its liquid form',
      'High surface tension',
      'High latent heat of vaporization'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Water has a high specific heat capacity (4.184 J/g°C), meaning it absorbs and stores vast amounts of thermal energy with minimal change in temperature. Together with ice floating as an insulator, this prevents aquatic water bodies from rapidly freezing solid, keeping the water underneath relatively warm and stable for aquatic life.

🇪🇹 አማርኛ (Amharic):
ውሃ ከፍተኛ የሙቀት አቅም (High specific heat capacity) ስላለው በብርዳማ ወቅት የሙቀት መጠኑ በፍጥነት አይቀንስም፤ ይህም የውሃ ውስጥ ፍጥረታት በሞቀ ውሃ ውስጥ እንዲኖሩ ይረዳል።

🌳 Afaan Oromoo:
Bishaan dandeettii ho\'a qabachuu olaanaa (High specific heat capacity) waan qabuuf yeroo qorraatti dafee hin qabbanaa\'u; kunis lubbu-qabeeyyii bishaan keessaatiif mijataadha.`,
    hint: 'High specific heat capacity buffers against sudden temperature drops.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2013-q62',
    subject: 'Biology',
    year: '2013 E.C.',
    topic: 'Biochemistry: Organic vs Inorganic Molecules',
    questionText: '62. Consider the table: Row 1: Lysine, sucrose (Organic) | Salts, hydrochloric acid (Inorganic); Row 2: Deoxyribose, carbon monoxide | Fructose, sodium chloride; Row 3: Fatty acid, methane (Organic) | Sodium hydroxide, carbon dioxide (Inorganic); Row 4: Water, calcium carbonate | Stearic acid, starch. Which rows contain corresponding molecules correctly categorized?',
    options: [
      '2 and 3',
      '1 and 2',
      '3 and 4',
      '1 and 3'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
- Row 1: Lysine (amino acid) and sucrose (sugar) are organic; salts (NaCl) and HCl are inorganic. (CORRECT)
- Row 3: Fatty acid and methane (hydrocarbon) are organic; NaOH and CO2 are inorganic. (CORRECT)
Rows 1 and 3 are correctly grouped.

🇪🇹 አማርኛ (Amharic):
ረድፍ 1 (ላይሲንና ሱክሮስ ኦርጋኒክ / ጨውና HCl ኢንኦርጋኒክ) እና ረድፍ 3 (ፋቲ አሲድና ሚቴን ኦርጋኒክ / ሶዲየም ሃይድሮክሳይድና CO2 ኢንኦርጋኒክ) በትክክል የተመደቡ ናቸው (1 and 3)።

🌳 Afaan Oromoo:
Tarree 1 fi Tarree 3 molakiyuulota orgaanikii fi inorgaanikii sirriitti adda baasanii qabaniiru (1 and 3).`,
    hint: 'Hydrocarbons, amino acids, and sugars are organic; simple acids, bases, and salts are inorganic.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2013-q63',
    subject: 'Biology',
    year: '2013 E.C.',
    topic: 'Biochemistry: Cellulose Structure',
    questionText: '63. Cellulose is',
    options: [
      'a mixture of amylose and amylopectin.',
      'a polymer of beta-glucose molecules.',
      'a non-reducing monosaccharide sugar.',
      'a polymer of alpha-glucose molecules.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Cellulose is an unbranched, structural polysaccharide polymer consisting of beta-glucose monomers joined by beta-1,4-glycosidic bonds, which form strong microfibrils via extensive hydrogen bonding. (Starch and glycogen are polymers of alpha-glucose).

🇪🇹 አማርኛ (Amharic):
ሴሉሎስ (Cellulose) የተክሎች ሴል ግድግዳን የሚገነባ ረጅም ያልተዘረዘረ ፖሊመር ሲሆን የተሰራው ከ ቤታ-ግሉኮስ (beta-glucose molecules) ነው።

🌳 Afaan Oromoo:
Seeluloosiin (Cellulose) qola seelii biqiltootaa kan ijaaru yoo ta\'u, pooliimarii molakiyuulota beetaa-giluukoosii (beta-glucose) irraa ijaarameedha.`,
    hint: 'Cellulose is made of beta-glucose, while starch is made of alpha-glucose.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2013-q64',
    subject: 'Biology',
    year: '2013 E.C.',
    topic: 'Biochemistry: Phospholipid Structure',
    questionText: '64. Which organic molecules are formed when two fatty acid molecules are bonded to glycerol and the place of the third is taken by a phosphate group?',
    options: [
      'Waxes',
      'Glycolipids',
      'Triglycerides',
      'Phospholipids'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Phospholipids consist of a glycerol backbone esterified to two nonpolar hydrophobic fatty acid tails, with the third hydroxyl position bonded to a hydrophilic phosphate head group.

🇪🇹 አማርኛ (Amharic):
ከግሊሰሮል ጋር ሁለት የፋቲ አሲድ ሞለኪውሎች እና አንድ የፎስፌት ግሩፕ (phosphate group) ተጣምረው የሚፈጥሩት ሞለኪውል ፎስፎሊፒድስ (Phospholipids) ይባላል።

🌳 Afaan Oromoo:
Molakiyuuliin giliseroolii tokko, asiidii faatii lama fi garee fosfeetiitiin walitti hidhamu Fosfooliipiidii (Phospholipids) jedhama.`,
    hint: 'Glycerol + 2 fatty acids + phosphate = phospholipid.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2013-q65',
    subject: 'Biology',
    year: '2013 E.C.',
    topic: 'Biochemistry: Functions of Lipids',
    questionText: '65. All are functions of lipids EXCEPT',
    options: [
      'thermal insulation.',
      'water proofing.',
      'respiratory substrates.',
      'determines a particular hereditary feature.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Lipids function as thermal insulators (adipose tissue), waterproofing agents (cuticle waxes), and high-energy respiratory substrates. Hereditary traits and organismal features are determined by nucleic acids (DNA/genes), NOT lipids.

🇪🇹 አማርኛ (Amharic):
ሊፒዶች (Lipids) ለሙቀት መከላከያ፣ ውሃ እንዳይገባ መከላከያና ለሃይል ማመንጫነት የሚያገለግሉ ሲሆን፤ የዘረ-መል ባህሪያትን የሚወስኑት ግን ኑክሊክ አሲዶች (DNA) እንጂ ሊፒዶች አይደሉም።

🌳 Afaan Oromoo:
Liipiidonni ho\'a ittisuuf, bishaan dabarsuu dhabuuf fi anniisaa kennuuf tajaajilu; amala dhalootaa kan murteessu garuu DNA dha malee liipiidii miti.`,
    hint: 'Determining hereditary features is the role of DNA genes, not lipids.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2013-q66',
    subject: 'Biology',
    year: '2013 E.C.',
    topic: 'Cell Biology: Membrane Transport Mechanisms',
    questionText: '66. Three cells transport materials as follows: Cell 1 transports water from high water concentration to low water concentration; Cell 2 transports Na+ from high concentration to low concentration via channels; Cell 3 transports glucose from low concentration to high concentration using ATP. Which transport mechanisms do they use, respectively?',
    options: [
      'Osmosis, facilitated diffusion, active transport',
      'Osmosis, active transport, facilitated diffusion',
      'Facilitated diffusion, osmosis, active transport',
      'Facilitated diffusion, active transport, osmosis'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
- Cell 1 (movement of water across membrane): Osmosis.
- Cell 2 (downhill movement of Na+ ions through protein channels): Facilitated diffusion.
- Cell 3 (uphill transport of glucose against its concentration gradient requiring energy): Active transport.

🇪🇹 አማርኛ (Amharic):
የውሃ ዝውውር = ኦስሞሲስ (Osmosis)፤ የአዮኖች በፕሮቲን በኩል መተላለፍ = ፋሲሊቴትድ ዲፍዩዥን (Facilitated diffusion)፤ ከዝቅተኛ ወደ ከፍተኛ በሃይል ማጓጓዝ = አክቲቭ ትራንስፖርት (Active transport) ነው።

🌳 Afaan Oromoo:
Daddarbiinsi bishaanii = Osmosis; Na+ gara gadiitti dabarsee = Facilitated diffusion; Giluukoosii ol-oofuun = Active transport dha.`,
    hint: 'Water = osmosis; passive ion channel = facilitated diffusion; against gradient = active transport.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2013-q67',
    subject: 'Biology',
    year: '2013 E.C.',
    topic: 'Cell Physiology: Osmosis across Semi-Permeable Membranes',
    questionText: '67. Suppose a container is divided into two halves by a water-permeable membrane. Side A contains hypertonic solution and Side B contains hypotonic solution. What will be the expected result?',
    options: [
      'Rise of the water level in both halves',
      'Rise of the water level in B',
      'Rise of the water level in A',
      'No change in both halves'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Water moves by osmosis from an area of higher water potential (the hypotonic solution in B) across the semi-permeable membrane into the area of lower water potential (the hypertonic solution in A), causing the liquid level in side A to rise.

🇪🇹 አማርኛ (Amharic):
ውሃ ሁልጊዜ ከሃይፖቶኒክ (ከፍተኛ የውሃ ክምችት ካለው ከ B) ወደ ሃይፐርቶኒክ (ዝቅተኛ የውሃ ክምችት ወዳለው ወደ A) በኦስሞሲስ ስለሚጓጓዝ፣ በ A በኩል ያለው የውሃ ከፍታ ይጨምራል (Rise of water level in A)።

🌳 Afaan Oromoo:
Bishaan iddoo bishaan baay\'ee qabu (hypotonic B) irraa gara iddoo bishaan xiqqaa qabutti (hypertonic A) waan yaa\'uuf dhangala\'aan A keessa jiru ol-ka\'a.`,
    hint: 'Water flows from hypotonic to hypertonic, raising the hypertonic side\'s level.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2013-q68',
    subject: 'Biology',
    year: '2013 E.C.',
    topic: 'Cell Biology: Fluid-Mosaic Membrane Model',
    questionText: '68. According to the fluid-mosaic model of the plasma membrane',
    options: [
      'the membrane has uniform composition of proteins.',
      'glycoproteins form a double layer.',
      'phospholipid bilayer forms the basic structure of the membrane.',
      'peripheral proteins are tightly attached on the membrane.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
The Singer-Nicolson Fluid Mosaic Model states that the basic fundamental framework of biological membranes is a fluid phospholipid bilayer with globular proteins floating mosaic-like within and on the bilayer.

🇪🇹 አማርኛ (Amharic):
በፍሉይድ-ሞዛይክ ሞዴል (Fluid-mosaic model) መሰረት የሴል ሽፋን መሰረታዊ መዋቅር የተሰራው በሁለት ረድፍ በተደረደሩ ፎስፎሊፒዶች (phospholipid bilayer) ነው።

🌳 Afaan Oromoo:
Akka moodeela \'Fluid-mosaic\'tti caasaan bu\'uuraa qola seelii baqqaana dachaa fosfooliipiidii (phospholipid bilayer) irraa kan tolfamedha.`,
    hint: 'The phospholipid bilayer provides the fluid matrix of the cell membrane.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2013-q69',
    subject: 'Biology',
    year: '2013 E.C.',
    topic: 'Cell Physiology: Water Potential in Osmosis',
    questionText: '69. Two solutions A and B of unknown concentration are separated by a semi-permeable membrane. After a few minutes, students observed that the water level in solution A decreased. What could the students conclude?',
    options: [
      'Solution B had positive water potential.',
      'Solution A had higher water potential.',
      'The two solutions were isotonic.',
      'Solution A was hypertonic.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Net movement of water by osmosis occurs from regions of higher (less negative) water potential to regions of lower (more negative) water potential. Because water moved out of container A (decreasing its volume) into B, solution A must have had a higher water potential than solution B.

🇪🇹 አማርኛ (Amharic):
የመፍትሄ A መጠን መቀነሱ የሚያሳየው ውሃ ከ A ወደ B መፍሰሱን ነው፤ ይህም መፍትሄ A ከፍተኛ የውሃ ፖቴንሻል (higher water potential) እንደነበረው ያረጋግጣል።

🌳 Afaan Oromoo:
Bishaan A irraa gara B\'tti yaa\'ee sadarkaan A waan hir\'ateef, falli A \'water potential\' olaanaa qaba ture jechuudha.`,
    hint: 'Water always leaves the region of higher water potential.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2013-q70',
    subject: 'Biology',
    year: '2013 E.C.',
    topic: 'Cell Physiology: Osmoregulation in Liver Cells',
    questionText: '70. Catabolism of amino acids produces toxic ammonia in liver cells, which is converted to urea and excreted. What would be the result if osmosis/water transport was blocked in these cells?',
    options: [
      'gain water and become turgid.',
      'excrete more ammonia and urea.',
      'become over active and produce more energy.',
      'become damaged and lose functionality.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Osmotic fluid balance and water transport are essential for solvent dilution, transport of metabolic intermediates, and urea excretion. If osmosis is blocked, osmotic lysis, severe toxic accumulation of nitrogenous wastes, and loss of cell viability will cause liver cells to become damaged and lose functionality.

🇪🇹 አማርኛ (Amharic):
የኦስሞሲስ እና የውሃ ዝውውር ከተገደበ የጉበት ሴሎች መርዛማ ቆሻሻዎችን ማሟሟት እና ማውጣት ስለማይችሉ ሴሎቹ ይጎዳሉ እንዲሁም ስራቸውን ያቆማሉ (become damaged and lose functionality)።

🌳 Afaan Oromoo:
Adeemsi osmoosisaa yoo dhaabbate seelonni tiruu balfa dhabamsiisuu waan hin dandeenyeef ni miidhamu, hojii isaaniis ni dhabu.`,
    hint: 'Blocking water transport and osmoregulation causes toxicity and cellular damage.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2013-q71',
    subject: 'Biology',
    year: '2013 E.C.',
    topic: 'History of Cell Biology: Chronology of Discoveries',
    questionText: '71. Consider key historical events in cell biology: I. Hooke describes \'cells\' in cork (1665); II. Leeuwenhoek discovers protozoa (1674); III. Schleiden and Schwann propose the cell theory (1838-1839); IV. Jansen builds the first compound microscope (~1590). Which represents the correct order from ancient to recent?',
    options: [
      'I, II, III and IV',
      'IV, I, II and III',
      'III, II, I and IV',
      'II, III, IV and I'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
The historical chronology of cell biology is:
1. IV: Zacharias Janssen invents the first compound microscope (~1590).
2. I: Robert Hooke observes and names \'cells\' in cork (1665).
3. II: Anton van Leeuwenhoek observes living microorganisms/protozoa (1674).
4. III: Matthias Schleiden and Theodor Schwann formulate the unified Cell Theory (1838–1839).
Correct sequence: IV, I, II, III.

🇪🇹 አማርኛ (Amharic):
የሴል ባዮሎጂ ታሪካዊ ቅደም ተከተል፡ ጃንሰን የመጀመሪያውን ማይክሮስኮፕ ፈጠረ (IV) -> ሁክ የሴል ስያሜ ሰጠ (I) -> ሌቨንሁክ ፕሮቶዞአን ተመለከተ (II) -> ሽላይደንና ሽዋን የሴል ንድፈ-ሀሳብ አቀረቡ (III) = IV, I, II, III።

🌳 Afaan Oromoo:
Tartiiba seenaa seelii: Jaansen maaykirooskooppii hojjete (IV) -> Hook seelii moggaase (I) -> Liiwanhuk pirootozoowaa arge (II) -> Shilaayidanii fi Shiwaan \'cell theory\' baasan (III).`,
    hint: 'Janssen (1590) -> Hooke (1665) -> Leeuwenhoek (1674) -> Schleiden & Schwann (1838).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2013-q72',
    subject: 'Biology',
    year: '2013 E.C.',
    topic: 'Cytology: Prokaryotic Cell Wall Composition',
    questionText: '72. One difference between prokaryotic and eukaryotic cells is their cell wall. This is because the cell wall of prokaryotic cells is',
    options: [
      'the site of energy production.',
      'impermeable.',
      'stronger than eukaryotic cells.',
      'made from sugar and amino acids (peptidoglycan).'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
The cell wall of prokaryotes (eubacteria) is uniquely composed of peptidoglycan (murein), a macromolecular polymer consisting of repeating polysaccharide glycan backbones cross-linked by short peptide amino acid chains. Plant walls contain cellulose and fungi contain chitin.

🇪🇹 አማርኛ (Amharic):
የፕሮካርዮት (ባክቴሪያ) ሴል ግድግዳ ከስኳር እና አሚኖ አሲድ ውህድ (peptidoglycan / murein) የተሰራ በመሆኑ ከዩካርዮቲክ ሴሎች የተለየ ነው።

🌳 Afaan Oromoo:
Qolli seelii pirookaariyootii sukkaaraa fi asiidota amiinoo (peptidoglycan) irraa waan tolfameef qola seelii yuukaariyootii irraa adda ta\'a.`,
    hint: 'Peptidoglycan is a polymer of amino sugars and amino acid peptides.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2013-q73',
    subject: 'Biology',
    year: '2013 E.C.',
    topic: 'Cytology: Distinct Features of Eukaryotic Cells',
    questionText: '73. Consider features of cells: I. Have pili; II. Have chromosomes; III. Have circular DNA; IV. Have larger ribosomes. Which of these features are characteristic of eukaryotic cells?',
    options: [
      'II and III',
      'I and II',
      'II and IV',
      'I and III'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Eukaryotic cells feature linear nuclear chromosomes complexed with histone proteins (II) and contain larger 80S cytosolic ribosomes (IV) (composed of 60S and 40S subunits, compared to smaller 70S prokaryotic ribosomes). Pili and single circular genomic DNA are prokaryotic features.

🇪🇹 አማርኛ (Amharic):
የዩካርዮቲክ ሴሎች መገለጫዎች ክሮሞሶም በኒውክሊየስ ውስጥ መያዛቸው (II) እና ትላልቅ 80S ራይቦዞሞች (IV) መያዛቸው ነው (II and IV)።

🌳 Afaan Oromoo:
Amaloota seelii yuukaariyootii keessatti: Kiroomoosomii qabaachuu (II) fi raayiboosoomii gurguddaa (80S) qabaachuudha (IV). Kanaafuu II fi IV dha.`,
    hint: 'Eukaryotes have linear chromosomes and larger 80S ribosomes.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2013-q74',
    subject: 'Biology',
    year: '2013 E.C.',
    topic: 'Cell Membrane Structure: Cholesterol and Membrane Fluidity',
    questionText: '74. Which of the following is correct about the structure of the cell membrane?',
    options: [
      'Phospholipid molecules form a transport channel.',
      'Protein molecules form a double layer.',
      'The membrane has a fluid nature that is regulated by cholesterol.',
      'Proteins form the outer layer while phospholipids form the inner layer.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
The plasma membrane is a dynamic fluid structure whose fluidity is regulated and buffered by cholesterol molecules intercalated between fatty acid tails in animal membranes, preventing crystallization at low temperatures and excessive fluidity at high temperatures.

🇪🇹 አማርኛ (Amharic):
የሴል ሽፋን ፍሉይድ (fluid) ባህሪ ያለው ሲሆን የሽፋኑ ፈሳሽነትና ጥንካሬ በኮሌስትሮል (cholesterol) ሞለኪውሎች ቁጥጥር ይደረግበታል (regulated by cholesterol)።

🌳 Afaan Oromoo:
Qolli seelii dhangala\'aa (fluid) yoo ta\'u, dhangala\'ummaan isaa kolesitirooliin (cholesterol) to\'atama.`,
    hint: 'Cholesterol acts as a temperature buffer regulating membrane fluidity.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2013-q75',
    subject: 'Biology',
    year: '2013 E.C.',
    topic: 'Cell Organelles: Organelle Functions',
    questionText: '75. Which of the following is a correct match of cellular organelles and their corresponding function?',
    options: [
      'Vacuole - strength and elasticity',
      'Mitochondria - ATP synthesis',
      'Lysosome - modification of proteins',
      'Golgi body - digesting foreign cells'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Mitochondria are the powerhouses of aerobic eukaryotic cells where the Krebs cycle and oxidative phosphorylation take place to generate adenosine triphosphate (ATP synthesis).

🇪🇹 አማርኛ (Amharic):
ትክክለኛው የኦርጋኔል እና የተግባር ተዛምዶ ማይቶኮንድሪያ ለሴሉ የኃይል ምንጭ የሆነውን ATP ማመንጨቱ (Mitochondria - ATP synthesis) ነው።

🌳 Afaan Oromoo:
Walitti dhufeenyi sirriin Maayitookondiriyaa fi oomisha anniisaa ATP (Mitochondria - ATP synthesis) ti.`,
    hint: 'Mitochondria are the sites of cellular respiration and ATP synthesis.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  }
];
