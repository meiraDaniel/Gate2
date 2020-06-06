import React,{useContext} from 'react'
import Filter from '../../components/Filter/Filter'
import Hightlights from '../../components/Highlights/Highlights'
import Clients from '../../components/Clients/Clients'
import Head from '../../components/Head/Head'
import "./Home.scss"
import { MyContext } from "../../Context/Context";

function Home (){
  const { isSummer} = useContext(MyContext);

    return(
        <div className={isSummer?"main--home-summer":"main--home-winter"}>
          <Head/>
          <Filter/>
          <Hightlights/>
          <Clients/>
        </div>
    )
}

export default Home