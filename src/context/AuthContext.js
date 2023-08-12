import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase";

const loginWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    return result;
  } catch (error) {
    return error;
  }
};

const sighOutUser = () => {
  return new Promise((resolve, reject) => {
    signOut(auth)
      .then(() => {
        console.log("signout successfully");
        resolve();
      })
      .catch((error) => {
        console.lo00g(error);
        reject(error);
      });
  });
};

export { loginWithGoogle, sighOutUser };
