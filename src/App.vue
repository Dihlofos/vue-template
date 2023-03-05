<script setup lang="ts">
import { RouterView } from 'vue-router';

import '@/styles/index.scss';
</script>

<template>
	<RouterView />
</template>

<style lang="scss">
#app {
	height: 100%;
	flex-grow: 1;
	display: flex;
	flex-direction: column;
}
</style>
