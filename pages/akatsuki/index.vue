<template>
	<div>
		<div class="background-class">
			<template v-for='time in backTimes'>
				<span :class="item.className" v-for='item in backWord' v-text='item.char'></span>
			</template>
		</div>

		<div class="full_container">
			
			<div id="forHeight" style="position: absolute; opacity: 0; pointer-events: none; height: 100vh;"></div>
			<div class="btns">
			    <button class="btn1 btn"></button>
			    <button class="btn2 btn"></button>
			    <button class="btn3 btn"></button>
			    <button class="btn4 btn"></button>
			    <button class="btn5 btn"></button>
			    <button class="btn6 btn"></button>
			    <button class="btn7 btn"></button>
			</div>
			<div class="perspectiveView">
			    <div class="layer layer1">
			        <div class="view view1">
			        	<span class="show_color">s</span>
			        	<span class="hide_color">c</span>
			        	<span class="hide_color">r</span>
			        	<span class="hide_color">o</span>
			        	<span class="show_color">l</span>
			        	<span class="hide_color">l</span>
			        	<span class="hide_color">_</span>
			        	<span class="hide_color">d</span>
			        	<span class="show_color">o</span>
			        	<span class="hide_color">w</span>
			        	<span class="hide_color">n</span>
			        	<span class="hide_color">_</span>
			        	<span class="hide_color">a</span>
			        	<span class="show_color">n</span>
			        	<span class="hide_color">d</span>
			        	<span class="hide_color">_</span>
			        	<span class="hide_color">h</span>
			        	<span class="hide_color">a</span>
			        	<span class="show_color">v</span>
			        	<span class="hide_color">e</span>
			        	<span class="hide_color">_</span>
			        	<span class="hide_color">f</span>
			        	<span class="hide_color">u</span>
			        	<span class="show_color">n</span>
			        	<span class="hide_color">!</span>
			        </div>
			        <div class="view view2">
			            <div class="content">
			            </div>
			        </div>

			        <div class="view view4">
			            <div class="draw">
			            </div>
			        </div>
			        <div class="view view5">view5 </div>
			        <div class="view view6">view6 </div>
			        <div class="view view7">view7 </div>
			        <div class="view view8">view8 </div>
			    </div>
			    <div class="layer layer2">
			        <div class="view view1">                    
			        	<span class="hide_color">s</span>
			        	<span class="show_color">c</span>
			        	<span class="hide_color">r</span>
			        	<span class="hide_color">o</span>
			        	<span class="hide_color">l</span>
			        	<span class="show_color">l</span>
			        	<span class="hide_color">_</span>
			        	<span class="hide_color">d</span>
			        	<span class="hide_color">o</span>
			        	<span class="show_color">w</span>
			        	<span class="hide_color">n</span>
			        	<span class="hide_color">_</span>
			        	<span class="hide_color">a</span>
			        	<span class="hide_color">n</span>
			        	<span class="show_color">d</span>
			        	<span class="hide_color">_</span>
			        	<span class="hide_color">h</span>
			        	<span class="hide_color">a</span>
			        	<span class="hide_color">v</span>
			        	<span class="show_color">e</span>
			        	<span class="hide_color">_</span>
			        	<span class="hide_color">f</span>
			        	<span class="hide_color">u</span>
			        	<span class="hide_color">n</span>
			        	<span class="show_color">!</span>
			        </div>
			        <div class="view view2">
			            <div class="content">
			            </div>
			        </div>

			        <div class="view view4">
			            <div class="draw">
			            </div>
			        </div>
			        <div class="view view5">view5 </div>
			        <div class="view view6">view6 </div>
			        <div class="view view7">view7 </div>
			        <div class="view view8">view8 </div>
			    </div>
			    <div class="layer layer3">
			        <div class="view view1">                    
			        	<span class="hide_color">s</span>
			        	<span class="hide_color">c</span>
			        	<span class="show_color">r</span>
			        	<span class="hide_color">o</span>
			        	<span class="hide_color">l</span>
			        	<span class="hide_color">l</span>
			        	<span class="hide_color">_</span>
			        	<span class="hide_color">d</span>
			        	<span class="hide_color">o</span>
			        	<span class="hide_color">w</span>
			        	<span class="show_color">n</span>
			        	<span class="hide_color">_</span>
			        	<span class="hide_color">a</span>
			        	<span class="hide_color">n</span>
			        	<span class="hide_color">d</span>
			        	<span class="hide_color">_</span>
			        	<span class="show_color">h</span>
			        	<span class="hide_color">a</span>
			        	<span class="hide_color">v</span>
			        	<span class="hide_color">e</span>
			        	<span class="hide_color">_</span>
			        	<span class="show_color">f</span>
			        	<span class="hide_color">u</span>
			        	<span class="hide_color">n</span>
			        	<span class="hide_color">!</span>
			        </div>
			        <div class="view view2">
			            <div class="content">
			            </div>
			        </div>

			        <div class="view view4">
			            <div class="draw">
			            </div>
			        </div>
			        <div class="view view5">view5 </div>
			        <div class="view view6">view6 </div>
			        <div class="view view7">view7 </div>
			        <div class="view view8">view8 </div>
			    </div>
			    <div class="layer layer4">
			        <div class="view view1">                    
			        	<span class="hide_color">s</span>
			        	<span class="hide_color">c</span>
			        	<span class="hide_color">r</span>
			        	<span class="show_color">o</span>
			        	<span class="hide_color">l</span>
			        	<span class="hide_color">l</span>
			        	<span class="hide_color">_</span>
			        	<span class="show_color">d</span>
			        	<span class="hide_color">o</span>
			        	<span class="hide_color">w</span>
			        	<span class="hide_color">n</span>
			        	<span class="hide_color">_</span>
			        	<span class="show_color">a</span>
			        	<span class="hide_color">n</span>
			        	<span class="hide_color">d</span>
			        	<span class="hide_color">_</span>
			        	<span class="hide_color">h</span>
			        	<span class="show_color">a</span>
			        	<span class="hide_color">v</span>
			        	<span class="hide_color">e</span>
			        	<span class="hide_color">_</span>
			        	<span class="hide_color">f</span>
			        	<span class="show_color">u</span>
			        	<span class="hide_color">n</span>
			        	<span class="hide_color">!</span>
			        </div>
			        <div class="view view2">
			            <div class="content">
			            </div>
			        </div>

			        <div class="view view4">
			            <div class="draw">
			            </div>
			        </div>
			        <div class="view view5">view5 </div>
			        <div class="view view6">view6 </div>
			        <div class="view view7">view7 </div>
			        <div class="view view8">view8 </div>
			    </div>
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
				var currentIndex = array.length,
					temporaryValue, randomIndex;
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
				backWord: bigArray,
				backTimes: 1
			}
		},
		mounted: function() {
			window.word = document.querySelector(".background-class");
			window.h = window.innerHeight;
			if (h > word.offsetHeight) {
				this.backTimes = Math.ceil(2 * h/word.offsetHeight);
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