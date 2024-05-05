import { Link } from "react-router-dom";
import data from "../data/data";

function NextPrev(props) {
    function TopLink() {
        window.scrollTo(0, 0);
    }
    var index_next = props.id + 1;
    var index_prev = props.id - 1;
    if (index_prev < 0) {
        return (
            <div className="prev_next_buttons_container">
                <Link onClick={TopLink} to={`/${data[index_next].path}`}>
                    <button>Next</button>
                </Link>
            </div>
        )
    } else if (index_next > 15) {
        return (
            <div className="prev_next_buttons_container">
                <Link onClick={TopLink} to={`/${data[index_prev].path}`}>
                    <button>Prev</button>
                </Link>
            </div>
        )
    } else {
        return (
            <div className="prev_next_buttons_container">
                <Link onClick={TopLink} to={`/${data[index_prev].path}`}>
                    <button>Prev</button>
                </Link>
                <Link onClick={TopLink} to={`/${data[index_next].path}`}>
                    <button>Next</button>
                </Link>
            </div>
        )
    }
}
export default NextPrev