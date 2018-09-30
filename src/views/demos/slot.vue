<template>
    <baselayout>
        <template slot="header">
            <h1>here might be a page title</h1>
        </template>

        <template slot="footer">
            <p>here's some contact info</p>
        </template>
    </baselayout>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import baselayout from '@/components/solt/BaseLayout.vue'
@Component({
    components: {
        baselayout,
    },
})
export default class Slot extends Vue {

}
</script>

