<template>
  <a-table :columns="columns" :row-key="record => record.key" :data-source="data">
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'action'">
        <span>
          <a-button type="link" @click="redirectViewUser(record.id)">View</a-button>
        </span>
      </template>
    </template>
    
  </a-table>
</template>
<script lang="ts" setup>
import type { ColumnsType } from 'ant-design-vue/es/table/interface';
import {FireStore} from '~/services/fireStore';

const storeServices = FireStore();

const columns: ColumnsType = [
  {
    title: 'First Name',
    dataIndex: 'first_name',
    key: 'first_name',
  },
  {
    title: 'Last Name',
    dataIndex: 'last_name',
    key: 'last_name',
  },
  {
    title: 'Job Title',
    dataIndex: 'job_title',
    key: 'job_title',
  },
  // {
  //   title: 'Age',
  //   dataIndex: 'age',
  //   key: 'age',
  //   responsive: ['md'],
  // },
  {
    title: 'Address',
    dataIndex: 'street_address',
    key: 'street_address',
    responsive: ['lg'],
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
  },
];

const data = ref<Object>([]);
const router = useRouter();

onMounted(async ()=>{
  getEmployeeList();
})

const getEmployeeList = async () =>{
  let response =  await storeServices.getUsers();
  data.value = response;  
}

const redirectViewUser = (id:string) =>{
  router.push(`/view?id=${id}`);
}
</script>

