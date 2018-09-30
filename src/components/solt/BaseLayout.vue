<template>
<div class="container">
    <header>
     <slot name="header"></slot>
    </header>
    <main>
        <slot>i am default content</slot>
    </main>
    <footer>
        <slot name="footer"></slot>
    </footer>
</div>    
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'

@Component
export default class BaseLayout extends Vue {

}
</script>

