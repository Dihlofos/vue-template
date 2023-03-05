<script setup lang="ts">
import router, { RouteNames } from '@/router';
import useMainPageStore from '@/stores/main';

import { ArrowLeftOutlined } from '@ant-design/icons-vue';
import { computed } from 'vue';

const mainPageStore = useMainPageStore();

const backText = computed((): string => `Вернуться к сайту ${mainPageStore.pageName}`);

function goToMain() {
	router.push({ name: RouteNames.Home });
}

function save() {
	console.log('go to save'); // TODO After testing site done, don't forget transfer to template.
}

function clear() {
	console.log('go to clear'); // TODO After testing site done, don't forget transfer to template.
}
</script>

<template>
	<div class="header">
		<div class="header__wrapper">
			<a-button
				class="header__back-button"
				type="primary"
				size="large"
				@click="goToMain"
			>
				<template #icon><arrow-left-outlined /></template>
				{{ backText }}
			</a-button>
			<h1 class="header__title">Редактирование контента</h1>
			<div class="header__action-buttons">
				<a-button
					class="header__back-button"
					type="primary"
					size="large"
					@click="save"
				>
					Сохранить
				</a-button>
				<a-button
					class="header__back-button"
					size="large"
					@click="clear"
				>
					Сбросить
				</a-button>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.header {
	position: fixed;
	width: 100%;
	padding: 2rem;
	top: 0;
	left: 0;
	background-color: $darkblue;
	color: white;

	&__wrapper {
		display: flex;
		align-items: center;
		width: 100%;
	}

	&__title {
		color: $white;
		flex-grow: 1;
		text-align: center;
		margin: 0;
		font-size: 2.6rem;
	}

	&__action-buttons {
		display: flex;
		gap: 2rem;
	}
}
</style>
