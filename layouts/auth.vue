<template>
    <div>
        <slot v-if="checkUserState" />
    </div>
</template>

<script setup lang="ts">
import {Auth} from '~/services/FirebaseAuth/authentication';
const router = useRouter();
const FirebaseAuth = Auth();
const checkUserState = ref(false);
onMounted(()=>{    
    console.log('default layout');
    FirebaseAuth.auth.onAuthStateChanged((user) => {
        if (user) {
          checkUserState.value = false;
          router.push('/edit');
          console.log('user',user);
        } else {
        checkUserState.value = true;
          console.log('user', 'User is signed out');
        }
      });
})
</script>
