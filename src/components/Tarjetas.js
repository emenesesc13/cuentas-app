import React from 'react'

export const Tarjetas = () => {
    return (
        <section className="container">
            <p className="title-contenedor">TARJETAS</p>
            <div className="container-cuenta">
                <div className="cuenta-nombre">
                    <p className="title-cuenta">Visa compras</p>
                    <p>*397</p>
                </div>
                <div className="cuenta-saldo">
                    <p>S/ 1,500.00</p>
                    <p className="saldo">Línea de crédito</p>
                </div>
            </div>
            
        </section>
        
    )
}

export default Tarjetas;