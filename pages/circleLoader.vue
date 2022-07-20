<template>
	<v-row class="main-containers">
		<v-col class="text-center">
			<div class="donut"></div>
			<div class="bubble-container">
				<span v-for="i in 200" :key="i" class="bubble-item"></span>
			</div>
		</v-col>
	</v-row>
</template>
<script>
export default {
	name: 'CircleLoader',
	data() {
		return {}
	},
}
</script>
<style lang="scss" scoped>
$myColor:skyblue;
.text-center {
	position: relative;
	min-height: 300px;
	background: #fff;
	filter: contrast(8);
	.donut {
		border: 4px solid rgba(0, 0, 0, 0.1);
		border-top-color: #7983ff;
		border-radius: 50%;
		width: 50px;
		height: 50px;
		animation: donut-spin 1.2s linear infinite;
		margin: 0 auto;
	}
	.bubble-container {
		display: flex;
		flex-wrap: nowrap;
		gap: 5px;
		position: absolute;
		width: 100%;
		height: 100px;
		left: 0;
		bottom: 0;
    background: $myColor;
		&:before {
			content: '';
			position: absolute;
			top: -300px;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 1;
			backdrop-filter: blur(5px);
		}
		@for $i from 1 to 11 {
			.bubble-item:nth-child(#{$i}) {
				border-radius: 50%;
				position: absolute;
				background-color: $myColor;
				$width: random(100) + px;
				left: #{(random(100)) + '%'};
				top: #{(random(100))}px;
				width: $width;
				height: $width;
				animation: moveToTop
					#{(random(2500) + 1500) /
					1000}s
					ease-in-out -#{random(5000) /
					1000}s
					infinite;
			}
		}
	}
}
@keyframes moveToTop {
	90% {
		opacity: 1;
	}
	100% {
		opacity: 0.08;
		transform: translate(-50%, -180px) scale(0.3);
	}
}
@keyframes donut-spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>
