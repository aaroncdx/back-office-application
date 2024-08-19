<template>
    <div class="default-container">
        <slot v-if="checkUserState" />
    </div>
</template>

<style scoped>
.default-container {
  @apply h-screen m-5;
  touch-action: pan-y;
}
</style>

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
        } else {
        checkUserState.value = true;
          console.log('user', 'User is signed out');
        }
      });
})
</script>
