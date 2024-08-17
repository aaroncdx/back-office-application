<template>
    <div class="container" >
        <LoginForm v-if="formState == LOGIN"/>
        <RegisterForm  v-else @update:formState="changeLoginForm"/>
        <div class="text-center">
          Don't have an account? <span class="text-sc-blue" @click="changeRegisterForm"> Register</span>
        </div>
    </div>
    
</template>

<script setup lang="ts">
import {REGISTER,LOGIN} from '~/ultilities/Constants/authConstants' 

definePageMeta({
  layout: "auth",
});
const formState = ref(LOGIN);

const changeRegisterForm = () => {
  formState.value = REGISTER;
}

const changeLoginForm = (value) => {
  formState.value = value;
} 
</script>

<style src="./style.scss" lang="scss" scoped></style>