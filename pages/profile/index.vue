<template>
    <div class="profile-container">
        <a-avatar :src="userProfileUrl" class="m-auto" :size="150">
            <template #icon><UserOutlined /></template>
        </a-avatar>
        <div class="text-sc-h6">{{ userData.first_name }} {{ userData.last_name }}</div>
        <a-divider>personal</a-divider>
        <a-divider>Job Information</a-divider>
        <a-divider>Emergency Contact Information</a-divider>
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

const userData = ref({});
const userProfileUrl = ref('');

onMounted(async()=>{
    userData.value = await storeServices.read(USERS_COLLECTION,route.query.id)
    console.log(userData.value);
    userProfileUrl.value = await imgServices.downloadImg( userData.value.profile_pic_ref);
})
</script>
<style lang="scss" src="./profile.scss" scoped></style>