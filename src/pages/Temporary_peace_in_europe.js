import React from "react";
import PrevNext from "../components/PrevNext";
import HeroPages from "../components/Pages_hero_area";

function Treaty(props) {
    return (
        <div className="page">
            <HeroPages data={props.data}/>
            <h1>{props.data.title}</h1>
            <h4 className="page_date">{props.data.date}</h4>
            <div className="txt">
                <h4>The Treaty of Amiens and a Moment of Respite</h4>
                <p>The turbulent years of the Revolutionary Wars had taken their toll on Europe. However, in a surprising turn of events, France and Britain found themselves signing the Treaty of Amiens in March 1802. This pivotal treaty marked the end of a decade of ceaseless conflict. Among its provisions were the withdrawal of British forces from recently conquered colonial territories and measures to restrain the expansionist ambitions of the French Republic. Europe, at last, experienced a brief moment of tranquility.</p>
                <p>With the continent at peace and the economy showing signs of recovery, Napoleon Bonaparte's popularity reached unprecedented heights during his consulate. Both at home and abroad, he basked in the adulation of the masses.</p>
                <h4>A Permanent Consulate</h4>
                <p>In a new plebiscite held during the spring of 1802, the French people demonstrated their overwhelming support for a constitution that would make the Consulate a permanent fixture of governance. This move essentially elevated Bonaparte to the position of dictator for life. The contrast with the previous plebiscite two years earlier was striking. While the earlier referendum saw 1.5 million people cast their votes, the new one enticed a staggering 3.6 million citizens to participate, constituting 72 percent of all eligible voters. Open defiance of the regime was rare, and the constitution garnered approval from over 99% of the vote.</p>
                <p>The new constitution explicitly defined Bonaparte's extensive powers: "The French people name, and the Senate proclaims Napoleon-Bonaparte First Consul for Life." From this point onward, he was commonly referred to simply as Napoleon, shedding the more familiar Bonaparte.</p>
                <h4>Expanding Horizons: The Louisiana Purchase and Colonial Ambitions</h4>
                <p>The respite from European strife allowed Napoleon to shift his focus towards French colonies overseas. In particular, he turned his attention to Saint-Domingue, a colony that had gained considerable political autonomy during the Revolutionary Wars, with Toussaint L'Ouverture emerging as its de facto leader by 1801. Saint-Domingue was historically France's most lucrative colony, producing more sugar than all the British West Indies colonies combined. However, the Revolution had led to the abolition of slavery there in 1794.</p>
                <p>Facing the financial burdens of his European campaigns, Napoleon made a fateful decision—to reinstate slavery in all French Caribbean colonies, effectively reversing the 1794 decree. This action extended to territories like Guadeloupe and French Guiana, which had previously abolished slavery. In Guadeloupe, the resurgence of slavery in 1802 triggered a slave revolt led by Louis Delgrès.</p>
                <p>To regain control of Saint-Domingue, Napoleon dispatched an expedition under his brother-in-law General Leclerc. While the French managed to capture Toussaint Louverture, they faced dire challenges. Disease ravaged the French ranks, and Jean-Jacques Dessalines emerged victorious in a series of battles, first against Leclerc and then against Rochambeau.</p>
                <p>By May 1803, Napoleon acknowledged defeat, and the last contingent of French troops left the island. The slaves proclaimed their independence and named their new republic Haiti in 1804. In the process, Dessalines distinguished himself as a formidable military commander in the struggle against Napoleonic France.</p>
                <p>Recognizing the failure of his efforts in Haiti, Napoleon opted to sell the vast Louisiana Territory to the United States in 1803. This monumental land transaction doubled the size of the United States, with a selling price equating to less than three cents per acre.</p>
                <h4>The Fragile Peace and Renewed Hostilities</h4>
                <p>The peace with Britain, however, proved to be unstable and contentious. Britain failed to evacuate Malta as stipulated in the treaty and protested against Napoleon's annexation of Piedmont and his Act of Mediation, which established a new Swiss Confederation. Although these territories were not covered by the Treaty of Amiens, they fueled escalating tensions.</p>
                <p>The culmination of these disputes was Britain's declaration of war against France in May 1803. In response, Napoleon initiated preparations for an invasion of Britain, reassembling the invasion camp at Boulogne. He declared that every British male between the ages of eighteen and sixty in France and its dependencies was to be arrested as a prisoner of war.</p>
                <h4>The Dawn of the French Empire</h4>
                <p>During the consulate, Napoleon faced numerous assassination plots, both royalist and Jacobin in nature. These threats, including the Conspiration des poignards and the Plot of the Rue Saint-Nicaise, underscored the perils of his position.</p>
                <p>In January 1804, a plot against his life came to light, allegedly sponsored by the Bourbon family. On the counsel of Talleyrand, Napoleon ordered the kidnapping of the Duke of Enghien, leading to a secret military trial and the Duke's swift execution, despite his lack of involvement in the plot. This event incensed royal courts across Europe and played a significant role in sparking the Napoleonic Wars.</p>
                <p>Napoleon leveraged these assassination attempts to justify the establishment of an imperial system, drawing inspiration from the Roman model. He believed that anchoring his family's succession in the constitution would make a Bourbon restoration more difficult. Consequently, he launched yet another referendum, this time securing his election as Emperor of the French with a remarkable tally of over 99%. The referendum witnessed the enthusiastic participation of nearly 3.6 million voters.</p>
                <p>As the world watched, Napoleon's ascent to absolute power marked a pivotal juncture in history. Weary of the turmoil of the Revolution, many yearned for the strong hand of a capable ruler to guide France through the perils of the era.</p>
            </div>
            <PrevNext id={props.data.id}/>
        </div>
    )
}
export default Treaty