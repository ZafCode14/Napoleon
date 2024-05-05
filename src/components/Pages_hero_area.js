import React from "react";
import PrevNext from "../components/PrevNext"

function Hero_pages(props) {
    return (
        <div className="hero_area_pages">
            <div className="left_hero_area">
                <img src={props.data.img} alt={props.data.title}/>
            </div>
            <div className="right_hero_area">
                <h2>{props.data.chapter}</h2>
                <p>{props.data.text}</p>
                <PrevNext id={props.data.id}/>
            </div>
        </div>
    )
}
export default Hero_pages