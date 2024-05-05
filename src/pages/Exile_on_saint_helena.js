import React from "react";
import PrevNext from "../components/PrevNext";
import Hero_pages from "../components/Pages_hero_area";

function Helena(props) {
    return (
        <div className="page">
            <Hero_pages data={props.data}/>
            <h1>{props.data.title}</h1>
            <h4 className="page_date">{props.data.date}</h4>
            <div className="txt">
                <h4>Arrival on Saint Helena</h4>
                <p>Napoleon's return to power during the Hundred Days was short-lived, and after his defeat at the Battle of Waterloo in June 1815, he faced exile once again. The British government, refusing his request for asylum in England, decided to send him to the remote island of Saint Helena in the Atlantic Ocean. Saint Helena was situated 1,870 kilometers (1,162 miles) off the west coast of Africa. Napoleon arrived at Jamestown, Saint Helena, in October 1815 aboard HMS Northumberland. To prevent any possibility of escape, the British stationed a small garrison of soldiers on both Saint Helena and the nearby uninhabited Ascension Island, which lay between Saint Helena and Europe.</p>
                <p>Initially, Napoleon spent two months at Briars pavilion on the island before being relocated to Longwood House in December 1815. However, Longwood House had fallen into disrepair, with a damp, windswept, and unhealthy environment. The conditions at Longwood House, as well as restrictions imposed on Napoleon by his custodian Hudson Lowe, led to numerous complaints from Napoleon and his attendants. There are even modern speculations that his later illness may have been caused by arsenic poisoning from copper arsenite in the wallpaper at Longwood House.</p>
                <h4>Life in Exile</h4>
                <p>During his exile on Saint Helena, Napoleon maintained a small circle of loyal followers. He spent his days dictating his memoirs and expressing discontent about his living conditions. Hudson Lowe, tasked with overseeing Napoleon's captivity, implemented measures such as cutting his expenditures and prohibiting gifts that mentioned his imperial status. Supporters were required to sign guarantees committing to remain with the prisoner indefinitely.</p>
                <p>Napoleon's pastimes on the island included writing a book about Julius Caesar, one of his admired historical figures. He also studied English under the guidance of Count Emmanuel de Las Cases, primarily to read English newspapers and books since access to French literature was limited.</p>
                <p>Another of Napoleon's leisure activities was playing card games, with several solitaire games bearing his name. However, the notion that he played numerous patience games might be based on a misunderstanding.</p>
                <p>Despite being confined, Napoleon's charismatic presence still attracted admiration. To Lord Byron, the famous English poet, Napoleon represented the epitome of the Romantic hero—a persecuted, lonely, and flawed genius.</p>
                <h4>Death and Legacy</h4>
                <p>As his health deteriorated during the last few years of his life, Napoleon's personal physician, Barry O'Meara, attributed much of his decline to the harsh treatment and conditions of his captivity. Napoleon's damp, mold-infested living quarters at Longwood, along with isolation and loneliness, took a severe toll on his mental health.</p>
                <p>In February 1821, Napoleon began experiencing rapid health deterioration and reconciled with the Catholic Church. By March, he was bedridden. On May 5, 1821, Napoleon passed away at Longwood House at the age of 51. He received the last rites, including confession, Extreme Unction, and Viaticum, in the presence of Father Ange Vignali. His last words were, "France, l'armée, tête d'armée, Joséphine" ("France, the army, head of the army, Joséphine").</p>
                <p>An autopsy was conducted shortly after his death. His heart and intestines were removed and placed in separate vessels within his coffin. In 1840, under the rule of Louis Philippe I, Napoleon's remains were returned to France. His well-preserved body was reinterred in a sarcophagus of red quartzite from Russia at Les Invalides in Paris in 1861, where it remains to this day.</p>
            </div>
            <PrevNext id={props.data.id}/>
        </div>
    )
}
export default Helena