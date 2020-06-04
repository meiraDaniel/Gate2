import React from 'react'

function LandingPage ({togleSummer}){

    return(
        <div>
<button onClick={()=>togleSummer(true)}>Summer</button>
<button onClick={()=>togleSummer(false)}>Winter</button>

        </div>
    )
}

export default LandingPage