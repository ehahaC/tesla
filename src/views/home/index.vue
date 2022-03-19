<template>
	<div class="model" v-for="(item, index) in models" :key="index">
		<img
			:src="item.backgroupImage"
			alt=""
		/>

		<h3 class="text-center text-h3">{{ item.name }}</h3>

		<p class="q-pt-sm q-pb-md subscribe">
			<router-link to="#">预约试驾</router-link>
		</p>

		<section class="bottom" :class="{ fixed: false }" :id="`bottomRef${ index }`" :ref="`bottomRef${ index }`">
			<section class="button-group">
				<q-btn color="dark" rounded class="full-width-md">定制我的 {{ 'MODEL 3' }}</q-btn>
				<q-btn color="info" rounded class="text-black full-width-md">了解 {{ 'MODEL 3' }}</q-btn>
			</section>

			<section class="scroll-more-wrap" v-show="index === 0">
				<q-icon :name="matExpandMore" size="md"></q-icon>
			</section>
		</section>
	</div>
</template>

<script setup lang="ts">
	import { matExpandMore } from '@quasar/extras/material-icons'
	import { computed, onMounted, reactive, ref } from 'vue'

	const judgeInViewPort =  (el: any) => {
		// viewPortHeight 兼容所有浏览器写法
		const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight 
		const offsetTop = el.offsetTop
		const scrollTop = document.documentElement.scrollTop
		const top = offsetTop - scrollTop
		console.log("h", top <= viewPortHeight);
		
		return top <= viewPortHeight
	}

	const models = reactive([
		{
			name: "Model 3",
			backgroupImage: "https://tesla-cdn.thron.cn/delivery/public/image/tesla/56c397b9-a510-4000-8ff3-97197efd9570/bvlatuR/std/2880x1800/homepage-model-3-hero-desktop-cn"
		},
		{
			name: "Model Y",
			backgroupImage: "https://tesla-cdn.thron.cn/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY"
		},
		{
			name: "Model S",
			backgroupImage: "https://tesla-cdn.thron.cn/delivery/public/image/tesla/676da95d-942e-414c-8534-f1832f0d4ced/bvlatuR/std/3296x1798/ms-homepage-desktop"
		},
		{
			name: "Model X",
			backgroupImage: "https://tesla-cdn.thron.cn/delivery/public/image/tesla/58df46a8-26c5-401f-9325-388b2990dcc3/bvlatuR/std/3296x1798/mx-homepage-desktop"
		},
		{
			name: "House",
			backgroupImage: "//tesla-cdn.thron.cn/delivery/public/image/tesla/27d0055c-b0bf-476c-b3aa-ec59d314f871/bvlatuR/std/2880x2400/Desktop-SolarPanels"
		},
	])
</script>

<style lang="scss" scoped>
.model {
	text-align: center;
	height: 100vh;
	position: relative;
	overflow: hidden;

	img{
		width: 100%;
		height: 100vh;
		position: absolute;
		// top: calc(0px - var(--header-height));
		top: 0;
		left: 0;
		object-fit: cover;
		z-index: -999;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	h3 {
		margin-top: calc(16vh + 24px);
		margin-bottom: 0;
	}

	.subscribe {
		a {
			line-height: 21px;
			box-shadow: 0 1px 0 0 currentColor;
			transition: box-shadow 0.33s cubic-bezier(0.5, 0, 0, 0.75),
				color 0.33s ease;

			&:hover {
				box-shadow: 0 2px 0 0 currentColor;
				color: #171a20;
			}
		}
	}

	.bottom{
		margin-top: 58vh;
		width: 100%;
		padding: 0 calc(var(--tds-size--1x) * 3);

		.button-group,.scroll-more-wrap{
			// position: fixed;
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
			// left: 0;
			// right: 0;
			// margin: 0 auto;
		}

		.button-group{
			bottom: 110px;
			gap: calc(var(--tds-size--1x) * 2) calc(var(--tds-size--1x) * 3);

			.q-btn{
				padding: var(--button-padding-y) var(--button-padding-x);
				min-width: calc(var(--tds-size--1x) * 32);
				font-size: var(--button-font-size);
				line-height: 1.2;
			}
		}

		.scroll-more-wrap{
			margin-top: 64px;
			bottom: 16px;
		}
	}

	.fixed{
		position: fixed;
	}

	@media screen and (max-width: 599px) {
		.full-width-md{
			width: 100%;
		}
	}
}
</style>
