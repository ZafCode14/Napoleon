import React from "react";
import PrevNext from "../components/PrevNext";
import HeroPages from "../components/Pages_hero_area";

function Sixthcoalition(props) {
    return (
        <div className="page">
            <HeroPages data={props.data}/>
            <h1>{props.data.title}</h1>
            <h4 className="page_date">{props.data.date}</h4>
            <div className="txt">
                <h4>A Momentary Winter Respite</h4>
                <p>Following the calamitous Russian campaign, the winter of 1812-1813 witnessed a temporary halt in hostilities as both the French and Russians rebuilt their war-torn forces. Napoleon managed to muster a formidable army of 350,000 soldiers. However, encouraged by France's setbacks, Prussia joined forces with Austria, Sweden, Russia, Great Britain, Spain, and Portugal, forming a new coalition against Napoleon. Taking command in Germany, Napoleon initially achieved success, including the Battle of Dresden in August 1813.</p>
                <h4>The Turning Tide</h4>
                <p>Despite these victories, the odds increasingly favored the coalition, and the French army, outnumbered two to one, faced a significant setback at the Battle of Leipzig. This monumental clash marked the largest battle of the Napoleonic Wars, resulting in over 90,000 casualties.</p>
                <p>In November 1813, the Allies presented peace terms known as the Frankfurt proposals. These terms allowed Napoleon to remain Emperor of the French but required France to cede significant territories, retaining only its "natural frontiers." Napoleon's delay in accepting these terms led to their withdrawal by December, and harsher conditions followed. The Allies demanded the retreat of France to its 1791 boundaries.</p>
                <h4>The Unraveling Empire</h4>
                <p>With his back against the wall in 1814, Napoleon sought to reopen negotiations based on the Frankfurt proposals, but the terms had become even less favorable. The British, in particular, insisted on Napoleon's permanent removal from power, a demand he vehemently rejected.</p>
                <p>Napoleon's situation grew dire as he withdrew into France with a vastly outnumbered army, reduced to 70,000 soldiers and scant cavalry. Concurrently, his older brother, Joseph Bonaparte, relinquished the Spanish throne, adopting the title of lieutenant general to support the crumbling empire. By January 1814, the Coalition forces had breached France's borders, advancing on Paris from the north and east.</p>
                <h4>The Six Days' Campaign and Paris' Fall</h4>
                <p>Despite overwhelming odds, Napoleon orchestrated a series of victories in the Six Days' Campaign, repelling the coalition forces and delaying the capture of Paris by a month. While these triumphs proved insufficient to reverse the tide, they demonstrated the resilience of the French Empire. However, the Coalition armies reached the outskirts of Paris on March 29, 1814.</p>
                <p>A decisive battle took place at the gates of Paris, with Joseph Bonaparte leading the French against a coalition force five times larger. The outnumbered French were defeated, and Joseph retreated from the city. On March 31, Paris surrendered to the Coalition. Alexander, addressing the Sénat conservateur on April 1, conveyed that the Allies were not fighting against France but against Napoleon. He offered honorable peace terms if Napoleon was removed from power.</p>
                <h4>Napoleon's Abdication and Farewell</h4>

                <img className="float_img" src="images/1024px-Montfort_-_Adieux_de_Napoleon_a_la_Garde_imperiale.jpg" alt="war of the sixth coalition"/>

                <p>Napoleon, learning of Paris' fall, proposed marching on the capital, but his senior officers and marshals mutinied, led by Ney. On April 4, they confronted Napoleon, asserting that the army would follow its generals, not him. Napoleon, left with no choice, abdicated in favor of his son, with Marie Louise as regent. However, the Allies rejected this arrangement under Alexander's influence, fearing Napoleon's return to power. Consequently, on April 6, Napoleon was compelled to announce his unconditional abdication.</p>
                <p>In his poignant farewell address to the soldiers of the Old Guard on April 20, 1814, Napoleon reflected on their shared journey and sacrifices, expressing his resolve to serve the glory of France even in exile. The era of Napoleon's rule in France had come to a definitive end.</p>
            </div>
            <PrevNext id={props.data.id}/>
        </div>
    )
}
export default Sixthcoalition