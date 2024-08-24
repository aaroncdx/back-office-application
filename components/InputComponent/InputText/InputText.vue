<template>
    <div class="input-text-container">
        <div class="field-title ">{{ fieldTitle }} :</div>
        <a-input  v-model:value="input_field_data" :placeholder="placeholder" />
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  fieldTitle:{
    type: String
  },
  placeholder:{
    type:String
  }
});

const input_field_data = defineModel();

const { fieldTitle, placeholder } = props;
</script>


<style lang="scss" scoped>
.input-text-container {
  @apply flex flex-col gap-3;

  .field-title {
    @apply  text-sc-subtitle1;
  }
}
</style>