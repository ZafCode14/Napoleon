import React from "react";
import PrevNext from "../components/PrevNext";
import HeroPages from "../components/Pages_hero_area";

function Expedition(props) {
    return (
        <div className="page">
            <HeroPages data={props.data}/>
            <h1>{props.data.title}</h1>
            <h4 className="page_date">{props.data.date}</h4>
            <div className="txt">
            <p>Napoleon Bonaparte's relentless ambition and quest for power knew no bounds. After two months of meticulous planning, he came to a stark realization—France's naval strength was not yet sufficient to challenge the mighty British Royal Navy. However, his indomitable spirit refused to bow to this reality. Instead, he hatched a bold military expedition that would reshape the course of history—the Egyptian Campaign. His objective was twofold: to seize Egypt and, in doing so, undermine Britain's access to its lucrative trade interests in India.</p>
            <h4>Napoleon's Grand Vision</h4>
            <p>Napoleon's grand vision extended beyond Egypt's sandy shores. He aspired to establish a lasting French presence in the Middle East and forge an alliance with Tipu Sultan, the Sultan of Mysore—an archenemy of the British Empire. In his correspondence with the Directory, he pledged that, "as soon as he had conquered Egypt, he will establish relations with the Indian princes and, together with them, attack the English in their possessions." The Directory, eager to secure a vital trade route to the Indian subcontinent, readily agreed to his audacious plan.</p>
            <h4>A Scholarly Expedition</h4>
            <p>In May 1798, as preparations for the Egyptian campaign were underway, Napoleon achieved another distinction—he was elected a member of the French Academy of Sciences. This expedition was not merely a military endeavor; it included a contingent of 167 scientists. Among them were mathematicians, naturalists, chemists, and geodesists. Their remarkable discoveries included the famous Rosetta Stone, and their collective work was later published in 1809 as the "Description de l'Égypte."</p>
            <h4>Conquest and Capture</h4>
            <p>En route to Egypt, Bonaparte's fleet reached Malta on 9 June 1798. The island was then under the control of the Knights Hospitaller. With only token resistance, Grand Master Ferdinand von Hompesch zu Bolheim surrendered, granting Bonaparte control over this vital naval base with minimal casualties.</p>
            <p>Upon landing at Alexandria on 1 July, Bonaparte immediately faced a formidable adversary—the Mamluks, Egypt's ruling military caste. The Battle of Shubra Khit served as a dress rehearsal for the pivotal Battle of the Pyramids on 21 July, situated just 24 kilometers from the ancient pyramids. Here, Bonaparte's approximately 25,000-strong force faced off against the Egyptian cavalry. The outcome was brutal, with significant casualties on both sides, but it boosted the French army's morale.</p>
            <h4>Naval Setback and Rebellion</h4>
            <p>As Bonaparte gained ground on land, the British dealt a devastating blow at sea. On 1 August 1798, in the Battle of the Nile, Sir Horatio Nelson's fleet captured or destroyed nearly the entire French fleet, thwarting Napoleon's plans to strengthen French control in the Mediterranean. Despite these naval setbacks, Bonaparte's army succeeded in temporarily increasing French influence in Egypt, although they had to contend with repeated uprisings from the local population.</p>
            <h4>Brutality and Disease</h4>
            <p>In early 1799, Bonaparte expanded his campaign into the Ottoman province of Damascus, encompassing Syria and Galilee. His forces captured coastal towns like Arish, Gaza, Jaffa, and Haifa. The assault on Jaffa, however, left a dark stain on his reputation. Discovering that many of the defenders were former prisoners of war, ostensibly on parole, Bonaparte ordered the execution of the garrison and approximately 1,500 to 2,000 prisoners by bayonet or drowning. This brutal episode involved the murder of men, women, and children over three horrifying days.</p>
            <h4>Retreat and Desperation</h4>
            <p>Despite early successes, Bonaparte's army faced insurmountable challenges. Disease, particularly the bubonic plague, claimed thousands of lives, with a significant number perishing in combat. Bonaparte's attempt to lay siege to the fortress of Acre ended in failure, prompting a retreat to Egypt in May. To hasten the withdrawal, he ordered plague-stricken soldiers to be poisoned with opium, leading to a tragic toll. The exact number of casualties remains a point of contention, ranging from 30 to 580.</p>
            <h4>Victory Amidst Adversity</h4>
            <p>Back in Egypt by 25 July, Bonaparte faced yet another threat—an Ottoman amphibious invasion at Abukir. Despite the odds, he emerged victorious, illustrating his remarkable ability to overcome adversity.</p>
            <p>Napoleon's Egyptian campaign was marked by a complex tapestry of triumphs and tribulations. It would ultimately shape his destiny and impact the world in unforeseen ways, setting the stage for his rise to even greater prominence on the global stage.</p>
            </div>
            <PrevNext id={props.data.id}/>
        </div>
    )
}
export default Expedition