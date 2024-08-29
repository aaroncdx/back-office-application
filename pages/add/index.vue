<template>
    <div class="add-container">
        <div class="header">Add Employee</div>
       
        <div class="form-container">
            <div class="m-auto lg:col-span-2">
                <ProfileAvatarInput ref="profileAvatarRef"/>
            </div>
            <div>
                <a-divider>Personal Information</a-divider>
                <InputText :fieldTitle="'First Name'" :placeholder="'Enter First Name'" v-model="user.first_name" />
                <InputText :fieldTitle="'Last Name'" :placeholder="'Enter Last Name'" v-model="user.last_name"/>
                <InputText :fieldTitle="'Email Address'" :placeholder="'Enter Email Address'" v-model="user.email"/>
                <PhoneNumberInput :fieldTitle="'Phone Number'" :placeholder="'Enter Phone Number'" v-model="user.phone_num"/>
                <AddressInput ref="addressFormRef"/>
            </div>
           <div>
            <a-divider>Job Information</a-divider>
            <JobInformation ref="jobInformationRef" />
            <a-divider>Emergency Contact Information</a-divider>
            <EmergencyContactInformation ref="emergencyContactInformationRef"/>
           </div>
            <a-button class="mt-10 w-full lg:col-span-2 lg:w-1/2 m-auto" type="primary" size="large" @click="submit()">
                <PlusOutlined class="mb-5"/> Add Employee
            </a-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {FireStore} from '~/services/fireStore';
import {FireStorage} from '~/services/fireStorage';
import {USERS_COLLECTION} from '~/ultilities/Constants/fireCollectionConstants'
import {GenerateHelper} from '~/ultilities/Helper/generateHelper';

definePageMeta({
    Layout:"default"
})

const user = ref({
    first_name:'',
    last_name:'',
    email:'',
    phone_num: '',    
})
const storeServices = FireStore();
const imgServices = FireStorage();
const generateId = GenerateHelper();
const addressFormRef = ref(null);
const jobInformationRef = ref(null);
const emergencyContactInformationRef = ref(null);
const profileAvatarRef = ref(null);


const submit = async () => {
    let address = addressFormRef.value.getAddressData();
    let job_info = jobInformationRef.value.getJobInformation();
    let emergency_info = emergencyContactInformationRef.value.getEmergencyContactInfo();
    let profileAvatar = await profileAvatarRef.value.getProfileAvatarSource();
    
    let profile_pic_ref = await generateId.generateID();

    let userData = {
        ...user.value,
        ...address,
        ...job_info,
        ...emergency_info,
        profile_pic_ref
    }


    storeServices.add(USERS_COLLECTION, userData);
    imgServices.uploadImg(profile_pic_ref,profileAvatar);
}
</script>

<style lang="scss" src="./add.scss" scoped></style>
