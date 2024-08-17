<template>
    <div class="register-form-container">
      <a-button size="large" @click="redirectBackLogin">
        <template #icon>
          <LeftOutlined />
        </template>
      </a-button>

      <div class="header-container">
        <span class="header">Register</span>
        <span class="caption">Enter your personal information</span>
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
            <a-input v-model="formState.username"/>
        </a-form-item>

        <a-form-item
        label="Email"
        name="email"
        :rules="[{ required: true, message: 'Please input your email!' }]"
        >
            <a-input v-model="formState.email"/>
        </a-form-item>
    
        <a-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
        >
            <a-input-password v-model="formState.password"/>
        </a-form-item>

        <a-form-item
        label="Confirm Password"
        name="confirmPassword"
        :rules="[{ required: true, message: 'Please input confirm password!' }]"
        >
            <a-input-password v-model="formState.confirmPass"/>
        </a-form-item>
    
        <a-form-item class="mt-10">
            <a-button
            class="w-full"  
            type="primary"  
            shape="round" 
            size="large" 
            html-type="submit">
              Register
            </a-button>
        </a-form-item>
      </a-form>
    </div>
</template>

<script lang="ts" setup>
import {LOGIN} from '~/ultilities/Constants/authConstants' 
import {Auth} from '~/services/FirebaseAuth/authentication';

const FirebaseAuth = Auth();
const router = useRouter();
const emit = defineEmits(["update:formState"]);

const formState = ref({
  username:'',
  email:'',
  password:'',
  confirmPass: ''
})

const redirectBackLogin = () => {
  emit('update:formState', LOGIN )
}

const onFinish = async (values: any) => {
    FirebaseAuth.auth.createUserWithEmailAndPassword(formState.value.email,formState.value.password)
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
<style src="./RegisterForm.scss" lang="scss" scoped></style>