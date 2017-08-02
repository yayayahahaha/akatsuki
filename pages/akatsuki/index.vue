<template>
	<div>
		<div class="background-class">
			<template v-for='time in backTimes'>
				<span class="back_word" v-for='item in backWord' v-text='item'></span>
			</template>
		</div>
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
			function messArray(array) {
			  var currentIndex = array.length, temporaryValue, randomIndex;
			  while (0 !== currentIndex) {
			    randomIndex = Math.floor(Math.random() * currentIndex);
			    currentIndex -= 1;
			    temporaryValue = array[currentIndex];
			    array[currentIndex] = array[randomIndex];
			    array[randomIndex] = temporaryValue;
			  }
			  return array;
			}
			var char = 'qazwsxedcrfvtgbyhnujmikolpQAZWSXEDCRFVTGBYHNUJMIKOLP0123456789',
				tempArray = [], bigArray = [];

				for (var i = 0; i < char.length; i++) {
					tempArray[i] = char[i];
				}

				for (var i = 0; i < 30; i++) {
					tempArray = messArray(tempArray);
					bigArray = bigArray.concat(tempArray);
				}

			return {
				msg:'hello',
				backWord: bigArray,
				backTimes: 1
			}
		},
		mounted: function() {
			window.word = document.querySelector(".background-class");
			window.h = window.innerHeight;
			console.log(h, word.offsetHeight);
			if (h > word.offsetHeight) {
				this.backTimes = Math.ceil(h/word.offsetHeight);
				console.log(this.backTimes);
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