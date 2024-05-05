import Age23 from "../pages/Origins_and_early_life";
import Toulon from "../pages/Rise_to_prominence";
import Ficompain from "../pages/First_italian_compain";
import Frenchconsutate from "../pages/Rise_to_power";
import Treaty from "../pages/Temporary_peace_in_europe";
import Empire from "../pages/Path_to_empire";
import Thirdcoalition from "../pages/The_war_of_the_third_coalition";
import Expedition from "../pages/Egyptian_expedition";
import Middleeastern from "../pages/Middle_eastern_ambitions";
import Forthcoalition from "../pages/The_war_of_the_fourth_coalition";
import Peninsular from "../pages/Peninsular_war_and_erfurt";
import Fifthcoalition from "../pages/The_war_of_the_fifth_coalition";
import Russia from "../pages/Invasion_of_russia";
import Sixthcoalition from "../pages/The_war_of_the_sixth_coalition";
import Exiletoelba from "../pages/Exile_to_elba";
import Helena from "../pages/Exile_on_saint_helena";
const data = [
  {
    id: 0,
    path: "origins_and_early_life",
    chapter: "Chapter 1",
    title: 'Origins and Early Life',
    date: "(1769 - 1793)",
    from: "1769",
    till: null,
    img: "images/800px-Napoleon_-_2.jpg",
    text: "Napoleon Bonaparte was born on August 15, 1769, into a Corsican family of Italian descent. His family supported Corsican independence but faced a shifting political landscape when Corsica was annexed by France.",
    func: Age23
  },
  {
    id: 1,
    path: "rise_to_prominence",
    chapter: "Chapter 2",
    title: "Rise to Prominence",
    date: "(1793 - 1796)",
    from: "1793",
    till: null,
    img: "images/Napoleon_à_Toulon_par_Edouard_Detaille.jpg",
    text: "Napoleon Bonaparte's rise to prominence began with the Siege of Toulon in 1793. His tactical brilliance captured the attention of the Committee of Public Safety, propelling him into leadership roles.",
    func: Toulon
  },
  {
    id: 2,
    path: "first_italian_compaign",
    chapter: "Chapter 3",
    title: "First Italian Compaign",
    date: "(1796 - 1797)",
    from: "1796",
    till: null,
    img: "images/1801_Antoine-Jean_Gros_-_Bonaparte_on_the_Bridge_at_Arcole.jpg",
    text: "After marrying Josephine, Napoleon left for Italy to command the Army of Italy. In the Montenotte Campaign, he rapidly defeated the Kingdom of Sardinia and shifted his focus to Austria.",
    func: Ficompain
  },
  {
    id: 3,
    path: "egyptian_expedition",
    chapter: "Chapter 4",
    title: "Egyptian Expedition",
    date: "(1798 - 1799)",
    from: "1798",
    till: null,
    img: "images/1024px-Bonaparte_ante_la_Esfinge,_por_Jean-Léon_Gérôme.jpg",
    text: "Napoleon Bonaparte's Egyptian Campaign in 1798 aimed to seize Egypt and undermine British access to India. He took a contingent of scientists to explore and document Egypt's wonders.",
    func: Expedition
  },
  {
    id: 4,
    path: "rise_to_power",
    chapter: "Chapter 5",
    title: "Rise to Power",
    date: "(1799 - 1801)",
    from: "1799",
    till: null,
    img: "images/Jean_Auguste_Dominique_Ingres,_Portrait_de_Napoléon_Bonaparte_en_premier_consul.jpg",
    text: "This chapter highlights Napoleon Bonaparte's return to France from Egypt in 1799 and his subsequent rise to power. He orchestrated a coup d'état, becoming the \"first consul\" and solidifying his authority through a plebiscite.",
    func: Frenchconsutate
  },
  {
    id: 5,
    path: "temporary_peace_in_europe",
    chapter: "Chapter 6",
    title: "Temporary Peace in Europe",
    date: "(1802 - 1804)",
    from: "1802",
    till: null,
    img: "images/Gillray_-_The_First_Kiss.jpg",
    text: "In 1802, the Treaty of Amiens briefly halted European conflicts, boosting Napoleon's popularity. A plebiscite made him a dictator for life, focusing on expanding French colonies, reinstating slavery, and selling the Louisiana Territory.",
    func: Treaty
  },
  {
    id: 6,
    path: "rise_of_the_first_french_empire",
    chapter: "Chapter 7",
    title: "Rise of the First French Empire",
    date: "(1804 - 1805)",
    from: "1804",
    till: null,
    img: "images/Napoleon_in_Coronation_Robes_by_François_Gérard.jpg",
    text: "In the early 19th century, Napoleon solidified his power by becoming Emperor of the French. Faced with assassination threats and simmering tensions, he ordered the execution of the Duke of Enghien, igniting the Napoleonic Wars.",
    func: Empire
  },
  {
    id: 7,
    path: "war_of_third_coalition",
    chapter: "Chapter 8",
    title: "War of the Third Coalition",
    date: "(1805 - 1805)",
    from: "1805",
    till: null,
    img: "images/Ulm_capitulation.jpg",
    text: "In 1805, the War of the Third Coalition began, with Britain, Russia, and Austria opposing Napoleon's France. Napoleon, despite preparing to invade England, shifted his focus to Central Europe.",
    func: Thirdcoalition
  },
  {
    id: 8,
    path: "middle_eastern_ambitions",
    chapter: "Chapter 9",
    title: "Middle Eastern Ambitions",
    date: "(1806 - 1807)",
    from: "1806",
    till: null,
    img: "images/The_Persian_Envoy_Mirza_Mohammed_Reza_Qazvini_Finkenstein_Castle_27_Avril_1807_by_Francois_Mulard.jpg",
    text: "Napoleon's ambitious quest for influence in the Middle East aimed to pressure rivals, Britain and Russia, and form an alliance with the Ottoman Empire. Although the Ottomans recognized him as Emperor in 1806.",
    func: Middleeastern
  },
  {
    id: 9,
    path: "war_of_forth_coalition",
    chapter: "Chapter 10",
    title: "War of the Fourth Coalition",
    date: "(1806 - 1807)",
    from: "1806",
    till: null,
    img: "images/1024px-Iena.jpg",
    text: "After creating the Confederation of the Rhine and eroding Prussian influence, the War of the Fourth Coalition began. Napoleon's lightning-fast campaign in Prussia led to the decisive Battles of Jena and Auerstedt.",
    func: Forthcoalition
  },
  {
    id: 10,
    path: "peninsular_war_and_erfurt",
    chapter: "Chapter 11",
    title: "Peninsular War and Erfurt",
    date: "(1807 - 1809)",
    from: "1807",
    till: null,
    img: "images/Antoine-Jean_Gros_-_Capitulation_de_Madrid,_le_4_décembre_1808.jpg",
    text: "The Peninsular War unfolded as Napoleon aimed to enforce the Continental System and invaded Portugal and Spain. Discord within the Spanish royal family led to French occupation, igniting Spanish resistance.",
    func: Peninsular
  },
  {
    id: 11,
    path: "war_of_fifth_coalition",
    chapter: "Chapter 12",
    title: "War of the Fifth Coalition",
    date: "(1809 - 1811)",
    from: "1809",
    till: null,
    img: "images/1024px-Napoleon_Wagram.jpg",
    text: "The War of the Fifth Coalition began when Austria, seeking revenge against Napoleon, invaded Bavaria. Napoleon responded with the Landshut Maneuver and the Battle of Eckmühl, eventually capturing Vienna.",
    func: Fifthcoalition
  },
  {
    id: 12,
    path: "invasion_of_russia",
    chapter: "Chapter 13",
    title: "Invasion of Russia",
    date: "(1811 - 1812)",
    from: "1811",
    till: null,
    img: "images/burning_moscow.jpg",
    text: "In 1812, Napoleon's alliance with Russia eroded due to tensions over the Continental System. As Russia prepared for war, Napoleon amassed a vast army and invaded Russia in June.",
    func: Russia
  },
  {
    id: 13,
    path: "war_of_sixth_coalition",
    chapter: "Chapter 14",
    title: "War of the Sixth Coalition",
    date: "(1812 - 1814)",
    from: "1812",
    till: null,
    img: "images/DelarocheNapoleon.jpg",
    text: "After a temporary respite, the Sixth Coalition formed against Napoleon, and despite some early successes, the odds shifted against him. The Battle of Leipzig in 1813 marked a turning point.",
    func: Sixthcoalition
  },
  {
    id: 14,
    path: "exile_to_elba",
    chapter: "Chapter 15",
    title: "Exile to Elba",
    date: "(1814 - 1815)",
    from: "1814",
    till: null,
    img: "images/from_elba.jpg",
    text: "After his defeat and abdication in 1814, Napoleon was sent into exile on the island of Elba, off the Tuscan coast. He was initially permitted to rule over the island.",
    func: Exiletoelba
  },
  {
    id: 15,
    path: "exile_on_saint_helena",
    chapter: "Chapter 16",
    title: "Exile on Saint Helena",
    date: "(1815 - 1821)",
    from: "1815",
    till: "1821",
    img: "images/Napoleon_sainthelene.jpg",
    text: "After his defeat at Waterloo, Napoleon was exiled to the remote island of Saint Helena in the South Atlantic. Life in exile was marked by isolation, damp living conditions, and disputes with his British custodian.",
    func: Helena
  }
];
export default data;