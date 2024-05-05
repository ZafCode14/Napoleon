import React from "react";
import PrevNext from "../components/PrevNext";
import HeroPages from "../components/Pages_hero_area";

function Forthcoalition(props) {
    const style2 = {
        backgroundImage: `url("images/1024px-Tilsitz_1807.jpeg")`,
        backgroundPosition: "center"
    }
    return (
        <div className="page">
            <HeroPages data={props.data}/>
            <h1>{props.data.title}</h1>
            <h4 className="page_date">{props.data.date}</h4>            
            <div className="txt">
                <h4>Napoleon's Grand Strategy and the Fourth Coalition</h4>
                <p>After his triumph at Austerlitz, Napoleon turned his attention to reshaping the European map and consolidating his power. In 1806, he established the Confederation of the Rhine, a coalition of German states designed to serve as a buffer between France and Central Europe. This move spelled the end of the Holy Roman Empire and deeply alarmed Prussia. The bold reorganization of German territory by the French posed a direct threat to Prussian influence in the region, setting the stage for the War of the Fourth Coalition.</p>
                <p>War fever gripped Berlin throughout the summer of 1806, as King Frederick William III, influenced by his wife Queen Louise, decided to challenge French dominance in Central Europe.</p>
                <h4>Napoleon's Blitzkrieg: The Battles of Jena and Auerstedt</h4>
                <p>The war began in earnest with Napoleon's lightning-fast campaign in Prussia. He deployed a strategy known as "le bataillon-carré" (the square battalion), where various corps of the Grande Armée marched uniformly in close support. This tactic allowed for rapid reinforcement of any corps under attack.</p>
                <p>With a force of 180,000 troops, Napoleon launched a swift invasion of Prussia, crossing the Saale River. His primary objective was to defeat the Prussian army before other adversaries could join the fray. The twin battles of Jena and Auerstedt on 14 October 1806 proved to be decisive. The French inflicted heavy casualties on the Prussians, with numerous Prussian commanders killed or incapacitated.</p>
                <p>The Prussian king struggled to command his disintegrating army effectively, leading to a rapid Prussian collapse. In a remarkable pursuit, the French captured 140,000 soldiers, over 2,000 cannons, and hundreds of ammunition wagons in just one month. The Prussian army's morale lay shattered, and they refused to negotiate with the French until the Russians entered the conflict.</p>
                <h4>The Continental System and the Berlin Decree</h4>
                <p>Following his victory, Napoleon imposed the initial elements of the Continental System through the Berlin Decree issued in November 1806. This far-reaching economic blockade aimed to prohibit European nations from trading with Britain. However, enforcing the Continental System proved challenging, as violations abounded.</p>
                <h4>Napoleon's Pursuit of Victory: The Battles of Eylau and Friedland</h4>
                <p>In the ensuing months, Napoleon engaged the Russian armies in Poland, resulting in the bloody stalemate of the Battle of Eylau in February 1807. A period of rest and consolidation followed, but war resumed in June with the Battle of Heilsberg, which remained inconclusive.</p>
                <p>On 14 June 1807, Napoleon secured a resounding victory at the Battle of Friedland, where the majority of the Russian army was annihilated in a brutal conflict. This crushing defeat compelled Tsar Alexander I to seek an armistice with Napoleon.</p>
                <h4>The Treaties of Tilsit: Diplomacy on a Raft</h4>

                <img className="float_img" src="images/1024px-Tilsitz_1807.jpeg" alt="War of the fifth coalition"/>

                <p>The victorious Napoleon and Tsar Alexander I began peace negotiations in Tilsit on 19 June 1807, meeting on a raft in the middle of the River Niemen. The two emperors engaged in diplomatic discussions lasting two hours, characterized by an intriguing blend of diplomacy and personal admiration.</p>
                <p>Despite their recent hostilities, both leaders left the meeting deeply impressed by one another. Alexander faced pressure from his brother, Duke Constantine, to make peace with Napoleon. In light of his recent victory, Napoleon offered the Russians relatively lenient terms, including joining the Continental System, withdrawing forces from Wallachia and Moldavia, and handing over the Ionian Islands to France.</p>
                <p>In contrast, Napoleon dictated harsh terms for Prussia, erasing half of its territories and creating the Kingdom of Westphalia, with his brother Jérôme as its ruler.</p>
                <h4>Consequences of Tilsit: Prussian Resentment and Ongoing Tensions</h4>
                <p>The treatment of Prussia at Tilsit left a deep and bitter antagonism that would persist throughout the Napoleonic era. Additionally, Alexander's apparent friendship with Napoleon masked his true intentions, as he would later violate numerous provisions of the treaty.</p>
                <p>Despite these challenges, the Treaties of Tilsit provided Napoleon with a temporary respite from war and the opportunity to return to France after an absence of over 300 days. Yet, the seeds of future conflicts had been sown, and Europe remained on the brink of geopolitical upheaval.</p>
            </div>
            <PrevNext id={props.data.id}/>
        </div>
    )
}
export default Forthcoalition