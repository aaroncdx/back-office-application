import firebase from "firebase/compat/app";
import "firebase/compat/auth";


export const Auth = () => {

const router = useRouter();
const config = useRuntimeConfig();
const firebaseConfig = {
    apiKey: `${config.public.firebaseApiKey}`,
    authDomain: `${config.public.firebaseAuthDomain}`,
    projectId: `${config.public.firebaseProjectId}`,
    storageBucket: `${config.public.firebaseStorageBucket}`,
    messagingSenderId: `${config.public.firebaseMessagingSenderId}`,
    appId: `${config.public.firebaseAppId}`,
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

    const signUp = (email: string , password : string) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in 
          console.log('userCredential',userCredential);
          
          var user = userCredential.user;
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log('error', error);
          
          // ..
        });
      
    }

    const signIn = (email: string , password : string) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log('userCredential',userCredential);
            
            // ...
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log('error', error);
            
          });
    }

    const authState = async () => {
      await firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/v8/firebase.User
          var uid = user.uid;
          console.log('user',user);
          // ...
          
        } else {
          // User is signed out
          // ...
          console.log('user', 'User is signed out');
          
        }
      });
    }

    const signOut = () => {
      firebase.auth().signOut().then(() => {
        // Sign-out successful.
        console.log('firebase signOut successful');
        
      }).catch((error) => {
        // An error happened.
        console.log('firebase signOut error', error);
      });
    }
    return {
      auth,
        signUp,
        signIn,
        signOut,
        authState
    }

}