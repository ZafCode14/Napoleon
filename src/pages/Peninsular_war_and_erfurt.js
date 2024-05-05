import React from "react";
import PrevNext from "../components/PrevNext";
import Hero_pages from "../components/Pages_hero_area";

function Peninsular(props) {
    return (
        <div className="page">
            <Hero_pages data={props.data}/>
            <h1>{props.data.title}</h1>
            <h4 className="page_date">{props.data.date}</h4>
            <div className="txt">
                <h4>Prelude to the Peninsular War</h4>
                <p>In the wake of the settlements at Tilsit, Napoleon found himself with the opportunity to consolidate his empire. His primary goal was the enforcement of the Continental System against the British, and his gaze turned towards the Kingdom of Portugal, a persistent violator of his trade restrictions. This chapter delves into the events that would set the stage for the Peninsular War, a six-year conflict that would test the strength of the French Empire.</p>
                <h4>The Invasion of Portugal and Intrigue in Spain</h4>
                <p>Napoleon's disapproval of Portugal's shifting policies led to secret negotiations with Charles IV of Spain. On October 17, 1807, General Junot led 24,000 French troops across the Pyrenees, with the cooperation of Spain, in an effort to enforce Napoleon's directives. This invasion marked the first step toward the Peninsular War, a conflict that would prove to be a significant drain on French resources. As the winter of 1808 approached, French agents became increasingly embroiled in Spanish internal affairs, sowing discord within the Spanish royal family. On February 16, 1808, Napoleon announced his intention to mediate between rival Spanish political factions, setting the stage for further turmoil.</p>
                <p>Under the command of Marshal Murat, 120,000 French troops entered Spain, arriving in Madrid on March 24, where violent riots against the occupation soon erupted. The summer of 1808 saw the controversial appointment of Napoleon's brother, Joseph Bonaparte, as the King of Spain, a decision met with vehement opposition from the deeply religious and conservative Spanish population. Resistance to French aggression quickly spread across Spain, with notable French defeats at the Battle of Bailén and the Battle of Vimiero, giving hope to Napoleon's adversaries and prompting his personal intervention.</p>
                <h4>The Congress of Erfurt</h4>
                <p>Before fully engaging in the Iberian conflict, Napoleon recognized the need to address lingering issues with Russia. In October 1808, the Congress of Erfurt provided the backdrop for critical diplomatic negotiations. Napoleon's primary aim was to secure Russian support for his upcoming campaign in Spain and to maintain Russian neutrality in the face of potential conflict with Austria. The resulting Erfurt Convention called for Britain to cease hostilities with France, acknowledged Russia's conquest of Finland from Sweden, and affirmed Russian assistance in a potential war against Austria.</p>
                <p>Having settled diplomatic matters in Erfurt, Napoleon returned to France and began preparations for war. Leading the Grande Armée personally, he ordered a rapid crossing of the Ebro River in November 1808. This marked the beginning of a series of crushing defeats inflicted upon the Spanish forces. After overcoming the last Spanish resistance guarding the capital at Somosierra, Napoleon triumphantly entered Madrid on December 4, 1808, at the head of 80,000 troops. His subsequent actions against General Moore and the British forces forced their withdrawal from Spain, culminating in a final stand at the Battle of Corunna in January 1809.</p>
                <h4>The Prolonged Struggle and Guerrilla Warfare</h4>
                <p>While Napoleon turned his attention to the Austrians in Central Europe, the Peninsular War raged on, persisting even after his departure from Iberia. The conflict settled into a complex and asymmetric strategic deadlock, with all sides vying for an advantage. The defining feature of this phase was the brutal guerrilla warfare that engulfed much of the Spanish countryside. Both French and Spanish forces committed atrocities unparalleled in the broader Napoleonic Wars.</p>
                <h4>The Impact and Legacy</h4>
                <p>The relentless guerrilla fighting in Spain, a stark contrast to the French campaigns in Central Europe, severely disrupted French supply lines and communications. Despite maintaining approximately 300,000 troops in Iberia during the Peninsular War, the majority were assigned to garrison duty and intelligence operations. Consequently, the French struggled to concentrate their forces effectively, prolonging the conflict until external events in Europe finally favored the Allies. Following the invasion of Russia in 1812, a dwindling number of French troops remained in Spain, as Napoleon diverted reinforcements to secure his strategic position in Europe. By 1814, the Allies had successfully expelled the French from the Iberian Peninsula.</p>
                <p>The consequences of Napoleon's invasion of Spain and his replacement of the Spanish Bourbon monarchy with his brother Joseph reverberated across the Spanish empire. In Spanish America, local elites established juntas and mechanisms of rule in the name of Ferdinand VII, whom they regarded as the legitimate Spanish monarch. This tumultuous period ultimately gave rise to the Spanish American wars of independence, as strongmen emerged in the aftermath of Napoleon's destabilizing actions.</p>
            </div>
            <PrevNext id={props.data.id}/>
        </div>
    )
}
export default Peninsular