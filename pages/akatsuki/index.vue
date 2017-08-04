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
			<button class="btn8 btn"></button>
			<button class="btn9 btn"></button>
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
						<span class="show_color">我</span>
						<span class="hide_color">是</span>
						<span class="hide_color name_style">鍾</span>
						<span class="hide_color name_style">維</span>
						<span class="show_color name_style">聖</span>
						<br>
						<span class="hide_color">致</span>
						<span class="hide_color">力</span>
						<span class="show_color">於</span>
						<span class="hide_color">做</span>
						<span class="hide_color">出</span>
						<span class="hide_color">令</span>
						<span class="show_color">人</span>
						<span class="hide_color">驚</span>
						<span class="hide_color">豔</span>
						<span class="hide_color">的</span>
						<span class="show_color">網</span>
						<span class="hide_color">站</span>
						<br>
						<br>
						<span class="show_color">相</span>
						<span class="hide_color">信</span>
						<span class="hide_color">人</span>
						<span class="hide_color">生</span>
						<span class="show_color">是</span>
						<span class="hide_color">一</span>
						<span class="hide_color">場</span>
						<span class="hide_color">驚</span>
						<span class="show_color">險</span>
						<span class="hide_color">刺</span>
						<span class="hide_color">激</span>
						<span class="hide_color">的</span>
						<span class="show_color">旅</span>
						<span class="hide_color">途</span>
						<br>
						<span class="hide_color">在</span>
						<span class="show_color">藝</span>
						<span class="hide_color">術</span>
						<span class="hide_color">與</span>
						<span class="hide_color">邏</span>
						<span class="show_color">輯</span>
						<span class="hide_color">間</span>
						<span class="hide_color">取</span>
						<span class="hide_color">得</span>
						<span class="show_color">平</span>
						<span class="hide_color">衡</span>
						<span class="hide_color">的</span>
						<span class="hide_color">道</span>
						<span class="show_color">路</span>
						<span class="hide_color">上</span>
						<br>
						<span class="hide_color">今</span>
						<span class="show_color">後</span>
						<span class="hide_color">也</span>
						<span class="hide_color">會</span>
						<span class="hide_color">繼</span>
						<span class="show_color">續</span>
						<span class="hide_color">努</span>
						<span class="hide_color">力</span>
					</div>
				</div>
				<div class="view view3">
					<img src="/images/profile2.jpg" alt="profile">
				</div>
				<div class="view view4">
					<div class="content html">
						<section>
							<h2>HTML</h2>
							<div class="hide_n_show">
								<p>語意化標籤</p>
								<p>Emmet 使用</p>
							</div>
						</section>
					</div>
				</div>
				<div class="view view5">
					<div class="content canvas">
						<section>
							<h2>Canvas</h2>
							<div class="hide_n_show">
								<p>keyframes</p>
								<p>global composite operation</p>
								<p>transform matrix</p>
							</div>
						</section>
					</div>
				</div>
				<div class="view view6">view6 </div>
				<div class="view view7">view7 </div>
				<div class="view view8">view8 </div>
				<div class="view view9">view9 </div>
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
					<img src="/images/profile1.jpg" alt="profile">
					<div class="content">
						<span class="hide_color">我</span>
						<span class="show_color">是</span>
						<span class="hide_color name_style">鍾</span>
						<span class="hide_color name_style">維</span>
						<span class="hide_color name_style">聖</span>
						<br>
						<span class="hide_color">致</span>
						<span class="hide_color">力</span>
						<span class="hide_color">於</span>
						<span class="show_color">做</span>
						<span class="hide_color">出</span>
						<span class="hide_color">令</span>
						<span class="hide_color">人</span>
						<span class="show_color">驚</span>
						<span class="hide_color">豔</span>
						<span class="hide_color">的</span>
						<span class="hide_color">網</span>
						<span class="show_color">站</span>
						<br>
						<br>
						<span class="hide_color">相</span>
						<span class="show_color">信</span>
						<span class="hide_color">人</span>
						<span class="hide_color">生</span>
						<span class="hide_color">是</span>
						<span class="show_color">一</span>
						<span class="hide_color">場</span>
						<span class="hide_color">驚</span>
						<span class="hide_color">險</span>
						<span class="show_color">刺</span>
						<span class="hide_color">激</span>
						<span class="hide_color">的</span>
						<span class="hide_color">旅</span>
						<span class="show_color">途</span>
						<br>
						<span class="hide_color">在</span>
						<span class="hide_color">藝</span>
						<span class="show_color">術</span>
						<span class="hide_color">與</span>
						<span class="hide_color">邏</span>
						<span class="hide_color">輯</span>
						<span class="show_color">間</span>
						<span class="hide_color">取</span>
						<span class="hide_color">得</span>
						<span class="hide_color">平</span>
						<span class="show_color">衡</span>
						<span class="hide_color">的</span>
						<span class="hide_color">道</span>
						<span class="hide_color">路</span>
						<span class="show_color">上</span>
						<br>
						<span class="hide_color">今</span>
						<span class="hide_color">後</span>
						<span class="show_color">也</span>
						<span class="hide_color">會</span>
						<span class="hide_color">繼</span>
						<span class="hide_color">續</span>
						<span class="show_color">努</span>
						<span class="hide_color">力</span>
					</div>
				</div>
				<div class="view view3">
					<img src="/images/timeline.png" alt="timeline">
				</div>
				<div class="view view4">
					<div class="content css">
						<section>
							<h2>CSS</h2>
							<div class="hide_n_show">
								<p>跨瀏覽器處理</p>
								<p>偽元素</p>
								<p>複合選擇器</p>
								<p>SCSS with compass</p>
							</div>
						</section>
					</div>
				</div>
				<div class="view view5">
					<div class="content svg">
						<section>
							<h2>SVG</h2>
							<div class="hide_n_show">
								<p>標籤 &#060;path&#062; &#060;def&#062; 使用 </p>
								<p>視域Viewport 概念</p>
							</div>
						</section>
					</div>
				</div>
				<div class="view view6">view6 </div>
				<div class="view view7">view7 </div>
				<div class="view view8">view8 </div>
				<div class="view view9">view9 </div>
			</div>
			<div class="layer layer3">
				<op3></op3>
				<div class="view view2">
					<intro3></intro3>
				</div>
				<div class="view view3">
					<info1></info1>
				</div>
				<div class="view view4">
					<div class="content js">
						<section>
							<h2>Javascript</h2>
							<div class="hide_n_show">
								<p>熟稔原生操作物件語法</p>
								<p>非同步的事件呼叫</p>
								<p>prototyping</p>
							</div>
						</section>
					</div>
				</div>
				<div class="view view5">
					<div class="content vue">
						<section>
							<h2>Vue</h2>
							<div class="hide_n_show">
								<p>Data binding</p>
								<p>Component 的使用</p>
							</div>
						</section>
					</div>
				</div>
				<div class="view view6">view6 </div>
				<div class="view view7">view7 </div>
				<div class="view view8">view8 </div>
				<div class="view view9">view9 </div>
			</div>
			<div class="layer layer4">
				<op4></op4>
				<div class="view view2">
					<intro4></intro4>
				</div>
				<div class="view view3">
					<info2></info2>
				</div>
				<div class="view view4">
					<div class="content skill">
						<section>
							<h1>Skill 技能欄</h1>
						</section>
					</div>
				</div>
				<div class="view view5">
					<div class="content nuxt">
						<section>
							<h2>NUXT</h2>
							<div class="hide_n_show">
								<p>前後端分離</p>
								<p>Single Page Application</p>
								<p>Server Side Rendering</p>
							</div>
						</section>
					</div>
				</div>
				<div class="view view6">view6 </div>
				<div class="view view7">view7 </div>
				<div class="view view8">view8 </div>
				<div class="view view9">view9 </div>
			</div>
		</div>
	</div>
</div>
</template>
<style></style>
<script>
	import op1 from '@/components/op/op1.vue';
	import op2 from '@/components/op/op2.vue';
	import op3 from '@/components/op/op3.vue';
	import op4 from '@/components/op/op4.vue';
	import intro1 from '@/components/intro/intro1';
	import intro2 from '@/components/intro/intro2';
	import intro3 from '@/components/intro/intro3';
	import intro4 from '@/components/intro/intro4';
	import info1 from '@/components/info/info1';
	import info2 from '@/components/info/info2';
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
		},
		components: {
			op1,
			op2,
			op3,
			op4,
			intro1,
			intro2,
			intro3,
			intro4,
			info1,
			info2
		}
	}
</script>