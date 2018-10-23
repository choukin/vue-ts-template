<!--  -->
<template>
  <div>
      {{name}}
      <InjectComponent />   
  </div>
</template>

<script lang="ts">
import {Vue, Component, Provide, Emit, Watch} from 'vue-property-decorator'
import InjectComponent from '@/components/inject/inject.vue'
@Component({
    components: {
        InjectComponent,
    },
})
export default class DemoComponent extends Vue {
  @Provide()
  public name: string = 'foot'
}
</script>
<style lang='scss' scoped>
</style>