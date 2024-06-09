import "./Footer.scss";
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__tag">
            Start your journey towards a happier, healthier, and more fulfilling life.
            </div>
            <div className="footer__booknow">
                <Link to="/booknow">
                    BOOK NOW
                </Link>
            </div>
            <div>
                Copyright &copy;2024 Empowerment Voyage
            </div>
            
        </footer>
    )
}

export default Footer;