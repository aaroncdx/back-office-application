<template>
    <div>
        edit
        <a-button @click="logoutOnClick">
            logout
        </a-button>

        <a-button @click="add">
            add
        </a-button>


        <a-button @click="read">
            read
        </a-button>
    </div>
</template>

<script lang="ts" setup>
import {Auth} from '~/services/FirebaseAuth/authentication';
import {FireStore} from '~/services/fireStore';
const FirebaseAuth = Auth();
const api = FireStore();
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

const add = () => {
    api.test();
}

const read = async () => {
    let response = await api.Read();
    console.log('response', response);
    
}
    

</script> 