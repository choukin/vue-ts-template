<!--  -->
<template>
  <div>
      {{label}}
  </div>
</template>

<script lang="ts">
import {Vue, Component, Inject} from 'vue-property-decorator'
@Component
export default class InjectComponent extends Vue {
  @Inject({from: 'name'})
  public label?: string
}
</script>
<style lang='scss' scoped>
</style>