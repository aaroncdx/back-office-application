<template>
    <div class="add-container">
        <div class="header">Add Employee</div>
       
        <div class="form-container">
            <ProfileAvatarInput/>
            <a-divider>Personal Information</a-divider>
            <InputText :fieldTitle="'First Name'" :placeholder="'Enter First Name'" v-model="user.name" />
            <InputText :fieldTitle="'Last Name'" :placeholder="'Enter Last Name'" v-model="user.name"/>
            <InputText :fieldTitle="'Email Name'" :placeholder="'Enter Email'" v-model="user.name"/>
            <AddressInput ref="addressFormRef"/>
            <a-divider>Job Information</a-divider>
            <JobInformation />
            <a-divider>Emergency Contact Information</a-divider>
            <EmergencyContactInformation/>
            <a-button @click="submit()">Default Button</a-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
    Layout:"default"
})

const user = ref({
    name:''    
})

const addressFormRef = ref(null);

const submit = () => {
    let address = addressFormRef.value.getAddressData();
    console.log('user data', user.value, address);
    
}
</script>

<style lang="scss" src="./add.scss" scoped></style>
