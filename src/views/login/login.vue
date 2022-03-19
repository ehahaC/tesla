<template>
	<q-layout>
		<Header />

		<q-page-container>
			<div class="form-container">
				<h1>登录</h1>

				<q-form
					@submit="onSubmit"
					@reset="onReset"
					class="q-gutter-md q-pt-md"
				>
					<section class="form-item">
						<label class="form-item-label">
							电子邮箱地址
							<q-icon :name="matInfo" size="sm" color="blue-14">
								<q-tooltip :content-style="{ color: '#000000', backgroundColor: '#FFFFFF' }">
									如果您不再使用与 Tesla
									账户关联的电子邮箱，请登录您的 Tesla
									账户后，前往账户设置更新电子邮箱地址。
								</q-tooltip>
							</q-icon>
						</label>

						<q-input
							rounded
							filled
							v-model="form.email"
							lazy-rules
							:rules="[(val) => (val && val.length > 0) || '']"
						/>
					</section>

					<section class="form-item">
						<q-input
							rounded
							filled
							v-model="form.password"
							lazy-rules
							:rules="[]"
						/>
					</section>
				</q-form>
			</div>
		</q-page-container>
	</q-layout>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import Header from "./components/header.vue";
import { matInfo } from "@quasar/extras/material-icons";

const form = reactive({});

const onSubmit = () => {};
const onReset = () => {};
</script>

<style lang="scss" scoped>
.q-page-container {
	.form-container {
		width: 380px;
		padding: 0 24px;
		margin: 0 auto;

		h1 {
			font-size: var(--h1-font-size);
			line-height: var(--h1-line-height);
			font-weight: 500;
			margin: calc(var(--tds-size--1x) * 4) 0 var(--tds-size--1x) 0;
		}

		.q-form{
			.form-item{
				display: flex;
				flex-direction: column;
				row-gap: 4px;

				&-label{
					padding: 0 8px 0 20px;
				}
			}
		}
	}
}
</style>
