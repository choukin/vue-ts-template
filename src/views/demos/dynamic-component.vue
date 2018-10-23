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
import { log } from 'util';
import LoadingComponent from '@/components/dynamic/LoadingComponent.vue'
// import TabArchive from '@/components/dynamic/TabArchive.vue'
// import TabPosts from '@/components/dynamic/TabPosts.vue'
const AsyncComponent = (): any => ({
  // 需要加载的组件 (应该是一个 `Promise` 对象)
  component: import('@/components/dynamic/TabPosts.vue'),
  // 异步组件加载时使用的组件
  loading: LoadingComponent,
  // 加载失败时使用的组件
//   error: ErrorComponent,
  // 展示加载时组件的延时时间。默认值是 200 (毫秒)
  delay: 20000,
  // 如果提供了超时时间且组件加载也超时了，
  // 则使用加载失败时使用的组件。默认值是：`Infinity`
  timeout: 30000,
})

@Component({
    components: {
        'tab-archive': () => import('@/components/dynamic/TabArchive.vue'),
        'tab-posts': AsyncComponent,
    },
})
export default class DynamicComponent extends Vue {
    public currentTab: string = 'Archive'
    public tabs: string[] = ['Posts', 'Archive']

    get currentTabComponent() {
        console.log(this.$root);
        return 'tab-' + this.currentTab.toLowerCase()
    }
}
</script>
// @import '../../assets/css/tab.scss'
<style lang="scss">

.tab-button {
    padding: 6px 10px;
    border-top-left-radius:3px;
    border-top-right-radius:3px;
    border:1px solid #ccc;
    background:#f0f0f0;
    margin-bottom:-1px;
    margin-right:-1px;
    &:hover{
        background:#e0e0e0;
    }
    &.active{
        background:#e0e0e0;
    }
}
.tab{
    border:1px solid #ccc;
    padding:10px;
}
.posts-tab{
    display:flex;
    .posts-sidebar{
        max-width:40vw;
        margin:0;
        padding:0 10px 0 0;
        list-style-type:none;
        border-right:1px solid #ccc;
        li{
            white-space:nowrap;
            text-overflow:ellipsis;
            overflow:hidden;
            cursor:pointer;
            &:hover{
                background:#eee;
            }
            &.selected{
                background:lightblue;
            }
        }
    }
    .selected-post-container{
        padding-left:10px;
        &> :first-child{
            margin-top:0;
            padding-top:0;
        }
    }
}
</style>


