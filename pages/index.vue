<template>
    <div>
        hellllloo
    </div>
</template>

<script setup lang="ts">
import {onMounted, computed, reactive } from "vue";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

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


const register = async () => {
    const auth = firebase.auth();
    firebase.auth().createUserWithEmailAndPassword('aaroncdx@gmail.com', "aaron123")
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


onMounted(async ()=>{
console.log(useRuntimeConfig());
await register();
console.log('finish on mounted');

})

</script>
