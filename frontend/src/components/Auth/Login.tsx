
import { auth, googleProvider } from "../../firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";


function Login() {

    
    const signInWithGoogle = async () => {
        try {
          await signInWithPopup(auth, googleProvider);
        } catch (err) {
          console.error(err);
        }
    };

    const logout = async () => {
        try {
          await signOut(auth);
        } catch (err) {
          console.error(err);
        }
    };

	return (
	<div>
      <button onClick={signInWithGoogle}> Sign In With Google</button>
      <button onClick={logout}> Logout </button>
    </div>
	);
}

export default Login;
