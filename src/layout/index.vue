<template>
	<q-layout view="hHr lpR fFf">
		<q-header class="text-dark">
			<section>
				<router-link to="/" class="left q-pl-md q-pr-sm">
					<svg
						width="120"
						height="24"
						class="tds-icon tds-icon-logo-wordmark tds-site-logo-icon"
						viewBox="0 0 342 35"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M0 .1a9.7 9.7 0 007 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 007-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 006-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 00-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 13.8h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 14.1h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zM308.5 7h26a9.6 9.6 0 007-7h-40a9.6 9.6 0 007 7z"
							fill="currentColor"
						></path>
					</svg>
				</router-link>
			</section>

			<ol class="q-px-sm gt-sm">
				<li v-for="(item, index) in model" :key="index">
					<router-link :to="item.link">
						<span>{{ item.name }}</span>
					</router-link>
				</li>
			</ol>

			<ol class="q-px-sm gt-sm">
				<li v-for="(item, index) in menu" :key="index">
					<router-link :to="item.link">
						<span>{{ item.name }}</span>
					</router-link>
				</li>
			</ol>

			<ol class="q-px-sm lt-md menu-icon">
				<li>
					<router-link to="#">
						<span>导航栏</span>
					</router-link>
				</li>
			</ol>
		</q-header>

		<q-page-container>
			<router-view />
		</q-page-container>
	</q-layout>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

const model = reactive([
	{
		name: "Model S",
		link: "#"
	},
	{
		name: "Model 3",
		link: "#"
	},
	{
		name: "Model X",
		link: "#"
	},
	{
		name: "Model Y",
		link: "#"
	},
	{
		name: "Cybertruck",
		link: "#"
	},
	{
		name: "Powerwall",
		link: "#"
	},
])

const menu = reactive([
	{
		name: "在线商店",
		link: "#"
	},
	{
		name: "账户",
		link: "#"
	},
	{
		name: "导航栏",
		link: "#"
	},
])
</script>

<style lang="scss" scoped>
.q-layout {
	a{
		color: inherit;
		text-decoration: none;
	}

	.q-header {
		padding: 0 32px;
		background-color: transparent;
		height: var(--header-height);
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 14px;
		font-weight: 500;
		position: fixed;
		top: 0;
		left: 0;

		ol{
			display: flex;
			justify-content: center;
			list-style: none;

			li{
				padding: 4px 0px;
				border-radius: 10px;
				transition: background-color 1s;

				a{
					padding: 4px 8px;

					span{
						margin: 0 8px;
					}
				}

				&:hover{
					background-color: #dce2e6;
				}
			}
		}

		.menu-icon{
			li{
				background-color: #dce2e6;
			}
		}
	}

	.q-page-container{
		padding-top: 0px !important;
	}
}
</style>
