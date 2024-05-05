import React from "react";
import PrevNext from "../components/PrevNext";
import HeroPages from "../components/Pages_hero_area";

function Russia(props) {
    return (
        <div className="page">
            <HeroPages data={props.data}/>
            <h1>{props.data.title}</h1>
            <h4 className="page_date">{props.data.date}</h4>
            <div className="txt">
                <h4>The Erosion of Russo-French Relations</h4>
                <p>In 1808, Napoleon and Tsar Alexander convened at the Congress of Erfurt, aiming to preserve the Russo-French alliance. Their initial friendly rapport, established during their first meeting at Tilsit in 1807, began to deteriorate. By 1811, tensions escalated due to Russia's frequent violations of the Continental System, causing economic strain. Napoleon issued warnings to Alexander about potential consequences should Russia form an alliance with Britain.</p>
                <h4>Prelude to Invasion</h4>
                <p>By 1812, Alexander's advisors contemplated an audacious invasion of the French Empire and the liberation of Poland. Upon receiving intelligence reports of Russia's preparations for war, Napoleon expanded his Grande Armée to an immense force of over 450,000 soldiers. Despite counsel against invading Russia's heartland, Napoleon opted for an offensive campaign, commencing the invasion on June 24, 1812.</p>
                <p>Napoleon framed the war as the Second Polish War, aiming to gain support from Polish nationalists. Their aspiration was to unite the Russian-partitioned Poland with the Duchy of Warsaw and establish an independent Poland. Napoleon, however, refused this demand, having previously promised Austria that such a union would not occur. Additionally, he hesitated to liberate Russian serfs, fearing repercussions within his own army. Regrettably, the Russian serfs later committed atrocities against retreating French soldiers.</p>
                <h4>The Ill-Fated March into Russia</h4>
                <p>The Russians employed a strategy of avoiding a decisive confrontation with Napoleon's forces, choosing instead to retreat further into their vast territory. A brief resistance was mounted at Smolensk in August, resulting in Russian defeats and Napoleon's continued advance. Yet, the Russians consistently eluded a major battle, often due to Napoleon's uncharacteristic hesitations to engage.</p>
                <p>As the French advanced, they grappled with food shortages for both their troops and horses, exacerbated by Russian scorched-earth tactics. The Russians finally offered battle outside Moscow on September 7, culminating in the Battle of Borodino, a horrific encounter that left a staggering number of casualties on both sides. While the French technically won, the Russian army demonstrated resilience, withstanding Napoleon's hope for a definitive victory.</p>
                <h4>The Fateful Occupation of Moscow</h4>
                <p>Napoleon's pursuit of the Russian army led him to Moscow, where he anticipated the war's end and peace negotiations with Tsar Alexander. However, instead of surrendering, Moscow was set ablaze under the orders of Governor Feodor Rostopchin. After five weeks in the scorched city, Napoleon realized his efforts were in vain.</p>

                <img className="float_img" src="images/Napoleons_retreat_from_moscow.jpg" alt="Invasion of Russia"/>

                <p>In early November, concerns arose about Napoleon's control in France following the Malet coup of 1812. The French army embarked on a harrowing retreat, enduring extreme cold and starvation. Thousands of soldiers and horses succumbed to the harsh Russian winter. After the Battle of Berezina, Napoleon managed to escape but was forced to abandon much of his artillery and baggage train. On December 5, in a sledge, he parted ways with the army.</p>
                <h4>The Catastrophic Retreat</h4>
                <p>The French army endured a catastrophic retreat, confronting not only Russian forces but also the brutal Russian winter. Beginning with over 400,000 frontline troops, fewer than 40,000 managed to cross the Berezina River in November 1812. The Russians, too, paid a heavy price, losing 150,000 soldiers in battle and countless civilians in the devastating conflict.</p>
            </div>
            <PrevNext id={props.data.id}/>
        </div>
    )
}
export default Russia