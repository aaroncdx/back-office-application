<template>
    <div>
        <div class="field-title"> Address :</div>
        <div class="flex flex-col gap-3">
            <a-input  v-model:value="address.street_address" placeholder="Enter Street Address" />
            <a-input  v-model:value="address.street_address_line_2" placeholder="Enter Street Address Line 2" />
            <div class="flex flex-row gap-2">
                <a-input  v-model:value="address.zip_code" placeholder="Zip Code" />
                <a-input  v-model:value="address.state" placeholder="State" />
                
            </div>
            <a-input  v-model:value="address.city" placeholder="City" />
            <a-select
            v-model:value="address.country"
            size="middle"
            placeholder="Country"
            :options="countriesOptions"
            ></a-select>
        </div>
    </div>
</template>

<script lang="ts" setup>
import countries from '~/assets/countries.json';
import stateAndCity from '~/assets/stateandcity.json';


interface SelectOption {
  value: string;
  label: string;
}

const address = reactive({
  street_address: '',
  street_address_line_2: '',
  zip_code: '',
  state: '',
  city: '',
  country: null
});

onMounted(()=>{
    setCountries();
})

const countriesOptions = ref<SelectOption[]>([]);

const setCountries = () =>{
   Object.values(countries).forEach((data:any)=>{
    countriesOptions.value.push({
        value : data.name,
        label: data.name,
      });
    });
}

const getAddressData = () => {
  return address;
};

// Expose the method to parent component
defineExpose({
  getAddressData
});

</script>

<style lang="scss" scoped>
  .field-title {
    @apply  text-sc-subtitle1 mb-2;
  }
</style>