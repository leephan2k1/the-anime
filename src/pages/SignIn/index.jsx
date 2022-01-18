import React from "react";
import firebase from "firebase/compat/app";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import "./styles.scss";
import torriImg from "assets/images/torri.jpeg";

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "redirect",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/anime",
  // We will display Google as auth providers.
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

export default function SignIn() {
  return (
    <div
      className="signIn-page w-full d-flex"
      style={{ backgroundImage: `url(${torriImg})` }}
    >
      {/* <img
        className="signIn-page__torri-img w-full h-full"
        src={torriImg}
        alt="torri"
      /> */}
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}
