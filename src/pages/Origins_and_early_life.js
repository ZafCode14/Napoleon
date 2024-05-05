import React from "react";
import HeroPages from "../components/Pages_hero_area";
import PrevNext from "../components/PrevNext";
import "../pages/Pages.css"

function Age23(props) {
    return (
        <div className="page">
            <HeroPages data={props.data}/>
            <h1>{props.data.title}</h1>
            <h4 className="page_date">{props.data.date}</h4>
            <div className="txt">
                <h4>The Buonaparte Legacy</h4>
                <p>Napoleon Bonaparte, one of history's most formidable figures, hailed from a family of Italian descent. His paternal ancestors, the Buonapartes, originally belonged to a minor Tuscan noble family that ventured to Corsica in the 16th century. On the maternal side, the Ramolinos, were descendants of another minor noble family from Genoa. These roots intertwined to form the complex heritage of the man who would reshape the course of history.</p>
                <p>Napoleon's parents, Carlo Maria di Buonaparte and Maria Letizia Ramolino, resided in an ancestral home known as "Casa Buonaparte," today recognized as Maison Bonaparte, located in Ajaccio. It was here, on August 15, 1769, that Napoleon came into the world as the fourth child and third son of the family. He shared his home with an elder brother, Joseph, and a host of younger siblings, including Lucien, Elisa, Louis, Pauline, Caroline, and Jérôme. Baptized as a Catholic, he was christened with the name Napoleone. During his youth, variations of his name, such as Nabulione, Nabulio, Napolionne, and Napulione, were used.</p>
                <h4>Napoleon's Birth Amidst Change</h4>
                <p>Napoleon's birth occurred just a year after the Republic of Genoa had ceded Corsica to France. The island had experienced a turbulent shift in sovereignty, having sold its sovereign rights the year prior to his birth, and was formally annexed as a French province in 1770. His parents, however, were ardent supporters of Corsican independence, even while Maria was carrying him in her womb. His father, Carlo, was an attorney who had initially sided with the Corsican patriot Pasquale Paoli during the Corsican war of independence against France. Following the Corsican defeat at Ponte Novu in 1769 and Paoli's exile in Britain, Carlo began working for the new French government and was appointed as the island's representative to the court of Louis XVI in 1777.</p>
                <h4>Influence of a Mother</h4>
                <p>Napoleon's childhood was greatly influenced by his mother, Maria Letizia Ramolino, who instilled firm discipline in her rambunctious child. Later in life, Napoleon would recognize the profound impact of his mother, declaring, "The future destiny of the child is always the work of the mother." His maternal grandmother's second marriage into the Swiss Fesch family and the presence of his uncle, Cardinal Joseph Fesch, provided the Bonaparte family with a protective figure.</p>
                <p>With a noble and moderately affluent background, Napoleon had greater educational opportunities than the average Corsican of his era. He grew up speaking and reading Corsican (his mother tongue) and Italian (the official language of Corsica), beginning to learn French around the age of 10. Although he eventually became fluent in French, his Corsican accent and struggle with French spelling made him a target for bullying by his peers. These experiences left him reserved and introspective, fueling his passion for reading. An examiner noted that Napoleon excelled in mathematics, displayed good knowledge of history and geography, and had the makings of an excellent sailor.</p>
                <h4>Formative Years and Aspirations</h4>
                <p>One anecdote from his school days tells of Napoleon leading junior students to victory over senior students in a snowball fight, displaying his early leadership abilities. In his youth, he briefly entertained aspirations of becoming a writer, penning a history of Corsica and a romantic novella.</p>
                <p>In 1784, after completing his studies at Brienne, Napoleon entered the École Militaire in Paris. Despite facing financial constraints following his father's death, he successfully completed the two-year artillery officer course in just one year, becoming the first Corsican to graduate from the institution. His examination at the hands of the renowned scientist Pierre-Simon Laplace marked a significant milestone in his educational journey.</p>
                <h4>The Early Career</h4>
                <p>After graduation in September 1785, Napoleon received a commission as a second lieutenant in the La Fère artillery regiment. He served in Valence and Auxonne until the outbreak of the French Revolution in 1789. During this period, he maintained fervent Corsican nationalist sentiments, even seeking leave to join Pasquale Paoli, his mentor, who was allowed to return to Corsica. However, Paoli viewed Napoleon's father as a traitor for abandoning the Corsican independence cause, leading to a rift between the two.</p>
                <p>Napoleon's early revolutionary years were spent in Corsica, where he engaged in the complex struggle among royalists, revolutionaries, and Corsican nationalists. He embraced revolutionary ideals and became a supporter of the Jacobins. Joining the pro-French Corsican Republicans, he opposed Paoli's secessionist aspirations and policies. Given command over a volunteer battalion, Napoleon was promoted to captain in the regular army in 1792, despite exceeding his leave of absence and leading a riot against French troops.</p>
                <p>Tensions escalated as Corsica formally declared secession from France, seeking British protection. Napoleon's commitment to the French Revolution placed him at odds with Paoli, and in 1793, Napoleon and his family were compelled to flee to Toulon on the French mainland due to the growing rift.</p>
                <p>It was during this period of upheaval that Napoleon began to adopt the name "Napoléon Bonaparte" and shed the "Buonaparte" surname, a transformation that would mark the start of a remarkable journey in history.</p>
            </div>
            <PrevNext id={props.data.id}/>
        </div>
    )
}
export default Age23