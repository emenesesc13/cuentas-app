import React from 'react'
import {Link} from 'react-router-dom'

export const Cuentas = () => {
    const [cuenta, setCuenta] = React.useState([])

    React.useEffect(()=>{
        //console.log('use efect')
        obtenerDatos()
    }, [])

    const obtenerDatos = async ()=>{
        const data = await fetch('https://indra-a01eo.herokuapp.com/indra-recruitment/api/accounts')
        const cuentas = await data.json()
        //console.log(cuentas)
        setCuenta(cuentas)
     }
    return (
        <>
        <section className="container">
            <p className="title-contenedor">CUENTAS</p>
            {
                cuenta.filter(item=>{return item.status==='ACTIVE' && item.type ==='ACCOUNT'})
                .map(item =>(
                <div className="container-cuenta" key={item.id}>
                    <div className="left">
                        <p className="title-cuenta">
                            <Link 
                                to={`/movimientos/${item.id}`} 
                                state={
                                    {
                                        name:item.name,
                                        saldo:item.balance.toFixed(2)
                                    }
                                    }>
                            { item.name }
                            </Link>
                            
                            </p>
                        <p><b>*{ item.number }</b></p>
                    </div>
                    <div className="right">
                        <p>S/ {item.balance.toFixed(2)}</p>
                        <p className="saldo">Saldo disponible</p>
                    </div>
                    <div className="nn"></div>
                </div>
                ))
                
            }
            
            
        </section>
        <section className="container">
            <p className="title-contenedor">TARJETAS</p>
            {
                cuenta.filter(item=>{return item.status==='ACTIVE' && item.type ==='CREDIT_CARD'})
                .map(item =>(
                <div className="container-cuenta" key={item.id}>
                    <div className="left">
                        <p className="title-cuenta">
                            <Link 
                                to={`/movimientos/${item.id}`} 
                                state={
                                    {
                                        name:item.name,
                                        saldo:item.balance.toFixed(2)
                                    }
                                    }>
                            { item.name }
                            </Link>
                            
                        </p>
                        <p><b>*{ item.number }</b></p>
                    </div>
                    <div className="right">
                        <p>S/ {item.balance.toFixed(2)}</p>
                        <p className="saldo">Saldo disponible</p>
                    </div>
                    <div className="nn"></div>
                </div>
                ))
                
            }
            
            
        </section>
        </>
    )
}

export default Cuentas;