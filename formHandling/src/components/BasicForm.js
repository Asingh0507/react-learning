import useInput from "../hooks/use-input";


function fn(value) {
  return value.trim() !== "";
}
function fn2(value) {
  return value.includes("@");
}

const BasicForm = (props) => {

  const {
    value: enteredFirstName,
    hasError: firstNameIsInvalid,
    isValid: enteredFirstNameIsValid,
    valueChangeHandler: firstNameChangeHandler,
    valueBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(fn);

  const {
    value: enteredLastName,
    hasError: lastNameIsInvalid,
    isValid: enteredLastNameIsValid,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
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
  if (enteredMailIsValid && enteredFirstNameIsValid && enteredLastNameIsValid) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
    resetFirstName();
    resetLastName();
    resetMail();
  };

  const FirstNameStyle = firstNameIsInvalid
    ? "form-control invalid"
    : "form-control";

  const LastNameStyle = lastNameIsInvalid
    ? "form-control invalid"
    : "form-control";

  const MailStyle = inputMailIsInvalid
    ? "form-control invalid"
    : "form-control";


  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={FirstNameStyle}>
          <label htmlFor='fname'>First Name</label>
          <input type='text' id='fname' onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler} value={enteredFirstName}/>
          {firstNameIsInvalid && <p> first name can't be blank</p>}
        </div>
        <div className={LastNameStyle}>
          <label htmlFor='lname'>Last Name</label>
          <input type='text' id='lname' onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} value={enteredLastName}/>
          {lastNameIsInvalid && <p> last name can't be blank</p>}
        </div>
      </div>
      <div className={MailStyle}>
        <label htmlFor='mail'>E-Mail Address</label>
        <input type='text' id='mail' onChange={MailChangeHandler} onBlur={MailBlurHandler} value={enteredMail}/>
        {inputMailIsInvalid && <p> Enter valid Email</p>}
      </div> 
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
