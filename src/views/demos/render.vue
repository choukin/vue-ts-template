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
    <ol v-if="groceryList.length">
        <TodoItem  
        class='todo-item'
        :class="{active:isActive}"
        v-for="item in groceryList"
        :todo="item"
        v-bind:key="item.id"
        >
        </TodoItem>
    </ol>

        <input type="text" v-model="question">
        <p>{{answer}}</p>
        <img :src="this.avatar_url" alt="">

        <div class="static" :class="{active:isActive,'text-danger': hasError}"></div>
        <div v-bind:class="[activeClass, errorClass]"></div>
        <div :class="[isActive?activeClass:'', errorClass]" :style="{color: activeColor, fontSize: '12px'}">style</div>
        <div v-bind:style="styleObject" >style</div>
        <div v-if="Math.random() > 0.5">
  Now you see me
</div>
<div v-else>
  Now you don't
</div>

<ul>
    <li v-for="(value, attr ,index) of styleObject">
        {{attr}}-{{value}}-{{index}}
    </li>
    <template v-for="(value, attr ,index) of styleObject">
    <li>{{ value }}</li>
    <li class="divider" role="presentation">{{attr}}</li>
  </template>
    <li v-for="n in even(numbers)">{{n}}</li>
    <li v-for="n in 10" v-if="n>3">1n {{n}}</li>


</ul>

<div>
    <form @submit.prevent="addNewTodo">
        <label for="new-todo">Add a todo</label>
        <input  
        v-model.number="newTodoText"
        id="new-todo"
        placeholder="E.g. feed the cat"
        @keyup.alt.67="addNewTodo"
        >
        <button>Add</button>
    </form>
    <ul>
        <li
            is="simpleTodoItem"
            v-for="(todo, index) in todos"
            v-bind:key="todo.id"
            :title="todo.title"
            @remove="todos.splice(index, 1)"
        ></li>
    </ul>
</div>
<div>
    <button @click="counter+=1">{{counter}} times.</button>
    <button @click.self="greet('he jim', $event)">Greet</button>
</div>
<div>
    <label for="">text</label>
    <input v-model="message" placeholder="eidt me">
    <p>{{message}}</p>
    <label for="">多行文本</label>
    <p style="white-space:pre-line">{{message}}</p>
    <textarea  v-model="message" id="" cols="30" rows="10"></textarea>
<br/>
    <label for="">复选框</label>
    <br/>
    <input type="checkbox" v-model="checked" true-value="yesno"
  false-value="noyes">
    <label for="">{{checked}}</label>

    <input type="checkbox" id="jack" value="jack" v-model="checkedNames">
    <label for="jack">jack</label>
    <input type="checkbox" id="john" value="john" v-model="checkedNames">
    <label for="john">john</label>
    <input type="checkbox" id="mike" value="mike" v-model="checkedNames">
    <label for="mike">mike</label>
    <input type="checkbox" id="tom" value="tom" v-model="checkedNames">
    <label for="tom">tom</label>
    <br>
    <span>checked names:{{checkedNames}}</span>
    <br>
    <label for="">单选按钮</label>
    <input type="radio" id="one" value="one" v-model="picked">
    <label for="one">one</label>
    <input type="radio" id="tow" value="two" v-model="picked">
    <label for="two">two</label>
    <br>
    <span>picked:{{picked}}</span>

    <br>
    <label for="">选择框</label>
    <select  v-model="optionSelected">
        <option value="" disabled>请选择</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
    </select>
    <p>selected:{{optionSelected}}</p>
        <select  v-model="multipleSelected" multiple style="width:50px">
        <option value="" disabled>请选择</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
    </select>
    <p>selected:{{multipleSelected}}</p>

    <select name="" id="" v-model="selectedfor">
        <option v-for="(item, index) in options" :key="index" :value="item.value">{{item.text}}</option>
    </select>

    <input v-model.number="age" type="text">
</div>
<br>
<ButtonCounter/> 
<ButtonCounter/> 
<ButtonCounter/>   
<br>
<div :style="{fontSize:postFontSize+'em'}">
<BlogPost 
    v-for="post in posts"
    :key="post.id"
    :post="post"
    v-bind="post"
    @enlarge-text="onEnlargeText"
    isPublished="false"
/>
</div>
<br>
<CustomInput
v-model="searchText"/>
<br>

