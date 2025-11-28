import { Link } from 'react-router-dom'
import * as F from './styles'

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <F.Container>
            <div className="container">
                <div className="components">
                    <div>
                        <h3>Categorias</h3>
                        <ul>
                            <li>
                                <Link to={'/'}>RPG</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Ação</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Aventura</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Esportes</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Simulação</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Estratégia</Link>
                            </li>
                            <li>
                                <Link to={'/'}>FPS</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Acesso Rápido</h3>
                        <ul>
                            <li>
                                <Link to={'/'}>Novidades</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Promoções</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Em Breve </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <p className="small">
                    {year} &copy; Aogosto. All rights reserved. All trademarks
                    and registered trademarks are the property of their
                    respective owners.
                </p>
            </div>
        </F.Container>
    )
}

export default Footer
