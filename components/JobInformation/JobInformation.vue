<template>
    <div class="job-information-container">
        <div class="rows">
            <InputText :fieldTitle="'Employee ID'" :placeholder="''" v-model="jobInformation.employee_id" />
            <InputText :fieldTitle="'Title'" :placeholder="'Enter Title'" v-model="jobInformation.job_title" />
        </div>
        <InputText :fieldTitle="'Supervisor Name'" :placeholder="'Enter Supervisor Name'" v-model="jobInformation.supervisor" />
        <InputText :fieldTitle="'Department'" :placeholder="'Enter Department'" v-model="jobInformation.department" />
        <div class="rows">
            <InputText :fieldTitle="'Start Date'" :placeholder="'Enter Start Date'" v-model="jobInformation.job_start_Date" />
            <InputText :fieldTitle="'Salary'" :placeholder="'Enter Salary'" v-model="jobInformation.salary" />
        </div>
    </div>
</template>

<script lang="ts" setup>
    const jobInformation = reactive({
    employee_id: '',
    job_title: '',
    supervisor: '',
    department: '',
    job_start_Date:'',
    salary:'',    
    });

    const getJobInformation = () => {
    return jobInformation;
    };

    // Expose the method to parent component
    defineExpose({
        getJobInformation
    });
</script>

<style lang="scss" scoped>
    .job-information-container {
        @apply flex flex-col gap-1;
    }

    .rows{
        @apply flex flex-row gap-1;
    }
</style>