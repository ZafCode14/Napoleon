import React from "react";
import PrevNext from "../components/PrevNext";
import HeroPages from "../components/Pages_hero_area";

function Frenchconsutate(props) {
    return (
        <div className="page">
            <HeroPages data={props.data}/>
            <h1>{props.data.title}</h1>
            <h4 className="page_date">{props.data.date}</h4>
            <div className="txt">
                <p>In the heart of ancient Egypt, amidst the whispers of the pyramids and the mysteries of the Nile, General Napoleon Bonaparte found himself far from the battlefields of Europe. Yet, even in this distant land, he remained attuned to the pulse of European affairs. The War of the Second Coalition had dealt a series of harsh blows to France, casting doubts on the future of the fledgling Republic.</p>
                <h4>A Hero's Return</h4>
                <p>On the 24th of August in 1799, with uncertainty gripping the Republic, Bonaparte seized a momentous opportunity. British ships had temporarily departed from French coastal ports, providing a window of escape. Without explicit orders from Paris, he embarked on a journey back to France, leaving the charge of his army to the capable hands of Jean-Baptiste Kléber.</p>
                <p>Unbeknownst to Bonaparte, the Directory had dispatched orders for his return to protect French soil from potential invasions. Alas, the vagaries of communication hindered the delivery of these crucial messages. By the time he set foot in Paris in October, France's fortunes had taken a turn for the better, thanks to a string of victories. However, the Republic found itself in dire financial straits, and the ineffectual Directory had earned the ire of the French populace. The Directory debated Bonaparte's perceived "desertion" but lacked the strength to enact any punitive measures.</p>
                <h4>The Coup d'État and the French Consulate</h4>
                <p>In a twist of fate, despite his setbacks in Egypt, Bonaparte returned to a hero's welcome. He forged a potent alliance with figures like Emmanuel Joseph Sieyès, his brother Lucien, Roger Ducos, Joseph Fouché, and Talleyrand. Together, they orchestrated a coup d'état on the 9th of November 1799, an event now known as "the 18th Brumaire" in the revolutionary calendar. This audacious move led to the dissolution of the Council of Five Hundred, and Napoleon ascended to the position of "first consul" for a decade. Two consuls, appointed by him with consultative roles, joined him in power.</p>
                <p>The new "Constitution of the Year VIII," originally conceived by Sieyès to sideline Napoleon, underwent a transformation under his guiding hand. It was eventually accepted through a direct popular vote, with an overwhelming majority in favor, solidifying Napoleon's grip on power. Though the constitution maintained the semblance of a republic, it, in reality, established a dictatorship.</p>
                <h4>Dictatorship by Plebiscite</h4>
                <p>Napoleon's rule, described by historian Martyn Lyons as "dictatorship by plebiscite," sought to navigate the turbulent waters of democratic forces while consolidating his authority. He initiated regular electoral consultations with the French populace on his path to imperial supremacy. The Constitution of the Year VIII was ratified in a plebiscite in which an astonishing 99.94 percent voted "yes."</p>
                <p>Yet, the numbers concealed a darker truth. Napoleon's brother, Lucien, had manipulated the results to suggest the enthusiastic participation of three million people, while the actual count stood at 1.5 million. Observers of the time believed that around five million French citizens were eligible to vote, making it clear that the regime artificially inflated its support.</p>
                <p>In the early months of the consulate, amid ongoing European conflicts and internal instability, Napoleon's hold on power remained fragile.</p>
                <h4>The Italian Campaign</h4>
                <p>In the spring of 1800, Bonaparte embarked on a daring campaign that would reshape the course of history. Leading his troops across the treacherous Swiss Alps into Italy, he aimed to surprise the Austrian armies that had reoccupied the peninsula during his Egyptian expedition. The French army's challenging Alpine crossing went largely unopposed, allowing them to enter Northern Italy without significant resistance.</p>
                <p>As one French army advanced from the north, the Austrians grappled with a substantial French force besieging Genoa. The intense resistance displayed by this French army, under André Masséna's leadership, provided crucial time for their northern counterparts to execute their operations.</p>
                <p>The climactic Battle of Marengo unfolded on June 14th. General Melas, commanding the Austrians, initially held the advantage with a larger force. However, as the battle progressed, the tide turned. A division under Desaix arrived, shifting the balance in favor of the French. The Austrian army suffered heavy losses and retreated across the Bormida River, eventually agreeing to the Convention of Alessandria, which allowed them to withdraw from Northern Italy.</p>
                
                <img className="float_img" src="images/1024px-Jean-Simon_Berthelemy_(circle)_Napoleon_in_the_Battle_of_Maringo.jpg" alt="Rise to power"/>

                <p>While critics debated Bonaparte's tactical choices, his audacious campaign strategy earned him his first major victory as head of state. In 1800, he accomplished in a month what had taken nearly a year during his initial campaign in Italy. Strategists like Alfred von Schlieffen noted that he had not annihilated the enemy but effectively neutralized them, achieving his objective of conquering North Italy.</p>
                <h4>The Treaty of Lunéville</h4>
                <p>Despite the triumph at Marengo, peace remained elusive. Austria, backed by British support, refused to recognize France's new territorial gains. Negotiations grew tense, prompting Bonaparte to instruct General Moreau to strike Austria once more. The French forces swept through Bavaria, securing a decisive victory at Hohenlinden in December 1800. The Austrians, unable to withstand this onslaught, capitulated and signed the Treaty of Lunéville in February 1801. This treaty not only affirmed but expanded upon France's earlier gains at Campo Formio.</p>
                <p>Napoleon's journey from Egypt to Italy and his remarkable political ascent had firmly established him as a transformative figure in the annals of history. His destiny was intertwined with that of France, and the world would soon witness the unfolding saga of his imperial reign.</p>
            </div>
            <PrevNext id={props.data.id}/>
        </div>
    )
}
export default Frenchconsutate