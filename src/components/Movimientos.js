import React from 'react'
import { useParams } from 'react-router'
import {Link, useLocation} from "react-router-dom";
export const Movimientos = () => {
    //console.log(useParams())
    const {id} =useParams()
    const location = useLocation()
    const {name, saldo} = location.state

    const MESES = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ];
      let data = (d)=>{
        return MESES[d]
        
      }

    const [movimiento, setMovimiento] = React.useState([])

    React.useEffect(()=>{
        const obtenerDatos = async ()=>{
            const data = await fetch(` https://indra-a01eo.herokuapp.com/indra-recruitment/api/account-detail?id=${id}`)
            const movimientos = await data.json()
            setMovimiento(movimientos)
         }
        obtenerDatos()
    }, [id])

    

    return (
        <> 
            <div className="barra-superior">
                <div className="bs-container">
                    <Link to="/" className="button-bs">x</Link>
                </div>
            </div>
            <section className="container">
                <div className="container-title">
                    <h2>{name}</h2>
                    <h3>S/ {saldo}</h3>
                    <p className="title-contenedor">Saldo disponible</p>
                </div>
            </section>
            <section className="container-movimiento">
                <p className="subTitulo-contenedor">ÚLTIMOS MOVIMIENTOS</p>
                {
                    movimiento.map(item=>{
                        
                        return <>
                            <div key={item.id} className="contenedor-mov">
                                <div className="fecha">{item.dateoperation.substr(7,2)+' '+data(item.dateoperation.substr(5,1)) + ' '+item.dateoperation.substr(0,4)}</div>
                                <div className="left">{item.description.lenght >= 13 ? item.description :item.description.substr(0,13)+'...'}</div>
                                <div className="right">S/ {item.amount}</div>
                            </div>
                            <hr className="line"/>
                        
                        </>
                        
                    }
                        
                        
                    
                    )
                }
                
            </section>
        </>
    )
}
export default Movimientos
