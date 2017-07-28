<template>
	<p>{{msg}}</p>
</template>

<script>
    export default {
        asyncData: function() {
            return {
                msg: 'hello'
            };
        },
        data: function() {
            return{

            };
        }
    };
</script>