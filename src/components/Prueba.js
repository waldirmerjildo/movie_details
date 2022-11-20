import React from 'react'


function Prueba(props) {
  return (
    <div>
      hols prueba
      <h1>
        {props.titulo}
      </h1>
      <h3>{props.contenido}</h3>
    </div>
  )
}

export default Prueba
