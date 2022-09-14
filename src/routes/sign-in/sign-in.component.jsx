import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  //   signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
const SingIn = () => {
  useEffect(() => {
    async function getResult() {
      const response = await getRedirectResult(auth);
      if (response) {
        await createUserDocumentFromAuth(response.user);
      }
    }
    getResult();
  }, []);

  const loginGoogleUserPopup = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign-In is working</h1>
      <SignUpForm></SignUpForm>
      <button onClick={loginGoogleUserPopup}>Sign in with google popup</button>
    </div>
  );
};

export default SingIn;
