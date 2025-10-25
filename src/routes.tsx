import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Categories from './pages/Categories'

const Rotas = () => {
    return (
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route
                path="/categories"
                element={<Categories></Categories>}
            ></Route>
        </Routes>
    )
}

export default Rotas
