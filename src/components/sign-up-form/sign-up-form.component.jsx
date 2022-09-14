import { useState } from "react";
import {
  createAuthUserWithUserAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      console.log("before createAuthUserWithUserAndPassword");
      const { user } = await createAuthUserWithUserAndPassword(email, password);
      console.log("result createAuthUserWithUserAndPassword ");
      console.log(user);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log(err);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label>Display name</label>
        <input
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        ></input>

        <label>Email</label>
        <input
          type="email"
          required
          onChange={handleChange}
          value={email}
          name="email"
        ></input>

        <label>Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          value={password}
          name="password"
        ></input>

        <label>Confirm password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          value={confirmPassword}
          name="confirmPassword"
        ></input>

        <button type="submit"> Sign up</button>
      </form>
    </div>
  );
};
export default SignUpForm;
