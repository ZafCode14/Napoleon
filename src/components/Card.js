import data from "../data/data"
import { Link } from "react-router-dom"

function Card() {

    function TopLink() {
        window.scrollTo(0, 0);
    }
    const cards = data.map(card => {

        const style1 = {
            backgroundColor: "#f4f1eb"
        }
        const style2 = {
            backgroundImage: `url("${card.img}")`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            color: "#f4f1eb"
        }

        if (card.id % 2 === 0)
        {
            return (
                <div className="card_container" style={style1} key={card.id}>
                    <div className="normal_card">
                        <div className="card">
                            <div className="card_image_container">
                                <img className="card_image" src={card.img} alt={card.title}/>
                            </div>
                            <div className="the_line"></div>
                            <div className="card_info_container">
                                <div className="date1">
                                    <div className={card.from ? "bullet_point" : ""}></div>
                                    <h2>{card.from}</h2>
                                </div>
                                <h4>{card.title}</h4>
                                <p>{card.text}</p>
                                <Link key={card.id} onClick={TopLink} to={card.path} style={{textDecoration: 'none'}}>
                                    <button>Read</button>
                                </Link>
                                <div className="date1">
                                    <div className={card.till ? "bullet_point" : ""}></div>
                                    <h3>{card.till}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )
            } else {
                return (
                <div className="card_container" style={style2} key={card.id}>
                    <div className="darken_card">
                        <div className="card">
                            <div className="card_info_container">
                                <div className="date1" style={{alignSelf: "flex-end"}}>
                                    <h2>{card.from}</h2>
                                    <div className={card.from ? "bullet_point" : ""}></div>
                                </div>
                                <h4 className="title">{card.title}</h4>
                                <p>{card.text}</p>
                                <Link key={card.id} onClick={TopLink} to={card.path} style={{textDecoration: 'none'}}>
                                    <button>Read</button>
                                </Link>
                                <div className="date1" style={{alignSelf: "flex-end"}}>
                                    <h4>{card.till}</h4>
                                    <div className={card.till ? "bullet_point" : ""}></div>
                                </div>
                            </div>

                            <div className="the_line"></div>

                            <div className="card_image_container">
                                <img className="card_image" src={card.img} alt={card.title}/>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    })
    return (
        <div className="card_container">
            {cards}
        </div>
    )
}
export default Card;