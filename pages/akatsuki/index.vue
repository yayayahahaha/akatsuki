<template>
	<div>
		<p v-text="msg"></p>
	</div>
</template>

<style></style>

<script>
	export default {
		asyncData: function(context) {

			var array = [];
			if (context) {
				for(var key in context){
					console.log(key);
				}
			}
			return {
				params: context.params
			};
		},
		data: function() {
			return {
				msg:'hello'
			}
		},
		head: function(context) {

			if (context) {
				console.log(context.params);
			}

			return {
				link:[{
					rel:"stylesheet" ,
					type:"text/css" ,
					href:"/css/akatsuki.css"
				}]
			};
		}
	}
</script>