import './footer.css'
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

function Footer(){
    return(
        <footer className='footer'>
            <ul className='socialList'>
                <li> <FaFacebook /> </li>
                <li> <FaInstagram/> </li>
                <li> <FaLinkedin /> </li>
            </ul>
            <p> <span>Direitos Autorais - Felipe Oliveira </span> &copy; 2022 </p>
        </footer>
    )
}
export default Footer;