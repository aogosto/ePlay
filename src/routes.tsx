import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

const Rotas = () => {
    return (
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
        </Routes>
    )
}

export default Rotas
