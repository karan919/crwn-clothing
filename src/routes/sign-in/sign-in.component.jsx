import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
  auth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  //   useEffect(() => {
  //     redirect();
  //   }, []);

  //   const redirect = async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       console.log(response);
  //       const userDocRef = await createUserDocumentFromAuth(response);
  //     }
  //   };

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      {/* <button onClick={signInWithGoogleRedirect}>Sign in with Redirect</button> */}
      <SignUpForm />
    </div>
  );
};
export default SignIn;
