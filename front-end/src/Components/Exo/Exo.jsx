import React, { useEffect } from 'react'

function Exo() {



    // get all students

    useEffect(() => {
        fetch('http://localhost:5000/api/students')
            .then(res => res.json())
            .then(data => console.log(data))
    }

    , [])







  return (
    <div>
        <form action="">






        </form>




      
    </div>
  )
}

export default Exo
