import { Link } from 'react-router-dom'
import * as H from './styles'

const Header = () => {
    return (
        <H.Container>
            <div className="container">
                <ul>
                    <li>
                        <Link to={'/'}>Home </Link>
                    </li>
                    <li>
                        <Link to={'/categories'}>Categorias</Link>
                    </li>
                    <li>
                        <Link to={'/'}>Novidades</Link>
                    </li>
                    <li>
                        <Link to={'/'}>Promoções</Link>
                    </li>
                </ul>
                <Link to={'/'}>Carrinho</Link>
            </div>
        </H.Container>
    )
}

export default Header
