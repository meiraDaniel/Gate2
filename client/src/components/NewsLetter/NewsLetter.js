import React,{useContext} from 'react'
import "./NewsLetter.scss"
import { MyContext } from "../../Context/Context";
import { useForm } from "react-hook-form";

export default function Newsletter (){
    const { isSummer} = useContext(MyContext);
    const {handleSubmit } = useForm();

const onSubmit = (value,e)=>{
    e.preventDefault()
    console.log(value)
}
    return(
        <div className={isSummer?"newsLetter--main-summer":"newsLetter--main-winter"}>
<h1> News Letter
</h1>
<form  onSubmit={handleSubmit(onSubmit)} className={isSummer?"newsletter--center--box-summer":"newsletter--center--box-winter"}>

    <div className="newsletter--top-box">
            <label htmlFor="email">E-mail</label>
            <input type='email' name='email' />

    </div>
    <div className="newsletter--bottom-box">
                    <input id={isSummer?"submit-summer":"submit-winter" }type='submit' value="SUBSCRIBE"/>

    </div>
    </form>


       </div>
    )
}