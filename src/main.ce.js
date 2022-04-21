import { defineCustomElement } from "vue";

import MyFirstCustomElement from '@/elements/MyFirstCustomElement.ce.vue'

window.customElements.define('my-first-custom-element',
           defineCustomElement(MyFirstCustomElement))
