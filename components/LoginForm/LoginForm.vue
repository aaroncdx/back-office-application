<template>
  <div class="form-container">
    <div class="header-container">
      <span class="header">Login</span>
      <span class="caption">Login to continue using the app</span>
    </div>
    <a-form
    class="form"
    :model="formState"
    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
    >
      <a-form-item
      label="Username"
      name="username"
      :rules="[{ required: true, message: 'Please input your username!' }]"
      >
          <a-input v-model:value="formState.username" />
      </a-form-item>
  
      <a-form-item
      label="Password"
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]"
      >
          <a-input-password v-model:value="formState.password" />
      </a-form-item>
  
      <a-form-item class="mt-10">
          <a-button
          class="w-full"  
          type="primary"  
          shape="round" 
          size="large" 
          html-type="submit">
            Log in
          </a-button>
      </a-form-item>
    </a-form>
  </div>
  </template>

  <script lang="ts" setup>
  import {Auth} from '~/services/FirebaseAuth/authentication';
  import { useAuthStore } from "~/stores/authStore";

  const FirebaseAuth = Auth();
  const authStore = useAuthStore();
  const router = useRouter();
  
  const formState = ref({
    username: '',
    password: '',
    remember: true,
  });
  
  const onFinish = async (values: any) => {
    FirebaseAuth.auth.signInWithEmailAndPassword(formState.value.username,formState.value.password)
    .then((userCredential) => {
      let setUser = {
        displayName : userCredential.user?.displayName,
        email : userCredential.user?.email,
        phoneNumber : userCredential.user?.phoneNumber,
        photoURL : userCredential.user?.photoURL,
        uid : userCredential.user?.uid,
      }
    authStore.setUser(setUser);
    router.push('/edit');
    })
    .catch((error) => {
    console.log('error', error);
    });
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  </script>
  <style src="./LoginForm.scss" lang="scss" scoped></style>
  