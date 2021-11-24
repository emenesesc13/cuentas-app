import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inicio } from "./components/Inicio";
import Movimientos from "./components/Movimientos";
export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/movimientos/:id" element={<Movimientos/>} />
            </Routes>
            <Routes>
                <Route path="/" element={<Inicio/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default AppRouter
