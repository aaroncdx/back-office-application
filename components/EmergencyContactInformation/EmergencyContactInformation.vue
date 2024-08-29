<template>
    <div class="flex flex-col gap-3">
        <InputText :fieldTitle="'First Name'" :placeholder="'Enter First Name'" v-model="EmergencyContactInfo.emergency_name" />
        <InputText :fieldTitle="'Relationship'" :placeholder="'Enter Relationship'" v-model="EmergencyContactInfo.relationship" />
        <PhoneNumberInput :fieldTitle="'Phone Number'" :placeholder="'Enter Phone Number'" v-model="EmergencyContactInfo.emergency_phone"/>
    </div>
</template>

<script lang="ts" setup>
    const EmergencyContactInfo = reactive({
    emergency_name: '',
    emergency_phone: '',
    relationship: '',
    });

    const getEmergencyContactInfo = () => {
    return EmergencyContactInfo;
    };

    // Expose the method to parent component
    defineExpose({
        getEmergencyContactInfo
    });
</script>
