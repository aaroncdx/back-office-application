<template>
    <a-layout style="min-height: 100vh" class="default-container">
      <MenuBar/>
      <a-layout>
        <a-layout-content style="margin: 20px; margin-top: 2rem;">
          <!-- <a-layout-header style="background: #fff; padding: 0" /> -->
            <slot  />
            <a-layout-footer style="text-align: center">
              Ant Design ©2018 Created by Ant UED
            </a-layout-footer>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </template>

  <script lang="ts" setup>

  </script>

<style scoped>
.default-container {
  @apply h-screen;
  touch-action: pan-y;
}
</style>