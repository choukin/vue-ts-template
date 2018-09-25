
<template>
    <li>{{todo.text}}</li>
</template>
<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator'
import {Todo} from '@/model/todo'
@Component
export default class TodoItem extends Vue {
    @Prop() public todo!: Todo; // ! 显式赋值断言 使用它来告诉TypeScript一个属性会被明确地赋值
}
</script>

