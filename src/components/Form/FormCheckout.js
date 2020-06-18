import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { MyContext } from "../../Context/Context";
import "./FormCheckout.scss";
import { useHistory } from "react-router-dom";

export default function FormCheckout() {
  const { setTours_selected } = useContext(MyContext);
  const { register, handleSubmit } = useForm();
  const [language, setLanguage] = useState();
  const history = useHistory();

  const onSubmit = (value, e) => {
    e.preventDefault();
  };

  const handleselect = (value) => {
    setLanguage(value);
  };

  const handleOnClick = () => {
    setTours_selected({
      type: "BUY",
      selected: [],
    });
    history.push("/home");
  };

  const languages = [
    "portuguese",
    "english",
    "spanish",
    "japonese",
    "dutch",
    "german",
    "french",
    "italian",
    "other",
  ];

  return (
    <form className="formCheckout--main" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        name="name"
        ref={register({ required: true })}
        placeholder="John Doe"
      />
      <div className="checkout--display-flex">
        <div className="display-column">
          <label>E-mail</label>

          <input
            type="text"
            name="email"
            ref={register({ required: true })}
            placeholder="johndoe@email.com"
          />
        </div>
        <div className="display-column">
          <label>Mobile Number</label>
          <input
            type="number"
            name="phone"
            ref={register({ required: true })}
          />
        </div>
      </div>
      <div className="checkout--display-flex">
        <div className="display-column">
          <label>Birthday</label>

          <input
            type="date"
            name="birthday"
            ref={register({ required: true })}
          />
        </div>
        <div className="display-column">
          <label>Language</label>
          <select
            onChange={(e) => handleselect(e.target.value)}
            name="language"
            id="language"
          >
            <option value="">Select language</option>
            {languages.map((e) => (
              <option value={e}>{e}</option>
            ))}
          </select>
        </div>
      </div>
      {language === "other" ? (
        <input
          type="text"
          name="language"
          ref={register({ required: false })}
          placeholder="Which Language"
        />
      ) : null}

      <input
        type="text"
        name="information"
        ref={register({ required: false })}
        placeholder="Extra information"
      />
      <div className="checkout--display-flex-buttons">
        <button id="submit-button"></button>
        <button className="checkout--buttons" onClick={handleOnClick}>
          {" "}
          Cancel{" "}
        </button>
      </div>
    </form>
  );
}
