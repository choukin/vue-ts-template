<template>
    <input :value="value"
    @input="$emit('input', $event.target.value)">
</template>
<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator'
@Component
export default class CustomInput extends Vue {
    @Prop() public value: string = ''
}
</script>

