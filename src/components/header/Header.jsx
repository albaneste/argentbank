import '../header/header.css'
import logo from '../../assets/argentBankLogo.png'

function Header() {
    return (
            <div className='header'>
                <img src={logo} alt='Logo Argentbank' className='logo' />
            </div>
    )
}

export default Header