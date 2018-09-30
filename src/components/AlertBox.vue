<template>
    <div class="demo-alert-box">
        <strong>Error!</strong>
        <slot></slot>
    </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
@Component
export default class AlertBox extends Vue {
    private version: string = '0.0.1'
}
</script>
<style lang="scss" scoped>
.demo-alert-box{
    padding: 10px 20px;
    background: #f3beb8;
    border: 1px solid #f09898;
}
</style>

