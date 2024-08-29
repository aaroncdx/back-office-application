<template>
    <div>
        <div class="field-title"> Address :</div>
        <div class="flex flex-col gap-3">
            <a-input size="large" v-model:value="address.street_address" placeholder="Enter Street Address" />
            <a-input size="large" v-model:value="address.street_address_line_2" placeholder="Enter Street Address Line 2" />
            <div class="flex flex-row gap-2">
                <!-- <a-input size="large" v-model:value="address.zip_code" placeholder="Zip Code" /> -->
                <a-select
                  v-model:value="address.zip_code"
                  show-search
                  size="large"
                  placeholder="Select Zip Code"
                  style="width: full"
                  :options="postCodeOptions"
                  :filter-option="filterOption"
                  @change="handleChange"
                />
                <a-input size="large" v-model:value="address.state" placeholder="State" />
            </div>
            <a-input size="large" v-model:value="address.city" placeholder="City" />
            <a-select
            v-model:value="address.country"
            size="large"
            placeholder="Country"
            :options="countriesOptions"
            ></a-select>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineExpose } from 'vue';
import countries from '~/assets/countries.json';
import stateAndCity from '~/assets/stateandcity.json';
import _ from 'lodash'


interface SelectOption {
  value: string;
  label: string;
}


const address = reactive({
  street_address: '',
  street_address_line_2: '',
  zip_code: null,
  state: '',
  city: '',
  country: null
});

onMounted(()=>{
    setCountries();
    setState();
})

const countriesOptions = ref<SelectOption[]>([]);

const postCodeOptions = ref<SelectOption[]>([]);

const setCountries = () =>{
   Object.values(countries).forEach((data:any)=>{
    countriesOptions.value.push({
        value : data.name,
        label: data.name,
      });
    });
};

const setState = () => {
  Object.values(stateAndCity).forEach((data:any) => {
    postCodeOptions.value.push({
      value : data.Code,
      label: data.Code,
    })
  });
}

const handleChange = (value: any) => {
  let result = _.find(Object.values(stateAndCity), { Code: value });
  address.state = result.State;
  address.city = result.City;
};

const filterOption = (input: string, option: any) => {
  return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};

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