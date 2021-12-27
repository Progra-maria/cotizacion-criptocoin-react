import React from 'react'
import styled from '@emotion/styled'



const Display = styled.div`
        color: #FFF;
        font-family: 'Lato', sans-serif;
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-top: 30px;
`
const Texto = styled.p`
        font-size: 18px;
        span {font-weight: 700;}
`
const Precio = styled.p`
        font-size: 24px;
        span {font-weight: 700;}
`
const Imagen = styled.img`
        display: block;
        width: 120px;
    `



const Cotizacion = ({cotizacion}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = cotizacion
    
    return (
        <Display>
            <Imagen 
            src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen de la criptoneda" 
            />
            <div>
            <Precio>Precio actual: <span> {PRICE}</span></Precio>
            <Texto>Precio máximo de hoy: <span>{HIGHDAY}</span></Texto>
            <Texto>Precio mínimo de hoy: <span>{LOWDAY}</span></Texto>
            <Texto>Variación en las últimas 24h:  <span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>Última actualización:  <span>{LASTUPDATE}</span></Texto>
            </div>
        </Display>
    )
}

export default Cotizacion
