import React from 'react'
import Filter from '../../components/Filter/Filter'
import Hightlights from '../../components/Highlights/Highlights'
import Clients from '../../components/Clients/Clients'

function Home (){


    return(
        <div>
          <Filter/>
          <Hightlights/>
          <Clients/>
        </div>
    )
}

export default Home