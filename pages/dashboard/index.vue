<template>
    <div class="flex flex-col gap-5 ">
         <div class="btn-container">
            <h1 class="text-sc-h3">Dashboard</h1>
            <!-- <a-button type="primary" size="large">Add Employee</a-button> -->
            <a-button type="primary" shape="circle" size="large" class="p-2" @click="navigateAddEmployee()">
                <template #icon>
                    <PlusOutlined />
                </template>
            </a-button>
         </div>
         <!-- <EmployeeList/> -->
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
    Layout:"default"
})
const router = useRouter();

const navigateAddEmployee = () => {
    return router.push('add');
}
</script>
<style src="./dashboard.scss" lang="scss" scoped></style>