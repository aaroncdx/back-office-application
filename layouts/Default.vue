<template>
    <div>
        <slot />
    </div>
</template>

<script setup lang="ts">
onMounted(()=>{
    console.log('Default layout');
    
})
</script>