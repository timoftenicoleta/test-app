import heart from '../assets/heartIcon.svg';
import logo from '../assets/logo.svg';
import { useNavigate } from 'react-router-dom';

function Header () {
    const navigate = useNavigate();
    return(
        <nav>
            <div className='nav-images-container'>
                <span>
                    <img src={logo} alt="logo image"/>
                </span>
                <button className='favorite-page-button' onClick={()=>navigate('/favorite') }>
                    <img src={heart} alt="heart image"/>
                </button>
            </div>
        </nav>
    );
}

export default Header;