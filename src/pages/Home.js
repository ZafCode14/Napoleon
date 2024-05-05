import React from 'react'
import Card from '../components/Card'

function Home() {
    return (
        <div className="home">
            <div className='home_hero_background'>
                <div className='darken_hero_area'>
                    <div className='inner_hero_area'>
                        <h1>Emperor Napoleon Bonaparte: A Legacy of Power and Influence</h1>
                    </div>
                </div>
            </div>
            <div className='txt'>
                <p>Step into the captivating world of one of history's most influential figures: Napoleon Bonaparte. This is your portal to a thrilling journey through the life, triumphs, and challenges of this iconic French military leader and statesman.</p>
            </div>
            <h2 className='timeline_heading'>Timeline</h2>
            <Card/>
            <div className='txt'>
                <p>Napoleon Bonaparte, a towering figure in French and world history, was born on August 15, 1769, in Corsica, which was then a French territory. He emerged as one of the most influential military and political leaders of the late 18th and early 19th centuries. Napoleon's rise to power was marked by his exceptional military prowess and strategic genius. His career can be divided into several key phases.</p>
                <p>In the early stages of his career, Napoleon gained recognition for his role in the French Revolution. He authored a pro-republican pamphlet, "Le souper de Beaucaire," in 1793, which garnered support and brought him to the attention of influential figures like Augustin Robespierre. He was appointed as a senior gunner and artillery commander during the siege of Toulon. His brilliant tactics led to the capture of the city and earned him a promotion to brigadier general at the age of 24.</p>
                <p>Napoleon's military career reached its zenith during the Napoleonic Wars, a series of conflicts that involved most of Europe. He became Emperor of the French in 1804 and embarked on a series of military campaigns across Europe, known as the Napoleonic Wars. His Grande Armée achieved remarkable victories, expanding the French Empire and bringing much of Europe under his control. However, his ambitions eventually led to his downfall.</p>
                <p>In 1814, following his defeat and exile to the island of Elba, Napoleon escaped and briefly returned to power during the Hundred Days. However, he was defeated at the Battle of Waterloo in 1815 and was exiled to the remote island of Saint Helena, where he spent the remainder of his life until his death in 1821.
                </p>
                <p>Napoleon's legacy is profound. He left an indelible mark on France and the world through his legal reforms, administrative innovations (such as the Napoleonic Code), and the spread of the principles of the French Revolution. His military strategies continue to be studied and admired, but his relentless pursuit of power and expansion also led to significant conflicts and suffering. Napoleon Bonaparte remains a complex and enduring figure in history, celebrated for his brilliance and criticized for his thirst for conquest.</p>
            </div>
        </div>
    )
}
export default Home