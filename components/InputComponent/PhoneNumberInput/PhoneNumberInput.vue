<template>
    <div class="input-text-container">
        <div class="field-title ">{{ fieldTitle }} :</div>
        <MazPhoneNumberInput
            v-model="phoneNumber"
            show-code-on-list
            v-model:country-code="countryCode"
            :preferred-countries="['MY', 'SG']"
            @update="results = $event"
        />
        
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

const { fieldTitle, placeholder } = props;

const phoneNumber = defineModel()
const countryCode = ref('MY')
const results = ref()

</script>


<style lang="scss" scoped>
.input-text-container {
  @apply flex flex-col gap-1;

  .field-title {
    @apply  text-sc-subtitle1;
  }
}
</style>