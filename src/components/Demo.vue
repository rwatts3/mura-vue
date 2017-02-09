<template>
	<div id="mura-demo">
		<div class="row">
			<div class="card grey lighten-2 z-depth-3">
				<div class="card-content">
					<span class="card-title text-center">{{title}}</span>
					<slot name="description">
						<div v-if="description">
							{{description}}
						</div>
					</slot>
				</div>
				<div class="card-action">
					<slot name="snippet">
						<code v-if="snippet">
							{{snippet}}
						</code>
					</slot>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'mura-demo',
		props: ['title', 'description', 'snippet'],
		data () {
			return {
					computedName: this.title,
				}
			}
	}
</script>

<style scoped>
	.test h1 { color: #40b883; }
</style>
