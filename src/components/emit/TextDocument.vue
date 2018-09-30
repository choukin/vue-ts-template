<template>
    <div>
        <!-- <label v-show="!isEditing" for="" @dblclick="isEditing = true">{{title}}</label>
        <input type="text" v-model="title" v-show="isEditing" @blur="updateTitle"> -->
        <button @click="changeTitle">sync button</button>
        <div>{{content}}</div>
    </div>
</template>
<script lang="ts">
import {Vue, Component, Prop, Emit, Watch} from 'vue-property-decorator'
@Component
export default class TextDocument extends Vue {
    @Prop() public title!: string;
    @Prop() public content!: string;
    public isEditing: boolean = false

    public changeTitle() {
        // this.isEditing = false
        this.$emit('update:title', 'changetitle')
    }
}
</script>
