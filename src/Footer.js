import './Footer.css'
import { Link } from "react-router-dom";

function Footer() {
    function TopLink() {
        window.scrollTo(0, 0);
    }
    return (
        <footer>
            <div className='footer_container'>
                <div className='f_left'></div>
                <div className='f_middle'>
                    <Link className='link' onClick={TopLink} to={'/'}>
                        <p>Home</p>
                    </Link>
                    <Link className='link' onClick={TopLink} to={'/'}>
                        <p>About</p>
                    </Link>
                    <Link className='link' onClick={TopLink} to={'/'}>
                        <p>Timeline</p>
                    </Link>
                    <Link className='link' onClick={TopLink} to={'/'}>
                        <p>Quotes</p>
                    </Link>
                </div>
                <div className='f_right'>
                    <p>Contact Us:</p>
                    <p>Email: myemail@gmail.com</p>
                </div>
            </div>
            <p className='copyright_message'>&copy; 2023 Napoleon Website. All rights reserved.</p>
        </footer>
    )
}
export default Footer