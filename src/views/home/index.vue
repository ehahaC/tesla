<template>
	<div class="model" v-for="item in 4" :key="item">
		<img
			src="https://tesla-cdn.thron.cn/delivery/public/image/tesla/56c397b9-a510-4000-8ff3-97197efd9570/bvlatuR/std/2880x1800/homepage-model-3-hero-desktop-cn"
			alt=""
		/>

		<h3 class="text-center text-h3">Model 3</h3>

		<p class="q-pt-sm q-pb-md subscribe">
			<router-link to="#">预约试驾</router-link>
		</p>

		<section class="button-group">
			<q-btn color="dark" rounded class="full-width-md">定制我的 {{ 'MODEL 3' }}</q-btn>
			<q-btn color="info" rounded class="text-black full-width-md">了解 {{ 'MODEL 3' }}</q-btn>
		</section>

		<section class="scroll-more-wrap">
			<q-icon :name="matExpandMore" size="md"></q-icon>
		</section>
	</div>
</template>

<script setup lang="ts">
	import { matExpandMore } from '@quasar/extras/material-icons'
</script>

<style lang="scss" scoped>
.model {
	text-align: center;
	height: 100vh;
	position: relative;
	border: 1px solid transparent;

	img{
		width: 100%;
		height: 100vh;
		position: absolute;
		top: calc(0px - var(--header-height));
		left: 0;
		object-fit: cover;
		z-index: -999;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	h3 {
		margin-top: calc(8vh + 24px);
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

	.button-group,.scroll-more-wrap{
		position: fixed;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		width: 100%;
		padding: 0 calc(var(--tds-size--1x) * 3);
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
		bottom: 16px;
	}

	@media screen and (max-width: 599px) {
		.full-width-md{
			width: 100%;
		}
	}
}
</style>
