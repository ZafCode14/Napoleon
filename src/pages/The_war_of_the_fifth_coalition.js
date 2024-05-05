import React from "react";
import PrevNext from "../components/PrevNext";
import Hero_pages from "../components/Pages_hero_area";

function Fifthcoalition(props) {
    return (
        <div className="page">
            <Hero_pages data={props.data}/>
            <h1>{props.data.title}</h1>
            <h4 className="page_date">{props.data.date}</h4>
            <div className="txt">
                <h4>Austria's Quest for Vengeance</h4>
                <p>Having remained on the sidelines for four years, Austria sought a new conflict with France to avenge its previous defeats. However, Austria faced a challenge as it could not rely on Russian support, as Russia was engaged in conflicts with Britain, Sweden, and the Ottoman Empire in 1809. Frederick William of Prussia initially pledged assistance to Austria but later withdrew his support. Austria was also facing financial strain, with the treasury projected to run dry by mid-1809 due to the maintenance of a large army formed since the Third Coalition.</p>
                <h4>The Austrian Invasion and Napoleon's Response</h4>
                <p>In a bold move on April 10, 1809, elements of the Austrian army crossed the Inn River and invaded Bavaria, catching the French by surprise. Napoleon, who was in Paris at the time, rushed to the scene, finding the Grande Armée in a precarious situation. With its wings separated by a significant distance and connected by a thin line of Bavarian troops, the French faced a daunting challenge. Archduke Charles of Austria pressed the French left wing and launched an offensive against Marshal Davout's III Corps.</p>
                <p>In response, Napoleon devised the Landshut Maneuver, realigning his army's axis and marching toward the town of Eckmühl. The Battle of Eckmühl ensued, resulting in a decisive French victory and forcing Charles to withdraw his forces across the Danube into Bohemia. Vienna fell once again on May 13, 1809, but the war persisted as much of the Austrian army had survived the initial engagements in Southern Germany.</p>
                <h4>The Battle of Aspern-Essling</h4>
                <p>On May 21, 1809, the French launched their first major attempt to cross the Danube, leading to the Battle of Aspern-Essling. This battle was marked by a brutal struggle for control of the villages of Aspern and Essling, critical points in the French bridgehead. Eventually, sustained Austrian artillery fire compelled Napoleon to withdraw his forces to Lobau Island. The battle inflicted heavy casualties on both sides and marked Napoleon's first major defeat in a set-piece battle, sending shockwaves across Europe.</p>
                <h4>The Battle of Wagram</h4>
                <p>Following the setback at Aspern-Essling, Napoleon took more than six weeks to plan and prepare for his next attempt to cross the Danube. From June 30 to early July, the French embarked on a significant crossing of the Danube, with over 180,000 troops advancing toward the Austrians. Archduke Charles assembled 150,000 of his own troops in response.</p>
                <p>The Battle of Wagram, which unfolded over two days, marked the largest battle of Napoleon's career at that time. Napoleon personally commanded his forces in a massive confrontation. The battle culminated in a concentrated central thrust by the French, creating a breach in the Austrian lines and compelling Charles to retreat. The Austrians suffered heavy losses, with over 40,000 casualties.</p>
                <h4>The Armistice and Consequences</h4>
                <p>After the Battle of Wagram, Charles signed an armistice on July 12, 1809, effectively ending the war. The campaign in the Kingdom of Holland, known as the Walcheren Campaign, had been launched by the British in an attempt to open a second front. However, it resulted in minimal fighting and heavy casualties due to "Walcheren Fever," with over 4,000 British troops lost. The main outcome of the campaign was a delayed political settlement between the French and the Austrians.</p>
                <p>The resulting Treaty of Schönbrunn in October 1809 was particularly harsh on Austria. Emperor Francis and his envoy, Metternich, had aimed to preserve the Habsburg Empire, and they succeeded by convincing Napoleon to pursue more moderate goals in exchange for promises of friendship. Austria ceded several territories to France, including Carinthia, Carniola, and Adriatic ports. Galicia was given to the Poles, and the Salzburg area of Tyrol went to the Bavarians. Austria's population shrank by about one-fifth due to these territorial changes.</p>
                <h4>Napoleon's Domestic Affairs</h4>
                <p>Following the war, Napoleon shifted his focus to domestic matters. Concerned about the future of his empire and the lack of a legitimate heir, he divorced Empress Joséphine in January 1810. In search of a new wife and to solidify an alliance with Austria, Napoleon married the 18-year-old Archduchess Marie Louise, daughter of Emperor Francis II. Their union produced a son on March 20, 1811, whom Napoleon declared the heir apparent with the title of King of Rome. Though he never ruled, this child, often referred to as Napoleon II, played a role in subsequent historical developments, including the rise of his cousin, Louis-Napoléon, who would become Napoleon III.</p>
            </div>
            <PrevNext id={props.data.id}/>            
        </div>
    )
}
export default Fifthcoalition