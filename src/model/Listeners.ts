export default class Listeners {
    public vm: any;
    constructor(vm: any) {
        this.vm = vm
    }
    public input(event: any) {
        this.vm.$emit('input', event.target.value)
    }
    public focus(event: any) {
        event.target.style.background = 'red'
    }
}
