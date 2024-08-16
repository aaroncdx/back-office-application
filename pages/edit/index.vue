<template>
    <div>
        edit
        <a-button @click="logoutOnClick">
            logout
        </a-button>
    </div>
</template>

<script lang="ts" setup>
import {Auth} from '~/services/FirebaseAuth/authentication';
const FirebaseAuth = Auth();
const router = useRouter();

definePageMeta({
    layout:'default'
})

const logoutOnClick = () => {
    FirebaseAuth.auth.signOut().then(() => {
    router.push('/');
    }).catch((error) => {
    // An error happened.
    console.log('firebase signOut error', error);
    });
}
</script> 