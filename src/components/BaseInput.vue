<template>
    <label for="">
        {{label}}
        <input
            v-bind="$attrs"
            v-bind:value="value"
        v-on="inputListeners"
        >
    </label>
</template>
<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator'
// import Listeners from '@/model/Listeners'


@Component
export default class BaseInput extends Vue {
    @Prop() public label!: string;
    @Prop() public value!: string;
    public inheritAttrs: boolean =  false
    public get inputListeners() {
        const vm = this
        const listeners  = {
            input: (event: any) => {
                vm.$emit('input', event.target.value)
            },
            focus: (event: any) => {
                event.target.style.background = 'red'
            },
        }
        return Object.assign({},
            vm.$listeners,
            listeners,
        )
    }
}
</script>

