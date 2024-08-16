<template>
    <div class="flex flex-col gap-5 justify-center">
        <RegisterForm v-if="form == 'Register'" />
        <LoginForm v-else/>
        <div class="text-center">
          Don't have an account? <span class="text-sc-blue" @click="changeRegisterForm"> Register</span>
        </div>
    </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: "auth",
});
const form = ref('Login');

const changeRegisterForm = () => {
  form.value = 'Register';
}
</script>
