<template>
<div>
    <button
        v-for="tab in tabs"
        v-bind:key="tab"
        :class="['tab-button', {active:currentTab === tab}]"
        @click="currentTab = tab"
    >
  {{tab}}
    </button>
    <keep-alive>
       <component :is="currentTabComponent"
        class="tab"
       ></component>
    </keep-alive>
    </div>
</template>
<script lang="ts">
import {Vue, Component } from 'vue-property-decorator'
import TabArchive from '@/components/dynamic/TabArchive.vue'
import TabPosts from '@/components/dynamic/TabPosts.vue'
@Component({
    components: {
        'tab-archive': TabArchive,
        'tab-posts': TabPosts,
    },
})
export default class DynamicComponent extends Vue {
    public currentTab: string = 'Posts'
    public tabs: string[] = ['Posts', 'Archive']

    get currentTabComponent() {
        return 'tab-' + this.currentTab.toLowerCase
    }
}
</script>
<style lang="sass" scoped>
@import '../../assets/css/tab.scss'
</style>


