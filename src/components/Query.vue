<template>
	<div :id="'mura_' + id">
		<slot v-if="results" :results="results"></slot>
	</div>
</template>

<script>
	import axios from 'axios';

	export default {
		name: 'mura-query',
		props: {
			id: { type: String, required: false },
			src: { type: String, required: true },
			method: { type: String, required: false, default: 'findQuery' },
			siteid: { type: String, required: true, default: 'default' },
			entityname: { type: String, required: false, default: 'content' },
			fields: { type: String, required: false, default: ''},
			maxitems: { type: String, required: false, default: ''},
			itemsperpage: { type: String, required: false, default: ''},
			pageindex: { type: String, required: false, default: '' },
			sort: { type: String, required: false, default: '' },
			cachedwithin: { type: String, required: false, default: '' }

		},
		data() {
			return {
				results : {}
			}
		},
		beforeMount () {
			return axios.get(`${this.src}/_api/json/v1/`, {
				params: {
					entityname: this.entityname,
					method: this.method,
					siteid: this.siteid,
					fields: this.fields,
					maxitems: this.maxitems,
					itemsperpage: this.itemsperpage,
					pageindex: this.pageindex,
					sort: this.sort,
					cachedwithin: this.cachedwithin
				}
			})
			.then((res)=> {
				console.log(res);
				this.results = res.data.data;
			})
		}
	}
</script>