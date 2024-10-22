import type { App } from 'vue'
import Editor from './Editor.vue'

const install = (app: App) => {
    app.component('DiygwEditor', Editor)
}

export default {
    install
}