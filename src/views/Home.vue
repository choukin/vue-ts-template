<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import gitHubAPI, {SearchUser} from '@/common/api/githubapi'
import API from '@/common/api/index'
@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  public created() {
    // API.fetchToken()
    // .then((response) => {
    //   console.log(response)
    // }).catch((error) => {
    //   console.log(error)
    // })
    console.log(process.env.VUE_APP_HOST)
    const params = {
      q: '1',
    }
    gitHubAPI.fetchUser(params)
    .then((response) => {
      console.log(response)
    })
    .catch((e) => {
      console.log(e)
    })
  }
}
</script>
<style lang="sass" scoped>
@import '../assets/css/home.scss'
</style>

