<template>
    <div class="p-5">
        <a-form
        :model="formState"
        name="basic"
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
    
        <a-form-item name="remember" >
            <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
        </a-form-item>
    
        <a-form-item >
            <a-button type="primary" shape="round" html-type="submit">Submit</a-button>
        </a-form-item>
        </a-form>
    </div>
  </template>
  <script lang="ts" setup>
  import { reactive } from 'vue';
  import {Auth} from '~/services/FirebaseAuth/authentication';

  const FirebaseAuth = Auth();
  const router = useRouter();
  
  interface FormState {
    username: string;
    password: string;
    remember: boolean;
  }
  
  const formState = reactive<FormState>({
    username: '',
    password: '',
    remember: true,
  });
  
  const onFinish = async (values: any) => {
    FirebaseAuth.auth.signInWithEmailAndPassword(formState.username,formState.password)
    .then((userCredential) => {
    console.log('userCredential',userCredential);
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
  
  