<!--  -->
<template>
  <div class="loader-07"></div>
</template>

<script lang="ts">
import {Vue, Component, Prop, Emit, Watch} from 'vue-property-decorator'
@Component
export default class LoadingComponent extends Vue {
    public mounted() {
        alert(1)
    }
}
</script>
<style lang='scss' scoped>
.loader-07 {
    border: 0 solid transparent;
    border-radius: 50%;
    position: relative;
}
.loader-07:before,
.loader-07:after {
    content: '';
    border: .2em solid currentcolor;
    border-radius: 50%;
    width: inherit;
    height: inherit;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-animation: loader-07 1s linear infinite;
    animation: loader-07 1s linear infinite;
    opacity: 0;
}
.loader-07:before {
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
}
.loader-07:after {
    -webkit-animation-delay: .5s;
    animation-delay: .5s;
}
@-webkit-keyframes loader-07 {
    0% {
        -webkit-transform: scale(0);
        transform: scale(0);
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 0;
    }
}
@keyframes loader-07 {
    0% {
        -webkit-transform: scale(0);
        transform: scale(0);
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 0;
    }
}
</style>