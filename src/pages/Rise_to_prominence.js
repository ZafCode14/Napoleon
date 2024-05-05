import React from "react";
import HeroPages from "../components/Pages_hero_area";
import PrevNext from "../components/PrevNext"

function Toulon(props) {
    return (
        <div className="page">
            <HeroPages data={props.data}/>
            <h1>{props.data.title}</h1>
            <h4 className="page_date">{props.data.date}</h4>
            <div className="txt">
                <h4>The Siege of Toulon: An Early Triumph</h4>
                <p>Napoleon Bonaparte's remarkable journey through the annals of history began to gain momentum during the tumultuous days of the French Revolution. In July 1793, he penned a pro-republican pamphlet titled "Le souper de Beaucaire" (Supper at Beaucaire). This publication caught the eye of Augustin Robespierre, younger brother of the revolutionary leader Maximilien Robespierre. Assisted by his fellow Corsican, Antoine Christophe Saliceti, Bonaparte was appointed as the senior gunner and artillery commander of the republican forces that descended upon Toulon on September 8th, 1793.</p>
                <p>His audacious plan centered on capturing a strategic hill, allowing republican cannons to dominate the city's harbor and compelling the British to evacuate. The subsequent assault led to the city's capture, but not without cost. On December 16th, 1793, Bonaparte sustained a wound to his thigh in the heat of battle. This incident, however, propelled him into the limelight and earned him the attention of the Committee of Public Safety. Subsequently, he was entrusted with the command of France's Army of Italy.</p>
                <h4>Exploits in Italy: From Saorgio to Genoa</h4>
                <p>Taking the reins of the French army, Bonaparte crafted a strategy that resulted in the victorious Battle of Saorgio in April 1794. The campaign then saw the French forces advancing to seize Ormea, nestled in the rugged mountains. From there, they headed west to outflank the Austro-Sardinian positions encircling Saorge. These military triumphs showcased Bonaparte's tactical brilliance and marked the beginning of his ascent within the ranks of the French military.</p>
                <p>Augustin Robespierre, recognizing Bonaparte's potential, dispatched him on a diplomatic mission to the Republic of Genoa to assess the country's stance toward France. This diplomatic foray provided further insight into Bonaparte's abilities beyond the battlefield.</p>
                <h4>13 Vendémiaire and Controversy</h4>
                <p>During this period, some contemporaries claimed that Bonaparte had been placed under house arrest in Nice due to his association with the Robespierres following their downfall in the Thermidorian Reaction of July 1794. However, his secretary, Bourrienne, refuted these allegations, attributing them to a rivalry between the Army of the Alps and the Army of Italy, to which Bonaparte was seconded at the time. Bonaparte vigorously defended his reputation in a letter to the commissar Saliceti and was subsequently acquitted. He was released within two weeks and was called upon to draw up plans for attacking Italian positions, contributing to France's ongoing conflict with Austria.</p>

                <img className="float_img" src="images/13Vendémiaire.jpg" alt="Rise to prominence"/>

                <p>In addition to his duties on the mainland, Bonaparte participated in an ill-fated expedition aimed at reclaiming Corsica from British forces. Unfortunately, the French encountered fierce resistance from the British Royal Navy, leading to their repulsion.</p>
                <p>By 1795, Bonaparte's personal life took an intriguing turn. He became engaged to Désirée Clary, the daughter of François Clary, with whom he had a romantic relationship. Désirée's sister, Julie Clary, had previously wed Bonaparte's brother, Joseph. These familial ties underscored the increasingly complex web of relationships surrounding the rising military star.</p>
                <p>In April 1795, Bonaparte received orders to join the Army of the West, engaged in the War in the Vendée—a civil war and royalist counter-revolution in the Vendée region of western France. This assignment, however, was viewed as a demotion, as it placed him in an infantry role, already fully staffed, and he cited health issues to avoid it.</p>
                <h4>The Vendémiaire Uprising and Rise to Prominence</h4>
                <p>Bonaparte's path took an unexpected turn when, on October 3rd, 1795, royalists in Paris initiated a rebellion against the National Convention. Paul Barras, a leader of the Thermidorian Reaction, was well aware of Bonaparte's military prowess, particularly his actions during the capture of Toulon. He entrusted Bonaparte with the command of hastily assembled forces to defend the Convention at the Tuileries Palace. This decision was born from Bonaparte's understanding that artillery would be the linchpin of the palace's defense.</p>
                <p>During the confrontation on October 5th, 1795—13 Vendémiaire An IV in the French Republican Calendar—Bonaparte ordered Joachim Murat, a young cavalry officer, to secure large cannons. These cannons played a pivotal role in repelling the attackers, resulting in the death of 1,400 royalists and the flight of the rest. Bonaparte's decisive action, often referred to as "a whiff of grapeshot," became legendary and cemented his reputation as a formidable military leader.</p>
                <p>This victory extinguished the royalist insurrection and thrust Bonaparte into the spotlight. It brought him fame, fortune, and the favor of the new government—the Directory. Murat, one of Bonaparte's generals, married one of his sisters, and Bonaparte was promoted to the position of Commander of the Interior, along with command of the Army of Italy.</p>
                <p>In the weeks that followed, Bonaparte found himself romantically entangled with Joséphine de Beauharnais, the former mistress of Barras. Their whirlwind romance culminated in civil matrimony on March 9th, 1796. This union would not only change Bonaparte's personal life but also have profound implications for the course of European history.</p>
            </div>
            <PrevNext id={props.data.id}/>
        </div>
    )
}
export default Toulon