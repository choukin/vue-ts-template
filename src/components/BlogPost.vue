<template>
    <div class="blog-post">
        <h3>{{post.title}}</h3>
        <button @click="$emit('enlarge-text', 0.2)">enlarge text</button>
        <div v-html="post.content"></div>
    </div>
</template>
<script lang="ts">
    import {Vue, Component, Prop } from 'vue-property-decorator'
    import Post from '@/model/Post'
    @Component
    export default class BlogPost extends Vue {
        @Prop() private post!: Post
    }
</script>