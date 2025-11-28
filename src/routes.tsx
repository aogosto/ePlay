import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Details from './pages/Details'

const Rotas = () => {
    return (
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route
                path="/categories"
                element={<Categories></Categories>}
            ></Route>
            <Route path="/details/:id" element={<Details></Details>}></Route>
        </Routes>
    )
}

export default Rotas
