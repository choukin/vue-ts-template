<!--  -->
<template>
  <div>
      <button @click="show=!show">
        Toggle
        </button>
      <transition name="fade">
        <p v-if="show"> fade</p>
      </transition>
      <div>
        css 过渡<br/>
        <button @click="showcss = !showcss">
          Toggle render
        </button>
        <transition name="slide-fade">
            <p v-if="showcss">slide fade</p>
        </transition>
      </div>
      <div>
        css 动画<br>
        <button @click="ashow=!ashow">
           animation toogle
        </button>
        <div></div>
        <transition name="bounce">
          <p v-if="ashow">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vero numquam necessitatibus laborum dolorem nam aliquid enim. Rerum, maxime. Veritatis eius doloribus provident amet consequatur a maxime nam quia accusantium.</p>
        </transition>
      </div>

      <div>
        animate.css <br>
        <button @click="showacss = !showacss">
          toggle animate render
        </button>

        <transition
         name="custom-classes-transition"
         enter-active-class="animated tada"
         leave-active-class="animated bounceOutRight"
        >
        <p v-if="showacss">hello</p>
        
        </transition>
      </div>
  </div>
</template>

<script lang="ts">
import 'animate.css/animate.css'
import {Vue, Component, Prop, Emit, Watch} from 'vue-property-decorator'
@Component
export default class DemoComponent extends Vue {
  public show: boolean = true
  public showcss: boolean = true
  public ashow: boolean = true
  public showacss: boolean = true

}
</script>
<style lang='scss' scoped>
// 进入时和离开时
.fade-enter-active, .fade-leave-active{
  transition: opacity 2s;
}
// 进入前 和进入后
.fade-enter, .fade-leave-to{
  opacity: 0;
}
// 进入
.slide-fade-enter-active{
  transition: all .3s ease;
}
// 离开
.slide-fade-leave-active{
  transition: all .8s cubic-bezier(1.0, 0.5,0.8,1.0)
}

.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(10px);
  opacity: 0;
}

// 动画
.bounce-enter-active{
  animation: bounce-in .5s;
}
.bounce-leave-active{
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in{
  0%{
    transform: scale(0)
  }
  50%{
    transform: scale(1.5)
  }
  100% {
    transform: scale(1)
  }
}
</style>