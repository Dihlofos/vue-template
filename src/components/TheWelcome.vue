<script setup lang="ts">
import useMainPageStore from '@/stores/main';

const mainPageStore = useMainPageStore();

mainPageStore.fetchLandingData();
</script>

<template>hello world</template>
