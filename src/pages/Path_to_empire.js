import React from "react";
import PrevNext from "../components/PrevNext";
import Hero_pages from "../components/Pages_hero_area";

function Empire(props) {
    return (
        <div className="page">
            <Hero_pages data={props.data}/>
            <h1>{props.data.title}</h1>
            <h4 className="page_date">{props.data.date}</h4>
            <div className="txt">
                <h4>Imperial Ambitions and the Reign of Napoleon</h4>
                <p>As the 19th century dawned, Europe witnessed the culmination of Napoleon Bonaparte's meteoric rise to power. Emerging from the tumultuous era of the French Revolution, Napoleon's leadership was marked by an unyielding determination to secure France's dominance on the world stage. His journey from a young Corsican artillery officer to the ruler of a vast empire is a testament to his extraordinary abilities and ambitions.</p>
                <h4>Defying Assassination Plots</h4>
                <p>During his time as First Consul, Napoleon faced numerous threats to his life, emanating from both royalist and Jacobin factions. These included the Conspiration des poignards (Dagger plot) in October 1800 and the infamous Plot of the Rue Saint-Nicaise, also known as the Infernal Machine, just two months later. These conspiracies underscored the deep divisions and simmering tensions within France.</p>
                <p>However, the most significant assassination plot emerged in January 1804, implicating General Moreau and allegedly sponsored by the Bourbon family, the former rulers of France. Faced with this grave threat to his life and the stability of his regime, Napoleon made a fateful decision—to order the kidnapping of the Duke of Enghien, violating the sovereignty of the Grand Duchy of Baden where the Duke had sought refuge. Despite the Duke's lack of involvement in the plot, a secret military trial led to his swift execution.</p>
                <p>The Duke of Enghien's death reverberated across Europe, enraging royal courts and becoming a catalyst for the outbreak of the Napoleonic Wars. It was in the crucible of these perilous times that Napoleon would shape his vision for France's future.</p>
                <h4>The Transformation into an Empire</h4>
                <p>To consolidate and expand his power, Napoleon employed these assassination plots as a pretext for the establishment of an imperial system, drawing inspiration from the grandeur of the Roman Empire. He believed that by enshrining his family's succession in the constitution, he could thwart any attempts at a Bourbon restoration.</p>
                <p>In a bold move, Napoleon initiated yet another referendum, seeking the approval of the French people for his elevation to the title of Emperor of the French. The results were nothing short of astounding, with over 99% of the vote in his favor. The referendum saw enthusiastic participation, with nearly 3.6 million voters taking part.</p>
                <p>Madame de Rémusat, an astute observer of the era, noted that the French populace, wearied by the upheavals of the Revolution, yearned for the firm hand of a capable ruler. They genuinely believed that whether as consul or emperor, Bonaparte would wield his authority to shield them from the perils of anarchy.</p>
                <h4>The Spectacle of Coronation</h4>
                <img className="float_img" src="images/Jacques-Louis_David_-_The_Coronation_of_Napoleon_(1805-1807).jpg" alt="Path to empire"/>
                <p>The crowning moment of Napoleon's transformation into an emperor occurred on the 2nd of December 1804 at Notre Dame de Paris. The ceremony, presided over by Pope Pius VII, was a grand and symbolic event, lasting approximately three hours. Napoleon was presented with two distinct crowns—a golden laurel wreath, harkening back to the Roman Empire, and a replica of Charlemagne's crown.</p>
                <p>Napoleon entered the ceremony wearing the laurel wreath, signifying victory, peace, and civic virtue. He kept this wreath atop his head throughout the proceedings. The moment of utmost significance came when he raised the replica Charlemagne crown above his own head in a symbolic gesture, though he did not actually place it upon his head since he already wore the golden wreath. The assembly within Notre Dame Cathedral rose spontaneously, with men waving their feathered hats in jubilation.</p>
                <p>The crowning glory was when Napoleon crowned his beloved Josephine as the Empress of the French. This historic event was immortalized in the official painting by Jacques-Louis David. Josephine's coronation marked only the second time in French history that a queen had been crowned and anointed, following in the footsteps of Marie de' Medici.</p>
                <h4>Napoleon's Imperial Ascendancy</h4>
                <p>In his quest to consolidate power, Napoleon didn't stop at the French borders. On the 26th of May 1805, he was crowned King of Italy, adorned with the Iron Crown of Lombardy, during a solemn ceremony at the Cathedral of Milan.</p>
                <p>Furthermore, Napoleon elevated eighteen of his top generals to the esteemed rank of Marshals of the Empire on the 18th of May 1804, officially inaugurating the era of the First French Empire.</p>
                <p>With an empire spanning continents and a vision that transcended the boundaries of France, Napoleon embarked on a path that would forever reshape the course of history. His imperial ambitions knew no bounds, and the world would soon be witness to the Napoleonic Wars, a conflict that would leave an indelible mark on Europe and the world.</p>
            </div>
            <PrevNext id={props.data.id}/>
        </div>
    )
}
export default Empire