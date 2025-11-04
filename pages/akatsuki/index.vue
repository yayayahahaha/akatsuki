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
			<button class="btn1 btn"><span>welcome</span></button>
			<button class="btn2 btn"><span>我是誰</span></button>
			<button class="btn3 btn"><span>大事記</span></button>
			<button class="btn4 btn"><span>技能欄I</span></button>
			<button class="btn5 btn"><span>技能欄II</span></button>
			<button class="btn6 btn"><span>reason why</span></button>
			<button class="btn7 btn"><span>give n' take</span></button>
			<button class="btn8 btn"><span>hope</span></button>
			<button class="btn9 btn"><span>more info</span></button>
		</div>
		<div class="perspectiveView">
			<div class="layer layer1">
				<op1></op1>
				<div class="view view2">
					<intro1></intro1>
				</div>
				<div class="view view3">
					<img src="/images/profile2.jpg" alt="profile">
				</div>
				<div class="view view4">
					<div class="content shadow-text html">
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
					<div class="content shadow-text canvas">
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
				<div class="view view6">
					<h1 class="reason_content shadow-text">為什麼我想加入Akatsuki?</h1>
					<div class="circle top">
						<div class="circle_middle top">
							<div class="circle_content right"></div>
							<div class="content">「能否讓自己也感動」</div>
						</div>
					</div>
				</div>
				<div class="view view7">
					<div class="background"></div>
				</div>
				<div class="view view8">

				</div>
				<div class="view view9">
					
				</div>
			</div>
			<div class="layer layer2">
				<op2></op2>
				<div class="view view2">
					<img src="/images/profile1.jpg" alt="profile">
					<intro2></intro2>
				</div>
				<div class="view view3">
					<img src="/images/timeline.png" alt="timeline">
				</div>
				<div class="view view4">
					<div class="content shadow-text css">
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
					<div class="content shadow-text svg">
						<section>
							<h2>SVG</h2>
							<div class="hide_n_show">
								<p>標籤 path, def 使用 </p>
								<p>視域Viewport 概念</p>
							</div>
						</section>
					</div>
				</div>
				<div class="view view6">
					<div class="circle right">
						<div class="circle_middle right">
							<div class="circle_content bottom"></div>
							<div class="content">遊戲的力量，好比放大鏡。對事物的正反兩面，都具備了放大的可能。</div>
						</div>
					</div>
				</div>
				<div class="view view7">
					<section class="toM">
						<h1>覺得 Akatsuki 可以帶給自己什麼?</h1>
						<br>
						<p>透過早上的Game Intro, 可以讓我知道最新的遊戲相關新知!</p>
						<p>常態性地處在日英語環境，一 定 會 進 步 </p>
						<p>非常舒適的工作氛圍，鞋子的部分讓我好驚訝</p>
						<br>
						<p>他國風格的前端技術風格學習和心法</p>
						<p>快速開發下，前端技術的磨練與進步</p>
						<br>
						<p>想去上班的動力，和</p>
						<p>透過娛樂改變世界的機會</p>
					</section>
				</div>
				<div class="view view8">

				</div>
				<div class="view view9">
					
				</div>
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
					<div class="content shadow-text js">
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
					<div class="content shadow-text vue">
						<section>
							<h2>Vue</h2>
							<div class="hide_n_show">
								<p>Data binding</p>
								<p>Component 的使用</p>
							</div>
						</section>
					</div>
				</div>
				<div class="view view6">
					<div class="circle bottom">
						<div class="circle_middle bottom">
							<div class="circle_content left"></div>
							<div class="content">認真的，開心地過著每一天。我們認為那才是人生的幸福狀態。</div>
						</div>
					</div>
				</div>
				<div class="view view7">
					<section class="toC">
						<h1>覺得自己可以帶給Akatsuki 什麼?</h1>
						<br>
						<p>css 切版與渲染資料是小case</p>
						<p>js 小工具開發與除錯已是常態</p>
						<br>
						<p>網頁前端工程的特效與樣式開發</p>
						<p>各類遊戲官網的協力開發與製作</p>
						<p>前端渲染引擎的協作與新技術研究</p>
						<br>
						<p>扣掉技術</p>
						<p>自認是個很好相處的人</p>
						<p>所以可以帶給Akatsuki 一個很好相處的合作夥伴 :D</p>
					</section>
				</div>
				<div class="view view8">
					<div class="content">
						<p>"如果是工程師，大部分是獨立作業沒有錯" - Jerry Tu</p>
						<p>不知道為什麼，看到這句話的時候笑了</p>
						<p>我很喜歡Akatsuki 給人的感覺和用遊戲改變世界的理念</p>
						<p>也很喜歡儘管在輕鬆的環境下仍能保有專業的那份從容</p>
						<br>
						<p class="i_wanna_be">我想成為那種人</p>
						<br>
						<p>希望自己可以驕傲地說我是Akatsuki 的一份子</p>
						<p>正和一群來自世界各地的人們起改變世界</p>
						<p>希望可以給我一個機會，謝謝</p>
					</div>
				</div>
				<div class="view view9">
				</div>
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
					<div class="content shadow-text skill">
						<section>
							<h1>Skill 技能欄</h1>
						</section>
					</div>
				</div>
				<div class="view view5">
					<div class="content shadow-text nuxt">
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
				<div class="view view6">
					<div class="circle left">
						<div class="circle_middle left">
							<div class="circle_content top"></div>
							<div class="content">遊戲在娛樂方面，以及遊戲在服務方面所蘊含的無限可能</div>
						</div>
					</div>
				</div>
				<div class="view view7">
					
				</div>
				<div class="view view8">

				</div>
				<div class="view view9">
					<div class="content">
						<h1>技術使用 and 相關連結</h1>
						<p>純css 的parallax 效果展現 </p>
						<p>各式css 樣式效果展現</p>
						<p>隨機文字背景與重點文字顏色變化( a k a t s u k i )</p>
						<p>vue 的component 技術展現</p>
						<p>nuxt 的渲染技術呈現</p>
						<br>
						<hr>
						<br>
						<section>
							<p>此頁面的github: <a href="https://github.com/yayayahahaha/nuxt">https://github.com/yayayahahaha/nuxt</a></p>
							<p>個人履歷: <a href="https://www.cakeresume.com/flyc">CakeResume</a></p>
							<p>個人作品集網站: <a href="https://yayayahahaha.github.io/wonder/">Wonder</a></p>
							<p>Codepen: <a href="https://codepen.io/FlyC/pens/popular/">Codepen</a></p>
						</section>
					</div>
				</div>
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