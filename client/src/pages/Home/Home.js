import React,{useState} from 'react'
import Filter from '../../components/Filter/Filter'
import Hightlights from '../../components/Highlights/Highlights'

function Home (){


    return(
        <div>
          <Filter/>
          <Hightlights/>
        </div>
    )
}

export default Home