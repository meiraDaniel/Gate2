import React,{useContext} from 'react'
import Filter from '../../components/Filter/Filter'
import Hightlights from '../../components/Highlights/Highlights'
import Clients from '../../components/Clients/Clients'
import Head from '../../components/Head/Head'
import "./Home.scss"
import { MyContext } from "../../Context/Context";
import NewsLetter from '../../components/NewsLetter/NewsLetter'
import Footer from '../../components/Footer/Footer'
import Place from '../../components/Place/Place'

function Home (){
  const { isSummer} = useContext(MyContext);


  
    return(
        <div className={isSummer?"main--home-summer":"main--home-winter"}>
          <Head/>
          <Filter/>
          <Hightlights/>
          <Place/>
          <Clients/>
          <NewsLetter/>
          <Footer/>

        </div>
    )
}

export default Home