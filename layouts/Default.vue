<template>
    <div>
        <slot v-if="checkUserState" />
    </div>
</template>

<script setup lang="ts">
import {Auth} from '~/services/FirebaseAuth/authentication';
import {useAuthStore} from '~/stores/authStore';

const FirebaseAuth = Auth();
const authStore = useAuthStore();
const router = useRouter();
const checkUserState = ref(false);

onMounted(()=>{    
    console.log('default layout');
    console.log('user data', authStore.user);
    
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