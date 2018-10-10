<template>
    <div class="posts-tab">
       <ul class="posts-sidebar">
           <li
            v-for="post in posts"
            :key="post.id"
            :class="{selected: post === selectedPost}"
            @click="selectedPost = post"
           >{{post.title}}</li>
       </ul>  
       <div class="selected-post-container">
           <div
            v-if="selectedPost"
            class="selected-post"
           >
            <h3>{{selectedPost.title}}</h3>
            <div v-html="selectedPost.content"></div>
           </div>
           <strong v-else>
               Click on a blog title to the left to view it.
           </strong>
       </div>
    </div>
</template>
<script lang="ts">
import {Vue, Component } from 'vue-property-decorator'

const posts = [
        {
          id: 1,
          title: 'Cat Ipsum',
          content: '<p>Dont wait for the storm to pass, dance in the rain kick up litter ',
        },
        {
          id: 2,
          title: 'Hipster Ipsum',
          content: '<p>Bushwick blue bottle scenester helvetica ugh, meh four loko. Put a',
        },
        {
          id: 3,
          title: 'Cupcake Ipsum',
          content: '<p>Icing dessert soufflé lollipop chocolate bar sweet tart cake chupa ',
        },
      ]
@Component
export default class TabPosts extends Vue {
    public posts: any[] = posts
    public selectedPost: any = null

}
</script>
<style lang="sass" scoped>


</style>
