import React from 'react'
import Filter from '../../components/Filter/Filter'
import Hightlights from '../../components/Highlights/Highlights'
import Clients from '../../components/Clients/Clients'
import Head from '../../components/Head/Head'

function Home (){


    return(
        <div>
          <Head/>
          <Filter/>
          <Hightlights/>
          <Clients/>
        </div>
    )
}

export default Home