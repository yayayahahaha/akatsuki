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
			</div>
			<div class="perspectiveView">
			    <div class="layer layer1">
			        <div class="view view1">                    
			            Scroll Down
			        </div>
			        <div class="view view2">
			            <div class="content">I couldn't take it couldn't stand another minute couldn't bear another day without you in it all of the joy that I had known for my life was stripped away from me the minute that you died to have you in my life was all I ever wanted but now without you I'm a soul forever haunted can't help but feel that I had taken you for granted no way in hell that I can ever comprehend this I wasn't dreaming when they told me you were gone I was wide awake and feeling that they had to be wrong how could you leave me when you swore that you would stay now i'm trapped inside a nightmare every single fucking day it's like a movie but there's not a happy ending every scene fades black and there's no pretending this little fairy tale doesn't seem to end well theres no knight in shining armor who will wake me from the spell I know you didn't plan this you tried to do what's right but in the middle of this madness i'm the one you left to win this fight red like roses fills my head with dreams and finds me always closer to the emptiness and sadness that has come to take the place of you I know you're broken down by anger and by sadness you feel I left you in a world that's full of madness wish I could talk to you if only for a minute make you understand the reasons why I did it I wanna tell you that you're all that ever mattered want you to know that for eternity i'm shattered I tried so hard just to protect you but I failed to and in a prison of abandonment i've jailed you I never planned that I would leave you there alone I was sure that I would see you when I made it back home and all the times I swore that it would be okay now i'm nothing but a liar and you're thrown into the fray this bedtime story ends with misery ever after the pages are torn and there's no final chapter I didn't have a choice I did what I had to do I made a sacrifice but forced a bigger sacrifice on you I know you've lived a nightmare I caused you so much pain but baby please don't do what I did I don't want you to waste your life in vain red like roses fills my head with dreams and finds me always closer to the emptiness and sadness that has come to take the place of you you're not the only one who needed me I thought you understood you were the one I needed and you left me as I always feared you would would I change it if I could? it doesn't matter how the petals scatter now every nightmare just discloses it's your blood that's red like roses and no matter what I do nothing ever takes the place of you red like roses fills my head with dreams and finds me always closer to the emptiness and sadness that has come to take the place of you
			            </div>
			        </div>

			        <div class="view view4">
			            <div class="draw">
			            </div>
			        </div>
			        <div class="view view5"> </div>
			    </div>
			    <div class="layer layer2">
			        <div class="view view1">                    
			        </div>
			        <div class="view view2">
			            <div class="content">I couldn't take it couldn't stand another minute couldn't bear another day without you in it all of the joy that I had known for my life was stripped away from me the minute that you died to have you in my life was all I ever wanted but now without you I'm a soul forever haunted can't help but feel that I had taken you for granted no way in hell that I can ever comprehend this I wasn't dreaming when they told me you were gone I was wide awake and feeling that they had to be wrong how could you leave me when you swore that you would stay now i'm trapped inside a nightmare every single fucking day it's like a movie but there's not a happy ending every scene fades black and there's no pretending this little fairy tale doesn't seem to end well theres no knight in shining armor who will wake me from the spell I know you didn't plan this you tried to do what's right but in the middle of this madness i'm the one you left to win this fight red like roses fills my head with dreams and finds me always closer to the emptiness and sadness that has come to take the place of you I know you're broken down by anger and by sadness you feel I left you in a world that's full of madness wish I could talk to you if only for a minute make you understand the reasons why I did it I wanna tell you that you're all that ever mattered want you to know that for eternity i'm shattered I tried so hard just to protect you but I failed to and in a prison of abandonment i've jailed you I never planned that I would leave you there alone I was sure that I would see you when I made it back home and all the times I swore that it would be okay now i'm nothing but a liar and you're thrown into the fray this bedtime story ends with misery ever after the pages are torn and there's no final chapter I didn't have a choice I did what I had to do I made a sacrifice but forced a bigger sacrifice on you I know you've lived a nightmare I caused you so much pain but baby please don't do what I did I don't want you to waste your life in vain red like roses fills my head with dreams and finds me always closer to the emptiness and sadness that has come to take the place of you you're not the only one who needed me I thought you understood you were the one I needed and you left me as I always feared you would would I change it if I could? it doesn't matter how the petals scatter now every nightmare just discloses it's your blood that's red like roses and no matter what I do nothing ever takes the place of you red like roses fills my head with dreams and finds me always closer to the emptiness and sadness that has come to take the place of you
			            </div>
			        </div>

			        <div class="view view4">
			            <div class="draw">
			            </div>
			        </div>
			        <div class="view view5"> </div>
			    </div>
			    <div class="layer layer3">
			        <div class="view view1">                    
			        </div>
			        <div class="view view2">
			            <div class="content">I couldn't take it couldn't stand another minute couldn't bear another day without you in it all of the joy that I had known for my life was stripped away from me the minute that you died to have you in my life was all I ever wanted but now without you I'm a soul forever haunted can't help but feel that I had taken you for granted no way in hell that I can ever comprehend this I wasn't dreaming when they told me you were gone I was wide awake and feeling that they had to be wrong how could you leave me when you swore that you would stay now i'm trapped inside a nightmare every single fucking day it's like a movie but there's not a happy ending every scene fades black and there's no pretending this little fairy tale doesn't seem to end well theres no knight in shining armor who will wake me from the spell I know you didn't plan this you tried to do what's right but in the middle of this madness i'm the one you left to win this fight red like roses fills my head with dreams and finds me always closer to the emptiness and sadness that has come to take the place of you I know you're broken down by anger and by sadness you feel I left you in a world that's full of madness wish I could talk to you if only for a minute make you understand the reasons why I did it I wanna tell you that you're all that ever mattered want you to know that for eternity i'm shattered I tried so hard just to protect you but I failed to and in a prison of abandonment i've jailed you I never planned that I would leave you there alone I was sure that I would see you when I made it back home and all the times I swore that it would be okay now i'm nothing but a liar and you're thrown into the fray this bedtime story ends with misery ever after the pages are torn and there's no final chapter I didn't have a choice I did what I had to do I made a sacrifice but forced a bigger sacrifice on you I know you've lived a nightmare I caused you so much pain but baby please don't do what I did I don't want you to waste your life in vain red like roses fills my head with dreams and finds me always closer to the emptiness and sadness that has come to take the place of you you're not the only one who needed me I thought you understood you were the one I needed and you left me as I always feared you would would I change it if I could? it doesn't matter how the petals scatter now every nightmare just discloses it's your blood that's red like roses and no matter what I do nothing ever takes the place of you red like roses fills my head with dreams and finds me always closer to the emptiness and sadness that has come to take the place of you
			            </div>
			        </div>

			        <div class="view view4">
			            <div class="draw">
			            </div>
			        </div>
			        <div class="view view5"> </div>
			    </div>
			    <div class="layer layer4">
			        <div class="view view1">                    
			        </div>
			        <div class="view view2">
			            <div class="content">I couldn't take it couldn't stand another minute couldn't bear another day without you in it all of the joy that I had known for my life was stripped away from me the minute that you died to have you in my life was all I ever wanted but now without you I'm a soul forever haunted can't help but feel that I had taken you for granted no way in hell that I can ever comprehend this I wasn't dreaming when they told me you were gone I was wide awake and feeling that they had to be wrong how could you leave me when you swore that you would stay now i'm trapped inside a nightmare every single fucking day it's like a movie but there's not a happy ending every scene fades black and there's no pretending this little fairy tale doesn't seem to end well theres no knight in shining armor who will wake me from the spell I know you didn't plan this you tried to do what's right but in the middle of this madness i'm the one you left to win this fight red like roses fills my head with dreams and finds me always closer to the emptiness and sadness that has come to take the place of you I know you're broken down by anger and by sadness you feel I left you in a world that's full of madness wish I could talk to you if only for a minute make you understand the reasons why I did it I wanna tell you that you're all that ever mattered want you to know that for eternity i'm shattered I tried so hard just to protect you but I failed to and in a prison of abandonment i've jailed you I never planned that I would leave you there alone I was sure that I would see you when I made it back home and all the times I swore that it would be okay now i'm nothing but a liar and you're thrown into the fray this bedtime story ends with misery ever after the pages are torn and there's no final chapter I didn't have a choice I did what I had to do I made a sacrifice but forced a bigger sacrifice on you I know you've lived a nightmare I caused you so much pain but baby please don't do what I did I don't want you to waste your life in vain red like roses fills my head with dreams and finds me always closer to the emptiness and sadness that has come to take the place of you you're not the only one who needed me I thought you understood you were the one I needed and you left me as I always feared you would would I change it if I could? it doesn't matter how the petals scatter now every nightmare just discloses it's your blood that's red like roses and no matter what I do nothing ever takes the place of you red like roses fills my head with dreams and finds me always closer to the emptiness and sadness that has come to take the place of you
			            </div>
			        </div>

			        <div class="view view4">
			            <div class="draw">
			            </div>
			        </div>
			        <div class="view view5"> </div>
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