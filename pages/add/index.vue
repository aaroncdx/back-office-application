<template>
    <div class="add-container">
        <div class="header">Add Employee</div>
       
        <div class="form-container">
            <div class="m-auto lg:col-span-2">
                <ProfileAvatarInput/>
            </div>
            <div>
                <a-divider>Personal Information</a-divider>
                <InputText :fieldTitle="'First Name'" :placeholder="'Enter First Name'" v-model="user.name" />
                <InputText :fieldTitle="'Last Name'" :placeholder="'Enter Last Name'" v-model="user.name"/>
                <InputText :fieldTitle="'Email Address'" :placeholder="'Enter Email Address'" v-model="user.name"/>
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
definePageMeta({
    Layout:"default"
})

const user = ref({
    name:'',
    lastName:'',
    email:'',
    phone_num: '',    
})

const addressFormRef = ref(null);

const submit = () => {
    let address = addressFormRef.value.getAddressData();
    console.log('user data', user.value, address);
    
}
</script>

<style lang="scss" src="./add.scss" scoped></style>
