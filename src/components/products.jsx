import React from 'react'

function products() {
    const productos = [
        {
            id: 1,
            title: "Tablero",
            price: 58000,
            description: "Tablero de madera"
        },
        {
            id: 2,
            title: "Tablero 2",
            price: 158000,
            description: "Tablero de madera pro"
        }
    ]
  return (
    <div className=''>
        {
            productos.map(
                product => {
                    return <div className="product">
                        <h1>{product.title}</h1>
                        <p>{product.description}</p>
                        <button>{product.price}</button>
                    </div>
                }
            )
        }
    </div>
  )
}

export default products