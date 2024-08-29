<template>
    <a-layout style="min-height: 100vh" class="default-container">
      <a-layout-sider v-if="!IsMobileView" v-model:collapsed="isCollapsed" collapsible collapsedWidth="80" width="200">
        <div class="logo" />
        <a-menu :selectedKeys="selectedKeys" theme="dark" mode="inline">
          <a-menu-item key="1">
            <pie-chart-outlined />
            <span>Optiasdfasdfon 1</span>
          </a-menu-item>

          <a-menu-item key="2">
            <desktop-outlined />
            <span>Option 2</span>
          </a-menu-item>

          <a-sub-menu key="sub1">
            <template #title>
              <span>
                <user-outlined />
                <span>User</span>
              </span>
            </template>
            <a-menu-item key="3">Tom</a-menu-item>
            <a-menu-item key="4">Bill</a-menu-item>
            <a-menu-item key="5">Alex</a-menu-item>
          </a-sub-menu>

          <a-sub-menu key="sub2">
            <template #title>
              <span>
                <team-outlined />
                <span>Team</span>
              </span>
            </template>
            <a-menu-item key="6">Team 1</a-menu-item>
            <a-menu-item key="8">Team 2</a-menu-item>
          </a-sub-menu>

          <a-menu-item key="9">
            <file-outlined />
            <span>File</span>
          </a-menu-item>

          <a-menu-item @click=closeMenuBar()>
            close
          </a-menu-item>

        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-content class="p-5">
          <!-- <a-layout-header style="background: #fff; padding: 0" /> -->
            <slot  />
            <!-- <a-layout-footer style="text-align: center">
              Ant Design ©2018 Created by Ant UED
            </a-layout-footer> -->
        </a-layout-content>
      </a-layout>
    </a-layout>
  </template>

<script lang="ts" setup>
const isCollapsed = ref(true);
const selectedKeys = ref<string[]>(['1']);
const IsMobileView = ref(false);

onBeforeMount(()=>{
 
})

onMounted(()=>{
  IsMobileView.value = checkIsMobileView();
});

const checkIsMobileView = () => {
      const mobileBreakpoint = 768;
      return window.innerWidth <= 576;
};

const closeMenuBar = () => {
  return isCollapsed.value = !isCollapsed.value;
}

</script>

<style scoped>
.default-container {
  @apply h-auto;
  touch-action: pan-y;
}
::v-deep(.ant-layout-sider-zero-width-trigger){
   top:0px;
}


</style>
