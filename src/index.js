import Demo from './components/Demo.vue';
import Query from './components/Query.vue';

// Install the components
export function install (Vue) {
	Vue.component('mura-demo', Demo),
	Vue.component('mura-query', Query)
	/* -- Add more components here -- */
}

// Expose the components
export {
	Demo,Query
	/* -- Add more components here -- */
}

/* -- Plugin definition & Auto-install -- */
/* You shouldn't have to modify the code below */

// Plugin
const plugin = {
	/* eslint-disable no-undef */
	version: VERSION,
	install,
}

export default plugin

// Auto-install
let GlobalVue = null
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue
}
if (GlobalVue) {
	GlobalVue.use(plugin)
}
