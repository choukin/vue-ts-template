<template>
    <input type="checkbox" v-bind:checked="checked" @change="$emit('changename', $event.target.checked)">
</template>
<script lang="ts">
import {Vue, Component, Prop, Model} from 'vue-property-decorator'
@Component
export default class BaseCheckbox extends Vue {
    @Model('changename', {type: Boolean}) public checked!: boolean

}
</script>

