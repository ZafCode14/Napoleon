import React from "react";
import PrevNext from "../components/PrevNext";
import Hero_pages from "../components/Pages_hero_area";

function Exiletoelba(props) {
    return (
        <div className="page">
            <Hero_pages data={props.data}/>
            <h1>{props.data.title}</h1>
            <h4 className="page_date">{props.data.date}</h4>
            <div className="txt">
                <h4>Abdication and Exile to Elba</h4>
                <p>In the aftermath of his defeat and the fall of Paris in 1814, the Allied Powers deemed Napoleon Bonaparte as the primary obstacle to European peace. In response, Napoleon, faithful to his oath, signed the Act of Abdication on April 11, 1814. In this historic document, he renounced the thrones of France and Italy for himself and his heirs, and expressed his readiness to make any sacrifice for the benefit of France.</p>
                <p>Under the terms of the Treaty of Fontainebleau, Napoleon was sent into exile on the island of Elba, located in the Mediterranean. The island, with its 12,000 inhabitants, lay 10 kilometers off the Tuscan coast. Surprisingly, the Allies granted him sovereignty over the island and permitted him to retain the title of Emperor. During his exile, he even attempted suicide using a pill he had carried since nearly being captured during the Russian campaign. Fortunately, the pill's potency had weakened, and he survived.</p>
                <p>Napoleon was transported to Elba aboard HMS Undaunted under the command of Captain Thomas Ussher. He arrived at Portoferraio on May 30, 1814, where his life entered a new phase. During his early months on Elba, Napoleon initiated numerous projects, including the development of a small navy and army, mining iron, constructing new roads, implementing modern agricultural methods, and reforming the island's legal and educational systems.</p>
                <p>A few months into his exile, Napoleon received devastating news: his ex-wife Josephine had passed away in France. The Emperor, deeply affected by her death, retreated into isolation, locking himself in his room for two days.</p>
                <h4>The Hundred Days</h4>
                <p>Separated from his family and aware of rumors that he might be banished to a remote Atlantic island, Napoleon's desire to return to power remained unshaken. He successfully escaped from Elba on the brig Inconstant on February 26, 1815, accompanied by 700 loyal men. Two days later, he landed on the French mainland at Golfe-Juan.</p>
                <p>Upon his return, Napoleon's charisma and determination quickly attracted supporters, including military units. The 5th Regiment, which had been tasked with intercepting him, instead rallied behind their former Emperor. Ney, who had previously pledged to bring Napoleon back to Paris in an iron cage, greeted him warmly.</p>

                <img className="float_img" src="images/1024px-Retour_de_Napoleon_d'_Isle_d'Elbe,_by_Charles_de_Steuben.jpg" alt="Eixle to elba"/>

                <p>Napoleon's return ignited a new period known as the Hundred Days, during which he governed France once more. He began to rebuild his forces, which reached 200,000 soldiers by June. Eager to regain his momentum, he launched an offensive to divide the advancing British and Prussian armies.</p>
                <p>The climax of the Hundred Days came at the Battle of Waterloo on June 18, 1815. Napoleon's forces faced the British under the Duke of Wellington and the Prussians led by Prince Blücher. Despite fierce attacks, Wellington's army held its ground, and the Prussians eventually arrived, breaking Napoleon's right flank. This decisive defeat spelled the end of Napoleon's rule.</p>
                <h4>Abdication and Capture</h4>
                <p>Returning to Paris, Napoleon found his political support crumbling. Realizing his untenable position, he abdicated for the second time on June 22, 1815, this time in favor of his son. He left Paris shortly after, seeking refuge in Josephine's former palace at Malmaison.</p>
                <p>As the Coalition forces advanced into France, with the aim of restoring Louis XVIII to the throne, Napoleon contemplated escape to the United States. However, British ships blockaded the ports. Aware that Prussian troops had orders to capture him dead or alive, he fled to Rochefort.</p>
                <p>On July 15, 1815, Napoleon surrendered to Captain Frederick Maitland aboard HMS Bellerophon, bringing an end to his Hundred Days and marking the beginning of a new chapter in his life.</p>
            </div>
            <PrevNext id={props.data.id}/>
        </div>
    )
}
export default Exiletoelba