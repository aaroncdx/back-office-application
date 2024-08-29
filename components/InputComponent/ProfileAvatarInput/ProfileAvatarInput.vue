<template>
    <div class="profile-avatar-container">
        <!-- <div class="display-container"> 
            <a-avatar class="m-auto" :size="100">
                <template #icon><UserOutlined /></template>
            </a-avatar>
            <a-button type="link" @click="showModal">Edit Profile</a-button>
        </div> -->
        <div id="app" v-if="isAvatarEditorOn">
            <vue-avatar
            :width=200
            :height=200
            :borderRadius="200" 
            :rotation="rotation"
            :scale="scale"
            ref="vueavatar"
            @vue-avatar-editor:image-ready="onImageReady"
            />
            <div class="avatar-editor-controller">
                <span>scale</span>
                <a-slider v-model:value="scale" :min="1" :max="3" :step="0.02" />
                <span>rotation</span>
                <a-slider v-model:value="rotation" :min="1" :max="360" :step="1" />
            </div>
            <!-- <button v-on:click="saveClicked">Click</button> -->
            <!-- <img ref="image"> -->
        </div>
    </div>
</template>

<script lang="ts" setup>
import { VueAvatar } from "vue-avatar-editor-improved";

const isAvatarEditorOn = ref(true);
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

<style lang="scss" scoped>
    .profile-avatar-container{
        @apply m-auto;   
    }

    .avatar-editor-controller{
        @apply flex flex-col text-center p-5;
    }

    .display-container{
        @apply flex flex-col gap-2;
    }
</style>