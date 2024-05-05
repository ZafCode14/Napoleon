import React from "react";
import PrevNext from "../components/PrevNext";
import Hero_pages from "../components/Pages_hero_area";

function Ficompain(props) {
    return (
        <div className="page">
            <Hero_pages data={props.data}/>
            <h1>{props.data.title}</h1>
            <h4 className="page_date">{props.data.date}</h4>
            <div className="txt">
                <h4>Bonaparte's Departure and the Montenotte Campaign</h4>
                <p>Two days after his marriage to Josephine, Napoleon left Paris to take command of the Army of Italy. His objective was to defeat the Kingdom of Sardinia before their Austrian allies could intervene. Bonaparte launched a series of rapid and decisive victories during the Montenotte Campaign, effectively eliminating Piedmont from the war in just two weeks.</p>
                <h4>Focus on Austria and the Siege of Mantua</h4>
                <p>With Piedmont out of the picture, Bonaparte directed his efforts against the Austrian forces in Italy. The siege of Mantua became the focal point of the campaign, as the Austrians attempted to break the French siege repeatedly. Bonaparte's strategic brilliance shone during this period, as he defeated every Austrian relief effort in battles such as Castiglione, Bassano, Arcole, and Rivoli. The Battle of Rivoli in January 1797 marked a significant turning point, leading to the collapse of the Austrian position in Italy.</p>

                <img className="float_img" src="images/Napoleon_at_the_Battle_of_Rivoli.jpg" alt="first italian compain"/>

                <h4>Advance into Austria and the Treaty of Leoben</h4>
                <p>Having triumphed in Italy, Bonaparte shifted his attention to the heartlands of the Habsburg Empire. Although French forces in Southern Germany had suffered defeats in 1796, Bonaparte's aggressive strategy forced Archduke Charles to withdraw his forces to defend Vienna. The Battle of Tarvis in March 1797 saw Bonaparte pushing Charles back and advancing deep into Austrian territory, coming within 100 kilometers of Vienna.</p>
                <p>The audacious French thrust alarmed the Austrians, prompting them to seek peace. The Treaty of Leoben, followed by the more comprehensive Treaty of Campo Formio, granted France control of most of northern Italy and the Low Countries. A secret clause promised the Republic of Venice to Austria, leading to its surrender and the end of its 1,100 years of independence. The French also looted treasures like the Horses of Saint Mark during this period.</p>
                <h4>Bonaparte's Military Strategy and Influence</h4>
                <p>During the Italian campaign, Bonaparte applied conventional military principles to achieve remarkable success. He creatively used artillery as a mobile force to support his infantry, concealed troop deployments, and focused on the "hinge" of an enemy's weakened front. If unable to execute his favored envelopment strategy, he took up the central position and attacked two cooperating enemy forces at their hinge, defeating one before turning to face the other.</p>
                <p>Bonaparte's strategic brilliance allowed his army to capture 150,000 prisoners, 540 cannons, and 170 standards. He fought 67 actions and won 18 pitched battles due to superior artillery technology and his tactical innovations.</p>
                <h4>Political Influence and Return to Paris</h4>
                <p>As Bonaparte achieved military triumphs, he also gained increasing influence in French politics. He established newspapers for his army and for circulation in France. However, his success faced criticism from royalists who accused him of looting Italy and warned of his potential dictatorship.</p>
                <p>In September 1797, Bonaparte sent General Pierre Augereau to lead a coup d'état in Paris, known as the Coup of 18 Fructidor, to purge royalists. This brought Barras and his Republican allies back to power, but they became dependent on Bonaparte. He then engaged in peace negotiations with Austria, culminating in the Treaty of Campo Formio.</p>
                <p>Bonaparte returned to Paris in December 1797 as a national hero and met with Talleyrand, France's Foreign Minister, to begin preparations for an invasion of Britain. His influence in France's political landscape continued to grow.</p>
            </div>
            <PrevNext id={props.data.id}/>
        </div>
    )
}
export default Ficompain