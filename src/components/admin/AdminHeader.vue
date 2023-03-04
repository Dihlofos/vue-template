<script setup lang="ts">
import { RouteNames } from '@/router';
</script>

<template>
	<div class="header">
		<a-button> hi </a-button>
		<nav>
			<router-link :to="{ name: RouteNames.Home }">Go to website</router-link>
			<a>Сохранить</a>
			<a>Сбросить</a>
		</nav>
	</div>
</template>
