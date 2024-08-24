<template>
    <div class="add-container">
        <div class="header">Add Employee</div>
        <div class="form-container">
            <InputText :fieldTitle="'First Name'" :placeholder="'Enter First Name'" v-model="user.name" />
            <InputText :fieldTitle="'Last Name'" :placeholder="'Enter Last Name'" v-model="user.name"/>
            <InputText :fieldTitle="'Email Name'" :placeholder="'Enter Email'" v-model="user.name"/>
            <!-- <a-button @click="submit()">Default Button</a-button> -->
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

const submit = () => {
    console.log('user data', user.value);
    
}
</script>

<style lang="scss" src="./add.scss" scoped></style>
