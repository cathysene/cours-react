import React, { useState } from 'react'
import "./assets/css/conteur.css";

const Conteur = () => {
    const [nombre, setNombre] = useState(1);
    const [desactiverReduction, setDesactiverReduction] = useState(false)
    const augmenter = () => {
    //  setNombre(nombre + 1)
    setNombre(nombre < 10 ? nombre + 1 : nombre)
     }
    const reduction = () => {
        // setNombre(nombre - 1) 
        
        setNombre(nombre > 0 ? nombre - 1 : nombre)
         nombre === 1 ? setDesactiverReduction(true) : setDesactiverReduction(false)
    }
  return (
    <div className='conteur'>
      <h1>Conteur</h1>
      <div className="container">
        <button 
            className={desactiverReduction ? `btn disable` : "btn"}
            
            onClick={reduction}
        >-</button>
        <span>{nombre}</span>
        <button className='btn' onClick={augmenter}>+</button>
        </div>
    </div>
    
  )
}

export default Conteur
