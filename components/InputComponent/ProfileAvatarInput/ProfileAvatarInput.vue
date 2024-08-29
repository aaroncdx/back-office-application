<template>
    <div id="app">
      <vue-avatar
      :width=200
      :height=200
      :borderRadius="200" 
      :rotation="rotation"
      :scale="scale"
      ref="vueavatar"
      @vue-avatar-editor:image-ready="onImageReady"
      >
    </vue-avatar>
    <br>
    scale
    <a-slider v-model:value="scale" :min="1" :max="3" :step="0.02"/>
    rotation
    <a-slider v-model:value="rotation" :min="1" :max="360" :step="1"/>
    <br>
    <button v-on:click="saveClicked">Click</button>
    <br>
    <img ref="image">
</div>
</template>

<script lang="ts" setup>
import { VueAvatar } from "vue-avatar-editor-improved";

const rotation = ref(0);
const scale = ref(1);
const borderRadius = ref(0);
const vueavatar = ref<any>(null);
const image = ref<any>(null);
const avatarFile = ref();

const onImageReady = () => {
    scale.value = 1;
    rotation.value = 0;
};

const openFileInput = () => {
    vueavatar.value.clicked();
};

const saveClicked = async () => {
    var img = vueavatar.value.getImageScaled();

    avatarFile.value = img.toDataURL().split(",");

    console.log( avatarFile.value);
    
};

</script>