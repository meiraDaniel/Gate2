import React,{useContext} from "react";
import Form from "../../components/Form/Form";
import"./Contact.scss"
import { MyContext } from "../../Context/Context";

export default function Contact() {
    const { isSummer } = useContext(MyContext);

  return (
    <div className={isSummer?"contact--main-summer":"contact--main-winter"}>
      <Form />
    </div>
  );
}
