import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
    return (
        <header className='header'>
            <Link to='/' className='logo'>
                <h1>
                    <img src="/images/logo3.png" alt="Logo principal da loja" />
                </h1>
            </Link>

            <div className='menu'>

                <div className='user'>
                    <i class="fa-solid fa-user"></i>
                    <h4>Login</h4>
                </div>

                <div className='wish-list'>
                    <Link to='/wish-list'>
                        <i className={"fa-solid fa-bookmark"}></i>
                        <h4>Lista de desejos</h4>
                    </Link>
                </div>

                <button className='btn-cart'>
                    <i class="fa-solid fa-cart-shopping"></i>
                    <h4>Carrinho</h4>
                </button>

            </div>

        </header>
    )
}
