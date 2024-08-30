<template>
    <div>
         <!-- <div class="btn-container">
             <div class="display-container"> 
                <a-avatar src="https://firebasestorage.googleapis.com/v0/b/back-office-application-9ce82.appspot.com/o/3hznphdmZE?alt=media&token=3c5e3523-836d-4163-b1cc-30a714421884" class="m-auto" :size="40">
                    <template #icon><UserOutlined /></template>
                </a-avatar>
            </div>
            <h1 class="text-sc-body1">Dashboard</h1>
            <a-button type="primary" shape="circle" size="large" class="p-2" @click="navigateAddEmployee()">
                    <PlusOutlined />
            </a-button>
         </div> -->
         <EmployeeList/>
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
    Layout:"default"
})
const router = useRouter();
const navigateAddEmployee = async() => {
    return router.push('add');
}
</script>
<style src="./dashboard.scss" lang="scss" scoped></style>