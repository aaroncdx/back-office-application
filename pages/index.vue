<template>
    <div>
        hellllloo
    </div>
</template>

<script setup lang="ts">
import {onMounted, computed, reactive } from "vue";
import {Auth} from "~/services/FirebaseAuth/authentication"

definePageMeta({
  layout: "auth",
});

const config = useRuntimeConfig();
const firebaseAuth = Auth();   

const register = async () => {
  await firebaseAuth.signUp('aaroncdx@gmail.com',"aaron123");
}

const signIn = async () => {
  await firebaseAuth.signIn('aaroncdx@gmail.com',"aaron123");
}



onMounted(async ()=>{    
await register();
console.log('finish on mounted');
})

</script>
