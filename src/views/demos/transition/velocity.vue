<!--  -->
<template>
  <div>
      <button @click = "show=!show">
          Toggle
      </button>
      <transition
       @before-enter="beforeEnter"
       @enter="enter"
       @leave="leave"
       :css="false" 
      >
      <p v-if="show"> DEMO</p>
      </transition>
<br>
      <transition name="no-mode-fade"  mode="out-in">
       <button v-if="on" key="on" @click="on = false">
           on
       </button>
       <button v-else key="off" @click="on = true">
           off
       </button>       
      </transition>
      <br>
        <div class="no-mode-absolute-demo-wrapper">
          <transition name="no-mode-absolute-fade">
      <button v-if="on" key="on1" @click="on = false">
        on
      </button>
      <button v-else="" key="off1" @click="on = true">
        off
      </button>
    </transition>
        </div>
      <br>
        <div class="no-mode-translate-demo-wrapper">
          <transition name="no-mode-translate-fade" mode="in-out">
      <button v-if="on" key="on2" @click="on = false">
        on
      </button>
      <button v-else="" key="off2" @click="on = true">
        off
      </button>
    </transition>    
    </div>

    <div class="demo">
        <button @click="add">add</button>
        <button @click="remove">remove</button>
        <transition-group name="list" tag="p">
            <span v-for="item in items" :key="item" class="list-item">
                {{item}}
            </span>
        </transition-group>
    </div>

    <div>
        <button @click="shuffle">
            shuffle
        </button>
        <transition-group name="flip-list" tag="ul">
            <li v-for="item in items" :key="item">
                {{item}}
            </li>
        </transition-group>
    </div>

    <div class="demo">
        <button @click="add">add</button>
        <button @click="remove">remove</button>
                <button @click="shuffle">
            shuffle
        </button>
        <transition-group name="list-complete" tag="p">
            <span v-for="item in items" :key="item+'123'" class="list-complete-item">
                {{item}}
            </span>
        </transition-group>
    </div>    

    <div>
        <strong>lazy sudoku</strong>
        <button @click="shuffleSudoku">shudoku</button>
        <transition-group name="cell" tag="div" class="sudoku-container">
         <div v-for="cell in cells" :key="cell.id" class="cell">
             {{cell.number}}
         </div>
        </transition-group>
    </div>
    <div>
        <input v-model.number="number" type="number" step="20">
        <p>{{animatedNumber}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Prop, Emit, Watch} from 'vue-property-decorator'
import Velocity from 'velocity-animate'
import _ from 'lodash'
import {TweenMax, Power2, TimelineLite} from 'gsap'
@Component
export default class DemoComponent extends Vue {
  public number: number = 0
  public tweenedNumber: number = 0 
  public items: Array<number> = [1,2,3,4,5,6,7,8,9]  
  public cells: Array<any> = Array.apply(null, {length: 81}).map((_: any, id: any)=>{
      return {id,
       number: id % 9 + 1
      }
  })
  public nextNum: number = 10
  public show: boolean = false
  public on: boolean = true
  public get animatedNumber (){
      return this.tweenedNumber.toFixed(0)
  }
  @Watch('number', {immediate: true, deep: true})
  watchNumber(newValue: number) {
    (new TimelineLite()).to(this.$data, 0.5, {tweenedNumber: newValue})
  }

  public beforeEnter(el: HTMLElement) {
      el.style.opacity = '0'
      el.style.transformOrigin = 'left'
  }
  public enter(el: HTMLElement, done: any) {
    Velocity(el, {opacity: 1, fontSize: '1.4em'}, {duration: 300})
    Velocity(el, {fontSize: '1em'}, {complete: done})
  }
  public leave(el: HTMLElement, done: any){
    //   Velocity(el, {translateX: '15px', rotateZ: '50deg'}, {duration: 600})
    // Velocity(el, {opacity: 0, fontSize: '1.4em'}, { duration: 600 })
    // Velocity(el, {translateX: '15px', rotateZ: '50deg'}, {duration: 600})
    //    Velocity(el, {fontSize: 1, fontSize: '1.4em'}, {duration: 300})
    // Velocity(el, {translateX: '1em'}, {complete: done})
    // Velocity(el, {opacity: 1, fontSize: '1.4em'}, {duration: 600})
    // Velocity(el, {translateX: '15px', rotateZ: '50deg',}, {duration: 600,})
    // Velocity(el, { rotateZ: '100deg' }, { loop: '2', })
    // Velocity(el, {
    //     rotateZ: '45deg',
    //     translateY: '30px',
    //     translateX: '30px',
    //     opacity: '0',
    //     }, { complete: done })
    }
    randomIndex () {
        return Math.floor(Math.random() * this.items.length)
    }
    add () {
        this.items.splice(this.randomIndex(), 0, this.nextNum++ )
    }
    remove () {
        this.items.splice(this.randomIndex(), 1)
    }
    shuffle () {
        this.items = _.shuffle(this.items)
    }
    shuffleSudoku() {
        this.cells = _.shuffle(this.cells)
    }
}
</script>
<style lang='scss' scoped>

.sudoku-container {
    display: flex;
    flex-wrap: wrap;
    width: 238px;
    margin-top: 10px;
}
.cell{
    display: flex;
    justify-content: space-around;
    align-items:center;
    width: 25px;
    height: 25px;
    border: 1px solid #aaa;
    margin-right: -1px;
    margin-bottom: -1px;
}
.cell:nth-child(3n){
    margin-right: 0
}
.cell:nth-child(27n){
    margin-bottom: 0;
}
.cell-move{
    transition: transform 1s;
}
.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}


.flip-list-move{
    transition: transform 1s;
}
.list-item{
    display: inline-block;
    margin-right: 10px;

}
    .list-enter-active, .list-leave-active{
        transition:all 1s;
    }
    .list-enter, .list-leave-to {
        opacity: 0;
        transform: translateY(-30px)
    }
    .list-leave-to {
        transform: translateY(30px)
    }
.no-mode-fade-enter-active, .no-mode-fade-leave-active {
    transition: opacity .5s;
}
.no-mode-fade-enter, .no-mode-fade-leave{
    opacity: 0;
}
.no-mode-absolute-demo-wrapper {
  position: relative;
  height: 18px;
}
.no-mode-absolute-demo-wrapper button {
  position: absolute;
}
.no-mode-absolute-fade-enter-active, .no-mode-absolute-fade-leave-active {
  transition: opacity .5s;
}
.no-mode-absolute-fade-enter, .no-mode-absolute-fade-leave-active {
  opacity: 0;
}

.no-mode-translate-demo-wrapper {
  position: relative;
  height: 18px;
}
.no-mode-translate-demo-wrapper button {
  position: absolute;
}
.no-mode-translate-fade-enter-active, .no-mode-translate-fade-leave-active {
  transition: all 1s;
}
.no-mode-translate-fade-enter, .no-mode-translate-fade-leave-active {
  opacity: 0;
}
.no-mode-translate-fade-enter {
  transform: translateX(31px);
}
.no-mode-translate-fade-leave-active {
  transform: translateX(-31px);
}
</style>