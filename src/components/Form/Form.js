import React,{useContext}from "react";
import "./Form.scss";
import { useForm } from "react-hook-form";
import { MyContext } from "../../Context/Context";

export default function Form() {
  const { register,  handleSubmit } = useForm();
  const { isSummer } = useContext(MyContext);


  const onSubmit = (value, e) => {
    e.preventDefault();
  };
  return (
    <form className={isSummer?"form-main-summer":"form-main-winter"} onSubmit={handleSubmit(onSubmit)}>
        <h1> Contact Us</h1>
      <input
        type="text"
        name="name"
        ref={register({ required: true })}
        placeholder="Name"
      />
            <input
        type="text"
        name="email"
        ref={register({ required: true })}
        placeholder="E-mail"
      />
            <input
            id='form-message'
        type="text"
        name="message"
        ref={register({ required: true })}
       
      />
       <input
         
        type="submit"
        value="SEND"
       
      />
      
    </form>
  );
}
