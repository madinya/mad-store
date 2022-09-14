import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
const SingIn = () => {
  const loginGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign-In is working</h1>
      <button onClick={loginGoogleUser}>Sign in with google popup</button>
    </div>
  );
};

export default SingIn;
