<template>
	<div>
		<div class="background-class">
			<template v-for='time in backTimes'>
				<span :class="item.className" v-for='item in backWord' v-text='item.char'></span>
			</template>
		</div>

		<div class="full_container">
			<div class="main_container">
				<p v-text="msg" v-for='time in 300'></p>
				<p>useless css code like top without position in hire page (https://aktsk.com.tw/tw_recruit/interview/day01_engineer.html)</p>
				<p>url with .html, which means without router or any front-end framework?</p>
			</div>
		</div>

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

				for (var i = 0; i < 1; i++) {
					tempArray = messArray(tempArray);
					bigArray = bigArray.concat(tempArray);
				}
				bigArray = bigArray.map(function(item) {
					var className = null;
					switch (item.toLowerCase()) {
					    case "k":
					    	className = "back_word red";
					        break;
					    case "a":
					    	className = "back_word yellow";
					        break;
					    case "t":
					    	className = "back_word blue1";
					        break;
					    case "s":
					    	className = "back_word blue2";
					        break;
					    case "u":
					    	className = "back_word green1";
					        break;
					    case "k":
					    	className = "back_word green2";
					        break;
					    case "i":
					    	className = "back_word purple";
					        break;
					    default:
					    	className = "back_word";
					}
					return {
						char: item,
						className: className
					};
				})

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
				this.backTimes = Math.ceil(2 * h/word.offsetHeight);
				console.log(this.backTimes);
			}
		},
		head: function(context) {
			return {
				link:[{
					rel:"stylesheet" ,
					type:"text/css" ,
					href:"/css/akatsuki.css"
				}],
				meta:[{
					name:"viewport",
					content:"width=device-width, height=device-height, initial-scale=1.0"
				}]
			};
		}
	}
</script>