<template>
    <li>
        {{title}}
<button @click="$emit('remove')">删除</button>
    </li>
</template>
<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator'
import {Todo} from '@/model/todo'
@Component
export default class SimpleTodoItem extends Vue {
    @Prop() public title!: string; // ! 显式赋值断言 使用它来告诉TypeScript一个属性会被明确地赋值
}
</script>
