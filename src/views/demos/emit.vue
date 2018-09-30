<template>
    <div>
        <basecheckbox v-model="loveValue"  @changename="showinfo"></basecheckbox>
        <TextDocument  :content="doc.content" :title.sync="doc.title"></TextDocument>
        {{doc.title}}
    </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import basecheckbox from '@/components/emit/basecheckbox.vue'
import TextDocument from '@/components/emit/TextDocument.vue'
@Component({
    components: {
        basecheckbox,
        TextDocument,
    },
})
export default class EmitCom extends Vue {
    public doc: any = {
       title: 'title',
       content: 'centent',
    }
    public loveValue: boolean = false
    public showinfo(val: any) {
        alert(val)
    }
    // public handlerTitle(value: string) {
    //     console.log(value)
    //     this.doc.title = value
    // }
}
</script>

