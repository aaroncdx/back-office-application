<template>
    <div class="flex flex-col gap-3">
        <InputText :fieldTitle="'First Name'" :placeholder="'Enter First Name'" v-model="EmergencyContactInfo.name" />
        <InputText :fieldTitle="'Relationship'" :placeholder="'Enter Relationship'" v-model="EmergencyContactInfo.relationship" />
        <PhoneNumberInput :fieldTitle="'Phone Number'" :placeholder="'Enter Phone Number'" v-model="EmergencyContactInfo.phone"/>
    </div>
</template>

<script lang="ts" setup>
    const EmergencyContactInfo = reactive({
    name: '',
    phone: '',
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
