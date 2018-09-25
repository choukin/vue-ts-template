<template>
<div>
    <span v-bind:title="msg">
        鼠标悬停几秒查看时间
    </span>
    <p>{{msg}}</p>
    <button v-on:click="reverseMessage">逆转消息</button>
    <p>{{reverseMsg}}</p>
    <p>{{inputMsg}}</p>
    <input type="text" v-model="inputMsg">
    <ol>
        <TodoItem 
        v-for="item in groceryList"
        v-bind:todo="item"
        v-bind:key="item.id"
        >
        </TodoItem>
    </ol>

        <input type="text" v-model="question">
        <p>{{answer}}</p>
        <img :src="this.avatar_url" alt="">
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import TodoItem from '@/components/todoitem.vue';
import {Todo} from '@/model/todo'
import _ from 'lodash'
import axios from 'axios'
import gitHubAPI, {SearchUser} from '@/common/api/githubapi'
@Component({
    components: {
      TodoItem,
    },
})
export default class Render extends Vue {
  protected debouncedGetAnswer: () => void ;
  private msg: string;
  private avatar_url!: string
  private inputMsg: string = '';
  private question: string = ''
  private answer: string = 'i cannot give you an answer until you ask a question!'
  private groceryList: Todo[] = [
      { id: 0, text: '蔬菜' },
      { id: 1, text: '奶酪' },
      { id: 2, text: '随便其它什么人吃的东西' },
  ]
  constructor() {
      super()
      this.msg = '页面加载于 ' + new Date().toLocaleString()
      this.debouncedGetAnswer = () => { console.log('1') }
  }

  public reverseMessage() {
      this.msg = this.msg.split('').reverse().join('')
  }

 // 计算属性
  public get reverseMsg() {
    return 'computed ' + this.msg.split('').reverse().join('');
  }

  @Watch('question', {immediate: true, deep: true})
  public fetchAnsWer(newQuestion: any, oldQuestion: any) {
      this.answer = 'waitting for you to stop typing...'
      this.debouncedGetAnswer()
  }

  public created() {
      this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  }

  public getAnswer() {
      if (this.question.indexOf('?') === -1) {
          this.answer = 'Questions usually contain a question mark,;-)'
          return
      }

      this.answer = 'thinking'
      const vm = this
      const q = this.question.replace('?', '')
      gitHubAPI.fetchUser({q})
      .then((response) => {
          const item = response.data.items[0]
          vm.answer = _.capitalize(item.login)
          vm.avatar_url = item.avatar_url
      } ).catch((error) => {
          vm.answer = 'Error! ' + error
      })
  }
}
</script>
