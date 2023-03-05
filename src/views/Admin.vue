<script setup lang="ts">
import AdminHeader from '@/components/admin/AdminHeader.vue';
import useMainPageStore from '@/stores/main';

const mainPageStore = useMainPageStore();

mainPageStore.fetchLandingData();
</script>

<template>
	<div class="admin-panel">
		<AdminHeader />
		<main class="admin-panel__main">Form is here</main>
		<footer class="admin-panel__footer">
			<a
				href="https://t.me/junepaik"
				target="_blank"
				>@junepaik</a
			>
			<a
				href="https://github.com/Dihlofos/vue-template"
				target="_blank"
				>https://github.com/Dihlofos/vue-template</a
			>
		</footer>
	</div>
</template>

<style lang="scss">
.admin-panel {
	padding-top: 81px;
	height: 100%;
	display: flex;
	flex-direction: column;

	&__main {
		flex-grow: 1;
		padding: 2rem;
	}

	&__footer {
		background-color: $darkblue;
		padding: 2rem;
		display: flex;
		justify-content: space-between;

		a {
			color: $white;

			&:hover {
				color: $pink;
			}
		}
	}
}
</style>
