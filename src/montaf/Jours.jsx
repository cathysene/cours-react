import React, { useState } from 'react'

const Jours = () => {
  const [para,setPara] = useState("")
  
  return (
    <>
    <input type="text"  placeholder='ecriver ' onChange ={(e)=>setPara(e.target.value)} />
    <button onClick={para}>click</button>
    </>
  )
}

export default Jours


    

