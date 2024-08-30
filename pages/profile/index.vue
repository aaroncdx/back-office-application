<template>
    <div>
        asdfasd
    </div>
</template>

<script lang="ts" setup>
import {FireStore} from '~/services/fireStore';
import {FireStorage} from '~/services/fireStorage';
import {USERS_COLLECTION} from '~/ultilities/Constants/fireCollectionConstants'

const storeServices = FireStore();
const imgServices = FireStorage();
const router = useRouter();
const route = useRoute();

onMounted(async()=>{
    console.log(route.query.id);
    let response = await storeServices.read(USERS_COLLECTION,route.query.id)
    console.log('response', response);
    let responseImg = await imgServices.downloadImg(response.profile_pic_ref);
    console.log('response', responseImg);
})
</script>