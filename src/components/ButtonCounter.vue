<template>
    <button @click="counter++">you clicked me {{counter}} times</button>
</template>
<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator'

@Component
export default class ButtonCounter extends Vue {
    public counter: number = 0; // ! 显式赋值断言 使用它来告诉TypeScript一个属性会被明确地赋值
}
</script>

