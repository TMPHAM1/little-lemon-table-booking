import HeroLogo from '../../assets/hero-logo.png'
import './header.css';


const Header = () => {
    return (
        <header>
            <div className="hero-container">
                    <div className="hero-description">
                    <h1 className="primary-2" style={{marginBottom: 0}}>Little Lemon</h1>
                    <h4  style={{color: 'white', marginTop: '0'}}>Chicago</h4>
                    <p style={{color: 'white'}}>
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>
                    <button className='little-lemon-btn'><span>Reserve a Table</span></button>
                    </div>
                    <div className='hero-img-container'>
                    <img className="hero-img" src={HeroLogo} />
                    </div>
                   
            </div>
        </header>
    )
}

export default Header;