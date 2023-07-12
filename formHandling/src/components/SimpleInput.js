import React from "react";
import useInput from "../hooks/use-input";

function fn(value) {
  return value.trim() !== "";
}
function fn2(value) {
  return value.includes("@");
}

const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: inputNameIsInvalid,
    isValid: enteredNameIsValid,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(fn);

  const {
    value: enteredMail,
    hasError: inputMailIsInvalid,
    isValid: enteredMailIsValid,
    valueChangeHandler: MailChangeHandler,
    valueBlurHandler: MailBlurHandler,
    reset: resetMail,
  } = useInput(fn2);

  let formIsValid = false;
  if (enteredMailIsValid && enteredNameIsValid) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
    resetName();
    resetMail();
  };

  const NameStyle = inputNameIsInvalid
    ? "form-control invalid"
    : "form-control";
  const MailStyle = inputMailIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className={NameStyle}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {inputNameIsInvalid && <p> name can't be blank</p>}
      </div>

      <div className={MailStyle}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          onChange={MailChangeHandler}
          onBlur={MailBlurHandler}
          value={enteredMail}
        />
        {inputMailIsInvalid && <p> enter a valid email </p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
