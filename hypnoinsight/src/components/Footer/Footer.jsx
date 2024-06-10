import "./Footer.scss";
import {Link} from 'react-router-dom';
import TikTok from '../../assets/icons/tiktok.png';
import Facebook from '../../assets/icons/facebook.png';
import Instagram from '../../assets/icons/instagram.png';
import LinkedIn from '../../assets/icons/linkedin.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__start-journey">
                    <div className="footer__tag">
                        Start your journey towards a happier, healthier, and more fulfilling life.
                    </div>
                    <div className="footer__booknow">
                        <Link to="/booknow">
                            BOOK NOW
                        </Link>
                    </div>
                </div>
                <div className="social-media">
                    <div className="social-media__title">
                        Follow:
                    </div>
                    <div className="social-media__icons">
                        <a href="https://tiktok.com/@Jassteena" target="_new">
                            <img className="social-media__icon" src={TikTok} alt="tiktok" />
                        </a>
                        <a href="https://facebook.com/EmpowermentVoyage" target="_new">
                            <img className="social-media__icon"  src={Facebook} alt="facebook" />
                        </a>
                        <a href="https://instagram.com/Empowerment_Voyage" target="_new">
                            <img className="social-media__icon"  src={Instagram} alt="instagram" />
                        </a>
                        <a href="https://linkedin.com/in/Jassteena" target="_new">
                            <img className="social-media__icon"  src={LinkedIn} alt="linkedin" />
                        </a>
                    </div>
                </div>
            </div>
            <div>
                Copyright &copy;2024 Empowerment Voyage
            </div>
        </footer>
    )
}

export default Footer;