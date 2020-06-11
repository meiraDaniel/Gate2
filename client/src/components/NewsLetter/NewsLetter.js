import React,{useContext,useState} from 'react'
import "./NewsLetter.scss"
import { MyContext } from "../../Context/Context";
import { useForm } from "react-hook-form";

export default function Newsletter (){
    const { isSummer} = useContext(MyContext);
    const {handleSubmit,register,errors } = useForm();
const[flag,set] =useState(false)

const onSubmit = (value,e)=>{
    e.preventDefault()
    set(!flag)
    console.log(value)
}
    return(
        <div className={isSummer?"newsLetter--main-summer":"newsLetter--main-winter"}>
<h1> News Letter
</h1>
<form  onSubmit={handleSubmit(onSubmit)} className={isSummer?"newsletter--center--box-summer":"newsletter--center--box-winter"}>

    <div className="newsletter--top-box">
            <label htmlFor="email">E-mail</label>
            <input type='email' name='email'    ref={register({ required: true })} />
            {errors.email && <p>Ops, don't forget to enter your email</p>}

    </div>
    <div className="newsletter--bottom-box">
                    <input id={isSummer?"submit-summer":"submit-winter" }type='submit'  value="SUBSCRIBE"/>

    </div>
    <h2 onClick={()=>set(!flag)} className={flag?'snackbar':'snackclose'}>Now you will recieve our newsletter</h2>

    </form>

       </div>
    )
}