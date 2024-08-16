<template>
    <div>
        <slot v-if="checkUserState" />
    </div>
</template>

<script setup lang="ts">
import {Auth} from '~/services/FirebaseAuth/authentication';

const FirebaseAuth = Auth();
const router = useRouter();
const checkUserState = ref(false);

onMounted(()=>{    
    console.log('default layout');
    FirebaseAuth.auth.onAuthStateChanged((user) => {
        if (user) {
        checkUserState.value = true;  
          console.log('user',user);
        } else {
            checkUserState.value = false;
            router.push('/');  
          console.log('user', 'User is signed out');
        }
      });
})
</script>