<alert-box><div>Something bad happend</div></alert-box>    
<br>
<BaseInput
    v-model="username"
    class="username-input"
    placeholder="Enter your username"
    v-bind:label="'username'"
/>
<br>
<br>
<br>
<!-- <template v-if="loginType=== 'username'">
    <label for="username">username</label>
    <input type="text" placeholder="Enter you username" key="username-input">
</template>
<template v-else >
    <label for="email">Email</label>
    <input type="text" placeholder="Enter your address" key="email-input">
</template>
<button @click="toggle">Toggle login type</button> -->


</div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import TodoItem from '@/components/todoitem.vue';
import {Todo} from '@/model/todo'
import simpleTodoItem from '@/components/stodoitem.vue';
import ButtonCounter from '@/components/ButtonCounter.vue'
import BlogPost from '@/components/BlogPost.vue'
import CustomInput from '@/components/CustomInput.vue'
import AlertBox from '@/components/AlertBox.vue'
import BaseInput from '@/components/BaseInput.vue'
import Post from '@/model/Post'
import _ from 'lodash'
import axios from 'axios'
import gitHubAPI, {SearchUser} from '@/common/api/githubapi'
@Component({
    components: {
      TodoItem,
      simpleTodoItem,
      ButtonCounter,
      BlogPost,
      CustomInput,
      'alert-box': AlertBox,
      BaseInput,
    },
})
export default class Render extends Vue {
    private username: string = ''
    private isPublished: boolean = true
    private searchText: string = ''
    private postFontSize: number = 1
    private posts: Post[] = [
        {
            title: 'my journey with vue',
            content: 'content///....',
        },
        {
            title: 'my journey with vue',
            content: 'content///....',
        },
        {
            title: 'my journey with vue',
            content: 'content///....',
        },
    ]
    private age: number = 0
  private selectedfor: string = 'C'
  private options: any[] = [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' },
  ]
  private optionSelected: string = 'C'
  private multipleSelected: string[] = []
  private picked: string = 'one'
  private debouncedGetAnswer: () => void ;
  private msg: string;
  private avatar_url: string = ''
  private inputMsg: string = '';
  private question: string = ''
  private answer: string = 'i cannot give you an answer until you ask a question!'
  private hasError: boolean = false
  private isActive: boolean = true
  private activeClass: string = 'active'
  private errorClass: string = 'text-danger'
  private activeColor: string = 'yellow'
  private styleObject: object = {
      color: 'red',
      fontSize: '13px',
  }
  private groceryList: Todo[] = [
      { id: 0, text: '蔬菜' },
      { id: 1, text: '奶酪' },
      { id: 2, text: '随便其它什么人吃的东西' },
  ]
  private numbers: number[] = [ 1, 2, 3, 4, 5 ]
  private loginType: string = 'username'
  private newTodoText: string = ''
  private todos: any[] = [
       { id: 1,
        title: 'Do the dishes',
      },
      {
        id: 2,
        title: 'Take out the trash',
      },
      {
        id: 3,
        title: 'Mow the lawn',
      },
  ]
  private nextTodoId: number =  4
  private counter: number = 0
  private message: string = ''
  private checked: boolean = false
  private checkedNames: string[] = ['tom']
  constructor() {
      super()
      this.msg = '页面加载于 ' + new Date().toLocaleString()
      this.debouncedGetAnswer = () => { console.log('1') }
  }
  public onEnlargeText(enlargeAmount: number) {
      this.postFontSize += enlargeAmount
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
      document.addEventListener('copy', this.copy);
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
  public toggle() {
      if (this.loginType === 'username') {
          this.loginType = 'email'
      } else {
        this.loginType = 'username'
      }
  }

  public even(numbers: number[]) {
      return numbers.filter((number) => {
          return number % 2 === 0
      })
  }
  public addNewTodo() {
      this.todos.push({
          id: this.nextTodoId++,
          title: this.newTodoText,
      })
      this.newTodoText = ''
  }
  public greet(message: string, event: any) {
      document.execCommand('copy')
      if (event) {
        // alert(event.target.tagName)
        event.preventDefault();
      }
      alert(event.target.tagName)
      alert(message)
  }
  public copy(onEvent: any) {
    onEvent.preventDefault();
    onEvent.clipboardData.setData('text', '自定义数据');
  }
}
</script>
<style lang="scss" scoped>
.todo-item {
 background-color:blue;
}
.active{
    background-color: red;
}
</style>
