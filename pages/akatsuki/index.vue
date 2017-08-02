<template>
	<div>
		<p v-text="msg"></p>
	</div>
</template>

<style></style>

<script>
	export default {
		asyncData: function( context ) {
			return {
				msg: 'hello'
			}
		},
		data: function() {
			return {

			}
		}
	}
</script>