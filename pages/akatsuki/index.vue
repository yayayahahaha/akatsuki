<template>
	<div>
		<p v-text="msg"></p>
		<p>useless css code like top without position in hire page (https://aktsk.com.tw/tw_recruit/interview/day01_engineer.html)</p>
		<p>url with .html, which means without router or any front-end framework?</p>

	</div>
</template>

<style></style>

<script>
	export default {
		asyncData: function(context) {

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