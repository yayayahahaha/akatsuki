<template>
	<div>
		<p>{{msg}}</p>
	</div>
</template>

<style></style>

<script>
	export default {
	    asyncData: function(context) {
	        return {
	            msg: context.params
	        };
	    },
	    data: function() {
	        return {

	        };
	    },
	    head: function(context) {
	    	if (context) {
	    		console.log(context.msg);
	    		return{
		    		title: context.msg.gameId
		    	};
	    	}else{
	    		console.log(context);
		    	return {
		    		title: this.msg
		    	}
	    	}
	    }
	}
</script>